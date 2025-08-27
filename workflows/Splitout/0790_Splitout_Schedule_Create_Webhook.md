# Splitout Schedule Create Webhook
## 🚀 What It Does
Automates a flow using stickyNote×6, readWriteFile×3, set×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "760", content: "### Receive an alert when new breaches are added to haveibeenpwned.com
This workflow demonstrates how we can receive alerts when new breaches are added to haveibeenpwned.com.
It al…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "640", height: "240"
6. **Sticky Note2** `stickyNote` — color: "7", width: "640", height: "240"
7. **Sticky Note3** `stickyNote` — color: "3", width: "640", height: "240"
8. **Sticky Note4** `stickyNote` — color: "7", width: "600", height: "260"
9. **Sticky Note6** `stickyNote` — color: "6", width: "380", height: "240"
10. **Set empty json** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Request breaches** `httpRequest` — url: `https://haveibeenpwned.com/api/v3/latestbreach`
12. **Convert json to file** `convertToFile` — operation: **toJson**
13. **Read last breach** `readWriteFile` — options: "[object Object]", fileSelector: "./cache.json"
14. **Write cache.json** `readWriteFile` — operation: **write**
15. **Get JSON from file** `extractFromFile` — operation: **fromJson**
16. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
17. **Check for content** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Set to none** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Add information about the last breach we alerted** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
20. **If - check for new** `if` — options: "[object Object]", conditions: "[object Object]"
21. **Set breach name** `set` — options: "[object Object]", assignments: "[object Object]"
22. **New breach** `noOp` — configured for its default action.
23. **Old breach** `noOp` — configured for its default action.
24. **Convert to File** `convertToFile` — operation: **toJson**
25. **Write breach name to file** `readWriteFile` — operation: **write**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow monitors for new data breaches on haveibeenpwned.com. It checks the latest breach data every 15 minutes, compares it with the last known breach, and alerts you if a new breach is found. It uses caching to remember the last breach checked, ensuring no duplicate alerts.

- **Demonstrate:** A cybersecurity consultant could use this workflow to stay informed about new data breaches, enabling prompt action to protect their clients' data. This helps in providing timely advice and maintaining client trust.

- **Imitate:** Import the workflow into n8n. Link it to your alerting system (e.g., Slack, email). Customize the scheduling and alert method. Test by simulating a breach and checking if the alert triggers correctly.

- **Practice:** Set up a test environment with mock breach data. Run the workflow and verify that it correctly identifies new breaches and sends alerts. Adjust the workflow to refine alert conditions if necessary.

- **WIIFM:** Mastering this workflow can help you offer real-time breach monitoring services to clients, enhancing their security posture. This can increase your service portfolio, attract new customers, and boost your income in the cybersecurity and automation sectors.

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
