# Wait Splitout Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Sticky Note4** `stickyNote` — color: "7", width: "1340", height: "440"
4. **Sticky Note6** `stickyNote` — color: "7", width: "560", height: "620"
5. **Sticky Note7** `stickyNote` — width: "340", height: "820", content: "![Callforge](https://uploads.n8n.io/templates/callforgeshadow.png)
## CallForge - The AI Gong Sales Call Processor
CallForge allows you to extract important information for differe…[truncated]"
6. **Sticky Note** `stickyNote` — color: "7", width: "1340", height: "440"
7. **Sticky Note5** `stickyNote` — color: "7", width: "1340", height: "360"
8. **Check if Product Data Found** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Check if AI Use Case Data Found** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Check if AI Mentioned On Call** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Wait for rate limiting - Product Data** `wait` — amount: "3"
12. **Wait for rate limiting - AI Use Case** `wait` — amount: "3"
13. **Update Call with AI Data Summary** `notion` — resource: **databasePage**, operation: **update**
14. **Split Out Product Data** `splitOut` — options: "[object Object]", fieldToSplitOut: "AIoutput.ProductFeedback"
15. **Create Product Data Object1** `notion` — resource: **databasePage**
16. **Create Product Feedback Data Object** `notion` — resource: **databasePage**
17. **Bundle AI Use Case Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
18. **Bundle Product Feedback Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
19. **Merge AI Use Case Thread** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Merge Product Feedback Thread** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the processing of AI-generated data from sales calls, analyzing it for product feedback and AI use cases. It checks if relevant data is available, processes it, and updates a Notion database with summaries and feedback. The workflow ensures that valuable insights from sales calls are captured and organized efficiently.

**Demonstrate**: A sales team could use this workflow to automatically process and analyze AI data from customer calls, capturing insights into product performance and potential AI use cases. This helps in making informed decisions and improves product development and sales strategies.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect your Notion account.
3. Configure the workflow trigger to capture sales call data.
4. Customize Notion database fields to match your reporting needs.
5. Test the workflow to ensure it updates Notion correctly.

**Practice**: Create a few mock sales call data entries, run the workflow, and observe how it processes and updates the Notion database. Experiment with different AI outputs to see how the workflow handles various scenarios.

**WIIFM**: Mastering this workflow allows you to offer advanced data analysis and reporting services, enhancing decision-making for businesses. It can help you attract clients looking for efficient ways to leverage AI insights, thereby expanding your service offerings and increasing revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** notionApi.

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
