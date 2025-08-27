# Telegram Splitout Automation Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "5", width: "819.6790739248162", height: "212.7465225154412"
4. **Sticky Note4** `stickyNote` — width: "858.0344141951173", height: "279.85434264975174", content: "## Delete All Webhooks"
5. **Sticky Note5** `stickyNote` — width: "848.6550531504272", height: "283.2561904154995", content: "## Register Webhooks"
6. **Sticky Note6** `stickyNote` — width: "858.0344141951173", height: "279.85434264975174", content: "## Handle Github Event"
7. **Notify Slack** `slack` — text: "=[Github Event] {{ $json.date }}: {{ $json.author }} committed to {{ $json.repo }}!

Description:
```{{ $json.description }}```

Modified Files:
```{{ $json.modified_files }}```
{{…[truncated]", select: "channel", channelId: "[object Object]"
8. **Sticky Note7** `stickyNote` — color: "4", width: "520.7636244130189", height: "381.80326328628485"
9. **Sticky Note8** `stickyNote` — color: "4", width: "821.1807025349485", height: "693.4508863847356"
10. **Webhook Trigger** `webhook` — method: **POST**, path: `/e90c3560-2c95-4e7e-9df3-2d084d7e8fde`
11. **Repos to Monitor1** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "repos":[
     "https://github.com/arose26/testrepo",
    "https://github.com/arose26/testrepo2",
    "https://github.com/arose26/testrepo3"
    
  ]
}
"
12. **Repos to Monitor** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "repos":[
    "https://github.com/arose26/testrepo2",
    "https://github.com/arose26/testrepo3"
    
  ]
}
"
13. **Fields** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "repos"
15. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "repos"
16. **Telegram** `telegram` — text: "=*[Github Event] @* `{{ $json.date }}`: 
`{{ $json.author }}` committed to `{{ $json.repo }}`!

Description:
```{{ $json.description }}```

Modified Files:
```{{ $json.modified_fil…[truncated]", replyMarkup: "inlineKeyboard", additionalFields: "[object Object]"
17. **Hook URL** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Register Github Webhook** `httpRequest` — method: **POST**, url: `={{$json.repos.replace('https://github.com','https://api.github.com/repos')}}/hooks`
19. **Get Existing Hook** `httpRequest` — url: `={{ $json.url }}`
20. **Delete Github Webhook** `httpRequest` — method: **DELETE**, url: `={{ $json.url }}`

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the monitoring of multiple GitHub repositories using webhooks. It registers webhooks for specified repositories to listen for events like commits and pull requests. When a GitHub event occurs, it sends a notification to Slack and Telegram containing details about the commit, such as the author, date, description, and modified files. This setup allows for efficient and real-time tracking of repository changes without requiring manual polling.

**Demonstrate:** A software development company could use this workflow to stay updated on code changes across multiple projects, ensuring that team members are promptly informed of updates and can respond quickly to any issues.

**Imitate:** 
1. Import the workflow into n8n.
2. Add your GitHub repos to the "Repos to Monitor" node.
3. Set up GitHub credentials and ensure webhook URLs are correct.
4. Connect Slack and Telegram accounts.
5. Test the workflow by making a commit to a monitored repo.

**Practice:** Create a test GitHub repository and add it to the workflow. Make a few commits and observe how notifications are sent to Slack and Telegram. Modify the notification message format and test again.

**WIIFM:** Mastering this workflow enables you to offer automated monitoring services for development teams, enhancing their productivity and communication. This can lead to new business opportunities and increased revenue through managed services or consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, telegramApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
