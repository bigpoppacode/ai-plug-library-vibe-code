# Googledocs Code Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Create collection** `httpRequest` — method: **PUT**, url: `http://QDRANT_URL/collections/COLLECTIONS`
4. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
5. **Default Data Loader** `documentDefaultDataLoader` — loader: "textLoader", options: "[object Object]", dataType: "binary"
6. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "450", chunkOverlap: "50"
7. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
8. **Sticky Note4** `stickyNote` — color: "4", width: "620", height: "400"
9. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
10. **Qdrant Vector Store1** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
11. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
12. **Item List Output Parser** `outputParserItemList` — options: "[object Object]"
13. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-pro-exp"
14. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
15. **Item List Output Parser1** `outputParserItemList` — options: "[object Object]"
16. **Google Gemini Chat Model3** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
17. **Qdrant Vector Store2** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
18. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
19. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"correct": {
			"type": "string"
		},
		"answers": {
			"type": "array",
			"items": {
				"type": "string"
			}
		}
	}
}"
20. **RAG** `toolVectorStore` — description: "In base alla domanda consulta il database vettoriale ed estrapola la risposta corretta. Elabora anche altre 3 risposte non corrette."
21. **Google Gemini Chat Model4** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-pro-exp"
22. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
23. **Sticky Note** `stickyNote` — width: "620", height: "180", content: "# STEP 3

The chain analyzes the document and creates 10 "open" questions and another chain analyzes each single question and through the consultation of the vector database the op…[truncated]"
24. **Sticky Note1** `stickyNote` — width: "620", height: "180", content: "# STEP 4

The chain analyzes the document and creates 10 questions with "closed" answers and another chain analyzes each single question and through the consultation of the vector …[truncated]"
25. **Sticky Note2** `stickyNote` — color: "3", width: "1120", height: "200"
26. **Refresh collection** `httpRequest` — method: **POST**, url: `http://QDRANT_URL/collections/COLLECTIONS/points/delete`
27. **Get Doc** `googleDocs` — operation: **get**
28. **Converto di MD** `code` — jsCode: "function convertToMarkdown(docContent) {
  let markdown = '';

  const headingMap = {
    'HEADING_1': '#',
    'HEADING_2': '##',
    'HEADING_3': '###',
    'HEADING_4': '####',
…[truncated]"
29. **Closed questions** `chainLlm` — text: "=Article:
'''
{{ $json.markdown }}
'''", messages: "[object Object]", promptType: "define"
30. **Convert to File** `convertToFile` — operation: **toText**
31. **Open questions** `chainLlm` — text: "=Article:
'''
{{ $json.markdown }}
'''", messages: "[object Object]", promptType: "define"
32. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the creation of exam questions from a document stored in Google Docs. It converts the document into markdown, splits it into chunks, and uses AI models to generate open-ended and multiple-choice questions. The workflow stores both question types and their answers in Google Sheets for easy access and management.

**Demonstrate:** An education company could use this workflow to quickly generate exam questions from their course materials, saving educators hours of manual question creation. This ensures exams are consistent and aligned with the curriculum.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Google Docs and Sheets accounts.
3. Set up the Google Docs URL in the “Get Doc” node.
4. Run the workflow to generate questions based on your document.
5. Check Google Sheets for the generated questions and answers.

**Practice:** Create a simple Google Doc with educational content, then use the workflow to generate questions. Review the questions in Google Sheets and adjust the document to see how changes affect question generation.

**WIIFM:** Mastering this workflow can help you offer automated exam generation services to educational institutions, increasing your service offerings and creating a new revenue stream. This can enhance client satisfaction and retention in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** qdrantApi, httpHeaderAuth, openAiApi, googleDocsOAuth2Api, googlePalmApi.
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
  