# Code Webhook Create Webhook

## 🚀 What It Does
This workflow automates a process involving googleSheets, webhook, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Append Material Request** node.
2. **Step 1: Append Material Request (googleSheets)** - This step performs a key action in the workflow.
3. **Step 2: Get Approvals (webhook)** - This step performs a key action in the workflow.
4. **Step 3: Standardize Data (set)** - This step performs a key action in the workflow.
5. **Step 4: Update Stock (code)** - This step performs a key action in the workflow.
6. **Step 5: Receive Issue Request (webhook)** - This step performs a key action in the workflow.
7. **Step 6: Send Approval Request (gmail)** - This step performs a key action in the workflow.
8. **Step 7: Prepare Approval (code)** - This step performs a key action in the workflow.
9. **Step 8: Create Record Issue (supabase)** - This step performs a key action in the workflow.
10. **Step 9: Search Product ID (supabase)** - This step performs a key action in the workflow.
11. **Step 10: Searck Issues (supabase)** - This step performs a key action in the workflow.
12. **Step 11: Update Current Stck (supabase)** - This step performs a key action in the workflow.
13. **Step 12: Merge Lookups (merge)** - This step performs a key action in the workflow.
14. **Step 13: Update Current Stock1 (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: LookUp Current stock1 (googleSheets)** - This step performs a key action in the workflow.
16. **Step 15: Low stock Detection1 (code)** - This step performs a key action in the workflow.
17. **Step 16: Merge1 (merge)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Append Raw Materials (googleSheets)** - This step performs a key action in the workflow.
20. **Step 19: Calculate Total Price (code)** - This step performs a key action in the workflow.
21. **Step 20: Calculate Updated Current Stock (code)** - This step performs a key action in the workflow.
22. **Step 21: Validate Quantity Received (code)** - This step performs a key action in the workflow.
23. **Step 22: Initialize New Product stock (googleSheets)** - This step performs a key action in the workflow.
24. **Step 23: Update Current Stock (googleSheets)** - This step performs a key action in the workflow.
25. **Step 24: LookUp Current stock (googleSheets)** - This step performs a key action in the workflow.
26. **Step 25: New Row Current Stock (supabase)** - This step performs a key action in the workflow.
27. **Step 26: Current Stock Update (supabase)** - This step performs a key action in the workflow.
28. **Step 27: Search Current Stock (supabase)** - This step performs a key action in the workflow.
29. **Step 28: Format response (itemLists)** - This step performs a key action in the workflow.
30. **Step 29: Merge (merge)** - This step performs a key action in the workflow.
31. **Step 30: Low stock Detection2 (code)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Receive Raw Materials Webhook (webhook)** - This step performs a key action in the workflow.
35. **Step 34: Standardize Raw Material Data (set)** - This step performs a key action in the workflow.
36. **Step 35: Lookup Existing Stock (googleSheets)** - This step performs a key action in the workflow.
37. **Step 36: Check If Product ID Exists (if)** - This step performs a key action in the workflow.
38. **Step 37: New Record Row (supabase)** - This step performs a key action in the workflow.
39. **Step 38: Trigger Low Stock Alert (if)** - This step performs a key action in the workflow.
40. **Step 39: Send Low Stock Email Alert (gmail)** - This step performs a key action in the workflow.
41. **Step 40: Low Stock Email Alert (gmail)** - This step performs a key action in the workflow.
42. **Step 41: Validate Issue Request Data (code)** - This step performs a key action in the workflow.
43. **Step 42: Verify Requested Quantity (code)** - This step performs a key action in the workflow.
44. **Step 43: Check Available Stock for Issue (googleSheets)** - This step performs a key action in the workflow.
45. **Step 44: Format Approval Response (set)** - This step performs a key action in the workflow.
46. **Step 45: Verify Approval Data (code)** - This step performs a key action in the workflow.
47. **Step 46: Retrieve Issue Request Details (googleSheets)** - This step performs a key action in the workflow.
48. **Step 47: Process Approval Decision (if)** - This step performs a key action in the workflow.
49. **Step 48: Get Stock for Issue Update from Current (googleSheets)** - This step performs a key action in the workflow.
50. **Step 49: Update Stock After Issue (googleSheets)** - This step performs a key action in the workflow.
51. **Step 50: Materials Issue Table Update (supabase)** - This step performs a key action in the workflow.
52. **Step 51: Is Stock is Low (if)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of handling material requests. It collects requests via a webhook, checks stock levels, sends approval requests, updates records in Google Sheets and Supabase, and alerts for low stock, ensuring efficient material management.

### Demonstrate
A business owner can use this workflow to streamline inventory management. For example, when a raw material is requested, the workflow automatically checks stock, sends approval requests, and updates records, saving time and reducing errors in manual tracking.

### Imitate
1. Set up a webhook to receive material requests.
2. Create a Google Sheets node to log requests.
3. Use a code node to validate stock levels.
4. Send approval emails using Gmail.
5. Update records in Supabase or Google Sheets after approval.

### Practice
Create a simplified version of this workflow. Use a manual trigger to simulate a material request, log it in Google Sheets, and send yourself an email confirmation. Experiment with modifying the approval logic to see how it affects the process.

### WIIFM
Mastering this workflow can help you automate tedious inventory tasks, making you more efficient and valuable as a consultant. It positions you as a provider of streamlined solutions, attracting clients who need effective automation to save time and money.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Append Material Request" and "Is Stock is Low" for IDs, table names, and URLs.
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
