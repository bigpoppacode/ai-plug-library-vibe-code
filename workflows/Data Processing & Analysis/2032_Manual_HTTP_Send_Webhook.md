# Manual HTTP Send Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Authenticates to your Icypeas account (code)** - This step performs a key action in the workflow.
7. **Step 6: Run email search (single) (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of performing an email search using the Icypeas API. It starts when the user manually triggers the workflow, authenticates to the Icypeas account, and then executes an HTTP request to search for a specific email address based on provided first name, last name, and company domain.

### Demonstrate
A business owner could use this workflow to quickly find email addresses for potential leads or clients. For instance, if they want to reach out to a specific person at a company, they can input the person's name and company domain to get their professional email instantly, saving time and effort in lead generation.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** node to start the workflow.
3. Insert a **Code** node to authenticate with your Icypeas account by entering your API key, secret, and user ID.
4. Add an **HTTP Request** node to send a POST request to the Icypeas API with parameters for the first name, last name, and company domain.
5. Test the workflow by executing it and checking the response for the email address.

### Practice
Try modifying the workflow to search for different email addresses by changing the first name, last name, and domain parameters in the HTTP request node. Observe how the output changes based on the input data.

### WIIFM
Mastering this workflow allows you to automate email searches, significantly increasing your efficiency in lead generation. By offering this service to businesses, you can create value and generate income through streamlined processes, making you a sought-after consultant in automation and AI solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Run email search (single)" for IDs, table names, and URLs.
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
