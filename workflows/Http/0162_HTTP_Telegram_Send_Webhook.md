# HTTP Telegram Send Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram - Welcome Message**.
  2. **Telegram - Welcome Message** `telegram` — text: "=Welcome! This bot will send you one vegan recipe a day. Here is your first recipe!", chatId: "={{$node["Telegram Trigger - people join bot"].json["message"]["chat"]["id"]}}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow sends a daily vegan recipe to users who join a Telegram bot. When a user joins, they receive a welcome message and their chat ID is stored in Airtable. Each day, a random vegan recipe is retrieved from an API and sent to all registered users via Telegram, including an image and URL for the recipe.

**Demonstrate**  
A food blogger could use this workflow to engage their audience by sending daily vegan recipes. This keeps their followers engaged and provides value by delivering fresh content directly to their Telegram chat.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Telegram and Airtable accounts.  
3. Set up the Spoonacular API for recipe data.  
4. Customize the Airtable table to store chat IDs.  
5. Test the workflow by joining the Telegram bot and checking for recipe messages.

**Practice**  
Create a test Telegram bot and Airtable base. Join the bot and see how the workflow sends a welcome message and the first recipe. Experiment by adding more users and checking how recipes are sent daily.

**WIIFM**  
Mastering this workflow allows you to offer a unique service of daily content delivery via Telegram, enhancing engagement and providing consistent value to your clients. This can expand your service offerings and attract more clients interested in content automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtableApi, telegramApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  