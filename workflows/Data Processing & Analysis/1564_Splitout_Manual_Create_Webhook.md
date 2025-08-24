# Splitout Manual Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, splitInBatches, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Process Each Company (splitInBatches)** - This step performs a key action in the workflow.
4. **Step 3: Get Company Info (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Filter Valid Companies (if)** - This step performs a key action in the workflow.
6. **Step 5: Check If Company Exists (airtable)** - This step performs a key action in the workflow.
7. **Step 6: Is New Company? (if)** - This step performs a key action in the workflow.
8. **Step 7: Add Company to CRM (airtable)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Set Variables (set)** - This step performs a key action in the workflow.
16. **Step 15: Search Companies (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Extract Company Data (splitOut)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of searching for companies on LinkedIn, filtering valid ones, checking their existence in Airtable, and adding new companies to a CRM. It streamlines data collection and ensures only relevant companies are stored.

### Demonstrate
A marketing consultant can use this workflow to quickly gather potential clients from LinkedIn based on specific criteria (like company size), filter them, and automatically add qualified leads to their Airtable CRM, saving hours of manual work and enhancing outreach.

### Imitate
1. Import the workflow into n8n.
2. Set up a Manual Trigger to start the workflow.
3. Use the "Set Variables" node to define your target criteria (e.g., company type, size).
4. Adjust the "Search Companies" and "Get Company Info" nodes to match your API credentials.
5. Test the workflow, check Airtable for new entries, and refine as needed.

### Practice
Create a simplified version of the workflow that only searches for companies and returns their names and websites. Test it with different criteria and observe how the output changes. This will help reinforce your understanding of data filtering and API interaction.

### WIIFM
Mastering this workflow allows you to offer valuable automation services that save time and enhance lead generation for businesses. By automating data collection and CRM updates, you can position yourself as an indispensable asset, increasing your earning potential in the automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Extract Company Data" for IDs, table names, and URLs.
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
