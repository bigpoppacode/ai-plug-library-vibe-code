# Wait Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission - Discover Jobs**.
2. **Sticky Note9** `stickyNote` — color: "4", width: "1280", height: "460"
3. **Sticky Note10** `stickyNote` — width: "195", height: "646", content: "In this workflow, I use Google Sheets to store the results. 

You can use my template to get started faster:

1. [Click on this link to get the template](https://docs.google.com/sp…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "480", height: "880", content: "🔍 Glassdoor Jobs Scraper – Parameter Guide
Use this object to query Glassdoor jobs.
Each field filters results appropriately.


{
  "location": "{{ $json.Location }}",
  "keyword"…[truncated]"
5. **On form submission - Discover Jobs** `formTrigger` — options: "[object Object]", formTitle: "Linkedin High Intent Prospects And Job Post Hunt", formFields: "[object Object]"
6. **Sticky Note2** `stickyNote` — width: "300", height: "880", content: "🧠 Bright Data Trigger – Customize Your Job Query

This HTTP Request sends a POST call to Bright Data to start a new dataset snapshot based on your filters.

👋 If you don’t want t…[truncated]"
7. **Sticky Note3** `stickyNote` — color: "4", width: "940", height: "360"
8. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
9. **HTTP Request- Post API call to Bright Data** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/datasets/v3/trigger`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow automates the process of discovering and analyzing job listings from Glassdoor. It starts with a form submission to gather job search parameters like location and keywords. These parameters are then sent to Bright Data to scrape job listings. The data is stored in Google Sheets, where an AI model generates personalized pitches for each job listing. The workflow includes steps to monitor the scraping process and ensure data is ready before processing further.

**Demonstrate:**  
A recruitment agency could use this workflow to quickly gather job listings based on specific criteria, analyze them, and generate customized outreach messages to potential clients or candidates, saving time and improving targeting.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Bright Data and Google Sheets accounts.  
3. Set up the form with required job search fields.  
4. Customize the Google Sheets template with your own data fields.  
5. Test the workflow by submitting the form and checking the Google Sheets for results.

**Practice:**  
Create a test form with sample job search criteria and run the workflow. Check how the data flows from the form to the Google Sheets and how the AI-generated pitches appear. Adjust criteria to see different results.

**WIIFM:**  
Mastering this workflow allows you to offer automated job prospecting services, enhancing your ability to attract and retain clients, and offering a competitive edge in the recruitment industry. This could lead to increased revenue and new business opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
