# Wait Splitout Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Sticky Note5** `stickyNote` — color: "7", width: "1480", height: "480"
4. **Sticky Note6** `stickyNote` — color: "7", width: "560", height: "620"
5. **Sticky Note7** `stickyNote` — width: "340", height: "820", content: "![Callforge](https://uploads.n8n.io/templates/callforgeshadow.png)
## CallForge - The AI Gong Sales Call Processor
CallForge allows you to extract important information for differe…[truncated]"
6. **Sticky Note** `stickyNote` — color: "7", width: "1480", height: "440"
7. **Sticky Note8** `stickyNote` — color: "7", width: "1480", height: "440"
8. **Check if Marketing Insight Data Found** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Check if Recurring Topics Found** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Check if Actionable Insights Data Found** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Wait for rate limiting - Marketing Insights** `wait` — amount: "3"
12. **Wait for rate limiting - Recurring** `wait` — amount: "3"
13. **Wait for rate limiting - Actionable Insights** `wait` — amount: "3"
14. **Split out Insights** `splitOut` — options: "[object Object]", fieldToSplitOut: "AIoutput.MarketingInsights"
15. **Split Out Recurring Topics** `splitOut` — options: "[object Object]", fieldToSplitOut: "AIoutput.RecurringTopics"
16. **Split Out Actionable Insights** `splitOut` — options: "[object Object]", fieldToSplitOut: "AIoutput.ActionableInsights"
17. **Create Marketing Insight Data** `notion` — resource: **databasePage**
18. **Create Recurring Topics Data** `notion` — resource: **databasePage**
19. **Create Actionable Insights Data** `notion` — resource: **databasePage**
20. **Bundle Marketing Insights Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
21. **Bundle Recurring Topics Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
22. **Bundle Actionable Insights Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
23. **Merge Marketing Insights Thread** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Merge Recurring Topics Thread** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Merge Actionable Insights Thread** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This workflow starts by receiving AI-generated data and checks if there are Marketing Insights, Recurring Topics, or Actionable Insights present. It splits these insights into individual parts, processes them, and stores them in a Notion database. Each type of insight is bundled and merged into a comprehensive object before being saved, ensuring organized and actionable data storage.
  
- **Demonstrate:** A sales manager uses this workflow to analyze sales call data, extracting insights for marketing and strategy teams. This helps in refining marketing strategies based on real customer interactions, thus improving targeting and sales efficiency.

- **Imitate:** Import the workflow into n8n, connect your Notion account, and set up a trigger for receiving AI-generated data. Configure the Notion nodes to match your database structure. Test the workflow to ensure it correctly processes and stores insights.

- **Practice:** Create a mock dataset with marketing insights and run the workflow. Check if the data is split correctly and stored in Notion. Modify the dataset to test different scenarios and observe how the workflow handles them.

- **WIIFM:** Mastering this workflow allows you to offer AI-driven data insights services to businesses, enhancing their decision-making processes. This can attract clients looking to leverage AI for strategic advantages, boosting your income and reputation in the automation industry.

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
