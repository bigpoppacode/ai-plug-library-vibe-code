const fs = require('fs');
const path = require('path');
const { generateHumanReadableName } = require('./namingUtils');

// --- FULL, CORRECT PROMOTIONAL BLOCK ---
const promotionalBlock = `### ⚠️ Automation Ain’t the Same Anymore

Most builders out here are stuck doing $500 workflows and calling it a win.  
That’s not the move.  

I'm closing $6k–$13k deals by stacking simple automations with lightweight AI...  
and it takes me under 2 hours to build most of them.

#### 🧠 Examples From My Own Playbook:
- 🔁 Turned a recurring invoice workflow into a $6,000 retainer that saved 20 hours/week  
- ⚖️ Built an AI-powered lead gen engine for law firms — they paid $13,000 happily  
- 🚀 Launched an SEO agent that outperforms funded companies — using free OpenAI credits  

**Want to learn how to do the same?**  
Inside [Digital Boss Code](https://bigpoppacode.io/go/dbc), I break it all down:

✅ The exact AI components that 3x your pricing overnight  
✅ My $15k Automation Framework using n8n + LangChain  
✅ Word-for-word scripts to close high-ticket deals  
✅ Real client case studies with templates  
✅ How to stop looking like a tech VA and start moving like a Solution Architect  

🔥 Get started at → [bigpoppacode.io/go/dbc](https://bigpoppacode.io/go/dbc)  
Limited time access, early birds get the best bonuses.

---

> Built by [Big Poppa Code](https://bigpoppacode.io) – architecting automations that scale people, profits, and purpose.`;


// --- (ANALYSIS LOGIC - Copied from previous script) ---
const analyzeWorkflow = (jsonContent) => {
    const nodes = jsonContent.nodes || [];
    const connections = jsonContent.connections || {};
    const nodeTypes = new Set(nodes.map(n => n.type.split('.').pop()));
    const nodeNames = nodes.map(n => n.name);
    const triggerNode = nodes.find(n => n.type.toLowerCase().includes('trigger')) || nodes[0];
    let whatItDoes = `This workflow automates a process involving ${[...nodeTypes].slice(0, 3).join(', ')}.`;
    if (nodeTypes.has('gmail') && nodeTypes.has('googleDrive')) whatItDoes = "This workflow automatically saves attachments from specific Gmail emails directly into a designated Google Drive folder."
    else if (nodeTypes.has('airtable') && nodeTypes.has('mailcheck')) whatItDoes = "This workflow cleans an Airtable email list by verifying each email's validity with Mailcheck and updating the record."
    else if (nodeTypes.has('webhook') && nodeTypes.has('crypto') && nodeTypes.has('airtable')) whatItDoes = "This workflow creates a custom URL shortener with tracking and a dashboard, using Airtable as the backend."
    let useCase = "This is a valuable tool for automating data transfer, lead management, or internal processes, saving significant manual effort.";
    if (whatItDoes.includes('Gmail') && whatItDoes.includes('Google Drive')) useCase = "Ideal for businesses that need to archive important documents received via email, such as invoices, project assets, or resumes, into a centralized cloud storage location."
    else if (whatItDoes.includes('Airtable') && whatItDoes.includes('Mailcheck')) useCase = "Essential for marketing and sales teams to maintain data hygiene in their CRM or lead lists, improving email deliverability and reducing bounce rates."
    const howItWorksSteps = [];
    let currentNodes = [triggerNode];
    const processedNodes = new Set();
    while(currentNodes.length > 0) {
        const node = currentNodes.shift();
        if(!node || processedNodes.has(node.name)) continue;
        howItWorksSteps.push(`**${node.name} (${node.type.split('.').pop()})**: The workflow starts or proceeds with this step.`);
        processedNodes.add(node.name);
        const nextNodeNames = ((connections[node.name] || {}).main || [[{}]])[0].map(c => c.node);
        currentNodes.push(...nodes.filter(n => nextNodeNames.includes(n.name)));
    }
    const setupInstructions = [
        `**Add Trigger (If Needed):** If this workflow doesn't start with a trigger (like Schedule or Webhook), add one to automate it.`,
        `**Connect Credentials:** Go through each node and connect your accounts (e.g., Google, Airtable, OpenAI).`,
        `**Customize Parameters:** Review key nodes like "${nodeNames[0]}" and "${nodeNames[nodeNames.length - 1]}" and update any placeholder IDs, table names, or URLs to match your specific needs.`
    ];
    return { whatItDoes, useCase, howItWorks: howItWorksSteps, setup: setupInstructions };
};


// --- MAIN SCRIPT EXECUTION ---
const fixAllReadmes = () => {
    const rootDir = path.join(__dirname, '..');
    const workflowCategories = [ 'AI Agent Development', 'Business Process Automation', 'CRM & Sales', 'Cloud Storage & File Management', 'Communication & Messaging', 'Creative Content & Video Automation', 'Creative Design Automation', 'Data Processing & Analysis', 'E-commerce & Retail', 'Financial & Accounting', 'Marketing & Advertising', 'Project Management', 'Social Media Management', 'Technical Infrastructure & DevOps', 'VEO 3 AI VIDEO', 'Web Scraping & Data Extraction', 'analytics', 'api-webhooks', 'automation', 'communication', 'data-integration', 'data-transformation', 'document-processing', 'workflows' ];
    let readmesFixed = 0;

    workflowCategories.forEach(category => {
        const categoryPath = path.join(rootDir, category);
        if (fs.existsSync(categoryPath) && fs.statSync(categoryPath).isDirectory()) {
            fs.readdirSync(categoryPath).forEach(item => {
                let workflowIdentifier, jsonPath, readmePath;
                const itemPath = path.join(categoryPath, item);
                if (fs.statSync(itemPath).isDirectory()) {
                    workflowIdentifier = item;
                    jsonPath = path.join(itemPath, 'workflow.json');
                    readmePath = path.join(itemPath, 'README.md');
                } else if (item.endsWith('.json')) {
                    workflowIdentifier = path.parse(item).name;
                    jsonPath = itemPath;
                    readmePath = path.join(categoryPath, `${workflowIdentifier}.md`);
                } else { return; }

                if (fs.existsSync(jsonPath) && fs.existsSync(readmePath)) { // Only fix existing READMEs
                    try {
                        const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
                        const analysis = analyzeWorkflow(jsonContent);
                        const title = generateHumanReadableName(workflowIdentifier);

                        const content = `# ${title}\n\n## 🚀 What It Does\n${analysis.whatItDoes}\n\n## 💼 Business Use Case\n${analysis.useCase}\n\n## ⚙️ How It Works\n${analysis.howItWorks.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n## 🔧 Setup Instructions\n${analysis.setup.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n${promotionalBlock}\n`;
                        fs.writeFileSync(readmePath, content);
                        readmesFixed++;
                    } catch (e) {
                        console.error(`Could not process workflow ${workflowIdentifier}: ${e.message}`);
                    }
                }
            });
        }
    });
    console.log(`\n--- README Fix Complete ---`);
    console.log(`Verified and Fixed ${readmesFixed} README files.`);
};

fixAllReadmes();
