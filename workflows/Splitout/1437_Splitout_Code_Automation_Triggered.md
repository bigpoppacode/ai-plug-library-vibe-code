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
**Explain:**  
This n8n workflow automates the process of extracting data from an uploaded image of a logo sheet, identifying tools and their attributes, and storing this information in Airtable. It begins with a form submission trigger, processes the image using an AI tool to extract structured data, and then checks and updates Airtable records with the extracted tool names, attributes, and similar tools.

**Demonstrate:**  
A tech consultant could use this workflow to streamline the process of cataloging new software tools featured in industry conference materials, ensuring their database is always up-to-date without manual data entry.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Airtable account and configure it with the necessary table and fields.
3. Set up the form for logo sheet uploads.
4. Adjust AI prompts in the workflow for your specific use case.
5. Test the workflow with sample images to ensure it correctly updates Airtable.

**Practice:**  
Create a test Airtable base and upload a sample logo sheet image using the form. Observe how the workflow extracts and logs the tool data. Modify the AI prompt to see how it affects the output.

**WIIFM:**  
Mastering this workflow allows you to offer a service that automates data extraction from images, saving clients time and reducing errors in data entry. This capability can be marketed to businesses looking to automate cataloging processes, providing a unique selling point for your automation services.

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
