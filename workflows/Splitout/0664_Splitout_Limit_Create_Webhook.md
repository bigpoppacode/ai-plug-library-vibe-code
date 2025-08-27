# Splitout Limit Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
4. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
5. **OpenAI Chat Model2** `lmChatOpenAi` — options: "[object Object]"
6. **Sticky Note** `stickyNote` — color: "7", width: "606", height: "264"
7. **Sticky Note1** `stickyNote` — color: "7", width: "434", height: "230"
8. **Sticky Note2** `stickyNote` — color: "7", width: "446", height: "233"
9. **Sticky Note3** `stickyNote` — color: "7", width: "446", height: "253"
10. **Sticky Note4** `stickyNote` — color: "7", width: "626", height: "633"
11. **Sticky Note6** `stickyNote` — color: "7", width: "406", height: "173"
12. **Sticky Note5** `stickyNote` — color: "5", width: "440", height: "120"
13. **Sticky Note7** `stickyNote` — color: "5", width: "380", height: "120"
14. **Sticky Note8** `stickyNote` — width: "400", height: "800", content: "## Try It Out!
### This n8n template demonstrates how to use AI to generate new on-brand written content by analysing previously published content.

With such an approach, it's pos…[truncated]"
15. **Get Blog** `httpRequest` — url: `https://blog.n8n.io`
16. **Extract Article URLs** `html` — operation: **extractHtmlContent**
17. **Split Out URLs** `splitOut` — options: "[object Object]", fieldToSplitOut: "article"
18. **Latest Articles** `limit` — maxItems: "5"
19. **Get Article** `httpRequest` — url: `=https://blog.n8n.io{{ $json.article }}`
20. **Extract Article Content** `html` — operation: **extractHtmlContent**
21. **Markdown** `markdown` — html: "={{ $json.data }}", options: "[object Object]"
22. **Combine Articles** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
23. **Capture Existing Article Structure** `chainLlm` — text: "={{ $json.data.join('\n---\n') }}", messages: "[object Object]", promptType: "define"
24. **Extract Voice Characteristics** `informationExtractor` — text: "=### Analyse the given content

{{ $json.data.map(item => item.replace(/\n/g, '')).join('\n---\n') }}", options: "[object Object]", schemaType: "manual"
25. **Article Style & Brand Voice** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
26. **New Article Instruction** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Content Generation Agent** `informationExtractor` — text: "={{ $json.instruction }}", options: "[object Object]", attributes: "[object Object]"
28. **Save as Draft** `wordpress` — title: "={{ $json.output.title }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the creation of on-brand written content by leveraging AI to analyze existing blog articles. It extracts the writing style and brand voice from the latest articles on the n8n blog, then uses this analysis to generate new content. The workflow fetches articles, processes them into a structured format, and feeds this information to AI models which create drafts that are saved as WordPress drafts for review.

**Demonstrate**: A content marketing agency could use this workflow to regularly produce blog drafts that align with a client's existing brand voice. This saves time and ensures consistency in messaging across all published content.

**Imitate**: 1. Import the workflow into n8n. 2. Connect your OpenAI and WordPress accounts. 3. Adjust the HTTP request node to fetch articles from your desired blog. 4. Set the workflow to run on a schedule or trigger it manually. 5. Review the drafts in WordPress and make any necessary edits before publishing.

**Practice**: Set up a test blog with sample articles. Run the workflow to generate new drafts and compare the AI-generated content with your brand guidelines. Adjust the workflow settings to better match your desired style.

**WIIFM**: Mastering this workflow enables you to offer a valuable content creation service to clients, increasing their content output while maintaining brand consistency. This can boost your offerings as an automation consultant, leading to increased client satisfaction and revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, wordpressApi.
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
