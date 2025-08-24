# AI Web Researcher For Sales

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Input (set)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Get website content (toolWorkflow)** - This step performs a key action in the workflow.
6. **Step 5: SerpAPI - Search Google (toolSerpApi)** - This step performs a key action in the workflow.
7. **Step 6: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
9. **Step 8: AI Researcher Output Data (set)** - This step performs a key action in the workflow.
10. **Step 9: Google Sheets - Update Row with data (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: Merge data (merge)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Get rows to enrich (googleSheets)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: AI company researcher (agent)** - This step performs a key action in the workflow.
21. **Step 20: Search Google with ScrapingBee (toolWorkflow)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates company research by using a manual trigger to gather data from various sources, including Google searches and website content. It enriches this data and logs it into Google Sheets for easy access and analysis.

### Demonstrate
A business owner might use this workflow to efficiently gather competitive intelligence on companies by automatically retrieving their website content, social media links, and pricing information, saving time and ensuring comprehensive data collection.

### Imitate
1. Set up a manual trigger in n8n.
2. Use a "Set" node to define input variables (like company name).
3. Add an OpenAI node for generating research prompts.
4. Include an HTTP request node to fetch website content.
5. Use Google Sheets nodes to log data and update rows as needed.
6. Test the workflow to ensure data flows correctly.

### Practice
Try modifying the workflow to research a different type of information, like industry trends for a specified company. Adjust input variables and output formatting in Google Sheets to see how the changes affect the results.

### WIIFM
Mastering this workflow allows you to provide valuable insights for businesses, establish yourself as a go-to automation consultant, and create a scalable service that can generate income through ongoing client engagements.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "Sticky Note7" for IDs, table names, and URLs.
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
