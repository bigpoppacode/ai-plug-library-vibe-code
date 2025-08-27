# Wait Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission - Discover Jobs**.
2. **Sticky Note9** `stickyNote` — color: "4", width: "1280", height: "480"
3. **Sticky Note10** `stickyNote` — width: "195", height: "646", content: "In this workflow, I use Google Sheets to store the results. 

You can use my template to get started faster:

1. [Click on this link to get the template](https://docs.google.com/sp…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "480", height: "2240", content: "# 🔍 Indeed Jobs API – Parameter Guide
Use this object to query Indeed job listings In Bright Data Web Scraper API.  
Each field lets you filter results based on different criteria…[truncated]"
5. **On form submission - Discover Jobs** `formTrigger` — options: "[object Object]", formTitle: "Linkedin High Intent Prospects And Job Post Hunt", formFields: "[object Object]"
6. **Sticky Note2** `stickyNote` — width: "300", height: "880", content: "🧠 Bright Data Trigger – Customize Your Job Query

This HTTP Request sends a POST call to Bright Data to start a new dataset snapshot based on your filters.

👋 If you don’t want t…[truncated]"
7. **Sticky Note3** `stickyNote` — color: "4", width: "940", height: "360"
8. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
9. **Sticky Note** `stickyNote` — width: "280", height: "620", content: "Checking if each job post is relevant to you
"
10. **HTTP Request- Post API call to Bright Data** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/datasets/v3/trigger`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of discovering job listings on Indeed using the Bright Data API. It starts with a form submission where users specify job location, keyword, and country. These details are sent to Bright Data to fetch relevant job listings. The workflow checks the status of the data retrieval and, once complete, it retrieves the job data. The job listings are stored in Google Sheets, and an OpenAI model checks if each job post is relevant to the user's criteria.

**Demonstrate:**  
A recruitment agency could use this workflow to automate job searches based on client needs. By specifying criteria like job title and location, they can efficiently gather relevant job postings, saving time and enhancing service quality.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up a form with fields for job location, keyword, and country.
3. Connect Bright Data and Google Sheets.
4. Customize the API keys and ensure the correct Google Sheets template is used.
5. Test the workflow with sample data.

**Practice:**  
Create a simple form in n8n to test job searches based on your preferred job title and location. Run the workflow to see how it populates the Google Sheets with job listings and checks their relevance.

**WIIFM:**  
Mastering this workflow allows you to offer automated job search services, helping clients find relevant job postings efficiently. This can enhance your service offerings and potentially increase revenue in your AI automation business.

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
