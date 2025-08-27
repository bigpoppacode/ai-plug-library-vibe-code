# Splitout Code Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note3**.
2. **Baserow Event** `webhook` — method: **POST**, path: `/267ea500-e2cd-4604-a31f-f0773f27317c`
3. **Sticky Note** `stickyNote` — color: "7", width: "480", height: "440"
4. **Sticky Note1** `stickyNote` — color: "5", width: "330", height: "80"
5. **Sticky Note2** `stickyNote` — color: "5", width: "390", height: "120"
6. **Sticky Note3** `stickyNote` — width: "520", height: "1160", content: "## Try It Out!
### This n8n template powers a "dynamic" or "user-defined" prompts with PDF workflow pattern for a [Baserow](https://baserow.io) table. Simply put, it allows users t…[truncated]"
7. **Sticky Note4** `stickyNote` — color: "7", width: "580", height: "440"
8. **Sticky Note5** `stickyNote` — color: "7", width: "700", height: "400"
9. **Sticky Note7** `stickyNote` — color: "7", width: "520", height: "440"
10. **Sticky Note8** `stickyNote` — color: "7", width: "860", height: "580"
11. **Sticky Note9** `stickyNote` — color: "7", width: "420", height: "460"
12. **Sticky Note10** `stickyNote` — color: "7", width: "680", height: "360"
13. **Sticky Note11** `stickyNote` — color: "7", width: "700", height: "500"
14. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
15. **Sticky Note12** `stickyNote` — color: "7", width: "420", height: "460"
16. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
17. **Sticky Note13** `stickyNote` — color: "7", width: "500", height: "380"
18. **Sticky Note6** `stickyNote` — color: "7", height: "120", content: "![baserow.io](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/baserow_logo)"
19. **Sticky Note14** `stickyNote` — color: "5", width: "820", height: "800"
20. **Table Fields API** `httpRequest` — url: `=https://api.baserow.io/api/database/fields/table/{{ $json.body.table_id }}/`
21. **Get Prompt Fields** `code` — jsCode: "const fields = $input.all()
    .filter(item => item.json.description)
    .map(item => ({
      id: item.json.id,
      order: item.json.order,
      name: item.json.name,
      d…[truncated]"
22. **Get Event Body** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $('Baserow Event').first().json.body }}"
23. **Event Type** `switch` — rules: "[object Object]", options: "[object Object]"
24. **Event Ref1** `noOp` — configured for its default action.
25. **Event Ref** `noOp` — configured for its default action.
26. **Rows to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "items"
27. **Filter Valid Fields** `filter` — options: "[object Object]", conditions: "[object Object]"
28. **Filter Valid Rows** `filter` — options: "[object Object]", conditions: "[object Object]"
29. **List Table API** `httpRequest` — url: `=https://api.baserow.io/api/database/rows/table/{{ $json.table_id }}/`
30. **Get Row** `httpRequest` — url: `=https://api.baserow.io/api/database/rows/table/{{ $('Event Ref1').first().json.table_id }}/{{ $json.id }}/`
31. **Get Valid Rows** `code` — jsCode: "return $input.all()
  .filter(item => item.json.results?.length)
  .flatMap(item => item.json.results);"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow integrates with Baserow to automate data extraction and updates. It listens for events like row updates or field changes in a Baserow table. When triggered, it fetches relevant data, processes PDF content using AI (OpenAI), and updates the Baserow table with extracted information. This setup allows dynamic data processing and storage without manual intervention.

**Demonstrate**  
A consultant could use this workflow to automate the processing of invoices stored in PDFs within a Baserow table, extracting key details and updating the database for streamlined financial tracking.

**Imitate**  
1. Set up a Baserow table with an input field for PDFs.  
2. Configure the workflow in n8n to trigger on Baserow events.  
3. Connect Baserow and OpenAI credentials.  
4. Adapt the code nodes to match your data needs.  
5. Test the workflow with sample PDFs.

**Practice**  
Create a sample Baserow table and upload a few PDFs. Run the workflow to see how it extracts data and updates the table. Experiment with different PDF structures to understand the workflow's flexibility.

**WIIFM**  
Mastering this workflow empowers you to offer automated data extraction services, enhancing productivity and accuracy for clients. This capability can attract new clients and generate recurring income in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, openAiApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
