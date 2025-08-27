# Telegram Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger1** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note2** `stickyNote` — color: "4", width: "1000", height: "600"
4. **Sticky Note3** `stickyNote` — color: "3", width: "280", height: "600"
5. **Sticky Note4** `stickyNote` — color: "5", width: "180", height: "300"
6. **Sticky Note5** `stickyNote` — color: "5", width: "180", height: "300"
7. **Sticky Note6** `stickyNote` — color: "5", width: "180", height: "300"
8. **Sticky Note7** `stickyNote` — color: "7", width: "180", height: "120"
9. **Sticky Note8** `stickyNote` — width: "660", height: "600", content: "## Getting Top Trend Posts On Instagram
** Change the topic you want to get on http request"
10. **Sticky Note9** `stickyNote` — width: "1060", height: "600", content: "## Looping Data And Checking For Is Exist On Database
**We are checking until find a data we did not insert because we don't want to create content about in same content"
11. **Sticky Note** `stickyNote` — color: "4", width: "860", height: "600"
12. **Sticky Note1** `stickyNote` — color: "5", width: "1580", height: "600"
13. **Sticky Note10** `stickyNote` — color: "5", width: "260", height: "500"
14. **Sticky Note11** `stickyNote` — color: "5", width: "180", height: "300"
15. **Sticky Note12** `stickyNote` — color: "4", width: "1060", height: "320"
16. **Sticky Note13** `stickyNote` — color: "3", width: "160", height: "120"
17. **Sticky Note14** `stickyNote` — width: "620", height: "840", content: "
## Automated Instagram Content Creation from Trending Posts

This workflow automates the process of discovering and recreating trending content on Instagram:

1. Content Discovery…[truncated]"
18. **Sticky Note15** `stickyNote` — color: "7", width: "180", height: "120"
19. **Sticky Note16** `stickyNote` — width: "180", height: "180", content: "## Warning
** You can check the [rate limit](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2) of the Instagram Scraper Api on Rapid Api
** Free version is mon…[truncated]"
20. **Replicate params** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Instagram params** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Telegram Params** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Rapid Api params** `set` — options: "[object Object]", assignments: "[object Object]"
24. **get top trends on instagram #isometric** `httpRequest` — url: `https://instagram-scraper-api2.p.rapidapi.com/v1/hashtag`
25. **get top trends on instagram #blender3d** `httpRequest` — url: `https://instagram-scraper-api2.p.rapidapi.com/v1/hashtag`
26. **filter the image content** `code` — jsCode: "const filteredData = $input.first().json.data.items.filter(item=> !item.is_video)
return filteredData.map((item)=>{
 return {
 id: item.id,
 prompt: item.caption.text,
 content_cod…[truncated]"
27. **filter the image content-2** `code` — jsCode: "const filteredData = $input.first().json.data.items.filter(item=> !item.is_video)
return filteredData.map((item)=>{
 return {
 id: item.id,
 prompt: item.caption.text,
 content_cod…[truncated]"
28. **merge the array content** `merge` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of creating Instagram content based on trending topics. It scrapes Instagram for the top trending posts using specified hashtags, filters for image content, and checks for duplicates in a database. It uses AI to analyze images and generate captions, creates unique images, and publishes them on Instagram. The workflow also sends status updates via Telegram, ensuring content is posted effectively and efficiently.

**Demonstrate:**  
A social media manager uses this workflow to maintain an active Instagram presence by automatically posting AI-generated content based on current trends, saving time on content creation and ensuring posts are always relevant.

**Imitate:**  
1. Set up n8n and connect Instagram, Telegram, and API services.
2. Schedule the workflow to run at desired times.
3. Customize the hashtags and database settings.
4. Test the workflow with sample data to ensure it functions correctly.
5. Activate the workflow for regular execution.

**Practice:**  
Create a test Instagram account and a database table. Run the workflow with sample hashtags and monitor the process from data scraping to posting. Adjust parameters and observe how the content and captions are generated and published.

**WIIFM:**  
Mastering this workflow enables you to offer innovative content creation solutions to businesses, enhancing their social media strategies. It can lead to increased client engagement, retention, and potential income from automation services in the digital marketing sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, postgres, openAiApi, facebookGraphApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
