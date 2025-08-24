# Splitout GoogleCalendar Automate Webhook

## 🚀 What It Does
This workflow automates a process involving gmail, set, googleCalendar.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute Workflow Trigger** node.
2. **Step 1: Get Message Contents (gmail)** - This step performs a key action in the workflow.
3. **Step 2: Simplify Emails (set)** - This step performs a key action in the workflow.
4. **Step 3: Check For Upcoming Meetings (googleCalendar)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Extract Attendee Information (informationExtractor)** - This step performs a key action in the workflow.
7. **Step 6: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
8. **Step 7: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: Get Last Correspondence (gmail)** - This step performs a key action in the workflow.
10. **Step 9: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: OpenAI Chat Model3 (lmChatOpenAi)** - This step performs a key action in the workflow.
12. **Step 11: WhatsApp Business Cloud (whatsApp)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Return LinkedIn Success (set)** - This step performs a key action in the workflow.
23. **Step 22: Return LinkedIn Error (set)** - This step performs a key action in the workflow.
24. **Step 23: Return Email Error (set)** - This step performs a key action in the workflow.
25. **Step 24: Return Email Success (set)** - This step performs a key action in the workflow.
26. **Step 25: Set Route Email (set)** - This step performs a key action in the workflow.
27. **Step 26: Set Route Linkedin (set)** - This step performs a key action in the workflow.
28. **Step 27: Router (switch)** - This step performs a key action in the workflow.
29. **Step 28: Return LinkedIn Error1 (set)** - This step performs a key action in the workflow.
30. **Step 29: Has Emails? (if)** - This step performs a key action in the workflow.
31. **Step 30: Return Email Error1 (set)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sections To List (splitOut)** - This step performs a key action in the workflow.
34. **Step 33: Set LinkedIn Cookie (set)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Attendees to List (splitOut)** - This step performs a key action in the workflow.
38. **Step 37: Merge Attendee with Summaries (set)** - This step performs a key action in the workflow.
39. **Step 38: Has Email Address? (if)** - This step performs a key action in the workflow.
40. **Step 39: Has LinkedIn URL? (if)** - This step performs a key action in the workflow.
41. **Step 40: Get Correspondance (executeWorkflow)** - This step performs a key action in the workflow.
42. **Step 41: Merge (merge)** - This step performs a key action in the workflow.
43. **Step 42: Aggregate Attendees (aggregate)** - This step performs a key action in the workflow.
44. **Step 43: Activities To Array (aggregate)** - This step performs a key action in the workflow.
45. **Step 44: Extract Profile Metadata (html)** - This step performs a key action in the workflow.
46. **Step 45: Activities To List (splitOut)** - This step performs a key action in the workflow.
47. **Step 46: APIFY Web Scraper (httpRequest)** - This step performs a key action in the workflow.
48. **Step 47: Get Activity Details (html)** - This step performs a key action in the workflow.
49. **Step 48: Get Sections (html)** - This step performs a key action in the workflow.
50. **Step 49: Get About Section (set)** - This step performs a key action in the workflow.
51. **Step 50: Get Activity Section (set)** - This step performs a key action in the workflow.
52. **Step 51: Extract Activities (html)** - This step performs a key action in the workflow.
53. **Step 52: Merge1 (merge)** - This step performs a key action in the workflow.
54. **Step 53: Is Scrape Successful? (if)** - This step performs a key action in the workflow.
55. **Step 54: Extract About (html)** - This step performs a key action in the workflow.
56. **Step 55: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
57. **Step 56: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
58. **Step 57: Get LinkedIn Profile & Activity (executeWorkflow)** - This step performs a key action in the workflow.
59. **Step 58: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
60. **Step 59: Correspondance Recap Agent (chainLlm)** - This step performs a key action in the workflow.
61. **Step 60: Attendee Research Agent (chainLlm)** - This step performs a key action in the workflow.
62. **Step 61: LinkedIn Summarizer Agent (chainLlm)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of preparing for meetings by fetching email correspondence and LinkedIn activity about attendees. It sends a pre-meeting notification via WhatsApp, helping users stay informed and ready.

### Demonstrate
A business owner can use this workflow to automatically gather information about meeting attendees, allowing them to prepare effectively. For example, they can receive a summary of the last email exchange and relevant LinkedIn updates right before the meeting.

### Imitate
1. Import the workflow into n8n.
2. Set up your Gmail and Google Calendar nodes for authentication.
3. Configure the WhatsApp node with your account details.
4. Modify the prompts in the OpenAI nodes to suit your tone.
5. Test the workflow by scheduling a mock meeting and observing the output.

### Practice
Create a simplified version of the workflow that only fetches the last email from a specific sender and sends it to you via email. This will help reinforce your understanding of fetching and sending data.

### WIIFM
Mastering this workflow allows you to offer automation services that enhance productivity for clients, making you a valuable partner in their operational efficiency. This can lead to increased revenue through new business opportunities and higher client retention.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get Message Contents" and "LinkedIn Summarizer Agent" for IDs, table names, and URLs.
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
