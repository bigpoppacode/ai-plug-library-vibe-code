# YT Strategist Agent

## 🚀 What It Does
This workflow automates a process involving formTrigger, set, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On form submission** node.
2. **Step 1: On form submission (formTrigger)** - This step performs a key action in the workflow.
3. **Step 2: 3 Channels (set)** - This step performs a key action in the workflow.
4. **Step 3: Split Out (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
6. **Step 5: Title Analyzer (agent)** - This step performs a key action in the workflow.
7. **Step 6: GPT 4.1-mini (lmChatOpenRouter)** - This step performs a key action in the workflow.
8. **Step 7: Merge (merge)** - This step performs a key action in the workflow.
9. **Step 8: Analyze Thumbnails (openAi)** - This step performs a key action in the workflow.
10. **Step 9: Set Fields (set)** - This step performs a key action in the workflow.
11. **Step 10: Niche Outliers Data (googleSheets)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Scrape YT (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Title Analyzer1 (agent)** - This step performs a key action in the workflow.
15. **Step 14: Analyze Thumbnails1 (openAi)** - This step performs a key action in the workflow.
16. **Step 15: GPT 4.1-mini1 (lmChatOpenRouter)** - This step performs a key action in the workflow.
17. **Step 16: Broad Niche (set)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Scrape YT1 (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Title Analyzer2 (agent)** - This step performs a key action in the workflow.
21. **Step 20: Analyze Thumbnails2 (openAi)** - This step performs a key action in the workflow.
22. **Step 21: GPT 4.1-mini2 (lmChatOpenRouter)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Niche (set)** - This step performs a key action in the workflow.
25. **Step 24: 6 am (scheduleTrigger)** - This step performs a key action in the workflow.
26. **Step 25: Sundays (scheduleTrigger)** - This step performs a key action in the workflow.
27. **Step 26: Niche Daily (googleSheets)** - This step performs a key action in the workflow.
28. **Step 27: Channel Description (set)** - This step performs a key action in the workflow.
29. **Step 28: Titles & Thumbs (outputParserStructured)** - This step performs a key action in the workflow.
30. **Step 29: Append Ideas (googleSheets)** - This step performs a key action in the workflow.
31. **Step 30: Channel URL (set)** - This step performs a key action in the workflow.
32. **Step 31: Creative Agent (agent)** - This step performs a key action in the workflow.
33. **Step 32: Scrape Channel (httpRequest)** - This step performs a key action in the workflow.
34. **Step 33: Get Comments (httpRequest)** - This step performs a key action in the workflow.
35. **Step 34: Aggregate1 (aggregate)** - This step performs a key action in the workflow.
36. **Step 35: Comment Analyzer (agent)** - This step performs a key action in the workflow.
37. **Step 36: Insights (outputParserStructured)** - This step performs a key action in the workflow.
38. **Step 37: Get High Performers (googleSheets)** - This step performs a key action in the workflow.
39. **Step 38: Aggregate (aggregate)** - This step performs a key action in the workflow.
40. **Step 39: Notification (slack)** - This step performs a key action in the workflow.
41. **Step 40: GPT 4.1-mini3 (lmChatOpenRouter)** - This step performs a key action in the workflow.
42. **Step 41: GPT 4.1-mini4 (lmChatOpenRouter)** - This step performs a key action in the workflow.
43. **Step 42: Comment Analysis (googleSheets)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Channel Outliers (httpRequest)** - This step performs a key action in the workflow.
47. **Step 46: Sort1 (sort)** - This step performs a key action in the workflow.
48. **Step 47: Filter (filter)** - This step performs a key action in the workflow.
49. **Step 48: Limit (limit)** - This step performs a key action in the workflow.
50. **Step 49: Broad Niche Weekly (googleSheets)** - This step performs a key action in the workflow.
51. **Step 50: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the analysis of YouTube channels by collecting data from submitted URLs, analyzing video titles and thumbnails with AI, and storing insights in Google Sheets. It streamlines the process of content strategy for YouTube creators.

### Demonstrate
A business owner wants to optimize their YouTube channel. By using this workflow, they can input competitor channels, receive AI-generated insights on video titles and thumbnails, and track performance metrics—all automatically logged in a Google Sheet for easy reference.

### Imitate
1. Create a new workflow in n8n.
2. Add a "Form Trigger" to collect YouTube channel URLs.
3. Use "Set" nodes to format the data.
4. Add "HTTP Request" nodes to scrape YouTube data.
5. Integrate "AI Agent" nodes for title and thumbnail analysis.
6. Use "Google Sheets" nodes to store the results.
7. Test the workflow by submitting channel URLs.

### Practice
Try modifying the workflow to analyze a different metric, like comments or engagement rates. Add a new AI analysis step to generate insights based on this additional data and log it in your Google Sheet.

### WIIFM
Mastering this workflow can help you provide valuable insights to YouTube creators, making you a go-to consultant for content strategy. This expertise can attract clients, boost your service offerings, and generate income as you automate their video optimization processes.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On form submission" and "Sticky Note3" for IDs, table names, and URLs.
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
