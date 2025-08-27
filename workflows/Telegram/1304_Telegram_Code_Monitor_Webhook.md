# Telegram Code Monitor Webhook
## 🚀 What It Does
Automates a flow using telegram×2, if, set.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Sticky Note** `stickyNote` — color: "4", width: "1540", height: "400"
3. **Check Balance Every 5 Minutes** `cron` — triggerTimes: "[object Object]"
4. **userData** `set` — options: "[object Object]", assignments: "[object Object]"
5. **Fetch USDT Balance from Etherscan** `httpRequest` — url: `https://api.etherscan.io/api`
6. **balanceChecker** `code` — jsCode: "const staticData = $getWorkflowStaticData('global');

const currentBalance = items[0].json.result;

const walletAddress = $('userData').first().json['Your Wallet Address']

let pre…[truncated]"
7. **Balance Changed?** `if` — conditions: "[object Object]"
8. **Balance Changed.** `telegram` — text: "=🚨 *USDT Balance Change!*

Wallet Address: {{ $json.walletAddress }}

🔴 Previous Balance: {{parseFloat($json.previousBalance)/1e6}} USDT

🟢 New Balance: {{parseFloat($json.curre…[truncated]", chatId: "< Your Telegram Chat ID >", additionalFields: "[object Object]"
9. **Balance Not Changed.** `telegram` — text: "=Balance Unchanged. USDT balance remained stable.", chatId: "< Your Telegram Chat ID >", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow monitors a USDT ERC-20 wallet balance every five minutes using Etherscan. It fetches the current balance, checks if it has changed since the last check, and sends a Telegram notification if a change is detected. If the balance remains the same, it sends a different notification.

**Demonstrate:**  
A business owner could use this workflow to monitor their cryptocurrency wallet, ensuring they are immediately alerted to any unauthorized transactions, thus maintaining better financial security.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Etherscan API key and wallet address in the `userData` node.
3. Connect your Telegram account for notifications.
4. Test the workflow by simulating balance changes.

**Practice:**  
Create a dummy wallet and manually change its balance. Use this workflow to ensure that it correctly detects the balance change and sends the appropriate Telegram notification.

**WIIFM:**  
Mastering this workflow helps you offer crypto-monitoring services, providing clients with real-time security alerts and peace of mind. This skill can enhance your service portfolio, attract new customers, and increase your income in the growing field of crypto automation.

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
