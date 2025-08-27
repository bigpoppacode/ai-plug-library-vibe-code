# Splitout Code Import Triggered
## 🚀 What It Does
Automates a flow using splitOut×2, set×2, facebookGraphApi×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "263.6017705489105", height: "358.9292089122457", content: "## Set Parameter Here
Set Facebook PageID & Number of Latest Posts to be fetched here
"
4. **Set PageID & Number of Latest Posts** `set` — options: "[object Object]", assignments: "[object Object]"
5. **Facebook Graph API : Get Post from Page** `facebookGraphApi` — node: "={{ $json.FB_Page_Id }}/feed", options: "[object Object]", graphApiVersion: "v20.0"
6. **Split Out Posts** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
7. **Facebook : Get Each Post Comments** `facebookGraphApi` — edge: "comments", node: "={{ $json.id }}", options: "[object Object]"
8. **Reverse Item to Match another Branch** `code` — jsCode: "return items.reverse();
"
9. **Merge Post & Comments** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
10. **Filter Out Null Comments** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Split Out Comments** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "data"
12. **Select Result Field** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the process of retrieving the latest posts from a specified Facebook Page using the Facebook Graph API. It fetches a set number of recent posts, retrieves all comments for each post, filters out any null comments, and compiles the data in a structured format. This helps in collecting and analyzing user engagement on Facebook posts efficiently.

**Demonstrate**: A business owner could use this workflow to monitor customer engagement on their Facebook Page. By automatically collecting comments, they can quickly respond to customer feedback, enhancing customer service and improving brand interaction.

**Imitate**: 
1. Import the workflow into n8n.
2. Set your Facebook Page ID and the number of posts to fetch.
3. Connect your Facebook Graph API credentials.
4. Execute the workflow to test it.
5. Adjust the workflow as needed to match your data needs.

**Practice**: Create a test Facebook Page and make a few posts. Run the workflow to see how it collects and processes comments. Modify the workflow to filter specific keywords within the comments for a targeted analysis.

**WIIFM**: Mastering this workflow can streamline your social media management, allowing you to efficiently gather and analyze customer interactions. This can enhance your service offerings, making you a valuable asset in digital marketing and customer engagement, potentially increasing your income through better service delivery.

## 🔧 Setup Instructions
1. **Connect Credentials:** facebookGraphApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
