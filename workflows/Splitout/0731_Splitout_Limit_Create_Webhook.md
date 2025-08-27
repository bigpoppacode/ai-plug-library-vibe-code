# Splitout Limit Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Gemini** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-pro-exp-02-05"
4. **Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"podcast_script": "California"
}"
5. **Sticky Note** `stickyNote` — width: "500", height: "340", content: "## This node fetches the main BBC News page, which contains links to various news articles."
6. **Sticky Note1** `stickyNote` — color: "2", width: "340", height: "360"
7. **Sticky Note2** `stickyNote` — color: "3", width: "400", height: "420"
8. **Sticky Note3** `stickyNote` — color: "4", width: "340", height: "320"
9. **Sticky Note4** `stickyNote` — color: "5", width: "360", height: "300"
10. **Sticky Note5** `stickyNote` — width: "460", height: "280", content: "[redacted]"
11. **Fetch BBC News Page** `httpRequest` — url: `https://www.bbc.com/`
12. **Extract News Block** `html` — operation: **extractHtmlContent**
13. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "newsTitle"
14. **Extract News Content** `html` — operation: **extractHtmlContent**
15. **Limit 10 Items** `limit` — maxItems: "10"
16. **News Classifier** `textClassifier` — options: "[object Object]", inputText: "=I will only send the headline as input:
{{ $json.title }} {{ $json.description }}", categories: "[object Object]"
17. **Fetch BBC News Detail** `httpRequest` — url: `=https://www.bbc.com{{ $json.link }}`
18. **Extract Detail** `html` — operation: **extractHtmlContent**
19. **Filter Empty Detail** `filter` — options: "[object Object]", conditions: "[object Object]"
20. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
21. **Basic Podcast LLM Chain** `chainLlm` — text: "=News Articles:{{ $json.data.map(item => item.newsDetail) }}", messages: "[object Object]", promptType: "define"
22. **If script exists** `if` — options: "[object Object]", conditions: "[object Object]"
23. **Hugging Face Text-to-Speech.** `httpRequest` — method: **POST**, url: `https://router.huggingface.co/hf-inference/models/facebook/mms-tts-eng`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of creating a podcast from BBC News articles. It fetches the main BBC News page, extracts news titles and content, and classifies them using a language model. Suitable articles are compiled into a podcast script using a large language model. Finally, the script is converted into speech using a text-to-speech API.

### Demonstrate
A podcast creator can use this workflow to automate the production of daily news podcasts. It saves time by automatically generating scripts from news articles, ensuring the content is fresh and up-to-date.

### Imitate
1. Import the workflow into n8n.
2. Connect your API credentials for Google Gemini and Hugging Face.
3. Set the trigger to run the workflow at your desired frequency.
4. Customize the nodes to extract the specific news sections you want.
5. Test the workflow to ensure it outputs a podcast script and converts it to speech.

### Practice
Create a test workflow with a few sample news articles. Run the workflow to see how it extracts content, classifies it, and generates a podcast script. Modify the script formatting to match your podcast style.

### WIIFM
Mastering this workflow allows you to offer automated podcast creation services, saving time and resources for content creators. This can lead to new business opportunities, client retention, and potential upsells in your AI automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, huggingFaceApi.
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
