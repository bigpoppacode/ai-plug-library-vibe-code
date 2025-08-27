# Code Webhook Monitor Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×2, respondToWebhook×2, stickyNote.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Retrieve All Slide Elements**.
  2. **Sticky Note** `stickyNote` — width: "596.8395976509729", height: "654.4370838798395", content: "## Dynamically Replace Images in Google Slides
This workflow exposes an API endpoint that lets you dynamically replace an image in Google Slides, perfect for automating deck presen…[truncated]"
3. **Webhook** `webhook` — method: **POST**, path: `/replace-image-in-slide`
4. **Check if all params are provided** `if` — options: "[object Object]", conditions: "[object Object]"
5. **Retrieve All Slide Elements** `httpRequest` — url: `=https://slides.googleapis.com/v1/presentations/{{ $('Webhook').item.json.body.presentation_id }}`
6. **Error Missing Fields** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "error": "Missing fields."
}"
7. **Retrieve matching Images ObjectIds** `code` — jsCode: "const key = $('Webhook').item.json.body.image_key;

const pageElements = $input
  .all()
  .flatMap(item => item.json.slides)
  .flatMap(slide => slide.pageElements.filter(el => el…[truncated]"
8. **Replace Images** `httpRequest` — method: **POST**, url: `=https://slides.googleapis.com/v1/presentations/{{ $('Webhook').item.json["body"]["presentation_id"] }}:batchUpdate `
9. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "message": "Image replaced."
}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of dynamically replacing images in Google Slides presentations. It sets up an API endpoint that, when called, replaces a specified image in a slide with a new one from a provided URL. This is useful for automating updates to presentations, such as changing client logos or background images.

**Demonstrate:**  
A consultant could use this workflow to automatically update client logos in presentation decks, ensuring all slides are up-to-date with the latest branding before a meeting, saving time and reducing manual errors.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up a Google Slides API connection.
3. Configure the webhook to receive `presentation_id`, `image_key`, and `image_url`.
4. Set unique identifiers in Google Slides images as alt text.
5. Test by sending a POST request with the required parameters.

**Practice:**  
Create a Google Slides presentation with placeholder images. Assign unique keys as alt text. Use the workflow to replace these images by making POST requests with different image URLs. Observe how the images are updated.

**WIIFM:**  
Mastering this workflow allows you to offer automated presentation updates as a service, increasing efficiency and value for clients. This capability can differentiate your automation business and attract clients needing dynamic content updates.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSlidesOAuth2Api.
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
  