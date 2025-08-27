# Manual Supabase Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **GeminiFlash2.0** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
4. **Supabase Postgres Database** `memoryPostgresChat` — tableName: "whatsapp_messages3", sessionKey: "={{ $json.session_id }}", sessionIdType: "customKey"
5. **Set sample Input Variables** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Sample Agent ** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
7. **Update additonal Values e.g. Name, Address ...** `supabase` — operation: **update**, table: `whatsapp_messages3`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates chat interactions using AI and stores these interactions in a database. It begins with a manual trigger and sets input variables like session ID and user input. The AI model processes the input, generating a response. The workflow then updates a Supabase Postgres database with user details and chat sessions, ensuring data is organized and retrievable.

### Demonstrate
A business owner could use this workflow to automate customer support by integrating AI responses and maintaining a record of interactions in a database, improving response times and ensuring consistent customer service.

### Imitate
1. Import the workflow into n8n.
2. Set up your Supabase and AI credentials.
3. Define input variables like session ID and user queries.
4. Run the workflow to test AI interactions and database updates.
5. Customize the workflow to fit specific business needs, like changing database fields.

### Practice
Create a test Supabase database and populate it with a few user records. Run the workflow with sample inputs to observe how chat interactions are processed and stored. Modify the input variables and AI prompts to see how changes affect the output.

### WIIFM
By mastering this workflow, you can offer automated customer support solutions, enhancing customer satisfaction and operational efficiency. This skill can differentiate your services in the AI automation market, potentially increasing client acquisition and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, postgres, supabaseApi.
  
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
  