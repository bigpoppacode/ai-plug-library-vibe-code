# Splitout Code Send Triggered

## 🚀 What It Does
This workflow automates a process involving stickyNote, set, googleSheets.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Email Trigger** node.
2. **Step 1: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Order Information (set)** - This step performs a key action in the workflow.
4. **Step 3: Return Orders (googleSheets)** - This step performs a key action in the workflow.
5. **Step 4: Outbound Orders (googleSheets)** - This step performs a key action in the workflow.
6. **Step 5: Order Type (if)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Email Trigger (gmailTrigger)** - This step performs a key action in the workflow.
11. **Step 10: Subject includes EDI (if)** - This step performs a key action in the workflow.
12. **Step 11: Extract Body (set)** - This step performs a key action in the workflow.
13. **Step 12: Get Email (gmail)** - This step performs a key action in the workflow.
14. **Step 13: Parse EDI Message (code)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Order Info + Orderlines (merge)** - This step performs a key action in the workflow.
17. **Step 16: Flatten Data to Orderlines (code)** - This step performs a key action in the workflow.
18. **Step 17: Split Out by Line (splitOut)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the processing of EDI (Electronic Data Interchange) messages received via Gmail. It extracts order information, determines the order type, and stores the data in Google Sheets based on whether it's a return or outbound order.

### Demonstrate
A business owner receives orders via EDI emails. This workflow automates the extraction of order details, ensuring accurate data entry into Google Sheets for tracking, thus saving time and reducing manual errors.

### Imitate
1. Set up a Gmail Trigger to listen for new emails with "EDI" in the subject.
2. Use an Extract Body node to get the email content.
3. Parse the EDI message to extract order details using a code node.
4. Use conditional nodes to determine if it's a return or outbound order.
5. Append the processed data to Google Sheets accordingly.

### Practice
Create a test EDI email similar to the example provided in the workflow. Send it to your Gmail account and run the workflow to see how it processes the message and updates Google Sheets.

### WIIFM
Mastering this workflow can significantly enhance your automation skills, allowing you to offer valuable services to clients seeking efficiency in their order processing. This expertise can lead to new business opportunities, increased revenue, and a competitive edge in the automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note3" and "Sticky Note5" for IDs, table names, and URLs.
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
