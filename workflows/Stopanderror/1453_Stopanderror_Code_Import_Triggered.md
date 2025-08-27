# Stopanderror Code Import Triggered
## 🚀 What It Does
Automates a flow using set×4, stickyNote×4, code×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "340", height: "260", content: "# Set The variables in your prompt here"
4. **Sticky Note1** `stickyNote` — color: "5", content: "## The repo is currently public for you to test with"
5. **Sticky Note2** `stickyNote` — width: "360", height: "260", content: "## Replaces the values in the prompt with the variables in the 
# 'setVars' Node"
6. **Sticky Note3** `stickyNote` — color: "3", content: "## If you're missing variables they will be listed here"
7. **Ollama Chat Model** `lmChatOllama` — options: "[object Object]"
8. **setVars** `set` — options: "[object Object]", assignments: "[object Object]"
9. **GitHub** `github` — resource: **file**, operation: **get**
10. **Extract from File** `extractFromFile` — operation: **text**
11. **SetPrompt** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Check All Prompt Vars Present** `code` — jsCode: "// Get prompt text
const prompt = $json.data;

// Extract variables inside {{ }} dynamically
const matches = [...prompt.matchAll(/{{(.*?)}}/g)];
const uniqueVars = [...new Set(matc…[truncated]"
13. **If** `if` — options: "[object Object]", conditions: "[object Object]"
14. **replace variables** `code` — jsCode: "// Fetch the prompt text
const prompt = $('SetPrompt').first().json.data; // Ensure the prompt contains placeholders like {{ some.node.value }}

// Example variables object
const v…[truncated]"
15. **Stop and Error** `stopAndError` — errorMessage: "=Missing Prompt Variables : {{ $('Check All Prompt Vars Present').item.json.missingKeys }}
"
16. **Set Completed Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
17. **AI Agent** `agent` — text: "={{ $json.Prompt }}", options: "[object Object]", promptType: "define"
18. **Prompt Output** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow loads prompts from a GitHub repository and automatically populates them with variables from the 'setVars' node. It checks for missing variables and replaces placeholders in the prompt with actual values. If any variables are missing, it stops the process, otherwise, it completes the prompt and sends it to an AI agent for further action.

**Demonstrate**  
A consultant could use this workflow to automate the process of generating customized email templates using data from a GitHub repository, saving time and ensuring consistency in client communication.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect GitHub and AI service accounts.  
3. Set variables in the 'setVars' node.  
4. Test the workflow by triggering it manually.  
5. Adjust the GitHub file paths and variable names as needed.

**Practice**  
Create a GitHub repository with a markdown file containing placeholders. Set up the workflow to replace these placeholders with variables and run it to see how the data is populated. Modify the variables to see how the output changes.

**WIIFM**  
Mastering this workflow enables you to offer automated content generation services, increasing efficiency and accuracy for clients. This can lead to higher customer satisfaction and open opportunities for offering advanced AI-powered automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** githubApi, ollamaApi.

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
> Built by [Big Poppa Code](https://bigpoppacode.io) – architecting automations that scale people, profits, and purpose.
