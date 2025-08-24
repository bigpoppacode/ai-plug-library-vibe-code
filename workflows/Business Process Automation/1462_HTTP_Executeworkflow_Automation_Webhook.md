# HTTP ExecuteWorkflow Automation Webhook

## 🚀 What It Does
This workflow automates a process involving stickyNote, httpRequest, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute Workflow Trigger** node.
2. **Step 1: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Embed image (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Get similarity of medoids (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Compare scores (code)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Variables for medoids (set)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Info About Crop Labeled Clusters (set)** - This step performs a key action in the workflow.
10. **Step 9: Total Points in Collection (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Each Crop Counts (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Image URL hardcode (set)** - This step performs a key action in the workflow.
13. **Step 12: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note22 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow detects anomalies in crop images by comparing them against a known dataset. It receives an image URL, generates an embedding using an AI model, queries a vector database for similarity, and checks if the image matches expected crop types or is an anomaly.

### Demonstrate
A farmer or agricultural consultant could use this workflow to quickly identify if a newly found plant is a known crop or an anomaly, preventing potential crop diseases from spreading by addressing unknown plants immediately.

### Imitate
1. Import the workflow into n8n.
2. Set up the necessary API credentials (Voyage AI, Qdrant).
3. Modify the image URL in the "Image URL hardcode" node to test with your images.
4. Execute the workflow to see if the image is classified as a known crop or an anomaly.

### Practice
Experiment with different crop images by changing the URL in the "Image URL hardcode" node. Analyze the workflow output to see how it classifies each image, and adjust the thresholds in the "Compare scores" node for different sensitivity levels.

### WIIFM
Mastering this workflow allows you to offer advanced anomaly detection services in agriculture, enhancing operational efficiency for farmers and agronomists. This skill can attract clients looking to automate crop monitoring, creating a new revenue stream for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note1" and "Sticky Note22" for IDs, table names, and URLs.
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
