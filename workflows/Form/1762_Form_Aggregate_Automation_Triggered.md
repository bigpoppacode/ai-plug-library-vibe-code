# Form Aggregate Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, lmChatOpenAi×4, agent×4.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **Note4** `stickyNote` — color: "3", width: "420", height: "440"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
"slug": "rpo-benefits-recruitment",
"title": "7 Key Advantages of RPO for Modern Recruitment",
"meta": "Explore how Recruitment Process Outsourcing (RPO) enhances hiring efficien…[truncated]"
5. **Metadata Generator** `agent` — text: "=**Create a slug, blog post title, and meta description for the following blog post:**

{{ $json.output }}

**Slug Guidelines:**
- Keep it concise (4-5 words maximum).
- Include th…[truncated]", options: "[object Object]", promptType: "define"
6. **Note5** `stickyNote` — color: "4", width: "620", height: "300"
7. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Blog Factory", formFields: "[object Object]"
8. **Note** `stickyNote` — width: "460", height: "500", content: "## Sample Generic Search Terms and write content

You are part of a marketing team that creates high-quality blog posts for the Men's Health Consulting and Workflow Automation indu…[truncated]"
9. **Blog Content Generator** `agent` — text: "=You are part of a marketing team that creates high-quality blog posts for the Men's Health Consulting and Workflow Automation industry based in Da Nang City, Vietnam.

Your goal i…[truncated]", options: "[object Object]", promptType: "define"
10. **Note7** `stickyNote` — color: "7", width: "440", height: "440"
11. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
12. **Perplexity_Searcher** `toolWorkflow` — name: "Perplexity_Searcher", workflowId: "[object Object]", description: "=Tôi sử dụng AI agent này để tìm kiếm những thông tin mới nhất. Nhằm phục vụ cho việc tìm kiếm thông tin, dữ liệu với đầy đủ thông tin mới nhất."
13. **Tele HoangSP_Social_Media** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
14. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
15. **AI Agent1** `agent` — text: "=
Extract a JSON object from the following content: {{ $json.output }}.
The object must contain the following fields:
{
  "title": string,
  "subtitle": string,
  "content": string…[truncated]", options: "[object Object]", promptType: "define"
16. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
17. **Metadata Extractor** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "subtitle": {
      "type": "string"
    },
    "content": {
      "type": "string"
    },
…[truncated]"
18. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $json.output }}", sessionIdType: "customKey", contextWindowLength: "10"
19. **Simple Memory1** `memoryBufferWindow` — sessionKey: "={{ $json.output }}", sessionIdType: "customKey", contextWindowLength: "10"
20. **AI Agent** `agent` — text: "=Tôi là một bác sĩ y khoa làm việc trong lĩnh vực y tế, chuyên môn của tôi là các Vấn đề liên quan đến bệnh Nam Khoa. 
- Tôi muốn dùng dữ liệu này để tìm kiếm thông tin, dựa trên t…[truncated]", options: "[object Object]", promptType: "define"
21. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
22. **Telegram** `telegram` — text: "={{ $json.output.title }}
{{ $json.output.title }}
{{ $json.output.subtitle }}
{{ $json.output.content }}", chatId: "={{ $('Tele HoangSP_Social_Media').item.json.message.chat.id }}", additionalFields: "[object Object]"
23. **Combine Blog Details** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the creation of SEO-optimized blog posts. When a form is submitted, it triggers a series of nodes that use AI models to generate content, titles, slugs, and meta descriptions. The workflow integrates with Telegram to deliver the final blog details, streamlining the content creation process for topics related to Men's Health Consulting and Workflow Automation.

- **Demonstrate:** A marketing consultant could use this workflow to produce high-quality blog content efficiently, ensuring consistency and SEO optimization across all client projects, leading to better online visibility and engagement.

- **Imitate:** 
  1. Import the workflow into n8n.
  2. Connect to OpenAI and Telegram accounts.
  3. Customize the form fields and AI prompts for your specific content needs.
  4. Test the workflow by submitting a form to see the generated blog details in Telegram.

- **Practice:** Create a test form with different topics and run the workflow. Analyze how the AI generates content and titles. Tweak the AI prompts to better fit your niche, ensuring the output meets your quality standards.

- **WIIFM:** Mastering this workflow allows you to offer automated content creation services, reducing time spent on manual writing. This efficiency can attract more clients, increase your service offerings, and generate additional income by providing high-quality, consistent content at scale.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, telegramApi.
  
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
  