# Splitout Limit Automate Webhook
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
**Explain**  
This n8n workflow automates the process of generating new, on-brand written content by analyzing previously published articles. It retrieves the latest blog posts from a specified URL, extracts and analyzes their structure and style using AI, and then creates new content following the same brand voice. The generated content is saved as a draft in WordPress for review and publishing.

**Demonstrate**  
A content marketing agency could use this workflow to consistently produce blog content that aligns with a client's established brand voice, ensuring a uniform style across all publications, which is crucial for maintaining brand identity.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your OpenAI and WordPress accounts.
3. Update the HTTP request node to fetch data from your desired blog.
4. Customize the AI prompts to align with your brand's style.
5. Test the workflow to ensure it generates content as expected.

**Practice**  
Set up a test blog on WordPress and create a few sample articles. Run the workflow to see how it generates new content. Adjust the AI prompts and analyze the impact on the output to better understand the influence of brand voice analysis.

**WIIFM**  
Mastering this workflow can significantly enhance your service offerings in content creation, allowing you to produce high-quality, consistent content for clients. This can lead to increased client satisfaction, retention, and the ability to charge premium rates for your automation services.

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
