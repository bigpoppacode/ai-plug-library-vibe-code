# Aggregate Stickynote Automate Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, lmChatGoogleGemini×2, agent×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash"
4. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash"
5. **Sticky Note** `stickyNote` — color: "6", width: "260", content: "## Keyword Query Extraction
This ai agent is important so that you always make sure for all queries you send, only the keyword phrase will be passed over to the API request node, a…[truncated]"
6. **Sticky Note1** `stickyNote` — color: "4", content: "## The API Request
You can tweak this to either get "answer the public kwywords" or "keyword overviews", just visit the api   [docs page](https://rapidapi.com/environmentn1t21r5/ap…[truncated]"
7. **Sticky Note2** `stickyNote` — content: "## Extract Keyword Data
The data from the API query will be so so big and I have written this javascript function to extract the most important bits. You can modify it if you want …[truncated]"
8. **Sticky Note3** `stickyNote` — width: "260", content: "## Trigger Node
This is just a sample trigger node to get started. You can use a telegram, whatsapp, webhook node etc, to get the keyword queried. "
9. **Sticky Note4** `stickyNote` — content: "## Respose Formatter
The ai agent node to format responses will give you more room to decide how you want your summaries to be sent back to you. You can modify the system message t…[truncated]"
10. **Simple Memory** `memoryBufferWindow` — configured for its default action.
11. **Keyword Query Extraction & Cleaning Agent** `agent` — options: "[object Object]"
12. **Ahrefs Keyword API Request** `httpRequest` — url: `https://ahrefs-keyword-tool.p.rapidapi.com/global-volume`
13. **Extract Main Keyword & 10 related Keyword data** `code` — jsCode: "// Get the main keyword data (Global Keyword Data)
const mainKeywordData = $input.first().json['Global Keyword Data']?.[0] || {};

// Get the related keywords array
const relatedKe…[truncated]"
14. **Aggregate Keyword Data** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
15. **Keyword Data Response Formatter** `agent` — text: "Provide reponse according to the system message. ", options: "[object Object]", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates keyword research using Ahrefs. It begins by receiving a chat message to extract a keyword. The keyword is cleaned and checked for spelling errors. It then sends a request to the Ahrefs API to fetch keyword data including search volume and competition metrics. The data is processed and formatted into a readable format, providing valuable insights for SEO strategies.

### Demonstrate
A digital marketing agency could use this workflow to streamline their keyword research process, allowing them to quickly gather and analyze keyword data, improving their SEO campaigns' effectiveness and efficiency.

### Imitate
1. Import the workflow into n8n.
2. Connect your Ahrefs and chat service accounts.
3. Set up a trigger to start the workflow on receiving a chat message.
4. Customize the API request and response formatting as needed.
5. Test the workflow to ensure it extracts and processes keyword data correctly.

### Practice
Create a test scenario where you send a keyword via chat and observe how the workflow processes and returns the keyword data. Try modifying the keyword and see how the workflow adapts.

### WIIFM
Mastering this workflow allows you to offer automated keyword research services, enhancing your SEO offerings. This can attract more clients, increase revenue, and position you as a valuable asset in the digital marketing industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi.
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
  