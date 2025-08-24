# Splitout Code Automate Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, n8n, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Update workflow tags (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: GET all workflows (n8n)** - This step performs a key action in the workflow.
4. **Step 3: List callers of subworkflows (code)** - This step performs a key action in the workflow.
5. **Step 4: Exclude uncalled workflows (filter)** - This step performs a key action in the workflow.
6. **Step 5: Exclude missing workflows (filter)** - This step performs a key action in the workflow.
7. **Step 6: And every Sunday (scheduleTrigger)** - This step performs a key action in the workflow.
8. **Step 7: When this workflow is activated (n8nTrigger)** - This step performs a key action in the workflow.
9. **Step 8: GET workflow(s) (n8n)** - This step performs a key action in the workflow.
10. **Step 9: Count callers and identify new callers (set)** - This step performs a key action in the workflow.
11. **Step 10: Loop through workflows (splitInBatches)** - This step performs a key action in the workflow.
12. **Step 11: GET all tags (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Remove existing tags from new_callers list (set)** - This step performs a key action in the workflow.
14. **Step 13: If any new callers (if)** - This step performs a key action in the workflow.
15. **Step 14: Split out new callers as new tags (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Create new tags (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Return original pass through values (code)** - This step performs a key action in the workflow.
18. **Step 17: Merge (merge)** - This step performs a key action in the workflow.
19. **Step 18: GET all tags again (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Create tag id:name dictionary (set)** - This step performs a key action in the workflow.
21. **Step 20: Retrieve tag ids and names from dictionary (set)** - This step performs a key action in the workflow.
22. **Step 21: Return dependency graph data (set)** - This step performs a key action in the workflow.
23. **Step 22: Combine dependency graph values into labels (aggregate)** - This step performs a key action in the workflow.
24. **Step 23: Visualize subworkflow dependency graph (quickChart)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: SET instance_url (set)** - This step performs a key action in the workflow.
35. **Step 34: When viewed in a browser (webhook)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Format workflow relationship data for rendering (code)** - This step performs a key action in the workflow.
39. **Step 38: Visualize dependency graph with MermaidJS (respondToWebhook)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Update workflow tags" and "Sticky Note12" for IDs, table names, and URLs.
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
