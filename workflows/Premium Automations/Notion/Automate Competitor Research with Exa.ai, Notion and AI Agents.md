# Automate Competitor Research With Exa.ai, Notion And AI Agents
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Sticky Note** `stickyNote` — width: "377.7154173079816", height: "511.2813260861502", content: "## Try It Out!

### This workflow builds a competitor research agent using Exa.ai as a starting point. The HTTP Request tool is used to demonstrate how you can build powerful agent…[truncated]"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-mini`
5. **Search Crunchbase** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
6. **Search WellFound** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
7. **Search LinkedIn** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
8. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "{
 "company_name": "",
 "company_website": "",
 "year_founded": "",
 "founders": [{ "name": "", "linkedIn": "" }],
 "ceo": [{ "name": "", "linkedIn": "", "twitter": "" }],
 "key_pe…[truncated]"
9. **Webscraper Tool1** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
10. **Check Company Profiles Exist** `toolHttpRequest` — url: `https://serpapi.com/search`
11. **Webscraper Tool** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
12. **Search Company Website** `toolHttpRequest` — url: `https://serpapi.com/search`
13. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
 "features": [{ "name": "", "description": "" }],
 "pricing_plans": [{ "name": "", "description": "", "tier": "", "price": "", "monthly_or_annually": "" }],
 "factors_that_impact…[truncated]"
14. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
15. **Search Product Review Sites** `toolHttpRequest` — url: `https://serpapi.com/search`
16. **Webscraper Tool2** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
17. **Structured Output Parser2** `outputParserStructured` — jsonSchemaExample: "{
 "number_of_reviews": 0,
 "positive_mentions_%": "",
 "negative_mentions_%": "",
 "top_pros": [""],
 "top_cons": [""],
 "top_countries": [""],
 "top_social_media_platforms": [""]…[truncated]"
18. **OpenAI Chat Model2** `lmChatOpenAi` — model: `gpt-4o`
19. **Get Company News** `toolHttpRequest` — url: `https://serpapi.com/search`
20. **Sticky Note1** `stickyNote` — color: "7", width: "1128.870960716006", height: "582.8537144476434"
21. **Sticky Note2** `stickyNote` — width: "181.85939799093455", height: "308.12010511833364", content: "














### 🚨Required!
Remember to set your company here."
22. **Sticky Note3** `stickyNote` — color: "7", width: "332.87733508600377", height: "492.4668447935363"
23. **Sticky Note4** `stickyNote` — color: "7", width: "687.9856526661888", height: "600.1548730999224"
24. **Sticky Note5** `stickyNote` — color: "7", width: "849.3810544357925", height: "775.191233831828"
25. **Sticky Note6** `stickyNote` — color: "7", width: "683.8444841203574", height: "633.9023021841829"
26. **Sticky Note7** `stickyNote` — color: "7", width: "529.1065295866968", height: "572.5257167828777"
27. **Sticky Note8** `stickyNote` — width: "181.85939799093455", height: "308.12010511833364", content: "














### 🚨Required!
Remember to set your Notion Database here."
28. **Set Source Company** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Competitor Search via Exa.ai** `httpRequest` — method: **POST**, url: `https://api.exa.ai/findSimilar`
30. **Results to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
31. **Extract Domain** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Remove Duplicates** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "url"
33. **Limit** `limit` — maxItems: "10"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, httpHeaderAuth, serpApi, notionApi.
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
