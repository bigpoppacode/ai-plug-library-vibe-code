# Code HTTP Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Google Sheets Trigger**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "subject": "",
  "cover_letter": ""
}"
4. **Sticky Note** `stickyNote` — color: "4", height: "480", content: "## Personalize here

### Set: 
- your name
- your company name
- your company activity, used to find a match with your leads
- your email, used as the sender"
5. **Google Sheets Trigger** `googleSheetsTrigger` — options: "[object Object]", pollTimes: "[object Object]", sheetName: "[object Object]"
6. **Sticky Note1** `stickyNote` — color: "4", width: "260", height: "500"
7. **Sticky Note2** `stickyNote` — color: "5", width: "340", height: "300"
8. **Sticky Note3** `stickyNote` — color: "4", width: "340", height: "480"
9. **Sticky Note4** `stickyNote` — color: "4", width: "280", height: "480"
10. **Sticky Note5** `stickyNote` — width: "700", height: "1180", content: "## Social Media Analysis and Automated Email Generation

> by Thomas Vie [Thomas@pollup.net](mailto:thomas@pollup.net)

### **Who is this for?**
This template is ideal for marketer…[truncated]"
11. **If** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
12. **Set your company's variables** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Get twitter ID** `httpRequest` — url: `https://twitter-api47.p.rapidapi.com/v2/user/by-username`
14. **Get tweets** `httpRequest` — url: `https://twitter-api47.p.rapidapi.com/v2/user/tweets`
15. **Exract and limit X** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
output = []
max_posts = 10
let counter = 0
for (const item of $input.all()[0].json.tweets) …[truncated]"
16. **Get linkedin Posts** `httpRequest` — url: `https://fresh-linkedin-profile-data.p.rapidapi.com/get-profile-posts`
17. **Extract and limit Linkedin** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
output = []
max_posts = 10
let counter = 0
for (const item of $input.all()[0].json.data) {
…[truncated]"
18. **Generate Subject and cover letter based on match** `chainLlm` — text: "=## Me
- My company name is:  {{ $('Set your company\'s variables').item.json.your_company_name }}
- My company's activity is: {{ $('Set your company\'s variables').item.json.your_…[truncated]", messages: "[object Object]", promptType: "define"
19. **Send Cover letter and CC me** `emailSend` — html: "={{ $json.output.cover_letter }}", options: "[object Object]", subject: "={{ $json.output.subject }}"
20. **Google Sheets** `googleSheets` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates personalized email outreach. It starts by triggering on a Google Sheets entry containing lead information. It then retrieves social media data from Twitter and LinkedIn using RapidAPI, analyzes the data with OpenAI to generate a personalized email, and sends it to the lead while updating the Google Sheet to track progress.

**Demonstrate:**  
A business owner could use this workflow to enhance lead engagement by automatically sending personalized emails based on the latest social media activity, saving time and increasing the effectiveness of their outreach.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect Google Sheets, RapidAPI, and OpenAI accounts.  
3. Customize the Google Sheet with lead details.  
4. Adjust the AI prompt to fit your messaging style.  
5. Test the workflow to ensure emails are sent correctly.

**Practice:**  
Create a Google Sheet with test lead data and run the workflow. Observe how it fetches social media data, generates personalized emails, and updates the sheet. Experiment with different AI prompts to see various email outputs.

**WIIFM:**  
Mastering this workflow can help you offer automated, personalized outreach services, enhancing lead engagement and conversion rates, thus adding significant value to your AI automation business and increasing your potential revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, openAiApi, smtp, googleSheetsTriggerOAuth2Api, googleSheetsOAuth2Api.
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
  