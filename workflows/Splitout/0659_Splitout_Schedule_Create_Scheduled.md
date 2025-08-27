# Splitout Schedule Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
4. **Everyday @ 9am** `scheduleTrigger` — rule: "[object Object]"
5. **Everyday @ 8.30am** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note** `stickyNote` — color: "7", width: "700", height: "480"
7. **Sticky Note1** `stickyNote` — color: "7", width: "1000", height: "720"
8. **Sticky Note2** `stickyNote` — color: "7", width: "520", height: "480"
9. **Sticky Note3** `stickyNote` — color: "7", width: "620", height: "500"
10. **Sticky Note4** `stickyNote` — color: "7", width: "640", height: "500"
11. **Sticky Note5** `stickyNote` — color: "7", width: "460", height: "200"
12. **Sticky Note6** `stickyNote` — width: "460", height: "900", content: "## Try It Out!

### This n8n templates demonstrates how to automatically ingest a source of leads at regular intervals and take advantage of n8n's remove duplicates node to simplif…[truncated]"
13. **Sticky Note7** `stickyNote` — width: "320", height: "120", content: "### Add your company details here!
Company details are added in the system prompt to help the AI determine eligibility. The more details the better!"
14. **Get New Eligible Grants Today** `airtable` — operation: **search**, table: `[object Object]`
15. **AI Grants since Yesterday** `httpRequest` — method: **POST**, url: `https://apply07.grants.gov/grantsws/rest/opportunities/search`
16. **Generate Email** `html` — html: "<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:s…[truncated]"
17. **Grants to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "oppHits"
18. **Get Subscribers** `airtable` — operation: **search**, table: `[object Object]`
19. **Only New Grants** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
20. **Send Subscriber Email** `gmail` — sendTo: "={{ $json.Email }}", message: "={{ $('Generate Email').first().json.html }}", options: "[object Object]"
21. **Get Grant Details** `httpRequest` — method: **POST**, url: `https://apply07.grants.gov/grantsws/rest/opportunity/details`
22. **Summarize Synopsis** `informationExtractor` — text: "=Agency: {{ $json.synopsis.agencyName }}
Title: {{ $json.opportunityTitle }}
Synopsis: {{ $json.synopsis.synopsisDesc }}", options: "[object Object]", schemaType: "manual"
23. **Eligibility Factors** `informationExtractor` — text: "=Agency: {{  $json.synopsis.agencyName }}
Title: {{ $json.opportunityTitle }}
Synopsis: {{ $json.synopsis.synopsisDesc }}
Eligibility: {{ $json.synopsis.applicantEligibilityDesc }}", options: "[object Object]", schemaType: "manual"
24. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
25. **Save to Tracker** `airtable` — operation: **create**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of identifying and notifying about new AI-related grants. It fetches grants data daily, filters out already processed ones, analyzes new entries for eligibility using AI, and then sends a summary email to subscribers. The workflow ensures that only relevant and new opportunities are communicated to the subscribers, saving time and improving the efficiency of tracking potential funding sources.

**Demonstrate:**  
A business owner looking for AI funding opportunities could use this workflow to receive daily updates on new grants, ensuring they never miss a chance to apply for funding that could support their projects.

**Imitate:**  
1. Set up an n8n account and import the workflow.
2. Connect your Airtable and email services.
3. Adjust the schedule triggers as needed.
4. Customize the email template with your branding.
5. Test the workflow with sample data to ensure it functions correctly.

**Practice:**  
Create a test Airtable with dummy grant data. Run the workflow to see how it filters, processes, and emails the grant information. Try adjusting the eligibility criteria to see how it affects the processed results.

**WIIFM:**  
Mastering this workflow enables you to offer a valuable service to clients seeking funding opportunities, enhancing your portfolio as an automation consultant. It can lead to increased client satisfaction and potentially higher revenue through service packages that include ongoing grant tracking and notification.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, airtableTokenApi, gmailOAuth2.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
5. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
