# Splitout Limit Automation Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When User Completes Form**.
2. **When User Completes Form** `formTrigger` — options: "[object Object]", formTitle: "Sales prospecting", formFields: "[object Object]"
3. **Edit Url LinkedIn** `set` — options: "[object Object]", assignments: "[object Object]"
4. **Edit Company Search** `set` — options: "[object Object]", assignments: "[object Object]"
5. **Get LinkedIn Entry on Google** `brightData` — url: `={{ $json.google_search }}`
6. **Get Company on Google** `brightData` — url: `={{ $json.google_search }}`
7. **Extract Body and Title from Website** `html` — operation: **extractHtmlContent**
8. **Extract Body and Title from Website1** `html` — operation: **extractHtmlContent**
9. **Parse Google Results** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
10. **Parse Google Results for Company** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
11. **Extract Parsed Results** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.results"
12. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content"
13. **Get only Matching Profiles** `filter` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
14. **Limit to 1 Profile** `limit` — configured for its default action.
15. **LinkedIn Profile is Found?** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
17. **Form Not Found** `form` — operation: **completion**
18. **Create a Followup for Company and Person** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
19. **Send Email** `emailSend` — html: "={{ $json.message.content.content }}", options: "[object Object]", subject: "Next followup"
20. **Form Email Sent** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates LinkedIn prospecting. When a user submits a form with a person's name and company, it searches Google for LinkedIn profiles matching the input. If a matching profile is found, it creates a personalized follow-up email using AI and sends it to the user. If no profile is found, it notifies the user.

**Demonstrate**  
A sales consultant might use this workflow to quickly gather LinkedIn profiles of potential leads from form submissions, saving time on manual searches and improving their outreach efficiency.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Bright Data and OpenAI accounts.  
3. Customize the form fields and email settings.  
4. Test the workflow with sample data to ensure it finds profiles and sends emails correctly.

**Practice**  
Create a sample form with a few fictional names and companies. Run the workflow to see how it processes the data, searches for LinkedIn profiles, and generates follow-up emails. Modify the form data to test different outcomes.

**WIIFM**  
Mastering this workflow allows you to automate lead generation and outreach, increasing efficiency and effectiveness in sales processes. This can help you attract more clients and offer valuable automation services, potentially boosting your income in an AI-driven business.

## 🔧 Setup Instructions
1. **Connect Credentials:** brightdataApi, openAiApi, smtp.
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
