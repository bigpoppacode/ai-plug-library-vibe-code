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
  - **Explain:** This workflow is an AI-powered email auto-responder. It triggers on receiving an email, summarizes the email content using AI, classifies the email, and generates a response based on company knowledge stored in a vector database. It then reviews the response and sends it back to the original sender, ensuring efficient email management and response accuracy.
  
- **Demonstrate:** A business owner might use this workflow to automatically handle customer inquiries, ensuring quick and consistent responses, thereby improving customer service and efficiency.

- **Imitate:** Import the workflow into n8n. Connect your email and OpenAI accounts. Customize the email classification and response prompts to suit your business needs. Test the workflow by sending a test email to see how it processes and responds.

- **Practice:** Create a test email with a customer inquiry and run the workflow. Observe how the email is summarized, classified, and responded to. Tweak the AI prompts and classifications to improve accuracy.

- **WIIFM:** Mastering this workflow can streamline communication processes, reducing the need for manual email handling. It enhances customer satisfaction through quick responses and can be offered as a service to businesses, creating a potential revenue stream in the AI automation market.
  
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
  