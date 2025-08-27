# Filter Rssfeedread Monitor Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "332.0284684971131", height: "926.523360092614", content: "![Shodan](https://i.imgur.com/PcOuvAL.png)
## Workflow Overview
This n8n workflow is designed to streamline security oversight by fetching advisories from Palo Alto's feed and filt…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "419.37209302325573", height: "577.9223982165106", content: "![Shodan](https://i.imgur.com/weKPN2E.png)
## Get Palo Alto security advisories
Adaptable and efficient, this segment of the workflow retrieves Palo Alto security advisories direct…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "461.89918009735027", height: "893.2712326436663", content: "![n8n](https://i.imgur.com/lKnBNnH.png)
## Query Company Email Directory
The workflow includes a sample node setup that queries a company email directory, allowing for dynamic dist…[truncated]"
6. **Sticky Note3** `stickyNote` — width: "324.2540832882642", height: "639.8357317519218", content: "![gmail](https://i.imgur.com/f6f6my0.png)
## Email advisory information to your team
Once advisories are filtered and prepared, this final node uses Gmail to disseminate the inform…[truncated]"
7. **Sticky Note4** `stickyNote` — width: "552.9069767441861", height: "844.9721583936011", content: "![Jira](https://i.imgur.com/Ko72Qxa.png)
## Filter advisories based on Palo Alto Products used in your organization 
This node enhances specificity by filtering advisories based on…[truncated]"
8. **Sticky Note5** `stickyNote` — width: "382.81395348837174", height: "700.2899123297333", content: "![n8n](https://i.imgur.com/lKnBNnH.png)
## Deduplicate Advisories
### Filter advisories based on date 
To maintain accuracy and avoid redundancy, this n8n node deduplicates advisor…[truncated]"
9. **Run workflow every 24 hours at 1am** `scheduleTrigger` — rule: "[object Object]"
10. **Get Palo Alto security advisories** `rssFeedRead` — url: `https://security.paloaltonetworks.com/rss.xml`
11. **Extract info** `set` — values: "[object Object]", options: "[object Object]"
12. **Check if posted in last 24 hours** `if` — conditions: "[object Object]"
13. **GlobalProtect advisory?** `filter` — conditions: "[object Object]"
14. **Traps advisory?** `filter` — conditions: "[object Object]"
15. **Ignore, stale advisory** `noOp` — configured for its default action.
16. **Create Jira issue** `jira` — project: "[object Object]", summary: "={{ $json.title.substring(14) }}", issueType: "[object Object]"
17. **Get customers** `n8nTrainingCustomerDatastore` — operation: **getAllPeople**
18. **Email customers** `gmail` — sendTo: "={{ $json.email }}", message: "=Dear {{ $json.name.split(' ')[0] }},

We wanted to let you know of a new security advisory:

{{ $('GlobalProtect advisory?').item.json.title }}
{{ $('GlobalProtect advisory?').ite…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates security monitoring by fetching security advisories from Palo Alto's RSS feed every 24 hours. It filters advisories based on relevance to your organization, deduplicates them to avoid redundancy, and creates Jira issues for critical advisories. Relevant advisories are then emailed to your team using Gmail, ensuring timely and targeted security updates.

**Demonstrate:**  
A security operations team could use this workflow to stay updated on critical vulnerabilities affecting their Palo Alto products, ensuring they can respond quickly to security threats.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your RSS feed, Jira, and Gmail accounts.
3. Schedule the workflow to run daily.
4. Adjust filters to match your organization's security products.
5. Test by simulating advisories to ensure emails and Jira issues are created.

**Practice:**  
Create a test advisory feed with mock advisories. Run the workflow to see how it processes advisories, creates Jira issues, and sends emails. Adjust filters and test the impact on advisory processing.

**WIIFM:**  
Mastering this workflow allows you to offer advanced security monitoring services, ensuring clients are proactive in addressing vulnerabilities. This can lead to increased trust and higher engagement, positioning you as a valuable partner in their security strategy.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** jiraSoftwareCloudApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  