# Code EditImage Update Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash"
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"caption_title": "",
	"caption_text": ""
}"
5. **Sticky Note** `stickyNote` — width: "423.75", height: "431.76353488372104", content: "## Try it out!

### This workflow takes an image and generates a caption for it using AI. The OpenAI node has been able to do this for a while but this workflow demonstrates how to…[truncated]"
6. **Sticky Note1** `stickyNote` — color: "7", width: "586.25", height: "486.25"
7. **Sticky Note2** `stickyNote` — color: "7", width: "888.75", height: "783.75"
8. **Sticky Note3** `stickyNote` — color: "7", width: "753.75", height: "635"
9. **Sticky Note4** `stickyNote` — width: "563.75", height: "411.25", content: "**FIG 1.** Example input image with AI generated caption
![Example Output](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/l5xbb4ze4wyxwwefqmnc#ful…[truncated]"
10. **Get Image** `httpRequest` — url: `https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600`
11. **Resize For AI** `editImage` — operation: **resize**
12. **Get Info** `editImage` — operation: **information**
13. **Image Captioning Agent** `chainLlm` — text: "Generate a caption for this image.", messages: "[object Object]", promptType: "define"
14. **Merge Image & Caption** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
15. **Calculate Positioning** `code` — mode: "runOnceForEachItem", jsCode: "const { size, output } = $input.item.json;

const lineHeight = 35;
const fontSize = Math.round(size.height / lineHeight);
const maxLineLength = Math.round(size.width/fontSize) * 2;…[truncated]"
16. **Merge Caption & Positions** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
17. **Apply Caption to Image** `editImage` — operation: **multiStep**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow takes an image from a URL, resizes it, and uses Google's Gemini AI model to generate a caption for it. The caption is then formatted and overlaid on the image, resulting in a final image with a descriptive caption. This is achieved through a series of nodes that handle image fetching, resizing, AI caption generation, and image editing to merge the caption onto the image.

**Demonstrate:** A marketing team could use this workflow to quickly generate and overlay captions on product images for social media, enhancing engagement and providing context to viewers.

**Imitate:** 1. Import the workflow into n8n. 2. Connect to the required API services like Google Gemini. 3. Replace the image URL with your own. 4. Run the workflow to test and ensure captions are properly generated and overlaid.

**Practice:** Create a similar workflow using a different image URL. Experiment with different AI models or caption styles to see how the output changes. Adjust the overlay positioning to fit various image dimensions.

**WIIFM:** Mastering this workflow enables you to offer automated image captioning services to clients, saving them time in content creation and enhancing their visual marketing strategies, thereby increasing your service offerings and potential revenue.
  
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
  