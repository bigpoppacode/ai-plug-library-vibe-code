# Wait Splitout Create Scheduled
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note2** `stickyNote` — color: "7", width: "361.5043838490178", height: "550.0452010151306"
5. **Sticky Note3** `stickyNote` — color: "7", width: "318.2931356227883", height: "698.5851033452675"
6. **Sticky Note4** `stickyNote` — color: "7", width: "400.5192406950739", height: "694.6109995985548"
7. **Sticky Note5** `stickyNote` — color: "7", width: "400.5192406950739", height: "696.1026552732698"
8. **Sticky Note6** `stickyNote` — color: "7", width: "1067.9843739266996", height: "696.1026552732698"
9. **Sticky Note7** `stickyNote` — color: "7", width: "361.5043838490178", height: "554.458328117048"
10. **Sticky Note8** `stickyNote` — color: "7", width: "361.5043838490178", height: "514.8696158323633"
11. **Sticky Note** `stickyNote` — width: "646.7396383244529", height: "1327.6335333503064", content: "![n8n](https://uploads.n8n.io/templates/n8n.png)

# Automate Report Generation with n8n & Qualys

## Introducing the Save Qualys Reports to TheHive Workflow—a robust solution desig…[truncated]"
12. **Global Variables** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Get Last Timestamp** `executeWorkflow` — options: "[object Object]", workflowId: "n9Vh6tvRs0Y2y7V9"
14. **Fetch Reports from Qualys** `httpRequest` — method: **GET**, url: `={{ $json.base_url }}/api/2.0/fo/report`
15. **XML** `xml` — options: "[object Object]"
16. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "REPORT_LIST_OUTPUT.RESPONSE.REPORT_LIST.REPORT"
17. **Remove Already Processed Reports** `filter` — options: "[object Object]", conditions: "[object Object]"
18. **Any Reports to Process?** `if` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the retrieval and processing of Qualys reports. It fetches reports from Qualys, filters out those already processed based on timestamps, and creates cases in TheHive for new reports. The workflow runs hourly, ensuring continuous monitoring and up-to-date vulnerability management.

**Demonstrate**  
A cybersecurity firm could use this workflow to streamline vulnerability management by automating the retrieval and processing of security reports, ensuring timely updates and efficient incident tracking.

**Imitate**  
1. Import workflow into n8n.
2. Set up Qualys and TheHive credentials.
3. Customize global variables to match your environment.
4. Schedule the workflow to run hourly.
5. Test to ensure it creates cases in TheHive with new reports.

**Practice**  
Create a mock Qualys report in your environment and run the workflow. Verify that the report is processed and a new case is created in TheHive. Adjust timestamps and rerun to see how it handles already processed reports.

**WIIFM**  
Mastering this workflow enhances your ability to offer automated security management solutions, attracting clients seeking efficient vulnerability tracking. This can increase your service offerings and revenue in the cybersecurity automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** qualysApi, n8nApi, theHiveProjectApi.
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
