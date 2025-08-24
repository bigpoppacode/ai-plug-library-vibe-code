# Manual Code Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Transcribe audio (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Set ElevenLabs voice ID and text (set)** - This step performs a key action in the workflow.
11. **Step 10: Generate French Audio (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Translate Text to English (chainLlm)** - This step performs a key action in the workflow.
13. **Step 12: Translate English text to speech (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Add Filename (code)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of taking French text, converting it to audio, transcribing the audio back to text, translating it to English, and generating an audio file of the English text. It streamlines multi-step language processing.

### Demonstrate
A business owner can use this workflow to create multilingual audio content for their marketing materials. For instance, if they want to reach French-speaking customers, they can automate the translation and audio generation, saving time and ensuring consistency.

### Imitate
1. Set up a manual trigger in n8n.
2. Add a Sticky Note for instructions.
3. Use an HTTP Request node to transcribe audio.
4. Integrate OpenAI for text translation.
5. Use another HTTP Request node to generate English audio.
6. Connect to a storage solution (like Google Drive) to save the audio file.

### Practice
Try modifying the French text in the "Set ElevenLabs voice ID and text" node and execute the workflow. Observe the changes in the generated audio files to understand how text variations affect the output.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, helping businesses create multilingual content efficiently. This can lead to increased customer engagement and potential income through service offerings in content creation and translation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Add Filename" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
