# Wait Manual Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "7", width: "640", height: "580"
4. **Sticky Note2** `stickyNote` — width: "640", height: "820", content: "[redacted]"
5. **Sticky Note3** `stickyNote` — width: "440", height: "200", content: "# ☝️ Provide Video Details

For the workflow to add captions, please provide:

- **URL:** The link to your video.
- **Width & Height:** The dimensions of your video"
6. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
7. **json2video - Add Captions** `httpRequest` — method: **POST**, url: `https://api.json2video.com/v2/movies`

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of adding captions to videos using the json2video service. It starts with a manual trigger, sets video details like URL, width, and height, and then makes an API call to json2video to add captions. The workflow waits for the process to complete, checks for errors, and outputs the final video details.

- **Demonstrate:** A video production company could use this workflow to automatically add captions to marketing videos, ensuring accessibility and enhancing viewer engagement without manual editing.

- **Imitate:** To apply this workflow, import it into n8n, set up your json2video credentials, and specify your video URL, width, and height in the configuration node. Test it with a sample video to see how captions are added automatically.

- **Practice:** Create a test video with no captions, run the workflow, and observe how captions are added. Experiment with different video dimensions and styles to see the impact on the final output.

- **WIIFM:** Mastering this workflow allows you to offer automated video captioning services, which can save clients time and improve their content accessibility, potentially increasing your service offerings and income in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpCustomAuth, httpHeaderAuth.
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
