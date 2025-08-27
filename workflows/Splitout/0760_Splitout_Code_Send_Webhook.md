# Splitout Code Send Webhook
## 🚀 What It Does
Automates a flow using set×5, stickyNote×5, merge×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Sticky Note5** `stickyNote` — width: "340", height: "820", content: "![Callforge](https://uploads.n8n.io/templates/callforgeshadow.png)
## CallForge - The AI Gong Sales Call Processor
CallForge allows you to extract important information for differe…[truncated]"
4. **Sticky Note** `stickyNote` — color: "7", width: "720", height: "660"
5. **Sticky Note1** `stickyNote` — color: "7", width: "580", height: "660"
6. **Sticky Note2** `stickyNote` — color: "7", width: "1320", height: "780"
7. **Sticky Note3** `stickyNote` — color: "7", width: "480", height: "660"
8. **Get transcript** `httpRequest` — url: `https://api.gong.io/v2/calls/transcript?callIds=1807130744801961509`
9. **Retrieve detailed call data** `httpRequest` — url: `https://api.gong.io/v2/calls/extensive`
10. **Join Transcript to String** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Extract Call Data** `splitOut` — options: "[object Object]", fieldToSplitOut: "body.calls"
12. **Merge call and transcript Data** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
13. **Join Affiliation** `code` — jsCode: "// Retrieve input data from all items
const inputData = $input.all();
const originalJson = inputData[0].json; // Get the original JSON data
const conversation = originalJson.Conver…[truncated]"
14. **Join conversation** `code` — jsCode: "// Retrieve the original JSON data
const originalJson = $json;
const conversation = originalJson.updatedConversation;

// Create an array to hold the formatted lines
const formatte…[truncated]"
15. **Get External Attendees Emails** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Aggregate Gong Call Transcript** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "gongData"
17. **Get Opp Data** `salesforce` — resource: **opportunity**, operation: **get**
18. **Extract SF Opp Data** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Get account data** `salesforce` — resource: **account**, operation: **get**
20. **Extract SF Opp Data1** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Combine Salesforce Opp Data** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
22. **Aggregate Salesforce data** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "sfOpp"
23. **Merge Enriched Transcript Data** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
24. **Isolate Notion Data** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow, named CallForge, processes sales call data from Gong and enriches it with Salesforce data. It retrieves call transcripts and detailed call data, merges them, identifies speakers as internal or external, and extracts relevant information. Salesforce data is then fetched to enrich the calls with company and opportunity details. Finally, the enriched data is formatted for further use, such as in AI-driven analytics or reporting.

**Demonstrate:** A sales team could use this workflow to automatically analyze and enrich their call data, providing insights into customer interactions and opportunities. This helps in making data-driven decisions quickly and efficiently.

**Imitate:** 
1. Import the workflow into your n8n instance.
2. Connect your Gong and Salesforce accounts.
3. Configure the Gong API calls with your specific call IDs.
4. Set up Salesforce nodes with your account and opportunity information.
5. Test the workflow to ensure it correctly processes and enriches the call data.

**Practice:** Create a test call in Gong and run the workflow to see how it processes the call data. Modify the Salesforce data to observe changes in the enriched output. This will help you understand the workflow's flexibility and adaptability.

**WIIFM:** Mastering this workflow allows you to offer advanced data processing services to clients, enhancing their sales strategy and decision-making processes. This can lead to increased client satisfaction and open up new revenue streams in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, salesforceOAuth2Api.
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
