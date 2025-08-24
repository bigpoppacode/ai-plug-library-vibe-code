# Linkedin Dm System

## 🚀 What It Does
This workflow automates a process involving formTrigger, httpRequest, openAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On form submission** node.
2. **Step 1: On form submission (formTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Run Apify Actor & Get Results (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Generate Search URL (openAi)** - This step performs a key action in the workflow.
5. **Step 4: Limit (limit)** - This step performs a key action in the workflow.
6. **Step 5: Trigger PhantomBuster Agent (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Add to Google Sheet (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Personalize Outreach (openAi)** - This step performs a key action in the workflow.
9. **Step 8: Aggregate (aggregate)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates LinkedIn outreach by collecting audience descriptions through a form, generating search URLs using AI, scraping contact data, and storing results in Google Sheets for follow-up actions.

### Demonstrate
A business owner could use this workflow to automate LinkedIn connection requests, saving time on manual outreach while ensuring personalized messages, ultimately leading to higher engagement and networking opportunities.

### Imitate
1. Set up a **form trigger** to collect audience descriptions.
2. Use the **OpenAI node** to generate a LinkedIn search URL based on descriptions.
3. Implement **HTTP requests** to scrape contact data with Apify.
4. Limit results with the **limit node**.
5. Store data in **Google Sheets**.
6. Personalize outreach messages using the **OpenAI node**.
7. Aggregate results with the **aggregate node**.

### Practice
Create a simple version of this workflow: start with a form to collect a single audience description, generate a search URL, and log the result in a Google Sheet. Experiment with different audience descriptions to see how the URL changes.

### WIIFM
Mastering this workflow enables you to offer automated outreach solutions, making your services valuable to businesses seeking to expand their networks efficiently, leading to potential income through consulting or service fees.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On form submission" and "Aggregate" for IDs, table names, and URLs.
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
