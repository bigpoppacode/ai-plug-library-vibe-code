# FunctionItem Telegram Create Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×2, if×2, telegram×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Start download new token**.
  2. **Start download new token** `httpRequest` — url: `http://localhost:9091/transmission/rpc`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of searching for a torrent based on a movie title received via a webhook. If a torrent is found, it downloads the file using Transmission. If the torrent is not found, it sends a notification via Telegram. If there is an error with the download session, it retries with a new session token.

- **Demonstrate:** A developer could use this workflow to automate the downloading of video content for a media library. It's useful for ensuring that downloads continue without manual intervention, even if errors occur.

- **Imitate:** Import the workflow into n8n. Set up a webhook to receive movie titles. Configure Transmission and Telegram credentials. Customize the download directory path and Telegram chat ID. Test with sample data to ensure torrents are found and downloaded correctly.

- **Practice:** Create a test webhook and send a few movie titles. Observe the workflow's behavior as it searches for torrents and attempts downloads. Modify the titles to test both success and failure paths (e.g., a title that doesn't exist).

- **WIIFM:** Mastering this workflow enables you to offer automated content management solutions to clients, enhancing their media operations. It can increase your service offerings in the automation business, leading to potential new revenue streams and client retention.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBasicAuth, telegramApi.
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
  