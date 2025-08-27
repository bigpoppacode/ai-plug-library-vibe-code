# Splitout Code Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×4, manualTrigger, splitInBatches.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenRouter Chat Model** `lmChatOpenRouter` — options: "[object Object]"
4. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
5. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
6. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "100000"
7. **Sticky Note** `stickyNote` — width: "1300", height: "280", content: "## Prepare Document. 
This section is responsible for downloading the file from Google Drive, splitting the text into sections by detecting separators, and preparing them for loopi…[truncated]"
8. **Sticky Note1** `stickyNote` — width: "780", height: "360", content: "## Prepare context
In this section, the 
agent node will prepare 
context for a section 
(chunk of text), which 
will then be passed for 
conversion into a vectors 
along with the …[truncated]"
9. **Sticky Note2** `stickyNote` — width: "580", height: "600", content: "## Convert Text To Vectors
In this step, the Pinecone node converts the provided text into vectors using Google Gemini and stores them in the Pinecone vector database."
10. **Sticky Note3** `stickyNote` — width: "400", height: "300", content: "## Video Demo
[![Video Thumbnail](https://img.youtube.com/vi/qBeWP65I4hg/maxresdefault.jpg)](https://www.youtube.com/watch?v=qBeWP65I4hg)"
11. **Get Document From Google Drive** `googleDrive` — operation: **download**
12. **Extract Text Data From Google Document** `extractFromFile` — operation: **text**
13. **Split Document Text Into Sections** `code` — jsCode: "let split_text = "—---------------------------—-------------[SECTIONEND]—---------------------------—-------------";
for (const item of $input.all()) {
 item.json.section = item.js…[truncated]"
14. **Prepare Sections For Looping** `splitOut` — options: "[object Object]", fieldToSplitOut: "section"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of extracting text from a Google Drive document, splitting the text into sections, preparing context for each section, converting the text into vectors using Google Gemini, and storing these vectors in a Pinecone vector database. This allows for efficient search and retrieval of document information using vector embeddings.

- **Demonstrate:** A content manager could use this workflow to index a large document library, enabling quick and accurate retrieval of document sections based on semantic search, improving content management efficiency.

- **Imitate:** 1. Import the workflow into n8n. 2. Connect your Google Drive and Pinecone accounts. 3. Set up the Google Drive node to download a specific document. 4. Customize the text splitting and context preparation to fit your document structure. 5. Test the workflow to ensure vectors are stored correctly.

- **Practice:** Create a small Google Document with distinct sections. Run the workflow to see how each section is split and stored as vectors in Pinecone. Adjust the text splitting logic to better fit various document formats.

- **WIIFM:** Mastering this workflow enables you to offer advanced document indexing and retrieval services, providing value to clients needing efficient document management solutions. This expertise can help expand your service offerings and increase your business revenue in the AI automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** openRouterApi, pineconeApi, googlePalmApi, googleDriveOAuth2Api.

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
