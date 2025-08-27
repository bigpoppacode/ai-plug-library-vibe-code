# Splitout Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Azure OpenAI Chat Model2** `lmChatAzureOpenAi` — model: `4o`
3. **Azure OpenAI Chat Model3** `lmChatAzureOpenAi` — model: `4o`
4. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
5. **Azure OpenAI Chat Model1** `lmChatAzureOpenAi` — model: `4o`
6. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "yogaPoses": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sequence": { "type":…[truncated]"
7. **PosesDatabase1** `googleSheetsTool` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
8. **Trigger 2130 YogaPosesToday** `scheduleTrigger` — rule: "[object Object]"
9. **Azure OpenAI Chat Model5** `lmChatAzureOpenAi` — model: `4o`
10. **Azure OpenAI Chat Model** `lmChatAzureOpenAi` — model: `4o`
11. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "[
  {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://pocketyoga.com/assets/images/thumbnails146/SupineAngle-tn146.png",
      "size": "full",
    …[truncated]"
12. **Auto-fixing Output Parser1** `outputParserAutofixing` — options: "[object Object]"
13. **Azure OpenAI Chat Model6** `lmChatAzureOpenAi` — model: `4o`
14. **Azure OpenAI Chat Model4** `lmChatAzureOpenAi` — model: `4o`
15. **Sticky Note** `stickyNote` — color: "5", width: "260", height: "240"
16. **Sticky Note1** `stickyNote` — color: "4", width: "400", height: "500"
17. **Sticky Note2** `stickyNote` — color: "2", width: "540", height: "660"
18. **Sticky Note3** `stickyNote` — color: "2", width: "540", height: "660"
19. **Sticky Note4** `stickyNote` — color: "3", width: "540", height: "660"
20. **Sticky Note5** `stickyNote` — color: "6", width: "1020", height: "660"
21. **Get PoseName** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
22. **Code** `code` — jsCode: "const items = $input.all();

let outputText = "";
let poseNamesList = []; // New list to store only PoseNames

items.forEach(item => {
  const { PoseName, uri, url } = item.json;
 …[truncated]"
23. **WriteJSONflex** `chainLlm` — text: "={{ $json.outputText }}", messages: "[object Object]", promptType: "define"
24. **WritePosesToday** `chainLlm` — text: "=Let's calm down and focus on these poses today.

{{ $('Code').item.json.poseNamesOnly }}

have a great practice!", messages: "[object Object]", promptType: "define"
25. **RewritePosesToday** `chainLlm` — text: "={{ $json.text }}", messages: "[object Object]", promptType: "define"
26. **CombineAll** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Fix JSON** `chainLlm` — text: "=Fix this JSON

{{ $json.LineBody }}", messages: "[object Object]", promptType: "define"
28. **Line Push with Flex Bubble** `httpRequest` — method: **POST**, url: `https://api.line.me/v2/bot/message/push`
29. **YogaLog** `googleSheets` — operation: **append**
30. **AI Agent** `agent` — text: "=You'll change this into properly format of JSON without having emoji. You'll also make sure the name is matched the data in googlesheet

 {{ $json.Text }}", options: "[object Object]", promptType: "define"
31. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.yogaPoses"
32. **YogaLog2** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to automate the process of sending daily yoga pose reminders via Line messaging. It retrieves yoga poses from a Google Sheet, processes them using Azure OpenAI for formatting, and then sends a structured message with images and text to users. The workflow logs activities and updates the Google Sheet with sent messages.

### Demonstrate
A yoga studio could use this workflow to send daily yoga pose sequences to their members via Line, enhancing engagement and encouraging daily practice without manual effort.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and Line accounts.
3. Modify the Google Sheets data with your yoga poses.
4. Schedule the workflow to trigger at your preferred time.
5. Test the workflow to ensure messages are sent correctly.

### Practice
Create a small Google Sheet with a list of yoga poses and run the workflow manually to see how it formats and sends the messages. Adjust the pose data to observe different message outputs.

### WIIFM
Mastering this workflow allows you to offer personalized, automated messaging services to yoga studios, increasing their customer engagement and retention. This can be a valuable addition to your AI automation business, offering a unique service to clients in the wellness industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** azureOpenAiApi, googleSheetsOAuth2Api, httpHeaderAuth.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
