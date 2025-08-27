# HTTP ExecuteWorkflow Import Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote, executeWorkflowTrigger, code.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Entry**.
  2. **Sticky Note** `stickyNote` — width: "780", height: "1720", content: "# GetBible Query Workflow Documentation

## Overview

The **GetBibleQuery** workflow is a modular and self-standing workflow designed to retrieve scriptures based on provided refer…[truncated]"
3. **Entry** `executeWorkflowTrigger` — inputSource: "jsonExample", jsonExample: "{
  "references": [
      "1 John 3:16",
      "Jn 3:16",
      "James 3:16",
      "Rom 3:16"
  ],
  "translation": "kjv",
  "version": "v2"
}"
4. **ModelJson** `code` — jsCode: "// Loop over input items and process the 'references' field
for (let item of $input.all()) {
  // Check if 'references' exists and is an array
  if (Array.isArray(item.json.referen…[truncated]"
5. **API Query to GetBible** `httpRequest` — url: `=https://query.getbible.net/{{ $json.version || 'v2' }}/{{ $json.translation || 'kjv' }}/{{ $json.references }}`
6. **Map API Respons to Result** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow retrieves Bible verses based on user input. It takes a JSON object with scripture references, processes the input to a compatible format, queries the GetBible API for the specified verses and translation, and returns the results in a structured format.

### Demonstrate
A developer could use this workflow to integrate scripture retrieval into a religious app or website, allowing users to easily access Bible verses in their preferred translation, enhancing user engagement and interactivity.

### Imitate
1. Import the workflow into n8n.
2. Set up the input JSON with desired scripture references and translation.
3. Ensure the GetBible API is accessible.
4. Test the workflow to confirm it retrieves and formats the data correctly.

### Practice
Create a JSON object with different scripture references and run the workflow. Observe how it retrieves and formats the verses. Modify the references and translation to see how the output changes, ensuring you understand the process.

### WIIFM
Mastering this workflow allows you to offer customized scripture retrieval services, appealing to religious organizations or developers creating faith-based apps, potentially opening new revenue streams in the niche market of religious tech solutions.
  
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
  