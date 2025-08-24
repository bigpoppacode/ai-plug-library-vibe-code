# Import Productboard Notes Companies And Features Into Snowflake

## 🚀 What It Does
This workflow automates a process involving stickyNote, set, httpRequest.

## 💼 Business Use Case
This is a valuable tool for automating data transfer, lead management, or internal processes, saving significant manual effort.

## ⚙️ How It Works
1. **Schedule Trigger (scheduleTrigger)**: The workflow starts or proceeds with this step.
2. **Empty Table Productboard Features (snowflake)**: The workflow starts or proceeds with this step.
3. **get productboard features (httpRequest)**: The workflow starts or proceeds with this step.
4. **Split features (splitOut)**: The workflow starts or proceeds with this step.
5. **Manual mapping feature (set)**: The workflow starts or proceeds with this step.
6. **Loop Over Items features (splitInBatches)**: The workflow starts or proceeds with this step.
7. **Empty Table Productboard Companies (snowflake)**: The workflow starts or proceeds with this step.
8. **get productboard companies (httpRequest)**: The workflow starts or proceeds with this step.
9. **Split companies (splitOut)**: The workflow starts or proceeds with this step.
10. **Manual mapping companies (set)**: The workflow starts or proceeds with this step.
11. **Manual mapping companies db (set)**: The workflow starts or proceeds with this step.
12. **Update Productboard Companies (snowflake)**: The workflow starts or proceeds with this step.
13. **Empty Table Productboard Note and Feature IDs (snowflake)**: The workflow starts or proceeds with this step.
14. **Empty Table Productboard Notes (snowflake)**: The workflow starts or proceeds with this step.
15. **get productboard notes (httpRequest)**: The workflow starts or proceeds with this step.
16. **Split notes (splitOut)**: The workflow starts or proceeds with this step.
17. **Manual mapping notes (set)**: The workflow starts or proceeds with this step.
18. **Split features in notes (splitOut)**: The workflow starts or proceeds with this step.
19. **Count Notes Last 7 days and Unprocessed (snowflake)**: The workflow starts or proceeds with this step.
20. **Loop Over Items notes (splitInBatches)**: The workflow starts or proceeds with this step.
21. **Combine Feature ID + Note ID (set)**: The workflow starts or proceeds with this step.
22. **Slack (slack)**: The workflow starts or proceeds with this step.
23. **Loop Over Items features notes (splitInBatches)**: The workflow starts or proceeds with this step.

## 🔧 Setup Instructions
1. **Add Trigger (If Needed):** If this workflow doesn't start with a trigger (like Schedule or Webhook), add one to automate it.
2. **Connect Credentials:** Go through each node and connect your accounts (e.g., Google, Airtable, OpenAI).
3. **Customize Parameters:** Review key nodes like "Sticky Note1" and "Sticky Note2" and update any placeholder IDs, table names, or URLs to match your specific needs.

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
