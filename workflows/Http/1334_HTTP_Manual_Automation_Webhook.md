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
This n8n workflow captures a screenshot of a specified website URL using the URLbox API. It then analyzes the screenshot with OpenAI to generate a description of the website's content. Finally, it merges the website's name, URL, and the generated description into a single output. This setup is useful for automating the process of capturing and analyzing website content for reporting or data collection purposes.

### Demonstrate
A business owner could use this workflow to automatically document and analyze competitors' websites. This helps in keeping track of market trends and identifying potential opportunities or threats without manual monitoring.

### Imitate
1. Import the workflow into n8n.
2. Add your URLbox and OpenAI API keys.
3. Set the website name and URL in the Setup node.
4. Execute the workflow manually or schedule it to run periodically.
5. Review the merged output containing the website name, URL, and description.

### Practice
Create a test workflow with a few different website URLs. Run the workflow and observe how the descriptions differ. Experiment with changing the analysis prompt in the OpenAI node to see how it affects the output.

### WIIFM
Mastering this workflow can enhance your service offerings by providing automated website analysis and reporting solutions. This can attract clients looking for competitive analysis, leading to increased business opportunities and income in the automation and AI solutions market.
  
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
  