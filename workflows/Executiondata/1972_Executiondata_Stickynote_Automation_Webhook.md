# Executiondata Stickynote Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Webhook** `webhook` — method: **POST**, path: `/luma-ai-response`
3. **Sticky Note1** `stickyNote` — color: "3", width: "220", content: "## Define your SETTINGS here"
4. **Sticky Note** `stickyNote` — color: "3", width: "400", content: "## Make sure this URL for the Webhook matches that in Part 1 of this series"
5. **Video JSON** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
6. **If** `if` — options: "[object Object]", conditions: "[object Object]"
7. **Global SETTINGS** `set` — options: "[object Object]", assignments: "[object Object]"
8. **ADD Video and Thumbnail URL** `airtable` — operation: **update**, table: `[object Object]`
9. **Execution Data** `executionData` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow listens for a POST request via a webhook to receive data from Luma AI. It processes the incoming JSON to extract video and thumbnail URLs, verifies if the video URL is present, and finally updates an Airtable record with this information. This helps automate the organization and storage of video assets.

### Demonstrate
A video production company could use this workflow to automatically update their Airtable database with new video content details received from Luma AI, ensuring that their team always has the latest video information for marketing or distribution purposes.

### Imitate
1. Import the workflow into n8n.
2. Set up the webhook with the correct path and ensure it matches the URL used by Luma AI.
3. Connect your Airtable account and configure the table settings.
4. Test the workflow by sending a sample POST request with video data to the webhook.

### Practice
Create a test Airtable base and send a test POST request with dummy video data to the webhook. Verify that the video and thumbnail URLs are correctly updated in Airtable. Experiment with modifying the JSON data to see how the workflow processes different inputs.

### WIIFM
Mastering this workflow can help you efficiently manage and automate video asset management, saving time on manual data entry. This skill can be offered to clients in media and content creation industries, enhancing your service offerings and generating additional income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtableTokenApi.
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
  