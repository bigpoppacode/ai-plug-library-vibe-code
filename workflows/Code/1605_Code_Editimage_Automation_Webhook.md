# Code EditImage Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×7, httpRequest×2, editImage×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "440", height: "380", content: "Fig 1. Output of Object Detection
![](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/download_1_qmqyyo#full-width)"
4. **Sticky Note1** `stickyNote` — color: "7", width: "600", height: "420"
5. **Sticky Note2** `stickyNote` — color: "7", width: "560", height: "540"
6. **Sticky Note3** `stickyNote` — color: "7", width: "520", height: "440"
7. **Sticky Note4** `stickyNote` — color: "5", width: "340", height: "100"
8. **Sticky Note5** `stickyNote` — color: "7", width: "500", height: "440"
9. **Sticky Note6** `stickyNote` — width: "420", height: "680", content: "## Try it out!
### This n8n template demonstrates how to use Gemini 2.0's new Bounding Box detection capabilities your workflows.

The key difference being this enables prompt-base…[truncated]"
10. **Get Test Image** `httpRequest` — url: `https://www.stonhambarns.co.uk/wp-content/uploads/jennys-ark-petting-zoo-for-website-6.jpg`
11. **Get Image Info** `editImage` — operation: **information**
12. **Gemini 2.0 Object Detection** `httpRequest` — method: **POST**, url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent`
13. **Get Variables** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Scale Normalised Coords** `code` — jsCode: "const { coords, width, height } = $input.first().json;

const scale = 1000;
const scaleCoordX = (val) => (val * width) / scale;
const scaleCoordY = (val) => (val * height) / scale;…[truncated]"
15. **Draw Bounding Boxes** `editImage` — operation: **multiStep**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow uses Gemini 2.0's object detection capabilities to identify and draw bounding boxes around rabbits in an image. It begins by downloading an image and extracting its size information. The image is then sent to the Gemini API to detect objects based on a prompt. The coordinates of detected objects are scaled to fit the original image size and finally, bounding boxes are drawn on the image to indicate the detected objects.

### Demonstrate
A wildlife photographer could use this workflow to automatically detect and highlight animals in their photos, allowing them to quickly assess which images feature the subjects of interest, thereby streamlining their editing process.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google API account for Gemini 2.0.
3. Adjust the image URL to your own.
4. Set a trigger to automate the workflow (e.g., on image upload).
5. Test to ensure bounding boxes are drawn correctly on images.

### Practice
Create a test workflow using a different image URL. Modify the prompt to detect a different object, such as "cars" or "trees," and observe how the bounding boxes are drawn. Experiment with different images to see how well the detection performs.

### WIIFM
Mastering this workflow enables you to offer automated image analysis services, improving efficiency for clients in fields like photography, security, and wildlife monitoring. This can expand your service offerings and lead to increased revenue opportunities in an AI-driven market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  