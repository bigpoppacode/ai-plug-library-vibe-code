# Splitout Code Automate Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, set, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Token Request (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Assign Credentials (set)** - This step performs a key action in the workflow.
4. **Step 3: Dartagnan Project list (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Create email template (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: List Available Email Template Braze (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Filtered Project Campaign (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Filtering Dartagnan Campaigns (set)** - This step performs a key action in the workflow.
9. **Step 8: Split Out (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: Filtering Braze Email Template (set)** - This step performs a key action in the workflow.
11. **Step 10: Not existing In Braze (merge)** - This step performs a key action in the workflow.
12. **Step 11: Existing In Braze (merge)** - This step performs a key action in the workflow.
13. **Step 12: Dartagnan HTML & MEDIA To Update (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Encode Content To Update (set)** - This step performs a key action in the workflow.
15. **Step 14: Dartagnan HTML & MEDIA Campagne to Create (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: Encode Content to Create (set)** - This step performs a key action in the workflow.
17. **Step 16: If campaign is modified recently (if)** - This step performs a key action in the workflow.
18. **Step 17: Filter Braze vs Dartagnan (if)** - This step performs a key action in the workflow.
19. **Step 18: Embed image in HTML (code)** - This step performs a key action in the workflow.
20. **Step 19: Embed image in HTML 1 (code)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Every 5 minutes start (scheduleTrigger)** - This step performs a key action in the workflow.
29. **Step 28: Update existing email template in Braze (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of syncing email templates between Dartagnan and Braze. It retrieves project data, checks for updates, and creates or updates email templates based on the latest information, ensuring marketing teams always have the right content.

### Demonstrate
A marketing manager can use this workflow to automatically update email campaigns with the latest project information from Dartagnan, ensuring timely communication with customers without manual updates, enhancing engagement and efficiency.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add the **Token Request** node to authenticate with Dartagnan.
3. Use the **Assign Credentials** node to set your API keys.
4. Add **httpRequest** nodes to interact with Dartagnan and Braze APIs.
5. Configure conditions to check if templates need updating or creating.
6. Test the workflow to ensure it syncs templates correctly.

### Practice
Try modifying the workflow to include a new email template creation option that triggers when specific project criteria are met. Experiment with different conditions to see how they affect the template syncing process.

### WIIFM
Mastering this workflow allows you to offer automation services that save clients time and ensure their marketing content is always up-to-date, making you a valuable partner in their growth efforts and increasing your service revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Token Request" and "Update existing email template in Braze" for IDs, table names, and URLs.
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
