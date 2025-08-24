# Splitout Filter Automation Webhook

## 🚀 What It Does
This workflow automates a process involving toolWorkflow, lmChatOpenAi, outputParserStructured.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute workflow** node.
2. **Step 1: Text (toolWorkflow)** - This step performs a key action in the workflow.
3. **Step 2: URLs (toolWorkflow)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: JSON Parser (outputParserStructured)** - This step performs a key action in the workflow.
6. **Step 5: Map company name and website (set)** - This step performs a key action in the workflow.
7. **Step 6: Execute workflow (manualTrigger)** - This step performs a key action in the workflow.
8. **Step 7: Get companies (supabase)** - This step performs a key action in the workflow.
9. **Step 8: Select company name and website (set)** - This step performs a key action in the workflow.
10. **Step 9: Set social media array (set)** - This step performs a key action in the workflow.
11. **Step 10: Merge all data (merge)** - This step performs a key action in the workflow.
12. **Step 11: Insert new row (supabase)** - This step performs a key action in the workflow.
13. **Step 12: Convert HTML to Markdown (markdown)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Retrieve URLs (html)** - This step performs a key action in the workflow.
18. **Step 17: Split out URLs (splitOut)** - This step performs a key action in the workflow.
19. **Step 18: Remove duplicated (removeDuplicates)** - This step performs a key action in the workflow.
20. **Step 19: Set domain to path (set)** - This step performs a key action in the workflow.
21. **Step 20: Filter out invalid URLs (filter)** - This step performs a key action in the workflow.
22. **Step 21: Aggregate URLs (aggregate)** - This step performs a key action in the workflow.
23. **Step 22: Filter out empty hrefs (filter)** - This step performs a key action in the workflow.
24. **Step 23: Set domain (text) (set)** - This step performs a key action in the workflow.
25. **Step 24: Add protocool to domain (text) (set)** - This step performs a key action in the workflow.
26. **Step 25: Get website (text) (httpRequest)** - This step performs a key action in the workflow.
27. **Step 26: Set response (text) (set)** - This step performs a key action in the workflow.
28. **Step 27: Set domain (URL) (set)** - This step performs a key action in the workflow.
29. **Step 28: Get website (URL) (httpRequest)** - This step performs a key action in the workflow.
30. **Step 29: Set response (URL) (set)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Add protocool to domain (URL) (set)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Crawl website (agent)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of crawling websites to extract social media links and relevant information. It retrieves text and URLs, sends them to an AI model for processing, and then organizes the data for further use, such as storing it in a database.

### Demonstrate
A business owner could use this workflow to automatically gather social media profiles of competitors from their websites, helping them analyze marketing strategies and improve their online presence without manual data collection.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a **Manual Trigger** node to start the workflow.
3. Use the **Supabase** node to retrieve company data.
4. Implement **HTTP Request** nodes to fetch website content.
5. Add the **OpenAI** node to analyze the retrieved data.
6. Store results in **Supabase** using the **Insert New Row** node.

### Practice
Try modifying the workflow to extract different types of data, such as contact information or product details from a website. Test it on a few different sites to see how it handles various structures.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, helping businesses streamline their data collection processes. This can lead to potential clients seeking your expertise, creating opportunities for income generation through consulting or automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Text" and "Crawl website" for IDs, table names, and URLs.
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
