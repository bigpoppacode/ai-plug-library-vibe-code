# Viral Tiktok System

## 🚀 What It Does
This workflow automates a process involving wait, set, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Wait (wait)** - This step performs a key action in the workflow.
3. **Step 2: Set Prompt (set)** - This step performs a key action in the workflow.
4. **Step 3: Gemini - Generate Upload URL (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Gemini - Upload File (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Save Values (set)** - This step performs a key action in the workflow.
7. **Step 6: Save Fields (set)** - This step performs a key action in the workflow.
8. **Step 7: Download File (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Create Video (airtable)** - This step performs a key action in the workflow.
10. **Step 9: Get Video (airtable)** - This step performs a key action in the workflow.
11. **Step 10: Set Guideline (airtable)** - This step performs a key action in the workflow.
12. **Step 11: Search Creators (airtable)** - This step performs a key action in the workflow.
13. **Step 12: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Check If Video (if)** - This step performs a key action in the workflow.
15. **Step 14: Apify - Scrape TikToks (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: Loop Over Creators (splitInBatches)** - This step performs a key action in the workflow.
17. **Step 16: Loop Over Videos (splitInBatches)** - This step performs a key action in the workflow.
18. **Step 17: Format Date (code)** - This step performs a key action in the workflow.
19. **Step 18: Format JSON (code)** - This step performs a key action in the workflow.
20. **Step 19: Take Top-5 (limit)** - This step performs a key action in the workflow.
21. **Step 20: Gemini - Analyse Video (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Sort Videos By Views (sort)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing TikTok videos. It scrapes video data, generates insights using AI, and stores the information in Airtable, allowing users to identify viral content efficiently.

### Demonstrate
A social media manager could use this workflow to automatically analyze TikTok trends, generate reports on popular videos, and strategize content that resonates with their audience, saving time and enhancing marketing efforts.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a **Schedule Trigger** to run weekly.
3. Use **Apify - Scrape TikToks** to gather video data.
4. Connect to **Gemini - Analyze Video** for insights.
5. Save results using **Airtable - Create Video**.
6. Test and adjust parameters as needed.

### Practice
Try modifying the workflow to scrape videos from a different platform (like Instagram) and analyze them using the same AI insights. This will help reinforce your understanding of adapting workflows for different sources.

### WIIFM
Mastering this workflow enables you to offer valuable automation services, helping clients identify trends and optimize their content strategies, ultimately driving engagement and revenue growth in the competitive social media landscape.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Wait" and "Sticky Note3" for IDs, table names, and URLs.
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
