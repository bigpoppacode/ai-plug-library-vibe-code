# GitLab Code Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **GitLab Trigger**.
  2. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "RiskLevel": {
      "type": "string",
      "description": "Overall risk assessment of the changes: High/Medium/Low."
    },
    "Summa…[truncated]"
4. **Anthropic Chat Model** `lmChatAnthropic` — model: `claude-3-5-haiku-20241022`
5. **Anthropic Chat Model1** `lmChatAnthropic` — model: `claude-3-5-haiku-20241022`
6. **Sticky Note1** `stickyNote` — width: "220", height: "360", content: "- Triggers workflow when a merge request (MR) is created or updated.  

- Add GitLab credentials. Select merge_requests event."
7. **GitLab Trigger** `gitlabTrigger` — owner: "vishalkumar1", events: "merge_requests", repository: "istorefront_server"
8. **Sticky Note2** `stickyNote` — height: "320", content: "[redacted]"
9. **Sticky Note3** `stickyNote` — width: "220", height: "320", content: "- Ensures that MR contains changes before proceeding.

- No setup required."
10. **Sticky Note4** `stickyNote` — width: "380", height: "320", content: "- Calls Claude AI to analyze the diff and generate: Risk Level, Issues, Recommendations, Test Cases.

- Add Anthropic API Key (Claude AI)."
11. **Sticky Note5** `stickyNote` — width: "360", height: "220", content: "- Cleans and refines AI output for structured reporting.
- No setup required."
12. **Sticky Note6** `stickyNote` — width: "220", height: "320", content: "













- Cleans and refines AI output for structured reporting.
- No setup required."
13. **Sticky Note7** `stickyNote` — width: "220", height: "320", content: "- Creates a list of developers & QA testers for email notifications.

- Update email mappings for your team."
14. **Sticky Note8** `stickyNote` — width: "220", height: "320", content: "- Sends an HTML-formatted MR Report to developers & QA teams.

- Add Gmail credentials."
15. **Sticky Note9** `stickyNote` — width: "220", height: "300", content: "[redacted]"
16. **GitLab Trigger2** `gitlabTrigger` — owner: "vishalkumar1", events: "merge_requests", repository: "istorefront_server"
17. **Merge** `merge` — configured for its default action.
18. **Extract Diff** `httpRequest` — url: `=     https://gitlab.com/api/v4/projects/{{ encodeURIComponent($json.body.project.path_with_namespace) }}/merge_requests/{{ $json.body.object_attributes.iid }}/changes`
19. **If Some Change** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
20. **AI Agent** `agent` — text: "[redacted]", options: "[object Object]", promptType: "define"
21. **Distribution List Generator** `code` — jsCode: "const ProjectLeads = {
  "alpha_backend": {
    "dev": ["dev1@example.com", "dev2@example.com"],
    "qa": ["qa1@example.com", "qa2@example.com"]
  },
  "beta_webapp": {
    "dev":…[truncated]"
22. **Comment Back on MR** `httpRequest` — method: **POST**, url: `=     https://gitlab.com/api/v4/projects/{{ encodeURIComponent( $('Merge').item.json.body.project.path_with_namespace) }}/merge_requests/{{ $('Merge').item.json.body.object_attribu…[truncated]`
23. **Send to DL ( Email Notification)** `gmail` — sendTo: "={{ $json.emails }}", message: "=<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeSnape by Quantana</title>
  …[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates the review process of GitLab merge requests (MRs). It triggers when an MR is created or updated, fetches the code changes, analyzes them using AI to assess risk levels, issues, and recommendations, and sends structured reports to developers and QA teams via email.

- **Demonstrate:** A software development company could use this workflow to automate code reviews, ensuring consistent quality checks and reducing manual oversight. This helps catch potential issues early, improving the overall code quality and saving time.

- **Imitate:** 1. Set up the workflow in n8n. 2. Configure GitLab, Anthropic, and Gmail credentials. 3. Customize email mappings for your team. 4. Test the workflow by creating a test merge request in GitLab. 5. Verify the AI-generated report and email notifications.

- **Practice:** Create a test GitLab repository and initiate a merge request. Use the workflow to automatically analyze the changes and send a detailed report to your email. Modify the code to see how different changes affect the AI analysis and reporting.

- **WIIFM:** Mastering this workflow can enhance your value proposition to clients by offering automated code review services, ensuring high code quality, reducing manual errors, and saving time. This can lead to increased client satisfaction and potential for recurring revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** anthropicApi, gitlabApi, gmailOAuth2.
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
  