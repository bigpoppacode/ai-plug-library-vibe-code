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
This n8n workflow automates the process of fetching historical headlines from Hacker News on a specific date across multiple years, categorizing them, and sending the results as a Markdown-formatted message to a Telegram channel.

### Demonstrate
A business owner could use this workflow to create a daily digest of significant tech news from Hacker News, helping them stay informed about industry trends and share insights with their team or followers.

### Imitate
1. Set up a **Schedule Trigger** to run daily.
2. Use a **Code Node** to create a list of dates to fetch headlines for.
3. Implement **HTTP Request** to access Hacker News front page.
4. Extract and categorize headlines using **HTML Extraction**.
5. Send the formatted results via a **Telegram Node**.

### Practice
Try modifying the workflow to fetch headlines from a different source (like Reddit) instead of Hacker News. Adjust the extraction logic accordingly and test the output format.

### WIIFM
Mastering this workflow can help you create valuable content automation services for clients, allowing you to offer insights and updates that enhance decision-making and engagement, potentially leading to recurring income streams.

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
