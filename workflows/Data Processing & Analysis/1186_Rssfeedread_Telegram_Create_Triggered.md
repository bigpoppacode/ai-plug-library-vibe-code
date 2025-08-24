# Rssfeedread Telegram Create Triggered

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, set, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Send Crypto or Company Name for Analysis** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Set Query (set)** - This step performs a key action in the workflow.
4. **Step 3: Crypto News & Sentiment Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: RSS Cointelegraph (rssFeedRead)** - This step performs a key action in the workflow.
6. **Step 5: RSS Bitcoinmagazine (rssFeedRead)** - This step performs a key action in the workflow.
7. **Step 6: RSS Coindesk (rssFeedRead)** - This step performs a key action in the workflow.
8. **Step 7: RSS Bitcoinist (rssFeedRead)** - This step performs a key action in the workflow.
9. **Step 8: RSS Newsbtc (rssFeedRead)** - This step performs a key action in the workflow.
10. **Step 9: RSS Cryptopotato (rssFeedRead)** - This step performs a key action in the workflow.
11. **Step 10: RSS 99bitcoins (rssFeedRead)** - This step performs a key action in the workflow.
12. **Step 11: RSS Cryptobriefing (rssFeedRead)** - This step performs a key action in the workflow.
13. **Step 12: RSS Crypto.news (rssFeedRead)** - This step performs a key action in the workflow.
14. **Step 13: Merge All Articles (merge)** - This step performs a key action in the workflow.
15. **Step 14: Filter by Query (code)** - This step performs a key action in the workflow.
16. **Step 15: Build Prompt (code)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Adds the sessionId (set)** - This step performs a key action in the workflow.
19. **Step 18: Summarize News & Sentiment (GPT-4o) (openAi)** - This step performs a key action in the workflow.
20. **Step 19: Prepare Telegram Message (set)** - This step performs a key action in the workflow.
21. **Step 20: Sends Response (telegram)** - This step performs a key action in the workflow.
22. **Step 21: Send Crypto or Company Name for Analysis (telegramTrigger)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering crypto news and sentiment analysis. It collects articles from multiple sources, filters them based on user queries, and summarizes the findings using OpenAI, then sends the summary via Telegram.

### Demonstrate
A business owner in the crypto industry can use this workflow to quickly analyze market sentiment and news about specific cryptocurrencies. This saves time and provides valuable insights for decision-making, enhancing their market strategy.

### Imitate
1. Set up a new n8n workflow.
2. Add a **Telegram Trigger** to receive user queries.
3. Use **RSS Feed Read nodes** to gather news from various crypto sources.
4. Merge and filter articles based on user queries.
5. Generate a summary using an **OpenAI node**.
6. Send the summary back to the user via **Telegram**.

### Practice
Create a simple version of this workflow that collects news from just one RSS feed. Test it by changing the query term and observing how the summary changes based on different inputs.

### WIIFM
Mastering this workflow allows you to offer valuable insights to clients in the crypto space, helping them stay informed and make data-driven decisions. This skill can be monetized as a service, generating income through consulting or automated reporting solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Sticky Note9" for IDs, table names, and URLs.
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
