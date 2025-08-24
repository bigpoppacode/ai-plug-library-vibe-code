# 7 AI Sales Assistant

## 🚀 What It Does
This workflow automates a process involving manualTrigger, agent, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: AI Agent (agent)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Tavily (toolHttpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Product List (googleSheetsTool)** - This step performs a key action in the workflow.
7. **Step 6: Update Sheet (googleSheetsTool)** - This step performs a key action in the workflow.
8. **Step 7: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
9. **Step 8: Sales Writing Assistant (agent)** - This step performs a key action in the workflow.
10. **Step 9: Review Calls (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
12. **Step 11: Testimonials Tool (googleSheetsTool)** - This step performs a key action in the workflow.
13. **Step 12: Structured Output Parser1 (outputParserStructured)** - This step performs a key action in the workflow.
14. **Step 13: Update Sheets 2 (googleSheetsTool)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of collecting data from sales calls, analyzing it with AI, and updating a Google Sheet with the results. It triggers when a manual test is initiated and processes information about company attendees, generating insights and personalized follow-up emails.

### Demonstrate
A business owner could use this workflow to streamline post-call follow-ups. After a sales call, the workflow gathers attendee data, analyzes it for business insights, and automatically sends tailored emails, ensuring no lead is neglected and enhancing customer engagement.

### Imitate
1. Start with a **Manual Trigger Node** to initiate the workflow.
2. Add an **AI Agent Node** to gather and analyze attendee data.
3. Use an **OpenAI Node** to process the data for insights.
4. Connect to a **Google Sheets Node** to update attendee information.
5. Add an **Email Node** to send personalized follow-ups based on AI insights.

### Practice
Try creating a simplified version of this workflow. Set up a manual trigger that collects basic attendee data (name, email), then use a Google Sheet to log this information. Experiment with sending a simple email confirmation to yourself after the data is logged.

### WIIFM
Mastering this workflow can help you automate tedious follow-up tasks, allowing you to focus on more strategic activities. By demonstrating your ability to streamline processes, you can attract clients seeking efficiency, thereby enhancing your value as an automation consultant and generating income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Update Sheets 2" for IDs, table names, and URLs.
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
