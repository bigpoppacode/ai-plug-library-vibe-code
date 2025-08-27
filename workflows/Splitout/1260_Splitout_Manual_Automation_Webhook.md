# Splitout Manual Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
4. **Sticky Note5** `stickyNote` — color: "5", width: "587", height: "570"
5. **Jina Fetch** `httpRequest` — url: `https://r.jina.ai/http://books.toscrape.com/catalogue/category/books/historical-fiction_4/index.html`
6. **Information Extractor** `informationExtractor` — text: "={{ $json.data }}", options: "[object Object]", schemaType: "manual"
7. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.results"
8. **Save to Google Sheets** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of extracting book data from a webpage and saving it to a Google Sheet. It starts with a manual trigger that fetches content from a specified URL using the Jina Fetch node. The Information Extractor node processes the fetched data to extract relevant information such as book title, price, availability, and URLs. The extracted data is then split into individual entries and appended to a Google Sheet for easy access and analysis.

**Demonstrate:**  
A book retailer could use this workflow to regularly update their inventory list by scraping data from a supplier's website. This ensures they have the latest book details and pricing for their sales operations.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Google Sheets account.  
3. Set the URL in the Jina Fetch node to your target webpage.  
4. Configure the Google Sheets node with your desired spreadsheet and columns.  
5. Run the workflow to test and ensure data is correctly appended.

**Practice:**  
Create a test Google Sheet and run the workflow to scrape data from a sample book website. Check how the data is organized in the spreadsheet. Modify the data extraction schema to capture additional attributes.

**WIIFM:**  
Mastering this workflow allows you to offer web scraping and data integration services, helping clients automate data collection tasks. This can lead to increased efficiency in data management, attracting clients who need reliable and updated data for their business operations.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi, httpHeaderAuth.
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
