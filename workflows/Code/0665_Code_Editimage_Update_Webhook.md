# Code EditImage Update Webhook
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
This n8n workflow automates the identification of objects within an image using AI. It downloads an image, retrieves its dimensions, and sends it to the Gemini 2.0 API for object detection. The workflow processes the API's response to scale and draw bounding boxes around the detected objects, specifically targeting rabbits in this example.

### Demonstrate
A wildlife researcher could use this workflow to automatically identify and track animal species in images captured by camera traps. This saves time and improves accuracy in data collection and analysis.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up credentials for the Gemini 2.0 API.
3. Modify the API request to identify different objects as needed.
4. Test with a sample image to ensure bounding boxes are drawn correctly.

### Practice
Try using the workflow with a different image URL. Modify the object detection prompt to identify a different object, like "cats" or "dogs," and observe how the workflow adapts and draws bounding boxes accordingly.

### WIIFM
Mastering this workflow enables you to offer AI-powered image analysis services, such as wildlife monitoring or security surveillance, enhancing your portfolio and attracting clients interested in advanced automation solutions.
  
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
  