# Supabase Stickynote Automation Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Postgres Chat Memory** `memoryPostgresChat` — tableName: "n8n_split_test_chat_histories", sessionKey: "={{ $('When chat message received').item.json.sessionId }}", sessionIdType: "customKey"
5. **Sticky Note1** `stickyNote` — color: "7", width: "220", height: "300"
6. **Sticky Note** `stickyNote` — color: "7", width: "1340", height: "500"
7. **Sticky Note2** `stickyNote` — color: "7", width: "520", height: "440"
8. **Sticky Note6** `stickyNote` — color: "5", width: "220", height: "260"
9. **Sticky Note8** `stickyNote` — color: "5", width: "340", height: "140"
10. **Sticky Note5** `stickyNote` — width: "520", height: "240", content: "### Setup
1. Create a table in Supabase called **split_test_sessions**. It needs to have the following columns: **session_id** (`text`) and **show_alternative** (`bool`)
2. Add you…[truncated]"
11. **Sticky Note3** `stickyNote` — width: "560", height: "480", content: "
## Split Test Different Agent Prompts with Supabase and OpenAI
### Use Case
Oftentimes, it's useful to test different settings for a large language model in production against var…[truncated]"
12. **Define Path Values** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Check If Session Exists** `supabase` — operation: **get**, table: `split_test_sessions`
14. **If Session Does Exist** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Assign Path To Session** `supabase` — table: `split_test_sessions`
16. **Get Correct Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
17. **AI Agent** `agent` — text: "={{ $('When chat message received').item.json.chatInput }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow is designed for A/B split testing different prompts used by an AI model. When a chat message is received, the workflow checks if the chat session already exists in a database. If not, it creates a new session and randomly assigns one of two prompts (baseline or alternative) to the session. The prompt is then used by the AI model to generate responses. This setup allows for testing which prompt yields better interaction results.

**Demonstrate**: A business owner might use this workflow to test different customer service scripts to determine which one results in higher customer satisfaction or quicker resolutions.

**Imitate**: To apply this workflow, set up a Supabase table with `session_id` and `show_alternative` columns. Connect your Supabase, OpenAI, and PostgreSQL credentials to n8n. Define your baseline and alternative prompts in the workflow, activate it, and start testing by sending chat messages.

**Practice**: Create a Supabase table and run the workflow with different chat sessions to see how it assigns and uses the baseline and alternative prompts. Observe how the AI model responds with each prompt.

**WIIFM**: Mastering this workflow can help you provide valuable A/B testing services for AI-driven customer interactions, enabling businesses to optimize their communication strategies, enhance customer satisfaction, and potentially increase sales, thereby generating income as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** supabaseApi, openAiApi, postgres.

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
