# Summarize Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using code×2, stickyNote×2, set×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On new manual Chat Message**.
2. **On new manual Chat Message** `manualChatTrigger` — configured for its default action.
3. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
4. **Mapping data1** `code` — jsCode: "return [
 {
 "country": "Wakanda",
 "capital": "Birnin Zana"
 },
 {
 "country": "Narnia",
 "capital": "Cair Paravel"
 },
 {
 "country": "Gondor",
 "capital": "Minas Tirith"
 },
 {
…[truncated]"
5. **Sticky Note** `stickyNote` — width: "1174.6162657502882", height: "578.9520146851776", content: "## Sub-workflow: Return the capitals of fictional countries
It can either list the countries it knows about or return the capital of a specific country"
6. **Tool to call the workflow below** `toolWorkflow` — name: "country_capitals_tool", workflowId: "={{ $workflow.id }}", description: "This tool has two modes:
1. Pass 'list' to the tool to get a list of countries that the tool has the capitals for (one per line). This is useful if you can't find a match, to see i…[truncated]"
7. **Sticky Note1** `stickyNote` — width: "1168.2339341502545", height: "487.70693675217734", content: "## Main workflow: Chat with OpenAI Assistant
Click the 'Chat' button at the bottom of the screen to try"
8. **Tool: Get current date and time** `toolCode` — name: "date_tool", jsCode: "let now = DateTime.now()
return now.toISO()", description: "Call this tool to get the current timestamp (in ISO format). No parameters necessary"
9. **OpenAI Assistant** `openAiAssistant` — options: "[object Object]", assistantId: "asst_BWy0154vMGMdrX7MjCYaYv6a"
10. **List countries?** `if` — conditions: "[object Object]"
11. **Mapping data** `code` — jsCode: "return [
 {
 "country": "Wakanda",
 "capital": "Birnin Zana"
 },
 {
 "country": "Narnia",
 "capital": "Cair Paravel"
 },
 {
 "country": "Gondor",
 "capital": "Minas Tirith"
 },
 {
…[truncated]"
12. **Get the matching country's details** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput1"
13. **Concatenate country names** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
14. **Return specific capital** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
15. **Return country list** `set` — fields: "[object Object]", include: "none", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to interact with a chat system for retrieving information about fictional countries and their capitals. When a manual chat message is received, the workflow can either list all known fictional countries or return the capital of a specific one. It uses a combination of nodes to process the request, including mapping data, executing conditions, and summarizing results to provide the desired information.

### Demonstrate
A travel agency specializing in fantasy-themed tours can use this workflow to quickly respond to customer inquiries about fictional destinations, enhancing their customer service and engagement.

### Imitate
1. Import the workflow into your n8n environment.
2. Connect the necessary nodes, ensuring your chat system is configured.
3. Customize the list of fictional countries as needed.
4. Test the workflow by sending a chat message to see if it returns the correct information.

### Practice
Create a small list of fictional countries and capitals, then run the workflow by manually triggering a chat message. Try asking for a specific capital and see how the workflow retrieves and returns the correct information.

### WIIFM
Mastering this workflow allows you to offer unique, engaging services in niche markets, such as fantasy tourism or gaming communities. This can differentiate your business, attract customers, and open new revenue streams in the AI automation sector.

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
