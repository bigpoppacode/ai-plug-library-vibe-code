# Gmail Hr Workflow

## 🚀 What It Does
This workflow automates a process involving gmailTrigger, gmail, splitInBatches.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Get new emails** node.
2. **Step 1: Get new emails (gmailTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get email details + attachments (gmail)** - This step performs a key action in the workflow.
4. **Step 3: Loop Over Attachments (splitInBatches)** - This step performs a key action in the workflow.
5. **Step 4: Extract text from PDF (extractFromFile)** - This step performs a key action in the workflow.
6. **Step 5: If1 (if)** - This step performs a key action in the workflow.
7. **Step 6: Aggregate Attachments (aggregate)** - This step performs a key action in the workflow.
8. **Step 7: Get list of Jobs (airtable)** - This step performs a key action in the workflow.
9. **Step 8: Aggregate Jobs (aggregate)** - This step performs a key action in the workflow.
10. **Step 9: OpenAI - Match with Job (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Send email - Fail (gmail)** - This step performs a key action in the workflow.
12. **Step 11: Send email - Success (gmail)** - This step performs a key action in the workflow.
13. **Step 12: Create email (openAi)** - This step performs a key action in the workflow.
14. **Step 13: OpenAI - Score Resume (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Mark as Read (gmail)** - This step performs a key action in the workflow.
16. **Step 15: Mark as Read1 (gmail)** - This step performs a key action in the workflow.
17. **Step 16: Job not found (if)** - This step performs a key action in the workflow.
18. **Step 17: Instructions not found (if)** - This step performs a key action in the workflow.
19. **Step 18: If score >70 (if)** - This step performs a key action in the workflow.
20. **Step 19: Mark as Read2 (gmail)** - This step performs a key action in the workflow.
21. **Step 20: Send email - Resend (gmail)** - This step performs a key action in the workflow.
22. **Step 21: Couldn't process (if)** - This step performs a key action in the workflow.
23. **Step 22: Loop Over Emails (splitInBatches)** - This step performs a key action in the workflow.
24. **Step 23: Aggregate (aggregate)** - This step performs a key action in the workflow.
25. **Step 24: Set Text (set)** - This step performs a key action in the workflow.
26. **Step 25: Get all Message (gmail)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: OpenAI - Analyze resume (httpRequest)** - This step performs a key action in the workflow.
37. **Step 36: Create CV (airtable)** - This step performs a key action in the workflow.
38. **Step 37: Get email attachment (gmail)** - This step performs a key action in the workflow.
39. **Step 38: Upload file to Airtable (httpRequest)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note17 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Sticky Note18 (stickyNote)** - This step performs a key action in the workflow.
48. **Step 47: Sticky Note19 (stickyNote)** - This step performs a key action in the workflow.
49. **Step 48: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of receiving email applications, extracting attachments, analyzing resumes with AI, and sending personalized responses. It streamlines recruiting by filtering candidates based on job criteria and providing feedback efficiently.

### Demonstrate
A business owner could use this workflow to automate job application reviews. Instead of manually sorting through resumes, the workflow automatically evaluates candidates using AI, saving time and ensuring consistent feedback, which improves the hiring process.

### Imitate
1. Import the workflow into n8n.
2. Set up the Gmail trigger to capture new application emails.
3. Configure the AI node to analyze resumes based on your job criteria.
4. Map responses to send personalized emails to applicants.
5. Test the workflow with sample emails to ensure it functions correctly.

### Practice
Try modifying the workflow to include a new job position and criteria. Add a test email with a resume attachment and see how the workflow processes it, providing feedback based on your new criteria.

### WIIFM
Mastering this workflow can help you offer valuable automation services, streamline hiring processes for businesses, and differentiate yourself in the market. By automating repetitive tasks, you can save companies time and money, making your services indispensable.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get new emails" and "Sticky Note15" for IDs, table names, and URLs.
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
