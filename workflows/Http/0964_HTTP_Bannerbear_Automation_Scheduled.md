# HTTP Bannerbear Automation Scheduled
  ## 🚀 What It Does
  Automates a flow using bannerbear, httpRequest, cron.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Rocketchat**.
  2. **Rocketchat** `rocketchat` — channel: "", options: "[object Object]", attachments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automatically shares a cocktail recipe in a Rocketchat channel every Friday at 6 PM. It fetches a random cocktail recipe using an HTTP Request from TheCocktailDB API, creates an image with the recipe details using Bannerbear, and then posts this image in Rocketchat.

### Demonstrate
A bar owner could use this workflow to engage customers by sharing a "Cocktail of the Week" in their online community, enhancing customer interaction and promoting their brand.

### Imitate
1. Import the workflow into n8n.
2. Connect your Rocketchat and Bannerbear accounts.
3. Set up the Cron node to trigger at your preferred schedule.
4. Customize the Rocketchat channel where the image will be posted.
5. Test the workflow to ensure it posts correctly.

### Practice
Create a test Rocketchat channel and run the workflow. Observe how it fetches a cocktail recipe, generates an image, and posts it. Try modifying the schedule or the API endpoint to fetch different recipes.

### WIIFM
Mastering this workflow allows you to automate creative content sharing, enhancing customer engagement and interaction. This skill can attract clients looking to boost their social media presence, providing a valuable service and generating income in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** bannerbearApi, rocketchatApi.
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
  