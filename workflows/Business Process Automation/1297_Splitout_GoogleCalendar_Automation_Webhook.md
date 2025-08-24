# Splitout GoogleCalendar Automation Webhook

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, httpRequest, googleDrive.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Get Meeting ConferenceRecords (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Get Meeting Transcript Location (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Get Transcript File (googleDrive)** - This step performs a key action in the workflow.
6. **Step 5: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
7. **Step 6: PDF Loader (extractFromFile)** - This step performs a key action in the workflow.
8. **Step 7: Get Calendar Event (googleCalendar)** - This step performs a key action in the workflow.
9. **Step 8: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
10. **Step 9: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
11. **Step 10: Response (set)** - This step performs a key action in the workflow.
12. **Step 11: Edit Fields (set)** - This step performs a key action in the workflow.
13. **Step 12: Fallback Response (set)** - This step performs a key action in the workflow.
14. **Step 13: Actions Router (switch)** - This step performs a key action in the workflow.
15. **Step 14: Get Attendees (set)** - This step performs a key action in the workflow.
16. **Step 15: Attendees List (splitOut)** - This step performs a key action in the workflow.
17. **Step 16: Add Attendee to Invite (googleCalendar)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Create Calendar Event1 (googleCalendar)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Schedule Meeting (toolWorkflow)** - This step performs a key action in the workflow.
25. **Step 24: AI Agent (agent)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model1" and "Sticky Note8" for IDs, table names, and URLs.
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
