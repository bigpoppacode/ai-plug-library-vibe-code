# Splitout Limit Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1071.752021563343", height: "285.66037735849045", content: "## Scrape latest Paul Graham essays"
4. **Sticky Note1** `stickyNote` — width: "625", height: "607", content: "## Summarize them with GPT"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Extract Text Only').item.json.data }}", jsonMode: "expressionData"
7. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "6000"
8. **Fetch Essay List** `httpRequest` — url: `http://www.paulgraham.com/articles.html`
9. **Extract essay names** `html` — operation: **extractHtmlContent**
10. **Split out into items** `splitOut` — options: "[object Object]", fieldToSplitOut: "essay"
11. **Limit to first 3** `limit` — maxItems: "3"
12. **Fetch essay texts** `httpRequest` — url: `=http://www.paulgraham.com/{{ $json.essay }}`
13. **Extract title** `html` — operation: **extractHtmlContent**
14. **Extract Text Only** `html` — operation: **extractHtmlContent**
15. **Summarization Chain** `chainSummarization` — options: "[object Object]", operationMode: "documentLoader"
16. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
17. **Clean up** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching, extracting, and summarizing the latest essays by Paul Graham. It begins by scraping the list of essay links from his website, selects the first three, and retrieves their content. The text is then summarized using OpenAI's GPT model, providing concise summaries of each essay.

### Demonstrate
A content curator could use this workflow to quickly gather and summarize the latest essays from influential writers, offering insightful summaries to their audience, saving time and maintaining a steady flow of content.

### Imitate
1. Import the workflow into n8n.
2. Configure the HTTP Request nodes to access Paul Graham's website.
3. Set up OpenAI credentials for GPT access.
4. Test the workflow to ensure it fetches and summarizes the essays correctly.
5. Modify the workflow to adjust the number of essays or target different content.

### Practice
Create a test workflow that scrapes a webpage of your choice, extracts key content, and uses a language model to generate summaries. Experiment with different websites and content types to see how the workflow adapts.

### WIIFM
Mastering this workflow can enhance your ability to automate content curation and summary generation, allowing you to provide valuable insights to clients or audiences. This can lead to increased engagement and potential income through content services or subscriptions.

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
