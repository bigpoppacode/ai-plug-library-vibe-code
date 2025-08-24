# Splitout Code Automation Webhook

## 🚀 What It Does
This workflow automates a process involving lmChatAzureOpenAi, googleSheets, outputParserAutofixing.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Azure OpenAI Chat Model2 (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: YogaLog (googleSheets)** - This step performs a key action in the workflow.
4. **Step 3: Azure OpenAI Chat Model3 (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Auto-fixing Output Parser (outputParserAutofixing)** - This step performs a key action in the workflow.
6. **Step 5: Azure OpenAI Chat Model1 (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: AI Agent (agent)** - This step performs a key action in the workflow.
9. **Step 8: PosesDatabase1 (googleSheetsTool)** - This step performs a key action in the workflow.
10. **Step 9: YogaLog2 (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: Split Out (splitOut)** - This step performs a key action in the workflow.
12. **Step 11: Trigger 2130 YogaPosesToday (scheduleTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Azure OpenAI Chat Model5 (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
14. **Step 13: Get PoseName (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: WritePosesToday (chainLlm)** - This step performs a key action in the workflow.
16. **Step 15: RewritePosesToday (chainLlm)** - This step performs a key action in the workflow.
17. **Step 16: Azure OpenAI Chat Model (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: WriteJSONflex (chainLlm)** - This step performs a key action in the workflow.
19. **Step 18: Structured Output Parser1 (outputParserStructured)** - This step performs a key action in the workflow.
20. **Step 19: Auto-fixing Output Parser1 (outputParserAutofixing)** - This step performs a key action in the workflow.
21. **Step 20: Azure OpenAI Chat Model6 (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
22. **Step 21: Azure OpenAI Chat Model4 (lmChatAzureOpenAi)** - This step performs a key action in the workflow.
23. **Step 22: Code (code)** - This step performs a key action in the workflow.
24. **Step 23: Line Push with Flex Bubble (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: CombineAll (set)** - This step performs a key action in the workflow.
26. **Step 25: Fix JSON (chainLlm)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates yoga pose suggestions and reminders. It uses Azure OpenAI to generate daily yoga poses and logs them in Google Sheets, sending friendly reminders to users via Line messaging.

### Demonstrate
A yoga studio owner could use this workflow to send daily yoga pose reminders to clients, enhancing engagement and retention while saving time on manual outreach.

### Imitate
1. Set up an Azure OpenAI account and Google Sheets.
2. Create a new n8n workflow with a schedule trigger.
3. Use OpenAI nodes to generate yoga poses.
4. Log poses in Google Sheets using the Google Sheets node.
5. Send reminders via Line messaging.

### Practice
Try modifying the workflow to include a new feature: add a random motivational quote alongside the yoga pose suggestions. Test it to see how it enhances user engagement.

### WIIFM
Mastering this workflow can help you offer valuable automation services to yoga studios or wellness businesses, creating a recurring income stream while improving client engagement and satisfaction.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Azure OpenAI Chat Model2" and "Sticky Note5" for IDs, table names, and URLs.
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
