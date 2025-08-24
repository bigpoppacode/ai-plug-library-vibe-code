# Manual HTTP Import Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, googleDrive, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Rename Uploaded Video (googleDrive)** - This step performs a key action in the workflow.
4. **Step 3: Send URL to GDrive Script and Upload (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain 
This n8n workflow automates the process of uploading a video to Google Drive. It begins when you manually trigger the workflow, renames the uploaded video, then sends the video URL to a Google Script for uploading.

### Demonstrate 
A business owner could use this workflow to automate video uploads for marketing campaigns, saving time and ensuring consistent video management without manual intervention.

### Imitate 
1. Create a new workflow in n8n.
2. Add a **Manual Trigger** node to start the process.
3. Add a **Google Drive** node to rename the uploaded video.
4. Add an **HTTP Request** node to send the video URL to your Google Script for uploading.
5. Connect the nodes and configure the parameters.

### Practice 
Try modifying the workflow to include a notification (like an email) that confirms the video upload was successful. This adds an extra layer of communication.

### WIIFM 
Mastering this workflow allows you to streamline video management for clients, making you a valuable asset in digital marketing or content creation, potentially increasing your income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Send URL to GDrive Script and Upload" for IDs, table names, and URLs.
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
