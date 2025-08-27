# Manual Stickynote Automate Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, manualTrigger, code.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **Sticky Note7** `stickyNote` — width: "328.41313484548044", height: "211.30313955500145", content: "[redacted]"
3. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — color: "7", height: "220.82906011310624", content: "## About
This workflow shows how you can write LangChain code in n8n (and import its modules if required).

The workflow fetches a video from YouTube and produces a textual summary…[truncated]"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **Set YouTube video ID** `set` — options: "[object Object]", assignments: "[object Object]"
7. **LangChain Code** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow is designed to fetch a YouTube video and generate a textual summary. It uses LangChain code to load the video transcript, then splits it into manageable parts for processing. An OpenAI language model creates a summary and proposes potential questions and answers based on the video content.

- **Demonstrate:** A content creator could use this workflow to quickly generate summaries and discussion points for their YouTube videos, enhancing audience engagement and saving time on manual content creation.

- **Imitate:** 
  1. Import the workflow into your n8n instance.
  2. Replace `YOUR_API_KEY` with your actual API key for searchapi.io.
  3. Set your desired YouTube video ID in the workflow.
  4. Execute the workflow to generate a summary.

- **Practice:** Try using a different YouTube video ID to test the workflow. Observe how the summary and questions change with different video content. Experiment with modifying the prompt to see how it affects the output.

- **WIIFM:** Mastering this workflow allows you to offer automated content summarization services, saving clients time and enhancing their content strategy. This skill can attract new customers and generate income in the growing field of AI-driven content automation.
  
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
  