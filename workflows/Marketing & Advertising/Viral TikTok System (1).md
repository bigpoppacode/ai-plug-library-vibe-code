# Viral Tiktok System (1)

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
This n8n workflow automates the process of gathering and analyzing TikTok videos. It scrapes video data, uploads files for analysis, stores results in Airtable, and generates insights about viral content, saving time and improving decision-making.

### Demonstrate
A social media marketing agency could use this workflow to analyze trending TikTok videos. By identifying viral trends, they can tailor content strategies for clients, increasing engagement and driving more traffic to their campaigns.

### Imitate
1. Import the workflow into n8n.
2. Connect your TikTok and Airtable accounts.
3. Adjust the parameters, such as the number of videos to scrape.
4. Set up your API keys for Gemini and Apify.
5. Run the workflow to gather insights on TikTok videos.

### Practice
Try modifying the workflow to analyze videos from a different social media platform, like Instagram. Change the scraping logic and ensure the data flows correctly into Airtable. Test it with a small batch of videos to see how it performs.

### WIIFM
Mastering this workflow allows you to offer valuable insights into social media trends, helping businesses enhance their marketing strategies. This skill can attract clients looking for data-driven decisions, potentially leading to increased income through automation services.

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
