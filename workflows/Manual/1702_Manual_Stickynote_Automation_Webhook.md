# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
4. **Sticky Note2** `stickyNote` — color: "7", width: "199.37543798209555", height: "420.623805972039"
5. **Sticky Note3** `stickyNote` — color: "7", width: "192.21792012722693", height: "418.3754668433847"
6. **Sticky Note4** `stickyNote` — color: "7", width: "192.21792012722693", height: "414.59045768149747"
7. **Sticky Note** `stickyNote` — color: "7", width: "230.39134868652621", height: "233.3354221029769"
8. **Sticky Note1** `stickyNote` — color: "7", width: "685.8541178336201", height: "478.0993479050163"
9. **Set ElevenLabs voice ID and text** `set` — fields: "[object Object]", options: "[object Object]"
10. **Generate French Audio** `httpRequest` — method: **POST**, url: `=https://api.elevenlabs.io/v1/text-to-speech/{{ $json.voice_id }}`
11. **Transcribe Audio** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/audio/transcriptions`
12. **Translate Text to English** `chainLlm` — prompt: "=Translate to English:
{{ $json.text }}"
13. **Translate English text to speech** `httpRequest` — method: **POST**, url: `=https://api.elevenlabs.io/v1/text-to-speech/{{ $('Set ElevenLabs voice ID and text').item.json.voice_id }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow takes a piece of French text, converts it to audio using ElevenLabs, transcribes the audio back into text with OpenAI, translates it into English, and finally converts the English text back to speech. It's a cycle of converting text to speech and back, enabling multilingual communication and translation.

**Demonstrate:**  
A global company could use this workflow to facilitate communication between French-speaking and English-speaking teams, ensuring accurate translations and smooth interactions during meetings or document exchanges.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up your ElevenLabs and OpenAI credentials.  
3. Input your French text in the 'Set ElevenLabs voice ID and text' node.  
4. Execute the workflow to see the text translated and converted to speech.  
5. Customize the text and voice ID as needed for your use case.

**Practice:**  
Create a simple text file with a short French paragraph. Run the workflow to convert it to English audio. Experiment with different texts and languages to observe the translations and audio outputs.

**WIIFM:**  
Mastering this workflow can help you offer translation and voiceover services, expanding your business offerings. This can attract international clients, improve communication, and increase your revenue streams in the automation and AI service market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, httpHeaderAuth.
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
  