# Generating Image Embeddings Via Textual Summarisation

## 🚀 What It Does
This workflow automates a process involving manualTrigger, googleDrive, editImage.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Google Drive (googleDrive)** - This step performs a key action in the workflow.
4. **Step 3: Get Color Information (editImage)** - This step performs a key action in the workflow.
5. **Step 4: Resize Image (editImage)** - This step performs a key action in the workflow.
6. **Step 5: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
7. **Step 6: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Combine Image Analysis (merge)** - This step performs a key action in the workflow.
12. **Step 11: Document for Embedding (set)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Get Image Keywords (openAi)** - This step performs a key action in the workflow.
21. **Step 20: In-Memory Vector Store (vectorStoreInMemory)** - This step performs a key action in the workflow.
22. **Step 21: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
23. **Step 22: Search for Image (vectorStoreInMemory)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of downloading an image from Google Drive, analyzing its color information, resizing it, and generating keywords using OpenAI. It then combines this data into an embedding document for effective image searching.

### Demonstrate
A business owner might use this workflow to streamline image management for an e-commerce store, automatically resizing and tagging product images for better organization and searchability, saving time and improving user experience.

### Imitate
1. Open n8n and create a new workflow.
2. Add a Manual Trigger node.
3. Connect a Google Drive node to download an image.
4. Use Edit Image nodes to analyze and resize the image.
5. Utilize OpenAI nodes to generate keywords.
6. Finally, set up a storage node (like Airtable) to save the processed data.

### Practice
Try modifying the workflow to include a step where you send an email notification after the image has been processed, informing you that the image is ready for use.

### WIIFM
Mastering this workflow can help you automate tedious image management tasks, making your services more attractive to potential clients looking for efficiency, ultimately increasing your revenue as an AI automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "Search for Image" for IDs, table names, and URLs.
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
