# Summarize Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×3, jira×2, agent.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Jira Trigger**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Jira Trigger** `jiraTrigger` — events: "jira:issue_updated", additionalFields: "[object Object]"
4. **Simple Memory** `memoryBufferWindow` — sessionKey: "47", sessionIdType: "customKey"
5. **Sticky Note** `stickyNote` — width: "380", height: "580", content: "## Epic Done?
This Node is Triggered on any issue change in Jira. However it only triggers the automation when the Epic status is changed to **Done**"
6. **Sticky Note1** `stickyNote` — color: "5", width: "820", height: "580"
7. **Sticky Note2** `stickyNote` — color: "3", width: "540", height: "580"
8. **If** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Jira Get All Issues** `jira` — operation: **getAll**
10. **Jira Get All Comments** `jira` — resource: **issueComment**, operation: **getAll**
11. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Summarize** `summarize` — options: "[object Object]", fieldsToSplitBy: "EpicName, EpicStatus, Title, Description", fieldsToSummarize: "[object Object]"
13. **AI Agent** `agent` — text: "=comments = {{ $json.concatenated_Comment }}
description = {{ $json.Description }}
title = {{ $json.Title }}
status = {{ $json.EpicStatus }}
epic_name = {{ $json.EpicName }}
", options: "[object Object]", promptType: "define"
14. **Google Docs** `googleDocs` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the creation of a "Lessons Learned" report for completed Jira epics. It triggers when an epic's status changes to "Done," retrieves all related issues and comments, summarizes this data using an AI agent, and generates a report formatted in Markdown. The report is then sent to Google Docs for easy sharing and further editing.

**Demonstrate:**  
A project manager could use this workflow to automatically generate retrospective reports on completed projects, helping teams to document insights and improve future processes without manual effort.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Jira and Google Docs accounts.
3. Configure the Jira trigger for your specific project.
4. Customize the AI prompt to match your reporting needs.
5. Test the workflow with a completed epic to ensure it generates the desired report.

**Practice:**  
Create a test Jira epic and mark it as "Done." Observe how the workflow processes the data, generates a report, and uploads it to Google Docs. Modify the epic content and test again to see how changes are reflected in the report.

**WIIFM:**  
Mastering this workflow allows you to offer automated project documentation services, saving clients time and ensuring consistent reporting quality. This can enhance your service offerings and increase client satisfaction in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** jiraSoftwareCloudApi, openAiApi, googleDocsOAuth2Api.

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
