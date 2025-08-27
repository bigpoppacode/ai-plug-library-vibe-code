# Telegram Splitout Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "
[{"name": "total Protein",
  "quantity": 86,
  "unit": "gr"
},
  {"name": "total lipids",
  "quantity": 86,
  "unit": "gr"
},
  {"name": "total carbohydrats",
  "quantity": 86,
  …[truncated]"
5. **Receive Telegram message** `telegramTrigger` — updates: "message,channel_post", additionalFields: "[object Object]"
6. **Sticky Note** `stickyNote` — color: "4", height: "340", content: "## Send a Telegram message
1. To your channel with the list of what you ate during your last meal. 
Your input can be a written or a voice message."
7. **Sticky Note1** `stickyNote` — color: "5", width: "460", content: "## Setup
1. Create a telegram Bot by following the instructions [here](https://docs.n8n.io/integrations/builtin/credentials/telegram/).
2. Create an empty Google sheet and set it i…[truncated]"
8. **Sticky Note2** `stickyNote` — color: "4", height: "320", content: "## Check your data
- to see if it seems correct 
- you can filter and sum your nutrients to check if you had enough! "
9. **Sticky Note3** `stickyNote` — color: "4", width: "640", height: "260"
10. **Sticky Note4** `stickyNote` — color: "4", width: "340", height: "260"
11. **Sticky Note5** `stickyNote` — color: "4", width: "340", height: "320"
12. **Sticky Note6** `stickyNote` — color: "4", height: "320", content: "## Personalize the response message
You can send the response of the Agent
Or just be more polite! "
13. **Sticky Note7** `stickyNote` — width: "460", height: "260", content: "## Contact me
- If you need any modification to this workflow
- if you need some help with this workflow
- Or if you need any workflow in n8n, Make, or Langchain / Langgraph

Write…[truncated]"
14. **If it's a voice message** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Get Audio File** `telegram` — resource: **file**
16. **Set chatInput from message** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Transcribe Recording** `openAi` — resource: **audio**, operation: **transcribe**
18. **Set chatInput from voice** `set` — options: "[object Object]", assignments: "[object Object]"
19. **List of Ingredients and nutrients** `agent` — text: "=
*"Approximate the kcals, protein, carbohydrates, lipids (fats), and electrolyte (sodium, potassium, magnesium, Zinc and Iron) content in the following dietary intake statement:  …[truncated]", options: "[object Object]", promptType: "define"
20. **Explode the list** `splitOut` — include: "={{ $json.output }}", options: "[object Object]", fieldToSplitOut: "output"
21. **Add date** `code` — mode: "runOnceForEachItem", jsCode: "let entry = $input.item.json.output
let my_date = new Date()

let my_date_f = (my_date.getTime() / 86400000) + 25569;
entry.my_date = my_date_f
return {json: entry}"
22. **Store in sheet** `googleSheets` — operation: **append**
23. **Limit** `limit` — configured for its default action.
24. **Respond message** `telegram` — text: "Your meal has been saved", chatId: "={{ $('If it's a voice message').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This workflow automates the process of tracking nutritional intake. When a meal description is sent via Telegram (text or voice), it is transcribed and processed by OpenAI to estimate nutritional content like protein, carbs, and fats. The results are stored in a Google Sheet for tracking and analysis.

- **Demonstrate:** A health coach could use this workflow to help clients log and analyze their meals, providing insights into their nutrition and making personalized dietary recommendations more efficiently.

- **Imitate:** To adapt this workflow, set up a Telegram bot and a Google Sheet. Connect OpenAI for transcription and processing. Run the workflow by sending a meal description to the Telegram bot and check if the nutritional breakdown is logged in the Google Sheet.

- **Practice:** Create a test meal description and send it to the Telegram bot. Verify that the nutritional data is accurately processed and stored in the Google Sheet. Try modifying the meal description to see how the workflow handles different inputs.

- **WIIFM:** Mastering this workflow allows you to offer a valuable service in health and nutrition tracking. It can enhance client engagement and satisfaction, opening opportunities for upselling personalized coaching or dietary plans, thus boosting your automation business's income.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, googleSheetsOAuth2Api.
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
