# Splitout Redis Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Start Interview**.
2. **Sticky Note** `stickyNote` — width: "180", height: "260", content: "














### 🚨 Set Interview Topic Here!"
3. **Sticky Note1** `stickyNote` — color: "7", width: "490", height: "220"
4. **Start Interview** `formTrigger` — options: "[object Object]", formTitle: "=UK Practical Driving Test Satisfaction Interview", formFields: "[object Object]"
5. **Sticky Note2** `stickyNote` — color: "7", width: "614", height: "280"
6. **Sticky Note3** `stickyNote` — color: "7", width: "580", height: "202"
7. **Sticky Note4** `stickyNote` — color: "7", width: "528", height: "253"
8. **Sticky Note5** `stickyNote` — width: "522.6976744186048", height: "787.6241860465118", content: "## Try it out! 

### Conducting user interviews have been traditionally difficult due to preparation, timing and execution costs. What if we let an AI/LLM do it instead?

This temp…[truncated]"
9. **Window Buffer Memory2** `memoryBufferWindow` — sessionKey: "={{ $('UUID').first().json.data }}", sessionIdType: "customKey"
10. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('UUID').first().json.data }}", sessionIdType: "customKey"
11. **Sticky Note6** `stickyNote` — width: "276.4353488372094", height: "320.31553488372094", content: "














### 🚨 Set Your Webhook URL here!
For this demo, we want to show a customised completion screen with transcript so it's necessary to redirect to a webhook (see step …[truncated]"
12. **Sticky Note7** `stickyNote` — color: "5", width: "236.3564651162793", height: "345.82027906976737"
13. **Sticky Note8** `stickyNote` — color: "7", width: "588", height: "207"
14. **Webhook** `webhook` — path: `/ai-interview-transcripts/:session_id`
15. **Groq Chat Model** `lmChatGroq` — model: `llama-3.2-90b-text-preview`
16. **Sticky Note9** `stickyNote` — color: "7", width: "508", height: "293"
17. **UUID** `crypto` — action: "generate"
18. **Query By Session** `redis` — operation: **get**
19. **Create Session** `redis` — operation: **set**
20. **Valid Session?** `if` — options: "[object Object]", conditions: "[object Object]"
21. **Generate Row2** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Show Transcript** `html` — html: "
<html lang='en'>

	<head>
		<meta charset='UTF-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		<link rel='icon' type='image/png' href='https://n…[truncated]"
23. **404 Not Found** `html` — html: "
<html lang='en'>

	<head>
		<meta charset='UTF-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		<link rel='icon' type='image/png' href='https://n…[truncated]"
24. **Update Session** `redis` — operation: **push**
25. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
26. **Set Interview Topic** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates conducting user interviews using AI. It starts with a form to collect the interviewee's name and creates a session in Redis for data storage. An AI agent then generates interview questions, which the user answers through the form. The responses are stored in Redis and optionally saved to Google Sheets. The interview continues until the user decides to stop, triggering the completion screen with a transcript display.

### Demonstrate
A market researcher could use this workflow to automate customer feedback collection. By having the AI dynamically generate questions, they can gather deeper insights without manual question preparation, saving time and reducing costs.

### Imitate
1. Import the workflow to n8n.
2. Connect Redis, Google Sheets, and any other needed services.
3. Set up a form to capture the interviewee's name.
4. Customize the AI agent's prompts and logic for your specific interview topic.
5. Test the workflow to ensure it collects and saves data correctly.

### Practice
Create a test form and run the workflow, simulating an interview. Explore modifying the AI agent's questions based on the interviewee's responses. Check the saved transcripts in Google Sheets to ensure data accuracy.

### WIIFM
Mastering this workflow allows you to offer AI-driven interview services, providing clients with automated, scalable solutions for data collection. This can enhance your service offerings, attract new customers, and generate additional income in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** redis, groqApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.

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
