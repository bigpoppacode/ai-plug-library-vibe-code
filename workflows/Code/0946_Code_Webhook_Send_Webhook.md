# Code Webhook Send Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×8, code×7, set×7.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note4**.
  2. **Receive Headers** `webhook` — method: **POST**, path: `/90e9e395-1d40-4575-b2a0-fbf52c534167`
3. **Sticky Note** `stickyNote` — width: "528.410729274179", height: "545.969373616973", content: "## Output
Returns output like:
```
[
    {
        "ipAnalysis": [
            {
                "IP": "104.245.209.248",
                "fraud_score": 87,
                "recent…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "628.6931617686989", height: "834.0576186324413", content: "![ipqualityscore](https://i.imgur.com/CQRV2uV.png)
## IP Reputation and Email Security Analysis
This critical part of the workflow specializes in fortifying email security by extra…[truncated]"
5. **Sticky Note4** `stickyNote` — width: "811.1951544353835", height: "1042.0833160085729", content: "![webhook](https://i.imgur.com/D6SP9P0.png)
## Workflow Overview
This n8n workflow is adept at dissecting email headers to assess security risks. It employs a webhook to receive da…[truncated]"
6. **Sticky Note5** `stickyNote` — width: "610.1426815377504", height: "772.7590323462559", content: "![ipapi](https://i.imgur.com/OMhn14b.png)
## IP Reputation and Fraud Analysis
This workflow section performs an in-depth reputation assessment of each IP address. The `IP-API` node…[truncated]"
7. **Sticky Note6** `stickyNote` — width: "1153.9919748350057", height: "818.3738794326835", content: "![n8n](https://i.imgur.com/lKnBNnH.png)
## Analyze and Respond to Email Header Analysis
The concluding segment of the `Analyze Email Headers For IPs and Spoofing` workflow integrat…[truncated]"
8. **Sticky Note8** `stickyNote` — width: "630.5819800503231", height: "535.80387776221", content: "![nodejs](https://i.imgur.com/OqjRFGZ.png)
## Authentication Analysis

This section assesses the presence and validity of SPF, DKIM, and DMARC records within email headers to confi…[truncated]"
9. **Sticky Note10** `stickyNote` — width: "983.9576126829675", height: "1039.0141642262715", content: "![n8n](https://i.imgur.com/yz109RJ.png)
## SPF and DKIM Authentication Routing
This group of nodes orchestrates the authentication status routing for SPF and DKIM records found in …[truncated]"
10. **Sticky Note2** `stickyNote` — width: "984.4210239195738", height: "672.6925241611406", content: "![nodejs](https://i.imgur.com/OqjRFGZ.png)
## Email Authentication Assessment
This set of nodes is dedicated to evaluating the authentication of email headers, specifically focusin…[truncated]"
11. **Extract Email Header from webhook** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
12. **Explode Email Header** `code` — jsCode: "// Takes the Header string and splits it into various items for analysis.
let returnArray = [];

for (const item of $input.all()) {
  const headerStr = item.json.header;
  const he…[truncated]"
13. **Received Headers Present?** `if` — conditions: "[object Object]"
14. **Authentication Results Present?** `if` — conditions: "[object Object]"
15. **Extract IPs from "received"** `code` — jsCode: "let ips = []

for (const item of $input.all()) {
  const header = JSON.stringify(item.json.header.received);
  console.log(header)
  const ipRegex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\…[truncated]"
16. **SPF/DKIM/DMARC from "authentication-results"** `code` — jsCode: "let mailAuth = [];

for (const item of $input.all()) {
  // SPF
  let spf = "unknown";
  if( JSON.stringify(item.json.header["authentication-results"]).includes("spf=pass") ) {
   …[truncated]"
17. **SPF Authentication Checker** `switch` — rules: "[object Object]", value1: "={{ JSON.stringify($json.header["authentication-results"]) }}", dataType: "string"
18. **SPF from "received-spf"** `code` — jsCode: "let spfArray = [];

for (const item of $('Authentication Results Present?').all()) {
    const spfList = item.json.header["received-spf"];

    if (!spfList || spfList.length == 0)…[truncated]"
19. **Split Out IPs** `itemLists` — options: "[object Object]", fieldToSplitOut: "ips"
20. **Set SPF Pass Status** `set` — values: "[object Object]", options: "[object Object]"
21. **Set SPF Fail Status** `set` — values: "[object Object]", options: "[object Object]"
22. **Set SPF Neutral Status** `set` — values: "[object Object]", options: "[object Object]"
23. **Set SPF UnknownStatus** `set` — values: "[object Object]", options: "[object Object]"
24. **DKIM from "dkim-signature"** `code` — jsCode: "let dkimArray = [];

for (const item of $('Authentication Results Present?').all()) {
    const dkimList = item.json.header["dkim-signature"];

    if (!dkimList || dkimList.length…[truncated]"
25. **IP Quality Score** `httpRequest` — url: `=https://ipqualityscore.com/api/json/ip/{{ Replace me with your API key, it can be found inside the api documentation, leave json.ip alone }}/{{ $json.ip }}?strictness=1&allow_publ…[truncated]`
26. **DKIM** `switch` — rules: "[object Object]", value1: "={{ $('Authentication Results Present?').item.json.header['authentication-results'] }}", dataType: "string"
27. **DMARC from "received-dmarc"** `code` — jsCode: "let dmarcArray = [];

for (const item of $('Authentication Results Present?').all()) {
    const dmarcList = item.json.header["received-dmarc"];

    if (!dmarcList || dmarcList.le…[truncated]"
28. **IP-API** `httpRequest` — method: **POST**, url: `=http://ip-api.com/json/{{ $('Split Out IPs').item.json.ip }}`
29. **Aggregate Authentication Data** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
30. **Fraud Score** `code` — mode: "runOnceForEachItem", jsCode: "let recentSpamActivity = "undefined";
let ipSenderReputation = "undefined";

try {
  if ($('IP Quality Score')) {
    const fraudScore = $('IP Quality Score').item.json.fraud_score…[truncated]"
31. **Collect interesting data** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
32. **IP Data Merge** `merge` — configured for its default action.
33. **Join IP Analysis into one JSON object** `itemLists` — operation: **concatenateItems**
34. **Merge Security Data** `merge` — configured for its default action.
35. **Join results into one JSON object** `itemLists` — operation: **concatenateItems**
36. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.result }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow analyzes email headers to assess security risks. It receives email headers via a webhook, extracts IP addresses and authentication results, and evaluates them using external APIs. The IP addresses are checked for reputation and fraud risk, while SPF, DKIM, and DMARC authentication records are validated. The workflow aggregates the data and responds with a detailed security analysis.

**Demonstrate**  
A business owner could use this workflow to automatically evaluate incoming emails for security threats, reducing the risk of phishing attacks and ensuring that only secure emails are processed and acted upon.

**Imitate**  
1. Set up an n8n instance and import the workflow.  
2. Configure your webhook node to receive email headers.  
3. Replace placeholders with your API keys for IP reputation services.  
4. Test the workflow with sample email headers to ensure correct analysis.  
5. Adjust nodes to match your security requirements.

**Practice**  
Create a test email with headers containing known IP addresses and authentication results. Run the workflow and observe how it evaluates the IP reputation and authentication status, ensuring it correctly identifies any threats.

**WIIFM**  
Mastering this workflow empowers you to offer email security analysis services to clients, enhancing their cybersecurity posture. This can lead to new business opportunities and increased revenue by providing a critical security service in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  