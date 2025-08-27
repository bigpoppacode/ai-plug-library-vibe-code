# Openai Form Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Submit form with customer feedback**.
  2. **Sticky Note2** `stickyNote` — width: "253", height: "342", content: "## Send customer feedback to OpenAI for sentiment analysis"
3. **Sticky Note3** `stickyNote` — width: "253", height: "342", content: "## Add new feedback to google sheets"
4. **Sticky Note4** `stickyNote` — width: "1407", height: "254", content: "## Instructions
1. Connect Google sheets
2. Connect your OpenAi account (api key + org Id)
3. Create a customer feedback form, use an existing one or use the one below as example. …[truncated]"
5. **Sticky Note5** `stickyNote` — width: "253", height: "342", content: "## Feedback form is submitted"
6. **Sticky Note6** `stickyNote` — width: "253", height: "342", content: "## Merge form data and OpenAI result"
7. **Submit form with customer feedback** `formTrigger` — options: "[object Object]", formTitle: "Customer Feedback", formFields: "[object Object]"
8. **Classify feedback with OpenAI** `openAi` — prompt: "=Classify the sentiment in the following customer feedback: {{ $json['Your feedback'] }}"
9. **Merge sentiment with form content** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
10. **Add customer feedback to Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of collecting customer feedback, analyzing its sentiment using OpenAI, and storing the data in Google Sheets. When a customer submits feedback through a form, the workflow sends the feedback to OpenAI to determine if the sentiment is positive, neutral, or negative. The sentiment is then combined with the original feedback and saved in a Google Sheets document for further analysis.

### Demonstrate
A business owner could use this workflow to efficiently gather and analyze customer feedback, helping them understand customer satisfaction and identify areas for improvement without manually reading each feedback entry.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and OpenAI accounts.
3. Create or link a customer feedback form.
4. Set the Google Sheets document to store feedback.
5. Test the workflow by submitting feedback and checking if it logs correctly.

### Practice
Create a mock Google Sheet and feedback form. Submit several feedback entries with varied sentiments and observe how the OpenAI node classifies them. Validate that all feedback entries and sentiments are accurately recorded in Google Sheets.

### WIIFM
Mastering this workflow can enhance your ability to offer sentiment analysis as a service, providing clients with actionable insights into customer satisfaction. This can lead to better customer retention and new revenue streams for your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  