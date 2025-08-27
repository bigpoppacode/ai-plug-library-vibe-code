# ExecuteWorkflow Telegram Update Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Trigger**.
  2. **Trigger** `telegramTrigger` — updates: "*", additionalFields: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "1200.5980355767667", height: "326.00218267794156"
4. **Sticky Note1** `stickyNote` — color: "7", width: "1200.5980355767667", height: "481.314448671577"
5. **Sticky Note2** `stickyNote` — color: "7", width: "1200.5980355767667", height: "198.69915410333263"
6. **Sticky Note3** `stickyNote` — color: "7", width: "1200.5980355767667", height: "198.69915410333263"
7. **Sticky Note4** `stickyNote` — color: "7", width: "1200.5980355767667", height: "198.69915410333263"
8. **Sticky Note5** `stickyNote` — color: "7", width: "1195.9520561291508", height: "481.314448671577"
9. **Sticky Note6** `stickyNote` — color: "7", width: "1216.6513404859077", height: "612.9550079288388"
10. **Sticky Note7** `stickyNote` — color: "7", width: "1216.6513404859077", height: "496.56854733756575"
11. **Global data** `set` — options: "[object Object]"
12. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Switch_MessageType** `switch` — rules: "[object Object]", options: "[object Object]"
14. **Telegram3** `telegram` — text: "Callback", chatId: "={{ $('Trigger').item.json.callback_query.data }}", additionalFields: "[object Object]"
15. **Start bot?** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Trigger Data for Payment** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ Object.assign({}, $('Trigger').item.json, { "action": "HandlePayment" }) }}"
17. **Command?** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Telegram1** `telegram` — text: "Photo", chatId: "={{ $('Trigger').item.json.message.from.id }}", additionalFields: "[object Object]"
19. **Telegram2** `telegram` — text: "File", chatId: "={{ $('Trigger').item.json.message.from.id }}", additionalFields: "[object Object]"
20. **Telegram5** `telegram` — text: "Voice", chatId: "={{ $('Trigger').item.json.message.from.id }}", additionalFields: "[object Object]"
21. **Menu** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Trigger Data for Register** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $('Trigger').item.json }}"
23. **Change status** `googleSheets` — operation: **update**
24. **Payment Handler** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]"
25. **Switch_Commands** `switch` — rules: "[object Object]", options: "[object Object]"
26. **Telegram4** `telegram` — text: "Text", chatId: "={{ $('Trigger').item.json.message.from.id }}", additionalFields: "[object Object]"
27. **Register** `executeWorkflow` — options: "[object Object]", workflowId: "XZKoHGcXJE1fUizb"
28. **Data for Invoice** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ Object.assign({}, $('Trigger').item.json, { "action": "SendInvoice" }) }}"
29. **Telegram6** `telegram` — text: "Don't know the command", chatId: "={{ $('Trigger').item.json.message.from.id }}", additionalFields: "[object Object]"
30. **Send Invoice** `executeWorkflow` — options: "[object Object]", workflowId: "lPX901W8CIMbKbww"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to manage interactions with a Telegram bot. It processes various types of messages like text, photos, files, and voice messages. It can handle commands to perform specific actions such as sending invoices or handling payments, and updates a Google Sheet based on user interactions. It also executes other workflows for registration and payment handling.

**Demonstrate:**  
A business owner can use this workflow to automate customer engagement via Telegram, handling queries, processing payments, and updating customer status in Google Sheets, thereby enhancing customer service efficiency.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Telegram and Google Sheets accounts.
3. Set up triggers for different Telegram message types.
4. Customize commands and actions to fit your business needs.
5. Test the workflow to ensure it performs as expected.

**Practice:**  
Create a test Telegram bot and simulate sending different message types. Observe how the workflow processes each type, updates Google Sheets, and triggers other workflows. Modify commands to see how the bot responds.

**WIIFM:**  
Mastering this workflow allows you to automate customer interactions, reducing manual effort and errors. This can improve customer satisfaction and free up time for other business activities, potentially increasing revenue and customer retention.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi, googleSheetsOAuth2Api.
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
  