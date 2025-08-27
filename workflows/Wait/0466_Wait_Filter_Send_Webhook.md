# Wait Filter Send Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Run manually**.
2. **Sticky Note** `stickyNote` — color: "7", width: "288.76295784381495", height: "795.272978576365"
3. **Run manually** `manualTrigger` — configured for its default action.
4. **Sticky Note1** `stickyNote` — color: "5", width: "444.71526152412946", height: "343.02803459456237"
5. **⚙️ config** `set` — fields: "[object Object]", options: "[object Object]"
6. **Get files from specified folder** `googleDrive` — resource: **fileFolder**
7. **Use only PDF documents** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Download files** `googleDrive` — operation: **download**
9. **Send translate request** `httpRequest` — method: **POST**, url: `https://api.deepl.com/v2/document`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the translation of PDF documents stored in a Google Drive folder. It starts manually or via a trigger, configures settings for translation, retrieves PDFs from a specified folder, and filters them for translation. The workflow uses the DeepL API to translate each document into a specified target language and uploads the translated files back to the original folder, appending the language code to the filename.

**Demonstrate:**  
A business consultant could use this workflow to translate company brochures into multiple languages for international clients, ensuring consistent and professional communication across different markets.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Drive and DeepL accounts.
3. Set the folder URL, target language, and source language in the configuration node.
4. Test the workflow manually to verify the translation and upload process.

**Practice:**  
Create a test Google Drive folder with a few PDF files. Run the workflow to see how it translates and uploads the documents. Experiment by changing the target language and observe the changes in the output filenames.

**WIIFM:**  
Mastering this workflow can help you offer translation services, expanding your business reach and client base. It adds value by streamlining multilingual content creation, enabling you to cater to global markets efficiently.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, httpHeaderAuth.
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
