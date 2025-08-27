# Manual Splitout Automation Webhook
  ## 🚀 What It Does
  Automates a flow using html×3, manualTrigger, httpRequest.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Request to Github Trend** `httpRequest` — url: `https://github.com/trending`
4. **Extract Box** `html` — operation: **extractHtmlContent**
5. **Extract all repositories** `html` — operation: **extractHtmlContent**
6. **Turn to a list** `splitOut` — options: "[object Object]", fieldToSplitOut: "repositories"
7. **Extract repository data** `html` — operation: **extractHtmlContent**
8. **Set Result Variables** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "="
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow scrapes the top trending repositories from GitHub. It starts with a manual trigger, then sends an HTTP request to GitHub's trending page. The HTML content is extracted to identify the trending repositories, which are split into a list. Each repository's details, such as author, title, and description, are extracted and formatted into a structured dataset using the Set Result Variables node.

### Demonstrate
A developer could use this workflow to automatically gather the latest trending repositories on GitHub, allowing them to stay updated with popular projects in their field, enhancing their ability to adopt new technologies or contribute to trending open-source projects.

### Imitate
1. Import the workflow into n8n.
2. Set the manual trigger as the starting point.
3. Ensure the HTTP Request node is configured to fetch from `https://github.com/trending`.
4. Inspect and adjust the CSS selectors in the HTML nodes to match any changes in GitHub's page structure.
5. Execute the workflow and verify the extracted data.

### Practice
Create a test run of the workflow to fetch trending repositories. Modify the CSS selectors or add additional fields to extract more data, such as the number of stars or forks, to customize the output to your needs.

### WIIFM
Mastering this workflow enables you to provide real-time insights into trending technologies on GitHub, which can be valuable for tech consultants or developers aiming to stay ahead in their field. Offering such insights can attract clients or enhance your own projects with cutting-edge tools and libraries.
  
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
  