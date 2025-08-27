# Telegram Splitout Automate Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $json.output.searchQueries }}", sessionIdType: "customKey"
4. **Search News** `toolHttpRequest` — url: `[redacted]`
5. **Wikipedia** `toolHttpRequest` — url: `=https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles={{ $input.query ? encodeURIComponent($input.query) : encodeURIComponent($json.…[truncated]`
6. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
7. **Google Search Web** `toolHttpRequest` — url: `[redacted]`
8. **SerpApi** `toolHttpRequest` — url: `[redacted]`
9. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "output": {
    "topic": "the best ai models 2025",
    "searchQueries": [
      "best AI models 2025 natural language processing",
      "top AI models 2025 computer vision",
…[truncated]"
10. **Sticky Note** `stickyNote` — color: "6", width: "2900", height: "1600"
11. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
12. **Executed by Main AI Agent** `executeWorkflowTrigger` — inputSource: "passthrough"
13. **Input Validation** `code` — jsCode: "// Validate input and prepare for processing
const query = $input.all()[0].json.query;

if (!query || query.trim().length < 3) {
  throw new Error('Research query must be at least …[truncated]"
14. **Query Refiner** `agent` — text: "=You are a query generation expert. Based on the refined query provided, generate exactly 5 related search queries that can help broaden the research scope. Each query should focus…[truncated]", options: "[object Object]", promptType: "define"
15. **Research AI Agent** `agent` — text: "=Perform research on the topic 
"{{ $json.output.topic }}""


using the following search queries: {{ $json.output.searchQueries.join(",") }}

", options: "[object Object]", promptType: "define"
16. **Parse Research Output** `code` — jsCode: "// Get the output string from the Research AI Agent
const outputString = $input.first().json.output;

// Parse the string into a JSON object
const parsedOutput = JSON.parse(outputS…[truncated]"
17. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: " introduction, summary, key_findings, news_highlights, scholarly_insights, wikipedia_summary, sources"
18. **Merge Split Items** `code` — jsCode: "const mergedItem = {
  key_findings: [],
  news_highlights: [],
  scholarly_insights: [],
  sources: []
};

$input.all().forEach(item => {
  const data = item.json;

  if (data.int…[truncated]"
19. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
20. **Store Research Metadata** `googleSheets` — operation: **append**
21. **Generate PDF HTML** `code` — jsCode: "// Function to escape HTML special characters
function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe
    .replace(/&/g, "&amp;")
    .replac…[truncated]"
22. **Convert HTML to PDF** `httpRequest` — method: **POST**, url: `https://api.pdfshift.io/v3/convert/pdf`
23. **Download PDF** `httpRequest` — url: `={{ $json.url }}`
24. **Search Folder** `googleDrive` — resource: **fileFolder**
25. **Send Research to Gmail** `gmail` — sendTo: "example@gmail.com", message: "=<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research Report: {{ $('Generate …[truncated]", options: "[object Object]"
26. **Send PDF** `telegram` — operation: **sendDocument**
27. **If** `if` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the generation of research reports. It refines a given query, conducts comprehensive research using AI and various data sources like Wikipedia, Google Search, and news articles. The results are compiled into a structured format, converted into a PDF, and sent via email and Telegram for easy distribution.

- **Demonstrate**: A consultant could use this workflow to generate detailed research reports for clients, providing insights on industry trends or competitive analysis without manual data compilation, thus saving time and enhancing service efficiency.

- **Imitate**: Import the workflow into n8n. Connect your OpenAI, Google Sheets, and email accounts. Set up the trigger to start the workflow, input your research query, and customize the email/Telegram settings. Test the workflow with a sample query to ensure it generates and sends the report correctly.

- **Practice**: Create a research query about a trending topic, run the workflow, and review the generated report. Test different queries to see how the workflow adapts and refines searches, ensuring the output meets your expectations.

- **WIIFM**: Mastering this workflow allows you to offer automated research services, enhancing client offerings and potentially increasing income. It positions you as a solution provider capable of delivering valuable insights quickly and efficiently, appealing to clients needing regular, detailed market analysis.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, serpApi, googleSheetsOAuth2Api, gmailOAuth2, telegramApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
