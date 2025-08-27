# Telegram Splitout Automation Triggered
## 🚀 What It Does
Automates a flow using telegram×7, stickyNote×3, vectorStoreSupabase×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.5-flash-preview-04-17"
3. **OpenWeatherMap** `openWeatherMapTool` — cityName: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('City', ``, 'string') }}"
4. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
5. **Think** `toolThink` — configured for its default action.
6. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
8. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
9. **Answer questions with a vector store** `toolVectorStore` — description: "Use this data if the user's question appears to reference an uploaded file, document content, or specific information that might be stored in prior user documents. If not relevant,…[truncated]"
10. **Supabase Vector Store** `vectorStoreSupabase` — options: "[object Object]", tableName: "[object Object]"
11. **Sticky Note10** `stickyNote` — color: "5", width: "1625", height: "779"
12. **Sticky Note11** `stickyNote` — color: "5", width: "1625", height: "599"
13. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $('Telegram Trigger').item.json.message.from.id }}", sessionIdType: "customKey"
14. **Sticky Note** `stickyNote` — width: "1960", height: "3520", content: "# 🤖 Telegram AI Assistant for Your Documents (n8n + Supabase + Gemini)

This project transforms a standard **Telegram bot** into your dedicated AI assistant – designed to understa…[truncated]"
15. **Command Router** `switch` — rules: "[object Object]", options: "[object Object]", looseTypeValidation: "true"
16. **Telegram - Download file** `telegram` — resource: **file**
17. **AI Agent** `agent` — text: "={{ $json.message.text }}", options: "[object Object]", promptType: "define"
18. **Unsupported message** `telegram` — text: "Unsupported command or file. 😓 Please upload a valid PDF document or ask your question regarding your files.", chatId: "={{ $('Command Router').item.json.message.chat.id }}", additionalFields: "[object Object]"
19. **Extract from File** `extractFromFile` — operation: **pdf**
20. **Send processing document message** `telegram` — text: "=<b>Processing document...</b>
<b>Please wait...⏳</b>", chatId: "={{ $('Command Router').item.json.message.chat.id }}", additionalFields: "[object Object]"
21. **Handle formatting and split** `code` — language: "python", pythonCode: "import re
import html

gemini_output_text = _('AI Agent').first().json.output;
# Regex to match any HTML tag <...>
HTML_TAG_PATTERN = re.compile(r'(<[^>]*?>)', re.IGNORECASE)

# Li…[truncated]"
22. **Supabase - Save Embeddings** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", tableName: "[object Object]"
23. **Send embedding Started message** `telegram` — text: "=<b>Document processed ✅ </b> 
<b>Num of pages:</b> {{ $json.numpages }} 
<b>Creator:</b> {{ $json.info.Creator }}
<b>Title:</b> {{ $json.info.Title }} 
<b>Version:</b> {{ $json.ve…[truncated]", chatId: "={{ $('Command Router').item.json.message.chat.id }}", additionalFields: "[object Object]"
24. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
25. **Aggregate** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
26. **Manual Mapping** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Telegram - Embedding Complete** `telegram` — text: "=✅ Document saved!
Feel free to start asking questions about it.", chatId: "={{ $('Command Router').item.json.message.chat.id }}", additionalFields: "[object Object]"
28. **Telegram** `telegram` — text: "={{ $json.text }}", chatId: "={{ $json.chatId }}", additionalFields: "[object Object]"
29. **Fallback- No formatting** `telegram` — text: "={{ $('Manual Mapping').item.json.text }}", chatId: "={{ $('Manual Mapping').item.json.chatId }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow acts as a Telegram-based AI assistant that interacts with users by understanding and answering questions related to uploaded documents. Users can upload PDFs to a Telegram bot, which processes these documents, extracts text, generates embeddings using Google Gemini, and stores them in a Supabase vector database. The workflow allows users to query these documents and receive informative responses.

**Demonstrate:**  
A business owner could use this workflow to provide an AI-powered document assistant for their employees, enabling them to quickly query internal documents for information, reducing time spent searching through files.

**Imitate:**  
1. Set up a Telegram bot and connect it to n8n.
2. Configure Google Gemini and Supabase credentials in your n8n instance.
3. Import the workflow into n8n.
4. Customize the Telegram bot responses and document processing steps to fit your needs.
5. Test the workflow by uploading a PDF and asking questions.

**Practice:**  
Create a simple PDF document containing frequently asked questions about your business. Upload it to the Telegram bot and test how accurately the AI assistant responds to queries based on that document.

**WIIFM:**  
Mastering this workflow empowers you to offer AI-driven document assistance services, enhancing productivity for businesses by providing instant access to information. This can lead to increased client satisfaction and potential revenue through service offerings in the automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, openWeatherMapApi, telegramApi, supabaseApi.

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
