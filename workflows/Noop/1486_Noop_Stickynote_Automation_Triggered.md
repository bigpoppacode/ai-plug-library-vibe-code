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
      "descrip…[truncated]"
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
  - **Explain:** This n8n workflow automates the extraction of personal data from chat messages using a self-hosted language model, Mistral NeMo. When a chat message is received, the workflow processes it through the chat model to extract structured information like name, surname, and communication type, ensuring the output adheres to a specified JSON schema. If the model's response doesn't fit the schema, an auto-fixing parser attempts to correct it.

- **Demonstrate:** A business owner could use this workflow to automatically capture and organize customer information from chat inquiries, improving customer management and follow-up processes.

- **Imitate:** To adapt this workflow, import it into your n8n instance, connect your chat service, and set up the Mistral NeMo model. Customize the JSON schema to fit your data needs, and test the workflow with sample chat messages to ensure accurate data extraction.

- **Practice:** Create a test chat message with fictitious customer data. Run the workflow to see how the extracted information is structured and verified. Adjust the schema and retry to understand the parsing process.

- **WIIFM:** Mastering this workflow can enhance your service offerings by enabling automated data extraction and management. This can lead to more efficient customer interactions, better data accuracy, and potential upselling opportunities in an AI-driven automation business.
  
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
  