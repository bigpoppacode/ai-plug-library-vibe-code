# Telegram Code Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram trigger**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4-turbo-preview`
3. **Auto-fixing Output Parser** `outputParserAutofixing` — configured for its default action.
4. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
5. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
  "type": "object",
  "properties": {
    "personal_info": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "address": { "type": "str…[truncated]"
6. **Telegram trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "226.21234567901217", height: "312.917333333334", content: "### Add chat ID
Remember to set your actual ID to trigger automation from Telegram."
8. **Sticky Note1** `stickyNote` — width: "229.64938271604922", height: "293.54824691358016", content: "### Ignore start message
Workflow ignores initial`/start` message sent to the bot."
9. **Sticky Note2** `stickyNote` — width: "211.00246913580224", height: "302.41975308642", content: "### Download resume file
Based on file ID, node performs downloading of the file uploaded by user."
10. **Sticky Note4** `stickyNote` — width: "217.87654320987633", height: "302.41975308642", content: "### Extract text from PDF
Node extracts readable text form PDF."
11. **Sticky Note5** `stickyNote` — width: "410.9479506172837", height: "302.41975308642", content: "### Parse resume data
Create structured data from text extracted from resume. Chain uses OpenAI `gpt-4-turbo-preview` model and JSON response mode. **Adjust JSON schema in output p…[truncated]"
12. **Sticky Note6** `stickyNote` — width: "1196.8442469135782", height: "1260.345679012346", content: "### Format HTML
Format HTML for each resume section (employment history, projects etc.)."
13. **Sticky Note7** `stickyNote` — width: "638.6516543209876", height: "322.5837037037037", content: "### Create HTML file
From formatted output create `index.html` file in order to run PDF conversion."
14. **Sticky Note8** `stickyNote` — color: "3", width: "262.0096790123454", height: "322.5837037037035"
15. **Sticky Note9** `stickyNote` — width: "262.0096790123454", height: "322.5837037037035", content: "### Send PDF file to user
Deliver converted PDF to Telegram user (based on chat ID)."
16. **Sticky Note10** `stickyNote` — width: "432.69769500990674", height: "364.2150828344463", content: "## ⚠️ Note

This is *resume extractor* workflow that I had a pleasure to present during [n8n community hangout](https://youtu.be/eZacuxrhCuo?si=KkJQrgQuvLxj-6FM&t=1701
) on March 7…[truncated]"
17. **Auth** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Check if start message** `if` — options: "[object Object]", conditions: "[object Object]"
19. **No operation (unauthorized)** `noOp` — configured for its default action.
20. **Get file** `telegram` — resource: **file**
21. **No operation (start message)** `noOp` — configured for its default action.
22. **Extract text from PDF** `extractFromFile` — operation: **pdf**
23. **Parse resume data** `chainLlm` — prompt: "={{ $json.text }}"
24. **Set parsed fileds** `set` — options: "[object Object]"
25. **Convert employment history to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
    let html = '';

    list.forEach((item, index) => {
        if (index > 0) {
            html += '<br />'; // Add a new line if it's not the firs…[truncated]"
26. **Convert education to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
    let html = '';

    list.forEach((education, index) => {
        if (index > 0) {
            html += '<br /><br />'; // Add a new line if it's n…[truncated]"
27. **Convert projects to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
    let html = '';

    list.forEach((project, index) => {
        if (index > 0) {
            html += '<br />'; // Add a new line if it's not the f…[truncated]"
28. **Personal info** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
29. **Convert volunteering to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
    let html = '';

    list.forEach((event, index) => {
        if (index > 0) {
            html += '<br />'; // Add a new line if it's not the fir…[truncated]"
30. **Technologies** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
31. **Employment history** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
32. **Education** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
33. **Projects** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
34. **Volunteering** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
35. **Merge personal info and technologies** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
36. **Merge education and employment history** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
37. **Merge projects and volunteering** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
38. **Merge other data** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
39. **Merge all** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
40. **Set final data** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
41. **Convert raw to base64** `code` — mode: "runOnceForEachItem", jsCode: "const encoded = Buffer.from($json.output).toString('base64');

return { encoded };"
42. **Convert to HTML** `convertToFile` — operation: **toBinary**
43. **Generate plain PDF doc** `httpRequest` — method: **POST**, url: `http://gotenberg:3000/forms/chromium/convert/html`
44. **Send PDF to the user** `telegram` — operation: **sendDocument**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of extracting information from a resume PDF uploaded via Telegram. It starts by downloading the PDF, extracting text from it, and then using OpenAI's GPT-4 model to parse the text into structured data. The workflow formats the parsed data into HTML sections like personal info, employment history, and education. It then converts this HTML into a PDF and sends it back to the user through Telegram.

**Demonstrate:**  
A recruitment agency could use this workflow to automate the extraction and formatting of candidate resumes, making it easier to review and store structured candidate information.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Telegram and OpenAI credentials.
3. Configure the Telegram Trigger with your bot's details.
4. Customize the JSON schema as needed for your resume format.
5. Test with a sample resume PDF to ensure accurate parsing and formatting.

**Practice:**  
Create a test Telegram bot and send a sample resume PDF. Observe how the workflow extracts and formats the data. Experiment by altering the resume format to see how the workflow adapts.

**WIIFM:**  
Mastering this workflow enables you to offer a valuable service to clients in recruitment or HR, automating resume processing to save time and reduce errors, potentially leading to increased efficiency and client satisfaction in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi.
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
