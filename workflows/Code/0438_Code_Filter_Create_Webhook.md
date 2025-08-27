# Code Filter Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **n8n Form Trigger**.
  2. **Sticky Note1** `stickyNote` — color: "7", width: "877.8549621677266", height: "214.7985362687051"
3. **Sticky Note2** `stickyNote` — color: "7", width: "877.8549621677266", height: "216.9904777194533"
4. **Sticky Note4** `stickyNote` — color: "7", width: "877.8549621677266", height: "216.9904777194533"
5. **Sticky Note5** `stickyNote` — color: "7", width: "1164.99929221574", height: "442.760447146518"
6. **Sticky Note3** `stickyNote` — height: "278.9250421966361", content: "# Try me out
1. In the form trigger node, enter the names of your Linear team(s) to display on the form 
2. Make sure your Notion page is formatted according to the [spec](https://…[truncated]"
7. **n8n Form Trigger** `formTrigger` — path: `/5a631d63-f899-4967-acad-69924674e96a`
8. **Fetch Linear team details** `graphql` — query: "=query GetTeamsAndProjects {
  teams(filter: {name: {contains: "{{ $json['Linear team name'] }}"}}) {
    nodes {
      id
      name
      members {
        nodes {
          id
 …[truncated]", endpoint: "https://api.linear.app/graphql", requestMethod: "GET"
9. **Team missing?** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Respond with error1** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
  "formSubmittedText": "Couldn't find the team called '" + {{ $('n8n Form Trigger').item.json['Linear team name'] }} + "'"
} "
11. **Set team ID** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Get issues** `notion` — resource: **block**, operation: **getAll**
13. **Unimported, unchecked to_do blocks only** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **Respond with error** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "formSubmittedText": "Couldn't fetch page content from Notion. Is it shared with your Notion integration?"
}"
  
  ## 💡 AI-Powered Ideas for Improvement
  Could not generate AI recommendations at this time.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, notionApi, linearApi, openAiApi.
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
  