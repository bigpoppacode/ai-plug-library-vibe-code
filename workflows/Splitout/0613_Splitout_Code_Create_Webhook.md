# Splitout Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Sticky Note2** `stickyNote` — color: "2", width: "621.7044818991839", height: "566.8592254014303"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Schedule Trigger Every Monday, @ 08:00am** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "366.75796434038665", height: "473.77664315100793"
6. **Sticky Note11** `stickyNote` — color: "6", width: "396.6384066163515", height: "282.5799404564392"
7. **Sticky Note14** `stickyNote` — width: "366.36771813959956", height: "329.9474713935157", content: "## Setup
1. **`Google Search URL`**: Update the Google search URL with the relevant LinkedIn advice query for your field (e.g., "site:linkedin.com/advice 'marketing automation'").
…[truncated]"
8. **Sticky Note9** `stickyNote` — color: "7", width: "812.3060553462686", height: "1198.0013690558965"
9. **Sticky Note15** `stickyNote` — color: "7", width: "781.0904623817446", height: "169.84805961144036"
10. **Sticky Note** `stickyNote` — color: "6", width: "419.095339329518", height: "463.432215862633"
11. **Sticky Note3** `stickyNote` — color: "7", width: "253.48029435813578", height: "446.9376941946034"
12. **Sticky Note4** `stickyNote` — color: "5", width: "426.673961735047", height: "550.9285363859362"
13. **Sticky Note5** `stickyNote` — color: "3", width: "242.07228127555214", height: "451.5087489779234"
14. **Sticky Note6** `stickyNote` — color: "6", width: "280.61885357253936", height: "570.1315791275019"
15. **Sticky Note7** `stickyNote` — color: "7", width: "259.5924775143092", height: "104.96722916838547"
16. **Sticky Note8** `stickyNote` — color: "7", width: "392.21847914963246", height: "80"
17. **Sticky Note10** `stickyNote` — width: "309.45427591228105", height: "447.75689268844843", content: "## LinkedIn Contribution Writer
Uses an AI model to generate unique contributions based on the extracted content from LinkedIn articles. The generated advice is tailored for each t…[truncated]"
18. **Airtable** `airtable` — resource: **base**
19. **Google Sheets** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
20. **Sticky Note12** `stickyNote` — color: "7", width: "394.73627201205596", height: "521.5579232475401"
21. **Get all LinkedIn contributions from database NocoDB (GetRows)1** `nocoDb` — operation: **getAll**, table: `mpagw9n92ran52o`
22. **Sticky Note13** `stickyNote` — color: "7", width: "221.13234187060237", height: "399.35935838473415"
23. **Sticky Note16** `stickyNote` — color: "4", width: "223.88348808302658", height: "80"
24. **Get all LinkedIn contributions from database NocoDB (GetRows)** `nocoDb` — operation: **getAll**, table: `mpagw9n92ran52o`
25. **Set Topic for Google search** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Get advice articles from a Google search** `httpRequest` — url: `=https://www.google.com/search?q=site%3Alinkedin.com%2Fadvice+{{ $json.Topic }}`
27. **Extract Article links for LinkedIn advice articles** `code` — jsCode: "// n8n Code node script
const text = $json.data;

// Define the regex pattern
const regexPattern = /https:\/\/www\.linkedin\.com\/advice\/[^%&\s"']+/g;

// Execute the regex patter…[truncated]"
28. **Split Out all links for LinkedIn advice articles** `splitOut` — options: "[object Object]", fieldToSplitOut: "matches"
29. **Merge data and keep unique google search results** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
30. **HTTP Request to get LinkedIn advice articles** `httpRequest` — url: `={{ $json.matches }}`
31. **HTML extract LinkedIn article & other users contributions** `html` — operation: **extractHtmlContent**
32. **LinkedIn Contribution Writer** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
33. **Post new LinkedIn contributions to Slack channel** `slack` — text: "=↓ 📝 ARTICLE:
{{ $('HTML extract LinkedIn article & other users contributions').item.json.ArticleTitle }}
{{ $('Merge data and keep unique google search results').item.json.matche…[truncated]", select: "channel", channelId: "[object Object]"
34. **Post new LinkedIn contributions to NocoDB (CreateRows)** `nocoDb` — operation: **create**, table: `mpagw9n92ran52o`

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the process of finding, analyzing, and sharing LinkedIn advice articles. Every Monday at 8:00 AM, it searches Google for LinkedIn advice articles based on a specified topic. It extracts article links, retrieves their content, and uses an AI model to generate unique contributions for each article topic. These contributions are then posted to a Slack channel and stored in a NocoDB database.

**Demonstrate**: A business consultant could use this workflow to maintain a strong LinkedIn presence by contributing unique insights to relevant articles weekly, enhancing their professional visibility and networking opportunities.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect your Google, Slack, and NocoDB accounts.
3. Set the Google search URL to your desired topic.
4. Customize the AI prompt to align with your brand voice.
5. Test the workflow to ensure it posts to Slack and saves to NocoDB correctly.

**Practice**: Create a test topic, like "digital marketing," and observe how the workflow extracts articles and generates contributions. Tweak the AI's input and output to see how it affects the advice generated.

**WIIFM**: Mastering this workflow enables you to offer content generation services, helping clients enhance their LinkedIn presence. This can lead to increased engagement, networking opportunities, and potential income growth from offering automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, nocoDbApiToken, slackOAuth2Api, airtableOAuth2Api, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
