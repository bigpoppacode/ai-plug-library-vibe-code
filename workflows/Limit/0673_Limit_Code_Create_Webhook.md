# Limit Code Create Webhook
  ## 🚀 What It Does
  Automates a flow using set×14, stickyNote×7, if×5.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Trigger on New Email**.
  2. **Trigger on New Email** `microsoftOutlookTrigger` — output: "raw", filters: "[object Object]", options: "[object Object]"
3. **Webhook1** `webhook` — method: **POST**, path: `/da28e0c6-ebe2-43e7-92fe-dde3278746a8`
4. **Sticky Note** `stickyNote` — color: "7", width: "635.6437587743126", height: "738.7992581051316"
5. **Sticky Note1** `stickyNote` — color: "7", width: "635.6437587743126", height: "722.658386273084"
6. **Sticky Note2** `stickyNote` — color: "7", width: "869.3564073187465", height: "626.9566677129526"
7. **Sticky Note3** `stickyNote` — color: "7", width: "922.1859426288208", height: "965.2875565450952"
8. **Sticky Note4** `stickyNote` — color: "7", width: "1016.1357697283069", height: "619.3441192962306"
9. **Sticky Note5** `stickyNote` — color: "7", width: "1285.8545784346588", height: "909.4741259295762"
10. **Sticky Note6** `stickyNote` — color: "7", width: "1016.1357697283069", height: "1788.2607166792513"
11. **Retrieve Headers of Email** `httpRequest` — url: `=https://graph.microsoft.com/v1.0/me/messages/{{ $json.id }}?$select=internetMessageHeaders`
12. **Set Webhook Headers Here** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Set Headers Here** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Set Headers** `set` — options: "[object Object]", includeOtherFields: "true"
15. **Extract Received Headers** `code` — jsCode: "// Extract the headers array from the JSON
const headers = $('Set Headers').item.json.headers;

// Filter headers where the name is "Received"
const receivedHeaders = headers.filte…[truncated]"
16. **Remove Extra Received Headers** `limit` — keep: "lastItems"
17. **Extract Original From IP** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Original IP Found?** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Query IP Quality Score API** `httpRequest` — url: `=https://ipqualityscore.com/api/json/ip/Mlg6aZdzI1mVehUD3Z5Ak5Vl4yNN7P8v/{{ $('Extract Original From IP').item.json.extractedfromip }}?strictness=1&allow_public_access_points=true&…[truncated]`
20. **No Operation, do nothing** `noOp` — configured for its default action.
21. **Query IP API** `httpRequest` — url: `=http://ip-api.com/json/{{ $('Extract Original From IP').item.json.extractedfromip }}`
22. **Authentication-Results Header?** `if` — options: "[object Object]", conditions: "[object Object]"
23. **Extract Authentication-Results Header** `code` — jsCode: "// Extract the headers array from the JSON
const headers = $('Set Headers').item.json.headers;

// Filter headers where the name is "Received"
const receivedHeaders = headers.filte…[truncated]"
24. **Received-SPF Header?** `if` — options: "[object Object]", conditions: "[object Object]"
25. **DKIM-Signature Header?** `if` — options: "[object Object]", conditions: "[object Object]"
26. **DMARC Header?** `if` — options: "[object Object]", conditions: "[object Object]"
27. **Determine Auth Values** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Extract Received-SPF Header** `code` — jsCode: "// Extract the headers array from the JSON
const headers = $('Set Headers').item.json.headers;

// Filter headers where the name is "Received"
const receivedHeaders = headers.filte…[truncated]"
29. **No SPF Found** `set` — options: "[object Object]", assignments: "[object Object]"
30. **DKIM Signature Found** `set` — options: "[object Object]", assignments: "[object Object]"
31. **No DKIM Signature Found** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Extract DMARC Header** `code` — jsCode: "// Extract the headers array from the JSON
const headers = $('Set Headers').item.json.headers;

// Filter headers where the name is "Received"
const receivedHeaders = headers.filte…[truncated]"
33. **No DMARC Header** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Format Combined Auth Output** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Aggregate Received-SPF Headers** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
36. **Set DMARC Value** `set` — options: "[object Object]", assignments: "[object Object]"
37. **Set SPF Value** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Merge** `merge` — numberInputs: "3"
39. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
40. **Format Individual Auth Outputs** `set` — options: "[object Object]", assignments: "[object Object]"
41. **Format Webhook Output** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
42. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of analyzing email headers for security and authenticity. It triggers on receiving a new email, extracts and processes email headers to verify the presence of SPF, DKIM, and DMARC headers, checks the originating IP address for reputation, and formats the results for integration with other systems. This ensures that emails are legitimate and helps prevent phishing and spam.

- **Demonstrate:** A business could use this workflow to ensure that incoming emails are from trusted sources, reducing the risk of phishing attacks. This is crucial for maintaining security and trust, especially in industries like finance or healthcare where data integrity is critical.

- **Imitate:** To implement this workflow, import it into your n8n instance, connect your Microsoft Outlook account for email monitoring, and configure the webhook to receive email data. Customize the IP quality check and authentication checks as needed, then activate the workflow to start monitoring emails.

- **Practice:** Create a test email account and send some emails with varying levels of security compliance (e.g., with and without proper SPF/DKIM/DMARC). Run the workflow to see how it processes each email and what results it outputs.

- **WIIFM:** Mastering this workflow allows you to offer advanced email security services to clients, enhancing their cybersecurity posture. This can lead to new business opportunities, improved client trust, and potentially higher revenue from offering specialized automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** microsoftOutlookOAuth2Api.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  