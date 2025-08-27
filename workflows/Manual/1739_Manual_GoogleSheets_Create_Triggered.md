# Manual GoogleSheets Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Parameters** `set` — options: "[object Object]", assignments: "[object Object]"
4. **Get urls** `airtop` — resource: **extraction**, operation: **query**, url: `=https://www.google.com/search?q={{ encodeURI($json.who+' on ' + $json.where) }}`, prompt: "=Those are search results, return up to 10 non-sponsored results that lead to a web page with a list of {{$json.who}} on {{$json.where}}. For each return the title and URL."
5. **Format results** `code` — jsCode: "// Get first input item
const input = $input.first().json.data.modelResponse
// Parse list of links
const listOfLinks = JSON.parse(input).results
// Format node's output
const outp…[truncated]"
6. **Get people** `airtop` — resource: **extraction**, operation: **query**, url: `={{ $json.url }}`, prompt: "=This is a list of {{ $('Parameters').item.json.who }} on {{ $('Parameters').item.json.where }}.
Extract up to 20 items. For each person extract: 
- name 
- handle or ID 
- URL"
7. **Dedupe results** `code` — jsCode: "const allResults = []

for (const inputItem of $input.all()) {
  // Parse input to JSON
  const input = inputItem.json.data.modelResponse
  const results = JSON.parse(input).items
…[truncated]"
8. **Add to spreadsheet** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow is designed to build a list of influencers based on specific parameters. It starts with a manual trigger and sets parameters for who and where to search. It queries Google for non-sponsored pages listing the specified influencers, extracts names and URLs, deduplicates the results, and appends the information to a Google Sheet.

### Demonstrate
A business consultant could use this workflow to automate the collection of influencer data for marketing campaigns. By compiling a list of top influencers in specific niches, they can streamline outreach efforts and enhance campaign effectiveness.

### Imitate
1. Import the workflow into n8n.
2. Set up your Google Sheets API credentials.
3. Adjust the 'who' and 'where' parameters to your target search criteria.
4. Test the workflow to ensure it correctly gathers and logs influencer data.

### Practice
Create a test by setting the parameters to search for "Top tech influencers in Silicon Valley." Run the workflow and verify that the Google Sheet is populated with accurate, deduplicated entries.

### WIIFM
Mastering this workflow allows students to offer valuable data collection services, enhancing marketing strategies for clients. This can lead to increased client satisfaction and open opportunities for upselling other automation services, boosting income potential in an AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtopApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  