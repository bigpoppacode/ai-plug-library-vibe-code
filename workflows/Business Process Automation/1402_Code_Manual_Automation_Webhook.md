# Code Manual Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Set the URLs (set)** - This step performs a key action in the workflow.
5. **Step 4: Bright Data MCP Client For LinkedIn Person (mcpClient)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: List all tools for Bright Data (mcpClient)** - This step performs a key action in the workflow.
8. **Step 7: Bright Data MCP Client For LinkedIn Company (mcpClient)** - This step performs a key action in the workflow.
9. **Step 8: Set the LinkedIn Company URL (set)** - This step performs a key action in the workflow.
10. **Step 9: Webhook for LinkedIn Company Web Scraper (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: LinkedIn Data Extractor (informationExtractor)** - This step performs a key action in the workflow.
12. **Step 11: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
13. **Step 12: List all available tools for Bright Data (mcpClient)** - This step performs a key action in the workflow.
14. **Step 13: Code (code)** - This step performs a key action in the workflow.
15. **Step 14: Merge (merge)** - This step performs a key action in the workflow.
16. **Step 15: Aggregate (aggregate)** - This step performs a key action in the workflow.
17. **Step 16: Create a binary data for LinkedIn person info extract (function)** - This step performs a key action in the workflow.
18. **Step 17: Write the LinkedIn person info to disk (readWriteFile)** - This step performs a key action in the workflow.
19. **Step 18: Create a binary data for LinkedIn company info extract (function)** - This step performs a key action in the workflow.
20. **Step 19: Write the LinkedIn company info to disk (readWriteFile)** - This step performs a key action in the workflow.
21. **Step 20: Webhook for LinkedIn Person Web Scraper (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping LinkedIn profiles and company information using Bright Data and Google Gemini. It collects data, processes it, and saves it to files for further use, all triggered by a manual start.

### Demonstrate
A business owner might use this workflow to gather competitive intelligence by scraping LinkedIn profiles of potential clients or competitors, saving valuable time and providing insights for marketing strategies.

### Imitate
1. Open n8n and create a new workflow.
2. Add a Manual Trigger node to start the workflow.
3. Set up a "Set" node for the LinkedIn URLs you want to scrape.
4. Use the MCP Client node to scrape data from the specified LinkedIn pages.
5. Add HTTP Request nodes to send scraped data to a webhook or save it to files.
6. Test and adjust as necessary.

### Practice
Try modifying the workflow to scrape different LinkedIn profiles or companies, then save the results in a different format (e.g., CSV instead of JSON). This will help you understand data handling and transformation in n8n.

### WIIFM
Mastering this workflow enables you to automate data collection, saving time and increasing efficiency. This skill can help you attract clients needing data-driven insights, positioning you as a valuable resource in the AI automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Webhook for LinkedIn Person Web Scraper" for IDs, table names, and URLs.
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
