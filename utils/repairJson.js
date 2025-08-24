const fs = require('fs');
const path = require('path');

const repairAndSplitJsonFiles = () => {
    // We will target the specific files that are known to be problematic first.
    const problematicFiles = [
        "workflows/Premium Automations/AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json",
        "workflows/Premium Automations/AI_Research_RAG_and_Data_Analysis/Recipe Recommendations with Qdrant and Mistral.json",
        "workflows/Premium Automations/AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json",
        "workflows/Premium Automations/Airtable/AI Agent to chat with Airtable and analyze data.json",
        "workflows/Premium Automations/Notion/Automate Competitor Research with Exa.ai, Notion and AI Agents.json",
        "workflows/Premium Automations/OpenAI_and_LLMs/AI-Driven Lead Management and Inquiry Automation with ERPNext & n8n.json",
        "workflows/Premium Automations/OpenAI_and_LLMs/Lemlist & GPT-3 Supercharge Your Sales Workflows.json",
        "workflows/Premium Automations/PDF_and_Document_Processing/Parse PDF with LlamaParse and save to Airtable.json",
        "workflows/Premium Automations/Telegram/Detect toxic language in Telegram messages.json"
    ];

    let filesRepaired = 0;
    let newFilesCreated = 0;

    problematicFiles.forEach(filePath => {
        const fullPath = path.join(__dirname, '..', filePath);
        if (fs.existsSync(fullPath)) {
            try {
                let content = fs.readFileSync(fullPath, 'utf8').trim();
                // Attempt to fix concatenated JSON by splitting on the boundary
                const jsonObjects = content.replace(/}\s*{/g, '}\n---JSON-BOUNDARY---\n{').split('\n---JSON-BOUNDARY---\n');

                if (jsonObjects.length > 1) {
                    console.log(`Found ${jsonObjects.length} JSON objects in ${filePath}. Splitting file...`);
                    const baseName = path.parse(filePath).name;
                    const dir = path.dirname(filePath);

                    jsonObjects.forEach((jsonString, index) => {
                        try {
                            JSON.parse(jsonString); // Validate that it's a valid JSON object
                            const newFileName = `${baseName}_part${index + 1}.json`;
                            fs.writeFileSync(path.join(dir, newFileName), jsonString);
                            newFilesCreated++;
                        } catch (e) {
                            console.error(`  - Could not parse and save part ${index + 1} of ${filePath}: ${e.message}`);
                        }
                    });

                    // Remove the original corrupted file
                    fs.unlinkSync(fullPath);
                    filesRepaired++;
                }
            } catch (e) {
                console.error(`Error processing file ${filePath}: ${e.message}`);
            }
        } else {
            console.warn(`File not found, skipping: ${filePath}`);
        }
    });

    console.log(`\n--- JSON Repair Complete ---`);
    console.log(`Files Repaired: ${filesRepaired}`);
    console.log(`New Files Created: ${newFilesCreated}`);
};

repairAndSplitJsonFiles();

