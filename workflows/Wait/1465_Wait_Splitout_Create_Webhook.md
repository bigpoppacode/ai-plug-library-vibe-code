# Wait Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Start**.
2. **Sticky Note** `stickyNote` — color: "6", width: "860", height: "560"
3. **Sticky Note1** `stickyNote` — color: "4", width: "1120", height: "560"
4. **Sticky Note2** `stickyNote` — color: "5", width: "780", height: "560"
5. **Sticky Note4** `stickyNote` — width: "600", height: "380", content: "## Introduction
Welcome to my template! Before explaining how to set it up, here's some important information:

This automation is an alternative version of [this template](https:/…[truncated]"
6. **Sticky Note5** `stickyNote` — width: "600", height: "380", content: "[redacted]"
7. **Sticky Note6** `stickyNote` — width: "600", height: "380", content: "## Tools 
**(You can use the API and CRM of your choice; this is only a suggestion)**

- API Linkedin : [Ghost Genius API](https://ghostgenius.fr) 

- API Documentation : [Document…[truncated]"
8. **Start** `manualTrigger` — configured for its default action.
9. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Search Companies** `httpRequest` — url: `https://api.ghostgenius.fr/v2/search/companies`
11. **Extract Company Data** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of searching for companies on LinkedIn using the Ghost Genius API, evaluating them with AI, and storing the results in a Google Sheet CRM. It starts by searching for companies based on criteria like size and location, filters valid companies with a website and a minimum follower count, checks if they are new, scores them using an AI model, and finally adds them to a Google Sheet.

**Demonstrate:**  
A consultant could use this workflow to automate lead generation for a client by identifying potential business partners or customers on LinkedIn, scoring their relevance, and maintaining a list in a Google Sheet for follow-up.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up Ghost Genius and Google Sheets API credentials.  
3. Define search variables in the "Set Variables" node.  
4. Run the workflow manually or schedule it.  
5. Review and configure scoring criteria in the AI node.

**Practice:**  
Create a test Google Sheet and run the workflow with a small dataset. Adjust the criteria in the "Set Variables" node and observe how the scoring and filtering work. Experiment with different company sizes and locations.

**WIIFM:**  
Mastering this workflow empowers you to offer lead generation and qualification services, enhancing your portfolio as an AI automation consultant. It streamlines the process of finding and evaluating potential clients, boosting efficiency and potentially increasing income.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googleSheetsOAuth2Api, openAiApi.
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
