# Manual Graphql Automate Triggered
  ## 🚀 What It Does
  Automates a flow using manualTrigger, graphql.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **GraphQL**.
  2. **GraphQL** `graphql` — query: "{
  launchesPast(limit: 5) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
…[truncated]", endpoint: "https://api.spacex.land/graphql/", requestFormat: "json"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow retrieves data about the last 5 SpaceX launches using a GraphQL query. It fetches details like mission name, launch date, launch site, rocket information, and media links from the SpaceX API. The workflow is manually triggered and returns the collected data in a structured format.

### Demonstrate
A space enthusiast or researcher might use this workflow to regularly gather and analyze recent SpaceX launch data for reporting or educational purposes, ensuring they have the latest information at their fingertips.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger to start the workflow.
3. Configure the GraphQL node with the SpaceX API endpoint.
4. Run the workflow to fetch the latest launch data.
5. Customize the query to fetch additional details if needed.

### Practice
Create a test workflow that queries another public GraphQL API, such as a weather or movie database. Modify the query to retrieve specific information and observe how the data is structured and returned.

### WIIFM
Mastering this workflow allows you to efficiently gather and utilize real-time data, enhancing your ability to create valuable insights for clients or personal projects. This skill can be monetized by offering data analysis services or creating automated reporting tools.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  