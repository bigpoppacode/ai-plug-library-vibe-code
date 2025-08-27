# Limit Splitout Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "212.25249169435213", height: "245.55481727574733", content: "Change to the name of the company registered on Trustpilot and the maximum number of pages to scrape"
4. **Sticky Note1** `stickyNote` — width: "381", height: "177", content: "Extract all information with DeepSeek (remember to change base_url with https://api.deepseek.com/v1)"
5. **Sticky Note2** `stickyNote` — width: "501.28903654485043", height: "195.84053156146172", content: "Check if the review has already been saved to Google Drive"
6. **Sticky Note3** `stickyNote` — width: "301.27574750830576", height: "177.34219269102988", content: "Analyze review sentiment"
7. **DeepSeek Chat Model** `lmChatOpenAi` — model: `deepseek-reasoner`
8. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
9. **Set Parameters** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Get reviews** `httpRequest` — url: `=https://it.trustpilot.com/review/{{ $json.company_id }}`
11. **Extract** `html` — operation: **extractHtmlContent**
12. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "recensioni"
13. **Limit1** `limit` — maxItems: "3"
14. **Get Google Sheets** `googleSheets` — operation: **appendOrUpdate**
15. **Get rows** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
16. **If** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
17. **Get Single review** `httpRequest` — url: `=https://it.trustpilot.com{{ $('Split Out').item.json.recensioni }}`
18. **Extract review** `html` — operation: **extractHtmlContent**
19. **Information Extractor** `informationExtractor` — text: "=You need to extract the review from the following HTML: {{ $json.recensione }}", options: "[object Object]", attributes: "[object Object]"
20. **Sentiment Analysis** `sentimentAnalysis` — options: "[object Object]", inputText: "={{ $json.output.testo }}"
21. **Update sheet** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of collecting, extracting, and analyzing customer reviews from Trustpilot. It retrieves reviews for a specified company, checks if they have already been saved to Google Sheets, extracts detailed information using DeepSeek, performs sentiment analysis with OpenAI, and updates the Google Sheets with the review data and sentiment results.

### Demonstrate
A business owner could use this workflow to monitor brand reputation by automatically collecting and analyzing customer reviews from Trustpilot. This helps in understanding customer sentiment and making data-driven decisions to improve products or services.

### Imitate
1. Import the workflow into n8n.
2. Configure the company ID and max pages in the "Set Parameters" node.
3. Connect your Google Sheets and OpenAI accounts.
4. Run the workflow to test its functionality.
5. Monitor the Google Sheets for updated review data and sentiment analysis.

### Practice
Create a test Google Sheet and manually add some Trustpilot reviews. Run the workflow to check if it correctly updates the sheet with sentiment analysis results. Modify reviews to test different sentiment outcomes.

### WIIFM
Mastering this workflow enables you to offer automated review monitoring and sentiment analysis services to businesses. This can enhance their customer insight capabilities, improve brand management, and potentially increase your income through service offerings in AI automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi.
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
  