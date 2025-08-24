# Marketing AI Team  6

## 🚀 What It Does
This workflow automates a process involving toolHttpRequest, lmChatOpenRouter, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When Executed by Another Workflow** node.
2. **Step 1: Tavily (toolHttpRequest)** - This step performs a key action in the workflow.
3. **Step 2: GPT_4.1 (lmChatOpenRouter)** - This step performs a key action in the workflow.
4. **Step 3: Image Prompt Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: Generate Image (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Convert to Binary (convertToFile)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Blog Post Agent (agent)** - This step performs a key action in the workflow.
13. **Step 12: Image Log (googleSheets)** - This step performs a key action in the workflow.
14. **Step 13: Image & Title (outputParserStructured)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Send Blog (telegram)** - This step performs a key action in the workflow.
17. **Step 16: Send Photo (telegram)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Upload (googleDrive)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of LinkedIn posts by gathering relevant content via a web search, generating a visual prompt for an image, and posting it to a specified Telegram channel. It uses AI to enhance the content and ensure visual appeal.

### Demonstrate
A business owner could use this workflow to streamline their social media strategy. For example, a marketing consultant can automate LinkedIn posts about industry trends, saving time while ensuring consistent, high-quality content that engages their audience.

### Imitate
1. Import the workflow into n8n.
2. Set up the Tavily API for web searches.
3. Configure the GPT-4.1 node for content generation.
4. Create an image prompt in the Image Prompt Agent.
5. Use the Generate Image step to create visuals.
6. Set up Telegram to post the generated content.
7. Test with sample topics.

### Practice
Try modifying the search term in the Tavily node to see how it affects the generated LinkedIn content and visuals. Experiment with different topics to understand the workflow's adaptability.

### WIIFM
Mastering this workflow allows you to automate content creation, saving time and enhancing your digital presence. This skill can help you attract clients seeking efficient marketing solutions, ultimately boosting your income as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Tavily" and "Upload" for IDs, table names, and URLs.
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
