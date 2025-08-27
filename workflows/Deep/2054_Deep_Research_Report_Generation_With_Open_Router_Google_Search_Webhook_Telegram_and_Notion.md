# Deep Research Report Generation With Open Router Google Search Webhook Telegram And Notion
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram Trigger**.
  2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Simple Memory** `memoryBufferWindow` — sessionIdType: "customKey", sessionKey: "={{ $json?.message?.chat?.id ||  $json?.body?.session_id }}", contextWindowLength: "10"
4. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
   "is_pass_next" : "boolean",
   "message" : "string"
}"
5. **Structured Output Parser1** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "queries": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "query": {
            …[truncated]"
6. **Google Gemini Chat Model** `lmChatGoogleGemini` — modelName: "models/gemini-2.0-flash", options: "[object Object]"
7. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `anthropic/claude-3.5-sonnet`
8. **OpenRouter Chat Model1** `lmChatOpenRouter` — model: `anthropic/claude-3.5-sonnet`
9. **OpenRouter Chat Model2** `lmChatOpenRouter` — model: `anthropic/claude-3.5-sonnet`
10. **Webhook** `webhook` — method: **POST**, path: `/1c86c408-aeed-40c5-b4ba-aad5f4cdf0ad`
11. **Sticky Note** `stickyNote` — content: "# Workflow Overview

This workflow automates the process of research planning, query generation, web search, content extraction, and report creation. It integrates with Webhook, No…[truncated]", height: "940", width: "620"
12. **Strategy Agent** `agent` — promptType: "define", text: "=You are the research and planning agent. Your role is to help users plan high-quality research content — quickly, clearly, and efficiently.

User input: {{ $json?.message?.text ||…[truncated]", hasOutputParser: "true"
13. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
14. **Respond to Webhook** `respondToWebhook` — respondWith: "text", responseBody: "={{ $json.output.message }}", options: "[object Object]"
15. **Respond to Webhook1** `respondToWebhook` — respondWith: "text", responseBody: "Thank you for your response. We are preparing your report. Once it is finished we will send report link to you.", options: "[object Object]"
16. **Code** `code` — jsCode: "const randomId = Math.floor(100000 + Math.random() * 900000);
return { randomId };
"
17. **OpenAI1** `openAi` — modelId: "[object Object]", messages: "[object Object]", jsonOutput: "true"
18. **Notion** `notion` — resource: **databasePage**
19. **Search Query Agent** `agent` — promptType: "define", text: "=Given the following prompt from the user, generate a list of SERP queries to research the topic.
Reduce the number of words in each query to its keywords only.
Return a maximum of…[truncated]", hasOutputParser: "true"
20. **Split Out** `splitOut` — fieldToSplitOut: "output.queries", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the process of research planning and report creation. It begins with a Telegram trigger or Webhook to receive user input. The input is processed to create a research plan, generate specific search queries, and fetch relevant web content. The data is then synthesized into a detailed research report using AI, which is saved in a Notion database. The user is notified when the report is complete.

**Demonstrate:**  
A business consultant could use this workflow to quickly generate comprehensive research reports for clients, saving time on manual research and report compilation.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect Telegram and Notion accounts.
3. Set up the Webhook and AI models with necessary credentials.
4. Customize the report template in Notion to fit your needs.
5. Test the workflow with a sample research query.

**Practice:**  
Create a simple research topic and run the workflow. Check how the generated report in Notion compares to manually gathered information. Adjust the AI prompts for better accuracy.

**WIIFM:**  
Mastering this workflow enables you to offer automated research and report generation services, reducing time spent on manual tasks and attracting clients who value efficiency and comprehensive data analysis. This can enhance your AI automation business and increase income potential.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  