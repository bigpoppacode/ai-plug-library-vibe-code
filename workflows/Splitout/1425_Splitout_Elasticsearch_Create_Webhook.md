# Splitout Elasticsearch Create Webhook
## 🚀 What It Does
Automates a flow using stickyNote×7, httpRequest×4, manualTrigger.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "7", width: "541.1455500767354", height: "381.6388867600897"
4. **Sticky Note1** `stickyNote` — color: "7", width: "579.7748008857744", height: "437.4680103498263"
5. **Sticky Note2** `stickyNote` — color: "7", width: "466.35460775498495", height: "371.9272151757119"
6. **Sticky Note3** `stickyNote` — color: "7", width: "478.20345439832454", height: "386.06196032653685"
7. **Sticky Note4** `stickyNote` — color: "7", width: "328.419768654291", height: "462.65463700396174"
8. **Sticky Note8** `stickyNote` — width: "359.6648027457353", height: "352.41026669883723", content: "## Try It Out!
### This workflow does the following:
* Downloads an image
* Uses an object classification AI model to identify objects in the image.
* Crops the objects out from th…[truncated]"
9. **Sticky Note5** `stickyNote` — width: "172.9365918827757", height: "291.6881468483679", content: "















🚨**Required**
* Set your variables here first!"
10. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Fetch Source Image** `httpRequest` — url: `={{ $json.source_image }}`
12. **Use Detr-Resnet-50 Object Classification** `httpRequest` — method: **POST**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Set Variables').item.json.CLOUDFLARE_ACCOUNT_ID }}/ai/run/{{ $('Set Variables').item.json.model }}`
13. **Split Out Results Only** `splitOut` — options: "[object Object]", fieldToSplitOut: "result"
14. **Filter Score >= 0.9** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Fetch Source Image Again** `httpRequest` — url: `={{ $('Set Variables').item.json.source_image }}`
16. **Crop Object From Image** `editImage` — operation: **crop**
17. **Upload to Cloudinary** `httpRequest` — method: **POST**, url: `https://api.cloudinary.com/v1_1/daglih2g8/image/upload`
18. **Create Docs In Elasticsearch** `elasticsearch` — operation: **create**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates image processing by downloading an image, using an AI model to identify objects, cropping these objects into new images, and uploading them to Cloudinary. The cropped images are then indexed in Elasticsearch for efficient image search based on object association.

**Demonstrate:**  
A business owner can use this workflow to automate cataloging products by identifying and cropping product images from photoshoots, then indexing them for quick retrieval and search.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set the required variables like Cloudflare account ID and source image URL.  
3. Connect to Cloudinary and Elasticsearch with your credentials.  
4. Test the workflow to see the results.  

**Practice:**  
Create a test image with multiple objects, run the workflow, and observe how it identifies and crops each object. Experiment with different images to see how the AI model performs.

**WIIFM:**  
Mastering this workflow can enhance your automation business by offering advanced image processing services, attracting clients needing efficient digital asset management, and enabling you to charge premium fees for your AI-powered solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** cloudflareApi, httpQueryAuth, elasticsearchApi.
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
