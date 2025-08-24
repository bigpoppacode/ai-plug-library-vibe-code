# HTTP ExecuteWorkflow Automation Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, code, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute Workflow Trigger** node.
2. **Step 1: Embed image (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Query Qdrant (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Majority Vote (code)** - This step performs a key action in the workflow.
5. **Step 4: Increase limitKNN (set)** - This step performs a key action in the workflow.
6. **Step 5: Propagate loop variables (set)** - This step performs a key action in the workflow.
7. **Step 6: Image Test URL (set)** - This step performs a key action in the workflow.
8. **Step 7: Return class (set)** - This step performs a key action in the workflow.
9. **Step 8: Check tie (if)** - This step performs a key action in the workflow.
10. **Step 9: Qdrant variables + embedding + KNN neigbours (set)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow classifies images of land types using a K-Nearest Neighbors (KNN) algorithm. It takes an image URL, retrieves its embedding via an API, queries a database for similar images, performs a majority vote on the classifications, and resolves ties by increasing the number of neighbors.

### Demonstrate
A landscape consulting firm could use this workflow to automatically classify satellite images of land types (like forests, urban areas, etc.) for environmental studies or land management, saving time and improving accuracy in data analysis.

### Imitate
1. **Set Up n8n**: Install n8n and create an account.
2. **Create a New Workflow**: Start with a Manual Trigger node.
3. **Embed Image**: Use an HTTP Request node to call the image embedding API.
4. **Query Database**: Set up another HTTP Request node to fetch similar images from Qdrant.
5. **Majority Vote Logic**: Add a code node to calculate the most common classification.
6. **Handle Ties**: Implement a loop with an If node to check for ties and increase the number of KNN neighbors if necessary.
7. **Return Result**: Use a Set node to output the final classified result.

### Practice
Try modifying the workflow to classify different types of images (e.g., urban vs. rural) using a new dataset. Test with various images and observe how the classification accuracy changes based on different KNN limits.

### WIIFM
Mastering this workflow helps you automate image analysis processes, providing valuable services to businesses in agriculture, environmental science, or urban planning. This can lead to new clients, increased revenue, and enhanced efficiency in data handling.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Embed image" and "Sticky Note10" for IDs, table names, and URLs.
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
