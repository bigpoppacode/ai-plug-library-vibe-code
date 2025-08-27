# Telegram Code Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Get interest name**.
2. **Get interest name** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "948.6687115198118", height: "296.5325040542755", content: "## Facebook API

To get the API Key you need to follow these steps:
https://developers.facebook.com/docs/commerce-platform/setup/api-setup/"
4. **Check message contents** `if` — conditions: "[object Object]"
5. **Extract message** `code` — jsCode: "let inputData = items[0].json; // get the input data
let message = inputData.message; // replace 'message' with the correct field name

let messageContent = '';

if (message && mes…[truncated]"
6. **No Operation, do nothing** `noOp` — configured for its default action.
7. **Split Message** `code` — jsCode: "let inputData = items[0].json; // get the input data
let variableContent = String(inputData.messageContent || ''); // replace 'variable' with the correct field name, convert to str…[truncated]"
8. **Connect to Graph API** `facebookGraphApi` — edge: "=", node: "=search?type=adinterest&q={{ $json.remainingContent }}
&limit=1000000&locale=en_US ", options: "[object Object]"
9. **Split Interests into a Table** `code` — jsCode: "let inputData = items[0].json; // get the input data
let outputData = [];

for(let key in inputData) {
    if(inputData.hasOwnProperty(key)) {
        let itemKey = key;
        le…[truncated]"
10. **Get variables** `code` — jsCode: "let outputData = items.map(item => {
    let data = item.json.Value;
    
    return {
        json: {
            'name': data.name,
            'audience_size_lower_bound': data.…[truncated]"
11. **Create a Spreadsheet** `spreadsheetFile` — operation: **toFile**
12. **Send the Spreadsheet file** `telegram` — operation: **sendDocument**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of extracting interest data from Telegram messages and querying the Facebook Graph API to gather related audience insights. It starts by capturing messages from a Telegram chat, checks if they contain interest-related content, and extracts the relevant part. The workflow then queries the Facebook Graph API for insights on the specified interest, processes the results, and compiles them into a CSV file. Finally, it sends this file back to the Telegram chat, providing detailed audience data to the user.

### Demonstrate
A social media consultant might use this workflow to quickly gather audience insights for specific interests mentioned in a Telegram group. This can help in strategizing targeted advertising campaigns by understanding the audience size and characteristics.

### Imitate
1. Import the workflow into n8n.
2. Set up your Telegram and Facebook API credentials.
3. Ensure your Telegram bot is part of the group where messages will be captured.
4. Customize the workflow to match your interest query needs.
5. Test the workflow by sending a message with the hashtag "#interest" followed by a keyword.

### Practice
Create a test Telegram group, add your bot, and send messages with different interests. Observe how the workflow extracts the interest, queries the Facebook API, and sends back a CSV file with the audience data.

### WIIFM
Mastering this workflow can enhance your ability to offer data-driven marketing strategies to clients. By providing precise audience insights, you can increase the effectiveness of advertising campaigns, leading to better client satisfaction and potential revenue growth for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, facebookGraphApi.
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
