# Splitout Nocodb Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Manual Trigger**.
2. **Manual Trigger** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "220", height: "520", content: "### Adaptation required
Get a free tier for serpAPI (Google Search) at serpapi.com

Set up the credentials for serpAPI

Explanations in the [n8n docs](https://docs.n8n.io/integrati…[truncated]"
4. **Sticky Note2** `stickyNote` — width: "180", height: "520", content: "### NO adaptation required
The search metadata is being discarded and only the "organic results" being preserved as individual list items as they are containing the relevant data
"
5. **Sticky Note3** `stickyNote` — width: "180", height: "520", content: "### NO adaptation required
Discard irrelevant search result (meta)data
"
6. **Sticky Note4** `stickyNote` — width: "520", height: "520", content: "### Adaptation required

**This node does the following**:
- Identify where possible the company name the LinkedIn profile is working in.
- Turn the number of followers into a real…[truncated]"
7. **Sticky Note12** `stickyNote` — color: "4", width: "540", height: "260"
8. **Sticky Note** `stickyNote` — width: "180", height: "520", content: "### NO adaption required
This node discards irrelevant OpenAI metadata"
9. **Sticky Note10** `stickyNote` — height: "760", content: "















## Setting the parameters for Google search via SerpAPI

Searching **LinkedIn profiles** by setting the following **parameters** for the Google query in the next no…[truncated]"
10. **Sticky Note13** `stickyNote` — color: "4", width: "540", height: "200"
11. **Sticky Note14** `stickyNote` — color: "4", width: "540", height: "500"
12. **Sticky Note5** `stickyNote` — width: "180", height: "520", content: "### NO adaption required
This node creates the final data output "
13. **Sticky Note9** `stickyNote` — width: "220", height: "520", content: "### NO adaption required
This node creates stores all the data in an Excel file which can be downloaded. 
- Open the node
- Click on download button"
14. **Sticky Note11** `stickyNote` — width: "780", height: "920", content: "
















## Adaption required

- This node creates stores all the data in an NocoDB database for further utilization.
- In case the database is not needed, just delete this…[truncated]"
15. **Sticky Note15** `stickyNote` — color: "4", width: "540", height: "280"
16. **Search parameter** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Google search w/ SerpAPI** `httpRequest` — url: `https://serpapi.com/search`
18. **Turn search results into individual items** `splitOut` — options: "[object Object]", fieldToSplitOut: "organic_results"
19. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Company name & followers** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
21. **Discard meta data** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Generate final data via merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
23. **LinkedIn profiles in Excel for download** `convertToFile` — operation: **xlsx**
24. **Store data in a NocoDB table** `nocoDb` — operation: **create**, table: `mttbkp3hxy9rnwx`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of collecting LinkedIn profiles based on specific keywords and locations using Google Search via SerpAPI. It retrieves and processes search results, extracting necessary details such as company names and follower counts using OpenAI. The processed data is then stored in an Excel file for download and a NocoDB table for further use.

**Demonstrate:**  
A business owner could use this workflow to gather potential leads from LinkedIn by searching for profiles within a specific industry and location. This streamlines lead generation, saving time and effort in manually searching and collecting data.

**Imitate:**  
1. Import the workflow JSON into n8n.  
2. Set up accounts and credentials for SerpAPI, OpenAI, and NocoDB.  
3. Configure the search parameters to suit your target industry and location.  
4. Run the workflow manually to test and verify data collection and storage.

**Practice:**  
Create a test LinkedIn profile search using a specific industry keyword and location. Run the workflow and check the Excel file and NocoDB table to confirm that the data is collected correctly and meets your criteria.

**WIIFM:**  
Mastering this workflow enables you to efficiently automate lead generation, offering valuable services to clients seeking to expand their network or customer base. This enhances your service portfolio and provides opportunities for recurring revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** serpApi, openAiApi, nocoDbApiToken.
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
