# Mailjet Gmail Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "257", height: "332", content: "## Gmail
1. Connect your Gmail Account, where you are receiving emails from your Netflix account. 
2. Set the polling intervall"
4. **Sticky Note1** `stickyNote` — width: "249", height: "338", content: "## Set all recipients
Replace the sample emails in the array with the email addresses of your friends and family to whom you want to forward the Netflix emails"
5. **Sticky Note2** `stickyNote` — width: "265", height: "335", content: "## Mailjet
1. Connect your Mailjet Account to forward the Netflix emails
2. Set your sender email address"
6. **Set all recipients** `set` — fields: "[object Object]", options: "[object Object]"
7. **Split Out recipients** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "recipients"
8. **Mailjet** `mailjet` — html: "={{ $json.html }}", text: "={{ $json.text }}", subject: "={{ $json.subject }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automatically forwards Netflix emails received in a Gmail account to multiple recipients using Mailjet. It first triggers on Netflix emails, sets up the list of recipients, and then sends each email through Mailjet to the specified addresses.

### Demonstrate
A business owner can use this workflow to ensure that all team members receive important updates from a company subscription service like Netflix, maintaining transparency and keeping everyone informed.

### Imitate
1. Import the workflow into n8n.
2. Connect your Gmail and Mailjet accounts.
3. Set up the Gmail trigger to filter Netflix emails.
4. Replace sample emails with desired recipient addresses.
5. Test the workflow to ensure proper forwarding.

### Practice
Create a Gmail filter to label emails from Netflix. Run the workflow and check if the emails are forwarded to your test recipients. Modify the recipient list to see the changes in action.

### WIIFM
Mastering this workflow enables you to offer email forwarding services to clients, ensuring they never miss important communications. This can enhance client satisfaction and open doors for additional automation services, increasing your business income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, mailjetEmailApi.
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
  