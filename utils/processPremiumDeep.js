const fs = require('fs');
const path = require('path');

const premiumDir = path.join(__dirname, '..', 'workflows', 'Premium Automations');
const freeWorkflowsDir = path.join(__dirname, '..', 'workflows');

const getFreeFileSet = () => {
    const fileSet = new Set();
    const categories = fs.readdirSync(freeWorkflowsDir).filter(file => 
        fs.statSync(path.join(freeWorkflowsDir, file)).isDirectory() && file !== 'Premium Automations'
    );
    categories.forEach(category => {
        fs.readdirSync(path.join(freeWorkflowsDir, category)).forEach(file => {
            fileSet.add(path.parse(file).name);
        });
    });
    return fileSet;
};

const processPremiumDeep = () => {
    if (!fs.existsSync(premiumDir)) {
        console.error('Premium Automations directory not found!');
        return;
    }

    let initialCount = 0;
    let duplicatesRemoved = 0;
    const catalog = [];
    const freeFiles = getFreeFileSet();

    const premiumCategories = fs.readdirSync(premiumDir).filter(file => 
        fs.statSync(path.join(premiumDir, file)).isDirectory()
    );

    // First pass: count initial files and remove duplicates
    premiumCategories.forEach(category => {
        const categoryPath = path.join(premiumDir, category);
        const files = fs.readdirSync(categoryPath);
        files.forEach(file => {
             if (file.endsWith('.json')) {
                initialCount++;
                const baseName = path.parse(file).name;
                if (freeFiles.has(baseName)) {
                    console.log(`Removing duplicate: ${category}/${file}`);
                    fs.unlinkSync(path.join(categoryPath, file));
                    duplicatesRemoved++;
                }
            }
        });
    });

    let readmesCreated = 0;
    // Second pass: catalog and generate readmes for remaining unique files
    premiumCategories.forEach(category => {
        const categoryPath = path.join(premiumDir, category);
        fs.readdirSync(categoryPath).forEach(file => {
            if (file.endsWith('.json')) {
                const filePath = path.join(categoryPath, file);
                const stat = fs.statSync(filePath);
                const title = path.parse(file).name.replace(/[-_]/g, ' ');
                
                const item = {
                    id: `${category}-${path.parse(file).name}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    path: `workflows/Premium Automations/${category}/${file}`,
                    title: title,
                    type: 'workflow',
                    tags: [category],
                    size_bytes: stat.size
                };
                catalog.push(item);
                
                // Generate README
                const readmePath = path.join(categoryPath, `${path.parse(file).name}.md`);
                //if (!fs.existsSync(readmePath)) { // Overwrite existing generic ones too
                    const readmeTitle = item.title.replace(/\b\w/g, char => char.toUpperCase());
                    const description = `This premium workflow provides a sophisticated, production-ready solution for "${readmeTitle}". It is designed for professional use, offering advanced logic and integration capabilities to solve complex business challenges and deliver significant value.`;
                    const useCase = `This workflow is ideal for businesses looking to implement advanced automation for ${item.tags[0]}. It can be used to streamline critical operations, enhance data processing pipelines, or create intelligent AI-driven agents.`;
                    const content = `# ${readmeTitle}\n\n## Description\n${description}\n\n## Business Use Case\n${useCase}\n`;
                    fs.writeFileSync(readmePath, content);
                    readmesCreated++;
                //}
            }
        });
    });

    const finalCount = catalog.length;
    fs.writeFileSync(path.join(premiumDir, '.count.json'), JSON.stringify({ initial_count: initialCount, duplicates_removed: duplicatesRemoved, final_unique_workflow_count: finalCount }, null, 2));
    fs.writeFileSync(path.join(premiumDir, 'catalog.json'), JSON.stringify(catalog, null, 2));
    
    console.log(`\n--- Premium Content Processing Complete ---`);
    console.log(`Initial Count: ${initialCount}`);
    console.log(`Duplicates Removed: ${duplicatesRemoved}`);
    console.log(`Final Unique Workflow Count: ${finalCount}.`);
    console.log(`Catalog and ${readmesCreated} READMEs generated/updated successfully.`);
};

processPremiumDeep();
