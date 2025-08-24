# Splitout Code Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get list of owners (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Get list of clients for owner (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: If (if)** - This step performs a key action in the workflow.
7. **Step 6: Edit (set)** - This step performs a key action in the workflow.
8. **Step 7: Increment Page (set)** - This step performs a key action in the workflow.
9. **Step 8: Split Out1 (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: Merge al the entries (code)** - This step performs a key action in the workflow.
11. **Step 10: If linkedin url is empty (if)** - This step performs a key action in the workflow.
12. **Step 11: if new post (if)** - This step performs a key action in the workflow.
13. **Step 12: Get list of clients (executeWorkflow)** - This step performs a key action in the workflow.
14. **Step 13: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Get last post (executeWorkflow)** - This step performs a key action in the workflow.
16. **Step 15: Gmail (gmail)** - This step performs a key action in the workflow.
17. **Step 16: Search for user by link (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Do nothing (noOp)** - This step performs a key action in the workflow.
19. **Step 18: Merge profileURL (code)** - This step performs a key action in the workflow.
20. **Step 19: Set last_post (set)** - This step performs a key action in the workflow.
21. **Step 20: Set last_position (set)** - This step performs a key action in the workflow.
22. **Step 21: if new position (if)** - This step performs a key action in the workflow.
23. **Step 22: Set data here (set)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Change this for testing (filter)** - This step performs a key action in the workflow.
26. **Step 25: Create entry with email (googleSheets)** - This step performs a key action in the workflow.
27. **Step 26: Get rows from document (googleSheets)** - This step performs a key action in the workflow.
28. **Step 27: Search for user profile by names (httpRequest)** - This step performs a key action in the workflow.
29. **Step 28: Profile URL not found? (if)** - This step performs a key action in the workflow.
30. **Step 29: Set the profile URL (set)** - This step performs a key action in the workflow.
31. **Step 30: Set the profile URL1 (set)** - This step performs a key action in the workflow.
32. **Step 31: Update last post (googleSheets)** - This step performs a key action in the workflow.
33. **Step 32: Updates last position (googleSheets)** - This step performs a key action in the workflow.
34. **Step 33: Set post_updated (set)** - This step performs a key action in the workflow.
35. **Step 34: Set position_updated (set)** - This step performs a key action in the workflow.
36. **Step 35: Generate the email text (code)** - This step performs a key action in the workflow.
37. **Step 36: Merge on email (merge)** - This step performs a key action in the workflow.
38. **Step 37: Split Out owners (splitOut)** - This step performs a key action in the workflow.
39. **Step 38: Get current owner (filter)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching client data from HubSpot, checking for updates on their LinkedIn profiles, and emailing the respective owners about changes, thus streamlining client management and communication.

### Demonstrate
A business owner could use this workflow to automatically track and notify sales reps about client updates, like new LinkedIn posts or job changes, ensuring they stay informed and can engage with clients effectively, enhancing relationships.

### Imitate
1. Import the workflow into n8n.
2. Configure the HubSpot and Gmail nodes with your credentials.
3. Set up the manual trigger for testing.
4. Adjust the Google Sheets link and email addresses in the "Set data here" node.
5. Execute the workflow to see it in action.

### Practice
Try modifying the workflow to include a new condition that sends a follow-up email if a client has not posted on LinkedIn in the last month. This will help reinforce your understanding of logic nodes and data handling.

### WIIFM
Mastering this workflow can help you offer valuable automation services to businesses, enhancing their client engagement strategies while saving time and resources, thus positioning you as an essential partner in their growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note8" for IDs, table names, and URLs.
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
