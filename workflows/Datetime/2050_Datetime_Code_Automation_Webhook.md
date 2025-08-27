# Datetime Code Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note** `stickyNote` — color: "6", width: "478.38709677419376", height: "347.82258064516134"
3. **Sticky Note1** `stickyNote` — width: "377.6129032258063", height: "264.22580645161304", content: "## ⚙️ 2. Update Local IP
Update the **'Base URL'** `http://192.168.1.1:1234/v1/models` in the workflow to match the IP of your LM Studio server. (Running LM Server)[https://lmstudi…[truncated]"
4. **When chat message received** `chatTrigger` — options: "[object Object]"
5. **Sticky Note2** `stickyNote` — width: "378.75806451612857", height: "216.12903225806457", content: "## 🛠️1. Setup - LM Studio
First, download and install [LM Studio](https://lmstudio.ai/). Identify which LLM models you want to use for testing.

Next, the selected models are load…[truncated]"
6. **Sticky Note3** `stickyNote` — width: "570.0000000000002", height: "326.0645161290325", content: "[redacted]"
7. **Sticky Note4** `stickyNote` — width: "304.3225806451618", height: "599.7580645161281", content: "## 📊4. Create Google Sheet (Optional)
1. First, create a Google Sheet with the following headers:
 - Prompt
 - Time Sent
 - Time Received
 - Total Time Spent
 - Model
 - Response
…[truncated]"
8. **Sticky Note5** `stickyNote` — color: "5", width: "359.2903225806448", height: "316.9032258064518"
9. **Sticky Note6** `stickyNote` — width: "615.8064516129025", height: "272.241935483871", content: "## 📖Prompting Multiple LLMs

When testing for specific outcomes (such as conciseness or readability), you can add a **System Prompt** in the LLM Chain to guide the models' respons…[truncated]"
10. **Run Model with Dunamic Inputs** `lmChatOpenAi` — model: `={{ $node['Extract Model IDsto Run Separately'].json.id }}`
11. **Sticky Note7** `stickyNote` — width: "330.4677419354838", height: "182.9032258064516", content: "### Optional
You can just delete the google sheet node, and review the results by hand. 

Utilizing the google sheet, allows you to provide mulitple prompts and review the analysis…[truncated]"
12. **Sticky Note8** `stickyNote` — color: "3", width: "570.0000000000002", height: "182.91935483870984"
13. **Get Models** `httpRequest` — url: `http://192.168.1.179:1234/v1/models`
14. **Extract Model IDsto Run Separately** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
15. **Capture Start Time** `dateTime` — options: "[object Object]", outputFieldName: "startDateTime"
16. **Add System Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
17. **LLM Response Analysis** `chainLlm` — text: "={{ $('When chat message received').item.json.chatInput }}", messages: "[object Object]", promptType: "define"
18. **Capture End Time** `dateTime` — options: "[object Object]", outputFieldName: "endDateTime"
19. **Get timeDifference** `dateTime` — operation: **getTimeBetweenDates**
20. **Prepare Data for Analysis** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Analyze LLM Response Metrics** `code` — jsCode: "// Get the input data from n8n
const inputData = items.map(item => item.json);

// Function to count words in a string
function countWords(text) {
 return text.trim().split(/\s+/).…[truncated]"
22. **Save Results to Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow facilitates testing multiple local language models (LLMs) using LM Studio. It receives chat messages, retrieves LLM models, and dynamically runs models with inputs. It captures start and end times, analyzes LLM responses for readability and other metrics, and logs results in a Google Sheet for further analysis.

- **Demonstrate:** A developer testing different LLMs for a project can use this workflow to compare model outputs based on readability and response time, helping them choose the best model for their needs.

- **Imitate:** To adapt this workflow, set up LM Studio, update the base URL to your server's IP, create a Google Sheet with required headers, and configure the workflow nodes for your specific models and analysis criteria. Test to ensure it captures and logs data accurately.

- **Practice:** Create a sample chat message and observe how the workflow processes it through different models. Check the Google Sheet to verify the recorded metrics and analyze the differences in model outputs.

- **WIIFM:** Mastering this workflow can position you as an expert in LLM evaluation, allowing you to offer specialized testing and optimization services to clients, enhancing your AI automation business and increasing revenue potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api.
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
  