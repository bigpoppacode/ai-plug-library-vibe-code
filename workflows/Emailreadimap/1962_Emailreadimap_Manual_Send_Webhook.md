# Emailreadimap Manual Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Email Trigger (IMAP)** `emailReadImap` — options: "[object Object]"
3. **DeepSeek R1** `lmChatOpenAi` — model: `[object Object]`
4. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "retrieve-as-tool", options: "[object Object]", toolName: "company_knowladge_base"
5. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
6. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
8. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
9. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
10. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
11. **Sticky Note5** `stickyNote` — color: "4", width: "620", height: "400"
12. **OpenAI** `lmChatOpenAi` — model: `[object Object]`
13. **DeepSeek** `lmChatOpenAi` — model: `[object Object]`
14. **Sticky Note** `stickyNote` — width: "1620", height: "240", content: "# STEP 3 - MAIN FLOW

- Transform the email into Markdown format for optimal reading by the LLM model
- Email Summarization through DeepSeek R1 (any model can be used)
- I classify…[truncated]"
15. **OpenAI 4-o-mini** `lmChatOpenAi` — model: `[object Object]`
16. **Markdown** `markdown` — html: "={{ $json.textHtml }}", options: "[object Object]"
17. **Create collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION`
18. **Refresh collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION/points/delete`
19. **Email Summarization Chain** `chainSummarization` — options: "[object Object]", operationMode: "nodeInputBinary"
20. **Get folder** `googleDrive` — resource: **fileFolder**
21. **Email Classifier** `textClassifier` — options: "[object Object]", inputText: "=You must classify the following email::

{{ $json.response.text }}", categories: "[object Object]"
22. **Download Files** `googleDrive` — operation: **download**
23. **Write email** `agent` — text: "=Write the text to reply to the following email:

{{ $json.response.text }}", options: "[object Object]", promptType: "define"
24. **Do nothing** `noOp` — configured for its default action.
25. **Qdrant Vector Store1** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
26. **Review email** `chainLlm` — text: "=Review at the following email:

{{ $json.output }}", messages: "[object Object]", promptType: "define"
27. **Send Email** `emailSend` — html: "={{ $json.text }}", options: "[object Object]", subject: "=Re: {{ $('Email Trigger (IMAP)').item.json.subject }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates email responses. It starts by triggering when an email is received. The email content is converted to Markdown and summarized using DeepSeek R1. Key information is extracted and stored in a Qdrant Vector Store for future reference. The email is then classified, and a response is generated using OpenAI. This response is reviewed for quality and sent back to the original sender.

**Demonstrate:** A business owner could use this workflow to automate customer support emails, ensuring prompt, consistent, and accurate responses without manual intervention. This enhances efficiency and customer satisfaction.

**Imitate:** 
1. Import the workflow into n8n.
2. Set up email credentials for the IMAP trigger.
3. Configure Qdrant and OpenAI API keys.
4. Customize email classification categories to fit your needs.
5. Test the workflow with sample emails to ensure proper functionality.

**Practice:** Create a test email account and send various emails with different queries. Observe how the workflow summarizes, classifies, and responds to each email. Adjust classification settings to improve accuracy.

**WIIFM:** Mastering this workflow enables you to offer AI-powered email automation services, streamlining customer communication for businesses. This can increase your service portfolio, attract more clients, and boost your income as an automation specialist.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** imap, openAiApi, smtp, qdrantApi, httpHeaderAuth.
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
  