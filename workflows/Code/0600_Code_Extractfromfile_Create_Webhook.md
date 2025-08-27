# Code Extractfromfile Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note2** `stickyNote` — color: "7", width: "848.0232558139535", height: "533.5469767441862"
4. **Sticky Note5** `stickyNote` — width: "199.23348837209306", height: "374.95069767441856", content: "















### Privacy Warning!
This example uses a public third party service. If your data is senstive, please swap this out for the self-hosted version!"
5. **Sticky Note3** `stickyNote` — color: "7", width: "775.3441860465115", height: "636.0809302325588"
6. **Sticky Note4** `stickyNote` — color: "7", width: "814.0329302325591", height: "518.7793488372092"
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.text }}", jsonMode: "expressionData"
8. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "2048"
9. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
10. **OpenAI Chat Model2** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
11. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
12. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
13. **Sticky Note** `stickyNote` — color: "7", width: "910.9613023255822", height: "769.9451162790697"
14. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-mini`
15. **Vector Store Tool** `toolVectorStore` — name: "get_company_pitchdeck", description: "Call this tool to search for information contained in a startup/company's pitchdeck."
16. **OpenAI Chat Model3** `lmChatOpenAi` — model: `gpt-4o-mini`
17. **Embeddings OpenAI1** `embeddingsOpenAi` — model: `text-embedding-3-small`
18. **OpenAI Chat Model4** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
19. **Sticky Note1** `stickyNote` — color: "7", width: "1265.6381521804071", height: "846.3684803288264"
20. **Sticky Note6** `stickyNote` — color: "7", width: "830.0502325581398", height: "431.48621395348823"
21. **Sticky Note7** `stickyNote` — color: "7", width: "1077.6820093023243", height: "612.7294511627911"
22. **Airtable Trigger For Pending Rows** `airtableTrigger` — table: `[object Object]`
23. **Qdrant Vector Store** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
24. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('When chat message received').first().json.sessionId }}", sessionIdType: "customKey"
25. **Sticky Note8** `stickyNote` — width: "671.0736854602326", height: "705.4789168988943", content: "## Try It Out!

### This n8n template imports Pitch Decks and generates a report into Airtable as well as creates an AI Chatbot to ask questions about each Pitch Deck.

* Airtable …[truncated]"
26. **Check Pitch Deck Exists** `airtableTool` — operation: **search**, table: `[object Object]`
27. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "This chat allows you to ask questions about a startup's pitch deck. Please start by giving the name of the startup."
28. **Sticky Note9** `stickyNote` — color: "5", height: "91.86072082734213", content: "### Change Me!
Remember to update Airtable nodes to point  to your own."
29. **Sticky Note10** `stickyNote` — color: "5", width: "278.26180226980307", height: "91.64489634298351"
30. **Search Pending Rows** `airtable` — operation: **search**, table: `[object Object]`
31. **Download Deck From Airtable** `httpRequest` — url: `={{ $json.File[0].url }}`
32. **Identify Companies In Question** `informationExtractor` — text: "={{ $json.chatInput }}", options: "[object Object]", schemaType: "manual"
33. **Get Row** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $json.fields || $json }}
"
34. **Extract from File** `extractFromFile` — operation: **binaryToPropery**
35. **Ask Questions About Pitchdecks** `agent` — text: "={{ $('When chat message received').item.json.chatInput }}
", options: "[object Object]", promptType: "define"
36. **Prequisites Met** `if` — options: "[object Object]", conditions: "[object Object]"
37. **Convert to File** `convertToFile` — operation: **toBinary**
38. **Execute Workflow** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
39. **No Operation, do nothing** `noOp` — configured for its default action.
40. **Split PDF into Images** `httpRequest` — method: **POST**, url: `http://stirlingpdf.io/api/v1/convert/pdf/img`
41. **Extract Zip File** `compression` — configured for its default action.
42. **Images To List** `code` — jsCode: "let results = [];

for (item of items) {
    for (key of Object.keys(item.binary)) {
        results.push({
            json: {
                fileName: item.binary[key].fileName
…[truncated]"
43. **Sort Pages** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
44. **Resize Images For AI** `editImage` — operation: **resize**
45. **Transcribe to Markdown** `chainLlm` — text: "transcribe the document to markdown.", messages: "[object Object]", promptType: "define"
46. **Combine All Pages** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
47. **Delete Existing Vectors** `httpRequest` — method: **POST**, url: `http://qdrant:6333/collections/pitchdecks/points/delete`
48. **Generate Report** `informationExtractor` — text: "= {{ $json.pages.join('---') }}", options: "[object Object]", schemaType: "manual"
49. **Continue With Pages Only** `merge` — mode: "chooseBranch"
50. **Update Pitchdecks Table** `airtable` — operation: **upsert**, table: `[object Object]`
51. **Pitchdecks Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow processes startup pitch decks uploaded to Airtable. It extracts data from the decks, transcribes the content, and updates the information in Airtable. It also creates a chatbot that allows users to ask questions about the decks, using AI models and a vector store for enhanced search and interaction.
  
- **Demonstrate:** A venture capital firm could use this to efficiently manage and analyze startup pitch decks. It automates the extraction of key information from pitch decks, making it easier for analysts to evaluate startups and respond to inquiries about them.

- **Imitate:** 
  1. Set up an Airtable base with columns for pitch deck data.
  2. Import the n8n workflow and connect it to your Airtable.
  3. Configure the OpenAI and Qdrant nodes with your API keys.
  4. Test the workflow by uploading a pitch deck PDF to Airtable.

- **Practice:** Create a sample Airtable base with a few pitch deck PDFs. Run the workflow and check how the extracted data is updated in Airtable. Experiment with different document formats to see how well they are transcribed and indexed.

- **WIIFM:** Mastering this workflow enables you to offer advanced document processing services. You can help clients automate the analysis of business documents, reducing manual effort and improving decision-making, thus creating a valuable service offering in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, qdrantApi, airtableTokenApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  