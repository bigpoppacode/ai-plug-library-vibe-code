# Enrich Property Inventory Survey With Image Recognition And AI Agent

## 🚀 What It Does
This workflow automates a process involving manualTrigger, lmChatOpenAi, airtable.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Get Applicable Rows (airtable)** - This step performs a key action in the workflow.
5. **Step 4: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Edit Fields (set)** - This step performs a key action in the workflow.
7. **Step 6: Fallback Response (set)** - This step performs a key action in the workflow.
8. **Step 7: SERP Google Reverse Image API (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Reverse Image Search Response (set)** - This step performs a key action in the workflow.
10. **Step 9: Reverse Image Search Tool (toolWorkflow)** - This step performs a key action in the workflow.
11. **Step 10: Firecrawl Scrape API (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Scrape Success? (if)** - This step performs a key action in the workflow.
13. **Step 12: Firecrawl Scrape Success Response (set)** - This step performs a key action in the workflow.
14. **Step 13: Firecrawl scrape Error Response (set)** - This step performs a key action in the workflow.
15. **Step 14: Firecrawl Web Scaper Tool (toolWorkflow)** - This step performs a key action in the workflow.
16. **Step 15: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Enrich Product Rows (airtable)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Analyse Image (openAi)** - This step performs a key action in the workflow.
25. **Step 24: Object Identifier Agent (agent)** - This step performs a key action in the workflow.
26. **Step 25: Actions Router (switch)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing images stored in Airtable, using AI to enrich product data by performing reverse image searches and web scraping, ultimately updating the database with the enriched information.

### Demonstrate
A business owner could use this workflow to streamline inventory management. For example, when adding new products to an online store, the workflow can automatically identify and enrich product details, saving time on manual data entry and improving accuracy.

### Imitate
1. Set up an n8n instance and connect it to Airtable and an AI service (like OpenAI).
2. Create a manual trigger for testing.
3. Add a node to fetch images from Airtable.
4. Implement AI nodes to analyze images and perform reverse image searches.
5. Add nodes to scrape relevant web data.
6. Use a node to update Airtable with enriched data.

### Practice
Try modifying the workflow to include different AI models or APIs. For example, replace the image analysis model with a different one or change the web scraper to target a new website. Test the workflow with sample images and review the results.

### WIIFM
Mastering this workflow can significantly enhance your automation skills, allowing you to offer valuable services to clients. By automating data enrichment tasks, you can help businesses save time and increase productivity, positioning yourself as a sought-after automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "Sticky Note9" for IDs, table names, and URLs.
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
