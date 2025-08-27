# Splitout Manual Export Webhook
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
This n8n workflow automates the process of scraping book data from a webpage and storing it in a Google Sheets document. It begins with a manual trigger, fetches data from a specified URL using an HTTP request, and extracts relevant book information such as title, price, availability, and image URL. This data is then split into individual records and appended to a Google Sheets document for easy access and analysis.

**Demonstrate:**  
A bookstore owner could use this workflow to regularly update their inventory records by scraping data from supplier websites, ensuring they have the latest product information for pricing and stock availability.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Sheets account.
3. Set up the manual trigger to start the workflow.
4. Configure the HTTP request to fetch data from your desired URL.
5. Test and ensure data is correctly extracted and saved to your Google Sheets.

**Practice:**  
Create a new Google Sheet and try running the workflow to scrape and store data from a different category on the book website. Adjust the URL in the HTTP request to test how it handles various sources.

**WIIFM:**  
By mastering this workflow, you can offer web scraping and data integration services, helping clients keep their databases up-to-date automatically. This skill can lead to higher-value projects and increase your business offerings in the automation field.

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
