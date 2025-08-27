# Webhook Respondtowebhook Automation Webhook
## 🚀 What It Does
Automates a flow using httpRequest×2, htmlExtract×2, itemLists×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On clicking 'execute'**.
2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Feed** `webhook` — path: `/3fbd94de-2fb3-4b32-a46e-c237865479b9.rss`
4. **Get overview page** `httpRequest` — url: `https://www.ardaudiothek.de/sendung/kalk-und-welk/10777871/`
5. **Extract links** `htmlExtract` — options: "[object Object]", extractionValues: "[object Object]"
6. **Split out lists** `itemLists` — options: "[object Object]", fieldToSplitOut: "links"
7. **Remove duplicate links** `itemLists` — operation: **removeDuplicates**
8. **Get episode page** `httpRequest` — url: `=https://www.ardaudiothek.de{{ $json["link"] }}`
9. **Extract script** `htmlExtract` — options: "[object Object]", extractionValues: "[object Object]"
10. **Parse JSON** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
11. **Define feed items** `function` — functionCode: "const escapeHTML = str => str.replace(/[&<>'"]/g, 
  tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag]));

let …[truncated]"
12. **Serve feed** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json["data"] }}"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of an RSS feed from episode links on the "Kalk und Welk" podcast page. It fetches the overview page, extracts episode links, removes duplicates, retrieves episode details, and formats them into an RSS feed, which is then served via a webhook.

### Demonstrate
A podcast producer could use this workflow to automate the creation of an RSS feed for their podcast, ensuring that listeners receive updates as new episodes are published, without manual intervention.

### Imitate
1. Import the workflow into n8n.
2. Set up a webhook to trigger the workflow.
3. Configure the HTTP Request node with the correct podcast URL.
4. Adjust the HTML extraction settings to match your website's structure.
5. Test the workflow to ensure it generates the RSS feed correctly.

### Practice
Create a test page with a few mock episode links. Run the workflow to see how it extracts and processes these links into an RSS feed. Modify the extraction settings to see how changes affect the output.

### WIIFM
Mastering this workflow enables you to offer automated RSS feed generation services to podcasters, streamlining their distribution process and enhancing your service offerings. This can attract more clients and generate additional income streams in your automation business.

## 🔧 Setup Instructions
1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
