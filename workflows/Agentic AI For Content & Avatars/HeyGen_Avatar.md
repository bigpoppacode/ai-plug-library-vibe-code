# Heygen Avatar
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Generate Video** `httpRequest` — method: **POST**, url: `https://api.heygen.com/v2/video/generate`
4. **Get Voices** `httpRequest` — url: `https://api.heygen.com/v2/voices`
5. **Get Avatars** `httpRequest` — url: `https://api.heygen.com/v2/avatars`
6. **Sticky Note** `stickyNote` — content: "# Get Avatar ID
", height: "260", width: "400"
7. **Sticky Note1** `stickyNote` — content: "# Get Voice ID
", height: "260", width: "400"
8. **Sticky Note2** `stickyNote` — content: "# Create Video
", height: "300", width: "400"
9. **GPT 4.1 Mini** `lmChatOpenRouter` — model: `openai/gpt-4.1-mini`
10. **Sticky Note3** `stickyNote` — content: "# Create Video w/ Polling
", height: "560", width: "960"
11. **Sticky Note4** `stickyNote` — content: "# Get Video
", height: "300", width: "400"
12. **Sticky Note5** `stickyNote` — content: "[redacted]", height: "600", width: "600"
13. **News** `httpRequest` — method: **POST**, url: `https://api.apify.com/v2/acts/apify~website-content-crawler/run-sync-get-dataset-items`
14. **Get Video** `httpRequest` — url: `https://api.heygen.com/v1/video_status.get`
15. **Script Writer** `agent` — promptType: "define", text: "={{ $json.text }}", options: "[object Object]"
16. **Generate Video1** `httpRequest` — method: **POST**, url: `https://api.heygen.com/v2/video/generate`
17. **30 Seconds** `wait` — amount: "10"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the creation of personalized videos using HeyGen's API. It fetches the latest news, generates a video script using OpenAI's GPT-4.1, and then creates a video with a selected avatar and voice. The process involves fetching available avatars and voices, generating a video, and checking its status until completion. This helps automate video content creation based on dynamic, real-time data.

**Demonstrate:**  
A business owner can use this workflow to automatically create daily news recap videos for social media, saving time and ensuring consistent content production without manual intervention.

**Imitate:**  
1. Import the workflow to n8n.
2. Connect HeyGen, OpenAI, and Apify credentials.
3. Set up a trigger to run the workflow, e.g., daily.
4. Customize the avatar and voice selections as needed.
5. Test to ensure videos are generated and updated correctly.

**Practice:**  
Create a test workflow using a simple video script and test different avatars and voices. Observe how the workflow handles real-time data and video generation. Experiment with different news sources or script prompts.

**WIIFM (What's In It For Me):**  
Mastering this workflow allows you to offer automated video content creation services, enhancing your portfolio and attracting clients who need regular, engaging content. This can significantly increase your value proposition and revenue potential in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, openRouterApi.
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
