# Manual GoogleSheets Update Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "880", height: "440", content: "# Data Extraction
## Retrieves recent posts from specific Reddit community (subreddit)
## Filters content by keywords and upvotes"
4. **Sticky Note2** `stickyNote` — color: "4", width: "820", height: "660"
5. **Sticky Note3** `stickyNote` — color: "6", width: "1460", height: "760"
6. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `openai/gpt-4.1-mini`
7. **OpenRouter Chat Model1** `lmChatOpenRouter` — model: `openai/gpt-4.1-mini`
8. **Get Posts** `reddit` — operation: **search**
9. **Filter Posts By Features** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Select Key Fields** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Basic LLM Chain** `chainLlm` — text: "=Decide whether this reddit post is describing a business-related problem or a need for a solution.", messages: "[object Object]", promptType: "define"
12. **Merge Input** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
13. **Filter Posts By Content** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Post Summarization** `chainSummarization` — options: "[object Object]"
15. **Edit Fields1** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Merge 3 Inputs** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
18. **Output The Results** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the extraction and analysis of Reddit posts from a specified subreddit. It searches for posts containing specific keywords and filters them based on the number of upvotes and other criteria. The workflow uses AI to determine if the posts describe a business problem or opportunity. Relevant posts are then summarized and the results are appended to a Google Sheet for further analysis.

### Demonstrate
A business consultant could use this workflow to identify potential leads or trends in a specific industry by monitoring discussions within a relevant subreddit. This helps in discovering business opportunities or understanding market needs without manual browsing.

### Imitate
1. Import the workflow into n8n.
2. Configure the Reddit node with your target subreddit and keywords.
3. Set up conditions in the "Filter Posts By Features" node.
4. Customize the AI prompt in the "Basic LLM Chain" node.
5. Connect your Google Sheets account and set the destination sheet.
6. Test and activate the workflow.

### Practice
Create a test subreddit with mock posts. Run the workflow and check if it correctly identifies and summarizes posts based on your criteria. Adjust the AI prompts and filters to see how it affects the results.

### WIIFM
Mastering this workflow allows you to automate lead generation and market research, saving time and enhancing insights. It can be a valuable service to offer clients, increasing your business's value proposition and potentially generating additional income through automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  