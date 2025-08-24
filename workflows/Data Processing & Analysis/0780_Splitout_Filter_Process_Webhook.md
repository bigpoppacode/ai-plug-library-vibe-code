# Splitout Filter Process Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, filter, outputParserStructured.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Filter (filter)** - This step performs a key action in the workflow.
4. **Step 3: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
5. **Step 4: Perplexity (lmChatOpenRouter)** - This step performs a key action in the workflow.
6. **Step 5: Filter1 (filter)** - This step performs a key action in the workflow.
7. **Step 6: Extract Structured Data  (informationExtractor)** - This step performs a key action in the workflow.
8. **Step 7: Research URL (chainLlm)** - This step performs a key action in the workflow.
9. **Step 8: Extract URL (chainLlm)** - This step performs a key action in the workflow.
10. **Step 9: Merge Extracted Data (merge)** - This step performs a key action in the workflow.
11. **Step 10: Split TC Articles (splitOut)** - This step performs a key action in the workflow.
12. **Step 11: TC HTML Parser (html)** - This step performs a key action in the workflow.
13. **Step 12: Split VB Articles (splitOut)** - This step performs a key action in the workflow.
14. **Step 13: VB HTML Parser (html)** - This step performs a key action in the workflow.
15. **Step 14: Venturebeat (VB) (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: Techcrunch (TC) (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Claude 3.5 Sonnet (lmChatAnthropic)** - This step performs a key action in the workflow.
18. **Step 17: Claude 3.5 Haiku (lmChatAnthropic)** - This step performs a key action in the workflow.
19. **Step 18: Collect Data (set)** - This step performs a key action in the workflow.
20. **Step 19: Airtable (airtable)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Auto-fixing Output Parser (outputParserAutofixing)** - This step performs a key action in the workflow.
34. **Step 33: Extract Structured JSON  (outputParserStructured)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Prompts (set)** - This step performs a key action in the workflow.
37. **Step 36: Deep Research (httpRequest)** - This step performs a key action in the workflow.
38. **Step 37: Pick data (Perplexity) (set)** - This step performs a key action in the workflow.
39. **Step 38: Pick data (jina) (set)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
42. **Step 41: JINA Deep Search (httpRequest)** - This step performs a key action in the workflow.
43. **Step 42: Write Results to Airtable (airtable)** - This step performs a key action in the workflow.
44. **Step 43: Extract Structured Data (chainLlm)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Route to Deep Research (executeWorkflow)** - This step performs a key action in the workflow.
47. **Step 46: Parse TC XML (xml)** - This step performs a key action in the workflow.
48. **Step 47: Parse VB XML (xml)** - This step performs a key action in the workflow.
49. **Step 48: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.
50. **Step 49: Claude  3.5 Sonnet (lmChatAnthropic)** - This step performs a key action in the workflow.
51. **Step 50: Get Funding Article HTML for scraping (TC) (httpRequest)** - This step performs a key action in the workflow.
52. **Step 51: Get Funding Article HTML for scraping (VB) (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering and analyzing data from tech news articles about funding rounds. It triggers a series of steps to scrape data, parse it, extract relevant information, and store it in Airtable for easy access.

### Demonstrate
A business owner could use this workflow to automatically collect and analyze news about startups that recently raised funds. This saves time and helps them identify investment opportunities without manually searching for articles.

### Imitate
1. Import the workflow into n8n.
2. Configure the manual trigger for testing.
3. Set up HTTP request nodes for TechCrunch and VentureBeat sitemaps.
4. Add parsing nodes to extract article details.
5. Use Airtable nodes to store the results.

### Practice
Try modifying the workflow to filter articles based on a specific keyword (e.g., "AI"). Run the workflow and check if only relevant articles are stored in Airtable.

### WIIFM
Mastering this workflow allows you to automate data collection and analysis, providing valuable insights to clients. This can lead to new business opportunities, increased efficiency, and the ability to charge for high-value automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Get Funding Article HTML for scraping (VB)" for IDs, table names, and URLs.
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
