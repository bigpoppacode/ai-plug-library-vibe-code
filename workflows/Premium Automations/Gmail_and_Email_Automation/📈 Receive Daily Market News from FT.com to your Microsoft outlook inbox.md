# 📈 Receive Daily Market News From Ft.com To Your Microsoft Outlook Inbox

## 🚀 What It Does
This workflow automates a process involving html, httpRequest, scheduleTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Extract specific content (html)** - This step performs a key action in the workflow.
3. **Step 2: Get financial news online (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
6. **Step 5: Gather the elements (set)** - This step performs a key action in the workflow.
7. **Step 6: AI Agent (agent)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Send the summary by e-mail (microsoftOutlook)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the daily extraction of financial news from a website, summarizes it using AI, and sends it via email. It runs on a schedule, pulls specific content, processes it through a language model, and formats the output for clarity.

### Demonstrate
A business owner can use this workflow to provide daily financial news updates to clients. This saves time and ensures clients receive timely, relevant information without manual effort, enhancing client relationships and perceived value.

### Imitate
1. Create a new workflow in n8n.
2. Add a **Schedule Trigger** to run daily.
3. Use **httpRequest** to fetch news from a financial website.
4. Add **Extract specific content** to gather headlines.
5. Implement **AI Agent** to summarize the news.
6. Use **Microsoft Outlook** to send the summary via email.

### Practice
Try adapting the workflow to extract news from a different website. Change the CSS selectors in the extraction step and test if it still summarizes effectively. This will reinforce your understanding of data extraction and processing.

### WIIFM
Mastering this workflow allows you to automate information delivery, positioning yourself as a valuable resource to clients. You can create a niche service in content curation, saving businesses time and improving client engagement, ultimately driving revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Extract specific content" and "Send the summary by e-mail" for IDs, table names, and URLs.
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
