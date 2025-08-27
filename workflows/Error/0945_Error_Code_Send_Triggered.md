# Error Code Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Error Trigger**.
  2. **Error Trigger** `errorTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
"diagnosis":"",
"cause":"",
"resolution":""
}"
5. **Sticky Note** `stickyNote` — color: "3", height: "380", content: "# SET YOUR EMAILS"
6. **Sticky Note1** `stickyNote` — color: "3", width: "280", height: "380"
7. **SET EMAIL** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Get Failed Exec** `n8n` — resource: **execution**, operation: **get**
9. **Remove Manual Exec** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Extract Error Details** `code` — jsCode: "// 1) Grab your full execution JSON
const exec = items[0].json;

// 2) Build execution‐level metadata
const meta = {
  executionId:    exec.id,
  finished:       exec.finished,
  m…[truncated]"
11. **Error Solver Agent** `agent` — text: "=Can you please help me with this error that occured in my n8n workflow? {{ JSON.stringify($json) }}", options: "[object Object]", promptType: "define"
12. **Set Diagnosis Fields** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Generate Email** `code` — jsCode: "// 1. Pull in your error payload
const rawInput = items[0].json;
const parsed = typeof rawInput === 'string' ? JSON.parse(rawInput) : rawInput;
const errorArray = Array.isArray(par…[truncated]"
14. **Send Gmail** `gmail` — sendTo: "={{ $('SET EMAIL').item.json.TO }}", message: "={{ $json.html }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automatically handles errors in n8n workflows. When an error occurs, it retrieves the execution details, uses an AI model to analyze the error, and generates a structured report. This report is then emailed to a specified address, detailing the diagnosis, cause, and resolution of the error.

**Demonstrate**  
A developer can use this workflow to automate error management in their n8n instances, ensuring they receive detailed error reports via email, helping them quickly address and resolve issues without manual intervention.

**Imitate**  
1. Import the workflow into n8n.  
2. Configure your email settings in the "SET EMAIL" node.  
3. Ensure your OpenAI and Gmail credentials are set up.  
4. Activate the workflow to automatically handle errors in your n8n environment.  

**Practice**  
Create a simple n8n workflow with a known error. Trigger the error to see how this workflow captures, analyzes, and emails a report about the error. Adjust email settings and observe the changes.

**WIIFM**  
Mastering this workflow allows you to offer advanced error management services to clients, enhancing your automation offerings. It ensures reliability and quick troubleshooting, leading to improved client satisfaction and potential income from maintenance services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, n8nApi, gmailOAuth2.
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
  