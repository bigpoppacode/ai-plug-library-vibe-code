# Splitout Limit Automation Triggered

## 🚀 What It Does
This workflow automates a process involving html, formTrigger, brightData.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When User Completes Form** node.
2. **Step 1: Extract Body and Title from Website (html)** - This step performs a key action in the workflow.
3. **Step 2: When User Completes Form (formTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Get LinkedIn Entry on Google (brightData)** - This step performs a key action in the workflow.
5. **Step 4: Parse Google Results (openAi)** - This step performs a key action in the workflow.
6. **Step 5: Form Not Found (form)** - This step performs a key action in the workflow.
7. **Step 6: Get only Matching Profiles (filter)** - This step performs a key action in the workflow.
8. **Step 7: Limit to 1 Profile (limit)** - This step performs a key action in the workflow.
9. **Step 8: Extract Parsed Results (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: LinkedIn Profile is Found? (if)** - This step performs a key action in the workflow.
11. **Step 10: Edit Url LinkedIn (set)** - This step performs a key action in the workflow.
12. **Step 11: Edit Company Search (set)** - This step performs a key action in the workflow.
13. **Step 12: Extract Body and Title from Website1 (html)** - This step performs a key action in the workflow.
14. **Step 13: Get Company on Google (brightData)** - This step performs a key action in the workflow.
15. **Step 14: Parse Google Results for Company (openAi)** - This step performs a key action in the workflow.
16. **Step 15: Split Out (splitOut)** - This step performs a key action in the workflow.
17. **Step 16: Create a Followup for Company and Person (openAi)** - This step performs a key action in the workflow.
18. **Step 17: Merge (merge)** - This step performs a key action in the workflow.
19. **Step 18: Send Email (emailSend)** - This step performs a key action in the workflow.
20. **Step 19: Form Email Sent (form)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of finding and following up on LinkedIn profiles based on user input from a form. When a user submits their name and company, the workflow extracts relevant LinkedIn information, checks for matches, and generates a personalized follow-up email.

### Demonstrate
A business owner could use this workflow to streamline lead generation. For instance, after filling out a form, the workflow finds potential clients on LinkedIn, assesses their fit, and sends tailored follow-up emails, saving valuable time and enhancing outreach efforts.

### Imitate
1. Import the workflow into n8n.
2. Modify the form fields to suit your data needs.
3. Connect your Bright Data and OpenAI accounts.
4. Customize the email content in the "Send Email" node.
5. Test by submitting the form to ensure it works as intended.

### Practice
Try creating a simplified version of the workflow that only captures user input and sends a confirmation email. This way, you can focus on understanding how to set up nodes and connections without the complexity of data extraction.

### WIIFM
By mastering this workflow, you can offer valuable automation services to potential clients, helping them save time and improve their outreach strategies. This can lead to increased income through consulting or automation service offerings, positioning you as a sought-after expert in AI-driven business solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Extract Body and Title from Website" and "Form Email Sent" for IDs, table names, and URLs.
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
