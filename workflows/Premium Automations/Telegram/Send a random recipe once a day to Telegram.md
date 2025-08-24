# Send A Random Recipe Once A Day To Telegram

## 🚀 What It Does
This workflow automates a process involving cron, airtable, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Telegram Trigger - people join bot** node.
2. **Step 1: Cron (cron)** - This step performs a key action in the workflow.
3. **Step 2: Airtable2 (airtable)** - This step performs a key action in the workflow.
4. **Step 3: Set (set)** - This step performs a key action in the workflow.
5. **Step 4: Recipe Photo (telegram)** - This step performs a key action in the workflow.
6. **Step 5: Recipe URL (telegram)** - This step performs a key action in the workflow.
7. **Step 6: IF (if)** - This step performs a key action in the workflow.
8. **Step 7: Airtable (airtable)** - This step performs a key action in the workflow.
9. **Step 8: Airtable1 (airtable)** - This step performs a key action in the workflow.
10. **Step 9: Telegram Recipe Image (telegram)** - This step performs a key action in the workflow.
11. **Step 10: Telegram Recipe URL (telegram)** - This step performs a key action in the workflow.
12. **Step 11: Set1 (set)** - This step performs a key action in the workflow.
13. **Step 12: Get recipes from API (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Get recipes (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Telegram Trigger - people join bot (telegramTrigger)** - This step performs a key action in the workflow.
16. **Step 15: Telegram - Welcome Message (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the daily sending of a random vegan recipe to users via Telegram. It collects user chat IDs from Airtable, fetches a recipe from an API, and sends both an image and a URL of the recipe to the user.

### Demonstrate
A restaurant owner could use this workflow to engage customers by sending them daily vegan recipes. This not only keeps customers excited but also promotes vegan menu items, enhancing customer loyalty and potentially increasing sales.

### Imitate
1. Import the workflow into n8n.
2. Set up a **Cron Trigger** to schedule daily execution.
3. Connect to **Airtable** to list user chat IDs.
4. Use an **HTTP Request** node to fetch a random vegan recipe from an API.
5. Send the recipe image and URL to each user via **Telegram**.
6. Test the workflow by adding a user chat ID to Airtable.

### Practice
Try modifying the recipe API to fetch recipes based on specific dietary restrictions (e.g., gluten-free). Update the workflow to allow users to select their preferences when they join the Telegram bot.

### WIIFM
Mastering this workflow can help you create engaging customer interactions, which can lead to increased customer retention and sales. As part of an AI automation business, it showcases your ability to deliver personalized experiences, making you more attractive to potential clients.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Cron" and "Telegram - Welcome Message" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
