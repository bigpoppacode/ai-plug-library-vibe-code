# Manual Slack Automation Triggered

## 🚀 What It Does
This workflow automates a process involving splitInBatches, manualTrigger, gmail.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Click to Test Flow** node.
2. **Step 1: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
3. **Step 2: Click to Test Flow (manualTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Get emails from Gmail with certain subject (gmail)** - This step performs a key action in the workflow.
5. **Step 4: Receive certain keyword Gmail Trigger (gmailTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Extract Price, Shop, Date, TIme (set)** - This step performs a key action in the workflow.
7. **Step 6: Send to Slack with Block (slack)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of tracking Uber Eats orders by fetching relevant emails, extracting key information (like price, shop, date, and time), and sending a summary to a Slack channel.

### Demonstrate
A restaurant owner can use this workflow to monitor orders automatically. Instead of manually checking emails for delivery details, the workflow extracts order info and posts it to a Slack channel, ensuring the team is always updated.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger to run the workflow.
3. Configure the Gmail node to filter emails by subject (e.g., "Uber Eats Orders").
4. Use the Set node to extract details (price, shop, date, time).
5. Connect the Slack node to send a message with the extracted info.

### Practice
Create a test email in your Gmail with a subject matching the filter and relevant order details. Run the workflow and check if the extracted information is sent correctly to your Slack channel.

### WIIFM
Mastering this workflow allows you to automate tedious tasks, saving time and reducing errors. This skill can attract clients looking for automation solutions, potentially generating income through service offerings or consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Loop Over Items" and "Send to Slack with Block" for IDs, table names, and URLs.
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
