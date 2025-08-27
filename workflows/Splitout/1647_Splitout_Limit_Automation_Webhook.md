# Splitout Limit Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1071.752021563343", height: "285.66037735849045", content: "## Scrape latest Paul Graham essays"
4. **Sticky Note1** `stickyNote` — width: "465.3908355795153", height: "606.7924528301882", content: "## Summarize them with GPT"
5. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
6. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
7. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-mini`
8. **Fetch essay list** `httpRequest` — url: `http://www.paulgraham.com/articles.html`
9. **Extract essay names** `html` — operation: **extractHtmlContent**
10. **Split out into items** `splitOut` — options: "[object Object]", fieldToSplitOut: "essay"
11. **Limit to first 3** `limit` — maxItems: "3"
12. **Fetch essay texts** `httpRequest` — url: `=http://www.paulgraham.com/{{ $json.essay }}`
13. **Extract title** `html` — operation: **extractHtmlContent**
14. **Summarization Chain** `chainSummarization` — options: "[object Object]", operationMode: "documentLoader"
15. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
16. **Clean up** `set` — fields: "[object Object]", include: "none", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching and summarizing essays from Paul Graham's website. It starts by retrieving a list of essay links, selects the first three, and fetches their content. Each essay is then summarized using OpenAI's GPT model. The results, including titles and summaries, are compiled and cleaned for easy review.

### Demonstrate
A content creator could use this workflow to quickly generate summaries of new essays, saving time on reading and analysis. This allows for rapid content curation and sharing on platforms like blogs or newsletters.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI API account.
3. Set a trigger to run the workflow manually or on a schedule.
4. Customize the number of essays to fetch if needed.
5. Execute the workflow and review the summaries.

### Practice
Create a test run by using a different blog or article site. Adjust the HTML extraction settings to match the new site's structure. Observe how the workflow adapts and generates summaries.

### WIIFM
Mastering this workflow empowers you to offer automated content summarization services, enhancing your portfolio. This can attract clients looking for efficient content management solutions, potentially increasing your income through automation services.

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
