# Manual Openai Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, openAi×3, set×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "507.1052631578949", height: "210.99380804953552", content: "## What this workflow does
✔︎ 1) Get posts from reddit that might be about n8n
 - Filter for the most relevant posts (posted in last 7 days and more than 5 upvotes and is original …[truncated]"
4. **Sticky Note2** `stickyNote` — width: "504.4736842105267", height: "116.77974205725066", content: "## Drawbacks
🤔 Workflow only considers first 500 characters of each reddit post. So if n8n is mentioned after this amount, it won't register as being a post about n8n.io."
5. **Sticky Note3** `stickyNote` — width: "507.1052631578949", height: "247.53869969040255", content: "## Next steps
* Improve OpenAI Summary node prompt to return cleaner summaries.
* Extend to **more platforms/sources** - e.g. it would be really cool to monitor larger slack commun…[truncated]"
6. **OpenAI Summary** `openAi` — operation: **edit**
7. **Sticky Note** `stickyNote` — width: "843.411496498402", height: "258.676790119369", content: "[redacted]"
8. **Reddit** `reddit` — operation: **search**
9. **IF** `if` — conditions: "[object Object]"
10. **Set** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
11. **OpenAI Classify** `openAi` — prompt: "=Decide whether a reddit post is about n8n.io, a workflow automation low code tool that can be self-hosted, or not.
Reddit Post: {{ $json.selftextTrimmed }}
About n8n?: Yes/No"
12. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
13. **IF1** `if` — conditions: "[object Object]"
14. **OpenAI Summary Backup** `openAi` — prompt: "=Summarise what this is talking about in a meta way in only 1 sentence.

 {{ $json.selftextTrimmed }}"
15. **Merge1** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
16. **SetFinal** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  Could not generate AI recommendations at this time.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  