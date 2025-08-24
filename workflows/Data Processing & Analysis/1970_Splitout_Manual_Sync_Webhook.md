# Splitout Manual Sync Webhook

## 🚀 What It Does
This workflow automates a process involving splitOut, manualTrigger, googleSheets.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Manual Trigger (When Clicking 'Test workflow'** node.
2. **Step 1: Split Out (splitOut)** - This step performs a key action in the workflow.
3. **Step 2: Manual Trigger (When Clicking 'Test workflow' (manualTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Get Youtube Channel Ids from Google Sheet (googleSheets)** - This step performs a key action in the workflow.
5. **Step 4: Get Youtube Video Urls form specific channel (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Format fields as required to save in google sheet (set)** - This step performs a key action in the workflow.
7. **Step 6: Insert & Update Youtube Urls in Google Sheet (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow syncs YouTube video URLs with Google Sheets. It retrieves channel IDs from a Google Sheet, fetches video URLs from those channels using the YouTube API, formats the data, and then updates another Google Sheet with the video details.

### Demonstrate
A business owner with a YouTube channel can automate the process of updating their video list in Google Sheets. This saves time by eliminating manual updates every time a new video is published, ensuring their content database is always current.

### Imitate
1. Import the workflow into n8n.
2. Configure the Google Sheets nodes with your own spreadsheet IDs.
3. Set up YouTube API credentials in n8n.
4. Run the workflow manually to test if it retrieves and updates video URLs correctly.

### Practice
Try modifying the workflow to fetch video details from multiple YouTube channels. Change the Google Sheet to include more channel IDs and observe how the workflow adapts to retrieve and update data for each channel.

### WIIFM
Mastering this workflow allows you to automate data management tasks, enhancing efficiency for clients. By offering such automation services, you can create value, streamline operations, and potentially generate income through consulting or retainer agreements.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Split Out" and "Sticky Note1" for IDs, table names, and URLs.
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
