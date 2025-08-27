# Splitout Code Update Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Scheduled Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **List Images** `httpRequest` — url: `https://<<your-registry-url>>/v2/_catalog`
4. **Extract Image Names** `code` — jsCode: "const images = items[0].json.repositories;
return images.map(image => ({ json: { image } }));"
5. **Retrieve Image Tags** `httpRequest` — url: `={{"https://<<your-registry-url>>/v2/" + $json["image"] + "/tags/list"}}`
6. **Split Tags** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "tags"
7. **Filter Valid Tags** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Fetch Manifest Digest** `httpRequest` — url: `={{"https://<<your-registry-url>>/v2/" + $json.name + "/manifests/" + $json.tag}}`
9. **Fetch Manifest Digest for Blob** `httpRequest` — url: `={{"https://<<your-registry-url>>/v2/" + $('Filter Valid Tags').item.json.name + "/blobs/" + $json.body.config.digest}}`
10. **Update Fields** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Sort by Creation Date** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
12. **Group Tags by Image** `code` — jsCode: "const groupedData = items.reduce((acc, item) => {
  const name = item.json.name;
  if (!acc[name]) {
    acc[name] = [];
  }
  acc[name].push({
    tag: item.json.tag,
    created:…[truncated]"
13. **Identify Tags to Remove** `code` — jsCode: "const result = [];

for (const item of items) {
  const tags = item.json.tags;
  if (tags) {
    const latestTag = tags.includes('latest') ? 'latest' : null;
    const sortedTags =…[truncated]"
14. **Remove Old Tags** `httpRequest` — url: `={{"https://<<your-registry-url>>/v2/" + $json.image + "/manifests/" + $json.tag.digest}}`
15. **Send Notification Email** `emailSend` — text: "=Image : {{ $json.image }}
Tag : {{ $json.tag.tag }}

Removed", options: "[object Object]", subject: "Docker Registry Cleaner Notification"
16. **Execute Garbage Collection** `ssh` — cwd: "/opt/services/", command: "docker compose exec -it -u root registry bin/registry garbage-collect --delete-untagged /etc/docker/registry/config.yml", authentication: "privateKey"
17. **Send Failure Notification Email** `emailSend` — text: "=Image : {{ $json.image }}
Tag : {{ $json.tag.tag }}

Failed", options: "[object Object]", subject: "[FAIL] Docker Registry Cleaner Notification"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the cleanup of Docker images in a registry. It regularly checks all images and their tags, identifies outdated or unnecessary tags, and removes them. Notifications are sent upon successful tag removal or failure, and a garbage collection command is executed to free up space.

### Demonstrate
A software company could use this to manage their Docker registry, ensuring only relevant images are kept. This reduces storage costs and improves system performance by automatically cleaning up old or unused Docker images.

### Imitate
1. Import the workflow into your n8n instance.
2. Configure the Docker registry URL and authentication.
3. Set up a schedule for the workflow to run automatically.
4. Customize email notifications with your email service.
5. Test the workflow with a few Docker images to ensure it functions correctly.

### Practice
Create a test Docker registry and populate it with multiple images and tags. Run the workflow to observe how it identifies and removes outdated tags. Adjust the criteria for tag removal and test again to see the impact.

### WIIFM
Mastering this workflow can help you offer Docker registry management services, optimizing storage and performance for clients. This can lead to cost savings and increased efficiency, making you a valuable asset in automation and DevOps consulting.

## 🔧 Setup Instructions
1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
