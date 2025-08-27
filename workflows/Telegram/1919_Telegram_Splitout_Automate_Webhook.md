# Telegram Splitout Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Sticky Note** `stickyNote` — color: "7", width: "633", height: "974"
3. **Sticky Note2** `stickyNote` — color: "5", width: "768.3946456283678", height: "381.59428876752247"
4. **gpt-4o-mini** `lmChatOpenAi` — options: "[object Object]"
5. **When chat message received** `manualChatTrigger` — configured for its default action.
6. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('When chat message received').item.json.sessionId }}", sessionIdType: "customKey"
7. **Sticky Note3** `stickyNote` — color: "6", width: "1163", height: "515"
8. **Sticky Note4** `stickyNote` — width: "872", height: "297", content: "## Confluence Search By ID"
9. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Search By ID** `httpRequest` — url: `=https://example.atlassian.net/wiki/rest/api/search?limit=1&cql=id={{ $json.page_id_n8n }}`
11. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
12. **Page Schema** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Confluence Page Storage View** `httpRequest` — url: `=https://example.atlassian.net/wiki/api/v2/pages/{{ $json.id }}`
14. **HTML to Markdown** `markdown` — html: "={{ $json.body.storage.value }}", options: "[object Object]"
15. **AI Agent** `agent` — text: "=Answer questions from user with the context provided.  Only respond using the context.  If you do not know the answer simply respond with "I don't know."

User question: {{ $('Whe…[truncated]", agent: "conversationalAgent", options: "[object Object]"
16. **Chat Response** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Send Telegram Message** `telegram` — text: "={{ $json.output}}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow creates a chatbot that interacts with Confluence pages. When a chat message is received, it fetches the relevant Confluence page by ID, retrieves its content, converts HTML to Markdown, and uses an AI agent to answer questions based on this context. The response is then sent via Telegram.

**Demonstrate**  
A company could use this workflow to provide quick access to Confluence documentation for employees. For example, when an employee asks about a specific policy, the chatbot retrieves the correct page and provides a concise answer, reducing the need to manually search through documents.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Confluence and Telegram accounts.
3. Adjust the Confluence page IDs in the workflow to match your documentation.
4. Test the chatbot by sending a sample message and observing the response.

**Practice**  
Create a test Confluence page and add its ID to the workflow. Send a chat message to trigger the workflow and check if the response includes the correct page content. Adjust the AI agent's prompts to refine answers.

**WIIFM**  
Mastering this workflow allows you to automate document retrieval and Q&A processes, enhancing internal communication and support. This skill can be offered as a service to businesses, generating income by optimizing their knowledge management systems.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, openAiApi, telegramApi.
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
