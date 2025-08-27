# Code Readpdf Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Sticky Note** `stickyNote` — width: "444.034812880766", height: "599.5274151436035", content: "## Send specific PDF attachments from Gmail to Google Drive using OpenAI

_**DISCLAIMER**: You may have varying success when using this workflow so be prepared to validate the corr…[truncated]"
3. **On email received** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
4. **Note5** `stickyNote` — width: "259.0890718059702", height: "607.9684549079709", content: "[redacted]"
5. **Configure** `set` — values: "[object Object]", options: "[object Object]"
6. **Has attachments?** `if` — conditions: "[object Object]"
7. **Iterate over email attachments** `code` — jsCode: "// https://community.n8n.io/t/iterating-over-email-attachments/13588/3
let results = [];

for (const item of $input.all()) {
 for (key of Object.keys(item.binary)) {
 results.push(…[truncated]"
8. **There are no attachments** `noOp` — configured for its default action.
9. **Is PDF** `if` — conditions: "[object Object]"
10. **Read PDF** `readPDF` — configured for its default action.
11. **Not a PDF** `noOp` — configured for its default action.
12. **Is text within token limit?** `if` — conditions: "[object Object]"
13. **OpenAI matches PDF textual content** `openAi` — prompt: "=Does this PDF file look like a {{ $("Configure").first().json["Match on"] }}? Return "true" if it is a {{ $("Configure").first().json["Match on"] }} and "false" if not. Only reply…[truncated]"
14. **Ignore large PDFs** `noOp` — configured for its default action.
15. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
16. **Is matched** `if` — conditions: "[object Object]"
17. **This is a matched PDF** `noOp` — configured for its default action.
18. **This is not a matched PDF** `noOp` — configured for its default action.
19. **Upload file to folder** `googleDrive` — name: "={{ $binary.data.fileName }}", options: "[object Object]", parents: "={{ $('Configure').first().json["Google Drive folder to upload matched PDFs"].split("/").at(-1) }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow automates the process of filtering and saving specific PDF attachments from Gmail to Google Drive. When an email is received, it checks for attachments and identifies PDFs. The workflow reads the text in each PDF, sending it to OpenAI to determine if it matches a specified keyword (e.g., "payslip"). If a match is found, the PDF is saved to a predetermined Google Drive folder.

**Demonstrate**: A business owner might use this workflow to automatically save all invoices received via email to a specific Google Drive folder, reducing manual sorting and filing.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect Gmail and Google Drive accounts.
3. Set the keyword in the "Configure" node to match your needs.
4. Test with sample emails containing PDF attachments.
5. Confirm PDFs are correctly saved to the desired folder.

**Practice**: Create a test Gmail account and send an email with a PDF attachment to it. Run the workflow to see if the attachment is correctly saved to Google Drive based on your keyword settings.

**WIIFM**: Mastering this workflow allows you to offer automated document management solutions, increasing efficiency for businesses and potentially generating additional income through consulting or service packages.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, gmailOAuth2.
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
  