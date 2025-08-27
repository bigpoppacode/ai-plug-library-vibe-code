# Splitout Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.5-pro-preview-03-25"
4. **Sticky Note** `stickyNote` — color: "7", width: "780", height: "500"
5. **Sticky Note1** `stickyNote` — color: "7", width: "680", height: "540"
6. **Sticky Note2** `stickyNote` — color: "7", width: "660", height: "480"
7. **Sticky Note3** `stickyNote` — color: "7", width: "720", height: "480"
8. **Sticky Note4** `stickyNote` — color: "5", width: "280", height: "80"
9. **Sticky Note5** `stickyNote` — width: "420", height: "1380", content: "## Try it out!
### This n8n template imports an XLSX containing terms dates for a university, extracts the relevant events using AI and converts the events to an ICS file which can…[truncated]"
10. **Get Term Dates Excel** `httpRequest` — url: `https://www.westminster.ac.uk/sites/default/public-files/general-documents/undergraduate-term-dates-2025%E2%80%932026.xlsx`
11. **Markdown Conversion Service** `httpRequest` — method: **POST**, url: `https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/tomarkdown`
12. **Extract Target Sheet** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Extract Key Events and Dates** `informationExtractor` — text: "={{ $json.target_sheet }}", options: "[object Object]", schemaType: "manual"
14. **Events to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
15. **Fix Dates** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
16. **Sort Events by Date** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
17. **Events to ICS Document** `code` — language: "python", pythonCode: "from datetime import datetime, timedelta
import base64

async def json_array_to_ics_pyodide(json_array, prodid="-//My Application//EN"):
    """
    Converts a JSON array of calend…[truncated]"
18. **Create ICS File** `convertToFile` — operation: **toBinary**
19. **Send Email with Attachment** `gmail` — sendTo: "jim@example.com", message: "=Hey,

Please find attached calendar for Undergraduate terms dates 2025/2026.

Thanks", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the extraction of university term dates from an Excel file, converts them into a calendar format, and sends them via email. It starts by downloading the Excel file, converts its content to markdown using an external API, extracts key events and dates with AI, and processes the data into an ICS calendar file. Finally, it emails the calendar file to a specified recipient.

### Demonstrate
A university administrator could use this workflow to automatically update students and staff with the academic calendar, ensuring everyone has the correct dates in their digital calendars, reducing manual entry errors.

### Imitate
1. Import the workflow into n8n.
2. Update the Excel file URL in the "Get Term Dates Excel" node.
3. Set your Cloudflare account ID in the Markdown Conversion Service node.
4. Customize the email recipient in the "Send Email with Attachment" node.
5. Test the workflow to ensure it correctly processes and sends the calendar file.

### Practice
Create a sample Excel file with term dates and test the workflow. Check if the ICS file generated matches the events in your Excel. Experiment by changing event details to see how the workflow adapts.

### WIIFM
Mastering this workflow can streamline calendar management for educational institutions, reducing manual work and errors. As a consultant or business owner, offering this as a service can attract educational clients looking for efficient, automated solutions, enhancing client satisfaction and expanding your service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, cloudflareApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
