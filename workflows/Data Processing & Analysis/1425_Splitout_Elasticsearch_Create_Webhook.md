# Splitout Elasticsearch Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Fetch Source Image (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Split Out Results Only (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Filter Score >= 0.9 (filter)** - This step performs a key action in the workflow.
6. **Step 5: Crop Object From Image (editImage)** - This step performs a key action in the workflow.
7. **Step 6: Set Variables (set)** - This step performs a key action in the workflow.
8. **Step 7: Use Detr-Resnet-50 Object Classification (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Upload to Cloudinary (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Create Docs In Elasticsearch (elasticsearch)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Fetch Source Image Again (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of image analysis. It fetches an image, uses AI to identify objects, crops identified objects, uploads them to Cloudinary, and stores the results in Elasticsearch for easy searching.

### Demonstrate
A business owner could use this workflow to streamline product image management. For example, an e-commerce site could automatically classify and crop product images, improving searchability and enhancing user experience.

### Imitate
1. Set up n8n and create a new workflow.
2. Start with a Manual Trigger node.
3. Add an HTTP Request node to fetch an image.
4. Use the Detr-Resnet-50 model for object classification.
5. Filter results, crop objects, and upload to Cloudinary.
6. Store the results in Elasticsearch.

### Practice
Create a simplified version of this workflow by fetching a single image, classifying it, and logging the result to a Google Sheet instead of using Elasticsearch. Experiment with different images to see how the workflow adapts.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, enhancing your skills in AI and image processing. This can attract customers looking for efficient solutions, ultimately generating income through automated image management services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "Sticky Note5" for IDs, table names, and URLs.
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
