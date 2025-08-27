# Splitout Manual Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Trigger: Manual Test Run**.
2. **Sticky Note** `stickyNote` — width: "600", height: "700", content: "#### 🔍 Workflow Goal
Automatically search Google Maps using Dumpling AI based on a keyword (e.g., best restaurants in New York), extract results, and log them into a structured Go…[truncated]"
3. **Trigger: Manual Test Run** `manualTrigger` — configured for its default action.
4. **Search Google Maps via Dumpling AI** `httpRequest` — method: **POST**, url: `https://app.dumplingai.com/api/v1/search-maps`
5. **Split Places List for Processing** `splitOut` — options: "[object Object]", fieldToSplitOut: "places"
6. **Save Results to Google Sheet (Place Info)** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
- **Explain**  
This workflow automates the process of searching Google Maps for specific locations using Dumpling AI, extracting the results, and saving the data into a Google Sheet. It starts manually, sends a search request to Dumpling AI, splits the results for individual processing, and appends each location's details—such as name, address, rating, and contact information—into a structured Google Sheet.

- **Demonstrate**  
A restaurant chain could use this workflow to automatically gather information on competitors in a new city, helping them analyze the market and strategize their opening plans.

- **Imitate**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and Dumpling AI accounts.
3. Customize the search query in the HTTP Request node.
4. Test the workflow manually to ensure it logs data correctly.
5. Optionally, change the trigger to a Schedule Trigger for regular updates.

- **Practice**  
Create a test Google Sheet and run the workflow with a different search keyword. Observe how the results are logged, then modify the search term and see how it changes the data output.

- **WIIFM**  
Mastering this workflow enables you to offer automated data extraction services, helping businesses make data-driven decisions. This skill can attract clients looking for efficient ways to gather competitive intelligence, potentially leading to recurring revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googleSheetsOAuth2Api.
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
