# Extract Data From Resume And Create Pdf With Gotenberg

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, code, outputParserAutofixing.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Telegram trigger** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Convert education to HTML (code)** - This step performs a key action in the workflow.
4. **Step 3: Auto-fixing Output Parser (outputParserAutofixing)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
7. **Step 6: Convert employment history to HTML (code)** - This step performs a key action in the workflow.
8. **Step 7: Convert projects to HTML (code)** - This step performs a key action in the workflow.
9. **Step 8: Convert volunteering to HTML (code)** - This step performs a key action in the workflow.
10. **Step 9: Telegram trigger (telegramTrigger)** - This step performs a key action in the workflow.
11. **Step 10: Auth (if)** - This step performs a key action in the workflow.
12. **Step 11: No operation (unauthorized) (noOp)** - This step performs a key action in the workflow.
13. **Step 12: Check if start message (if)** - This step performs a key action in the workflow.
14. **Step 13: No operation (start message) (noOp)** - This step performs a key action in the workflow.
15. **Step 14: Get file (telegram)** - This step performs a key action in the workflow.
16. **Step 15: Extract text from PDF (extractFromFile)** - This step performs a key action in the workflow.
17. **Step 16: Set parsed fileds (set)** - This step performs a key action in the workflow.
18. **Step 17: Personal info (set)** - This step performs a key action in the workflow.
19. **Step 18: Technologies (set)** - This step performs a key action in the workflow.
20. **Step 19: Employment history (set)** - This step performs a key action in the workflow.
21. **Step 20: Education (set)** - This step performs a key action in the workflow.
22. **Step 21: Projects (set)** - This step performs a key action in the workflow.
23. **Step 22: Volunteering (set)** - This step performs a key action in the workflow.
24. **Step 23: Merge education and employment history (merge)** - This step performs a key action in the workflow.
25. **Step 24: Merge projects and volunteering (merge)** - This step performs a key action in the workflow.
26. **Step 25: Merge personal info and technologies (merge)** - This step performs a key action in the workflow.
27. **Step 26: Merge all (merge)** - This step performs a key action in the workflow.
28. **Step 27: Set final data (set)** - This step performs a key action in the workflow.
29. **Step 28: Convert raw to base64 (code)** - This step performs a key action in the workflow.
30. **Step 29: Convert to HTML (convertToFile)** - This step performs a key action in the workflow.
31. **Step 30: Generate plain PDF doc (httpRequest)** - This step performs a key action in the workflow.
32. **Step 31: Send PDF to the user (telegram)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Parse resume data (chainLlm)** - This step performs a key action in the workflow.
39. **Step 38: Merge other data (merge)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Sticky Note10" for IDs, table names, and URLs.
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
