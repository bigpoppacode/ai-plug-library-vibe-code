# Manual Telegram Import Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, functionItem, uproc.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Create Domain Item (functionItem)** - This step performs a key action in the workflow.
4. **Step 3: Get SSL Certificate (uproc)** - This step performs a key action in the workflow.
5. **Step 4: Send Expired Alarm (telegram)** - This step performs a key action in the workflow.
6. **Step 5: Certificate  has  expired? (if)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of checking if an SSL certificate for a domain is expired. When executed, it retrieves the SSL certificate details and sends an alert via Telegram if the certificate has expired.

### Demonstrate
A web hosting company can use this workflow to monitor SSL certificates for all client domains automatically. If a certificate expires, the company can quickly notify the relevant client, preventing security issues.

### Imitate
1. Create a new workflow in n8n.
2. Add a Manual Trigger node.
3. Use a Function Item node to set the domain (e.g., "example.com").
4. Add a node to get the SSL certificate using an appropriate API.
5. Add an If node to check if the certificate is expired.
6. Use a Telegram node to send an alert if the certificate is expired.
7. Execute the workflow to test it.

### Practice
Try adapting the workflow to check multiple domains. Modify the Function Item node to include an array of domains and loop through each one to check their SSL certificates.

### WIIFM
Mastering this workflow can help you offer SSL monitoring as a service, increasing customer trust and retention. It can lead to new business opportunities, especially for web hosting companies or digital agencies focused on security.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Certificate  has  expired?" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
