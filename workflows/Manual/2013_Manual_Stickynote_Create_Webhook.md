# Manual Stickynote Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "460", height: "220", content: "## Generate 360° Virtual Try-on Videos for Clothing with Kling API (unofficial)
This tool is designed for e-commerce platforms, fashion brands, content creators, and content influe…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "340", height: "200", content: "## Generate Virtual Try-on Image
Upload model url, users have two solutions to upload clothing url: 
1. Upload `dress_input`
2. Upload 'upper_input` and 'lower_input`"
5. **Sticky Note2** `stickyNote` — width: "340", content: "## Generate Final Video 
Wait for generation and get the output url in the final node."
6. **Preset Parameters** `set` — mode: "raw", options: "[object Object]", jsonOutput: "[redacted]"
7. **Kling Virtual Try-On Task** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates the creation of 360° virtual try-on videos for clothing using the Kling API. It starts by manually triggering the process, setting preset parameters, and making API requests to generate virtual try-on images and videos. The workflow checks the status of these tasks, waits for completion, and retrieves the final video URL, making it useful for e-commerce platforms and fashion brands to showcase their products more interactively.

### Demonstrate
A fashion brand could use this workflow to generate virtual try-on videos for their online store, allowing customers to see how clothes fit on a model, enhancing the shopping experience and potentially increasing sales.

### Imitate
1. Import the workflow into n8n.
2. Connect your PiAPI account.
3. Set up preset parameters for your model and clothing images.
4. Test the workflow to ensure it generates the try-on video URL successfully.
5. Customize the workflow for your specific needs.

### Practice
Create a test setup with your own model and clothing images, and run the workflow. Experiment with different clothing combinations to see how the workflow handles various inputs and generates the video outputs.

### WIIFM
Mastering this workflow can help you offer innovative solutions to e-commerce clients, enhancing their product displays with interactive videos. This can lead to increased customer engagement and sales, boosting your value as an automation consultant or business owner.
  
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
  