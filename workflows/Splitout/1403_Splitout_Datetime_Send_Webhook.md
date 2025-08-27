# Splitout Datetime Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Sticky Note** `stickyNote` — width: "395.06030313757196", height: "388.5681601162638", content: "## Obsidian to Email Overview

This workflow allows you to send your Obsidian notes (including attachments) via email, with YAML metadata for customization.

### Key Features:
- Tr…[truncated]"
3. **Sticky Note1** `stickyNote` — color: "3", width: "398.9156829431131", height: "447.41755555994735"
4. **Sticky Note3** `stickyNote` — color: "4", width: "493.7005132824585", height: "874.8910456745886"
5. **Sticky Note2** `stickyNote` — color: "6", width: "410.45568358442864", height: "866.9256684369553"
6. **Sticky Note4** `stickyNote` — color: "5", height: "264.2421600929918", content: "![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/512px-2023_Obsidian_logo.svg.png)"
7. **Sticky Note5** `stickyNote` — color: "5", width: "457.22695080436733", height: "863.6667893577376"
8. **Webhook** `webhook` — method: **POST**, path: `/e634d721-48b0-4985-8a57-62ca4c7b3cfb`
9. **Check if attachments exist** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Separate attachment data** `splitOut` — options: "[object Object]", fieldToSplitOut: "body.attachments"
11. **Check if it is a test** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Fix Base64 string** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
13. **Test Succesfull** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "=Test succesfull
"
14. **Email Without Attachments** `gmail` — sendTo: "={{ $json.body.to }}", message: "={{ $json.body.content }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of sending Obsidian notes via email. It uses a webhook to trigger the workflow when notes are sent from Obsidian. The workflow checks for attachments, processes them if present, and sends the note as an email with metadata from YAML frontmatter. It handles both emails with and without attachments, ensuring the note's content and any additional files are sent correctly.

**Demonstrate:**  
A business owner could use this workflow to share meeting notes or project updates stored in Obsidian with team members via email, ensuring all relevant information, including attached files, is distributed efficiently.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up the webhook URL in the Obsidian Post Webhook plugin.  
3. Configure the email node with your email account credentials.  
4. Test by sending a note from Obsidian with YAML metadata for email details.  
5. Verify the email is sent with the correct content and attachments.

**Practice:**  
Create a simple note in Obsidian with a few lines of text and an attachment. Use the YAML frontmatter to specify the email recipient. Send the note using the workflow and check if it arrives correctly formatted and with the attachment.

**WIIFM:**  
Mastering this workflow allows you to offer a unique service of integrating note-taking with email automation. This can save clients time, streamline communication, and enhance productivity, providing a valuable service that can lead to increased client satisfaction and potential new business opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2.
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
