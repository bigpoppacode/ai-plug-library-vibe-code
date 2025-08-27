const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { generateHumanReadableName } = require('../utils/namingUtils');

// --- NEW ROBUST WORKFLOW DISCOVERY ENGINE ---
const getWorkflowsFromDir = (dir) => {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const filePath = path.join(dir, file);
            if (fs.existsSync(filePath)) {
                const stat = fs.statSync(filePath);
                if (stat && stat.isDirectory()) {
                    // Check for the old, nested structure
                    const nestedWorkflowJson = path.join(filePath, 'workflow.json');
                    if (fs.existsSync(nestedWorkflowJson)) {
                        results.push(nestedWorkflowJson);
                    } else {
                        // Otherwise, continue recursing
                        results = results.concat(getWorkflowsFromDir(filePath));
                    }
                } else if (file.endsWith('.json')) {
                    // This handles the new, flat structure correctly
                    results.push(filePath);
                }
            }
        });
    } catch (error) {
        console.error(`Could not read directory: ${dir}`, error);
    }
    return results;
};

// --- CONTROLLERS ---
const getWorkflowsPage = (req, res) => {
    try {
        const workflowsDir = path.join(__dirname, '..', 'workflows');
        const allWorkflowPaths = getWorkflowsFromDir(workflowsDir);

        const allWorkflowsByCategory = {};

        allWorkflowPaths.forEach(filePath => {
            const relativePath = path.relative(workflowsDir, filePath);
            const parts = relativePath.split(path.sep);
            
            let category;
            if (parts[0] === 'Premium Automations') {
                category = `Premium / ${parts[1]}`;
            } else {
                category = parts[0];
            }
            if (!category) category = 'General';
            
            if (!allWorkflowsByCategory[category]) {
                allWorkflowsByCategory[category] = [];
            }

            const isOldStructure = path.basename(filePath) === 'workflow.json';
            const workflowIdentifier = isOldStructure ? path.basename(path.dirname(filePath)) : path.parse(filePath).name;
            const humanReadableName = generateHumanReadableName(workflowIdentifier);

            let synopsis = 'Click to see details.';
            const readmePath = isOldStructure ? path.join(path.dirname(filePath), 'README.md') : filePath.replace(/\.json$/, '.md');
            
            if(fs.existsSync(readmePath)) {
                const readmeContent = fs.readFileSync(readmePath, 'utf8');
                const whatItDoesMatch = readmeContent.match(/## 🚀 What It Does\n\n(.*?)\n\n/s) || readmeContent.match(/## Description\n\n(.*?)\n\n/s);
                if(whatItDoesMatch && whatItDoesMatch[1]) {
                    synopsis = whatItDoesMatch[1].replace(/\n/g, ' ').substring(0, 150) + '...';
                }
            }
            
            allWorkflowsByCategory[category].push({ 
                id: Buffer.from(relativePath).toString('base64url'),
                name: humanReadableName, 
                synopsis: synopsis 
            });
        });

        res.render('workflows', { 
            title: 'Complete Workflows Library',
            workflows: allWorkflowsByCategory
        });
    } catch (error) {
        console.error('Error loading workflows page:', error);
        res.status(500).send('Error loading workflows.');
    }
};

const getWorkflowDetailsPage = (req, res) => {
    const workflowId = Buffer.from(req.params.workflowId, 'base64url').toString('ascii');
    const fullPath = path.join(__dirname, '..', 'workflows', workflowId);
    
    try {
        const isOldStructure = fs.statSync(fullPath).isDirectory();
        const jsonPath = isOldStructure ? path.join(fullPath, 'workflow.json') : fullPath;
        const readmePath = isOldStructure ? path.join(fullPath, 'README.md') : fullPath.replace('.json', '.md');
        const workflowIdentifier = path.parse(fullPath).name;

        const readmeMarkdown = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : `# ${generateHumanReadableName(workflowIdentifier)}\n\nDocumentation coming soon.`;
        const readmeHtml = marked(readmeMarkdown);
        const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        const jsonString = JSON.stringify(jsonContent, null, 2);

        const downloadLink = `/download/${req.params.workflowId}`;
        
        const explanations = jsonContent.nodes.map(node => {
            let explanation = `**Node Name:** "${node.name || 'Unnamed Node'}"\n**Node Type:** \`${node.type}\``;
            if (node.parameters) {
                const params = Object.entries(node.parameters).map(([key, value]) => {
                    if (key === 'functionCode' || (typeof value === 'object' && value !== null && Object.keys(value).length > 5)) {
                        return `  - **${key}:** (omitted for brevity)`;
                    }
                    return `  - **${key}:** \`${String(JSON.stringify(value)).substring(0, 150)}\``;
                }).join('\n');
                if(params.length > 0) explanation += `\n**Parameters:**\n${params}`;
            }
            return explanation;
        });

        let mermaidDiagram = 'graph TD;\n';
        const nodeMap = new Map();
        jsonContent.nodes.forEach((node, index) => {
            const nodeId = node.id ? node.id.replace(/-/g, '') : `node${index}`;
            const nodeName = node.name || `Unnamed Node ${index}`;
            nodeMap.set(nodeName, nodeId);
            const sanitizedNodeName = nodeName.replace(/"/g, '#quot;');
            mermaidDiagram += `    ${nodeId}["${sanitizedNodeName}"];\n`;
        });
        
        if (jsonContent.connections) {
            Object.entries(jsonContent.connections).forEach(([sourceNodeName, connection]) => {
                if (connection.main && Array.isArray(connection.main) && connection.main.length > 0) {
                    const sourceId = nodeMap.get(sourceNodeName);
                    if (sourceId && Array.isArray(connection.main[0])) {
                        connection.main[0].forEach(conn => {
                            if (conn && conn.node) {
                                const targetId = nodeMap.get(conn.node);
                                if (targetId) {
                                    mermaidDiagram += `    ${sourceId} --> ${targetId};\n`;
                                }
                            }
                        });
                    }
                }
            });
        }

        res.render('workflow-detail', {
            title: generateHumanReadableName(workflowIdentifier),
            readme: readmeHtml,
            json: jsonString,
            diagram: mermaidDiagram,
            explanations: explanations.map(e => marked(e)),
            downloadLink: downloadLink
        });
    } catch (error) {
        console.error(`Error loading workflow details for ${workflowId}:`, error);
        res.status(500).send('Error loading workflow details.');
    }
};

const downloadWorkflow = (req, res) => {
    const workflowId = Buffer.from(req.params.workflowId, 'base64url').toString('ascii');
    const fullPath = path.join(__dirname, '..', 'workflows', workflowId);
    const isOldStructure = fs.statSync(fullPath).isDirectory();
    const filePath = isOldStructure ? path.join(fullPath, 'workflow.json') : fullPath;
    res.download(filePath, `${path.basename(fullPath)}.json`);
};


module.exports = {
    getHomePage: (req, res) => {
        if (res.locals.user) {
            return res.redirect('/overview');
        }
        res.render('register', { title: 'Register & Access Workflows' });
    },
    getOverviewPage: (req, res) => {
        const overviewPath = path.join(__dirname, '..', 'PROJECT_OVERVIEW.md');
        const content = fs.readFileSync(overviewPath, 'utf8');
        res.render('overview', { title: 'Project Overview', content: marked(content) });
    },
    getStudyGuidePage: (req, res) => {
        const jeopardyPath = path.join(__dirname, '..', 'Jeopardy.md');
        const content = fs.readFileSync(jeopardyPath, 'utf8');
        res.render('study', { title: 'Study Guide', content: marked(content) });
    },
    getCoursesPage: (req, res) => {
        res.render('courses', { title: 'Courses' });
    },
    getWorkflowsPage,
    getWorkflowDetailsPage,
    downloadWorkflow
};
