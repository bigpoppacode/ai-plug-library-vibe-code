# Googledocs Webhook Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Item List Output Parser** `outputParserItemList` — options: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "532.597092515486", height: "508.1316876142587"
4. **Sticky Note1** `stickyNote` — color: "7", width: "493.289385759178", height: "418.29352785836636"
5. **Sticky Note2** `stickyNote` — color: "7", width: "500.1029039641811", height: "599.9895116376663"
6. **Sticky Note3** `stickyNote` — color: "7", width: "746.3888903304862", height: "600.3660610069576"
7. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **Sticky Note4** `stickyNote` — width: "421.778219154496", height: "515.8006969458895", content: "## Try It Out!

**This workflow does the following:**
* Receives a RFP document via webhook
* Creates a new RFP response document via Google Docs
* Uses LLMs to extract the questio…[truncated]"
9. **Sticky Note5** `stickyNote` — color: "7", width: "474.3513281516049", height: "390.51033452105344"
10. **Sticky Note6** `stickyNote` — width: "192.30781285767205", height: "306.5264325350084", content: "














🚨**Required**
* Use a tool such as Postman to send data to the webhook."
11. **Sticky Note7** `stickyNote` — width: "306.8994213707367", height: "481.01365258903786", content: "
















🚨**Required**
You'll need to create an OpenAI Assistant to use this workflow.
* Sign up for [OpenAI Dashboard](https://platform.openai.com) if you haven't already…[truncated]"
12. **Sticky Note8** `stickyNote` — width: "386.79263167741857", height: "94.04968721739164", content: "🚨**Required**
* Update the email address to send to in Gmail Node.
* Update the channel and message for Slack."
13. **Wait for Request** `webhook` — method: **POST**, path: `/35e874df-2904-494e-a9f5-5a3f20f517f8`
14. **Sticky Note9** `stickyNote` — color: "5", width: "529.9947173986736", height: "157.64231937074243"
15. **Get RFP Data** `extractFromFile` — operation: **pdf**
16. **Set Variables** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "doc_title": "{{ $('Wait for Request').item.json.body.title }}",
  "doc_filename": "{{ $('Wait for Request').item.json.body.id }} | {{ $('Wait for Request').item.json.body.tit…[truncated]"
17. **Create new RFP Response Document** `googleDocs` — title: "={{ $json.doc_filename }}", folderId: "=1y0I8MH32maIWCJh767mRE_NMHC6A3bUu"
18. **Add Metadata to Response Doc** `googleDocs` — operation: **update**
19. **Extract Questions From RFP** `chainLlm` — text: "=You have been given a RFP document as part of a tender process of a buyer. Please extract all questions intended for the supplier. You must ensure the questions extracted are exac…[truncated]", promptType: "define", hasOutputParser: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of responding to Requests for Proposals (RFPs). It begins by receiving an RFP document through a webhook, then extracts data from the PDF. The workflow creates a new Google Docs document for the RFP response, extracts questions from the RFP using a language model, and generates answers using an OpenAI Assistant. Finally, it records these Q&A pairs in the document and notifies the team via email and Slack once the process is complete.

**Demonstrate:** A consulting firm could use this workflow to streamline their process of responding to RFPs, saving time and ensuring consistency in responses. It allows them to handle more RFPs efficiently, increasing their chances of winning contracts.

**Imitate:** Import the workflow into n8n, configure your webhook, Google Docs, and OpenAI accounts. Set up the email and Slack notifications. Customize the document template and ensure the OpenAI Assistant is tailored to your company's data.

**Practice:** Create a test RFP document, run it through the workflow, and review the generated response document. Adjust the OpenAI Assistant's input if needed to improve the quality of the generated answers.

**WIIFM:** Mastering this workflow enables you to offer a valuable service in automating RFP responses, helping businesses save time and increase their proposal success rate, thereby enhancing your reputation and income in the automation industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDocsOAuth2Api, openAiApi, slackApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  