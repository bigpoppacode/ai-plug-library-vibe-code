# Webhook Code Send Webhook
## 🚀 What It Does
Automates a flow using stickyNote×3, set×2, code×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Sticky Note** `stickyNote` — width: "436.76926691729307", height: "322.40601503759376", content: "## Read me

This workflow will allow you to enrich in real-time a form submission from Webflow. 

Based on the result of this workflow, a specific Calendly link will be shown on th…[truncated]"
3. **Receive form submission from Webflow** `webhook` — method: **POST**, path: `/6545426b-ff78-47af-8e20-a6e9f5259c8e`
4. **Sticky Note1** `stickyNote` — width: "302.0324248120298", height: "525.7142857142856", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "305.64144736842076", height: "519.0977443609015", content: "## Account qualification

Tweak the code to fit your own criteria. 

In this example, qualified lead are those who have more than 100 employees."
6. **Get domain from email** `set` — values: "[object Object]", options: "[object Object]"
7. **Verify professional email** `code` — jsCode: "[redacted]"
8. **Enrich with Datagma** `httpRequest` — url: `https://gateway.datagma.net/api/ingress/v2/full`
9. **Simplify Datagma Output** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
10. **Qualify Account** `code` — mode: "runOnceForEachItem", jsCode: "// this code will route lead in companies with more than 100 employees to 1:1 demo and other leads to group demo

// feel free to tweak this code to fit your own qualification crit…[truncated]"
11. **Send result to Webflow** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={"result":{{ $json["result"] }}}"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow processes form submissions from Webflow to determine if a lead qualifies for a one-on-one or group demo. It extracts the domain from the email, verifies if it's a professional address, and uses Datagma to enrich the data. Based on company size, it qualifies the lead and sends the appropriate Calendly link back to Webflow.

### Demonstrate
A SaaS company can use this workflow to quickly qualify leads from their Webflow forms, ensuring personalized follow-ups. It automates the sorting of leads into priority categories, saving time and improving conversion rates.

### Imitate
1. Import the workflow to n8n.
2. Set up a Webflow form to submit data to the workflow.
3. Obtain and input your Datagma API key.
4. Adjust the qualification criteria in the code node.
5. Test the workflow with sample form submissions to ensure correct routing.

### Practice
Create a test form in Webflow and submit entries to see how the workflow processes them. Experiment with different email domains and company sizes to observe how the workflow categorizes leads.

### WIIFM
Mastering this workflow allows you to offer automated lead qualification services, enhancing a client's sales process and creating opportunities to upsell additional automation solutions. This can generate recurring income and increase client satisfaction.

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
