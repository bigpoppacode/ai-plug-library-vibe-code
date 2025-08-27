# Removeduplicates Converttofile Automation Webhook
## 🚀 What It Does
Automates a flow using httpRequest×4, stickyNote×3, set×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Authentication Request Form**.
2. **Sticky Note** `stickyNote` — color: "4", width: "480", height: "620"
3. **Sticky Note1** `stickyNote` — color: "5", width: "680", height: "540"
4. **Sticky Note2** `stickyNote` — width: "340", height: "340", content: "## SMTP2Go API
API Documentation [Link](https://developers.smtp2go.com/docs/send-an-email)"
5. **Authentication Request Form** `formTrigger` — options: "[object Object]", formTitle: "Request Sign-In CSV", formFields: "[object Object]"
6. **Set Date and Form Variables** `set` — options: "[object Object]", assignments: "[object Object]"
7. **GET Events - Login Successful** `httpRequest` — url: `=https://us-central1-the-byway-248217.cloudfunctions.net/reportApi/api/v1/reports/events?eventType=login.success&start={{ $json['Last 24 Hours'] }}&timeSort=asc&size=10000&scroll=5…[truncated]`
8. **GET Events - OAuth Authentication** `httpRequest` — url: `=https://us-central1-the-byway-248217.cloudfunctions.net/reportApi/api/v1/reports/events?eventType=oauth.granted.permission&start={{ $json['Last 24 Hours'] }}&timeSort=asc&size=100…[truncated]`
9. **GET Events - Office365 Shell WCSS** `httpRequest` — url: `=https://us-central1-the-byway-248217.cloudfunctions.net/reportApi/api/v1/reports/events?eventType=ms.shell.login.success
&start={{ $json['Last 24 Hours'] }}&timeSort=asc&size=1000…[truncated]`
10. **Combine all Authentication Events** `merge` — numberInputs: "3"
11. **Filter IP Information** `set` — include: "selected", options: "[object Object]", assignments: "[object Object]"
12. **Remove Duplicate IPs** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "ip"
13. **Convert to CSV** `convertToFile` — options: "[object Object]"
14. **Convert CSV to Base64** `moveBinaryData` — options: "[object Object]", setAllData: "false"
15. **Send Email Upon Completion (SMTP2Go)** `httpRequest` — method: **POST**, url: `https://api.smtp2go.com/v3/email/send`

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates the collection and processing of login event data. It begins with a form that gathers API credentials and user information. The workflow retrieves login event data from three sources over the past 24 hours, merges the data, filters it to include relevant IP information, removes duplicate IPs, and converts the processed data to a CSV file. Finally, the CSV is encoded to Base64 and emailed to the user using SMTP2Go.

### Demonstrate
A security consultant could use this workflow to monitor unauthorized access attempts by analyzing login events from multiple services, helping clients improve their security posture.

### Imitate
1. Import the workflow into n8n.
2. Set up the form trigger to collect API keys and user info.
3. Configure HTTP requests to fetch login events.
4. Merge, filter, and deduplicate the data.
5. Convert the data to CSV, encode it, and email it using SMTP2Go.

### Practice
Create a dummy form to simulate user input and test the workflow with mock API responses. Observe how the workflow processes and emails the data, ensuring it handles multiple data sources and filters accurately.

### WIIFM
Mastering this workflow enables you to offer security monitoring services, providing clients with insights into access patterns and potential threats. This capability can expand your service offerings, attract new clients, and increase revenue in an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth.
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
