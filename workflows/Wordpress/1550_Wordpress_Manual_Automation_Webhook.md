# Wordpress Manual Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `google/gemini-2.0-flash-exp:free`
4. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"metatitle": {
			"type": "string"
		},
		"metadescription": {
			"type": "string"
		}
	}
}"
5. **Sticky Note** `stickyNote` — width: "180", height: "240", content: "Fetches the context of the article you want to generate via AI"
6. **Sticky Note1** `stickyNote` — width: "280", height: "240", content: "Create the draft post on Wordpress with the article text and the title that were previously generated"
7. **Sticky Note2** `stickyNote` — width: "400", height: "220", content: "Upload the generated image to Wordpress media and then associate it with the newly created article"
8. **Sticky Note3** `stickyNote` — width: "420", height: "220", content: "The SEO expert analyzes the created article and generates the appropriate meta title and meta description"
9. **Sticky Note4** `stickyNote` — width: "220", height: "200", content: "The generated metadata is associated with the post"
10. **Sticky Note5** `stickyNote` — color: "3", width: "820", content: "## Optimize WordPress Blog Posts with AI

This is a powerful tool for automating the creation and optimization of blog posts, saving time and ensuring high-quality, SEO-friendly co…[truncated]"
11. **Get context** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
12. **Set context** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Generate article** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
14. **Generate title** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
15. **Add draft to WP** `wordpress` — title: "={{ $json.message.content }}", additionalFields: "[object Object]"
16. **Generate image** `openAi` — resource: **image**, prompt: "=Generate a real photo image used as a blog post cover:

Image prompt:
{{ $('Generate title').item.json.message.content }}, photography, realistic, sigma 85mm f/1.4"
17. **Upload image** `httpRequest` — method: **POST**, url: `https://URL/wp-json/wp/v2/media`
18. **Set image** `httpRequest` — method: **POST**, url: `=https://URL/wp-json/wp/v2/posts/{{ $('Add draft to WP').item.json.id }}`
19. **Update Sheet** `googleSheets` — operation: **update**
20. **SEO Expert** `chainLlm` — text: "=Create metatitle and metadescription in the language of the following product:
- Title: {{ $('Add draft to WP').item.json.title.rendered }}
- Content: {{ $('Add draft to WP').item…[truncated]", messages: "[object Object]", promptType: "define"
21. **Set metatag** `httpRequest` — method: **PUT**, url: `=https://URL/wp-json/wp/v2/posts/{{ $('Add draft to WP').item.json.id }}`
22. **Finish work** `googleSheets` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the creation and optimization of WordPress blog posts. It starts by fetching topic context from Google Sheets, generates an article and title using AI, and drafts the post on WordPress. It creates a cover image, uploads it, and associates it with the post. An AI SEO expert generates meta tags for optimization, and updates the post and Google Sheets with this data.

- **Demonstrate:** A content manager for a blog could use this workflow to streamline the creation of SEO-optimized posts, saving time and ensuring consistency across articles. This increases productivity and improves search engine rankings.

- **Imitate:** 1. Import the workflow to n8n. 2. Link your Google Sheets and WordPress accounts. 3. Set up your AI credentials. 4. Customize the Google Sheets to include your topics. 5. Test the workflow with a sample topic to see how it generates and optimizes a blog post.

- **Practice:** Create a Google Sheet with a few sample topics. Run the workflow and observe how it generates content, images, and updates each post with meta tags. Experiment with different topics to see the variations in output.

- **WIIFM:** Mastering this workflow can help you efficiently produce high-quality, SEO-friendly blog content, increasing your site's traffic. Offering this as a service can attract clients looking to enhance their content marketing efforts, generating income for your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi, wordpressApi, openRouterApi, httpBasicAuth.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
