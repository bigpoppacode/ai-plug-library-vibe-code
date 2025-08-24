# Manual Openai Automation Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, googleSheets.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Get Google Sheets records (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Aggregate responses into arrays (aggregate)** - This step performs a key action in the workflow.
9. **Step 8: Summarize via GPT model (openAi)** - This step performs a key action in the workflow.
10. **Step 9: Convet from Markdown to HTML (markdown)** - This step performs a key action in the workflow.
11. **Step 10: Send via Gmail (gmail)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of summarizing feedback from Google Sheets using OpenAI's GPT-4. It collects responses, aggregates them, generates a summary report, converts it to HTML, and sends it via Gmail, streamlining feedback analysis.

### Demonstrate
A business owner could use this workflow after an event to gather feedback from attendees through a Google Form. The automated summary helps them quickly identify strengths and areas for improvement, enabling faster decision-making and enhanced future events.

### Imitate
1. Import the workflow into n8n.
2. Set up Google Sheets with your feedback form.
3. Adjust the Google Sheets node to connect to your document.
4. Customize the OpenAI prompt based on your feedback questions.
5. Test the workflow to ensure it sends the summarized report via email.

### Practice
Try running the workflow with test data in Google Sheets. Submit mock feedback responses to see how the automation aggregates data, generates a summary, and sends an email. Adjust the prompt in the OpenAI node to refine the summary style.

### WIIFM
Mastering this workflow can save you time and improve client satisfaction by providing quick insights from feedback. This skill can help you attract customers seeking automation solutions, positioning you as a valuable resource in the growing AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "Send via Gmail" for IDs, table names, and URLs.
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
