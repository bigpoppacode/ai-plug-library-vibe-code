# Code Extractfromfile Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Sticky Note2** `stickyNote` — color: "3", width: "180", height: "200"
4. **Sticky Note3** `stickyNote` — width: "260", content: "## AI Analysis
Uses GPT-4o to process the bundled reports and generate optimization instructions.
Passes system instructions and cleaned data as input."
5. **Sticky Note5** `stickyNote` — width: "540", height: "700", content: "## Amazon Ads Report Scheduling Instructions
To run this workflow, schedule the following Sponsored Products reports in the Amazon Ads Console:

Use "Detailed" for:

Search Term Re…[truncated]"
6. **Sticky Note6** `stickyNote` — width: "400", height: "520", content: "## Report Delivery

How to get reports into Google Drive

Use one of the following:

📥 Manual Upload – Download emailed reports and move them to your Drive folder

🤖 Automation –…[truncated]"
7. **Sticky Note7** `stickyNote` — width: "360", height: "520", content: "## Upgrade! 🚀

Apply for an Amazon Advertising API developer account to unlock full automation:

Generate reports programmatically via the Reports API

Fetch report files directly…[truncated]"
8. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
9. **Sticky Note** `stickyNote` — width: "220", content: "## Trigger
You may replace this with a scheduled event or poll the folder for changes."
10. **Sticky Note1** `stickyNote` — color: "3", width: "160", content: "## Change!
Edit these email options."
11. **Email Options** `set` — options: "[object Object]", assignments: "[object Object]"
12. **List Files** `googleDrive` — resource: **fileFolder**
13. **Get File** `googleDrive` — operation: **download**
14. **Set fileName** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
15. **is XLSX** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Extract XLSX Data** `extractFromFile` — operation: **xlsx**
17. **Extract CSV Data** `extractFromFile` — options: "[object Object]"
18. **Preserve File Name** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
19. **Preserve CSV File Name** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
20. **Merge XLSX and CSV** `merge` — configured for its default action.
21. **Format Data** `code` — jsCode: "const result = {};

for (const item of items) {
  const fileName = item.json.fileName || item.json.name || 'unknown_file';
  const baseName = fileName
    .split('.')[0]
    .repla…[truncated]"
22. **AI Analyze** `chainLlm` — text: "={{JSON.stringify($json)}}", messages: "[object Object]", promptType: "define"
23. **Email Optimizations** `gmail` — sendTo: "={{ $('Email Options').first().json.send_to }}", message: "={{
  (() => {
   let raw = $node["AI Analyze"].json["text"];

    // 🔧 Remove triple backticks and optional "json" tag
    raw = raw.replace(/^```json\s*/i, "").replace(/```$/, "…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of optimizing Amazon Ads using AI. It retrieves ad reports from Google Drive, processes and merges XLSX/CSV data, and uses GPT-4o to analyze the data and generate optimization instructions. These instructions are then emailed to a specified address, providing insights on improving ad performance.

### Demonstrate
A business owner could use this workflow to automatically generate optimization strategies for their Amazon Ads campaigns, improving ad performance and reducing manual data analysis time.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and OpenAI accounts.
3. Set the folder path for your ad reports.
4. Schedule report generation in Amazon Ads.
5. Customize email settings to send optimization results to your team.

### Practice
Create a test folder in Google Drive with sample ad reports. Run the workflow to see how it processes the data and generates optimization instructions. Adjust report filenames to test the workflow's ability to correctly classify and merge data.

### WIIFM
Mastering this workflow can help you offer data-driven ad optimization services, attracting clients looking to enhance their ad performance on Amazon. This can lead to increased revenue and a competitive edge in the digital marketing space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi, gmailOAuth2.
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
  