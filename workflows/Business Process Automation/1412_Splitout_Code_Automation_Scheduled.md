# Splitout Code Automation Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Get reviews (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Global (set)** - This step performs a key action in the workflow.
6. **Step 5: Parse reviews (code)** - This step performs a key action in the workflow.
7. **Step 6: HelpfulCrowd edits (set)** - This step performs a key action in the workflow.
8. **Step 7: Split Out (splitOut)** - This step performs a key action in the workflow.
9. **Step 8: General edits (set)** - This step performs a key action in the workflow.
10. **Step 9: General sheet (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: HelpfulCrowd Sheets (googleSheets)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping Trustpilot reviews for a specific company and storing them in Google Sheets. It starts with a manual trigger, fetches reviews from Trustpilot, processes them, and updates the relevant Google Sheets with the parsed data.

### Demonstrate
A business owner could use this workflow to gather customer feedback from Trustpilot for their product, analyze it, and keep it organized in Google Sheets. This helps in understanding customer sentiment and improving service based on real feedback.

### Imitate
1. **Set Up n8n:** Import the workflow into n8n.
2. **Modify Global Settings:** Change the `company_id` and `max_page` in the Global node to match your needs.
3. **Test Workflow:** Click 'Test workflow' to trigger the scraping process.
4. **Check Google Sheets:** Verify that the reviews are correctly filled in your specified Google Sheets.

### Practice
Try modifying the workflow to scrape reviews from a different platform (like Yelp) by changing the HTTP request URL and the parsing logic. This will help you understand how to adapt workflows for different sources.

### WIIFM
Mastering this workflow allows you to automate the collection of customer reviews, saving time and improving data organization. This skill can attract clients looking for automation solutions, increasing your income potential in the growing AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Schedule Trigger" for IDs, table names, and URLs.
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
