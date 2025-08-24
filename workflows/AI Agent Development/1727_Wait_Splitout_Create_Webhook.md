# Wait Splitout Create Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, splitOut, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **get order data** node.
2. **Step 1: get order data (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Split Out Order Data (splitOut)** - This step performs a key action in the workflow.
4. **Step 3: Set Address Fields (set)** - This step performs a key action in the workflow.
5. **Step 4: Check Address endereco api (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Split Out Corrected Address (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: set new delivery address to billbee (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Wait (wait)** - This step performs a key action in the workflow.
9. **Step 8: Wait1 (wait)** - This step performs a key action in the workflow.
10. **Step 9: check if new address is not empty (if)** - This step performs a key action in the workflow.
11. **Step 10: set billbee tag (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: check if housenumer is not empty (if)** - This step performs a key action in the workflow.
17. **Step 16: check if addressline 2 contains number (if)** - This step performs a key action in the workflow.
18. **Step 17: Filter (filter)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: set value of addressline2 as housenumber (set)** - This step performs a key action in the workflow.
21. **Step 20: Filter Out PickUpShops (filter)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: check if addressline 2 contains number and letter (if)** - This step performs a key action in the workflow.
24. **Step 23: set billbee tag manual check (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: set value of addressline2 as housenumber number+letter (set)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: set billbee success (httpRequest)** - This step performs a key action in the workflow.
29. **Step 28: ConfigNode (set)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Webhook (webhook)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "get order data" and "Webhook" for IDs, table names, and URLs.
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
