# Extractfromfile Gmail Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "subject": "CSRD XHTML Report Audit – Key Findings and Next Steps",
  "body": "Content of the email"
}"
4. **Sticky Note1** `stickyNote` — color: "7", width: "380", height: "680"
5. **Sticky Note** `stickyNote` — color: "7", width: "640", height: "680"
6. **Sticky Note2** `stickyNote` — color: "7", width: "640", height: "680"
7. **HTML from binary** `extractFromFile` — operation: **text**
8. **Email Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
9. **Download Attachment** `gmail` — operation: **get**
10. **Sticky Note3** `stickyNote` — width: "780", height: "540", content: "### 4. Do you need more details?
Find a step-by-step guide in this tutorial
![Guide](https://www.samirsaci.com/content/images/2025/04/temp-2.png)
[🎥 Watch My Tutorial](https://www…[truncated]"
11. **Extract the HTML** `code` — jsCode: "return [
  {
    json: {
      xhtml_content:$input.first().json.data 
    }
  }
];
"
12. **If** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Check the format** `code` — jsCode: "const content = $input.first().json.xhtml_content;

// Helper to extract tags
function extractTags(tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>(.*?)<\\/${tagName}>`, 'g…[truncated]"
14. **AI Agent** `agent` — text: "=Generate an email to the sustainability team summarizing this CSRD XHTML report audit:

{{JSON.stringify($json.audit_results, null, 2)}}

Return the output in the following JSON f…[truncated]", options: "[object Object]", promptType: "define"
15. **Reply** `gmail` — operation: **reply**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the audit of CSRD XHTML report emails. It triggers when an email with "CSRD Reporting" in the subject is received. The workflow downloads the attachment, extracts and processes the XHTML content to check for specific tags and format issues. It uses an AI agent to summarize the audit results into an email, which is then sent back as a reply to the sender.

### Demonstrate
A consultant uses this workflow to automate compliance checks for XHTML reports. It reduces manual review time, ensures consistent auditing, and promptly informs the team of any compliance issues, enhancing efficiency and accuracy.

### Imitate
1. Import the workflow into n8n.
2. Set up Gmail API credentials for email triggers.
3. Connect the OpenAI API for the AI agent.
4. Customize email subject filters and audit criteria.
5. Test with sample XHTML reports to ensure accurate processing.

### Practice
Create a mock XHTML report email, send it to your Gmail, and trigger the workflow. Check the audit summary email for accuracy. Adjust the AI agent's prompt if needed for better results.

### WIIFM
Mastering this workflow allows you to offer automated compliance auditing services, saving clients time and reducing errors. This can lead to increased client satisfaction and new business opportunities in regulatory compliance automation.
  
  ## 🔧 Setup Instructions
  1. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  