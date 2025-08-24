# Fetch Dynamic Prompts From Github And Auto Populate N8n Expressions In Prompt

## 🚀 What It Does
This workflow automates a process involving manualTrigger, github, extractFromFile.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: GitHub (github)** - This step performs a key action in the workflow.
4. **Step 3: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
5. **Step 4: setVars (set)** - This step performs a key action in the workflow.
6. **Step 5: replace variables (code)** - This step performs a key action in the workflow.
7. **Step 6: If (if)** - This step performs a key action in the workflow.
8. **Step 7: Check All Prompt Vars Present (code)** - This step performs a key action in the workflow.
9. **Step 8: SetPrompt (set)** - This step performs a key action in the workflow.
10. **Step 9: Stop and Error (stopAndError)** - This step performs a key action in the workflow.
11. **Step 10: Set Completed Prompt (set)** - This step performs a key action in the workflow.
12. **Step 11: AI Agent (agent)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Prompt Output (set)** - This step performs a key action in the workflow.
18. **Step 17: Ollama Chat Model (lmChatOllama)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of loading prompts from a GitHub repository, populating them with specific variables, and then executing them through an AI agent, making it easy to generate customized responses based on predefined templates.

### Demonstrate
A marketing consultant could use this workflow to quickly generate tailored email campaigns by loading different prompt templates from GitHub. This saves time and ensures a consistent message for various client needs.

### Imitate
1. **Set Up n8n**: Create an account and open n8n.
2. **Create a New Workflow**: Start a new workflow and add a Manual Trigger node.
3. **Add GitHub Node**: Configure it to pull a specific file with prompts.
4. **Extract Data**: Use the Extract From File node to get the prompt text.
5. **Set Variables**: Use the Set node to define variables (e.g., company name, product).
6. **Replace Variables**: Add a Code node to replace placeholders in the prompt.
7. **Run AI Agent**: Use the AI Agent node to process the final prompt.
8. **Test Workflow**: Execute the workflow to see the results.

### Practice
Try modifying the workflow to pull prompts from a different GitHub repository. Change the variables in the Set node and observe how the output from the AI Agent changes based on different inputs.

### WIIFM
Mastering this workflow allows you to automate repetitive tasks for clients, enhancing efficiency and accuracy. It positions you as a valuable service provider in the growing field of AI automation, opening up opportunities for higher-paying contracts and recurring revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Ollama Chat Model" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
