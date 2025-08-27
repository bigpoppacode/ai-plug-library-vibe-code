# Localfile Wait Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×7, set×5, lmChatMistralCloud×4.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Local File Trigger**.
  2. **Local File Trigger** `localFileTrigger` — path: `//home/node/storynotes/context`
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.data }}", jsonMode: "expressionData"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "2000"
5. **Embeddings Mistral Cloud** `embeddingsMistralCloud` — options: "[object Object]"
6. **Mistral Cloud Chat Model** `lmChatMistralCloud` — model: `open-mixtral-8x7b`
7. **Mistral Cloud Chat Model1** `lmChatMistralCloud` — model: `open-mixtral-8x7b`
8. **Item List Output Parser** `outputParserItemList` — options: "[object Object]"
9. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
10. **Embeddings Mistral Cloud1** `embeddingsMistralCloud` — options: "[object Object]"
11. **Qdrant Vector Store1** `vectorStoreQdrant` — qdrantCollection: "[object Object]"
12. **Mistral Cloud Chat Model2** `lmChatMistralCloud` — options: "[object Object]"
13. **Mistral Cloud Chat Model3** `lmChatMistralCloud` — model: `open-mixtral-8x7b`
14. **Sticky Note** `stickyNote` — color: "7", width: "995.1475972814769", height: "694.0931000693263"
15. **Sticky Note1** `stickyNote` — color: "7", width: "824.3300768713589", height: "949.8141899605673"
16. **Sticky Note2** `stickyNote` — color: "7", width: "591.09953935829", height: "485.0226378812345"
17. **Sticky Note3** `stickyNote` — color: "7", width: "1500.7886103732135", height: "806.6560661824452"
18. **Sticky Note4** `stickyNote` — color: "7", width: "771.8710855215123", height: "384.22073222791266"
19. **Sticky Note5** `stickyNote` — width: "390.63004227317265", height: "401.0080676370763", content: "## Try It Out! 

### This workflow automates generating notes from a source document.
* It watches a target folder to pick up new files.
* When a new file is detected, it saves the…[truncated]"
20. **Sticky Note6** `stickyNote` — width: "172.26820279743384", height: "295.46359440513226", content: "















### 💡Add your own templates here!
"
21. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Import File** `readWriteFile` — options: "[object Object]", fileSelector: "={{ $json.path }}"
23. **Get FileType** `switch` — rules: "[object Object]", options: "[object Object]"
24. **Extract from PDF** `extractFromFile` — operation: **pdf**
25. **Extract from DOCX** `extractFromFile` — operation: **ods**
26. **Extract from TEXT** `extractFromFile` — operation: **text**
27. **Prep Incoming Doc** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
29. **Summarization Chain** `chainSummarization` — options: "[object Object]", chunkSize: "4000"
30. **Merge** `merge` — mode: "chooseBranch"
31. **Prep For AI** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Get Doc Types** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
 "docs": [
 {
 "filename": "study_guide.md",
 "title": "Study Guide",
 "description": "A Study Guide is a consolidated resource designed to aid learning. This guide includes thre…[truncated]"
33. **Split Out Doc Types** `splitOut` — options: "[object Object]", fieldToSplitOut: "docs"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow automates the process of generating notes from documents. It monitors a specific folder for new files, extracts their content, and processes it using AI models. The workflow then generates study guides, timelines, and briefing documents based on predefined templates and exports them alongside the original files.

- **Demonstrate**: A university professor could use this workflow to automatically generate study materials from lecture notes or research papers, saving time and ensuring students have consistent, high-quality resources.

- **Imitate**: 1) Set up the folder path in the Local File Trigger node. 2) Customize document templates in the workflow. 3) Connect necessary AI and storage services. 4) Test the workflow with sample documents to ensure correct output.

- **Practice**: Create a test folder with a few text files. Run the workflow and observe how it generates different types of notes. Modify templates and experiment with different document types to see how outputs vary.

- **WIIFM**: Mastering this workflow allows you to offer automated document summarization and note generation services, adding value to educational institutions or businesses. It enhances efficiency and can be a lucrative service offering in the AI automation market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mistralCloudApi, qdrantApi.
  
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
  