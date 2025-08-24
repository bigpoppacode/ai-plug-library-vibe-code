# Open Deep Research   AI Powered Autonomous Research Workflow

## 🚀 What It Does
This workflow automates a process involving chatTrigger, chainLlm, lmChatOpenRouter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Chat Message Trigger** node.
2. **Step 1: Chat Message Trigger (chatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Generate Search Queries using LLM (chainLlm)** - This step performs a key action in the workflow.
4. **Step 3: LLM Response Provider (OpenRouter) (lmChatOpenRouter)** - This step performs a key action in the workflow.
5. **Step 4: Parse and Chunk JSON Data (code)** - This step performs a key action in the workflow.
6. **Step 5: Perform SerpAPI Search Request (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Perform Jina AI Analysis Request (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Format SerpAPI Organic Results (code)** - This step performs a key action in the workflow.
9. **Step 8: Extract Relevant Context via LLM (agent)** - This step performs a key action in the workflow.
10. **Step 9: Generate Comprehensive Research Report (agent)** - This step performs a key action in the workflow.
11. **Step 10: Split Data for SerpAPI Batching (splitInBatches)** - This step performs a key action in the workflow.
12. **Step 11: Split Data for Jina AI Batching (splitInBatches)** - This step performs a key action in the workflow.
13. **Step 12: LLM Memory Buffer (Input Context) (memoryBufferWindow)** - This step performs a key action in the workflow.
14. **Step 13: LLM Memory Buffer (Report Context) (memoryBufferWindow)** - This step performs a key action in the workflow.
15. **Step 14: Fetch Wikipedia Information (toolWikipedia)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note: SerpAPI Setup (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note: Jina AI Setup (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note: OpenRouter API Setup (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of conducting deep research. It starts with a chat message trigger, generates search queries using a language model, performs searches via APIs, and compiles the results into a comprehensive report. 

### Demonstrate
A business owner might use this workflow to automate market research. Instead of manually gathering data on competitors, they can input a query and receive a detailed report with insights, saving time and improving decision-making.

### Imitate
1. Set up a Chat Message Trigger to capture user queries.
2. Use a language model to generate relevant search queries.
3. Perform searches with APIs (like SerpAPI).
4. Format and compile results into a structured report.
5. Adjust parameters to fit your specific research needs.

### Practice
Try modifying the workflow to research a different topic. Change the input query and adjust API parameters. Observe how the output report changes and refine it to better suit your needs.

### WIIFM
Mastering this workflow allows you to offer automated research services, saving clients time and enhancing their decision-making. This can lead to new revenue streams, attract more customers, and position you as a tech-savvy consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Chat Message Trigger" and "Sticky Note: OpenRouter API Setup" for IDs, table names, and URLs.
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
