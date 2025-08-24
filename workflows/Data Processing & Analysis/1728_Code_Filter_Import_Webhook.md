# Code Filter Import Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, googleCloudStorage, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Google Cloud Storage (googleCloudStorage)** - This step performs a key action in the workflow.
4. **Step 3: Get fields for Qdrant (set)** - This step performs a key action in the workflow.
5. **Step 4: Qdrant cluster variables (set)** - This step performs a key action in the workflow.
6. **Step 5: Embed crop image (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Create Qdrant Collection (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Check Qdrant Collection Existence (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Batches in the API's format (set)** - This step performs a key action in the workflow.
10. **Step 9: Batch Upload to Qdrant (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Split in batches, generate uuids for Qdrant points (code)** - This step performs a key action in the workflow.
12. **Step 11: If collection exists (if)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Payload index on crop_name (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Filtering out tomato to test anomalies (filter)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of uploading a dataset of crop images to Qdrant, a vector database, allowing for anomaly detection and KNN classification. It fetches images from Google Cloud Storage, generates embeddings, checks for existing collections, and uploads data in batches.

### Demonstrate
A business owner in agriculture could use this workflow to quickly analyze crop images for anomalies. By automating the image upload and analysis process, they save time, improve accuracy, and make data-driven decisions faster, enhancing productivity.

### Imitate
1. Set up n8n and connect Google Cloud Storage and Qdrant.
2. Create a manual trigger node to start the workflow.
3. Add a Google Cloud Storage node to fetch images.
4. Use nodes to generate embeddings and create a Qdrant collection.
5. Implement logic to check for existing collections and batch upload images.
6. Test the workflow with your dataset.

### Practice
Try creating a simplified version of this workflow that only uploads a few images to Qdrant. Focus on understanding each node's function and ensure you can manually trigger and execute the workflow without errors.

### WIIFM
Mastering this workflow can help you provide valuable automation services to clients, enhancing their data management capabilities. This skill can lead to more clients, higher fees, and a strong position in the growing automation and AI market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note10" for IDs, table names, and URLs.
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
