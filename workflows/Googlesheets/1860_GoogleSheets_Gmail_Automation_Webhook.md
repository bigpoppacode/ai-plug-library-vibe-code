# GoogleSheets Gmail Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **From Wordpress** `webhook` — method: **POST**, path: `/61858d25-af82-4cab-bb1b-68bea4989e15`
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
4. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
5. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **Google Gemini Chat Model3** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Sticky Note** `stickyNote` — color: "6", width: "800", height: "140"
8. **Sticky Note1** `stickyNote` — width: "360", height: "200", content: "Set your own classification categories"
9. **Sticky Note2** `stickyNote` — width: "320", height: "1140", content: "Create the draft of the reply email by dividing it into subject and text ready to be sent"
10. **Sticky Note3** `stickyNote` — width: "180", height: "1140", content: "send the draft to the correct department's company email"
11. **Subject and Text** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"subject": {
			"type": "string"
		},
		"text": {
			"type": "string"
		}
	}
}"
12. **Subject and Text 2** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"subject": {
			"type": "string"
		},
		"text": {
			"type": "string"
		}
	}
}"
13. **Subject and Text 3** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"subject": {
			"type": "string"
		},
		"text": {
			"type": "string"
		}
	}
}"
14. **Sticky Note4** `stickyNote` — color: "3", width: "800", height: "280"
15. **Set Fields** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Message Classifier** `textClassifier` — options: "[object Object]", inputText: "={{ $json.message }}", categories: "[object Object]"
17. **Email writer (Product info)** `chainLlm` — text: "=This is the message you received that you need to reply to:

First Name: {{ $('Set Fields').item.json.first_name }}
Last Name: {{ $('Set Fields').item.json.last_name }}
Email: {{ …[truncated]", messages: "[object Object]", promptType: "define"
18. **Email writer (Order info)** `chainLlm` — text: "=This is the message you received that you need to reply to:

First Name: {{ $('Set Fields').item.json.first_name }}
Last Name: {{ $('Set Fields').item.json.last_name }}
Email: {{ …[truncated]", messages: "[object Object]", promptType: "define"
19. **Email writer (Others)** `chainLlm` — text: "=This is the message you received that you need to reply to:

First Name: {{ $('Set Fields').item.json.first_name }}
Last Name: {{ $('Set Fields').item.json.last_name }}
Email: {{ …[truncated]", messages: "[object Object]", promptType: "define"
20. **Email draft - Product info** `gmail` — resource: **draft**
21. **Email draft - Order info** `gmail` — resource: **draft**
22. **Email draft - Other info** `gmail` — resource: **draft**
23. **Save on Sheet (product)** `googleSheets` — operation: **append**
24. **Save on Sheet (order)** `googleSheets` — operation: **append**
25. **Save on Sheet (other)** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of handling inquiries submitted through a WordPress contact form. It classifies messages into categories like product or order inquiries using AI, drafts a response email, and stores the message details and draft in Google Sheets. The workflow ensures efficient management of customer communications by automatically organizing and responding to inquiries.

**Demonstrate:**  
A small business owner could use this workflow to efficiently manage customer inquiries from their website, ensuring prompt responses and organized records, which enhances customer satisfaction and operational efficiency.

**Imitate:**  
1. Install the CF7 to Webhook plugin on WordPress.
2. Set up the n8n webhook to capture form submissions.
3. Connect Google Gemini, Gmail, and Google Sheets nodes to your accounts.
4. Customize email templates and classification categories.
5. Test the workflow with sample form submissions.

**Practice:**  
Create a test form on WordPress and submit sample inquiries. Observe how the workflow classifies and drafts responses. Check Google Sheets for stored data and review draft emails.

**WIIFM (What's In It For Me):**  
Mastering this workflow allows you to offer automation solutions to businesses, enhancing their customer service capabilities. This can lead to increased client retention and open opportunities for additional automation services, boosting your income as an AI automation consultant.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, gmailOAuth2, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  