# Scrape Trustpilot Reviews With Deepseek, Analyze Sentiment With Openai

## 🚀 What It Does
This workflow automates a process involving splitOut, informationExtractor, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Split Out (splitOut)** - This step performs a key action in the workflow.
3. **Step 2: Information Extractor (informationExtractor)** - This step performs a key action in the workflow.
4. **Step 3: If (if)** - This step performs a key action in the workflow.
5. **Step 4: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Limit1 (limit)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Set Parameters (set)** - This step performs a key action in the workflow.
12. **Step 11: Get reviews (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Extract (html)** - This step performs a key action in the workflow.
14. **Step 13: Get rows (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: Get Google Sheets (googleSheets)** - This step performs a key action in the workflow.
16. **Step 15: Get Single review (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Extract review (html)** - This step performs a key action in the workflow.
18. **Step 17: Update sheet (googleSheets)** - This step performs a key action in the workflow.
19. **Step 18: Sentiment Analysis (sentimentAnalysis)** - This step performs a key action in the workflow.
20. **Step 19: DeepSeek Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
21. **Step 20: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping Trustpilot reviews, analyzing their sentiment with AI, and storing the results in Google Sheets. It starts with a manual trigger, fetches reviews, extracts relevant information, performs sentiment analysis, and updates the spreadsheet.

### Demonstrate
A business owner might use this workflow to automatically collect and analyze customer feedback from Trustpilot, allowing them to gauge customer sentiment and improve their products or services without manually reviewing each comment.

### Imitate
1. Set up a manual trigger in n8n.
2. Add an HTTP Request node to fetch reviews from Trustpilot.
3. Use an HTML extractor to parse the reviews.
4. Implement a sentiment analysis node using OpenAI.
5. Store the results in Google Sheets with a Google Sheets node.

### Practice
Try modifying the workflow to scrape reviews from a different site (like Yelp). Change the HTTP Request node's URL and adjust the HTML extraction logic to fit the new structure. Test it to see if it successfully retrieves and analyzes the new data.

### WIIFM
Mastering this workflow can help you deliver valuable insights to clients by automating customer feedback analysis, allowing you to charge for high-impact services that save time and enhance decision-making in their businesses.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Split Out" and "OpenAI Chat Model" for IDs, table names, and URLs.
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
