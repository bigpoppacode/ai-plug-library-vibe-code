# Linkedin Webhook Automate Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Airtable Trigger**.
  2. **Airtable Trigger** `airtableTrigger` — table: `[object Object]`
3. **Webhook - Action Task Poor** `webhook` — method: **POST**, path: `/4ff46f8a-e1d0-4ad9-8dae-99de53838aaf`
4. **Sticky Note** `stickyNote` — color: "7", width: "714.7562585267917", height: "593.70786516854"
5. **Sticky Note1** `stickyNote` — color: "7", width: "373.05722240092274", height: "320.67415730337063"
6. **Sticky Note2** `stickyNote` — color: "7", width: "374.83146067415737", height: "303.820224719101"
7. **Sticky Note3** `stickyNote` — width: "709.4232592367164", height: "434.93437649014015", content: "## Training Feedback Automation with Usertask and Airtable
This n8n workflow is designed to automate the management of training feedback by integrating Airtable, Usertask, and vari…[truncated]"
8. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
9. **Switch1** `switch` — rules: "[object Object]", options: "[object Object]"
10. **Call Usertask - Create Task - Dissatisfaction** `httpRequest` — method: **POST**, url: `http://demo.usertask.io/api/task/create-instance`
11. **Call Usertask - Create Task - Pair and good** `httpRequest` — method: **POST**, url: `http://demo.usertask.io/api/task/create-instance`
12. **LinkedIn** `linkedIn` — text: "=🌟 Feedback on Our Recent Training Session! 🌟

We are excited to share the positive feedback from our participants regarding our latest training session. Here are some highlights…[truncated]", postAs: "organization", additionalFields: "[object Object]"
13. **Send Email after WebHook** `emailSend` — html: "=Dear Trainer's and HR Manager's,

We have received a training feedback rating of 1 star. It is crucial to address this issue promptly.

Response : {{ $json["body"]["results"][0]["…[truncated]", options: "[object Object]", subject: "Urgent: Training Feedback Requires Immediate Attention"
14. **Call Usertask - Create task** `httpRequest` — method: **POST**, url: `http://demo.usertask.io/api/task/create-instance`
15. **Call Usertask - Detail Task** `httpRequest` — url: `=https://demo.usertask.io/api/task/instance/info/{{ $json["body"]["code"] }}`
16. **Send Email - Information for marcketing** `emailSend` — options: "[object Object]", subject: "Task Created", toEmail: "contact@usertask.io"
17. **Poor  - Send Email** `emailSend` — html: "=Dear [Recipient Name],

We would like to inform you that a new task has been created to address the recent training feedback we received. Below are the details of the task:

Task …[truncated]", options: "[object Object]", subject: "New Task Created - Urgent: Training Feedback Requires Immediate Attention"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the management of training feedback. It starts by triggering whenever there's a new or updated feedback entry in Airtable. Based on the feedback rating, the workflow branches into different actions. For poor feedback, it creates tasks in Usertask and sends notifications to relevant parties. For fair to good feedback, it creates follow-up tasks. Positive feedback is documented and shared on LinkedIn. Notifications are sent via email for urgent feedback requiring immediate attention.

**Demonstrate:** A training company could use this workflow to automatically handle participant feedback, ensuring quick responses to negative feedback and celebrating positive feedback publicly, thus improving customer satisfaction and training quality.

**Imitate:** 1. Import the workflow into your n8n instance. 2. Connect your Airtable and Usertask accounts. 3. Customize the workflow to match your feedback evaluation criteria. 4. Set up email notifications with your SMTP settings. 5. Test the workflow with sample feedback data.

**Practice:** Create a test Airtable base and input various feedback ratings. Run the workflow and observe how tasks and notifications are generated based on different ratings. Experiment with adjusting the feedback criteria to see how it affects the workflow.

**WIIFM:** Mastering this workflow enables you to efficiently manage and act on customer feedback, enhancing your service quality and client satisfaction. This skill can be leveraged to offer automation solutions to other businesses, creating additional revenue streams in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtableOAuth2Api, linkedInOAuth2Api, smtp.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  