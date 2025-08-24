# Code EditImage Automation Webhook

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
This n8n workflow automates the process of object detection in images. When triggered, it fetches an image, uses AI to detect objects within it, scales the coordinates of those objects, and then draws bounding boxes around them on the image.

### Demonstrate
A business owner could use this workflow to analyze images from a petting zoo website. By automatically detecting and highlighting animals, they can create engaging content for social media or marketing materials, saving time and enhancing visual appeal.

### Imitate
1. Set up a manual trigger in n8n.
2. Use the HTTP Request node to fetch an image URL.
3. Call the AI API for object detection.
4. Scale the coordinates using a code node.
5. Use the Edit Image node to draw bounding boxes on the original image.
6. Store or display the edited image.

### Practice
Try modifying the image URL in the workflow to see how the object detection performs on different images. Experiment with various prompts to detect different objects and observe the accuracy of the bounding boxes.

### WIIFM
Mastering this workflow enables you to offer value-added services such as automated image analysis for businesses, enhancing their marketing efforts. This skill can attract clients looking for innovative automation solutions, potentially increasing your income.

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
