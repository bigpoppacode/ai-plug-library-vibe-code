# Splitout Manual Import Webhook
## 🚀 What It Does
Automates a flow using stickyNote×7, manualTrigger, splitOut.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "4", width: "657.3293805248016", height: "843.3412992154545"
4. **Sticky Note2** `stickyNote` — color: "7", width: "250.00985945500486", height: "249.10159911061476"
5. **Sticky Note25** `stickyNote` — color: "7", width: "231.51775697271012", height: "213.62075341687063"
6. **Sticky Note26** `stickyNote` — color: "7", width: "475.3228796552902", height: "250.67161641737852"
7. **Sticky Note19** `stickyNote` — color: "3", width: "248.59379819295242", height: "94.39142091152823"
8. **Sticky Note20** `stickyNote` — color: "3", width: "723.161826981043", height: "217.5249520543415"
9. **Sticky Note21** `stickyNote` — color: "3", width: "284.87764467541297", height: "80"
10. **Set >=20 Keywords** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Get Search Data** `httpRequest` — method: **POST**, url: `https://googleads.googleapis.com/v16/customers/{customer_id}:generateKeywordHistoricalMetrics`
12. **Split Out by KW** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
13. **Connect to your own database.** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow is designed to collect SEO keyword metrics using Google's Keyword Planner API. It begins by setting up a list of up to 20 keywords, which are then sent to the Google API to retrieve historical search data such as search volume, competition, and trends. The results are processed and can be stored in a database for further analysis. This helps businesses plan and optimize their SEO strategies based on real data.

**Demonstrate:** A digital marketing agency could use this workflow to gather keyword performance data for their clients, enabling them to fine-tune their content strategies and improve search engine rankings.

**Imitate:** To apply this workflow, set up an n8n instance. Input your target keywords into the "Set >=20 Keywords" node. Ensure you have access to the Google Ads API by setting up the necessary credentials. Run the workflow to fetch and review the keyword data.

**Practice:** Create a test list of keywords related to your business or project. Run the workflow and observe the data returned by the Google API. Experiment by changing the keywords or adjusting the API request parameters to see how results vary.

**WIIFM:** Mastering this workflow empowers you to provide data-driven SEO insights, improving your ability to attract and retain clients. Offering keyword analysis as a service can differentiate your business and potentially increase your revenue streams.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleAdsOAuth2Api.
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
