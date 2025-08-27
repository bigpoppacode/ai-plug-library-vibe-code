# Splitout Code Automation Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "AI Logo Sheet Feeder", formFields: "[object Object]"
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"tools": [{
"name": "Name of the Tool, Software, etc.",
"attributes": ["Some category or attribute", "something else you can see from the context or image"],
"similar": ["simila…[truncated]"
4. **Sticky Note** `stickyNote` — color: "5", width: "1460", height: "600"
5. **Sticky Note1** `stickyNote` — color: "6", width: "420", height: "540"
6. **Sticky Note2** `stickyNote` — color: "4", width: "880", height: "600"
7. **Sticky Note3** `stickyNote` — color: "2", width: "1600", height: "600"
8. **gpt-4o** `lmChatOpenAi` — model: `gpt-4o`
9. **Note3** `stickyNote` — width: "668", height: "786", content: "## Instructions

This automation enables you to just upload any Image (via Form) of a Logo Sheet, containing multiple Images of Products, most likely and bringing them in some cont…[truncated]"
10. **Note** `stickyNote` — color: "7", width: "668", height: "786"
11. **Sticky Note4** `stickyNote` — color: "5", width: "300", height: "320"
12. **Get Schema** `airtable` — resource: **base**, operation: **getSchema**
13. **Note1** `stickyNote` — color: "7", width: "488", height: "366"
14. **Sticky Note5** `stickyNote` — color: "5", width: "280", height: "320"
15. **Sticky Note6** `stickyNote` — color: "3", width: "220", height: "80"
16. **Note4** `stickyNote` — color: "7", width: "968", height: "646"
17. **Map Agent Input** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
18. **make it a readable list** `html` — html: ""
19. **Retrieve and Parser Agent** `agent` — options: "[object Object]", hasOutputParser: "true"
20. **JSON it** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $json.output }}"
21. **Split Out Tools** `splitOut` — options: "[object Object]", fieldToSplitOut: "tools"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates the extraction of information from an uploaded image of a logo sheet. It uses AI to identify and list tools, their attributes, and similar tools from the image. The extracted data is then organized and stored in an Airtable database, ensuring that any new attributes or tools are added if they don't already exist.

**Demonstrate:** A marketing consultant could use this workflow to quickly catalog tools and products from an industry event's promotional materials, saving time on manual data entry and ensuring accurate data collection for analysis and reporting.

**Imitate:** Import the workflow into n8n. Connect your Airtable account and ensure your database has the necessary tables and fields. Adjust the AI prompt to suit your specific image context. Test the workflow by uploading a sample logo sheet and verify the extracted data in Airtable.

**Practice:** Create a test logo sheet with various tool logos and attributes. Run the workflow to see how it captures and organizes the data. Adjust the AI prompt and Airtable settings to better match your data extraction needs.

**WIIFM:** Mastering this workflow enables you to offer efficient data extraction services, reducing manual entry errors and saving clients' time. This skill can attract businesses seeking automation in data management, enhancing your service portfolio and revenue potential as an AI automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi, openAiApi.
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
