# ExecuteWorkflow Hackernews Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, chatTrigger, toolWorkflow.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "150", height: "293"
3. **Sticky Note1** `stickyNote` — color: "7", width: "927.5", height: "406.875"
4. **Sticky Note2** `stickyNote` — color: "7", width: "927.5", height: "486.5625"
5. **Sticky Note3** `stickyNote` — width: "185.9375", height: "218", content: "## Try me out

Click the 'Chat' button and enter:

_What is the 5th most popular post ever on Hacker News?_"
6. **When chat message received** `chatTrigger` — options: "[object Object]"
7. **Custom tool to call the wf below1** `toolWorkflow` — name: "hn_tool", workflowId: "[object Object]", description: "Returns a list of the most popular posts ever on Hacker News, in json format"
8. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
9. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
10. **AI Agent** `agent` — options: "[object Object]"
11. **Hacker News** `hackerNews` — resource: **all**
12. **Clean up data** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Stringify** `code` — jsCode: "return {
  'response': JSON.stringify($input.all().map(x => x.json))
}"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow allows users to interact with an AI agent to find information from Hacker News. When a chat message is received asking for popular posts, the workflow uses an AI model to process the request, fetches data from Hacker News, and returns a list of the top posts in JSON format.

### Demonstrate
A tech consultant can use this workflow to quickly access trending topics on Hacker News, making it easier to stay updated with industry trends and share insights with clients or team members.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI account.
3. Set up a chat interface to receive messages.
4. Customize the workflow to filter the type of posts you want.
5. Test by requesting the top posts from Hacker News.

### Practice
Create a test chat interface and ask for the 5th most popular post on Hacker News. Observe how the workflow processes the request and returns the data. Modify the query to retrieve different types of information.

### WIIFM
Mastering this workflow can position you as a tech-savvy consultant, offering services that provide real-time insights from popular tech forums. This can enhance your credibility, attract tech-focused clients, and open new avenues for generating income.
  
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
  