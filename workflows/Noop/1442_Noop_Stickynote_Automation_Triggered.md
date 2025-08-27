# Noop Stickynote Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, chatTrigger, lmChatOllama.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Ollama Chat Model** `lmChatOllama` — model: `mistral-nemo:latest`
4. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
5. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
 "type": "object",
 "properties": {
 "name": {
 "type": "string",
 "description": "Name of the user"
 },
 "surname": {
 "type": "string",
 "description": "Surname of the user"
 }…[truncated]"
6. **Sticky Note** `stickyNote` — color: "2", width: "960", height: "500"
7. **Sticky Note1** `stickyNote` — color: "2", width: "440", height: "220"
8. **Sticky Note2** `stickyNote` — color: "2", width: "400", height: "220"
9. **Sticky Note3** `stickyNote` — width: "960", height: "120", content: "If the LLM response does not pass 
the **Structured Output Parser** checks,
**Auto-Fixer** will call the model again with a different 
prompt to correct the original response."
10. **Sticky Note6** `stickyNote` — height: "80", content: "The same LLM connects to both **Basic LLM Chain** and to the **Auto-fixing Output Parser**. 
"
11. **Sticky Note7** `stickyNote` — width: "200", height: "100", content: "When the LLM model responds, the output is checked in the **Structured Output Parser**"
12. **Basic LLM Chain** `chainLlm` — messages: "[object Object]", hasOutputParser: "true"
13. **Extract JSON Output** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $json.output }}
"
14. **On Error** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the extraction and validation of personal data from chat messages using a self-hosted language model. When a chat message is received, it is processed by the Mistral NeMo model to extract user details like name and communication type. If the output doesn't meet predefined criteria, an auto-fixer attempts to correct it. The structured data is then parsed and prepared for further use or storage.

**Demonstrate**  
A business could use this workflow to automate customer support chats, extracting user details automatically for CRM updates or personalized follow-up actions, enhancing customer experience and operational efficiency.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect to the Mistral NeMo model via Ollama.  
3. Adjust the JSON schema in the Structured Output Parser to fit your data needs.  
4. Set up a trigger for chat message reception.  
5. Test the workflow with sample chat messages.

**Practice**  
Create a mock chat scenario where users provide their names and communication preferences. Run the workflow to see how well it extracts and processes this information, then adjust the schema or auto-fixing prompts as needed.

**WIIFM (What's In It For Me)**  
Mastering this workflow enables you to offer automated data extraction services, enhancing client operations by reducing manual data entry and improving data accuracy. This can lead to increased client satisfaction and new business opportunities in automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** ollamaApi.
  
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
  