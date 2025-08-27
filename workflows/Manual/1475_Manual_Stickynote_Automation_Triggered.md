# Manual Stickynote Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×9, editImage×2, embeddingsOpenAi×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "372", height: "288"
6. **Sticky Note1** `stickyNote` — color: "7", width: "376.4067897296865", height: "335.30166772984643"
7. **Sticky Note2** `stickyNote` — color: "3", width: "359.1981770749933", height: "98.40143173756314"
8. **Sticky Note3** `stickyNote` — color: "7", width: "418.6907913057789", height: "316.7698949693208"
9. **Sticky Note4** `stickyNote` — color: "7", width: "462.52060804115854", height: "938.3723985625845"
10. **Sticky Note5** `stickyNote` — color: "7", width: "418.6907913057789", height: "343.6004071339855"
11. **Sticky Note6** `stickyNote` — color: "7", width: "532.5269726975372", height: "665.9365418117011"
12. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
13. **Sticky Note7** `stickyNote` — color: "7", width: "400.96585774172854", height: "512.739000439197"
14. **Sticky Note8** `stickyNote` — width: "359.6648027457353", height: "384.6280362222034", content: "## Try It Out!
### This workflow does the following:
* Downloads a selected image from Google Drive.
* Extracts colour channel information from the image.
* Generates semantic keyw…[truncated]"
15. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
16. **Search for Image** `vectorStoreInMemory` — prompt: "student having fun"
17. **Google Drive** `googleDrive` — operation: **download**
18. **Get Color Information** `editImage` — operation: **information**
19. **Resize Image** `editImage` — operation: **resize**
20. **Get Image Keywords** `openAi` — resource: **image**, operation: **analyze**
21. **Combine Image Analysis** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
22. **Document for Embedding** `set` — options: "[object Object]", assignments: "[object Object]"
23. **In-Memory Vector Store** `vectorStoreInMemory` — mode: "insert", memoryKey: "image_embeddings"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of downloading an image from Google Drive, analyzing it to extract color information and generate semantic keywords using OpenAI's vision model, and then creating an embedding document for the image. This document is stored in a vector store, allowing for efficient image search and retrieval based on the original image.

**Demonstrate**  
A graphic design company could use this workflow to catalog and search their image library efficiently, allowing them to find relevant images based on color schemes and keywords, thus speeding up their creative process.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Google Drive and OpenAI accounts.
3. Adjust the workflow settings to point to your specific image file.
4. Test the workflow to ensure it downloads, analyzes, and stores the image data correctly.

**Practice**  
Create a new Google Drive folder with a few images, then run the workflow to see how it processes each image. Modify the keywords or color information to observe changes in the vector store and search results.

**WIIFM**  
Mastering this workflow can enhance your ability to offer advanced image processing and search capabilities as a service, attracting clients in fields like digital marketing, e-commerce, and design, thereby increasing your business's value proposition and revenue potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi.
  
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
  