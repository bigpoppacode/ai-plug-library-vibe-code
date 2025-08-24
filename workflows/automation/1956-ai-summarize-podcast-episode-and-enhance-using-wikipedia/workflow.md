# Workflow

## 🚀 What It Does
This workflow automates a process involving manualTrigger, code, documentJsonInputLoader.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Podcast Episode Transcript (code)** - This step performs a key action in the workflow.
4. **Step 3: Workflow Input to JSON Document (documentJsonInputLoader)** - This step performs a key action in the workflow.
5. **Step 4: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Topics (itemLists)** - This step performs a key action in the workflow.
8. **Step 7: Summarize Transcript (chainSummarization)** - This step performs a key action in the workflow.
9. **Step 8: GPT 4 - Extract (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Wikipedia1 (toolWikipedia)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Send Digest (gmail)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Format topic text & title (code)** - This step performs a key action in the workflow.
15. **Step 14: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
16. **Step 15: Extract Topics & Questions (chainLlm)** - This step performs a key action in the workflow.
17. **Step 16: GPT3.5 - Research (lmChatOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: GPT3.5 - Summarize (lmChatOpenAi)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Research & Explain Topics (agent)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of summarizing a podcast episode's transcript, extracting topics and questions, and sending a digest email. It starts with a manual trigger and involves several steps to process and format the data before emailing it out.

### Demonstrate
A business owner could use this workflow to automate weekly podcast episode digests, saving time on summarizing content and ensuring their audience receives concise updates—enhancing engagement and improving content distribution.

### Imitate
1. **Set up n8n** and create a new workflow.
2. **Add a Manual Trigger** to start the workflow.
3. **Insert a Code Node** to input the podcast transcript.
4. **Use a Text Splitter** to break the transcript into manageable parts.
5. **Add nodes to summarize**, extract topics/questions, and format them.
6. **Connect to an Email Node** to send the final digest.

### Practice
Try modifying the transcript input with a different podcast episode and run the workflow. Observe how the output changes and ensure the email digest reflects these changes accurately.

### WIIFM
Mastering this workflow helps you provide valuable automated services to clients, enhancing their content delivery and engagement strategies. This could lead to recurring income as you scale their automation needs, positioning you as a sought-after consultant in the automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Research & Explain Topics" for IDs, table names, and URLs.
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
