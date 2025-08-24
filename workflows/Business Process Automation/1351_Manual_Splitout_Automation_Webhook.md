# Manual Splitout Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, html, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Extract Box (html)** - This step performs a key action in the workflow.
4. **Step 3: Request to Github Trend (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Turn to a list (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Set Result Variables (set)** - This step performs a key action in the workflow.
7. **Step 6: Extract repository data (html)** - This step performs a key action in the workflow.
8. **Step 7: Extract all repositories (html)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow scrapes the top 13 trending repositories from GitHub. It starts by triggering a manual action, then fetches the trending page, extracts repository data, processes it into a list, and prepares the results for further use.

### Demonstrate
A business owner could use this workflow to monitor daily GitHub trends for emerging technologies, allowing them to adapt their service offerings or products based on new opportunities and insights from trending repositories.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger.
3. Configure the HTTP request to fetch GitHub trends.
4. Use HTML extraction nodes to gather repository data.
5. Set result variables to structure the data.
6. Test the workflow to ensure it functions correctly.

### Practice
Try modifying the workflow to scrape trending repositories by programming language (e.g., Python). Adjust the CSS selectors in the HTML extraction nodes to filter results accordingly.

### WIIFM
Mastering this workflow allows you to automate data collection from GitHub, providing valuable insights for clients or your own business. This skill can help you deliver competitive analyses or trend reports, making you a valuable asset in tech consulting or development.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Extract all repositories" for IDs, table names, and URLs.
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
