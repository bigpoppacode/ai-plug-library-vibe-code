# Aggregate Gmail Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Sticky Note** `stickyNote` — color: "4", width: "420.4803040774015", height: "240.57943708322733"
3. **Sticky Note1** `stickyNote` — width: "421.0932411886662", height: "257.42916378714597", content: "## ⚠️ Note

1. Complete video guide for this workflow is available [on my YouTube](https://youtu.be/a8Dhj3Zh9vQ). 
2. Remember to add your credentials and configure nodes (covered …[truncated]"
4. **Sticky Note2** `stickyNote` — width: "238.4602598584674", height: "348.5873725349161", content: "### Gmail Trigger
Receive data from Gmail about new incoming message. 

⚠️ Set polling interval according to your needs."
5. **Sticky Note4** `stickyNote` — width: "241.53974014153226", height: "319.3323098457962", content: "###










### JSON schema
Edit JSON schema and label names according to your needs.

⚠️ **Label names in system prompt and JSON schema should be the same.**"
6. **Sticky Note5** `stickyNote` — width: "226.14233872620645", height: "347.0476323933831", content: "### Merge labels
Combine labels retrieved from Gmail account and assigned by AI together."
7. **Sticky Note6** `stickyNote` — width: "452.48413953150185", height: "347.0476323933831", content: "### Aggregarte labels and add to message
Create array of label IDs and add to the desired email message in Gmail."
8. **Sticky Note7** `stickyNote` — width: "238.4602598584674", height: "348.5873725349161", content: "### Get message content
Based on Gmail message ID retrieve body content of the email and pass it to AI chain."
9. **Sticky Note8** `stickyNote` — width: "378.57661273793565", height: "348.5873725349161", content: "### Assign labels
Let the AI decide which labels suit the best content of the message.

⚠️ **Remember to edit system prompt** - modify label names and instructions according to you…[truncated]"
10. **Gmail trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
11. **OpenAI Chat** `lmChatOpenAi` — model: `[object Object]`
12. **JSON Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "labels": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["Inquiry", "Partnership", "Notification"]…[truncated]"
13. **Get message content** `gmail` — operation: **get**
14. **Assign labels for message** `chainLlm` — text: "={{ $('Gmail trigger').item.json.text }}", promptType: "define", hasOutputParser: "true"
15. **Set label values** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Get all labels** `gmail` — resource: **label**
17. **Split out assigned labels** `splitOut` — options: "[object Object]", fieldToSplitOut: "labels"
18. **Merge corresponding labels** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
19. **Aggregate label IDs** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
20. **Add labels to message** `gmail` — operation: **addLabels**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates email management by applying AI-driven labels to Gmail messages based on their content. It starts by detecting new emails, retrieving their content, and using an AI model to determine suitable labels like "Partnership," "Inquiry," or "Notification." These labels are then added to the email in Gmail, helping users organize and prioritize messages efficiently.

**Demonstrate:** A business owner could use this workflow to automatically categorize incoming emails, saving time on sorting and ensuring important messages are addressed promptly. For example, partnership inquiries can be identified and prioritized without manual intervention.

**Imitate:** 
1. Import the workflow into your n8n instance.
2. Connect your Gmail and OpenAI credentials.
3. Adjust label names in the JSON schema and system prompt.
4. Set the Gmail trigger to your preferred polling interval.
5. Test the workflow with sample emails to ensure correct label assignment.

**Practice:** Create a test Gmail account, send various emails with different subjects, and observe how the workflow labels them. Adjust the AI prompt and labels to better suit your needs and retest.

**WIIFM:** Mastering this workflow can enhance your ability to offer AI-driven email management solutions to clients, increasing efficiency and organization. This skill is valuable for businesses seeking to optimize communication workflows, leading to potential income generation and customer satisfaction in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, openAiApi.
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
  