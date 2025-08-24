# Splitout Code Update Webhook

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
This n8n workflow automates the process of updating product titles and descriptions in Printify based on triggers from Google Sheets, while also leveraging AI to enhance the content. It efficiently manages data flow between various applications to streamline e-commerce operations.

### Demonstrate
A business owner could use this workflow to automatically update product listings in Printify when new data is entered into a Google Sheet. This saves time and ensures that product information is always current, improving sales and customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up a Manual Trigger to start the workflow.
3. Connect your Printify and Google Sheets accounts.
4. Define the parameters for fetching product data.
5. Use AI to generate new titles/descriptions.
6. Update the products in Printify based on the new data.

### Practice
Try modifying the workflow to change the trigger from a Manual Trigger to a Google Sheets Trigger that activates when a new row is added. Test it by adding a new product entry to see if it updates in Printify accordingly.

### WIIFM
Mastering this workflow enables you to offer valuable automation services, saving businesses time and resources. By providing automated e-commerce solutions, you can attract more clients, increase your income, and build a reputation as a skilled automation consultant.

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
