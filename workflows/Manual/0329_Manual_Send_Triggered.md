# Manual Send Triggered
  ## 🚀 What It Does
  Automates a flow using manualTrigger, chatTrigger, agent.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **When chat message received** `chatTrigger` — options: "[object Object]"
4. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
5. **Code Tool** `toolCode` — name: "my_color_selector", jsCode: "const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
    'white',
    'black',
    'orange',
    'brown',
];

const ignoreColors = query.split(',').map((t…[truncated]", description: "Call this tool to get a random color. The input should be a string with comma-separated names of colors to exclude."
6. **Debug Input** `set` — options: "[object Object]", assignments: "[object Object]"
7. **AI Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow is designed to generate a random color, excluding specific colors based on user input. It starts with a manual or chat trigger, processes the input to exclude certain colors, and uses OpenAI to assist in generating a random color from the remaining options.

- **Demonstrate:** A designer selecting a theme might use this workflow to quickly generate color options, ensuring that they avoid any colors that clash with existing design elements.

- **Imitate:** Import the workflow to n8n, connect the OpenAI account, and set up a manual trigger. Customize the color exclusion list in the Debug Input node, and run the workflow to test random color generation.

- **Practice:** Create a simple table with color names in Airtable, then modify the workflow to exclude these colors dynamically. Test the workflow by adding/removing colors in Airtable and observing the changes.

- **WIIFM:** Mastering this workflow can enhance your ability to offer creative automation solutions, saving time and increasing efficiency for clients, thereby expanding your service offerings and boosting your income potential in the AI automation business.
  
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
  