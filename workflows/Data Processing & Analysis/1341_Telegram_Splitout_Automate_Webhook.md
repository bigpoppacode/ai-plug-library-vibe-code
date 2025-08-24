# Telegram Splitout Automate Webhook

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, memoryBufferWindow, toolHttpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
4. **Step 3: Search News (toolHttpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Wikipedia (toolHttpRequest)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Query Refiner (agent)** - This step performs a key action in the workflow.
8. **Step 7: Research AI Agent (agent)** - This step performs a key action in the workflow.
9. **Step 8: Google Search Web (toolHttpRequest)** - This step performs a key action in the workflow.
10. **Step 9: SerpApi (toolHttpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
12. **Step 11: Split Out (splitOut)** - This step performs a key action in the workflow.
13. **Step 12: Input Validation (code)** - This step performs a key action in the workflow.
14. **Step 13: Parse Research Output (code)** - This step performs a key action in the workflow.
15. **Step 14: Merge Split Items (code)** - This step performs a key action in the workflow.
16. **Step 15: Store Research Metadata (googleSheets)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Generate PDF HTML (code)** - This step performs a key action in the workflow.
19. **Step 18: Convert HTML to PDF (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Aggregate (aggregate)** - This step performs a key action in the workflow.
21. **Step 20: Download PDF (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Send Research to Gmail (gmail)** - This step performs a key action in the workflow.
23. **Step 22: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
24. **Step 23: Send PDF (telegram)** - This step performs a key action in the workflow.
25. **Step 24: Executed by Main AI Agent (executeWorkflowTrigger)** - This step performs a key action in the workflow.
26. **Step 25: Search Folder (googleDrive)** - This step performs a key action in the workflow.
27. **Step 26: If (if)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow generates research reports by collecting data from various sources like OpenAI, Wikipedia, news articles, and Google searches. It compiles this information, formats it into a PDF, and sends it via email and Telegram.

### Demonstrate
A business owner could use this workflow to automatically generate detailed reports for clients on industry trends or market research. This saves time and ensures consistent, high-quality outputs without manual effort.

### Imitate
1. Import the workflow into n8n.
2. Configure OpenAI and Google Sheets credentials.
3. Set up your trigger (e.g., a manual input or a scheduled time).
4. Customize the data sources you want to query.
5. Test the workflow to generate and send a report.

### Practice
Create a simple version of this workflow that only fetches data from Wikipedia and sends it as an email. Experiment with different topics to see how the output varies.

### WIIFM
Mastering this workflow allows you to automate complex report generation, providing value to clients through efficient data analysis and presentation. This can lead to increased customer satisfaction and potential revenue through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "If" for IDs, table names, and URLs.
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
