# ExecuteWorkflow Summarize Send Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, code×2, set×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note** `stickyNote` — width: "1174.6162657502882", height: "578.9520146851776", content: "## Sub-workflow: Return the capitals of fictional countries
It can either list the countries it knows about or return the capital of a specific country"
3. **Sticky Note1** `stickyNote` — width: "1168", height: "528", content: "## Main workflow: Chat with OpenAI Assistant
Click the 'Chat' button at the bottom of the screen to try"
4. **When chat message received** `chatTrigger` — options: "[object Object]"
5. **Simple Memory** `memoryBufferWindow` — configured for its default action.
6. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
7. **Tool to call the workflow below** `toolWorkflow` — name: "country_capitals_tool", workflowId: "[object Object]", description: "This tool has two modes:
1. Pass 'list' to the tool to get a list of countries that the tool has the capitals for (one per line). This is useful if you can't find a match, to see i…[truncated]"
8. **Tool: Get current date and time** `toolCode` — name: "date_tool", jsCode: "let now = DateTime.now()
return now.toISO()", description: "Call this tool to get the current timestamp (in ISO format). No parameters necessary"
9. **OpenAI** `openAi` — resource: **assistant**
10. **List countries?** `if` — options: "[object Object]", conditions: "[object Object]"
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
        "coun…[truncated]"
12. **Mapping data1** `code` — jsCode: "return [
    {
        "country": "Wakanda",
        "capital": "Birnin Zana"
    },
    {
        "country": "Narnia",
        "capital": "Cair Paravel"
    },
    {
        "coun…[truncated]"
13. **Concatenate country names** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
14. **Get the matching country's details** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
15. **Return country list** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Return specific capital** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow allows users to interact with an OpenAI Assistant to get information about fictional countries' capitals. The workflow can either list all the countries it knows or return the capital of a specific country when queried. It uses a chat interface to receive messages, processes them through a series of nodes, and returns the relevant information.

**Demonstrate**  
A developer could use this workflow to create a fun chatbot for a fictional world-building project, where users can learn about the capitals of fictional countries in a game or story setting.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your OpenAI account.
3. Set up a chat interface to receive user queries.
4. Customize the list of fictional countries and their capitals as needed.
5. Test the workflow by querying for a list of countries or a specific capital.

**Practice**  
Create a small list of fictional countries with capitals in an n8n workflow. Use a chat tool to ask about these capitals and observe how the workflow returns the correct information.

**WIIFM**  
Mastering this workflow can help you develop interactive chatbots that engage users in unique ways, offering a niche service in storytelling or gaming industries, potentially opening up new revenue streams in creative and entertainment sectors.
  
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
  