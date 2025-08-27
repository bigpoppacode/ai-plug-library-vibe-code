# Manual Stickynote Process Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, lmChatOpenAi×2, manualTrigger.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
 "type": "object",
 "properties": {
 "state": {
 "type": "string"
 },
 "cities": {
 "type": "array",
 "items": {
 "type": "object",
 "properties": {
 "name": "string",
 "populati…[truncated]"
4. **Auto-fixing Output Parser** `outputParserAutofixing` — configured for its default action.
5. **Sticky Note** `stickyNote` — height: "264.69900963477494", content: "### Parser which defines the output format and which gets used to validate the output"
6. **Sticky Note1** `stickyNote` — height: "266.9506012398238", content: "### The LLM which gets used to try to autofix the output in case it was not valid"
7. **Sticky Note2** `stickyNote` — height: "245.56048099185898", content: "### The LLM to process the original prompt"
8. **Sticky Note3** `stickyNote` — width: "348.0763970423483", height: "233.17672716408998", content: "### Autofixing parser which tries to fix invalid outputs with the help of an LLM"
9. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
10. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
11. **Prompt** `set` — values: "[object Object]", options: "[object Object]"
12. **LLM Chain** `chainLlm` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow fetches the five largest U.S. states by area along with their three largest cities and their populations. It uses a prompt to request this information, processes it through a Language Model (LLM), and ensures the output is structured and validated using parsers. If the output is incorrect, an auto-fixing parser attempts to correct it.

**Demonstrate:**  
A travel agency might use this workflow to gather geographical data for planning tours across the largest states, ensuring they have accurate and structured information for creating itineraries.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect and configure your OpenAI account.
3. Set the prompt to gather data.
4. Execute the workflow and observe the structured output.
5. Adjust parsers if needed for different output formats.

**Practice:**  
Create a workflow to fetch data on the largest countries by population and their capitals. Use the structured output parser to ensure data consistency and test the auto-fixing parser with incorrect outputs.

**WIIFM:**  
Mastering this workflow can help you offer data-driven solutions to clients, enhancing decision-making processes. By automating data collection and validation, you can provide valuable insights, improving client satisfaction and opening up opportunities for recurring projects in your automation business.
  
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
  