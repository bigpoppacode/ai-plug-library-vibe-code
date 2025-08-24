const fs = require('fs');
const path = require('path');

const formatWorkflowName = (name) => {
    return name
        .replace(/^\d+[-_]/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\.json$/, '')
        .replace(/\b\w/g, char => char.toUpperCase());
};

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

const generateAndFixReadmes = () => {
    const rootDir = path.join(__dirname, '..');
    const workflowCategories = [
        'AI Agent Development', 'Business Process Automation', 'CRM & Sales',
        'Cloud Storage & File Management', 'Communication & Messaging',
        'Creative Content & Video Automation', 'Creative Design Automation',
        'Data Processing & Analysis', 'E-commerce & Retail', 'Financial & Accounting',
        'Marketing & Advertising', 'Project Management', 'Social Media Management',
        'Technical Infrastructure & DevOps', 'VEO 3 AI VIDEO', 'Web Scraping & Data Extraction'
    ];
    let readmesFixed = 0;

    workflowCategories.forEach(category => {
        const categoryPath = path.join(rootDir, category);
        if (fs.existsSync(categoryPath) && fs.statSync(categoryPath).isDirectory()) {
            fs.readdirSync(categoryPath).forEach(file => {
                if (file.endsWith('.json')) {
                    const baseName = path.parse(file).name;
                    const mdPath = path.join(categoryPath, `${baseName}.md`);
                    
                    // We will just overwrite all of them to be sure
                    const workflowName = formatWorkflowName(baseName);
                    const description = `This workflow provides a powerful automation for "${workflowName}", designed to streamline your processes and improve efficiency.`;
                    const content = `# ${workflowName}\n\n${description}\n\n## Quick Start\n1. Import this workflow to n8n\n2. Configure your settings\n3. Start automating!\n\n${promotionalBlock}\n`;
                    
                    fs.writeFileSync(mdPath, content);
                    readmesFixed++;
                }
            });
        }
    });

    console.log(`\n--- README Fix Complete ---`);
    console.log(`Verified and Fixed ${readmesFixed} README files.`);
};

generateAndFixReadmes();
