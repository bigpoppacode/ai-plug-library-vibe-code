# Splitout Schedule Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, convertToFile, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Convert to File (convertToFile)** - This step performs a key action in the workflow.
4. **Step 3: Split Out (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Request breaches (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Read last breach (readWriteFile)** - This step performs a key action in the workflow.
9. **Step 8: Get JSON from file (extractFromFile)** - This step performs a key action in the workflow.
10. **Step 9: Check for content (if)** - This step performs a key action in the workflow.
11. **Step 10: Set to none (set)** - This step performs a key action in the workflow.
12. **Step 11: If - check for new (if)** - This step performs a key action in the workflow.
13. **Step 12: Set breach name (set)** - This step performs a key action in the workflow.
14. **Step 13: Write breach name to file (readWriteFile)** - This step performs a key action in the workflow.
15. **Step 14: New breach (noOp)** - This step performs a key action in the workflow.
16. **Step 15: Old breach (noOp)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Set empty json (set)** - This step performs a key action in the workflow.
22. **Step 21: Write cache.json (readWriteFile)** - This step performs a key action in the workflow.
23. **Step 22: Convert json to file (convertToFile)** - This step performs a key action in the workflow.
24. **Step 23: Add information about the last breach we alerted (merge)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow checks for new data breaches from haveibeenpwned.com and alerts users if any new breaches are found, while also maintaining a record of the last breach checked.

### Demonstrate
A business owner could use this workflow to automatically monitor data breaches that may affect their customers, ensuring they can proactively notify affected users and maintain trust.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger for testing.
3. Configure the HTTP request to fetch data from haveibeenpwned.com.
4. Use logic nodes to check for new breaches and send alerts via email or Slack.
5. Schedule the workflow to run regularly.

### Practice
Try modifying the workflow to send alerts to a different messaging platform (like Discord) instead of email. Test it to ensure alerts are correctly sent when new breaches are detected.

### WIIFM
Mastering this workflow allows you to provide valuable monitoring services for businesses, creating a reliable source of income by helping them protect their customers and build trust through proactive communication.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note6" for IDs, table names, and URLs.
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
