# Manual Slack Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Click to Test Flow**.
  2. **Click to Test Flow** `manualTrigger` — configured for its default action.
3. **Receive certain keyword Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
4. **Get emails from Gmail with certain subject** `gmail` — operation: **getAll**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of extracting and processing information from emails related to Uber Eats orders. It triggers when an email with a specific subject is received, retrieves all such emails, extracts relevant details like price, shop, date, and time, and then sends this information to a designated Slack channel in a structured format. This helps in keeping track of order details in real-time and facilitates easy bookkeeping.

**Demonstrate:**  
A restaurant owner could use this workflow to automatically log Uber Eats orders into their Slack channel, making it easier to track and manage orders without manually checking emails.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Gmail and Slack accounts.  
3. Configure the Gmail trigger for emails with the subject "透過 Uber Eats 系統送出的訂單".  
4. Test the workflow to ensure it extracts and sends the right information to Slack.  
5. Adjust the Slack message format as needed.

**Practice:**  
Set up a test Gmail account and send sample Uber Eats order emails to it. Run the workflow to see how it processes these emails and sends the order details to Slack. Experiment with modifying the message format in Slack.

**WIIFM:**  
Mastering this workflow can streamline order processing, reduce manual errors, and enhance operational efficiency. As a business owner or consultant, you can offer this as a service to clients, improving their order management and potentially increasing your income through automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, slackOAuth2Api.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  