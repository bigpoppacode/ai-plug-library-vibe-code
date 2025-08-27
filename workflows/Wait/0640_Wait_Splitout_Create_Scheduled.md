# Wait Splitout Create Scheduled
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note2** `stickyNote` — width: "230", height: "266", content: "### 2. Define your welcome message and link here"
3. **Sticky Note3** `stickyNote` — width: "231", height: "338", content: "### 3. **Important** 

You need to manually run "Save followers to file" once before the first time so you populate your list of existing followers"
4. **Sticky Note** `stickyNote` — color: "5", width: "479", height: "307"
5. **Sticky Note1** `stickyNote` — width: "181", height: "364", content: "[redacted]"
6. **Each 60 minutes** `scheduleTrigger` — rule: "[object Object]"
7. **Create Session** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.server.createSession`
8. **List followers** `httpRequest` — url: `https://bsky.social/xrpc/app.bsky.graph.getFollowers`
9. **Read followers from file** `readWriteFile` — options: "[object Object]", fileSelector: "=followers-{{ $('Create Session').item.json.handle }}.json"
10. **Wait** `wait` — configured for its default action.
11. **Extract from File** `extractFromFile` — operation: **fromJson**
12. **Convert to File** `convertToFile` — operation: **toJson**
13. **Find new followers** `code` — jsCode: "// Datos de entrada
const listFollowers = $('List followers').all()[0].json.followers;
const extractFromFile = $('Extract from File').all()[0].json.data[0].followers;

// Verificar…[truncated]"
14. **Save followers to file** `readWriteFile` — operation: **write**
15. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "newDids"
16. **No Operation, do nothing** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow automates the process of welcoming new followers on BlueSky. It saves your current followers to a file and checks for new followers every 60 minutes. When new followers are identified, it sends them a personalized welcome message including a link to your site. The workflow then updates the follower list to ensure messages are only sent once to new followers.

**Demonstrate:**  
A social media manager could use this workflow to engage new followers on BlueSky with personalized messages, increasing engagement and promoting their website or services effectively.

**Imitate:**  
1. Import the workflow into n8n.
2. Set your BlueSky username and app password.
3. Define your welcome message and link.
4. Manually run "Save followers to file" initially.
5. Activate the workflow to run every 60 minutes.

**Practice:**  
Create a test BlueSky account and follow your main account. Observe how the workflow sends a welcome message to the new follower. Adjust the welcome message and test again to see the changes in action.

**WIIFM:**  
Mastering this workflow allows you to automate engagement with new followers, enhancing your social media presence and potentially driving traffic to your site. This skill can be offered as a service to clients, expanding your automation business offerings and generating additional income.

## 🔧 Setup Instructions
1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
