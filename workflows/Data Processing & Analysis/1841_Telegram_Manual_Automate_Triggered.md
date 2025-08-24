# Telegram Manual Automate Triggered

## 🚀 What It Does
This workflow automates a process involving gmail, manualTrigger, lmChatGoogleGemini.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Gmail Get Email (gmail)** - This step performs a key action in the workflow.
3. **Step 2: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
5. **Step 4: GmailDeleteEmail (gmail)** - This step performs a key action in the workflow.
6. **Step 5: AI Check Email (agent)** - This step performs a key action in the workflow.
7. **Step 6: Unwanted Email Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: If Unwanted Marketing or Spam (if)** - This step performs a key action in the workflow.
9. **Step 8: Telegram Sent Email Deleted Notification (telegram)** - This step performs a key action in the workflow.
10. **Step 9: Telegram Sent Email Not Deleted Notification (telegram)** - This step performs a key action in the workflow.
11. **Step 10: Telegram Sent AI Error Notification (telegram)** - This step performs a key action in the workflow.
12. **Step 11: Telegram Sent Delete Email Failed Notification (telegram)** - This step performs a key action in the workflow.
13. **Step 12: Success (noOp)** - This step performs a key action in the workflow.
14. **Step 13: Increment Loop Var (set)** - This step performs a key action in the workflow.
15. **Step 14: Forward Prev Page Num (set)** - This step performs a key action in the workflow.
16. **Step 15: Initialize Loop Vars (set)** - This step performs a key action in the workflow.
17. **Step 16: Aggregate (aggregate)** - This step performs a key action in the workflow.
18. **Step 17: Gmail (gmail)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email management by checking incoming Gmail messages, using an AI model to classify them as spam or marketing, deleting unwanted emails, and notifying users via Telegram about the actions taken.

### Demonstrate
A business owner could use this workflow to automatically filter out spam emails, saving time and ensuring important messages are prioritized. For example, a consultant can focus on client emails rather than sifting through junk.

### Imitate
1. Set up a Gmail node to retrieve emails.
2. Add an AI node to classify emails as spam or not.
3. Use a conditional node to determine which emails to delete.
4. Add Telegram nodes to notify you about deleted or kept emails.
5. Test and adjust the workflow as needed.

### Practice
Try modifying the workflow to archive unwanted emails instead of deleting them. This will help you understand how to change actions within nodes and observe the different outcomes.

### WIIFM
Mastering this workflow enables you to provide valuable email management services, helping clients save time and improve efficiency. This skill can attract customers looking for automation solutions and generate income through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Gmail Get Email" and "Gmail" for IDs, table names, and URLs.
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
