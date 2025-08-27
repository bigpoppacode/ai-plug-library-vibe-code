# Code Github Automate Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **PR Trigger**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **PR Trigger** `githubTrigger` — owner: "[object Object]", events: "pull_request", options: "[object Object]"
4. **Code Best Practices** `googleSheetsTool` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
5. **Sticky Note** `stickyNote` — content: "**1-The GitHub Trigger** node initiates the workflow whenever a pull request event occurs on a specified repository. It enables real-time automation based on GitHub activity.
"
6. **Sticky Note1** `stickyNote` — color: "3", width: "340", height: "220"
7. **Sticky Note2** `stickyNote` — color: "2", width: "360", height: "240"
8. **Sticky Note3** `stickyNote` — color: "5", content: "**Github Comment Poster**
Posts the AI-generated review as a comment on the pull request using GitHub API."
9. **Sticky Note4** `stickyNote` — color: "7", height: "120", content: "**PR Labeler (optional)**
Automatically adds a label like *ReviewedByAI* to the pull request once the AI comment is posted."
10. **Sticky Note5** `stickyNote` — color: "6", width: "260", content: "**Google Sheet Best Practices**
Enables the AI agent to reference to your team coding guidelines stored in a Google Sheet for more accurate and opinionated reviews.
You can replace…[truncated]"
11. **Get file's Diffs from PR** `httpRequest` — url: `=https://api.github.com/repos/{{$json.body.sender.login}}/{{$json.body.repository.name}}/pulls/{{$json.body.number}}/files`
12. **Create target Prompt from PR Diffs** `code` — jsCode: "const files = $input.all().map(item => item.json);

let diffs = '';

for (const file of files) {
  diffs += `### Fichier : ${file.filename}\n\n`;

  if (file.patch) {
    // IMPORT…[truncated]"
13. **Code Review Agent** `agent` — text: "={{ $json.user_message }}", options: "[object Object]", promptType: "define"
14. **GitHub Robot** `github` — resource: **review**
15. **Add Label to PR** `github` — operation: **edit**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the code review process for GitHub pull requests. When a pull request is made, it triggers the workflow to fetch the code changes and create a formatted prompt. This prompt is sent to an AI agent, which generates a review based on coding best practices stored in Google Sheets. The AI-generated review is posted as a comment on the pull request, and a label indicating the review has been completed by AI is added to the pull request.

### Demonstrate
A software development team could use this workflow to ensure consistent and efficient code reviews. By automating the initial review process, they can quickly identify potential issues and maintain code quality without manually reviewing every line of code.

### Imitate
1. Import the workflow into n8n.
2. Connect your GitHub and Google Sheets accounts.
3. Set up the GitHub repository details in the PR Trigger node.
4. Customize the Google Sheets document with your coding guidelines.
5. Test the workflow by creating a pull request in your repository.

### Practice
Create a test GitHub repository and add some code changes. Trigger a pull request and observe how the workflow handles the review process. Check the AI-generated comments and the added label on the pull request.

### WIIFM
Mastering this workflow can help you offer automated code review services, enhancing development efficiency and consistency. This can attract clients looking for quality assurance solutions, opening avenues for recurring revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, githubOAuth2Api, githubApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
  