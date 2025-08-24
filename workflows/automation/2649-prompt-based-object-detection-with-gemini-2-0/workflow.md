# Workflow

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
This n8n workflow automates the process of detecting objects in an image. It triggers when you manually start it, fetches an image, uses an AI API to identify objects, scales the coordinates of detected objects, and finally draws bounding boxes around them on the image.

### Demonstrate
A business owner with an e-commerce site can use this workflow to analyze product images. By automating object detection, they can ensure images are correctly tagged for search optimization, improving user experience and sales conversion rates.

### Imitate
1. **Set Up**: Create a new workflow in n8n.
2. **Trigger**: Add a Manual Trigger node.
3. **Fetch Image**: Use an HTTP Request node to get an image URL.
4. **Detect Objects**: Add an HTTP Request node for the AI detection API.
5. **Scale Coordinates**: Use a Code node to scale detected coordinates.
6. **Draw Boxes**: Add an Edit Image node to draw bounding boxes.
7. **Test**: Execute the workflow and view the modified image.

### Practice
Try replacing the test image URL with your own image URL and tweak the object detection request to identify a different object, such as "dogs" instead of "rabbits." Execute the workflow and observe the changes.

### WIIFM
Mastering this workflow allows you to offer valuable services in AI image processing, attracting clients who need automated visual content management. This can lead to increased income through project-based work or retainer contracts.

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
