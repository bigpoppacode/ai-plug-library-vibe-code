# HTTP Manual Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note3** `stickyNote` — color: "7", width: "560", height: "520"
4. **Sticky Note4** `stickyNote` — color: "5", width: "220", height: "300"
5. **Sticky Note1** `stickyNote` — color: "4", width: "820", height: "460"
6. **Set Input** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Download video** `httpRequest` — url: `={{ $json.video_url }}`
8. **Upload video Gemini** `httpRequest` — method: **POST**, url: `=https://generativelanguage.googleapis.com/upload/v1beta/files?key={{ $vars.GeminiKey }}`
9. **Wait** `wait` — configured for its default action.
10. **Analyze video Gemini** `httpRequest` — method: **POST**, url: `=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key={{ $vars.GeminiKey }}`
11. **Get Result** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates video analysis using Google's Gemini AI. It starts by downloading a video from a provided URL, uploads it to Google's servers for processing, and then uses AI to generate a detailed description of the video's content. The final output is a text description that can be used for various purposes like content tagging, moderation, and accessibility.

### Demonstrate
A media company could use this workflow to automatically generate descriptions for their video content, making it easier to tag and categorize videos for their online platform, thereby enhancing searchability and user engagement.

### Imitate
1. Import the workflow into n8n.
2. Set your Gemini API key as an environment variable.
3. Replace the video URL in the "Set Input" node with your own.
4. Test the workflow to ensure it processes and analyzes the video correctly.
5. Review the generated text description for accuracy.

### Practice
Create a short video and upload it to a cloud storage service. Use the workflow to analyze this video and compare the AI-generated description with your expectations. Adjust the AI prompt in the "Analyze video Gemini" node to refine the output.

### WIIFM
Mastering this workflow allows you to offer automated video analysis services, saving clients time and enhancing their content management. This can increase your value proposition, attract new customers, and generate additional income streams in the AI automation market.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  