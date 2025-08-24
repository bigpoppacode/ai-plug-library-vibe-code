# Hacker News Throwback Machine   See What Was Hot On This Day, Every Year!

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
This n8n workflow automates the process of analyzing and categorizing news headlines from Hacker News over multiple years. It retrieves headlines based on specific dates, processes them using AI, and sends a formatted summary via Telegram.

### Demonstrate
A tech consultant might use this workflow to provide clients with weekly insights into industry trends by sending daily summaries of relevant news articles, enhancing their knowledge without manual effort.

### Imitate
1. Set up a **Schedule Trigger** to run daily.
2. Use a **Code Node** to create a list of target years.
3. Add an **HTTP Request Node** to fetch headlines from Hacker News.
4. Process the fetched data with an **AI Node** for categorization.
5. Send the output to a **Telegram Node** for distribution.

### Practice
Try modifying the workflow to fetch headlines from a different news source or adjust the date range. Experiment with the AI processing step to categorize news based on different themes.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, enabling them to stay informed on industry trends effortlessly. This positions you as a key partner in enhancing their decision-making processes and can lead to increased revenue opportunities.

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
