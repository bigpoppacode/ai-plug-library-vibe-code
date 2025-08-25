# Instagram Agent Workflow
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Anthropic Chat Model1** `lmChatAnthropic` — model: `=claude-3-7-sonnet-20250219`
4. **Google Sheets** `googleSheetsTool` — operation: **appendOrUpdate**
5. **Perplexity** `toolHttpRequest` — method: **POST**, url: `https://api.perplexity.ai/chat/completions`
6. **Shorts Database** `googleSheetsTool` — documentId: "[object Object]", sheetName: "[object Object]", options: "[object Object]"
7. **Read Hooks** `googleSheetsTool` — documentId: "[object Object]", sheetName: "[object Object]", options: "[object Object]"
8. **RSS Read** `rssFeedRead` — url: `https://rss.app/feeds/tYZvhyoYQPdq5GyV.xml`
9. **AI Agent** `agent` — promptType: "define", text: "={{ $json.title }}{{ $json.link }}{{ $json.pubDate }}{{ $json.contentSnippet }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates content creation by using a series of tools to analyze RSS feeds. It starts by reading an RSS feed and then uses an AI agent to extract and determine if the content is suitable for short-form creation. If approved, it generates a script outline. The data is then stored in Google Sheets for tracking and further use.

### Demonstrate
A digital marketing consultant might use this workflow to efficiently curate and create content for social media platforms. By automating the process of identifying trending topics, they can quickly generate engaging posts that align with current trends and audience interests.

### Imitate
1. Import the workflow into n8n.
2. Connect required accounts: RSS feed, Google Sheets, and AI tools.
3. Set up the RSS feed URL and configure the AI agent with relevant prompts.
4. Customize Google Sheets to match your data storage needs.
5. Test the workflow to ensure it captures and processes content correctly.

### Practice
Create a test RSS feed with various articles. Run the workflow to see how it identifies content for short-form creation. Modify prompts to improve content selection accuracy. Try adding different types of content to see how the workflow adjusts.

### WIIFM
Mastering this workflow allows you to automate content curation and creation, saving time and increasing productivity. This skill can attract clients seeking efficient content strategies, boosting your business's value proposition and revenue opportunities in the digital marketing space.

## 🔧 Setup Instructions
1. **Connect Credentials:** anthropicApi, googleSheetsOAuth2Api.
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
