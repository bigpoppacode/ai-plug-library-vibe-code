# Splitout Summarize Automation Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Set Output for Chat UI**.
2. **Set Output for Chat UI** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
Certainly! Here's a structured breakdown of the n8n workflow using the EDIP teaching method:

**Explain**:  
This workflow allows users to compare outputs from two different language models (LLMs) using a chat interface. When a chat message is received, it is sent to two LLMs. The responses, along with the user input, are logged into a Google Sheet for evaluation. This helps users determine which model performs better for their specific use case.

**Demonstrate**:  
A business owner could use this workflow to decide which LLM to integrate into their customer service chatbot by comparing how each model handles typical customer inquiries.

**Imitate**:  
1. Import the workflow into n8n.
2. Connect your OpenAI and Google Sheets accounts.
3. Set up the chat interface and Google Sheets template.
4. Test by sending chat messages and reviewing the logged responses in Google Sheets.

**Practice**:  
Create a test chat scenario with a few sample questions. Run the workflow and analyze the responses logged in Google Sheets. Try modifying the questions and observe how each model's response changes.

**WIIFM (What's In It For Me)**:  
Mastering this workflow enables you to offer AI model evaluation services, helping businesses choose the best LLM for their needs. This can enhance your service offerings and generate additional income in the AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** openRouterApi, googleApi.
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
