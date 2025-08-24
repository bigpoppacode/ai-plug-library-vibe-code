# Wait Splitout Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note20 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Set Guidelines (set)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Get Brand Guidelines (airtable)** - This step performs a key action in the workflow.
9. **Step 8: Get SEO Keywords (airtable)** - This step performs a key action in the workflow.
10. **Step 9: Remove Duplicates (removeDuplicates)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Keyword Filter (filter)** - This step performs a key action in the workflow.
13. **Step 12: Get Content (airtable)** - This step performs a key action in the workflow.
14. **Step 13: Split Out Content (splitOut)** - This step performs a key action in the workflow.
15. **Step 14: Split Out Keywords (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Limit (limit)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Script Prep (openAi)** - This step performs a key action in the workflow.
19. **Step 18: Split Out Scenes (splitOut)** - This step performs a key action in the workflow.
20. **Step 19: Split Out TN Prompt (splitOut)** - This step performs a key action in the workflow.
21. **Step 20: Leo - Improve Prompt1 (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Leo - Get imageId1 (httpRequest)** - This step performs a key action in the workflow.
23. **Step 22: Prompt Settings (set)** - This step performs a key action in the workflow.
24. **Step 23: Leo - Generate Image1 (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Wait 30 Seconds (wait)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Leo - Improve Prompt (httpRequest)** - This step performs a key action in the workflow.
29. **Step 28: Leo - Get imageId (httpRequest)** - This step performs a key action in the workflow.
30. **Step 29: Prompt Settings1 (set)** - This step performs a key action in the workflow.
31. **Step 30: Leo - Generate Image (httpRequest)** - This step performs a key action in the workflow.
32. **Step 31: Wait 30 Seconds1 (wait)** - This step performs a key action in the workflow.
33. **Step 32: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Add Asset Info (airtable)** - This step performs a key action in the workflow.
36. **Step 35: Add Asset Info1 (airtable)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Wikipedia (toolWikipedia)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of generating 9:16 aspect ratio images based on specified content. It retrieves brand guidelines and SEO keywords from Airtable, filters relevant keywords, creates image prompts using OpenAI, generates images via Leonardo, and stores the results in Airtable.

### Demonstrate
A business owner could use this workflow to streamline social media content creation. By automating the generation of images tailored to their brand guidelines, they save time and ensure consistent visual identity across platforms, enhancing their marketing efforts.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a **Manual Trigger** to start the process.
3. Use **Airtable Nodes** to retrieve brand guidelines and SEO keywords.
4. Implement a **Filter Node** to select relevant keywords.
5. Use **OpenAI Node** to generate prompts.
6. Connect to **Leonardo** for image generation.
7. Save results back to Airtable using another **Airtable Node**.

### Practice
Try creating a simplified version of this workflow that only retrieves and displays brand guidelines. Experiment with adding a manual trigger and an output node to see how data flows through the process.

### WIIFM
Mastering this workflow allows you to offer valuable services to clients, automate content creation, and enhance efficiency. This skill can help you attract customers, generate income, and position yourself as a sought-after automation consultant in the AI space.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note2" for IDs, table names, and URLs.
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
