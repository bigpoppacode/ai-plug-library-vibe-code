# Splitout Webhook Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "4", width: "700", height: "360"
4. **Anthropic Chat Model** `lmChatAnthropic` — model: `[object Object]`
5. **Anthropic Chat Model1** `lmChatAnthropic` — model: `[object Object]`
6. **Anthropic Chat Model2** `lmChatAnthropic` — model: `[object Object]`
7. **Anthropic Chat Model3** `lmChatAnthropic` — model: `[object Object]`
8. **Simple Memory** `memoryBufferWindow` — sessionKey: "fixed_session", sessionIdType: "customKey", contextWindowLength: "10"
9. **Sticky Note1** `stickyNote` — width: "540", height: "240", content: "# An array of prompts here"
10. **Anthropic Chat Model4** `lmChatAnthropic` — model: `[object Object]`
11. **Sticky Note2** `stickyNote` — width: "320", height: "520", content: "## Make sure URL matches
### ⚠️ Cloud users!
Replace `{{ $env.WEBHOOK_URL }}` 
with your n8n instance URL"
12. **Anthropic Chat Model5** `lmChatAnthropic` — model: `[object Object]`
13. **Webhook** `webhook` — method: **POST**, path: `/58d2b899-e09c-45bf-b59b-961a5d7a2470`
14. **CONNECT ME** `noOp` — configured for its default action.
15. **CONNECT ME1** `noOp` — configured for its default action.
16. **CONNECT ME2** `noOp` — configured for its default action.
17. **Sticky Note3** `stickyNote` — color: "5", width: "1980", height: "440"
18. **Sticky Note4** `stickyNote` — color: "5", width: "2160", height: "660"
19. **Sticky Note5** `stickyNote` — color: "5", width: "1880", height: "600"
20. **Sticky Note6** `stickyNote` — width: "400", height: "240", content: "# Array of prompts here"
21. **HTTP Request** `httpRequest` — url: `https://blog.n8n.io/`
22. **Basic LLM Chain4** `chainLlm` — text: "={{ $json.body.userprompt }}

Here's page data:
~~~~
{{ $json.body.markdown }}
~~~~", promptType: "define"
23. **LLM Chain - Step 1** `chainLlm` — text: "={{ $('Markdown').first().json.markdown }}", messages: "[object Object]", promptType: "define"
24. **Clean memory** `memoryManager` — mode: "delete", deleteMode: "all"
25. **Initial prompts1** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Markdown** `markdown` — html: "={{ $json.data }}", options: "[object Object]", destinationKey: "markdown"
27. **LLM Chain - Step 2** `chainLlm` — text: "={{ $('Markdown').first().json.markdown }}", messages: "[object Object]", promptType: "define"
28. **Initial prompts** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "userprompt"
30. **LLM Chain - Step 3** `chainLlm` — text: "={{ $('Markdown').first().json.markdown }}", messages: "[object Object]", promptType: "define"
31. **Reshape** `set` — mode: "raw", include: "selected", options: "[object Object]"
32. **Merge2** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
33. **LLM Chain - Step 4** `chainLlm` — text: "={{ $('Markdown').first().json.markdown }}", messages: "[object Object]", promptType: "define"
34. **Split Out** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "data"
35. **LLM steps - parallel** `httpRequest` — method: **POST**, url: `={{ $env.WEBHOOK_URL }}webhook/58d2b899-e09c-45bf-b59b-961a5d7a2470`
36. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
37. **Merge output with initial prompts** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
38. **All LLM steps here - sequentially** `agent` — text: "={{ $json.markdown || "" }}
{{ `Your task: ${$json.data.step}. ${$json.data.instruction}` }}", options: "[object Object]", promptType: "define"
39. **Merge output with initial prompts1** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow is designed to process and analyze data using multiple Anthropic Chat Models and memory management. It begins with a manual trigger, fetches data from a URL, processes it through a series of language models, and uses memory nodes for context management. The workflow includes steps for parallel and sequential processing of language model outputs, merging results, and handling webhook inputs for dynamic interactions.

**Demonstrate:** A business owner could use this workflow to automate content creation by analyzing blog posts, generating summaries, and crafting engaging social media posts using AI, saving time and ensuring consistent quality across platforms.

**Imitate:** 
1. Import the workflow into your n8n instance.
2. Connect any required APIs (e.g., Anthropic API).
3. Modify the HTTP Request node to point to your desired content source.
4. Customize the language model prompts to suit your use case.
5. Test the workflow with varied inputs to ensure it meets your needs.

**Practice:** Create a simple version of this workflow using a single language model to analyze a webpage's content and generate a summary. Experiment with different prompts and observe how the output changes.

**WIIFM:** Mastering this workflow empowers you to offer AI-driven content analysis and creation services, attracting clients seeking automation in content marketing. This can enhance your business offerings, leading to increased revenue and client satisfaction.

## 🔧 Setup Instructions
1. **Connect Credentials:** anthropicApi.
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
