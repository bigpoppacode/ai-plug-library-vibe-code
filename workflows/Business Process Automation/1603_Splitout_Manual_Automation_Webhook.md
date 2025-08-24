# Splitout Manual Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, outputParserStructured.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: ScrapingBee- Get page HTML (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
5. **Step 4: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
6. **Step 5: Split Out (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: Google Sheets - Get list of URLs (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Set fields (set)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: ScrapingBee - Get page screenshot (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: HTML-based Scraping Tool (toolWorkflow)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Google Sheets - Create Rows (googleSheets)** - This step performs a key action in the workflow.
22. **Step 21: Vision-based Scraping Agent (agent)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: HTML-Scraping Tool (executeWorkflowTrigger)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Set fields - from AI agent query (set)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: HTML to Markdown (markdown)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates data extraction from web pages using an AI agent. It scrapes HTML content, processes it with a Google AI model, and stores the results in Google Sheets, making data collection efficient and structured.

### Demonstrate
A business owner can use this workflow to automate product data scraping from competitors’ websites, enhancing their market analysis without manual effort. This saves time and provides accurate, up-to-date information for strategic decisions.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a **Manual Trigger** to start the process.
3. Use **ScrapingBee** to fetch HTML from target URLs.
4. Process the data with **Google Gemini** for structured output.
5. Store results in **Google Sheets**.
6. Test and adjust parameters as needed.

### Practice
Try modifying the workflow by changing the URL in the ScrapingBee node to scrape a different website. Observe the changes in the data extracted and how it gets structured in Google Sheets.

### WIIFM
Mastering this workflow can help you offer valuable automation services, attracting clients who need data-driven insights. This could lead to higher-paying projects and recurring revenue streams in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note14" for IDs, table names, and URLs.
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
