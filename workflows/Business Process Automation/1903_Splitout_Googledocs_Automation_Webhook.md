# Splitout Googledocs Automation Webhook

## 🚀 What It Does
This workflow automates a process involving stickyNote, manualTrigger, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Ollama LLM Request (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Create Request Body (set)** - This step performs a key action in the workflow.
7. **Step 6: Loop Over Ollama Models (splitInBatches)** - This step performs a key action in the workflow.
8. **Step 7: Create Result Objects (set)** - This step performs a key action in the workflow.
9. **Step 8: General Image Prompt (set)** - This step performs a key action in the workflow.
10. **Step 9: Real Estate Spreadsheet Prompt (set)** - This step performs a key action in the workflow.
11. **Step 10: List of Vision Models (set)** - This step performs a key action in the workflow.
12. **Step 11: Get Base64 String (extractFromFile)** - This step performs a key action in the workflow.
13. **Step 12: Download Image File from Google Drive (googleDrive)** - This step performs a key action in the workflow.
14. **Step 13: Split List of Vision Models for Looping (splitOut)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Google Doc Image Id (set)** - This step performs a key action in the workflow.
19. **Step 18: Save Image Descriptions to Google Docs (googleDocs)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing images using local Ollama Vision models. It downloads an image from Google Drive, processes it to extract detailed descriptions and contextual insights, and saves the results to Google Docs for easy access.

### Demonstrate
A real-world example: A real estate developer wants to analyze property images for marketing. This workflow can automatically provide detailed descriptions of each image, highlighting features and conditions, saving the developer time and ensuring consistency in their listings.

### Imitate
To adapt this workflow:
1. Import the JSON into your n8n instance.
2. Set up Google Drive and Google Docs credentials.
3. Update the image file ID in the designated node.
4. Modify the prompts in the "General Image Prompt" and "Real Estate Spreadsheet Prompt" nodes to suit your needs.
5. Test the workflow by clicking ‘Test Workflow.’

### Practice
Try modifying the prompts to analyze a different set of images, such as product photos for an e-commerce store. Run the workflow and see how the descriptions change. This will help you understand how to tailor the workflow for various use cases.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to clients like real estate agents or marketers, enhancing their productivity and data analysis capabilities. This can lead to new business opportunities and increased income by providing tailored automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note1" and "Sticky Note5" for IDs, table names, and URLs.
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
