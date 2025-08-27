# Telegram Code Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **gpt-4o-mini** `lmChatOpenAi` — options: "[object Object]"
4. **Structured Output - JSON** `outputParserStructured` — jsonSchemaExample: "{
    "title": "title",
    "content": "content"
}"
5. **gpt-4o-mini1** `lmChatOpenAi` — model: `gpt-4o-mini-2024-07-18`
6. **gpt-4o-mini2** `lmChatOpenAi` — options: "[object Object]"
7. **gpt-4o-mini3** `lmChatOpenAi` — options: "[object Object]"
8. **Rewrite for Grade 5 Reading Level** `agent` — text: "=Rewrite this article at a grade 5 reading level. Include some light humour and metaphorical examples that are age appropriate.  Ensure you retain all original content and only use…[truncated]", agent: "conversationalAgent", options: "[object Object]"
9. **Rewrite for Grade 2 Reading Level** `agent` — text: "=Rewrite this article at a grade 2 reading level. Include some light humour and metaphorical examples that are age appropriate.  Ensure you retain all original content and only use…[truncated]", agent: "conversationalAgent", options: "[object Object]"
10. **Sticky Note7** `stickyNote` — color: "4", width: "469", height: "652"
11. **Sticky Note8** `stickyNote` — color: "6", width: "334", height: "311"
12. **Sticky Note9** `stickyNote` — color: "5", width: "886", height: "461"
13. **Sticky Note10** `stickyNote` — color: "3", width: "726", height: "461"
14. **Sticky Note11** `stickyNote` — width: "726", height: "461", content: "## Rewrite for Grade 2 Reading Level 
Update Agent prompt as required"
15. **DeepSeek** `lmChatOpenAi` — model: `=deepseek-reasoner`
16. **Sticky Note** `stickyNote` — color: "4", width: "1066", height: "701"
17. **Sticky Note1** `stickyNote` — width: "300", height: "340", content: "## Create Post Image
https://pollinations.ai/
https://image.pollinations.ai/prompt/[your image description]"
18. **Sticky Note2** `stickyNote` — color: "7", width: "880", height: "1100"
19. **Sticky Note3** `stickyNote` — color: "5", width: "300", height: "360"
20. **Sticky Note4** `stickyNote` — color: "4", width: "260", height: "360"
21. **Sticky Note5** `stickyNote` — width: "600", height: "1400", content: "# ✍️🌄 WordPress + AI Content Creator

This workflow automates the creation and publishing of multi-reading-level content for WordPress blogs. It leverages AI to generate optimized…[truncated]"
22. **Set Blog Topic** `set` — options: "[object Object]", assignments: "[object Object]"
23. **If2** `if` — options: "[object Object]", conditions: "[object Object]"
24. **If3** `if` — options: "[object Object]", conditions: "[object Object]"
25. **Create Structured Blog Post** `agent` — text: "={{ $json.topic }}", agent: "conversationalAgent", options: "[object Object]"
26. **Send Error Message2** `telegram` — text: "=Error!  Title or Content Missing.  Workflow aborted at {{ $now }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
27. **Send Error Message3** `telegram` — text: "=Error!  Title or Content Missing.  Workflow aborted at {{ $now }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
28. **Separate Title & Content** `code` — jsCode: "try {
  // Check if input exists and has the expected structure
  const input = $input.all();
  if (!input || !input.length) {
    throw new Error('No input data received');
  }

 …[truncated]"
29. **Tiltle & Content Exist?** `if` — options: "[object Object]", conditions: "[object Object]"
30. **HTML to Markdown** `markdown` — html: "={{ $json.content }}", options: "[object Object]"
31. **Send Error Message** `telegram` — text: "=Error!  Title or Content Missing.  Workflow aborted at {{ $now }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
32. **Rewrite for Grade 9 Reading Level** `agent` — text: "=Rewrite this article at a grade 9 reading level using appropriate metaphors.  Ensure you retain all original content and only use the provided original content for the rewriting. …[truncated]", agent: "conversationalAgent", options: "[object Object]"
33. **Google Drive** `googleDrive` — operation: **createFromText**
34. **If1** `if` — options: "[object Object]", conditions: "[object Object]"
35. **Create Wordpress Post** `wordpress` — title: "={{ $('Separate Title & Content').item.json.title }}", additionalFields: "[object Object]"
36. **Send Error Message1** `telegram` — text: "=Error!  Title or Content Missing.  Workflow aborted at {{ $now }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
37. **pollinations.ai** `httpRequest` — url: `=https://image.pollinations.ai/prompt/{{ $('Separate Title & Content').item.json.title }} and Avoid adding text and keep the image vibrant.`
38. **Upload Image to Wordpress** `httpRequest` — method: **POST**, url: `https://[YOUR-WORDPRESS-SITE.com]/wp-json/wp/v2/media`
39. **Set Image on Wordpress Post** `httpRequest` — method: **POST**, url: `=https:/[YOUR-WORDPRESS-SITE.com]/wp-json/wp/v2/posts/{{ $('Create Wordpress Post').item.json.id }}`
40. **Send Success Message** `telegram` — text: "=Success! Your blog post was created at {{ $now }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation and publishing of blog content tailored for different reading levels on WordPress. It starts with a user-defined topic, generates a structured blog post using AI, and creates versions at Grade 2, 5, and 9 reading levels. The workflow also creates a featured image using Pollinations.ai, uploads it to WordPress, and sends notifications via Telegram for success or errors.

### Demonstrate
A content creator could use this workflow to efficiently produce blog posts that cater to diverse audiences, such as educational content for children and adults, ensuring accessibility and engagement across age groups.

### Imitate
1. Import the workflow into n8n.
2. Set up connections for WordPress, Google Drive, OpenAI, and Telegram.
3. Define your blog topic and run the workflow.
4. Check WordPress for draft posts and review different reading-level versions.
5. Adjust parameters and prompts as needed to fit your content strategy.

### Practice
Create a simple blog topic and run the workflow to see how it generates content at various reading levels. Experiment with modifying AI prompts to customize the tone and style for each reading level.

### WIIFM
Mastering this workflow allows you to offer a unique content creation service, helping clients reach broader audiences with tailored content. This can expand your offerings and increase revenue potential by providing a comprehensive, automated content solution.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, wordpressApi, telegramApi.
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
