# Splitout Webhook Update Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Post Discussions**.
2. **Sticky Note** `stickyNote` — content: "## Edit your own prompt ⬇️
"
3. **Sticky Note2** `stickyNote` — content: "## Filter comments and customize your trigger words ⬇️"
4. **Sticky Note3** `stickyNote` — content: "[redacted]"
5. **Sticky Note4** `stickyNote` — content: "[redacted]"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **Webhook** `webhook` — method: **POST**, path: `/e21095c0-1876-4cd9-9e92-a2eac737f03e`
8. **Need Review** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Get Changes** `httpRequest` — url: `=https://gitlab.com/api/v4/projects/{{ $json["body"]["project_id"] }}/merge_requests/{{ $json["body"]["merge_request"]["iid"] }}/changes`
10. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "changes"
11. **Skip File Changes** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Parse Last Diff Line** `code` — mode: "runOnceForEachItem", jsCode: "const parseLastDiff = (gitDiff) => {
  gitDiff = gitDiff.replace(/\n\\ No newline at end of file/, '')
  
  const diffList = gitDiff.trimEnd().split('\n').reverse();
  const lastLi…[truncated]"
13. **Code** `code` — mode: "runOnceForEachItem", jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
var diff = $input.item.json.gitDiff

let lines = diff.trimEnd().split('\n');

let originalC…[truncated]"
14. **Basic LLM Chain** `chainLlm` — text: "=File path：{{ $('Skip File Changes').item.json.new_path }}

```Original code
 {{ $json.originalCode }}
```
change to
```New code
 {{ $json.newCode }}
```
Please review the code cha…[truncated]", messages: "[object Object]", promptType: "define"
15. **Post Discussions** `httpRequest` — method: **POST**, url: `=https://gitlab.com/api/v4/projects/{{ $('Webhook').item.json["body"]["project_id"] }}/merge_requests/{{ $('Webhook').item.json["body"]["merge_request"]["iid"] }}/discussions`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of reviewing code changes in a GitLab repository. It starts with a webhook that listens for merge request events. When a new merge request is received, it checks if a review is needed, retrieves the changes, and analyzes each change using a code parsing script. The workflow then uses an AI model to review the code, providing feedback and a change score. Finally, it posts the review discussion back to the GitLab merge request, facilitating automated code review and quality assurance.

### Demonstrate
A software development team could use this workflow to automate code reviews, ensuring consistency and saving time. It helps developers focus on more complex tasks by automating repetitive review processes, thus enhancing productivity and code quality.

### Imitate
1. Import the workflow into n8n.
2. Connect your GitLab account via the webhook.
3. Set up the webhook to trigger on new merge requests.
4. Customize the review criteria in the AI model and parsing script.
5. Test the workflow with a sample merge request to verify the feedback process.

### Practice
Create a test GitLab project and set up a webhook to trigger the workflow. Submit a merge request and observe how the workflow processes the changes and posts a review comment. Experiment with different code changes to see how the AI model evaluates them.

### WIIFM
Mastering this workflow allows you to offer automated code review services, increasing the efficiency and quality of software development processes. It can attract software teams seeking to enhance their CI/CD pipelines, providing a valuable service that can lead to recurring business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
