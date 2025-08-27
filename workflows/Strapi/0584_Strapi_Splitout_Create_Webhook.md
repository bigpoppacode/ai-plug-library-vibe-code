# Strapi Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
4. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
5. **Sticky Note** `stickyNote` — width: "193.4545454545455", height: "317.09090909090907", content: "

















### 🚨 Set Destination Folders Here"
6. **Sticky Note1** `stickyNote` — color: "7", width: "322.9750655002858", height: "374.7055783044638"
7. **Sticky Note2** `stickyNote` — color: "7", width: "1627.0681704544622", height: "636.4009080766225"
8. **Sticky Note3** `stickyNote` — color: "7", width: "513.3200522929088", height: "840.0651105548446"
9. **Sticky Note4** `stickyNote` — color: "7", width: "989.1782467385665", height: "523.7514972875132"
10. **Sticky Note5** `stickyNote` — color: "7", width: "907.1258470912726", height: "396.4865508957922"
11. **Sticky Note6** `stickyNote` — color: "7", width: "437.8755022115163", height: "1073.2774375197612"
12. **Wordpress** `wordpress` — additionalFields: "[object Object]"
13. **Webflow** `webflow` — operation: **create**
14. **HTTP Request** `httpRequest` — options: "[object Object]"
15. **Define Sheets** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "data": [
    "Single Integration Native",
    "Single Integration Cred-only",
    "Single Integration Non-native",
    "Categories"
  ]
}
"
16. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Sheets To List...** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
18. **Single Integration Native** `set` — mode: "raw", options: "[object Object]", jsonOutput: "[redacted]"
19. **Single Integration Cred-only** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "data": [
    {
      "question": "How can I set up {{ $json.data.displayName }} integration in n8n?",
      "answer": "To use {{ $json.data.displayName }} integration in n8n,…[truncated]"
20. **Single Integration Non-native** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
  "data": [
    {
      "question": `How can I set up ${$json.data.displayName} integration in n8n?`,
      "answer": `To use ${$json.data.displayName} integration in n8n, st…[truncated]"
21. **Categories** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
  "data": [
    {
      "question": `What types of ${$json.data['Category name']} tools can I integrate with n8n?`,
      "answer": `n8n offers integrations with a wide range…[truncated]"
22. **Question to List1** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** wordpressApi.
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
