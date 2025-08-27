# HTTP Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Provide search topic via Chat window**.
  2. **Sticky Note1** `stickyNote` — color: "4", width: "520", height: "940"
3. **Sticky Note** `stickyNote` — color: "6", width: "640", height: "720"
4. **Sticky Note2** `stickyNote` — color: "3", width: "420", height: "540"
5. **Sticky Note3** `stickyNote` — width: "420", height: "360", content: "## Tavily Use Cases

📜 Why Use Tavily API for Data Enrichment?

https://docs.tavily.com/docs/use-cases/data-enrichment

💡 Why Use Tavily API for Company Research?

https://docs.t…[truncated]"
6. **Tavily Search** `httpRequest` — method: **POST**, url: `https://api.tavily.com/search`
7. **Tavily Extract** `httpRequest` — method: **POST**, url: `https://api.tavily.com/extract`
8. **Sticky Note4** `stickyNote` — color: "7", width: "660", height: "1020"
9. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
10. **Sticky Note5** `stickyNote` — color: "5", width: "1800", height: "400"
11. **Provide search topic via Chat window** `chatTrigger` — options: "[object Object]"
12. **Sticky Note6** `stickyNote` — color: "7", height: "80", content: "### Tavily API Key
https://app.tavily.com/home"
13. **Tavily API Key** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Tavily Search Topic** `httpRequest` — method: **POST**, url: `https://api.tavily.com/search`
15. **Filter > 90%** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
16. **Get Top Result** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Tavily Extract Top Search** `httpRequest` — method: **POST**, url: `https://api.tavily.com/extract`
18. **Summarize Web Page Content** `chainLlm` — text: "=Summarize this web content and provide in Markdown format:  {{ $json.results[0].raw_content }}", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates data extraction and summarization using the Tavily API and OpenAI. It begins with a user-provided search topic via a chat window, retrieves relevant search results through the Tavily API, filters results with a score above 90%, and extracts content from the top result. Finally, it uses OpenAI to summarize the extracted content, presenting it in a concise markdown format.

### Demonstrate
A business consultant could use this workflow to quickly gather and summarize industry research for a client presentation, saving hours of manual data gathering and enhancing the depth of their insights.

### Imitate
1. Import the workflow into n8n.
2. Connect your Tavily and OpenAI accounts.
3. Set up the chat trigger to input search topics.
4. Customize filter criteria if needed.
5. Test the workflow to ensure it summarizes content correctly.

### Practice
Create a test search topic and run the workflow. Observe how it filters search results, extracts content, and generates a summary. Adjust filter settings or summarization prompts to see different outputs.

### WIIFM
Mastering this workflow allows you to offer efficient data enrichment services. It enhances the quality of insights you provide to clients, potentially increasing client satisfaction, retention, and your ability to charge premium prices for your automation services.
  
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
  