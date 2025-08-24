const fs = require('fs');
const path = require('path');
const { generateHumanReadableName } = require('./namingUtils');

// --- PROMOTIONAL BLOCK ---
const promotionalBlock = `
### ⚠️ Automation Ain’t the Same Anymore

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

// --- CORE LOGIC FOR WORKFLOW ANALYSIS ---
const analyzeWorkflow = (jsonContent) => {
    const nodes = jsonContent.nodes || [];
    if (nodes.length === 0) return null;

    const nodeTypes = new Set(nodes.map(n => n.type.split('.').pop()));
    const nodeNames = nodes.map(n => n.name);

    const triggerNode = nodes.find(n => n.type.toLowerCase().includes('trigger')) || nodes[0];
    let triggerDescription = `This workflow starts with a **${triggerNode.name}** node.`;
    if (triggerNode.type.toLowerCase().includes('schedule')) {
        triggerDescription = "This workflow is designed to run on a schedule (e.g., daily, weekly). You will need to set the desired interval in the **Schedule** node."
    } else if (triggerNode.type.toLowerCase().includes('webhook')) {
        triggerDescription = "This workflow is triggered by an incoming webhook, making it a live API endpoint."
    }

    let whatItDoes = `This workflow automates a process involving ${[...nodeTypes].slice(0, 3).join(', ')}.`;
    if (nodeTypes.has('OpenAI') && nodeTypes.has('YoutubeDL')) {
        whatItDoes = "This workflow automatically downloads the transcript from a YouTube video, sends it to OpenAI for summarization and analysis, and extracts key insights."
    }

    let useCase = "This is a powerful tool for automating research, content creation, and data analysis, saving hours of manual work.";
    if (whatItDoes.includes('YouTube') && whatItDoes.includes('OpenAI')) {
        useCase = "Ideal for content creators, researchers, or marketers who need to quickly extract and summarize information from video content. Use it to generate blog post drafts, show notes, or competitive analysis from any YouTube video."
    }

    const howItWorksSteps = [];
    nodes.forEach((node, index) => {
        howItWorksSteps.push(`**Step ${index + 1}: ${node.name} (${node.type.split('.').pop()})** - ${node.parameters.notes || 'This step performs a key action in the workflow.'}`);
    });
    
    const setupInstructions = [
        `**Connect Credentials:** Go through each application node (e.g., OpenAI, Google Sheets, Slack) and connect your accounts.`,
        `**Customize Core Logic:** Review key nodes like "${nodeNames[0]}" and "${nodeNames[nodeNames.length - 1]}" and update any placeholder IDs, table names, or URLs to match your specific needs.`,
        `**Activate the Workflow:** Once configured, set the workflow to "Active" to begin the automation.`
    ];

    return { whatItDoes, useCase, howItWorks: howItWorksSteps, setup: setupInstructions, trigger: triggerDescription };
};

const generatePremiumReadmes = () => {
    const premiumDir = path.join(__dirname, '..', 'workflows', 'Premium Automations');
    const catalogPath = path.join(premiumDir, 'catalog.json');

    if (!fs.existsSync(catalogPath)) {
        console.error('catalog.json not found! Please run the processing script first.');
        return;
    }

    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    let readmesUpdated = 0;

    catalog.forEach(item => {
        const jsonPath = path.join(__dirname, '..', item.path);
        const readmePath = path.join(__dirname, '..', path.dirname(item.path), `${path.parse(item.path).name}.md`);

        if (fs.existsSync(jsonPath)) {
            try {
                const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
                const analysis = analyzeWorkflow(jsonContent);

                if (analysis) {
                    const title = item.title.replace(/\b\w/g, char => char.toUpperCase());
                    const content = `# ${title}\n\n## 🚀 What It Does\n${analysis.whatItDoes}\n\n## 💼 Business Use Case\n${analysis.useCase}\n\n## ⚙️ How It Works\n1.  **Trigger:** ${analysis.trigger}\n${analysis.howItWorks.map((step, i) => `${i + 2}. ${step}`).join('\n')}\n\n## 🔧 Setup Instructions\n${analysis.setup.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n${promotionalBlock}\n`;
                    fs.writeFileSync(readmePath, content);
                    readmesUpdated++;
                }
            } catch (e) {
                console.error(`Could not process or analyze workflow ${item.id}: ${e.message}`);
            }
        }
    });
    console.log(`\n--- Premium README Generation Complete ---`);
    console.log(`Verified and updated ${readmesUpdated} premium README files.`);
};

generatePremiumReadmes();

