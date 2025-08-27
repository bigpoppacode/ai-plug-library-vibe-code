# Splitout Webhook Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×3, splitOut, removeDuplicates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note1**.
2. **Sticky Note** `stickyNote` — color: "4", width: "1764.2311804548722", height: "309.99889350400827"
3. **Sticky Note1** `stickyNote` — color: "5", width: "520.3009626085002", height: "249.39327996703526"
4. **Sticky Note2** `stickyNote` — width: "728.4741979436378", height: "430.0825742795921", content: "# How to scrap emails from websites

This workflow shows how you can quickly build an Email scraping API using n8n.
Usage
Copy the webhook URL to your browser and add a query param…[truncated]"
5. **Webhook** `webhook` — path: `/ea568868-5770-4b2a-8893-700b344c995e`
6. **Get the website data** `httpRequest` — url: `={{ $json.query['Website'] }}`
7. **Extract the emails found** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "Email"
9. **If contains email** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Remove Duplicates** `removeDuplicates` — configured for its default action.
11. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow is designed to scrape email addresses from a specified website. It begins by triggering a webhook that takes a website URL as a query parameter. The workflow then retrieves the website data, extracts any email addresses found, filters out duplicates, and returns the list of unique emails via the webhook response. This automation is useful for gathering contact information from web pages automatically.

**Demonstrate**  
A digital marketing consultant could use this workflow to compile email lists from business directories or competitor websites, helping their clients expand their contact database efficiently.

**Imitate**  
1. Import the workflow into n8n.
2. Set up the webhook URL and use a query parameter to specify the website.
3. Test the workflow using a website known to contain email addresses.
4. Observe the emails extracted and returned by the workflow.

**Practice**  
Create a test website with a few email addresses embedded. Use the workflow to scrape these emails, verifying that the workflow correctly identifies and outputs them.

**WIIFM**  
Mastering this workflow allows you to offer email scraping as a service, helping businesses build targeted lists for marketing campaigns. This skill can enhance your service offerings, improve customer acquisition, and increase revenue in your AI automation business.

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
