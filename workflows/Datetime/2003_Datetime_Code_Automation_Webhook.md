# Datetime Code Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note4** `stickyNote` — color: "5", width: "1172", height: "970"
3. **Sticky Note** `stickyNote` — color: "4", width: "680", height: "360"
4. **Webhook** `webhook` — path: `/962f1468-c80f-4c0c-8555-a0acf648ede4`
5. **Auto-fixing Output Parser6** `outputParserAutofixing` — options: "[object Object]"
6. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
7. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "{
  "reasoning_summary": "Detailed explanation of each analytical chain’s purpose and insights, including key terms and considerations for query formulation.",
  "final_search_quer…[truncated]"
8. **Webhook Call** `httpRequest` — url: `https://primary-production-8aa4.up.railway.app/webhook-test/962f1468-c80f-4c0c-8555-a0acf648ede4`
9. **Sticky Note6** `stickyNote` — color: "3", width: "1180", height: "840"
10. **Anthropic Chat Model** `lmChatAnthropic` — model: `claude-3-5-haiku-20241022`
11. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
12. **Structured Output Parser2** `outputParserStructured` — jsonSchemaExample: "{
    "chain_of_thought": "Insert your step-by-step reasoning here.",
    "Highest_RANKEDURL_1": {
        "title": "Insert the First Ranked URL's Title here.",
        "link": "In…[truncated]"
13. **Parser Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash-002"
14. **Agent Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash-002"
15. **Sticky Note5** `stickyNote` — color: "6", width: "712", height: "370"
16. **Date & Time** `dateTime` — options: "[object Object]"
17. **Semantic Search -Query Maker** `chainLlm` — text: "=1. **Task:** `"Your task is to develop a web search query that most effectively answers the research question given. Use meta-reasoning and multi-chain analysis to ensure a compre…[truncated]", messages: "[object Object]", promptType: "define"
18. **Query** `httpRequest` — url: `https://api.search.brave.com/res/v1/web/search`
19. **Query-1 Combined** `code` — jsCode: "// Initialize an empty string to store all title, url, and description pairs
let aggregatedOutputText = "";

// Loop through all items passed to this Function node
for (let item of…[truncated]"
20. **Semantic Search - Result Re-Ranker** `chainLlm` — text: "=
**Objective:**

For the user's query, web search results are provided. Your tasks are:

1. **Rank the links** based on how well they match the user's query.
2. **Extract relevant…[truncated]", messages: "[object Object]", promptType: "define"
21. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={
    "Highest_RANKEDURL_1": {
        "title": "{{ $item('0').$node['Semantic Search - Result Re-Ranker'].json['output']['Highest_RANKEDURL_1']['title'] }}",
        "link": "{{ …[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the process of performing semantic searches on the web. It receives a query via a webhook, uses AI models to generate and refine search queries, performs a web search using the Brave API, ranks the results based on relevance, and returns the top results. This helps users find the most pertinent information quickly.

**Demonstrate:**  
A consultant could use this workflow to automate the process of gathering the latest industry trends for a client. This ensures that the client receives timely and relevant information without manual searching.

**Imitate:**  
1. Set up a webhook to receive queries.
2. Connect the Brave API and get an API key.
3. Input your API key into the Query node.
4. Customize the AI models for your specific query needs.
5. Test the workflow by sending a sample query and reviewing the results.

**Practice:**  
Create a simple research question and input it into the webhook. Observe how the workflow processes the query and returns ranked URLs. Adjust the search parameters and AI model settings to see how results change.

**WIIFM:**  
Mastering this workflow enables you to offer advanced research services, improving decision-making processes for clients. This can lead to increased client satisfaction and potentially higher earnings from offering specialized automation solutions in an AI-driven business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** anthropicApi, openAiApi, googlePalmApi.
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
  