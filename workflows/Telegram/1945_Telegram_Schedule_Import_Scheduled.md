# Telegram Schedule Import Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×4, telegram, filter.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — color: "5", content: "### Get Github Issues HTTP Request 
- Edit the OWNER and REPO NAME in the respective fields
- The request is configured with query parameters of *state*, *since* and *labels*"
3. **Sticky Note1** `stickyNote` — color: "3", width: "180", content: "### Extract Fields
Extract fields like title, comments, created_at, etc from the github api response"
4. **Sticky Note2** `stickyNote` — color: "3", width: "180", content: "### Filter on Fields
Filter issues based on number of comments"
5. **Sticky Note3** `stickyNote` — color: "5", width: "200", height: "280"
6. **Run every 10 minutes** `scheduleTrigger` — rule: "[object Object]"
7. **Get Github Issues** `github` — resource: **repository**
8. **Map title, url, created, comments** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Check for comments** `filter` — options: "[object Object]", conditions: "[object Object]"
10. **Send Message to @user** `telegram` — text: "=New Issue:  {{ $json.title }} [Link]({{ $json.html_url }})", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of monitoring GitHub issues. It checks a specified repository every 10 minutes for new issues labeled as "Bug." The workflow extracts relevant fields like title and URL from each issue, then filters them based on the number of comments. If an issue has less than five comments, it sends a notification to a Telegram user with the issue's title and link, helping users stay updated on important issues without manually checking GitHub.

### Demonstrate
A developer could use this workflow to keep track of critical bug reports in their repository. By receiving Telegram alerts for issues with fewer than five comments, they can quickly address these bugs before they escalate, improving software quality and user satisfaction.

### Imitate
1. Import the workflow to n8n.
2. Set up GitHub and Telegram credentials.
3. Edit the GitHub node with your repository details.
4. Configure the Telegram node with your bot token and user ID.
5. Activate the workflow to start monitoring issues.

### Practice
Create a test repository on GitHub and add issues labeled "Bug." Run the workflow to see how it filters and sends Telegram alerts for issues with fewer than five comments. Adjust the comment filter to observe different results.

### WIIFM
Mastering this workflow can help you offer monitoring services to software teams, ensuring they remain aware of critical bugs. This can enhance your service offerings in an AI automation business, leading to new client opportunities and increased revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, githubApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
