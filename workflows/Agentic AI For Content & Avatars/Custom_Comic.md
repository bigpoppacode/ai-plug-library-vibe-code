# Custom Comic
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Airtable** `airtable` — operation: **search**, table: `[object Object]`
4. **If** `if` — conditions: "[object Object]", options: "[object Object]"
5. **No Operation, do nothing** `noOp` — configured for its default action.
6. **Edit Fields** `set` — assignments: "[object Object]", options: "[object Object]"
7. **Get website code** `httpRequest` — url: `={{ $('If').item.json['Website 🔗'] }}`
8. **Website Text** `code` — mode: "runOnceForEachItem", jsCode: "// This script runs once per input item
const html = $json.data || '';

const strippedText = html
  .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
  .replace(/<style[^>]*>([\s…[truncated]"
9. **Screenshot of site** `httpRequest` — url: `https://api.screenshotone.com/take`
10. **Screenshot to Binary** `code` — jsCode: "// Create proper binary structure for OpenAI node
const items = [];

for (const item of $input.all()) {
  // Create a new item with the correct binary structure
  const newItem = {…[truncated]"
11. **Website Analysis** `openAi` — resource: **image**, operation: **analyze**
12. **OpenAI** `openAi` — modelId: "[object Object]", messages: "[object Object]", options: "[object Object]"
13. **Airtable2** `airtable` — operation: **update**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of analyzing websites. It begins by retrieving website URLs from an Airtable database. For each URL, it captures the website's HTML code and screenshot. The HTML is processed to extract text, while the screenshot is analyzed using OpenAI to describe the website's design and color palette. The workflow updates the Airtable record with a summary of the website's core offering, crafted by OpenAI.

**Demonstrate**  
A web design agency could use this workflow to audit potential clients' websites, providing insights into their design and content. This can streamline their sales process by automatically generating a summary and analysis of the client's existing web presence.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect Airtable and OpenAI accounts.  
3. Modify the Airtable table to include URLs of websites you want to analyze.  
4. Test the workflow to ensure it retrieves and processes website data correctly.  
5. Review and adapt the OpenAI prompts for your specific analysis needs.

**Practice**  
Create a test Airtable with a few website URLs. Run the workflow and check how it extracts and analyzes the website content and design. Tweak the OpenAI prompts to see how different instructions affect the output.

**WIIFM**  
Mastering this workflow enables you to offer automated website analysis services. This can enhance your value proposition to clients looking for detailed insights into their online presence, potentially leading to new business opportunities and increased revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi, openAiApi.
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
