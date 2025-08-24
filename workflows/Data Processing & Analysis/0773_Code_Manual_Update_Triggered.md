# Code Manual Update Triggered

## 🚀 What It Does
This workflow automates a process involving youTube, manualTrigger, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Get All Videos (youTube)** - This step performs a key action in the workflow.
3. **Step 2: Update Video Description (youTube)** - This step performs a key action in the workflow.
4. **Step 3: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Set String to Insert (set)** - This step performs a key action in the workflow.
8. **Step 7: Loop Over Videos (splitInBatches)** - This step performs a key action in the workflow.
9. **Step 8: Get Specific Video (youTube)** - This step performs a key action in the workflow.
10. **Step 9: Create New Video Description with Row Inserted (code)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automatically updates YouTube video descriptions by inserting a specific text between two predefined rows. It fetches video data, processes the descriptions, and updates them without manual input.

### Demonstrate
A YouTuber with multiple videos wants to add a new affiliate link to all descriptions. This workflow allows them to insert the link consistently across all videos, saving time and ensuring uniformity.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** node to start the process.
3. Use the **YouTube** node to fetch all videos.
4. Set the **text string** to insert using the **Set** node.
5. Use a **Split in Batches** node to process each video.
6. Fetch each specific video and update its description with the new text.
7. Test the workflow.

### Practice
Try modifying the text string to insert a different message or link, and run the workflow to see how it updates your YouTube video descriptions. Experiment with different videos to understand the batch processing.

### WIIFM
Mastering this workflow helps you provide value by automating repetitive tasks for clients, increasing their efficiency. This skill can attract more customers and generate income as part of an AI automation service.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get All Videos" and "Create New Video Description with Row Inserted" for IDs, table names, and URLs.
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
