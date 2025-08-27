# Stickynote Hackernews Automate Triggered
## 🚀 What It Does
Automates a flow using stickyNote×4, manualChatTrigger, executeWorkflowTrigger.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On new manual Chat Message**.
2. **On new manual Chat Message** `manualChatTrigger` — configured for its default action.
3. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
4. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "150", height: "293"
6. **Sticky Note1** `stickyNote` — color: "7", width: "927.5", height: "406.875"
7. **Sticky Note2** `stickyNote` — color: "7", width: "927.5", height: "486.5625"
8. **Sticky Note3** `stickyNote` — width: "185.9375", height: "218", content: "## Try me out

Click the 'Chat' button and enter:

_What is the 5th most popular post ever on Hacker News?_"
9. **Custom tool to call the wf below** `toolWorkflow` — name: "hn_tool", workflowId: "={{ $workflow.id }}", description: "Returns a list of the most popular posts ever on Hacker News, in json format"
10. **AI Agent** `agent` — options: "[object Object]"
11. **Hacker News** `hackerNews` — resource: **all**
12. **Clean up data** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
13. **Stringify** `code` — jsCode: "return {
 'response': JSON.stringify($input.all().map(x => x.json))
}"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of retrieving, cleaning, and presenting data from Hacker News. When a user manually triggers the workflow through a chat message, it activates an AI agent that fetches the top posts from Hacker News, processes the data to extract relevant information like titles and URLs, and formats it into a JSON response. This enables users to quickly access popular content without manual searching.

**Demonstrate:**  
A tech blogger could use this workflow to quickly gather trending topics on Hacker News to inform their writing and ensure they cover popular content that resonates with their audience.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up a manual chat trigger to start the workflow.
3. Connect the OpenAI and Hacker News APIs.
4. Test the workflow by entering a question in the chat, like "What's trending on Hacker News?"
5. Review the JSON output to see the data retrieved.

**Practice:**  
Create a test chat where you ask the workflow to find the 10th most popular post on Hacker News. Observe how the workflow retrieves and processes the data, then compare it with the actual Hacker News site.

**WIIFM:**  
Mastering this workflow allows you to offer data retrieval services to clients, helping them stay informed about industry trends. This can enhance your service offerings and boost client engagement, ultimately increasing your income potential in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.

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
