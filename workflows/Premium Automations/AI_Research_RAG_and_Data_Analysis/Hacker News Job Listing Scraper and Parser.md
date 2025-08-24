# Hacker News Job Listing Scraper And Parser

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Split Out (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: Search for Who is hiring posts (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Get relevant data (set)** - This step performs a key action in the workflow.
10. **Step 9: Get latest post (filter)** - This step performs a key action in the workflow.
11. **Step 10: Split out children (jobs) (splitOut)** - This step performs a key action in the workflow.
12. **Step 11: Trun into structured data (chainLlm)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Extract text (set)** - This step performs a key action in the workflow.
15. **Step 14: Clean text (code)** - This step performs a key action in the workflow.
16. **Step 15: Limit for testing (optional) (limit)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Write results to airtable (airtable)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: HI API: Get the individual job post (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: HN API: Get Main Post (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping job postings from Hacker News' "Who is Hiring" thread, using OpenAI to structure the data and save it to Airtable, making job information easily accessible and organized.

### Demonstrate
A business owner could use this workflow to automatically gather job postings relevant to their company, saving time and ensuring they never miss hiring opportunities while maintaining a clean database of candidates.

### Imitate
1. Import the workflow into n8n.
2. Set up the manual trigger to start the process.
3. Configure the HTTP request node to connect to the Hacker News API.
4. Use OpenAI to format the job data.
5. Save the structured data to Airtable for easy access.

### Practice
Create a similar workflow that scrapes a different source for job postings or news articles. Use the same steps to trigger, fetch, structure, and save the data, but adapt the API endpoint and data formatting to suit the new source.

### WIIFM
Mastering this workflow allows you to provide valuable automation services, attract clients needing job scraping or data management, and potentially generate income by offering custom automation solutions tailored to their needs.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "HN API: Get Main Post" for IDs, table names, and URLs.
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
