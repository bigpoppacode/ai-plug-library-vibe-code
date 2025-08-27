# Stickynote Notion Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Sticky Note** `stickyNote` — color: "7", width: "616.7964812508943", height: "231.27721611949534"
3. **Auto-fixing Output Parser** `outputParserAutofixing` — configured for its default action.
4. **Anthropic Chat Model** `lmChatAnthropic` — options: "[object Object]"
5. **Anthropic Chat Model1** `lmChatAnthropic` — options: "[object Object]"
6. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"workflowJson": "json of workflow"
}"
7. **Sticky Note1** `stickyNote` — color: "7", width: "747.234277816171", height: "110.78786136085805"
8. **Sticky Note2** `stickyNote` — color: "7", width: "638.6509136143742", height: "114.20873484539783"
9. **Sticky Note3** `stickyNote` — color: "7", width: "727.8599253628195", height: "111.9281525223713"
10. **Sticky Note4** `stickyNote` — color: "7", width: "343.3887397891673", height: "132.30907857627597"
11. **Anthropic Chat Model2** `lmChatAnthropic` — options: "[object Object]"
12. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "Hi there, I can help you make an AI Agent assistant that can query a Notion database.

Generating the workflow may take a few minutes as I check whether it works and try again if I…[truncated]"
13. **Sticky Note5** `stickyNote` — color: "7", width: "614.8565246662145", height: "416.2640726760381"
14. **Notion** `notion` — resource: **database**
15. **standardize schema** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Return error to chat** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Simplify properties object** `code` — jsCode: "// Loop through each incoming item
return items.map(item => {
  const inputDatabase = item.json["inputDatabase"];

  const simplifiedProperties = Object.fromEntries(Object.entries(…[truncated]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the creation of a custom AI chatbot workflow for querying a Notion database. When a user provides a Notion database URL through a chat interface, the workflow retrieves the database schema, simplifies it, and generates a corresponding AI Assistant workflow. It checks if the generated workflow is valid and returns the result to the chat interface.

**Demonstrate:** A developer could use this workflow to quickly generate an AI assistant to help team members query a Notion knowledge base, saving time and reducing the need for manual database lookups.

**Imitate:** 1. Import the workflow into n8n. 2. Provide the Notion database URL in the chat. 3. Ensure your Notion account is connected. 4. Test by running the workflow to see if it generates the AI assistant workflow JSON correctly.

**Practice:** Create a Notion database with simple data. Use the workflow to generate an AI assistant. Test the assistant by asking it questions related to your database to see how well it retrieves data.

**WIIFM:** Mastering this workflow allows you to offer AI-powered database solutions, enhancing productivity and offering new services to clients, potentially leading to increased revenue and customer satisfaction in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** notionApi.

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
