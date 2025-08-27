# Splitout Zendesk Update Triggered
## 🚀 What It Does
Automates a flow using embeddingsOpenAi×3, stickyNote×3, vectorStoreQdrant×3.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
4. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
5. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.description }}", jsonMode: "expressionData"
6. **Token Splitter1** `textSplitterTokenSplitter` — configured for its default action.
7. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
8. **Embeddings OpenAI2** `embeddingsOpenAi` — model: `text-embedding-3-large`
9. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
10. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o`
11. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-large`
12. **Sticky Note** `stickyNote` — color: "7", width: "1380", height: "820"
13. **Sticky Note1** `stickyNote` — color: "7", width: "1380", height: "680"
14. **Sticky Note2** `stickyNote` — color: "7", width: "2140", height: "900"
15. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "ttp_identification": {
    "alert_summary": "The alert indicates a check-in from the NetSupport RAT, a known Remote Access Trojan, suggesting command and control (C2) communic…[truncated]"
16. **Query Qdrant Vector Store** `vectorStoreQdrant` — mode: "retrieve-as-tool", options: "[object Object]", toolName: "mitre_attack_vector_store"
17. **Qdrant Vector Store query** `vectorStoreQdrant` — mode: "retrieve-as-tool", options: "[object Object]", toolName: "mitre_attack_vector_store"
18. **Get all Zendesk Tickets** `zendesk` — operation: **getAll**
19. **AI Agent** `agent` — options: "[object Object]"
20. **Pull Mitre Data From Gdrive** `googleDrive` — operation: **download**
21. **Extract from File** `extractFromFile` — operation: **fromJson**
22. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
23. **Embed JSON in Qdrant Collection** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates cybersecurity incident analysis and response. It listens for chat messages, uses AI to extract and analyze threat data from MITRE ATT&CK, and updates Zendesk tickets with structured threat information and remediation steps. It also pulls threat data from Google Drive, processes it, and stores it in a Qdrant vector store for retrieval and analysis.

### Demonstrate
A cybersecurity firm could use this workflow to automate the analysis of security alerts from their SIEM system, ensuring rapid response and updating support tickets with detailed threat information and recommended actions, improving incident response times and accuracy.

### Imitate
1. Import the workflow into n8n.
2. Connect OpenAI, Google Drive, and Zendesk accounts.
3. Set up triggers to receive chat messages.
4. Customize the MITRE data processing to match your threat analysis needs.
5. Test the workflow with sample chat messages and threat data.

### Practice
Create a test environment with sample security alerts in Zendesk. Run the workflow to see how it processes alerts and updates tickets with threat data and remediation steps. Experiment with different types of security alerts to understand how the workflow handles various scenarios.

### WIIFM
Mastering this workflow can significantly enhance your cybersecurity service offerings by automating threat analysis and incident response. This reduces response times, improves accuracy, and increases client satisfaction, potentially leading to more business and higher revenue in the cybersecurity sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, qdrantApi, zendeskApi.

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
