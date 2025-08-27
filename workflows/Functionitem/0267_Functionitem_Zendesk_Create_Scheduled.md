# FunctionItem Zendesk Create Scheduled
  ## 🚀 What It Does
  Automates a flow using if×4, noOp×3, functionItem×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Every day at 09:00**.
  2. **Every day at 09:00** `cron` — triggerTimes: "[object Object]"
3. **Get last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
4. **Get tickets updated after last execution** `zendesk` — operation: **getAll**
5. **Channel is email** `if` — conditions: "[object Object]"
6. **Set search email** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
7. **NoOp** `noOp` — configured for its default action.
8. **Remove duplicates to make search efficient** `itemLists` — operation: **removeDuplicates**
9. **Search persons by email** `pipedrive` — resource: **person**, operation: **search**
10. **Rename fields and keep only needed fields** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
11. **Add Pipedrive person Id to Zendesk tickets** `merge` — mode: "mergeByKey", propertyName1: "via.source.from.address", propertyName2: "primary_email"
12. **Pipedrive person Id found** `if` — conditions: "[object Object]"
13. **Get Zendesk comments for tickets** `httpRequest` — url: `=https://n8n.zendesk.com/api/v2/tickets/{{$json["id"]}}/comments`
14. **NoOp1** `noOp` — configured for its default action.
15. **Add comments to tickets** `merge` — join: "inner", mode: "mergeByIndex"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of updating Zendesk tickets with Pipedrive information. Every day at 09:00, it checks for new or updated tickets since the last execution. It filters tickets received via email, searches for the corresponding person in Pipedrive using their email, and merges the Pipedrive person ID into the Zendesk tickets. It also retrieves and adds Zendesk comments to the tickets, and appends them as notes in Pipedrive.

**Demonstrate:**  
A customer support team can use this workflow to ensure that every email ticket in Zendesk is linked to the correct contact in Pipedrive, facilitating seamless communication and better customer relationship management.

**Imitate:**  
1. Import the workflow into your n8n instance.  
2. Connect your Zendesk and Pipedrive accounts.  
3. Set up the cron trigger for your desired schedule.  
4. Customize the "Set" and "Merge" nodes to match your data structure.  
5. Test the workflow with sample tickets to ensure it functions as expected.

**Practice:**  
Create a few test tickets in Zendesk with different email addresses. Run the workflow and verify that the Pipedrive person IDs are correctly added to the tickets and that comments are appended as notes in Pipedrive.

**WIIFM:**  
Mastering this workflow allows you to offer enhanced CRM synchronization services, improving customer support efficiency. This can lead to increased client satisfaction, retention, and potential upselling opportunities in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** zendeskApi, pipedriveApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  