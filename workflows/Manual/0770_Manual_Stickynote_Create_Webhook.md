# Manual Stickynote Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "7", width: "660", height: "340"
4. **Sticky Note2** `stickyNote` — width: "820", height: "860", content: "[redacted]"
5. **Sticky Note3** `stickyNote` — width: "440", height: "180", content: "# ☝️ Provide Video Details

   - **Avatar ID** 
   - **Voice ID** 
   - **Text**"
6. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Create Video** `httpRequest` — method: **POST**, url: `https://api.heygen.com/v2/video/generate`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation of AI-powered videos using HeyGen. It begins with a manual trigger to start the process, then sets video details like Avatar ID, Voice ID, and text through a configuration node. The workflow sends these details to HeyGen's API to generate a video. After creating the video, it waits and checks the video's status until it's completed, then outputs the video URL.

### Demonstrate
A business could use this workflow to automatically generate personalized video messages for customers, enhancing engagement in marketing campaigns without manually creating each video.

### Imitate
1. Import the workflow into n8n.
2. Set up HeyGen credentials in n8n.
3. Customize the text, Avatar ID, and Voice ID in the Config node.
4. Test the workflow to ensure it outputs a video URL.
5. Integrate the video URL into your marketing or communication platform.

### Practice
Create a simple test workflow using your own text and avatar in HeyGen. Run the workflow and verify the video URL is generated correctly. Adjust parameters and observe different outputs.

### WIIFM
Mastering this workflow enables you to offer innovative video personalization services, enhancing client marketing efforts. This skill can differentiate your automation business, attract more clients, and increase revenue by providing high-value, automated video solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, httpCustomAuth.
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
  