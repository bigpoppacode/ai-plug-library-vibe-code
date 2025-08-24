# Splitout Schedule Create Scheduled

## 🚀 What It Does
This workflow automates a process involving splitOut, set, embeddingsOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Split Out (splitOut)** - This step performs a key action in the workflow.
3. **Step 2: Normalize Fields (set)** - This step performs a key action in the workflow.
4. **Step 3: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
6. **Step 5: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
7. **Step 6: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: Get Articles Daily (scheduleTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Send Weekly Summary (scheduleTrigger)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: News reader AI (agent)** - This step performs a key action in the workflow.
14. **Step 13: Send Newsletter (gmail)** - This step performs a key action in the workflow.
15. **Step 14: Convert Response to an Email-Friendly Format (markdown)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Your topics of interest (set)** - This step performs a key action in the workflow.
18. **Step 17: Store News Articles (vectorStoreInMemory)** - This step performs a key action in the workflow.
19. **Step 18: Set Tech News RSS Feeds (set)** - This step performs a key action in the workflow.
20. **Step 19: Read RSS News Feeds (rssFeedRead)** - This step performs a key action in the workflow.
21. **Step 20: Get News Articles (vectorStoreInMemory)** - This step performs a key action in the workflow.
22. **Step 21: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering tech news from various RSS feeds, analyzing it with OpenAI, and sending a personalized weekly newsletter to the user. It saves time by summarizing important articles, allowing users to stay informed without daily distractions.

### Demonstrate
A business owner could use this workflow to automate their weekly tech newsletter. Instead of manually curating articles, they can set it up once and receive a personalized summary every week, keeping their audience engaged without the hassle of daily updates.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and Gmail accounts.
3. Customize the RSS feeds in the “Set Tech News RSS Feeds” node.
4. Edit your interests in the “Your Topics of Interest” node.
5. Activate the workflow and let it run automatically.

### Practice
Try modifying the list of RSS feeds to include your favorite tech blogs or news sites. Observe how the workflow adjusts and sends you a personalized newsletter based on your new selections.

### WIIFM
Mastering this workflow could help you build a service that automates content curation for businesses, allowing you to create value for clients, enhance customer engagement, and generate income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Split Out" and "Sticky Note6" for IDs, table names, and URLs.
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
