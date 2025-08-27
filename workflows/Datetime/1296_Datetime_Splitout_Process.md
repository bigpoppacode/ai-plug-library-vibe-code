# Datetime Splitout Process
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Email Trigger (IMAP)** `emailReadImap` — options: "[object Object]", downloadAttachments: "true"
3. **Sticky Note** `stickyNote` — width: "394.2691415313225", height: "304.36194895591655", content: "## How it works
- monitor postmaster email for DKIM reprots
- unpack report and parse XML
- map and format fields for DB input
	- input into database
	- send notification on DKIM o…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "394.2691415313225", height: "159.80531276753783", content: "## Preparation
This line is responsible for taking data from email and parsing it into JSON understandable by n8n"
5. **Sticky Note2** `stickyNote` — width: "394.2691415313225", height: "316.3177609714967", content: "## Mapping
This line is responsible for treating cases when XML has multiple info for domain. One DMARC report can contain more than one entries.

Last node is responsible for matc…[truncated]"
6. **Sticky Note3** `stickyNote` — width: "394.2691415313225", height: "185.89072080153096", content: "## Date translate
This line is responsible for translating date format into understandable by MySQL/MariaDB

In next node data is being input into MySQL/MariaDB "
7. **Sticky Note4** `stickyNote` — width: "394.2691415313225", height: "320.66532897716223", content: "## Notifications
Last two nodes are responsible for sending notifications in case IF inside DMARC report is reported any issue with SPF or DKIM"
8. **Unzip File** `compression` — configured for its default action.
9. **Extract XML data** `extractFromFile` — operation: **xml**
10. **Parse XML data to JSON** `xml` — options: "[object Object]"
11. **If multiple records to parse** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Split Out For Separate Entries** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "feedback.record"
13. **Rename column for consistency** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
14. **Rename Keys** `renameKeys` — keys: "[object Object]", additionalOptions: "[object Object]"
15. **Map fields for DB input and parse** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Begin format date** `dateTime` — operation: **formatDate**
17. **End date format** `dateTime` — operation: **formatDate**
18. **Input into database** `mySql` — table: `[object Object]`
19. **If issue with DKIM or SPF** `if` — options: "[object Object]", conditions: "[object Object]"
20. **Slack Post Message On Channel** `slack` — text: "=DMARC evaluation failed for {{ $json.domain }} on  {{ $json.mail_count }} mails with disposition:  {{ $json.evaluated_disposition }}. DKIM:  {{ $json.evaluated_dkim }} SPF:  {{ $j…[truncated]", select: "channel", channelId: "[object Object]"
21. **Send Error Notification Email** `emailSend` — text: "DMARC evaluation failed for {{ $json.domain }} on  {{ $json.mail_count }} mails with disposition:  {{ $json.evaluated_disposition }}. DKIM:  {{ $json.evaluated_dkim }} SPF:  {{ $js…[truncated]", options: "[object Object]", subject: "DMARC problem"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This workflow automatically processes DMARC reports received via email. It triggers on incoming emails, extracts and parses DMARC XML reports from attachments, formats the data for database input, and stores it in a MySQL database. If there are issues with DKIM or SPF, it sends notifications via Slack or email.

- **Demonstrate**: A company can use this workflow to monitor email authentication issues. By automating the parsing and storing of DMARC reports, they can quickly identify and address potential email spoofing or phishing threats to maintain secure communication.

- **Imitate**: To replicate this workflow: 1) Import it into your n8n instance. 2) Connect your email and MySQL accounts. 3) Set up a trigger for your postmaster email. 4) Ensure your MySQL database has the appropriate structure. 5) Test the workflow with sample DMARC reports.

- **Practice**: Set up a test email account and send a DMARC report to it. Run the workflow to ensure it correctly parses and stores the data. Modify some report values to see how the workflow handles different scenarios and notifications.

- **WIIFM**: Mastering this workflow enables you to offer a valuable service to businesses concerned with email security. By ensuring their email systems are properly authenticated, you can help protect them from phishing attacks, enhancing your reputation and expanding your client base in the automation and cybersecurity market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** imap, mySql, slackOAuth2Api.
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
  