# Manual Openai Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "369.1031874662338", height: "349", content: "### 1. Create a Google Sheet document
* This tutorial uses Google Sheet document connected to Google Forms, but a standalone Sheet document will work too
* Adapt initial trigger to…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "394", height: "319", content: "### 2. Combine all answers into an array
* Since the main goal is to provide an overall summary, we need to combine all answers for each Google Form question
* Aggregate Node takes…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "432", height: "319", content: "### 3. Generate a summary report
* Enter a __system message__ with a overall instructions on how to analyze the feedback form
* Provide a __user message__ with JSON arrays.

__NB! …[truncated]"
6. **Sticky Note3** `stickyNote` — width: "359.1031874662346", height: "319", content: "### 4. Convert to HTML and send an email
* GPT is configured to reply in Markdown format. Markdown Node converts such text into HTML
* Finally, the Gmail node sends a message with …[truncated]"
7. **Get Google Sheets records** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
8. **Aggregate responses into arrays** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
9. **Summarize via GPT model** `openAi` — resource: **chat**, prompt: "[object Object]"
10. **Convet from Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.message.content }}"
11. **Send via Gmail** `gmail` — sendTo: "teds.tech.talks@gmail.com", message: "={{ $json.data }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow extracts feedback data from a Google Sheets document, aggregates the responses into arrays, and uses OpenAI's GPT model to generate a summary report. The summary is formatted in Markdown, converted into HTML, and then sent via Gmail. This automates the process of collecting and summarizing feedback, providing a concise report for analysis.

### Demonstrate
A business owner hosting an event could use this workflow to automatically summarize attendee feedback collected via Google Forms. This saves time by providing an instant overview of what went well and areas for improvement.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and Gmail accounts.
3. Set up your feedback form to populate a Google Sheet.
4. Customize the prompt in the OpenAI node to fit your feedback questions.
5. Test the workflow to ensure it generates and sends the summary correctly.

### Practice
Create a Google Form and connect it to a Google Sheet. Gather some sample responses, then run the workflow to see how it summarizes the data. Adjust the OpenAI prompt to better fit your specific feedback questions.

### WIIFM
By mastering this workflow, you can offer businesses a valuable service of automating feedback analysis. This can enhance decision-making and improve customer satisfaction, allowing you to attract more clients and increase your income in the automation industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi, gmailOAuth2.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  