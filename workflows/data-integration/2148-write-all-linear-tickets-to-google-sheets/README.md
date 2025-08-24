# Write All Linear Tickets To Google Sheets

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, graphql, stickyNote.

## 💼 Business Use Case
This is a valuable tool for automating data transfer, lead management, or internal processes, saving significant manual effort.

## ⚙️ How It Works
1. **Every day at 06:00 (scheduleTrigger)**: The workflow starts or proceeds with this step.
2. **Get all your team's tickets (graphql)**: The workflow starts or proceeds with this step.
3. **if has next page (if)**: The workflow starts or proceeds with this step.
4. **Split out the tickets (splitOut)**: The workflow starts or proceeds with this step.
5. **Get end cursor (set)**: The workflow starts or proceeds with this step.
6. **Set custom fields (set)**: The workflow starts or proceeds with this step.
7. **Get next page (graphql)**: The workflow starts or proceeds with this step.
8. **Flatten object to have simple fields to filter by (code)**: The workflow starts or proceeds with this step.
9. **Write tickets to Sheets (googleSheets)**: The workflow starts or proceeds with this step.

## 🔧 Setup Instructions
1. **Add Trigger (If Needed):** If this workflow doesn't start with a trigger (like Schedule or Webhook), add one to automate it.
2. **Connect Credentials:** Go through each node and connect your accounts (e.g., Google, Airtable, OpenAI).
3. **Customize Parameters:** Review key nodes like "Every day at 06:00" and "Flatten object to have simple fields to filter by" and update any placeholder IDs, table names, or URLs to match your specific needs.

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
