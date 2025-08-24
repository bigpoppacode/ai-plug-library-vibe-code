# Zoom AI Meeting Assistant Creates Mail Summary, ClickUp Tasks And Follow Up Call

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, manualTrigger, stopAndError.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
4. **Step 3: No Recording/Transcript available (stopAndError)** - This step performs a key action in the workflow.
5. **Step 4: Zoom: Get data of last meeting (zoom)** - This step performs a key action in the workflow.
6. **Step 5: Filter transcript URL (set)** - This step performs a key action in the workflow.
7. **Step 6: Filter: Only 1 item (splitInBatches)** - This step performs a key action in the workflow.
8. **Step 7: Zoom: Get transcript file (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Extract text from transcript file (extractFromFile)** - This step performs a key action in the workflow.
10. **Step 9: Format transcript text (set)** - This step performs a key action in the workflow.
11. **Step 10: Zoom: Get participants data (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Create meeting summary (openAi)** - This step performs a key action in the workflow.
13. **Step 12: Sort for mail delivery (set)** - This step performs a key action in the workflow.
14. **Step 13: Format to html (code)** - This step performs a key action in the workflow.
15. **Step 14: Send meeting summary (emailSend)** - This step performs a key action in the workflow.
16. **Step 15: Create tasks (toolWorkflow)** - This step performs a key action in the workflow.
17. **Step 16: Create tasks and follow-up call (agent)** - This step performs a key action in the workflow.
18. **Step 17: Create follow-up call (microsoftOutlookTool)** - This step performs a key action in the workflow.
19. **Step 18: Filter: Last 24 hours (filter)** - This step performs a key action in the workflow.
20. **Step 19: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
21. **Step 20: Split Out (splitOut)** - This step performs a key action in the workflow.
22. **Step 21: ClickUp (clickUp)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Zoom: Get transcripts data (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of summarizing Zoom meetings. It retrieves meeting data, extracts transcripts, generates a summary using AI, and sends this summary via email, along with creating tasks for follow-ups.

### Demonstrate
A business owner could use this workflow to streamline post-meeting processes. Instead of manually summarizing meetings, the workflow automatically compiles notes and tasks, saving time and ensuring nothing is missed, enhancing productivity.

### Imitate
1. Import the workflow into n8n.
2. Set up OpenAI and Zoom API credentials.
3. Modify the Zoom node to connect to your account and adjust the meeting filters.
4. Customize the email node to send to your desired recipients.
5. Test the workflow by triggering it manually and reviewing outputs.

### Practice
Try running the workflow with a test Zoom meeting. After execution, verify the email summary and ensure tasks are created correctly. Adjust parameters to see how changes affect the output.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, saving clients time and improving their operational efficiency. This expertise can attract customers and generate income by providing tailored automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Zoom: Get transcripts data" for IDs, table names, and URLs.
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
