# Splitout Manual Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "6", width: "800", height: "560"
4. **Sticky Note1** `stickyNote` — color: "4", width: "780", height: "560"
5. **Sticky Note2** `stickyNote` — color: "5", width: "780", height: "560"
6. **Sticky Note3** `stickyNote` — width: "600", height: "320", content: "## Introduction
Welcome to my template! Before explaining how to set it up, here's some important information:

This automation is very easy to implement and is designed for anyone…[truncated]"
7. **Sticky Note4** `stickyNote` — width: "600", height: "320", content: "[redacted]"
8. **Sticky Note5** `stickyNote` — width: "600", height: "320", content: "## Tools 
**(You can use the API and CRM of your choice; this is only a suggestion)**

- API Linkedin : [Ghost Genius API](https://ghostgenius.fr) 

- API Documentation : [Document…[truncated]"
9. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Search Companies** `httpRequest` — url: `https://api.ghostgenius.fr/v2/search/companies`
11. **Extract Company Data** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the process of searching for companies on LinkedIn using the Ghost Genius API, filtering them based on certain criteria like follower count and website presence, and then adding valid companies to an Airtable CRM. It checks if a company already exists in the database to avoid duplicates and adds new entries with detailed information.

- **Demonstrate**: A business owner could use this workflow to efficiently build a CRM database with potential clients or partners, ensuring the data is up-to-date and valuable by only including companies with a significant online presence and credibility.

- **Imitate**: Start by importing the workflow into n8n. Set up your LinkedIn search criteria in the "Set Variables" node. Connect your Ghost Genius API and Airtable credentials. Run the workflow to fetch companies, filter them, and populate your Airtable CRM with the results.

- **Practice**: Create a test Airtable base and a mock LinkedIn search using the workflow. Experiment with different criteria in the "Set Variables" node to see how it affects the companies that are added to your CRM. Adjust conditions to refine your target list.

- **WIIFM**: Mastering this workflow allows you to offer CRM enrichment services, helping businesses streamline their client acquisition process. This can enhance your service offerings, attract more clients, and increase your revenue in the automation industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, airtableTokenApi.
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
