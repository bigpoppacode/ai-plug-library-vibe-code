# Manual HTTP Create Webhook
  ## 🚀 What It Does
  Automates a flow using manualTrigger, httpRequest, readWriteFile.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Read/Write Files from Disk** `readWriteFile` — options: "[object Object]", fileSelector: "/files/tmp/tst1.mp4"
4. **Create Transcript1** `httpRequest` — method: **POST**, url: `https://api.elevenlabs.io/v1/speech-to-text`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to transcribe an audio file into text. It begins with a manual trigger to start the process. Next, it reads an audio file from a specified location on your disk. The file is then sent to Eleven Labs' API, which converts the speech in the audio file into text and returns the transcript.

### Demonstrate
A content creator could use this workflow to quickly transcribe interviews or podcasts into text, making it easier to create written content or closed captions, improving accessibility and content reach.

### Imitate
1. Import the workflow into n8n.
2. Connect your Eleven Labs API credentials.
3. Place your audio file at the specified path.
4. Run the workflow manually to test.
5. Adjust the file path and API settings as needed for your use case.

### Practice
Create a test audio file and place it in the specified directory. Run the workflow to see how the transcription is generated. Experiment with different audio files to see how well the transcription performs.

### WIIFM
Mastering this workflow enables you to offer transcription services, enhancing content accessibility and repurposing. This can attract clients needing efficient content processing, opening up new revenue streams in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpCustomAuth.
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
  