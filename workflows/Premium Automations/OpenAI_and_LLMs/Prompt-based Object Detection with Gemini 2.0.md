# Prompt Based Object Detection With Gemini 2.0

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
This n8n workflow automates the process of detecting objects in an image (like rabbits), drawing bounding boxes around them, and providing useful image information. It uses manual triggers, HTTP requests, and image editing nodes to create a visual representation of detected objects.

### Demonstrate
A business owner could use this workflow to automatically analyze images of products for quality control, ensuring that images submitted by vendors meet specific criteria, such as highlighting defects or confirming product presence in the image.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger node.
3. Configure an HTTP request node to fetch an image from a URL.
4. Use another HTTP request to send the image for object detection.
5. Add a code node to scale coordinates from the detection.
6. Use image editing nodes to draw bounding boxes on the detected objects.
7. Test the workflow to see the results.

### Practice
Try modifying the workflow by changing the image URL to one of your own. Observe how the bounding boxes change based on different objects in the image. Document the differences and note any errors or unexpected behaviors.

### WIIFM
Mastering this workflow allows you to offer businesses advanced image processing capabilities, which can enhance product quality assurance, improve customer engagement through interactive images, and ultimately create value by automating tedious visual inspections, leading to potential new revenue streams.

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
