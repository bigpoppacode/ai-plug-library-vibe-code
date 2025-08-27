# Emailreadimap Manual Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Email Trigger (IMAP)** `emailReadImap` — options: "[object Object]"
3. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "retrieve-as-tool", options: "[object Object]", toolName: "company_knowladge_base"
4. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
5. **OpenAI** `lmChatOpenAi` — model: `[object Object]`
6. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
8. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
9. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
10. **Sticky Note4** `stickyNote` — color: "4", width: "620", height: "400"
11. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
12. **Sticky Note** `stickyNote` — color: "3", width: "580", height: "260"
13. **DeepSeek Chat Model** `lmChatDeepSeek` — options: "[object Object]"
14. **Sticky Note2** `stickyNote` — width: "320", height: "240", content: "Chain that summarizes the received email"
15. **Sticky Note5** `stickyNote` — width: "340", height: "240", content: "Agent that retrieves business information from a vector database and processes the response"
16. **Sticky Note1** `stickyNote` — height: "240", content: "Convert email to Markdown format for better understanding of LLM models"
17. **Sticky Note6** `stickyNote` — color: "4", height: "360", content: "## IMPORTANT

For the "Send Draft" node, you need to send the draft email to a Gmail address because it is the only one that allows the "Send and wait for response" function."
18. **Sticky Note7** `stickyNote` — width: "360", height: "240", content: "Based on the suggestion received, the text classifier can understand whether the feedback received approves the generated email or not."
19. **Sticky Note8** `stickyNote` — width: "340", height: "220", content: "The Email Reviewer agent, taking inspiration from human feedback, rewrites the email"
20. **Markdown** `markdown` — html: "={{ $json.textHtml }}", options: "[object Object]"
21. **Create collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION`
22. **Refresh collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION/points/delete`
23. **Email Summarization Chain** `chainSummarization` — options: "[object Object]", operationMode: "nodeInputBinary"
24. **Get folder** `googleDrive` — resource: **fileFolder**
25. **Write email** `agent` — text: "=Write the text to reply to the following email:

{{ $json.response.text }}", options: "[object Object]", promptType: "define"
26. **Download Files** `googleDrive` — operation: **download**
27. **Qdrant Vector Store1** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow automates email management using AI. It starts by triggering on new emails, converts them to Markdown for better processing, and summarizes their contents. The workflow then retrieves relevant business information from a vector database using the Qdrant Vector Store and processes it with OpenAI to generate a suitable response. The response is reviewed, rewritten if needed, and classified as approved or declined based on feedback. Finally, the email is sent back to the original sender, ensuring efficient and accurate communication.

**Demonstrate**: A business owner could use this workflow to handle customer inquiries efficiently, reducing manual labor while ensuring consistent and professional responses, ultimately improving customer satisfaction and operational efficiency.

**Imitate**: To apply this workflow, import it into n8n, set up the email trigger with your email credentials, configure the Qdrant Vector Store with your business database, and connect your OpenAI account. Test the workflow with sample emails to ensure it summarizes, retrieves information, and generates responses as expected.

**Practice**: Create a test email account and send various emails to it. Run the workflow to see how it processes each email, summarizes, retrieves data, and generates responses. Adjust the workflow settings to improve accuracy and efficiency.

**WIIFM**: Mastering this workflow empowers you to offer automated email management services, enhancing business communication and reducing workload. This skill can attract clients seeking to streamline their operations, providing you with a competitive edge in the automation services market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** imap, smtp, qdrantApi, openAiApi, gmailOAuth2.
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
  