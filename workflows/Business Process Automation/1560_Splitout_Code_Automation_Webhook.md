# Splitout Code Automation Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, stickyNote, shopify.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: GetFufillmentOrders (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Shopify (shopify)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
13. **Step 12: New Customer? (if)** - This step performs a key action in the workflow.
14. **Step 13: Lookup Customers (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: SelectFields (set)** - This step performs a key action in the workflow.
16. **Step 15: orderPreprocessing (code)** - This step performs a key action in the workflow.
17. **Step 16: Create Customer (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Set Business Central Customer Id (set)** - This step performs a key action in the workflow.
19. **Step 18: Create Order Lines (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: End (noOp)** - This step performs a key action in the workflow.
21. **Step 20: Split Out (splitOut)** - This step performs a key action in the workflow.
22. **Step 21: DELETE Sales Order (httpRequest)** - This step performs a key action in the workflow.
23. **Step 22: D365 BC Environment Settings (set)** - This step performs a key action in the workflow.
24. **Step 23: Create Sales Order (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Set Lines Invoice (set)** - This step performs a key action in the workflow.
27. **Step 26: Set Lines SO (set)** - This step performs a key action in the workflow.
28. **Step 27: Split Out Invoice (splitOut)** - This step performs a key action in the workflow.
29. **Step 28: Create Invoice Lines (httpRequest)** - This step performs a key action in the workflow.
30. **Step 29: Filter (filter)** - This step performs a key action in the workflow.
31. **Step 30: Create Sales Invoice (httpRequest)** - This step performs a key action in the workflow.
32. **Step 31: End1 (noOp)** - This step performs a key action in the workflow.
33. **Step 32: Sales Invoice (set)** - This step performs a key action in the workflow.
34. **Step 33: Lookup Sales Order (httpRequest)** - This step performs a key action in the workflow.
35. **Step 34: Sales Order Mapping (set)** - This step performs a key action in the workflow.
36. **Step 35: New SO? (if)** - This step performs a key action in the workflow.
37. **Step 36: Lookup Sales Invoice (httpRequest)** - This step performs a key action in the workflow.
38. **Step 37: New Invoice? (if)** - This step performs a key action in the workflow.
39. **Step 38: POS? (if)** - This step performs a key action in the workflow.
40. **Step 39: DELETE Sales Invoice (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the integration of Shopify orders into Microsoft Dynamics 365 Business Central. It retrieves fulfillment orders, checks for existing customers, creates new ones if necessary, and generates sales orders or invoices based on the order type.

### Demonstrate
A business owner can use this workflow to automatically convert Shopify orders into entries in D365 Business Central. This saves time, reduces manual data entry errors, and ensures accurate order tracking and customer management.

### Imitate
1. Import the workflow into n8n.
2. Configure the Shopify and D365 credentials.
3. Edit the "D365 BC Environment Settings" node with your company details.
4. Set the frequency in the "Schedule Trigger" node.
5. Test by placing a new order in Shopify.

### Practice
Try modifying the workflow to include a notification step that sends an email whenever a new order is processed. This will reinforce your understanding of how data flows and how to customize workflows for specific business needs.

### WIIFM
Mastering this workflow allows you to offer valuable automation services that streamline order management for e-commerce businesses, potentially leading to new clients, increased efficiency, and higher income through automation consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "GetFufillmentOrders" and "DELETE Sales Invoice" for IDs, table names, and URLs.
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
