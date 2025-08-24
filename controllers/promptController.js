const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { generateHumanReadableName } = require('../utils/namingUtils');

const promptsDir = path.join(__dirname, '..', 'chatgpt_3k_prompts');

const getPromptsPage = (req, res) => {
    try {
        const allPromptsByCategory = {};
        const categories = fs.readdirSync(promptsDir).filter(file => 
            fs.statSync(path.join(promptsDir, file)).isDirectory()
        );

        categories.forEach(category => {
            const categoryPath = path.join(promptsDir, category);
            allPromptsByCategory[category] = fs.readdirSync(categoryPath)
                .filter(file => file.endsWith('.txt'))
                .map(file => {
                    const humanReadableName = generateHumanReadableName(path.parse(file).name);
                    let synopsis = 'Click to see details.';
                    const readmePath = path.join(categoryPath, file.replace('.txt', '.md'));
                    if (fs.existsSync(readmePath)) {
                        const readmeContent = fs.readFileSync(readmePath, 'utf8');
                        const descriptionMatch = readmeContent.match(/## Description\n\n(.*?)\n\n/s);
                        if(descriptionMatch && descriptionMatch[1]) {
                            synopsis = descriptionMatch[1].substring(0, 150) + '...';
                        }
                    }
                    return {
                        id: path.parse(file).name,
                        name: humanReadableName,
                        synopsis: synopsis
                    };
                });
        });

        res.render('prompts/index', {
            title: 'ChatGPT Prompts Library',
            prompts: allPromptsByCategory
        });
    } catch (error) {
        console.error('Error loading prompts page:', error);
        res.status(500).send('Error loading prompts.');
    }
};

const getPromptDetailsPage = (req, res) => {
    const { category, promptId } = req.params;
    const readmePath = path.join(promptsDir, category, `${promptId}.md`);
    
    try {
        if (!fs.existsSync(readmePath)) {
            return res.status(404).send('Prompt guide not found.');
        }
        
        const readmeMarkdown = fs.readFileSync(readmePath, 'utf8');
        const readmeHtml = marked(readmeMarkdown);
        const humanReadableName = generateHumanReadableName(promptId);

        res.render('prompts/detail', {
            title: humanReadableName,
            content: readmeHtml,
            category: category,
            promptId: promptId
        });
    } catch (error) {
        console.error(`Error loading prompt detail for ${category}/${promptId}:`, error);
        res.status(500).send('Error loading prompt details.');
    }
};

const downloadPrompt = (req, res) => {
    const { category, promptId } = req.params;
    const filePath = path.join(promptsDir, category, `${promptId}.txt`);
    if (fs.existsSync(filePath)) {
        res.download(filePath, `${promptId}.txt`);
    } else {
        res.status(404).send('Prompt file not found.');
    }
};

module.exports = {
    getPromptsPage,
    getPromptDetailsPage,
    downloadPrompt
};
