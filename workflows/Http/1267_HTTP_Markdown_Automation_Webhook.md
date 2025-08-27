# HTTP Markdown Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On new manual Chat Message**.
  2. **On new manual Chat Message** `manualChatTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4-1106-preview`
4. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
5. **Sticky Note** `stickyNote` — width: "556.25", height: "235.79999999999995", content: "### Convert the query string into JSON, apply the limit for a page length"
6. **Sticky Note1** `stickyNote` — width: "491", height: "285.7", content: "## Send an error message:
1. If query param was incorrect, return the instruction. AI Agent should pick up on this and adapt the query on the next iteration.
2. If the query is OK …[truncated]"
7. **Sticky Note2** `stickyNote` — width: "1200", height: "472.5", content: "[redacted]"
8. **Sticky Note3** `stickyNote` — width: "616.8597285067872", height: "483.0226244343891", content: "## Example ReAct AI Agent
1. Agent Prompt is default
2. Check the description of the HTTP_Request_Tool, it guides the agent to provide a query string with several parameters instea…[truncated]"
9. **HTTP_Request_Tool** `toolWorkflow` — name: "HTTP_Request_Tool", workflowId: "={{ $workflow.id }}", description: "Call this tool to fetch a webpage content. The input should be a stringified HTTP query parameter like this: "?url=VALIDURL&method=SELECTEDMETHOD". "url" parameter should contain t…[truncated]"
10. **ReAct AI Agent** `agent` — agent: "reActAgent", options: "[object Object]"
11. **QUERY_PARAMS** `set` — fields: "[object Object]", options: "[object Object]"
12. **CONFIG** `set` — fields: "[object Object]", options: "[object Object]"
13. **HTTP Request** `httpRequest` — url: `={{ encodeURI($json.query.url) }}`
14. **Is error?** `if` — conditions: "[object Object]"
15. **Stringify error message** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
16. **Exctract HTML Body** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
17. **Remove extra tags** `set` — fields: "[object Object]", options: "[object Object]"
18. **Simplify?** `if` — conditions: "[object Object]"
19. **Simplify output** `set` — fields: "[object Object]", options: "[object Object]"
20. **Convert to Markdown** `markdown` — html: "={{ $json.HTML }}", options: "[object Object]", destinationKey: "page_content"
21. **Send Page Content** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to fetch and process webpage content using a ReAct AI agent and OpenAI model. Triggered by a manual chat message, it converts query parameters from a URL, makes an HTTP request to fetch the page, and processes the HTML to remove unnecessary elements. The content is then converted to Markdown format for easier readability and sent back as a response.

### Demonstrate
A business owner could use this workflow to automatically summarize and simplify webpage content for research or competitive analysis, saving time and effort in manually parsing through HTML.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up the manual chat trigger and OpenAI API credentials.
3. Customize the URL and query parameter settings for the webpage you want to fetch.
4. Test the workflow by triggering it with a sample URL.

### Practice
Create a test workflow that fetches a webpage of your choice, processes its content, and outputs it in Markdown format. Experiment with different URLs and observe how the workflow handles varied HTML structures.

### WIIFM
Mastering this workflow allows you to offer webpage content processing services, enhancing research capabilities and potentially creating new revenue streams. It positions you to provide value-added services like content summarization and analysis, attracting more clients in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
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
  