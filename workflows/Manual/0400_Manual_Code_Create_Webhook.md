# Manual Code Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note2** `stickyNote` — color: "7", width: "199.37543798209555", height: "420.623805972039"
4. **Sticky Note3** `stickyNote` — color: "7", width: "212", height: "418"
5. **Sticky Note4** `stickyNote` — color: "7", width: "392", height: "415"
6. **Sticky Note** `stickyNote` — color: "7", width: "230.39134868652621", height: "233.3354221029769"
7. **Sticky Note1** `stickyNote` — color: "7", width: "906", height: "498"
8. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
9. **Set ElevenLabs voice ID and text** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
10. **Generate French Audio** `httpRequest` — method: **POST**, url: `=https://api.elevenlabs.io/v1/text-to-speech/{{ $json.voice_id }}`
11. **Add Filename** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
  item.binary.data.fileName = "audio.mp3";
}

return $in…[truncated]"
12. **Transcribe audio** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/audio/transcriptions`
13. **Translate Text to English** `chainLlm` — text: "=Translate to English:
{{ $json.text }}", promptType: "define"
14. **Translate English text to speech** `httpRequest` — method: **POST**, url: `=https://api.elevenlabs.io/v1/text-to-speech/{{ $('Set ElevenLabs voice ID and text').first().json.voice_id }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow takes a piece of French text, converts it into spoken audio using ElevenLabs, and then transcribes this audio back to text via OpenAI's transcription service. The text is then translated into English and converted back into English audio using ElevenLabs, creating a seamless translation and audio generation process.

**Demonstrate:** A language learning app could use this workflow to provide users with translated audio content, helping them learn new languages by listening to native pronunciations and their English counterparts.

**Imitate:** Import the workflow into your n8n instance. Set up your ElevenLabs and OpenAI API keys. Input your desired French text. Execute the workflow and verify the audio and text outputs. Adjust the text input to experiment with different translations and pronunciations.

**Practice:** Create a simple French text in an Airtable, run the workflow to translate and convert it to English audio, and check if the audio output matches your expectations. Modify the French text to see how changes affect the output.

**WIIFM:** Mastering this workflow allows you to offer translation and audio services, expanding your business offerings. This skill can attract clients needing automated language solutions, increasing your marketability and potential revenue in the AI automation industry.
  
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
  