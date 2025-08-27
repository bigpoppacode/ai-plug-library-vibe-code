# Code Form Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Landing Page Url**.
  2. **Landing Page Url** `formTrigger` — options: "[object Object]", formTitle: "Website Security Scanner", formFields: "[object Object]"
3. **OpenAI Headers Analysis** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Content Analysis** `lmChatOpenAi` — model: `[object Object]`
5. **Sticky Note - Setup Instructions** `stickyNote` — width: "500", height: "440", content: "## Quick Setup Guide

1. **Add OpenAI API Credentials**
   - Go to Settings → Credentials → New → OpenAI API
   - Enter your API key from platform.openai.com

2. **Add Gmail Creden…[truncated]"
6. **Sticky Note - OpenAI Analysis** `stickyNote` — color: "3", width: "420", height: "240"
7. **Sticky Note - Email Configuration** `stickyNote` — color: "3", width: "360", height: "200"
8. **Sticky Note - Audit Process** `stickyNote` — color: "2", width: "420", height: "300"
9. **Sticky Note - How To Use** `stickyNote` — color: "4", width: "400", height: "280"
10. **Sticky Note - Report Formatting** `stickyNote` — color: "5", width: "300", height: "280"
11. **Sticky Note - Results Processing** `stickyNote` — width: "300", height: "240", content: "## Results Processing

- Analyzes AI output to determine security grade
- Counts critical issues and warnings
- Extracts present security headers
- Prepares data for the email repo…[truncated]"
12. **Scrape Website** `httpRequest` — url: `={{ $json['Landing Page Url'] }}`
13. **Security Vulnerabilities Audit** `agent` — text: "=You are an elite cybersecurity expert specializing in web application security.

In this task, you will analyze the HTML and visible content of the webpage to identify potential s…[truncated]", options: "[object Object]", promptType: "define"
14. **Extract Headers for Debug** `code` — jsCode: "// Format headers into a readable string
let formattedHeaders = '';
if (items[0].json.headers) {
  for (const key in items[0].json.headers) {
    formattedHeaders += `${key}: ${ite…[truncated]"
15. **Security Configuration Audit** `agent` — text: "=You are an elite web security expert specializing in secure configurations.

In this task, you will analyze the HTTP headers, cookies, and overall configuration of a webpage to id…[truncated]", options: "[object Object]", promptType: "define"
16. **Merge Security Results** `merge` — configured for its default action.
17. **Aggregate Audit Results** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
18. **Process Audit Results** `code` — jsCode: "// ✅ Updated extractSecurityHeaders and related logic remains unchanged

function extractSecurityHeaders(rawHeaders = {}, configOutput = '') {
  const securityHeaders = [
    'Cont…[truncated]"
19. **convert to HTML** `code` — jsCode: "// Create a direct HTML template with improved styling
const auditData = items[0].json.auditData;

function formatConfigurationIssues() {
  if (!auditData.configOutput || auditData…[truncated]"
20. **Send Security Report** `gmail` — sendTo: "=example@here.com", message: "={{ $json.emailHtml }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of analyzing website security. It starts with a form input for a website URL, scrapes the website, and uses OpenAI to analyze both the content and headers for security vulnerabilities and misconfigurations. It then merges the results, processes them to determine a security grade, and sends a detailed HTML report via email.

### Demonstrate
A web development agency could use this workflow to regularly audit client websites for security vulnerabilities, ensuring they meet industry standards and protect against potential threats, thus maintaining client trust and satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up OpenAI and Gmail credentials.
3. Customize the email configuration with your recipient address.
4. Activate the workflow and share the form URL.
5. Submit a website URL to receive an audit report.

### Practice
Create a test website with intentional security flaws (like missing headers) and run the workflow. Review the email report for detected issues and try fixing them on your website, then rerun the workflow to see improvements.

### WIIFM
Mastering this workflow can position you as a security consultant, helping businesses protect their websites, thereby enhancing your service offerings and potentially increasing your income by providing a valuable, automated security audit service.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2.
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
  