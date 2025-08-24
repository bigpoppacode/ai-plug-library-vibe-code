# Code Manual Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, lmChatOpenAi, merge.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Merge (merge)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: SET company_name (set)** - This step performs a key action in the workflow.
8. **Step 7: Define dictionary of demographic keys (set)** - This step performs a key action in the workflow.
9. **Step 8: ScrapingBee Search Glassdoor (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Extract company url path (html)** - This step performs a key action in the workflow.
11. **Step 10: ScrapingBee GET company page contents (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Extract reviews page url path (html)** - This step performs a key action in the workflow.
13. **Step 12: ScrapingBee GET Glassdoor Reviews Content (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Extract Overall Review Summary (html)** - This step performs a key action in the workflow.
15. **Step 14: Extract Demographics Module (html)** - This step performs a key action in the workflow.
16. **Step 15: Extract overall ratings and distribution percentages (informationExtractor)** - This step performs a key action in the workflow.
17. **Step 16: Extract demographic distributions (informationExtractor)** - This step performs a key action in the workflow.
18. **Step 17: Define contributions to variance (set)** - This step performs a key action in the workflow.
19. **Step 18: Set variance and std_dev (set)** - This step performs a key action in the workflow.
20. **Step 19: Calculate P-Scores (code)** - This step performs a key action in the workflow.
21. **Step 20: Sort Effect Sizes (set)** - This step performs a key action in the workflow.
22. **Step 21: Calculate Z-Scores and Effect Sizes (set)** - This step performs a key action in the workflow.
23. **Step 22: Format dataset for scatterplot (code)** - This step performs a key action in the workflow.
24. **Step 23: Specify additional parameters for scatterplot (set)** - This step performs a key action in the workflow.
25. **Step 24: Quickchart Scatterplot (httpRequest)** - This step performs a key action in the workflow.
26. **Step 25: QuickChart Bar Chart (quickChart)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Text Analysis of Bias Data (chainLlm)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the analysis of workplace discrimination patterns by scraping employee reviews from Glassdoor, using AI to evaluate the data, and generating visualizations to highlight disparities across demographics.

### Demonstrate
A business owner can use this workflow to assess employee satisfaction and identify potential discrimination issues in their company, enabling them to take informed action to improve workplace culture and inclusivity.

### Imitate
1. Set up a manual trigger to start the workflow.
2. Configure OpenAI nodes to analyze employee reviews.
3. Use HTTP request nodes to scrape data from Glassdoor.
4. Extract and merge relevant data.
5. Create visualizations of the findings using QuickChart.

### Practice
Try adapting the workflow to analyze a different company's reviews by changing the company name parameter. Run the workflow to see how the results differ and understand the impact of company culture on employee satisfaction.

### WIIFM
Mastering this workflow allows you to offer valuable insights to organizations seeking to improve their workplace culture, making you a sought-after consultant in AI automation and data analysis, ultimately driving income through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Text Analysis of Bias Data" for IDs, table names, and URLs.
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
