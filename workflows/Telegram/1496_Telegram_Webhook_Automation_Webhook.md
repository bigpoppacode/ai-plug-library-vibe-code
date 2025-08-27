# Telegram Webhook Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Sticky Note** `stickyNote` — color: "3", width: "625.851492623043", height: "465.2493344282225"
3. **Sticky Note1** `stickyNote` — color: "4", width: "479.02028317328745", height: "464.14912719677955"
4. **gpt-4o-mini** `lmChatOpenAi` — model: `gpt-4o-mini-2024-07-18`
5. **gpt-4o-mini1** `lmChatOpenAi` — options: "[object Object]"
6. **Structured Output Parser1** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "article": {
      "type": "object",
      "required": ["category", "title", "metadata", "content", "hashtags"],
      "properties": {
 …[truncated]"
7. **gpt-4o-mini2** `lmChatOpenAi` — options: "[object Object]"
8. **Webhook** `webhook` — path: `/pblog`
9. **gpt-4o-mini5** `lmChatOpenAi` — options: "[object Object]"
10. **gpt-4o-mini3** `lmChatOpenAi` — options: "[object Object]"
11. **Sticky Note4** `stickyNote` — color: "6", width: "531", height: "465"
12. **Sticky Note2** `stickyNote` — width: "450.54438902818094", height: "489.5271576259337", content: "## Parse Topic from Get Request"
13. **Sticky Note5** `stickyNote` — color: "5", width: "380", height: "488"
14. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
15. **Sticky Note6** `stickyNote` — color: "5", width: "1614", height: "623"
16. **Call Perplexity Researcher** `toolWorkflow` — name: "perplexity_research_tool", fields: "[object Object]", workflowId: "[object Object]"
17. **Sticky Note7** `stickyNote` — color: "3", width: "480", height: "488"
18. **Sticky Note3** `stickyNote` — width: "420", height: "340", content: "## Optional"
19. **Sticky Note8** `stickyNote` — width: "420", height: "340", content: "## Optional"
20. **Get Topic** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Chat Id1** `set` — options: "[object Object]", assignments: "[object Object]"
22. **If Topic Exists** `if` — options: "[object Object]", conditions: "[object Object]"
23. **Telegram2** `telegram` — text: "=<i>{{ $('Execute Workflow Trigger').item.json.topic }}</i>", chatId: "={{ $json.telegram_chat_id }}", additionalFields: "[object Object]"
24. **Improve Users Topic** `chainLlm` — text: "=How would you improve the following prompt as of {{ $now }}, focusing on:

1. Key Concepts & Definitions
   - Main terminology and foundational concepts
   - Technical background …[truncated]", promptType: "define"
25. **Do Nothing1** `noOp` — configured for its default action.
26. **If** `if` — options: "[object Object]", conditions: "[object Object]"
27. **If Topic** `if` — options: "[object Object]", conditions: "[object Object]"
28. **Prompts** `set` — options: "[object Object]", assignments: "[object Object]"
29. **No Operation, do nothing** `noOp` — configured for its default action.
30. **Perplexity Topic Agent** `agent` — text: "=Topic: {{ $json.text }}", options: "[object Object]", promptType: "define"
31. **Do Nothing4** `noOp` — configured for its default action.
32. **Perplexity** `httpRequest` — method: **POST**, url: `https://api.perplexity.ai/chat/completions`
33. **Error Response** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
34. **If2** `if` — options: "[object Object]", conditions: "[object Object]"
35. **Chat Id** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Success Response** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
37. **Extract JSON** `agent` — text: "=Extract a JSON object from this content: {{ $json.output }}", options: "[object Object]", promptType: "define"
38. **Do Nothing** `noOp` — configured for its default action.
39. **Telegram** `telegram` — text: "={{ $('Perplexity Topic Agent').item.json.output.slice(0, 300) }}", chatId: "={{ $json.telegram_chat_id }}", additionalFields: "[object Object]"
40. **Article** `set` — options: "[object Object]", assignments: "[object Object]"
41. **If Article** `if` — options: "[object Object]", conditions: "[object Object]"
42. **Create HTML Article** `agent` — text: "=Convert this verbatim into HTML: {{ $json.article.toJsonString() }}

## Formatting Guidelines
- HTML document must be single line document without tabs or line breaks
- Use proper…[truncated]", agent: "conversationalAgent", options: "[object Object]"
43. **Do Nothing2** `noOp` — configured for its default action.
44. **If HTML** `if` — options: "[object Object]", conditions: "[object Object]"
45. **Contents** `set` — options: "[object Object]", assignments: "[object Object]"
46. **Do Nothing3** `noOp` — configured for its default action.
47. **Basic LLM Chain** `chainLlm` — text: "[redacted]", promptType: "define"
48. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.text }}"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the creation of HTML articles from research topics using AI. It starts by receiving a topic through a Webhook, then uses GPT-4 to generate research data. The data is processed and structured into an article format, which is then converted into HTML. This HTML content is sent back as a response, ready for publication.

**Demonstrate**  
A business owner could use this workflow to quickly generate content for a blog. By entering a topic, they receive a formatted HTML article, saving time on research and content creation.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up your Webhook to receive topics.  
3. Connect your OpenAI account for GPT-4 usage.  
4. Customize the HTML formatting to match your website's style.  
5. Test with various topics to ensure correct article generation.

**Practice**  
Create a test topic and trigger the workflow. Observe the generated HTML article. Experiment with different topics to see how the content and structure change. Adjust the HTML formatting as needed.

**WIIFM (What's In It For Me)**  
Mastering this workflow allows you to offer automated content generation services, increasing your business's value. It saves time, reduces costs, and can attract clients needing efficient content solutions, boosting your income in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, httpCustomAuth, httpHeaderAuth.
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
