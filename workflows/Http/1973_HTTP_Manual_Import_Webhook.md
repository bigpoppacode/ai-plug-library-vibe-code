# HTTP Manual Import Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×4, code×3, stickyNote.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Sticky Note7** `stickyNote` — color: "6", width: "1880", height: "660"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Get Image 1** `httpRequest` — url: `https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png`
5. **Get Image 2** `httpRequest` — url: `https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png`
6. **Change name to photo1** `code` — jsCode: "return items.map((item, index) => {
  // Grab the existing binary buffer under "data"
  const buffer = item.binary.data;
  // Build a new item with the renamed binary key
  return …[truncated]"
7. **Change name to photo2** `code` — jsCode: "return items.map((item, index) => {
  // Grab the existing binary buffer under "data"
  const buffer = item.binary.data;
  // Build a new item with the renamed binary key
  return …[truncated]"
8. **Merge** `merge` — configured for its default action.
9. **Send as 1 merged file** `code` — jsCode: "// Merge all incoming items (each with one binary photoX) into one item
const mergedItem = {
  json: {},
  binary: {}
};

for (const item of items) {
  // Copy every binary field f…[truncated]"
10. **POST TO INSTAGRAM1** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload_photos`
11. **POST TO TIKTOK** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload_photos`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of downloading two images, renaming them for consistency, merging them into one package, and then posting them to Instagram and TikTok. It starts with a manual trigger, retrieves two example images from a URL, renames the image files to "photo1" and "photo2," merges these images, and finally uploads them to social media platforms using HTTP requests.

### Demonstrate
A digital marketing agency could use this workflow to automate the process of posting daily promotional content to multiple social media platforms, saving time and ensuring consistency across channels.

### Imitate
1. Import the workflow into your n8n environment.
2. Configure your Instagram and TikTok API credentials.
3. Adjust the image URLs and parameters as needed.
4. Test the workflow to ensure it posts the images correctly.
5. Schedule the workflow or trigger it manually as needed.

### Practice
Create a test workflow that downloads a different set of images (e.g., from your own URLs) and posts them to a dummy account on Instagram and TikTok. Observe how the workflow handles different images and test error handling by using invalid URLs.

### WIIFM
Mastering this workflow allows you to offer automated social media management services, increasing efficiency and consistency for clients. This can lead to more business opportunities and higher income potential as part of an AI automation business.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  