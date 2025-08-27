# Webhook Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Webhook** `webhook` — method: **POST**, path: `/cded3af3-31df-47c2-a826-ff84eb4a41df`
3. **Sticky Note** `stickyNote` — width: "440", height: "880", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — width: "260", height: "1000", content: "[redacted]"
5. **Create folder** `googleDrive` — resource: **folder**
6. **Configure** `set` — values: "[object Object]", options: "[object Object]"
7. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
  "status": "Accepted",
  "driveFolderUrl": "{{ "https://drive.google.com/drive/folders/" + $json.id }}"
}"
8. **Get emails with attachments** `gmail` — operation: **getAll**
9. **Optional filter for emails** `filter` — options: "[object Object]", conditions: "[object Object]"
10. **Iterate over email attachments** `code` — jsCode: "// https://community.n8n.io/t/iterating-over-email-attachments/13588/3
let results = [];

for (const item of $input.all()) {
  console.log(item);
  for (const key of Object.keys(it…[truncated]"
11. **Is attachment a PDF?** `if` — conditions: "[object Object]"
12. **Read PDF email attachments** `readPDF` — configured for its default action.
13. **Not a PDF** `noOp` — configured for its default action.
14. **Is text within token limit?** `if` — conditions: "[object Object]"
15. **OpenAI** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
16. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
17. **Is matched** `if` — conditions: "[object Object]"
18. **Upload file to folder** `googleDrive` — name: "={{ $binary.data.fileName }}", options: "[object Object]", parents: "={{ $('Create folder').first().json.id }}"
19. **Send email with invoices?** `if` — options: "[object Object]", conditions: "[object Object]"
20. **Aggregate attachments** `code` — jsCode: "// "items" is the array coming from the previous node (14 items)
const merged = { json: {}, binary: {} };

for (const item of $input.all()) {
  const data = {
    [item.binary.data…[truncated]"
21. **Send to my accountant** `gmail` — sendTo: "test@example.com", message: "Hello, here are my invoices and receipts.", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This workflow automates the process of organizing and classifying PDF email attachments using AI and uploading them to Google Drive. It starts with a webhook that triggers the workflow, retrieves emails with attachments from Gmail, checks if the attachments are PDFs, and uses OpenAI to classify them. If they match a specified category, they are uploaded to a Google Drive folder. Optionally, it can send the collected PDFs via email.

- **Demonstrate**: A consultant might use this workflow to automatically organize client invoices received via email, ensuring only relevant documents are stored in a specific Google Drive folder, streamlining document management and retrieval.

- **Imitate**: To apply this workflow, set up a webhook to receive email data, configure Gmail to fetch emails with attachments, and connect OpenAI to classify PDFs. Create a Google Drive folder for uploads and set conditions for document classification. Test the workflow with sample data.

- **Practice**: Create a test email with various attachments, including PDFs, and run the workflow. Check if the PDFs are correctly classified and uploaded to Google Drive. Adjust the classification criteria and retest.

- **WIIFM**: Mastering this workflow allows you to offer automated document management services, enhancing efficiency and accuracy for clients. This can lead to increased revenue through value-added services and improved client satisfaction in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, httpHeaderAuth, gmailOAuth2.
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
