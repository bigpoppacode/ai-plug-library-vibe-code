# Mautic Gmail Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
3. **Sticky Note** `stickyNote` — content: "## Step 1
Set your email address and unsubscribe message in the edit fields node"
4. **Sticky Note1** `stickyNote` — content: "## Step 2
Set your credentials in the Gmail trigger"
5. **Sticky Note2** `stickyNote` — content: "## Step 3
Set credentials in the mautic nodes"
6. **Sticky Note3** `stickyNote` — content: "## Step 4
Edit segments (add or remove) in the mautic nodes, optionally add to do not contact list."
7. **Sticky Note4** `stickyNote` — width: "237.7703390037576", height: "194.55974544175768", content: "## Unsubscribe Mautic contacts from automated unsubscribe emails"
8. **Edit Fields** `set` — fields: "[object Object]", options: "[object Object]"
9. **Is automated unsubscribe?** `if` — conditions: "[object Object]"
10. **Extract Email from 'From' Field** `code` — mode: "runOnceForEachItem", jsCode: "var fromField = $input.item.json.From;
var extractedEmail;
if (fromField.includes('<') && fromField.includes('>')) {
    // From field is wrapped in carets
    var regex = /[^< ]+(…[truncated]"
11. **Extract Unique Email Addresses** `code` — jsCode: "// Access the input data using all() method
const inputData = $input.all();
const uniqueEmailsSet = new Set();

// Loop through each item, extract the email, and add it to the Set
…[truncated]"
12. **Get Mautic Contact ID from Email Address** `mautic` — operation: **getAll**
13. **If Contact Exists in Mautic** `if` — conditions: "[object Object]"
14. **Add to unsubscribed segment** `mautic` — resource: **contactSegment**
15. **Remove newsletter segment** `mautic` — resource: **contactSegment**, operation: **remove**
16. **Reply Unsubscribe Message** `gmail` — operation: **reply**
17. **Add to Do Not Contact List** `mautic` — operation: **editDoNotContactList**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of handling unsubscribe requests from emails. It starts by using a Gmail trigger to detect incoming emails. It checks if the email is an automated unsubscribe request and extracts the 'From' email address. The workflow then verifies if this email exists in the Mautic CRM system. If the contact is found, it updates the contact's status by adding them to an unsubscribed segment, removing them from a newsletter segment, and optionally adding them to a do-not-contact list. Finally, it sends a confirmation email back to the requester.

### Demonstrate
A business owner could use this workflow to automatically manage email unsubscribe requests, ensuring their mailing lists are up-to-date and compliant with GDPR or CAN-SPAM regulations, thereby improving email deliverability and customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set your email and unsubscribe message in the Edit Fields node.
3. Configure Gmail and Mautic credentials in their respective nodes.
4. Customize the Mautic segments as needed.
5. Test the workflow by sending an unsubscribe request email.

### Practice
Create a test Gmail account and Mautic instance. Send test emails to the Gmail account to trigger the workflow, and observe how the workflow updates contact segments in Mautic. Modify the segments and test different unsubscribe messages.

### WIIFM
Mastering this workflow allows you to offer automated email management services to clients, ensuring they maintain clean and compliant mailing lists. This enhances customer trust, reduces manual workload, and can be a valuable service offering in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, mauticOAuth2Api.
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
  