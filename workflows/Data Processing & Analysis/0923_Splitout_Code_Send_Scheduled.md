# Splitout Code Send Scheduled

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, microsoftTeams, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Fetch Latest Channel Messages (microsoftTeams)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Team Member Weekly Report Agent (chainLlm)** - This step performs a key action in the workflow.
6. **Step 5: Merge Report With User Data (set)** - This step performs a key action in the workflow.
7. **Step 6: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: Reports to Single List (aggregate)** - This step performs a key action in the workflow.
9. **Step 8: Team Weekly Report Agent (chainLlm)** - This step performs a key action in the workflow.
10. **Step 9: Markdown to HTML (markdown)** - This step performs a key action in the workflow.
11. **Step 10: Send Report to Channel (microsoftTeams)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Group Messages By UserId (code)** - This step performs a key action in the workflow.
14. **Step 13: Groups to Items (splitOut)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of generating weekly reports for team members based on their Microsoft Teams messages. It fetches messages, summarizes them using AI, merges the data, and posts the final report back to the team channel.

### Demonstrate
A business owner can use this workflow to streamline team communication. For example, after a busy week, instead of manually compiling updates, the workflow automatically summarizes key points from team members and shares them, ensuring everyone is aligned for the upcoming week.

### Imitate
1. Set up a **Schedule Trigger** to run weekly.
2. Use **Microsoft Teams node** to fetch messages from a specific channel.
3. Integrate **OpenAI nodes** to generate summaries of each member's messages.
4. Merge individual reports with user data.
5. Aggregate all reports into a final team summary.
6. Convert the report from Markdown to HTML.
7. Use the **Microsoft Teams node** to send the final report to the channel.

### Practice
Try modifying the workflow to send reports via email instead of Microsoft Teams. Set up an SMTP node, and adjust the message body to include the HTML report. This will help you understand how to adapt the workflow for different communication channels.

### WIIFM
Mastering this workflow allows you to automate repetitive reporting tasks, saving time and increasing productivity. It positions you as a valuable asset to clients, enabling you to offer automation services that enhance team communication and operational efficiency, ultimately generating income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Sticky Note6" for IDs, table names, and URLs.
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
