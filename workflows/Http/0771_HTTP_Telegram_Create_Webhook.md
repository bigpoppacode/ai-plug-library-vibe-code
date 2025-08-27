# HTTP Telegram Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Receive Telegram Messages**.
  2. **Receive Telegram Messages** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Sticky Note2** `stickyNote` — width: "260", height: "320", content: " 
**This workflow listens for incoming voice or text messages from Telegram users.** "
4. **Sticky Note3** `stickyNote` — width: "460", height: "260", content: " **Voice messages are fetched from Telegram and transcribed into text using OpenAI's Whisper API.**  "
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **SerpAPI** `toolSerpApi` — options: "[object Object]"
7. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
"content": "[SOCIAL_MEDIA_CONTENT]",
"image_prompt": "[IMAGE_PROMPT]"
}"
8. **Sticky Note** `stickyNote` — width: "280", height: "140", content: " **The AI agent uses the OpenAI Chat Model and SerpAPI tool to conduct research and generate social media content and an image prompt based on the user request.**"
9. **Sticky Note1** `stickyNote` — width: "220", height: "240", content: " **An image is generated using the image prompt**  "
10. **Voice or Text?** `switch` — rules: "[object Object]", options: "[object Object]"
11. **Fetch Voice Message** `telegram` — resource: **file**
12. **Prepare for LLM** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Transcribe Voice to Text** `openAi` — resource: **audio**, operation: **translate**
14. **AI Agent** `agent` — text: "={{$json.text}}", options: "[object Object]", promptType: "define"
15. **Generate Image** `httpRequest` — method: **POST**, url: `https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-3.5-large`
16. **Extract from File** `extractFromFile` — operation: **binaryToPropery**
17. **Prepare Final Output** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This workflow listens for incoming text or voice messages on Telegram. Voice messages are transcribed into text using OpenAI's Whisper API. An AI agent then uses the OpenAI Chat Model and SerpAPI to research and generate engaging social media content and a detailed image prompt. Finally, an image is created using the generated prompt via the Hugging Face API.

- **Demonstrate**: A business owner could use this workflow to automate content creation for social media by quickly turning spoken ideas into researched posts and visual content.

- **Imitate**: Import the workflow into n8n. Connect your Telegram, OpenAI, and Hugging Face accounts. Set up a Telegram bot to receive messages. Customize the AI prompts to suit your content needs. Test by sending messages to your Telegram bot.

- **Practice**: Send a voice message about a trending topic to your Telegram bot. Observe how the workflow transcribes, researches, and generates content. Adjust the AI prompts to improve content quality.

- **WIIFM**: By mastering this workflow, you can offer automated content creation services, saving clients time and enhancing their social media strategy, potentially increasing your income through new service offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi, openAiApi, serpApi, httpHeaderAuth, huggingFaceApi.
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
  