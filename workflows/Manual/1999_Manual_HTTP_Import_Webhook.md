# Manual HTTP Import Webhook
  ## 🚀 What It Does
  Automates a flow using manualTrigger, googleDrive, httpRequest.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Send URL to GDrive Script and Upload** `httpRequest` — method: **POST**, url: `"your_google_script_web_app_url"`
4. **Rename Uploaded Video** `googleDrive` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of uploading a video to Google Drive. It starts manually, sends a video URL to a Google Script via an HTTP POST request, and uploads the video. After uploading, it renames the video in Google Drive to "Music Video 1." This ensures that videos are consistently named and organized after being uploaded.

### Demonstrate
A video production company could use this workflow to streamline the process of uploading and organizing client videos. Automating these tasks saves time and ensures consistent naming conventions, improving project management and client satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive account.
3. Update the Google Script URL and video URL in the HTTP request node.
4. Test the workflow to verify it uploads and renames the video correctly.

### Practice
Create a test Google Script and set up a test video URL. Run the workflow and check if the video uploads to your Google Drive and is renamed. Modify the script or video URL to see how the workflow adapts.

### WIIFM
Mastering this workflow allows you to offer video management automation services, saving clients time and ensuring consistency. This expertise can attract new clients in media and production, boosting your income and service offerings in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api.
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
  