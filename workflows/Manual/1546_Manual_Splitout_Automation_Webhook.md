# Manual Splitout Automation Webhook
  ## 🚀 What It Does
  Automates a flow using html×4, httpRequest×2, manualTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Request Techcrunsh Latest Page** `httpRequest` — url: `=https://techcrunch.com/latest/0`
4. **Parse a posts box** `html` — operation: **extractHtmlContent**
5. **Parse all posts** `html` — operation: **extractHtmlContent**
6. **split out the posts** `splitOut` — options: "[object Object]", fieldToSplitOut: "posts"
7. **Parse each post in detail** `html` — operation: **extractHtmlContent**
8. **Request a post detail page** `httpRequest` — url: `={{ $json.url }}`
9. **Parse a post's content and metadata** `html` — operation: **extractHtmlContent**
10. **Save the values** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow scrapes the latest articles from TechCrunch. It starts by triggering the process manually, fetches the latest webpage, and extracts the main post section. It then parses each post to get details like title, URL, and creation date. The workflow further requests each post's detailed page to extract content and metadata, and finally saves these values for further use.

**Demonstrate:**  
A tech analyst could use this workflow to automatically gather the latest TechCrunch articles, saving time on manual browsing and ensuring they have up-to-date information for their reports.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your HTTP request and HTML parsing nodes.
3. Set up the manual trigger to start the workflow.
4. Customize the parsing selectors if TechCrunch's layout changes.
5. Test the workflow to ensure it captures and saves the desired data.

**Practice:**  
Create a test workflow that scrapes a different website's latest news section. Use similar HTML parsing techniques to extract titles and URLs, and save this data for review.

**WIIFM:**  
Mastering this workflow enables you to offer web scraping services to clients, helping them access valuable data effortlessly. This can enhance your automation business by adding a high-demand service, attracting more clients, and generating additional income streams.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  