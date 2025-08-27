# HTTP Manual Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Manual Execution**.
  2. **Sticky Note** `stickyNote` — width: "373.2796418305297", height: "381.1230421279239", content: "## Setup 
**For Testing use the Setup node to put in test name & url.**

If you want to use this workflow in production, you can expand it to load data from other sources like a DB…[truncated]"
3. **Sticky Note1** `stickyNote` — width: "373.2796418305297", height: "381.1230421279239", content: "## URLbox API call 
[URLbox](https://urlbox.com/) is a Screenshot API. With this API you can automate making screenshots based on website url's.

You have to replace the Placeholde…[truncated]"
4. **Sticky Note2** `stickyNote` — width: "373.2796418305297", height: "381.1230421279239", content: "## Analyze the Screenshot 
Analyze the screenshot using OpenAI.

Add your OpenAI Credentials on the top of the node.

The prompt is an example. Change it based on what you want to …[truncated]"
5. **Sticky Note3** `stickyNote` — width: "371.85912137154685", height: "300.15337596590155", content: "## Merge
Merge the description with the name of the website & the url."
6. **Manual Execution** `manualTrigger` — configured for its default action.
7. **Setup** `set` — values: "[object Object]", options: "[object Object]"
8. **URLbox API Request** `httpRequest` — method: **POST**, url: `https://api.urlbox.io/v1/render/sync`
9. **Analyze the Screenshot** `openAi` — resource: **image**, operation: **analyze**
10. **Merge Name & Description** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of capturing a screenshot of a website using the URLbox API, analyzing the screenshot with OpenAI to generate a website description, and then merging this description with the website name and URL. This helps in automating content generation or analysis tasks by providing a quick summary of a website's appearance and content.

### Demonstrate
A digital marketing consultant could use this workflow to quickly generate descriptions of competitors' websites for market analysis, allowing them to efficiently compare and understand different sites' content and design.

### Imitate
1. Import the workflow into n8n.
2. Configure the Setup node with a website name and URL.
3. Replace the placeholder with your URLbox API key.
4. Add your OpenAI credentials to the Analyze node.
5. Run the workflow manually or set a trigger to automate it.

### Practice
Create a list of three different website URLs. Run the workflow for each URL and compare the generated descriptions. Adjust the prompt in the Analyze node to extract different information and see how it affects the output.

### WIIFM
Mastering this workflow enables you to offer automated content analysis services, providing quick insights into website designs and content. This can enhance your value proposition to clients, attract new customers, and increase your income by offering unique, AI-driven insights.
  
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
  