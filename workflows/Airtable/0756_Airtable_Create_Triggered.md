# Airtable Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-lite"
4. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
5. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"name": "Name of the prompt",
    "category" : "the prompt category"
}"
6. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-lite"
7. **Generate a new prompt** `chainLlm` — messages: "[object Object]"
8. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Categorize and name Prompt** `chainLlm` — text: "={{ $json.text }}", messages: "[object Object]", promptType: "define"
10. **set prompt fields** `set` — options: "[object Object]", assignments: "[object Object]"
11. **add to airtable** `airtable` — operation: **create**, table: `[object Object]`
12. **Return results** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of generating, categorizing, and storing AI prompts. It starts when a chat message is received, uses the Google Gemini Chat Model to generate a new prompt, categorizes and names the prompt, and finally adds the details to an Airtable database for easy access and organization.

**Demonstrate**  
A freelance AI consultant could use this workflow to streamline the creation and management of AI prompts for various client projects, ensuring consistency and efficiency in handling multiple AI-driven tasks.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Google Gemini and Airtable accounts.
3. Set up the chat trigger to receive messages.
4. Customize the prompt generation and categorization to fit your needs.
5. Test the workflow by sending a chat message to see how it generates and stores prompts.

**Practice**  
Create a test scenario by setting up a simple chat interface, sending a message, and observing how the workflow processes the message to generate and store a prompt in Airtable. Experiment with different message inputs to see varying outputs.

**WIIFM**  
Mastering this workflow can enhance your service offerings by enabling efficient AI prompt management. This can attract more clients in need of AI automation solutions, increase your marketability, and potentially boost income by providing streamlined, scalable AI services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, airtableTokenApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  