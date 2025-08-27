# Telegram Webhook Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Proxmox API Documentation** `toolHttpRequest` — url: `https://pve.proxmox.com/pve-docs/api-viewer/index.html`
3. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
4. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
5. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "response_type": "POST",
  "url": "/nodes/psb1/qemu",
  "details": {
    "vmid": 105,
    "cores": 4,
    "memory": 8192,
    "net0": "virtio,bridge=vmbr0",
    "disk0": "local…[truncated]"
6. **Proxmox** `toolHttpRequest` — url: `https://10.11.12.101:8006/api2/json/cluster/status`
7. **Sticky Note** `stickyNote` — width: "736.2768017274677", height: "1221.0199187779397", content: "[redacted]"
8. **Sticky Note1** `stickyNote` — color: "6", width: "492.990678850593", height: "702.0895748933872"
9. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
10. **Sticky Note2** `stickyNote` — color: "5", width: "789.7678716732242", height: "1260.380358008782"
11. **When chat message received** `chatTrigger` — options: "[object Object]"
12. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
13. **Gmail Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
14. **Webhook** `webhook` — path: `/459d848d-72ed-490f-bc48-e5dc60242896`
15. **Sticky Note3** `stickyNote` — color: "3", width: "486.2369951168387", height: "1245.2937736920358"
16. **Proxmox API Wiki** `toolHttpRequest` — url: `https://pve.proxmox.com/wiki/Proxmox_VE_API`
17. **Sticky Note4** `stickyNote` — color: "5", width: "895.2529822972874", height: "517.5348441931358"
18. **Sticky Note5** `stickyNote` — color: "5", width: "900.3261837471116", height: "712.4591709572671"
19. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
20. **Sticky Note6** `stickyNote` — color: "7", width: "261.5261328042567", height: "1262.1316376259997"
21. **Sticky Note7** `stickyNote` — color: "4", width: "475.27306699862953", height: "515.4734551650874"
22. **AI Agent** `agent` — text: "[redacted]", agent: "reActAgent", options: "[object Object]"
23. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
24. **HTTP Request** `httpRequest` — method: **=GET**, url: `=https://10.11.12.101:8006/api2/json{{ $json.output.properties.url.pattern }}`
25. **If** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
26. **If1** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
27. **Structure Response** `code` — jsCode: "// Access all items from the incoming node
const items = $input.all();

// Combine all fields of each item into a single string
const combinedData = items.map(item => {
    const i…[truncated]"
28. **HTTP Request1** `httpRequest` — method: **=POST**, url: `=https://proxmox.syncbricks.com/api2/json{{ $json.output.url }}`
29. **HTTP Request2** `httpRequest` — method: **=POST**, url: `=https://10.11.12.101:8006/api2/json{{ $json.output.url }}`
30. **HTTP Request3** `httpRequest` — method: **DELETE**, url: `=https://10.11.12.101:8006/api2/json{{ $json.output.url }}`
31. **HTTP Request4** `httpRequest` — method: **DELETE**, url: `=https://10.11.12.101:8006/api2/json{{ $json.output.url }}`
32. **AI Agent1** `agent` — text: "=You are a are a Proxmox Information Output Expert who will provide the summary of the information generated about proxmox. Here is the information about proxmox : from url{{ $('AI…[truncated]", agent: "conversationalAgent", options: "[object Object]"
33. **Merge** `merge` — configured for its default action.
34. **Merge1** `merge` — configured for its default action.
35. **Structgure Response from Proxmox** `code` — jsCode: "// Access the 'data' field from the input
let rawData = $json["data"];

// Split the string by colon (:) to extract parts
let parts = rawData.split(":");

// Create an object with …[truncated]"
36. **Format Response and Hide Sensitive Data** `code` — jsCode: "// Extract required fields from the input
let node = $json["node"] || "unknown node";
let operation = $json["operation"] || "unknown operation";
let user = $json["user"] || "unknow…[truncated]"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googlePalmApi, telegramApi, gmailOAuth2.
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
