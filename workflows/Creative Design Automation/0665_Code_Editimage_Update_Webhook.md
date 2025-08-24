# Code EditImage Update Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get Variables (set)** - This step performs a key action in the workflow.
4. **Step 3: Get Test Image (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Gemini 2.0 Object Detection (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Scale Normalised Coords (code)** - This step performs a key action in the workflow.
7. **Step 6: Draw Bounding Boxes (editImage)** - This step performs a key action in the workflow.
8. **Step 7: Get Image Info (editImage)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of detecting objects in images using AI. It starts by triggering a test, retrieves an image, uses an AI model to identify objects, scales the coordinates of detected items, and then marks them on the image.

### Demonstrate
A business could use this workflow to automate quality control by identifying defective items in product images. For instance, a clothing retailer could quickly detect flaws in photos before posting them online, ensuring only quality images are shared.

### Imitate
1. Set up a manual trigger in n8n.
2. Add an HTTP Request node to fetch an image.
3. Use the AI object detection API to analyze the image.
4. Scale the coordinates of detected objects with a Code node.
5. Use an Edit Image node to draw bounding boxes around detected items.
6. Execute the workflow to see results.

### Practice
Try modifying the image URL in the workflow to test different images and observe how the object detection results vary. Experiment with different prompts for the AI model to see how it affects the detection output.

### WIIFM
Mastering this workflow can help you automate tasks for businesses, providing a valuable service that saves time and enhances accuracy. This could lead to new client opportunities and increased income as part of an AI automation consultancy.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note6" for IDs, table names, and URLs.
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
