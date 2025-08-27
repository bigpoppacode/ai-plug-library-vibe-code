# Form Markdown Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Landing Page Url**.
  2. **Landing Page Url** `formTrigger` — options: "[object Object]", formTitle: "Conversion Rate Optimizer", formFields: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
5. **Sticky Note** `stickyNote` — color: "3", width: "360", height: "100"
6. **Sticky Note1** `stickyNote` — color: "3", width: "420", height: "140"
7. **Scrape Website** `httpRequest` — url: `={{ $json['Landing Page Url'] }}`
8. **Content Audit** `agent` — text: "=You are the best SEO Manager in the country—a world-class expert in optimizing websites to rank on Google.

In this task, you will analyze the content of the webpage and perform a…[truncated]", options: "[object Object]", promptType: "define"
9. **Technical Audit** `agent` — text: "=You are the best SEO Manager in the country—a world-class expert in optimizing websites to rank on Google.
In this task, you will analyze the HTML code of a webpage and perform a …[truncated]", options: "[object Object]", promptType: "define"
10. **Merge** `merge` — configured for its default action.
11. **Aggregate** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
12. **Markdown** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "=# On-Page Technical Audit
{{ $json.output[0] }}

# On-Page SEO Content Audit
{{ $json.output[1] }}"
13. **Gmail** `gmail` — sendTo: "hello@youremail.com", message: "={{ $json.data }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow performs an on-page SEO audit of a given website. It starts by receiving a URL via a form. The workflow then scrapes the website content and uses AI to conduct two audits: a content audit and a technical SEO audit. The results from both audits are merged, transformed into a readable format using Markdown, and finally sent via email.

### Demonstrate
A digital marketing consultant could use this workflow to provide automated SEO audits for clients, helping them identify areas for improvement on their website to boost search engine rankings and user engagement.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and Gmail accounts.
3. Set up the form to receive website URLs.
4. Test the workflow by submitting a sample URL.
5. Review the email report to ensure it provides clear audit results.

### Practice
Create a test form to submit different website URLs. Run the workflow and compare the audit results for various sites. Modify the AI prompts to customize the audit criteria and observe how it affects the output.

### WIIFM
Mastering this workflow allows you to offer SEO audit services, enhancing your value proposition to clients. It enables efficient and scalable SEO analysis, potentially increasing your income by providing a high-demand service in digital marketing.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
  