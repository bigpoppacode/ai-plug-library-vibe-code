# HTTP Telegram Monitor Webhook
  ## 🚀 What It Does
  Automates a flow using code×2, telegramTrigger, telegram.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram Trigger**.
  2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "4", width: "1760", height: "700"
4. **Check Wallet Address Format** `if` — options: "[object Object]", conditions: "[object Object]"
5. **Tron BlackList Stable Token Api Request** `httpRequest` — url: `=https://apilist.tronscanapi.com/api/stableCoin/blackList?blackAddress={{ $json.message.text }}`
6. **Set Error Message (Wallet Address Format)** `code` — jsCode: "return [
  {
    json: {
      text: 'Please enter your wallet address correctly and completely.',
    },
  },
];"
7. **Check Api Response** `code` — jsCode: "const response = items[0].json;
let message;

if (response.total && response.total > 0) {
  message = `🚨🛑 **This Wallet is Blacklisted!** 🛑🚨: ${response.data[0].blackAddress}`;…[truncated]"
8. **Telegram Send Message** `telegram` — text: "={{ $json.text }}", chatId: "={{ $('Telegram Trigger').item.json.message.from.id }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**  
This n8n workflow is designed to check if a TRON wallet address is blacklisted for USDT transactions. It uses a Telegram bot to receive wallet addresses from users, verifies the address format, checks the blacklist status via the Tronscan API, and sends the result back to the user through Telegram. If the address is blacklisted, the user is notified with a warning message. If the address format is incorrect, the user is prompted to re-enter the address correctly.

- **Demonstrate**  
A cryptocurrency exchange platform might use this workflow to allow users to quickly check if their TRON wallet addresses are blacklisted, ensuring secure and compliant transactions.

- **Imitate**  
1. Import the workflow into your n8n instance.  
2. Connect your Telegram account to n8n.  
3. Set up the Telegram bot to trigger the workflow with a wallet address.  
4. Customize the workflow to your specific needs, such as modifying the response messages.  
5. Test the workflow by sending a wallet address through the Telegram bot.

- **Practice**  
Create a test Telegram bot and connect it to n8n. Send a few wallet addresses to the bot, including both valid and invalid formats, to observe how the workflow processes and responds to each scenario.

- **WIIFM**  
Mastering this workflow can help you offer blockchain security services, enhancing trust with clients by ensuring their transactions are compliant. This expertise can open up new revenue streams in the growing field of cryptocurrency management and security services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  