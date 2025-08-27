# Manual Gmail Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **SplitInBatches**.
  2. **SplitInBatches** `splitInBatches` — options: "[object Object]", batchSize: "100"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of managing emails in Gmail. It retrieves all emails that are not chats and do not contain certain keywords (like "unsubscribe", "license", "key", "password"). It then processes these emails in batches of 100, deleting each email in the batch. This helps in efficiently managing and cleaning up your Gmail inbox by removing old or unnecessary emails.

**Demonstrate**  
A business owner could use this workflow to automatically clean their Gmail inbox, ensuring that only relevant and important emails are retained. This reduces clutter and helps maintain focus on critical communications.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Gmail account using OAuth2 credentials.  
3. Set up the manual trigger to execute the workflow.  
4. Customize the email query to suit your needs.  
5. Test the workflow to ensure it deletes the desired emails.

**Practice**  
Create a Gmail label for testing and move some emails there. Modify the query to target this label and run the workflow. Verify that only the emails in the test label are processed and deleted, allowing you to safely test the workflow's functionality.

**WIIFM**  
Mastering this workflow can streamline your email management, saving you time and improving productivity. By offering email cleanup services, you can attract clients looking to optimize their communication processes, thereby expanding your automation business and increasing revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2.
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
  