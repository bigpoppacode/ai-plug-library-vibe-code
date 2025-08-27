# Limit Webhook Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Gmail - Webhook** `webhook` — method: **POST**, path: `/fb37cff7-b543-45f0-922d-4e0edcae5e43`
4. **Sticky Note** `stickyNote` — color: "7", width: "630.8094744668451", height: "645.5004204663932"
5. **Sticky Note2** `stickyNote` — color: "7", width: "869.3564073187465", height: "611.2507800793627"
6. **Sticky Note3** `stickyNote` — color: "7", width: "922.1859426288208", height: "824.9161858198846"
7. **Sticky Note4** `stickyNote` — color: "7", width: "1016.1357697283069", height: "541.7962991053803"
8. **Sticky Note5** `stickyNote` — color: "7", width: "1285.8545784346588", height: "759.649504764657"
9. **Sticky Note6** `stickyNote` — color: "7", width: "1016.1357697283069", height: "1666.528211982754"
10. **Sticky Note1** `stickyNote` — color: "7", width: "625.8275790033185", height: "660.0846008994936"
11. **Set Gmail Headers Here** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Set Gmail Webhook Headers Here** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Gmail - Set Headers** `set` — options: "[object Object]", includeOtherFields: "true"
14. **Gmail - Extract Received Headers** `code` — jsCode: "// Extract the headers object from the JSON
const headers = $('Gmail - Set Headers').item.json.headers;

// Find all keys that start with "received" (case-insensitive)
const receiv…[truncated]"
15. **Gmail - Remove Extra Received Headers** `limit` — keep: "lastItems"
16. **Gmail - Extract Original From IP** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Gmail - Original IP Found?** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Gmail - Query IP Quality Score API** `httpRequest` — url: `=https://ipqualityscore.com/api/json/ip/Mlg6aZdzI1mVehUD3Z5Ak5Vl4yNN7P8v/{{ $('Gmail - Extract Original From IP').item.json.extractedfromip }}?strictness=1&allow_public_access_poin…[truncated]`
19. **Skip IP Check** `noOp` — configured for its default action.
20. **Gmail - Query IP API** `httpRequest` — url: `=http://ip-api.com/json/{{ $('Gmail - Extract Original From IP').item.json.extractedfromip }}`
21. **Gmail - Authentication-Results Header?** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Gmail - Extract Authentication-Results Header** `code` — jsCode: "// Extract the headers object from the JSON
const headers = $('Gmail - Set Headers').item.json.headers;

// Find all keys that start with "received" (case-insensitive)
const receiv…[truncated]"
23. **Gmail - Received-SPF Header?** `if` — options: "[object Object]", conditions: "[object Object]"
24. **Gmail - DKIM-Signature Header?** `if` — options: "[object Object]", conditions: "[object Object]"
25. **Gmail - DMARC Header?** `if` — options: "[object Object]", conditions: "[object Object]"
26. **Gmail - Determine Auth Values** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Gmail - Extract Received-SPF Header** `code` — jsCode: "// Extract the headers object from the JSON
const headers = $('Gmail - Set Headers').item.json.headers;

// Find all keys that start with "received" (case-insensitive)
const receiv…[truncated]"
28. **Gmail - No SPF Found** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Gmail - DKIM Signature Found** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Gmail - No DKIM Signature Found** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Gmail - Extract DMARC Header** `code` — jsCode: "// Extract the headers object from the JSON
const headers = $('Gmail - Set Headers').item.json.headers;

// Find all keys that start with "received" (case-insensitive)
const receiv…[truncated]"
32. **Gmail - No DMARC Header** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Format Combined Auth Output1** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Aggregate Received-SPF Headers1** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
35. **Gmail - Set DMARC Value** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Gmail - Set SPF Value** `set` — options: "[object Object]", assignments: "[object Object]"
37. **Gmail - Merge** `merge` — numberInputs: "3"
38. **Gmail - Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
39. **Format Individual Auth Outputs1** `set` — options: "[object Object]", assignments: "[object Object]"
40. **Gmail - Format Output** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
41. **Gmail - Respond to Webhook** `respondToWebhook` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow analyzes email headers to verify their authenticity by checking SPF, DKIM, and DMARC results. It extracts the originating IP address from email headers, evaluates its reputation, and determines if the email is likely spam or legitimate, responding with a structured output.

- **Demonstrate**: A business owner could use this workflow to automatically analyze incoming emails for authenticity, preventing spam from reaching employees and ensuring communication security, thereby enhancing overall email management.

- **Imitate**: To adapt this workflow, connect your Gmail account to n8n, configure the webhook to receive email headers, and set up the IP and authentication checks. Customize the nodes to match your email analysis needs and activate the workflow to start processing emails.

- **Practice**: Create a test email with known SPF, DKIM, and DMARC statuses. Run the workflow to see how it evaluates the email's authenticity, and adjust the settings to handle different scenarios, such as missing or failing authentication results.

- **WIIFM**: Mastering this workflow enables you to offer email security services, helping businesses prevent spam and phishing attacks. This adds value to your services, attracts new clients, and increases your revenue potential in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2.
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
  