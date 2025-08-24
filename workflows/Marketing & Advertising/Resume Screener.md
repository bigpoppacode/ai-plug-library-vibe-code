# Resume Screener

## 🚀 What It Does
This workflow automates a process involving merge, agent, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **COMPANY EMAIL** node.
2. **Step 1: Voting Merge (merge)** - This step performs a key action in the workflow.
3. **Step 2: Evaluator (agent)** - This step performs a key action in the workflow.
4. **Step 3: If (if)** - This step performs a key action in the workflow.
5. **Step 4: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
6. **Step 5: EO - o3 mini (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: feedback (set)** - This step performs a key action in the workflow.
8. **Step 7: COMPANY EMAIL (gmailTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Classify Attachment (textClassifier)** - This step performs a key action in the workflow.
10. **Step 9: Resume Data Extractor (agent)** - This step performs a key action in the workflow.
11. **Step 10: Configuration (set)** - This step performs a key action in the workflow.
12. **Step 11: OpenAI Resume Grader (agent)** - This step performs a key action in the workflow.
13. **Step 12: Create Resume Table (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Anthropic Resume Grader (agent)** - This step performs a key action in the workflow.
15. **Step 14: 2.0 Flash Grader (lmChatGoogleGemini)** - This step performs a key action in the workflow.
16. **Step 15: Code (code)** - This step performs a key action in the workflow.
17. **Step 16: Gemini Resume Grader (agent)** - This step performs a key action in the workflow.
18. **Step 17: Aggregate (aggregate)** - This step performs a key action in the workflow.
19. **Step 18: Summary (set)** - This step performs a key action in the workflow.
20. **Step 19: Airtable (airtable)** - This step performs a key action in the workflow.
21. **Step 20: Grade Parser (outputParserStructured)** - This step performs a key action in the workflow.
22. **Step 21: Calculator (toolCalculator)** - This step performs a key action in the workflow.
23. **Step 22: O3-MINI Grader1 (lmChatOpenAi)** - This step performs a key action in the workflow.
24. **Step 23: Binary Extractor (code)** - This step performs a key action in the workflow.
25. **Step 24: Switch (switch)** - This step performs a key action in the workflow.
26. **Step 25: PDF EXTRACTOR (extractFromFile)** - This step performs a key action in the workflow.
27. **Step 26: HTML EXTRACTOR (extractFromFile)** - This step performs a key action in the workflow.
28. **Step 27: Distiller Agent (agent)** - This step performs a key action in the workflow.
29. **Step 28: Distilled Output (outputParserStructured)** - This step performs a key action in the workflow.
30. **Step 29: Anthropic Chat Model (lmChatAnthropic)** - This step performs a key action in the workflow.
31. **Step 30: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
32. **Step 31: Extracted Data (set)** - This step performs a key action in the workflow.
33. **Step 32: Document Data (summarize)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: OpenAI Grader (lmChatOpenAi)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the resume screening process. It collects resumes from a company email, extracts and evaluates key information using AI, grades candidates based on predefined criteria, and stores the results in Airtable for easy management.

### Demonstrate
A business owner can use this workflow to streamline hiring. Instead of manually reviewing resumes, the automation extracts data, grades candidates based on job requirements, and organizes results, saving hours of HR time and improving decision accuracy.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Gmail trigger to fetch emails with attachments.
3. Use a resume extractor node to parse resume data.
4. Implement an AI evaluator to grade the resumes.
5. Store results in Airtable for tracking and reporting.

### Practice
Create a simple version of this workflow by fetching a single resume from your email, extracting basic information (like name and email), and logging it in a Google Sheet. Experiment with different resume formats to see how well the extraction works.

### WIIFM
Mastering this workflow enables you to offer valuable automation services to clients, improving their hiring processes, reducing costs, and freeing up time. This skill can differentiate you in the market, leading to higher demand and income opportunities in AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Voting Merge" and "OpenAI Grader" for IDs, table names, and URLs.
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
