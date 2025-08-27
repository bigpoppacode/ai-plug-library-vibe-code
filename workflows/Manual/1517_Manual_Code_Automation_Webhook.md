# Manual Code Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, manualTrigger, httpRequest.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "243.6494382022472", content: "## Perform a domain search (single) with Icypeas

This workflow demonstrates how to perform a domain scan using Icypeas. Visit https://icypeas.com to create your account.


"
4. **Sticky Note1** `stickyNote` — width: "506", height: "1041.5303370786517", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "492", height: "748", content: "[redacted]"
6. **Authenticates to your Icypeas account** `code` — jsCode: "[redacted]"
7. **Run domain scan (single)** `httpRequest` — method: **POST**, url: `={{ $json.api.url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow is designed to perform a domain search using the Icypeas service. It begins with a manual trigger, authenticates your Icypeas account using API credentials, and then sends an HTTP POST request to scan a specified domain or company. This process helps in retrieving detailed information about the domain, which can be useful for market research or security analysis.

**Demonstrate**  
A business owner might use this workflow to verify the legitimacy of potential partners or competitors by scanning their domains for insights, thus aiding in strategic decision-making.

**Imitate**  
1. Sign up for an Icypeas account and obtain your API credentials.
2. Import the workflow into n8n.
3. Enter your API Key, API Secret, and User ID in the code node.
4. Set the domain you want to scan in the HTTP Request node.
5. Execute the workflow to test the process.

**Practice**  
Create a test workflow using a sample domain. Run the workflow to see how it retrieves data from Icypeas. Experiment by changing the domain to understand how the results vary.

**WIIFM**  
Mastering this workflow can enable you to offer domain analysis services to clients, enhancing their market intelligence capabilities. This can attract more clients and increase the value of your automation business, leading to higher income opportunities.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth.
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
  