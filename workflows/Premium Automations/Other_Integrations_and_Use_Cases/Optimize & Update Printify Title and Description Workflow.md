# Optimize & Update Printify Title And Description Workflow

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Printify - Get Shops (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Printify - Get Products (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Split Out (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
7. **Step 6: Split - id, title, desc (splitOut)** - This step performs a key action in the workflow.
8. **Step 7: Calculator (toolCalculator)** - This step performs a key action in the workflow.
9. **Step 8: Wikipedia (toolWikipedia)** - This step performs a key action in the workflow.
10. **Step 9: Printify - Update Product (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Brand Guidelines + Custom Instructions (set)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Google Sheets Trigger (googleSheetsTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Printify - Get Shops1 (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: GS - Add Product Option (googleSheets)** - This step performs a key action in the workflow.
17. **Step 16: Update Product Option (googleSheets)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: If1 (if)** - This step performs a key action in the workflow.
22. **Step 21: Number of Options (set)** - This step performs a key action in the workflow.
23. **Step 22: Calculate Options (code)** - This step performs a key action in the workflow.
24. **Step 23: Remember Options (set)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Generate Title and Desc (openAi)** - This step performs a key action in the workflow.
27. **Step 26: If (if)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of updating product titles and descriptions in Printify based on data from Google Sheets. It triggers manually, retrieves shop and product data, processes it, and sends updates back to Printify, ensuring your product listings are current and optimized.

### Demonstrate
A business owner using Printify for an online store can automate product updates for seasonal promotions. Instead of manually editing each product, this workflow fetches data from Google Sheets and updates titles and descriptions automatically, saving time and reducing errors.

### Imitate
1. Create a new n8n workflow and add a **Manual Trigger**.
2. Add a **Google Sheets Trigger** to monitor updates.
3. Use **HTTP Request** nodes to get shops and products from Printify.
4. Process the data with **Set** nodes to prepare for updates.
5. Use another **HTTP Request** to update products in Printify.
6. Connect everything and test your workflow.

### Practice
Try modifying the workflow to fetch product data from a different source, like an Excel sheet or a different API. Observe how changing the data source impacts the workflow and ensure it still updates Printify correctly.

### WIIFM
Mastering this workflow means you can offer clients valuable automation services that streamline their e-commerce operations. By saving them time and ensuring accurate product listings, you can attract more customers, enhance their sales, and potentially increase your income as a consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "If" for IDs, table names, and URLs.
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
