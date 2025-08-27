# Gmail Googlecalendartool Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Sticky Note** `stickyNote` — width: "617", height: "490", content: "## Check if incoming email is about appointment
We use LLM to check subject and body of the email and determine if it's an appointment request. "
3. **Sticky Note1** `stickyNote` — width: "796", height: "482", content: "## Get calendar availability and compose a response
Make sure to update the Workflow ID if you are running this as 2 workflows"
4. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
5. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
6. **Gmail Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
7. **Google Calendar** `googleCalendarTool` — operation: **getAll**
8. **Classify appointment** `textClassifier` — options: "[object Object]", inputText: "=Please evaluate the following email to determine if it suggests scheduling a meeting or a call:
Subject: {{ $json.Subject }}
Snippet: {{ $json.snippet }}", categories: "[object Object]"
9. **Agent** `agent` — text: "=Sender: {{ $('Gmail Trigger').first().json.From }}
Subject: {{ $('Gmail Trigger').first().json.Subject }}
Email Text: {{ $('Gmail Trigger').first().json.snippet }}", options: "[object Object]", promptType: "define"
10. **Send reply** `gmail` — operation: **reply**
11. **Mark as read** `gmail` — operation: **markAsRead**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of handling appointment-related emails. It triggers when a new email arrives, checks if the email is an appointment request using a language model, retrieves calendar availability from Google Calendar, and drafts a response proposing a suitable time. Finally, it sends the reply and marks the email as read.

**Demonstrate:**  
A business consultant could use this workflow to automatically handle client appointment requests, saving time and ensuring prompt responses, thus enhancing client satisfaction.

**Imitate:**  
1. Import the workflow into your n8n.
2. Connect Gmail and Google Calendar accounts.
3. Customize the email filter and calendar settings.
4. Test the workflow with a mock appointment request email.
5. Adjust the language model prompts if necessary.

**Practice:**  
Create a test Gmail account, send a few mock appointment request emails, and run the workflow. Observe how it handles different request formats and adjusts your settings for improved accuracy.

**WIIFM:**  
Mastering this workflow can streamline appointment scheduling, a common bottleneck in business operations. Offering this as a service can attract clients looking for efficient scheduling solutions, boosting your automation business's credibility and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, googleCalendarOAuth2Api.
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
  