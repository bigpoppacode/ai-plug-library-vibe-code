# Workflow

## 🚀 What It Does
This workflow automates a process involving googleDrive, lmChatGoogleGemini, outputParserStructured.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Base Image (googleDrive)** - This step performs a key action in the workflow.
3. **Step 2: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
4. **Step 3: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
10. **Step 9: Wait (wait)** - This step performs a key action in the workflow.
11. **Step 10: Download Screenshot (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Upload to Drive (googleDrive)** - This step performs a key action in the workflow.
13. **Step 12: Update Base Image (googleSheets)** - This step performs a key action in the workflow.
14. **Step 13: Merge (merge)** - This step performs a key action in the workflow.
15. **Step 14: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
16. **Step 15: Get URLs with Missing Base Images (googleSheets)** - This step performs a key action in the workflow.
17. **Step 16: Run Webpage Screenshot (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Run Webpage Screenshot1 (httpRequest)** - This step performs a key action in the workflow.
19. **Step 18: Has Changes (filter)** - This step performs a key action in the workflow.
20. **Step 19: Combine Row and Result (set)** - This step performs a key action in the workflow.
21. **Step 20: Wait1 (wait)** - This step performs a key action in the workflow.
22. **Step 21: Aggregate (aggregate)** - This step performs a key action in the workflow.
23. **Step 22: Create Report (linear)** - This step performs a key action in the workflow.
24. **Step 23: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
25. **Step 24: Get Webpages List (googleSheets)** - This step performs a key action in the workflow.
26. **Step 25: For Each Webpage... (splitInBatches)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Download New Screenshot (httpRequest)** - This step performs a key action in the workflow.
32. **Step 31: Combine Screenshots (merge)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Visual Regression Agent (chainLlm)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of taking screenshots of webpages, comparing them to base images, and generating reports on any visual changes detected. It uses Google Drive for image storage and Google Sheets for tracking URLs and results.

### Demonstrate
A business owner could use this workflow to ensure their website's design remains consistent. If a visual change occurs (like a misaligned button), the workflow detects it and generates a report, allowing for quick fixes and maintaining a professional appearance.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and Sheets accounts.
3. Update the URLs in the Google Sheets node with your own target webpages.
4. Test the workflow to ensure it captures and reports visual changes correctly.

### Practice
Create a simplified version of this workflow that only takes screenshots of a single webpage and compares it to a static base image. Document any changes detected and send a summary email.

### WIIFM
Mastering this workflow can help you offer valuable services to clients looking to maintain their website integrity, leading to increased customer satisfaction and retention. This expertise can differentiate you in the growing field of AI automation, helping you attract clients and generate income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Base Image" and "Visual Regression Agent" for IDs, table names, and URLs.
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
