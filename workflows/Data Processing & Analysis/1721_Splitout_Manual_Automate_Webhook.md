# Splitout Manual Automate Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Set Esty Search Query (set)** - This step performs a key action in the workflow.
6. **Step 5: Perform Esty Web Request (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
8. **Step 7: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
9. **Step 8: Perform Esty web request over the loop (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Initiate a Webhook Notification for the extracted data (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Extract Item List with the Product Info (informationExtractor)** - This step performs a key action in the workflow.
12. **Step 11: Google Gemini Chat Model for product info (lmChatGoogleGemini)** - This step performs a key action in the workflow.
13. **Step 12: Extract Paginated Resultset (informationExtractor)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Write the scraped content to disk (readWriteFile)** - This step performs a key action in the workflow.
16. **Step 15: Create a binary data (function)** - This step performs a key action in the workflow.
17. **Step 16: Split Out (splitOut)** - This step performs a key action in the workflow.
18. **Step 17: Extract Paginated Resultset With OpenAI (informationExtractor)** - This step performs a key action in the workflow.
19. **Step 18: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping product data from Etsy using the Bright Data Web Unlocker and AI models like Google Gemini and OpenAI. It starts with a manual trigger and moves through web requests, data extraction, and notifications, ultimately saving the results.

### Demonstrate
A business owner could use this workflow to quickly gather and analyze product information from Etsy for market research, helping them identify trends and pricing strategies without manual data entry, saving time and resources.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a **manual trigger** to start the process.
3. Use a **Set node** to specify your Etsy search URL.
4. Add an **HTTP Request node** to fetch data from Etsy.
5. Use **information extractor nodes** to parse and extract product info.
6. Send the extracted data via a **Webhook Notification**.
7. Save the results using a **readWriteFile node**.

### Practice
Try modifying the search query in the **Set node** to scrape different product categories from Etsy. Execute the workflow and check if the new data is correctly extracted and saved.

### WIIFM
Mastering this workflow helps you automate data collection, providing valuable insights for businesses. This skill can attract clients looking for efficient market analysis solutions, leading to potential income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note3" for IDs, table names, and URLs.
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
