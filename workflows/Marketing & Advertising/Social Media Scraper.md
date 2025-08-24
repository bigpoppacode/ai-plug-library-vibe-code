# Social Media Scraper

## 🚀 What It Does
This workflow automates a process involving chatTrigger, textClassifier, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Text Classifier (textClassifier)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: YouTube Scraper (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: X Scraper (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: LinkedIn Scraper (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Instagram Reel Scraper (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: OpenAI (openAi)** - This step performs a key action in the workflow.
10. **Step 9: Edit Fields (set)** - This step performs a key action in the workflow.
11. **Step 10: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
12. **Step 11: Merge (merge)** - This step performs a key action in the workflow.
13. **Step 12: Edit Fields1 (set)** - This step performs a key action in the workflow.
14. **Step 13: Loop Over Items1 (splitInBatches)** - This step performs a key action in the workflow.
15. **Step 14: Merge1 (merge)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Merge2 (merge)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Merge3 (merge)** - This step performs a key action in the workflow.
21. **Step 20: Add Records to IG Sheet (googleSheets)** - This step performs a key action in the workflow.
22. **Step 21: Add Records to YT Sheet (googleSheets)** - This step performs a key action in the workflow.
23. **Step 22: Add Records to LI Sheet (googleSheets)** - This step performs a key action in the workflow.
24. **Step 23: Find LI Rows (googleSheets)** - This step performs a key action in the workflow.
25. **Step 24: Find YT Rows (googleSheets)** - This step performs a key action in the workflow.
26. **Step 25: Find IG Rows (googleSheets)** - This step performs a key action in the workflow.
27. **Step 26: Find X Rows (googleSheets)** - This step performs a key action in the workflow.
28. **Step 27: Add Records to X Sheet (googleSheets)** - This step performs a key action in the workflow.
29. **Step 28: Trigger: Row Added (IG Sheet) (googleSheetsTrigger)** - This step performs a key action in the workflow.
30. **Step 29: Trigger: Row Added (YT Sheet) (googleSheetsTrigger)** - This step performs a key action in the workflow.
31. **Step 30: If (if)** - This step performs a key action in the workflow.
32. **Step 31: If1 (if)** - This step performs a key action in the workflow.
33. **Step 32: Download IG Reel (httpRequest)** - This step performs a key action in the workflow.
34. **Step 33: Update IG Sheet Transcript (googleSheets)** - This step performs a key action in the workflow.
35. **Step 34: Update YT Sheet Transcript (googleSheets)** - This step performs a key action in the workflow.
36. **Step 35: Generate Transcript (httpRequest)** - This step performs a key action in the workflow.
37. **Step 36: OpenAI1 (openAi)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping social media profiles and generating transcripts from video content. It collects data from platforms like YouTube, LinkedIn, Instagram, and X, classifies the content, and saves the results to Google Sheets.

### Demonstrate
A business owner wanting to analyze social media trends could use this workflow to automatically gather and transcribe video content from various platforms. This saves time and provides valuable insights for marketing strategies.

### Imitate
1. Set up a chat trigger in n8n.
2. Add a text classifier to identify the social media platform.
3. Use HTTP request nodes to scrape data from YouTube, LinkedIn, Instagram, and X.
4. Include OpenAI to generate transcripts.
5. Save results to Google Sheets.

### Practice
Try running the workflow with a test social media URL. Observe the data collection process, and check the Google Sheets to see how the information is organized and stored.

### WIIFM
Mastering this workflow can significantly enhance your automation skills, allowing you to offer valuable services to businesses looking to leverage social media analytics, ultimately helping you attract clients and generate income as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When chat message received" and "OpenAI1" for IDs, table names, and URLs.
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
