# Limit Schedule Automation Scheduled

## 🚀 What It Does
This workflow automates a process involving embeddingsOpenAi, textSplitterTokenSplitter, splitInBatches.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Token Splitter (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
4. **Step 3: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
5. **Step 4: Question and Answer Chain (chainRetrievalQa)** - This step performs a key action in the workflow.
6. **Step 5: Vector Store Retriever (retrieverVectorStore)** - This step performs a key action in the workflow.
7. **Step 6: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Limit (limit)** - This step performs a key action in the workflow.
12. **Step 11: Limit1 (limit)** - This step performs a key action in the workflow.
13. **Step 12: Delete old embeddings if exist (supabase)** - This step performs a key action in the workflow.
14. **Step 13: Get page blocks (notion)** - This step performs a key action in the workflow.
15. **Step 14: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Input Reference (noOp)** - This step performs a key action in the workflow.
18. **Step 17: Notion Trigger (notionTrigger)** - This step performs a key action in the workflow.
19. **Step 18: Get updated pages (notion)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note23 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note24 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note25 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note26 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note27 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note28 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Supabase Vector Store1 (vectorStoreSupabase)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note30 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note31 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note32 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note29 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note33 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note34 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note35 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Concatenate to single string (summarize)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of retrieving and analyzing data from a Notion database using OpenAI's AI models, allowing users to ask questions and receive informed answers based on their stored knowledge.

### Demonstrate
A business owner could use this workflow to automate customer inquiries. For instance, a customer support agent can ask questions about product documentation stored in Notion, and the AI provides accurate answers, saving time and improving service quality.

### Imitate
1. Import the workflow into n8n.
2. Set up a trigger (manual or from Notion).
3. Configure the OpenAI nodes with your API key.
4. Adjust the Notion database ID to point to your data.
5. Test by running the workflow and asking questions based on your data.

### Practice
Create a simple version of this workflow that only retrieves data from Notion and outputs it to a Google Sheet. This will help you understand data flow and how to connect different nodes.

### WIIFM
Mastering this workflow empowers you to offer AI-driven automation services. You can help businesses improve efficiency, enhance customer interactions, and add significant value, positioning yourself as a sought-after automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Embeddings OpenAI" and "Concatenate to single string" for IDs, table names, and URLs.
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
