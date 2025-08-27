# Telegram Stickynote Create Triggered
## 🚀 What It Does
Automates a flow using stickyNote×3, telegram×2, lmChatOpenAi.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Receive Telegram Messages**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Receive Telegram Messages** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
4. **Extract Tasks** `outputParserStructured` — jsonSchemaExample: "  {
    "content": "Send out invitations.",
    "priority": 3
  }"
5. **Sticky Note2** `stickyNote` — width: "260", height: "320", content: " 
**This workflow listens for incoming voice or text messages from Telegram users.** "
6. **Sticky Note3** `stickyNote` — width: "460", height: "260", content: " **Voice messages are fetched from Telegram and transcribed into text using OpenAI's Whisper API.**  "
7. **Sticky Note4** `stickyNote` — width: "380", height: "440", content: " 
**The LLM (OpenAI Chat Model) analyzes the text and breaks it down into tasks and sub-tasks, formatted for Todoist.**  "
8. **Voice or Text?** `switch` — rules: "[object Object]", options: "[object Object]"
9. **Fetch Voice Message** `telegram` — resource: **file**
10. **Prepare for LLM** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Transcribe Voice to Text** `openAi` — resource: **audio**, operation: **translate**
12. **Basic LLM Chain** `chainLlm` — text: "={{ $json.text }}", messages: "[object Object]", promptType: "define"
13. **Create Todoist Tasks** `todoist` — content: "={{ $json.output.content }}", options: "[object Object]", project: "[object Object]"
14. **Send Confirmation** `telegram` — text: "=Task : {{ $json.content }} Task Link :{{ $json.url }}", chatId: "={{ $('Receive Telegram Messages').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow listens for both voice and text messages from Telegram users. If a voice message is received, it is transcribed into text using OpenAI's Whisper API. The text is then analyzed by an OpenAI Chat Model, which breaks it down into tasks and sub-tasks formatted for Todoist. These tasks are created in Todoist, and a confirmation message with a task link is sent back to the user via Telegram.

**Demonstrate**  
A project manager could use this workflow to convert voice or text input from team members into structured tasks in Todoist, streamlining task management and ensuring nothing gets lost in communication.

**Imitate**  
1. Set up a Telegram bot and connect it to n8n.
2. Connect your OpenAI and Todoist accounts in n8n.
3. Import the workflow and configure the Telegram trigger to receive messages.
4. Test with a sample voice or text message to see tasks appear in Todoist.

**Practice**  
Create a test Telegram group and send a voice message describing a project task. Run the workflow and verify that the task is correctly formatted and appears in Todoist. Adjust priority levels and task descriptions to see how changes reflect in Todoist.

**WIIFM**  
Mastering this workflow can enhance your service offerings by helping businesses automate task management from simple voice or text inputs. This can save time, reduce errors, and increase productivity, making your automation services more valuable and attractive to potential clients.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, todoistApi.

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
