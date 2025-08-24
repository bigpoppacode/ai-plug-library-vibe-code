# Telegram Splitout Create Webhook

## 🚀 What It Does
This workflow automates a process involving chainLlm, lmChatGoogleGemini, scheduleTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Basic LLM Chain (chainLlm)** - This step performs a key action in the workflow.
3. **Step 2: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
4. **Step 3: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
5. **Step 4: CreateYearsList (code)** - This step performs a key action in the workflow.
6. **Step 5: CleanUpYearList (set)** - This step performs a key action in the workflow.
7. **Step 6: SplitOutYearList (splitOut)** - This step performs a key action in the workflow.
8. **Step 7: GetFrontPage (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: ExtractDetails (html)** - This step performs a key action in the workflow.
10. **Step 9: GetHeadlines (set)** - This step performs a key action in the workflow.
11. **Step 10: GetDate (set)** - This step performs a key action in the workflow.
12. **Step 11: MergeHeadlinesDate (merge)** - This step performs a key action in the workflow.
13. **Step 12: SingleJson (aggregate)** - This step performs a key action in the workflow.
14. **Step 13: Telegram (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering and categorizing headlines from Hacker News across multiple years, analyzing trends, and sending the results via Telegram. It pulls data, processes it with AI, and formats it for easy sharing.

### Demonstrate
A tech consultant could use this workflow to create a daily digest of trending tech news for clients. By automating the collection and categorization of headlines, they save time and provide valuable insights, enhancing their service offerings.

### Imitate
1. Import the workflow into n8n.
2. Configure the Google Gemini and Telegram nodes with your credentials.
3. Adjust the date range in the `CreateYearsList` step to target specific years.
4. Test the workflow to ensure it runs successfully and sends messages to your Telegram.

### Practice
Try modifying the workflow to pull headlines from a different source, like Reddit or Twitter. Change the HTTP request URL in the `GetFrontPage` step and adjust the parsing logic in the `ExtractDetails` step to suit the new data format.

### WIIFM
Mastering this workflow allows you to offer unique, automated insights as a service, helping businesses stay updated with industry trends. This can enhance your value proposition, attract more clients, and potentially increase your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Basic LLM Chain" and "Telegram" for IDs, table names, and URLs.
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
