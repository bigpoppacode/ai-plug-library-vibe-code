# Code Filter Create Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "312.2965981499806", height: "266.8807730722022", content: "## Adjust frequency to your own needs"
4. **Run workflow every hours** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note2** `stickyNote` — height: "511.2196121145973", content: "## Copy my template and connect it to n8n

Template link: 
 https://docs.google.com/spreadsheets/d/170osqaLBql9M-4RAH3_lBKR7ZMaQqyLUkAD-88xGuEQ/edit?usp=sharing"
6. **Sticky Note3** `stickyNote` — height: "535.9388810024284", content: "## Add your SERPAPI API Key

Start a free trial at serpapi.com and get your API key in "Your account" section"
7. **Sticky Note** `stickyNote` — width: "312.2965981499806", height: "310.4703136043695", content: "## Click on Execute Workflow to run the workflow manually"
8. **Sticky Note4** `stickyNote` — width: "357.33341618921213", height: "532.3420004517685", content: "## Read Me

This workflow allows to scrape Google Maps data in an efficient way using SerpAPI. 

You'll get all data from Gmaps at a cheaper cost than Google Maps API.

Add as inpu…[truncated]"
9. **Google Sheets - Get searches  to scrap** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
10. **Extract keyword and location from URL** `set` — fields: "[object Object]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the process of scraping data from Google Maps using SerpAPI and saving the results in Google Sheets. It retrieves search queries from Google Sheets, extracts keywords and locations, and uses SerpAPI to gather data such as phone numbers, websites, and reviews. The workflow can be triggered manually or scheduled to run at regular intervals. If successful, the data is added to a specified Google Sheet, and the status is updated to show success or failure.

**Demonstrate:**  
A local marketing agency could use this workflow to gather business contact information from Google Maps for lead generation, helping them identify potential clients in a specific area.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and SerpAPI accounts.
3. Set up a schedule or manual trigger.
4. Customize the Google Sheet to include your search queries.
5. Test the workflow to ensure data is correctly scraped and added to the Sheet.

**Practice:**  
Create a test Google Sheet with a few search queries. Run the workflow and observe how it retrieves the data, processes it, and updates the Sheet. Modify search queries to see how the workflow handles different inputs.

**WIIFM:**  
Mastering this workflow can boost your ability to offer valuable data scraping services, enhancing your service offerings in lead generation and market research. This can increase your income potential and help you attract new clients looking for automated data solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, serpApi.
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
  