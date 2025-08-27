# Schedule Telegram Automation Scheduled
## 🚀 What It Does
Automates a flow using telegram×3, lmChatOpenAi×2, stickyNote×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-3.5-turbo-16k-0613`
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **OpenAI Chat Model2** `lmChatOpenAi` — options: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "1004.4263690337257", height: "811.7188223885136", content: "[redacted]"
6. **Sticky Note1** `stickyNote` — width: "611.6882702103559", height: "651.7145525871413", content: "### Use Case for Setting Up a Workflow for Children's Stories

Check this example: [https://t.me/st0ries95](https://t.me/st0ries95)


The workflow for children's stories serves as …[truncated]"
7. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "500", chunkOverlap: "300"
8. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Create a story** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
10. **Generate Audio for the story** `openAi` — resource: **audio**
11. **Create a Prompt for DALL-E** `chainSummarization` — options: "[object Object]"
12. **Send Story Text** `telegram` — text: "={{ $json.response.text }}", chatId: "={{ $('Config').item.json.chatId }}", additionalFields: "[object Object]"
13. **Send Audio for the story** `telegram` — operation: **sendAudio**
14. **Generate a Picture for the story** `openAi` — resource: **image**, prompt: "=Produce an image ensuring that no text is generated within the visual content. {{ $json.response.text }}"
15. **Send Story Picture** `telegram` — operation: **sendPhoto**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the creation and delivery of children's stories on Telegram. It uses OpenAI to generate stories and convert them into audio. It also creates visual content using DALL-E. The workflow is triggered every 12 hours and sends the generated story text, audio, and image to a specified Telegram chat.

**Demonstrate:**  
A children's book author could use this workflow to automatically generate and share engaging stories with their audience on Telegram, enhancing engagement and reaching more readers.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your OpenAI and Telegram accounts.
3. Set up the Schedule Trigger for desired intervals.
4. Adjust the chat ID in the Config node.
5. Test the workflow to ensure stories are sent correctly.

**Practice:**  
Create a simple test workflow that sends a "Hello, World!" message to your Telegram using a Schedule Trigger and Telegram node. This will help you understand the setup and connections.

**WIIFM:**  
Mastering this workflow can help you offer unique content creation services, attract clients, and generate recurring income by automating storytelling. This can be particularly valuable for educational content providers and digital marketers.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
