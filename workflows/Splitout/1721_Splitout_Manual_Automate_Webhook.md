# Splitout Manual Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "400", height: "300", content: "## Note

Deals with the Esty web scraping by utilizing the Bright Data Web Unlocker Product.

The Information Extraction node being used to demonstrate the usage of the N8N AI capa…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "480", height: "300", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain Data Extractor."
5. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **Google Gemini Chat Model for product info** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Sticky Note2** `stickyNote` — color: "5", width: "1340", height: "620"
8. **Extract Paginated Resultset With OpenAI** `informationExtractor` — text: "=Analyze and Extract the below content. Make sure to produce a unique resultset. Exclude page_numbers which are not numbers.

 {{ $json.data }}", options: "[object Object]", schemaType: "manual"
9. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
10. **Sticky Note3** `stickyNote` — color: "6", width: "660", height: "460"
11. **Set Esty Search Query** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Perform Esty Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
13. **Extract Paginated Resultset** `informationExtractor` — text: "=Analyze and Extract the below content. Make sure to produce a unique resultset. Exclude page_numbers which are not numbers.

 {{ $json.data }}", options: "[object Object]", schemaType: "manual"
14. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of scraping product data from Etsy using the Bright Data Web Unlocker. It sets a search query, performs a web request to retrieve data, and uses AI models like Google Gemini and OpenAI to extract and analyze information. The results are then processed, paginated, and optionally saved or sent as a notification.

- **Demonstrate:** A business owner might use this workflow to gather market insights by extracting product information from Etsy, enabling them to track competitors and identify trending products.

- **Imitate:** To adapt this workflow, import it into n8n, configure the required API credentials, modify the Etsy search query to fit your needs, and set up the AI models with your specific endpoints and keys. Test the workflow to ensure it extracts and processes the data correctly.

- **Practice:** Create a new Etsy scraping workflow with a different product category. Test it by extracting data and analyzing the output. Try modifying the AI model prompts to improve data interpretation.

- **WIIFM:** Mastering this workflow enables you to offer data scraping and analysis services to clients, helping them gain competitive insights. This can enhance your service portfolio in the AI automation business, leading to potential customer acquisition and increased income.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googlePalmApi, openAiApi.
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
