# Openai Form Create Triggered
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
8. **Classify feedback with OpenAI** `openAi` — prompt: "=Classify the sentiment in the following customer feedback:  {{ $json['Your feedback'] }}"
9. **Merge sentiment with form content** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
10. **Add customer feedback to Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of collecting customer feedback, analyzing the sentiment of that feedback using OpenAI, and storing the results in Google Sheets. When a customer submits feedback through a form, the feedback is sent to OpenAI to determine whether it is positive, negative, or neutral. The original feedback and the sentiment analysis result are then combined and added to a Google Sheets document for easy tracking and review.

### Demonstrate
A business owner could use this workflow to efficiently manage customer feedback. By automatically analyzing sentiment, they can quickly identify trends in customer satisfaction and address any negative issues promptly, improving overall customer service.

### Imitate
1. Import the workflow to n8n.
2. Connect Google Sheets and OpenAI accounts.
3. Create or use an existing feedback form.
4. Customize the Google Sheets document to match your data needs.
5. Test the workflow by submitting feedback and verifying the results in Google Sheets.

### Practice
Create a simple test form with a few feedback entries. Run the workflow to see how it processes and classifies the sentiment. Try modifying the feedback to see how different sentiments are handled and logged in Google Sheets.

### WIIFM
Mastering this workflow enables you to offer sentiment analysis services, helping businesses quickly understand customer feedback trends. This can enhance your automation service offerings, attract new clients, and potentially increase your revenue by improving client satisfaction and retention.
  
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
  