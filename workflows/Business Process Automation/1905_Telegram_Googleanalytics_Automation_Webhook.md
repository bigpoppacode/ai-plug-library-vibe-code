# Telegram Googleanalytics Automation Webhook

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, lmChatOpenAi, toolWorkflow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Google_Ads (toolWorkflow)** - This step performs a key action in the workflow.
5. **Step 4: Meta_Ads (toolWorkflow)** - This step performs a key action in the workflow.
6. **Step 5: Analytics_Domain_1 (toolWorkflow)** - This step performs a key action in the workflow.
7. **Step 6: Analytics_Domain_3 (toolWorkflow)** - This step performs a key action in the workflow.
8. **Step 7: Analytics_Domain_2 (toolWorkflow)** - This step performs a key action in the workflow.
9. **Step 8: Analytics_Domain_4 (toolWorkflow)** - This step performs a key action in the workflow.
10. **Step 9: Analytics_Domain_5 (toolWorkflow)** - This step performs a key action in the workflow.
11. **Step 10: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Calculator (toolCalculator)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Calculator1 (toolCalculator)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Calculator3 (toolCalculator)** - This step performs a key action in the workflow.
19. **Step 18: Call Google Analytics data: Last 7 days (googleAnalytics)** - This step performs a key action in the workflow.
20. **Step 19: Call Google Analytics data: Last 7 days (previous year) (googleAnalytics)** - This step performs a key action in the workflow.
21. **Step 20: Calculation same period previous year (code)** - This step performs a key action in the workflow.
22. **Step 21: Format data input (previous year) (code)** - This step performs a key action in the workflow.
23. **Step 22: Format data input (current year) (code)** - This step performs a key action in the workflow.
24. **Step 23: Assign data from input (current year) (set)** - This step performs a key action in the workflow.
25. **Step 24: Summarize input (current year) (summarize)** - This step performs a key action in the workflow.
26. **Step 25: Assign input (previous year) (set)** - This step performs a key action in the workflow.
27. **Step 26: Summarize input (previous year) (summarize)** - This step performs a key action in the workflow.
28. **Step 27: Calculate date format for Google Ads request (last 7 days) (code)** - This step performs a key action in the workflow.
29. **Step 28: Call Google Ads Data: Last 7 days (httpRequest)** - This step performs a key action in the workflow.
30. **Step 29: Call Google Ads Data: Last 7 days (previous year) (httpRequest)** - This step performs a key action in the workflow.
31. **Step 30: Call Meta Ads Data: Last 7 days (facebookGraphApi)** - This step performs a key action in the workflow.
32. **Step 31: Call Meta Ads Data: Last 7 days (previous year) (facebookGraphApi)** - This step performs a key action in the workflow.
33. **Step 32: Summarize Meta input (current year) (summarize)** - This step performs a key action in the workflow.
34. **Step 33: Assign Meta data from input (current year) (set)** - This step performs a key action in the workflow.
35. **Step 34: Assign Meta data input (previous year) (set)** - This step performs a key action in the workflow.
36. **Step 35: Summarize Meta data input (previous year) (summarize)** - This step performs a key action in the workflow.
37. **Step 36: Format all Meta data for LLM (code)** - This step performs a key action in the workflow.
38. **Step 37: Processing for Google Ads report (openAi)** - This step performs a key action in the workflow.
39. **Step 38: Format all Google data for LLM (code)** - This step performs a key action in the workflow.
40. **Step 39: Assign Google Analytics data input (current year) (set)** - This step performs a key action in the workflow.
41. **Step 40: Summarize Google Analytics input (current year) (summarize)** - This step performs a key action in the workflow.
42. **Step 41: Calculate date format for meta ads request s (code)** - This step performs a key action in the workflow.
43. **Step 42: Calculation same period previous year1 (code)** - This step performs a key action in the workflow.
44. **Step 43: Assign Google Analytics data input (previous year) (set)** - This step performs a key action in the workflow.
45. **Step 44: Summarize Google Analytics input (previous year) (summarize)** - This step performs a key action in the workflow.
46. **Step 45: Send mail report (emailSend)** - This step performs a key action in the workflow.
47. **Step 46: Processing for Meta Ads Report (openAi)** - This step performs a key action in the workflow.
48. **Step 47: Processing for Google Analytics Report (openAi)** - This step performs a key action in the workflow.
49. **Step 48: Processing for Telegram Report (openAi)** - This step performs a key action in the workflow.
50. **Step 49: Weekly Report Agent (agent)** - This step performs a key action in the workflow.
51. **Step 50: Send Telegram report (telegram)** - This step performs a key action in the workflow.
52. **Step 51: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the generation of a weekly online marketing report by collecting data from Google Ads, Meta Ads, and Google Analytics, processing it with AI, and sending the results via email and Telegram.

### Demonstrate
A business owner could use this workflow to streamline weekly reporting, saving time spent on manual data collection and analysis, while ensuring accurate insights are delivered to stakeholders promptly.

### Imitate
1. Set up a **Schedule Trigger** to run weekly.
2. Use **Google Ads** and **Meta Ads** nodes to fetch last week's performance data.
3. Add **Google Analytics** nodes to gather relevant website metrics.
4. Use **OpenAI** to analyze and summarize the data.
5. Configure an **Email** node to send the report and a **Telegram** node for quick alerts.

### Practice
Try creating a simple version of this workflow by collecting data from one source (like Google Analytics), processing it with a basic calculation, and sending a summary email to yourself. 

### WIIFM
Mastering this workflow enables you to offer valuable reporting services to clients, enhancing decision-making and operational efficiency, which can lead to increased customer satisfaction and new business opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Sticky Note1" for IDs, table names, and URLs.
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
