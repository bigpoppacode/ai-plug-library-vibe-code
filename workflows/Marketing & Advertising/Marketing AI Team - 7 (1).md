# Marketing AI Team   7 (1)

## 🚀 What It Does
This workflow automates a process involving lmChatOpenRouter, googleSheetsTool, executeWorkflowTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When Executed by Another Workflow** node.
2. **Step 1: GPT 4.1 mini (lmChatOpenRouter)** - This step performs a key action in the workflow.
3. **Step 2: Image Database (googleSheetsTool)** - This step performs a key action in the workflow.
4. **Step 3: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Image Search Agent (agent)** - This step performs a key action in the workflow.
6. **Step 5: Not Found (set)** - This step performs a key action in the workflow.
7. **Step 6: Get? (if)** - This step performs a key action in the workflow.
8. **Step 7: Not Found? (if)** - This step performs a key action in the workflow.
9. **Step 8: Download File (googleDrive)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Name, ID, & Link (outputParserStructured)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Edit (set)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Send Photo (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of searching for images based on user input. It uses AI to analyze the request, checks a Google Sheets database for relevant images, and sends the result via Telegram.

### Demonstrate
A photographer receives numerous requests for specific images. This workflow automates the search, allowing them to quickly find and send relevant images to clients, saving time and improving customer service.

### Imitate
1. Create a new n8n workflow.
2. Add a Manual Trigger node to start.
3. Integrate an OpenAI node to process image search queries.
4. Connect a Google Sheets node to search for images.
5. Use an If node to check if images are found.
6. If found, add a Telegram node to send the image; if not, provide a "not found" message.

### Practice
Try modifying the workflow to include a different image source, such as an API that provides stock images. Test it with various search queries and see how the results change.

### WIIFM
Mastering this workflow allows you to streamline image retrieval for businesses, enhancing efficiency and customer satisfaction. It positions you to offer valuable automation services, increasing your marketability and income potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "GPT 4.1 mini" and "Send Photo" for IDs, table names, and URLs.
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
