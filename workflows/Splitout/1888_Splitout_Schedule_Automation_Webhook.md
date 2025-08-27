# Splitout Schedule Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "460", height: "180", content: "## 📝 Description
Automatically turn your insightful LinkedIn post reactions into structured content ideas saved in Airtable. This workflow fetches your recent *"insightful"* likes…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "460", height: "180", content: "## ⚙️ What It Does
- **Fetches** recent liked posts from LinkedIn using RapidAPI.
- **Filters** only *insightful* reactions from the past 7 days.
- **Structures** each post into a …[truncated]"
5. **Sticky Note2** `stickyNote` — width: "500", height: "380", content: "## 🧰 Setup Instructions
1. Clone this template into your n8n instance.
2. Open the `Fetch LinkedIn Likes` node and enter:
   - Your LinkedIn username.
   - Your RapidAPI key in th…[truncated]"
6. **Fetch LinkedIn Likes** `httpRequest` — url: `https://linkedin-api8.p.rapidapi.com/get-profile-likes`
7. **Split Liked Posts** `splitOut` — options: "[object Object]", fieldToSplitOut: "data.items"
8. **Filter Insightful & Recent** `filter` — options: "[object Object]", conditions: "[object Object]"
9. **Format Content Idea** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Prepare for Airtable** `splitOut` — options: "[object Object]", fieldToSplitOut: "Title, description, source"
11. **Save to Airtable** `airtable` — operation: **create**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of capturing and organizing content ideas from LinkedIn. It fetches your recent "insightful" reactions to posts using RapidAPI, filters them to include only those from the past 7 days, structures each post into a title, description, and source URL, and saves this organized information into an Airtable base. This allows you to efficiently turn your social media interactions into content ideas for future reference or inspiration.

**Demonstrate:**  
A content creator could use this workflow to curate a list of content ideas based on insightful posts they engaged with on LinkedIn, streamlining the content planning process and ensuring only relevant and recent ideas are considered.

**Imitate:**  
1. Clone the workflow in n8n.
2. Enter your LinkedIn username and RapidAPI key in the `Fetch LinkedIn Likes` node.
3. Connect your Airtable account in the `Save to Airtable` node.
4. Set your desired schedule in the `Schedule Trigger` node.
5. Activate the workflow.

**Practice:**  
Create a test Airtable base and fill it with some LinkedIn post data. Run the workflow to see how it filters and formats the data. Modify the posts to see how the workflow handles different content.

**WIIFM:**  
Mastering this workflow enables you to efficiently manage and leverage your LinkedIn interactions for content creation. This skill can be valuable to businesses looking to enhance their content strategies, opening opportunities for consultancy and automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
