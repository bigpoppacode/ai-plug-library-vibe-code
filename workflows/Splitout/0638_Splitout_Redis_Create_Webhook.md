# Splitout Redis Create Webhook
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
**Explain:**  
This n8n workflow automates user interviews using AI. It starts by capturing the interviewee's name via a form, sets the interview topic, and uses an AI agent to generate questions. The interviewee's responses are recorded and stored in a Redis database, and the interview continues until the user opts to stop. The entire session, including questions and answers, is saved to Google Sheets for analysis. The workflow also provides a completion screen with the interview transcript.

**Demonstrate:**  
A business could use this workflow to conduct automated interviews for customer feedback, saving time on manual interviews and ensuring consistent data collection, which can then be analyzed to improve services or products.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up a form to capture the interviewee's name and start the interview.
3. Configure the AI agent to generate questions based on your interview topic.
4. Store responses in a Redis database and push them to Google Sheets.
5. Test the workflow to ensure it functions correctly.

**Practice:**  
Create a mock interview scenario where you ask questions about user experience with a product. Run the workflow with a test participant and review the transcript to understand how the data is collected and stored.

**WIIFM:**  
Mastering this workflow allows you to offer automated interview services, providing scalable solutions for businesses seeking to gather customer insights efficiently. It enhances your service portfolio, potentially increasing client engagement and revenue opportunities.

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
