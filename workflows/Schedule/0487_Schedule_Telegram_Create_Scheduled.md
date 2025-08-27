# Schedule Telegram Create Scheduled
## 🚀 What It Does
Automates a flow using lmChatOpenAi×3, chainSummarization×3, telegram×3.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4-turbo`
3. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4-turbo`
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "500", chunkOverlap: "300"
6. **OpenAI Chat Model2** `lmChatOpenAi` — options: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "1224.7156767468991", height: "1282.378312060854", content: "# Template for Kids' Story in Arabic

The n8n template for creating kids' stories in Arabic provides a versatile platform for storytellers to captivate young audiences with educati…[truncated]"
8. **Sticky Note1** `stickyNote` — width: "1811.9647367735226", height: "1280.7253282813103", content: ""
9. **Create a Story for Kids** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
10. **Translate the Story to Arabic** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
11. **Create a Prompt for DALL-E** `chainSummarization` — options: "[object Object]"
12. **Send the Story To Channel** `telegram` — text: "={{ $json.response.text }}", chatId: "=-4170994782", additionalFields: "[object Object]"
13. **Generate Audio for the Story** `openAi` — resource: **audio**
14. **Generate an Image for the Story** `openAi` — resource: **image**, prompt: "=Produce an image ensuring that no text is generated within the visual content. {{ $json.response.text }}"
15. **Send Audio to the Channel** `telegram` — operation: **sendAudio**
16. **Send Image to the Channel** `telegram` — operation: **sendPhoto**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow generates engaging kids' stories in Arabic. It starts with creating a story using AI, then translates it into Arabic. The workflow also generates an image and audio narration for the story. Finally, the story, image, and audio are sent to a Telegram channel, providing a multimedia storytelling experience.

**Demonstrate:**  
A children's book publisher could use this workflow to automate the creation and distribution of Arabic kids' stories, enhancing their digital content offerings and engaging young audiences with interactive stories.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your OpenAI and Telegram accounts.  
3. Set up the Schedule Trigger to define how often stories are generated.  
4. Customize the story prompts and Telegram channel details.  
5. Test the workflow to ensure stories are sent correctly.

**Practice:**  
Create a test Telegram channel and run the workflow to see how stories are generated and shared. Experiment with different story prompts or translations to see how the output changes.

**WIIFM:**  
Mastering this workflow allows you to offer automated storytelling services, expanding your business into educational content creation. This can attract clients in the education sector, increasing your service offerings and revenue potential.

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
