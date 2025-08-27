# Twilio Stickynote Send Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Twilio Trigger**.
2. **Twilio Trigger** `twilioTrigger` — updates: "com.twilio.messaging.inbound-message.received"
3. **Search Available Courses** `airtableTool` — operation: **search**, table: `[object Object]`
4. **Get Course Database Schema** `airtableTool` — resource: **base**, operation: **getSchema**
5. **Get List of Professors** `airtableTool` — operation: **search**, table: `[object Object]`
6. **Get List of Departments** `airtableTool` — operation: **search**, table: `[object Object]`
7. **Model** `lmChatOpenAi` — model: `[object Object]`
8. **Memory** `memoryBufferWindow` — configured for its default action.
9. **Sticky Note** `stickyNote` — width: "420", height: "1320", content: "## Try It Out!
### This n8n template offers a simple yet capable chatbot assistant who can answer course enquiries over SMS.

Given the right access to data, AI Agents are capable …[truncated]"
10. **Get User Message** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Course Assistant Agent** `agent` — text: "={{ $json.message }}", options: "[object Object]", promptType: "define"
12. **Append to Call Log** `airtable` — operation: **create**, table: `[object Object]`
13. **Send SMS reply** `twilio` — to: "={{ $json.fields.from }}", from: "={{ $('Twilio Trigger').item.json.To }}", message: "={{ $('Course Assistant Agent').item.json.output }}"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow is designed to automate course inquiries via SMS. When a student sends a message, the workflow uses Twilio to receive the message and extracts the content. It then employs an AI agent to search the course database in Airtable for relevant information, such as available courses, professors, and departments. The AI agent formulates a response based on this data and logs the interaction in Airtable. Finally, the response is sent back to the student via SMS.

**Demonstrate:**  
A university could use this workflow to handle student inquiries about courses. It automates the process of answering common questions, saving time for administrative staff and providing quick responses to students.

**Imitate:**  
1. Set up a Twilio account for SMS integration.
2. Connect Airtable with the course database.
3. Import the workflow into n8n.
4. Customize the AI agent prompts to align with your course information.
5. Test the workflow by sending a sample inquiry SMS.

**Practice:**  
Create a sample Airtable with course data. Send a test SMS asking about available courses on Wednesdays. Observe how the workflow processes the request and sends a response.

**WIIFM:**  
Mastering this workflow can help you offer automated customer service solutions to educational institutions, enhancing their efficiency. This could lead to new clients and revenue streams in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** twilioApi, airtableTokenApi, openAiApi.
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
