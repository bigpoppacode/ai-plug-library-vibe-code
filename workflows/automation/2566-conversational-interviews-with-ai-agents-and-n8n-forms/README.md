# Conversational Interviews With AI Agents And N8n Forms

## 🚀 What It Does
This workflow automates a process involving if, set, memoryManager.

## 💼 Business Use Case
This is a valuable tool for automating data transfer, lead management, or internal processes, saving significant manual effort.

## ⚙️ How It Works
1. **Start Interview (formTrigger)**: The workflow starts or proceeds with this step.
2. **UUID (crypto)**: The workflow starts or proceeds with this step.
3. **Create Session (redis)**: The workflow starts or proceeds with this step.
4. **Generate Row2 (set)**: The workflow starts or proceeds with this step.
5. **Update Session (redis)**: The workflow starts or proceeds with this step.
6. **Set Interview Topic (set)**: The workflow starts or proceeds with this step.
7. **AI Researcher (agent)**: The workflow starts or proceeds with this step.
8. **Parse Response (set)**: The workflow starts or proceeds with this step.
9. **Stop Interview? (if)**: The workflow starts or proceeds with this step.
10. **Generate Row1 (set)**: The workflow starts or proceeds with this step.
11. **Update Session2 (redis)**: The workflow starts or proceeds with this step.
12. **Clear For Next Interview (memoryManager)**: The workflow starts or proceeds with this step.
13. **Redirect to Completion Screen (form)**: The workflow starts or proceeds with this step.
14. **Get Session (redis)**: The workflow starts or proceeds with this step.
15. **Session to List (splitOut)**: The workflow starts or proceeds with this step.
16. **Messages To JSON (set)**: The workflow starts or proceeds with this step.
17. **Save to Google Sheet (googleSheets)**: The workflow starts or proceeds with this step.

## 🔧 Setup Instructions
1. **Add Trigger (If Needed):** If this workflow doesn't start with a trigger (like Schedule or Webhook), add one to automate it.
2. **Connect Credentials:** Go through each node and connect your accounts (e.g., Google, Airtable, OpenAI).
3. **Customize Parameters:** Review key nodes like "Stop Interview?" and "Get Session" and update any placeholder IDs, table names, or URLs to match your specific needs.

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
