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
 "address": { "type": "string" },
 "email": { "type": "…[truncated]"
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
 html += '<br />'; // Add a new line if it's not the first item
 }
 html += `<b>P…[truncated]"
26. **Convert education to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
 let html = '';

 list.forEach((education, index) => {
 if (index > 0) {
 html += '<br /><br />'; // Add a new line if it's not the first item
 }
 ht…[truncated]"
27. **Convert projects to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
 let html = '';

 list.forEach((project, index) => {
 if (index > 0) {
 html += '<br />'; // Add a new line if it's not the first project
 }
 html +=…[truncated]"
28. **Personal info** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
29. **Convert volunteering to HTML** `code` — mode: "runOnceForEachItem", jsCode: "function convertToHTML(list) {
 let html = '';

 list.forEach((event, index) => {
 if (index > 0) {
 html += '<br />'; // Add a new line if it's not the first volunteering event
 }…[truncated]"
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
This workflow automates the process of extracting and formatting resume data using the Telegram platform. A user uploads a PDF resume through Telegram, which the workflow then processes by extracting text from the PDF, parsing the data into a structured format using OpenAI's GPT-4 model, and converting the data into HTML. The final step involves generating a PDF document from the HTML and sending it back to the user via Telegram.

**Demonstrate:**  
A recruiter could use this workflow to automate the processing of resumes received over Telegram, quickly converting them into a structured format for easier review and comparison, saving time on manual data entry.

**Imitate:**  
1. Set up a Telegram bot and integrate it with n8n.
2. Import the workflow into n8n and configure your OpenAI and Telegram credentials.
3. Customize the JSON schema and HTML formatting as needed.
4. Test the workflow by sending a PDF resume to the Telegram bot.

**Practice:**  
Create a mock resume PDF and send it to the Telegram bot. Observe how the workflow extracts, formats, and returns the processed data. Experiment with different resume formats to understand the workflow's flexibility.

**WIIFM:**  
Mastering this workflow equips you to offer automated resume processing services, adding value to recruitment agencies and HR departments. It can help you attract new clients by showcasing your ability to streamline recruitment processes, potentially increasing your income in the automation business.

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
