# Code Schedule Automation Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Create UTM Link & Send To Database**.
  2. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
3. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $json.timestamp }}", sessionIdType: "customKey", contextWindowLength: "200"
4. **Google Analytics** `googleAnalyticsTool` — metricsGA4: "[object Object]", propertyId: "[object Object]", dimensionsGA4: "[object Object]"
5. **Create UTM Link & Send To Database** `manualTrigger` — configured for its default action.
6. **Schedule Google Analytics Report To Marketing Manager** `scheduleTrigger` — rule: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "500", height: "400", content: "Create a marketing link with UTM parameters. Easily store in database and have QR code created and ready as well.

Type in requirements:
website URL
campaign id
campaign source
cam…[truncated]"
8. **Sticky Note1** `stickyNote` — color: "4", width: "580", height: "540"
9. **Sticky Note2** `stickyNote` — color: "5", width: "1340", height: "460"
10. **Set UTM Parameters For Link** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Google Analytics Data Analysis Agent** `agent` — text: "={{ $json.timestamp }}", options: "[object Object]", promptType: "define"
12. **Create UTM Link With Parameters** `code` — jsCode: "const items = $input.all();
const updatedItems = items.map((item) => {
 const utmUrl = `${item?.json?.website_url}?utm_source=${item?.json?.campaign_source}&utm_medium=${item?.json…[truncated]"
13. **Send Summary Report To Marketing Manager** `gmail` — sendTo: "john@marketingcanopy.com", message: "={{ $json.output }}", options: "[object Object]"
14. **Create QR Code With Submitted QR Link** `httpRequest` — url: `=https://quickchart.io/qr?text={{ $json.utmUrl }}&size=300&margin=10&ecLevel=H&dark=000000&light=FFFFFF
`
15. **Submit UTM Link To Database** `airtable` — operation: **upsert**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation and management of UTM links for marketing campaigns. It generates UTM-parameterized URLs, stores them in an Airtable database, and creates QR codes for easy access. Additionally, it schedules Google Analytics reports to track the performance of these links and sends summary reports to the marketing manager.

### Demonstrate
A digital marketing consultant could use this workflow to streamline campaign tracking, ensuring precise data collection and analysis. By automating UTM link generation and performance reporting, they can focus on strategy rather than manual data handling.

### Imitate
1. Import workflow into n8n.
2. Connect OpenAI, Airtable, and Google Analytics accounts.
3. Set up UTM parameters in the workflow.
4. Schedule the Google Analytics report.
5. Test the workflow with a sample URL to ensure proper UTM link creation and QR code generation.

### Practice
Create a test campaign using a mock website URL and other UTM parameters. Run the workflow to generate a UTM link, store it in Airtable, and create a QR code. Verify the QR code redirects correctly and check Airtable for the stored link.

### WIIFM
Mastering this workflow can enhance your marketing analytics capabilities, providing clients with detailed insights into campaign performance. This expertise can lead to increased client satisfaction, better campaign ROI, and potential revenue growth for your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleAnalyticsOAuth2, airtableTokenApi, gmailOAuth2.
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
  