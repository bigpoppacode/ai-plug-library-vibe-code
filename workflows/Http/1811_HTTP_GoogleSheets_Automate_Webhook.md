# HTTP GoogleSheets Automate Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Window Buffer Memory**.
  2. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $json.body.events[0].source.userId }}", sessionIdType: "customKey"
3. **Sticky Note** `stickyNote` — width: "620", height: "500", content: "## Extract text from image
**Prompt for Gemini**
Analyze image and then return in JSON Response that has the only following value: Status, From, To, Date, Amount"
4. **Sticky Note1** `stickyNote` — width: "420", height: "460", content: "## Gemini AI Assistant

AI Assistant using Gemini 2.0 Flash Experiment unlocks new possibilities for AI agents - intelligent systems that can use memory, reasoning, and planning to…[truncated]"
5. **Line: Messaging API** `webhook` — method: **POST**, path: `/4c0de537-2889-47d2-ac44-3a9cda89c9f3`
6. **Sticky Note2** `stickyNote` — width: "420", height: "1020", content: "## Reply to User

Reply the processing result to the user without coding or OCR processing."
7. **Sticky Note3** `stickyNote` — width: "420", height: "500", content: "## Insert result to Google Sheet
Get all important information from the Pay Slip and insert into Google Sheet in the same format that we have provided in our prompt.
"
8. **Sticky Note4** `stickyNote` — width: "620", height: "500", content: "## Get Line Message from User
User can send message in both text and Pay Slip image then classify the message type in text or image so we could have single workflow for AI Assistan…[truncated]"
9. **Google Gemini for Text** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
10. **Google Gemini for Image** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
11. **Message Type** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
12. **Message Classification** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Text Message Processing** `agent` — text: "=This is the message from User: {{ $json.body.events[0].message.text }}", agent: "conversationalAgent", options: "[object Object]"
14. **Line: Get Image** `httpRequest` — url: `=https://api-data.line.me/v2/bot/message/{{ $json.body.events[0].message.id }}/content `
15. **Line: Text Response to User** `httpRequest` — method: **POST**, url: `https://api.line.me/v2/bot/message/reply`
16. **Image Message Processing** `chainLlm` — text: "Analyze image and then return in JSON Response that has the only following Value:
Status, From, To, Date, Amount", messages: "[object Object]", promptType: "define"
17. **Line: Response to User** `httpRequest` — method: **POST**, url: `https://api.line.me/v2/bot/message/reply`
18. **Text from Slip Result** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of extracting and processing text from pay slip images sent via the LINE messaging app. It uses Google's Gemini AI to analyze image content, extracting key details like status, sender, recipient, date, and amount. This data is then stored in Google Sheets, providing an efficient method for managing and analyzing pay slip information.

### Demonstrate
A business owner could use this workflow to automate the processing of employee pay slips received through LINE. This ensures accurate data entry into Google Sheets, saving time and reducing errors associated with manual data entry.

### Imitate
1. Import the workflow into n8n.
2. Connect LINE, Google Gemini, and Google Sheets accounts.
3. Customize the Google Sheets template to match your needs.
4. Test the workflow by sending a test image via LINE.
5. Verify that the extracted data is correctly appended to your Google Sheet.

### Practice
Create a test scenario where you send a pay slip image via LINE. Observe how the workflow processes the image, extracts the necessary data, and updates the Google Sheet. Try tweaking the Google Sheets template to see how it affects the output.

### WIIFM
Mastering this workflow enables you to offer automated document processing services, increasing efficiency in handling pay slips or similar documents for businesses. This can lead to new business opportunities, customer satisfaction, and additional revenue streams in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, googleSheetsOAuth2Api, googlePalmApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  