# AI Agent That Can Scrape Webpages

## 🚀 What It Does
This workflow automates a process involving manualChatTrigger, lmChatOpenAi, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On new manual Chat Message** node.
2. **Step 1: On new manual Chat Message (manualChatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Exctract HTML Body (set)** - This step performs a key action in the workflow.
6. **Step 5: Is error? (if)** - This step performs a key action in the workflow.
7. **Step 6: Stringify error message (set)** - This step performs a key action in the workflow.
8. **Step 7: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Remove extra tags (set)** - This step performs a key action in the workflow.
10. **Step 9: Simplify output (set)** - This step performs a key action in the workflow.
11. **Step 10: Simplify? (if)** - This step performs a key action in the workflow.
12. **Step 11: QUERY_PARAMS (set)** - This step performs a key action in the workflow.
13. **Step 12: CONFIG (set)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: ReAct AI Agent (agent)** - This step performs a key action in the workflow.
19. **Step 18: Convert to Markdown (markdown)** - This step performs a key action in the workflow.
20. **Step 19: Send Page Content (set)** - This step performs a key action in the workflow.
21. **Step 20: HTTP_Request_Tool (toolWorkflow)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of responding to manual chat messages. It uses OpenAI's chat model to generate responses, extracts content from HTML, handles errors, and formats the output for clarity or further processing.

### Demonstrate
A business owner could use this workflow to automate customer support. When a customer sends a chat message, the workflow generates a quick, AI-driven response, reducing response times and improving customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up the **manualChatTrigger** to start on new messages.
3. Configure the **lmChatOpenAi** node with your OpenAI API key.
4. Set the **httpRequest** node to fetch any additional data needed.
5. Test the workflow by sending a manual chat message.

### Practice
Try modifying the workflow to change the response style (e.g., more formal or casual) by adjusting the parameters in the OpenAI node. Send different types of messages to see how the AI adapts its responses.

### WIIFM
Mastering this workflow can help you offer automation services to clients, streamline operations, and improve customer interactions, ultimately leading to increased satisfaction and revenue for your business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On new manual Chat Message" and "HTTP_Request_Tool" for IDs, table names, and URLs.
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
