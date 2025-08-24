# Splitout Filter Automation Triggered

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, form, formTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Get Basic Information** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Clarification Questions (form)** - This step performs a key action in the workflow.
4. **Step 3: Get Basic Information (formTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Get Business Overview (form)** - This step performs a key action in the workflow.
6. **Step 5: End Form (form)** - This step performs a key action in the workflow.
7. **Step 6: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: Remove Already Answered Questions (filter)** - This step performs a key action in the workflow.
9. **Step 8: Analyse Response (chainLlm)** - This step performs a key action in the workflow.
10. **Step 9: Split Out Analysis (splitOut)** - This step performs a key action in the workflow.
11. **Step 10: Prepare For Form Generation (set)** - This step performs a key action in the workflow.
12. **Step 11: Aggregate For Form Generation (aggregate)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the collection of user information and feedback through forms, leveraging AI to analyze responses and generate follow-up questions. It streamlines the process, ensuring users only answer relevant questions, improving the data collection experience.

### Demonstrate
A business owner might use this workflow to gather client feedback on their services. By automating the process, they can efficiently collect detailed insights and only ask follow-up questions based on previous answers, saving time and increasing response rates.

### Imitate
1. Import the workflow into n8n.
2. Set up your OpenAI credentials.
3. Modify the "Get Basic Information" and "Get Business Overview" forms for your needs.
4. Test the workflow by submitting the form and reviewing the AI-generated follow-ups.

### Practice
Try modifying the form fields to capture different data, such as customer preferences or service feedback. Execute the workflow and observe how the AI adapts the follow-up questions based on the responses you provide.

### WIIFM
Mastering this workflow allows you to offer automated data collection services to clients, improving their efficiency and customer engagement. This skill can help you attract more customers and generate income by providing high-value automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Sticky Note3" for IDs, table names, and URLs.
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
