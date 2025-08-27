# Manual Stickynote Process Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, lmChatOpenAi×2, manualTrigger.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "264.69900963477494", content: "### Parser which defines the output format and which gets used to validate the output"
4. **Sticky Note1** `stickyNote` — height: "266.9506012398238", content: "### The LLM which gets used to try to autofix the output in case it was not valid"
5. **Sticky Note2** `stickyNote` — height: "245.56048099185898", content: "### The LLM to process the original prompt"
6. **Sticky Note3** `stickyNote` — width: "348", height: "253", content: "### Autofixing parser which tries to fix invalid outputs with the help of an LLM"
7. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
8. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
9. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
10. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "state": {
      "type": "string"
    },
    "cities": {
      "type": "array",
      "items": {
        "type": "object",
        "prop…[truncated]"
11. **Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Basic LLM Chain** `chainLlm` — hasOutputParser: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow uses OpenAI to process a prompt asking for the largest states by area in the USA, including their largest cities and population. The workflow ensures the output is structured correctly using output parsers and an auto-fixing feature to validate and correct any invalid outputs.

**Demonstrate**  
A business owner could use this workflow to automate data extraction tasks, ensuring structured and accurate data from AI models. This is useful for generating reports or insights that require consistent formatting.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your OpenAI account.
3. Set up the initial prompt and configure the desired output format.
4. Test the workflow with various prompts to ensure the output meets requirements.
5. Adjust the parsers if necessary to handle different data structures.

**Practice**  
Create a test prompt that requests similar structured data, such as the largest countries by population. Use the workflow to ensure the output is correctly formatted and practice adjusting the parsers for different data types.

**WIIFM**  
Mastering this workflow allows you to offer structured data extraction services to clients, automating complex data tasks that ensure accuracy and consistency. This can expand your service offerings and increase your value in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
  
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
  