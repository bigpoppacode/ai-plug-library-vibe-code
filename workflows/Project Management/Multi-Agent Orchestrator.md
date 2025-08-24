# Multi Agent Orchestrator

## 🚀 What It Does
This workflow automates a process involving gmailTool, lmChatOpenAi, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Telegram Trigger** node.
2. **Step 1: Send Email (gmailTool)** - This step performs a key action in the workflow.
3. **Step 2: Get Emails (gmailTool)** - This step performs a key action in the workflow.
4. **Step 3: Create Draft (gmailTool)** - This step performs a key action in the workflow.
5. **Step 4: Email Reply (gmailTool)** - This step performs a key action in the workflow.
6. **Step 5: Get Labels (gmailTool)** - This step performs a key action in the workflow.
7. **Step 6: Label Emails (gmailTool)** - This step performs a key action in the workflow.
8. **Step 7: Mark Unread (gmailTool)** - This step performs a key action in the workflow.
9. **Step 8: 4.1-mini (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Email Agent1 (agent)** - This step performs a key action in the workflow.
11. **Step 10: Create Event with Attendee (googleCalendarTool)** - This step performs a key action in the workflow.
12. **Step 11: Create Event (googleCalendarTool)** - This step performs a key action in the workflow.
13. **Step 12: Get Events (googleCalendarTool)** - This step performs a key action in the workflow.
14. **Step 13: Delete Event (googleCalendarTool)** - This step performs a key action in the workflow.
15. **Step 14: Update Event (googleCalendarTool)** - This step performs a key action in the workflow.
16. **Step 15: Calendar Agent1 (agent)** - This step performs a key action in the workflow.
17. **Step 16: 4.1-mini1 (lmChatOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Get Contacts (airtableTool)** - This step performs a key action in the workflow.
19. **Step 18: Add or Update Contact (airtableTool)** - This step performs a key action in the workflow.
20. **Step 19: Contact Agent1 (agent)** - This step performs a key action in the workflow.
21. **Step 20: Tavily1 (toolHttpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Content Creator Agent1 (agent)** - This step performs a key action in the workflow.
23. **Step 22: Claude 3.7 (lmChatOpenRouter)** - This step performs a key action in the workflow.
24. **Step 23: Gemini 2.0 Flash (lmChatGoogleGemini)** - This step performs a key action in the workflow.
25. **Step 24: Ultimate Assistant (agent)** - This step performs a key action in the workflow.
26. **Step 25: Email Agent (toolWorkflow)** - This step performs a key action in the workflow.
27. **Step 26: Contact Agent (toolWorkflow)** - This step performs a key action in the workflow.
28. **Step 27: Content Creator Agent (toolWorkflow)** - This step performs a key action in the workflow.
29. **Step 28: Calculator (toolCalculator)** - This step performs a key action in the workflow.
30. **Step 29: Calendar Agent (toolWorkflow)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Think (toolThink)** - This step performs a key action in the workflow.
33. **Step 32: GPT 4.1 (lmChatOpenAi)** - This step performs a key action in the workflow.
34. **Step 33: Telegram Trigger (telegramTrigger)** - This step performs a key action in the workflow.
35. **Step 34: Set 'Text' (set)** - This step performs a key action in the workflow.
36. **Step 35: Download Voice File (telegram)** - This step performs a key action in the workflow.
37. **Step 36: Transcribe Audio (openAi)** - This step performs a key action in the workflow.
38. **Step 37: Switch (switch)** - This step performs a key action in the workflow.
39. **Step 38: Response (telegram)** - This step performs a key action in the workflow.
40. **Step 39: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email management and calendar tasks by integrating multiple tools. It can send, receive, and label emails, create calendar events, and manage contacts, streamlining communication and scheduling.

### Demonstrate
A business owner can use this workflow to automate scheduling meetings. When a new email arrives, the workflow can check for available times, send a meeting invite, and label the email for easy tracking, saving time and reducing errors.

### Imitate
1. Import the workflow into n8n.
2. Set up Gmail and Google Calendar credentials.
3. Customize email and calendar parameters (like email addresses and event times).
4. Test by sending a sample email to trigger the workflow.
5. Observe how it manages emails and schedules events automatically.

### Practice
Try modifying the workflow to add a new feature: automatically send a follow-up email after a meeting is scheduled. Adjust the email body and timing to see how the workflow adapts.

### WIIFM
Mastering this workflow can enhance your automation skills, making you valuable to businesses seeking efficiency. You can create tailored solutions that save time, improve customer interactions, and generate income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Send Email" and "Sticky Note7" for IDs, table names, and URLs.
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
