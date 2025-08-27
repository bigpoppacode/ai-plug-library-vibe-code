# Telegram Stickynote Automate Triggered
## 🚀 What It Does
Automates a flow using stickyNote×6, set×4, telegram×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Recieve Telegram Message**.
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-001"
3. **Recieve Telegram Message** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
4. **Store Conversation Memory** `memoryBufferWindow` — sessionKey: "={{ $('Recieve Telegram Message').item.json.message.from.id }}", sessionIdType: "customKey", contextWindowLength: "25"
5. **Sticky Note** `stickyNote` — width: "220", height: "900", content: "## Dynamic System Prompting:

This node sets the AI's system prompt according to the user's request identified in the incoming message."
6. **Sticky Note1** `stickyNote` — width: "440", height: "720", content: "## Telegram-Ready Output: Formatting and Length Management:

These code nodes perform two crucial tasks:
1.  **Formatting:** Removing characters that could cause issues with Telegr…[truncated]"
7. **Sticky Note2** `stickyNote` — width: "340", height: "420", content: "## Clearing AI Agent Memory:

This node clears the AI agent's short-term memory. This helps to minimize the influence of past interactions on future responses, thereby reducing the…[truncated]"
8. **Sticky Note3** `stickyNote` — width: "1160", height: "740", content: "## Processing Telegram Messages:

This section handles incoming messages from Telegram. It first checks if the message contains text.

1.  **Text Message:** If the message includes…[truncated]"
9. **Sticky Note4** `stickyNote` — width: "300", height: "740", content: "## Gemini-Powered Response and Conversation Storage:

This node utilizes the Google Gemini model to generate a response to the user's prompt and stores the ongoing conversation."
10. **Sticky Note5** `stickyNote` — color: "4", width: "2740", height: "140"
11. **Check For Text or Voice Message** `set` — options: "[object Object]", assignments: "[object Object]"
12. **If Voice Message** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Download Audio File** `telegram` — resource: **file**
14. **Transcribe Audio File** `openAi` — resource: **audio**, operation: **transcribe**
15. **Route Flow Based on Message Content** `switch` — rules: "[object Object]", options: "[object Object]"
16. **Wipe Conversation Memory** `memoryManager` — mode: "delete", deleteMode: "all"
17. **Set prompt to generate a speech based on the feedback** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Set prompt to provide feedback on speech** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Set prompt to start a new speech** `set` — options: "[object Object]", assignments: "[object Object]"
20. **AI Agent** `agent` — text: "={{ $('Route Flow Based on Message Content').item.json.text }}", options: "[object Object]", promptType: "define"
21. **Code to remove unwanted characters from LLM response** `code` — language: "python", pythonCode: "import re

def clean_markdown_for_telegram(text):
  """
  Removes common Markdown formatting characters from a string.

  Args:
    text: The input string.

  Returns:
    A new st…[truncated]"
22. **Code to split output into chunks under 4000 characters** `code` — language: "python", pythonCode: "def split_text_for_telegram(text, max_length=4000):
  """
  Splits a long text into a list of strings, each with a maximum length
  suitable for Telegram messages.

  Args:
    tex…[truncated]"
23. **Respond to Telegram Message** `telegram` — text: "={{ $json.telegramTextChunk }}", chatId: "={{ $('Recieve Telegram Message').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow acts as an AI speechwriting assistant accessible via Telegram. It processes text and voice messages, providing feedback on clarity, engagement, and structure. The workflow can generate, refine, and store speech drafts using the Google Gemini model, ensuring your speeches are impactful and well-organized.

**Demonstrate:**  
A business owner preparing for a conference can use this workflow to draft and refine speeches. By sending drafts via Telegram, they receive AI-generated feedback and improvements, saving time and enhancing speech quality.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Telegram account.  
3. Customize prompts for speech feedback.  
4. Test with sample speech drafts via Telegram.  
5. Review and refine AI responses.

**Practice:**  
Create a short speech draft and send it to the Telegram bot. Observe the feedback and improvements suggested by the AI. Adjust your speech based on the feedback and test again to see how it evolves.

**WIIFM:**  
Mastering this workflow can position you as a valuable resource for professionals needing speechwriting assistance. Offering this as a service can attract clients, enhance your portfolio, and generate income by helping others deliver compelling presentations.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, telegramApi, openAiApi.

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
