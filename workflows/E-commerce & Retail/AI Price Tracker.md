# AI Price Tracker

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, httpRequest, markdown.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Markdown (markdown)** - This step performs a key action in the workflow.
5. **Step 4: Basic LLM Chain (chainLlm)** - This step performs a key action in the workflow.
6. **Step 5: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
7. **Step 6: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
8. **Step 7: Google Sheets1 (googleSheets)** - This step performs a key action in the workflow.
9. **Step 8: Basic LLM Chain2 (chainLlm)** - This step performs a key action in the workflow.
10. **Step 9: Structured Output Parser2 (outputParserStructured)** - This step performs a key action in the workflow.
11. **Step 10: Google Gemini Chat Model2 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
12. **Step 11: Google Sheets5 (googleSheets)** - This step performs a key action in the workflow.
13. **Step 12: Get Nike Products (googleSheets)** - This step performs a key action in the workflow.
14. **Step 13: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
15. **Step 14: Wait1 (wait)** - This step performs a key action in the workflow.
16. **Step 15: Split Out1 (splitOut)** - This step performs a key action in the workflow.
17. **Step 16: Basic LLM Chain8 (chainLlm)** - This step performs a key action in the workflow.
18. **Step 17: Google Sheets6 (googleSheets)** - This step performs a key action in the workflow.
19. **Step 18: If1 (if)** - This step performs a key action in the workflow.
20. **Step 19: Slack1 (slack)** - This step performs a key action in the workflow.
21. **Step 20: Google Gemini Chat Model7 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
22. **Step 21: Structured Output Parser7 (outputParserStructured)** - This step performs a key action in the workflow.
23. **Step 22: Edit Fields (set)** - This step performs a key action in the workflow.
24. **Step 23: HTTP Request2 (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Markdown3 (markdown)** - This step performs a key action in the workflow.
26. **Step 25: Sporting goods (googleSheets)** - This step performs a key action in the workflow.
27. **Step 26: Finishline (googleSheets)** - This step performs a key action in the workflow.
28. **Step 27: Basic LLM Chain3 (chainLlm)** - This step performs a key action in the workflow.
29. **Step 28: Structured Output Parser3 (outputParserStructured)** - This step performs a key action in the workflow.
30. **Step 29: Google Gemini Chat Model3 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
31. **Step 30: Google Sheets (googleSheets)** - This step performs a key action in the workflow.
32. **Step 31: Loop Over Items1 (splitInBatches)** - This step performs a key action in the workflow.
33. **Step 32: Wait (wait)** - This step performs a key action in the workflow.
34. **Step 33: Split Out (splitOut)** - This step performs a key action in the workflow.
35. **Step 34: Basic LLM Chain9 (chainLlm)** - This step performs a key action in the workflow.
36. **Step 35: Google Sheets7 (googleSheets)** - This step performs a key action in the workflow.
37. **Step 36: If (if)** - This step performs a key action in the workflow.
38. **Step 37: Slack (slack)** - This step performs a key action in the workflow.
39. **Step 38: Google Gemini Chat Model8 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
40. **Step 39: Structured Output Parser8 (outputParserStructured)** - This step performs a key action in the workflow.
41. **Step 40: Edit Fields1 (set)** - This step performs a key action in the workflow.
42. **Step 41: HTTP Request3 (httpRequest)** - This step performs a key action in the workflow.
43. **Step 42: Markdown4 (markdown)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping product prices from specified URLs, analyzing them using AI, and updating the results in Google Sheets. It runs on a schedule, retrieves data, processes it through AI models, and sends notifications about price changes.

### Demonstrate
A retail business could use this workflow to monitor competitor prices. It automatically checks competitor sites every 8 hours, analyzes price differences, and alerts the team via Slack if a competitor's price is lower, allowing them to adjust pricing strategies quickly.

### Imitate
1. Set up a Schedule Trigger to run every 8 hours.
2. Use HTTP Request nodes to scrape product URLs from your Google Sheets.
3. Process the scraped data with AI to extract prices.
4. Store the results back in Google Sheets.
5. Implement a Slack notification if a competitor's price is lower.

### Practice
Create a simplified version of the workflow by scraping a single product price from a test URL. Set it to run once, retrieve the price, and log it in a Google Sheet. Experiment with modifying the URL to see how changes affect the results.

### WIIFM
Mastering this workflow can help you offer valuable automation services to businesses, streamline their pricing strategies, and enhance their competitive edge. This skill can lead to new clients and increased income as you become a go-to expert in AI-driven automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Markdown4" for IDs, table names, and URLs.
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
