# Limit Splitout Automation Webhook

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
This n8n workflow automates the process of scraping Trustpilot reviews, extracting relevant information, analyzing sentiment using OpenAI, and storing the results in Google Sheets. It streamlines data collection and analysis for businesses to better understand customer feedback.

### Demonstrate
A business owner can use this workflow to automatically gather and analyze customer reviews from Trustpilot, saving time and gaining insights on customer sentiment, which helps improve products and services and enhances customer satisfaction.

### Imitate
1. Set up n8n and import the workflow.
2. Configure the **manual trigger** to start the workflow.
3. Adjust the **Google Sheets** nodes to match your spreadsheet.
4. Customize the **HTTP requests** to target the specific Trustpilot company page.
5. Test the workflow to ensure data flows correctly from Trustpilot to Google Sheets.

### Practice
Try modifying the workflow to scrape reviews from a different site or add an additional analysis step, such as categorizing reviews by product type. This will help reinforce your understanding of how data flows and how to customize the workflow.

### WIIFM
Mastering this workflow can help you provide valuable services to businesses by automating customer feedback analysis. This not only saves time and reduces costs for clients but also positions you as a provider of high-demand automation solutions, potentially increasing your income.

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
