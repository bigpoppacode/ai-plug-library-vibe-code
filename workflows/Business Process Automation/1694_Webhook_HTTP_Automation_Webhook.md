# Webhook HTTP Automation Webhook

## 🚀 What It Does
This workflow automates a process involving outputParserStructured, lmChatOpenAi, googleSheets.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Tool called from Agent** node.
2. **Step 1: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Get rows from Google Sheet (googleSheets)** - This step performs a key action in the workflow.
5. **Step 4: Call n8n workflow  : Scrape companies homepage content (toolWorkflow)** - This step performs a key action in the workflow.
6. **Step 5: Update Company's Row on Google Sheet (googleSheets)** - This step performs a key action in the workflow.
7. **Step 6: ScrapingBee : Scrape company's homepage data  (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Tool called from Agent (executeWorkflowTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: AI Agent (agent)** - This step performs a key action in the workflow.
12. **Step 11: Set company url (set)** - This step performs a key action in the workflow.
13. **Step 12: HTML to Markdown (markdown)** - This step performs a key action in the workflow.
14. **Step 13: Webhook (webhook)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow enriches company data by scraping their homepage content and updating a Google Sheet with the extracted information. It automates the process of gathering key business insights, such as product offerings and customer profiles, from websites.

### Demonstrate
A marketing consultant could use this workflow to quickly gather and update information about multiple companies, streamlining their research for a new client pitch and ensuring they have accurate and up-to-date data for strategic decisions.

### Imitate
1. Import the workflow into n8n.
2. Set up a Google Sheet with company names and websites.
3. Configure the OpenAI credentials and ScrapingBee API key.
4. Test the webhook to trigger the workflow and enrich data.
5. Review the updates in your Google Sheet.

### Practice
Create a sample Google Sheet with 5 companies. Run the workflow and observe how data gets enriched. Try modifying the workflow to add more fields or change the scraping criteria to see how it affects the output.

### WIIFM
Mastering this workflow enables you to offer valuable data enrichment services to clients, helping businesses leverage accurate insights for decision-making. This skill can differentiate you in the automation market, leading to potential income through consulting or service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Structured Output Parser" and "Webhook" for IDs, table names, and URLs.
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
