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
This n8n workflow automates the process of researching sales call attendees and generating personalized follow-up emails and SMS. It collects data, uses AI for insights, updates Google Sheets, and structures the output for efficient communication.

### Demonstrate
A business owner could use this workflow after a sales call to automatically gather attendee information, analyze it, and send personalized follow-up emails or messages. This saves time and ensures consistent communication.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger to start the process.
3. Connect Google Sheets to gather attendee data.
4. Configure AI nodes to analyze the data.
5. Set up email and SMS nodes for follow-ups.
6. Test the workflow to ensure it runs smoothly.

### Practice
Create a simplified version of the workflow that only collects attendee names and emails, then sends a basic thank-you email. Test it with dummy data to see how the automation works without complexity.

### WIIFM
Mastering this workflow enables you to offer valuable automation services, helping businesses save time and enhance customer engagement. This skill can lead to attracting clients and generating income as part of an AI automation business.

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
