# Splitout Code Automate Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **OpenAI Chat Model**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "primary_keywords": ["string"],
  "long_tail_keywords": [
    {
      "keyword": "string",
      "intent": "string"
    }
  ],
  "question_based_keywords": ["string"],
  "relat…[truncated]"
4. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
5. **Get Input from NocoDB** `webhook` — method: **POST**, path: `/ac7e989d-6e32-4850-83c4-f10421467fb8`
6. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
7. **Sticky Note** `stickyNote` — color: "7", width: "480", height: "360"
8. **Sticky Note1** `stickyNote` — width: "280", height: "540", content: "## Topic Expansion"
9. **Sticky Note2** `stickyNote` — color: "5", width: "1220", height: "540"
10. **Sticky Note3** `stickyNote` — color: "4", width: "1360", height: "460"
11. **Sticky Note4** `stickyNote` — color: "6", width: "500", height: "540"
12. **Sticky Note5** `stickyNote` — color: "7", height: "720", content: "## Save, Update Status and Notify"
13. **Sticky Note6** `stickyNote` — width: "400", height: "320", content: "## Input"
14. **Sticky Note7** `stickyNote` — color: "3", width: "820", height: "80"
15. **Set relevant fields** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Topic Expansion** `agent` — text: "=I need to create comprehensive SEO keyword research for content about: 
{{ $json.primary_topic }}

My target audience is: {{ $json.target_audience }}
This will be used for a: {{ $…[truncated]", options: "[object Object]", promptType: "define"
17. **Format Json and add Competitor URLs** `code` — jsCode: "const inputJson = $input.first().json;
const rawUrls = inputJson.competitor_urls;

const competitorUrls = rawUrls
  .split(",")
  .map(url => url.trim())
  .filter(url => url.lengt…[truncated]"
18. **Update Status - Started** `nocoDb` — operation: **update**, table: `mp3qmbuye3pyihc`
19. **Start Notification** `slack` — text: "=>> START << 

SEO Keyword Research 
Primary Topic: {{ $json.primary_topic }}
Target Audience: {{ $json.target_audience }}
Content Type: {{ $json.content_type }}
Location: {{ $json…[truncated]", select: "channel", channelId: "[object Object]"
20. **split primary keywords** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.primary_keywords"
21. **Split the Competitor URLs** `splitOut` — options: "[object Object]", fieldToSplitOut: "competitorUrls"
22. **Search Volume & CPC** `dataForSeo` — resource: **keywords_data**
23. **Keyword Difficulty** `dataForSeo` — resource: **labs**, operation: **get-keyword-difficulty**
24. **Keyword Ranking per URL** `dataForSeo` — resource: **labs**, operation: **get-ranked-keywords**
25. **Aggregate SV & CPC** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
26. **Aggregate KWD** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
27. **Competitor Analysis** `agent` — text: "=Analyze the following competitor content for the Primary Topic "{{ $('Format Json and add Competitor URLs').item.json.primary_topic }}":

Competitor: {{ $('Split the Competitor UR…[truncated]", options: "[object Object]", promptType: "define"
28. **Merge SV, CPC & KWD** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
29. **Aggregate Competitor Analysis** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
30. **Merge Topic Expansion, SV, CPC & KWD** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
31. **Merge Everything** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
32. **Final Keyword Strategy** `agent` — text: "=# Role: Act as an expert SEO Strategist and Content Planner.

# Context:
# You are creating an actionable SEO Keyword Strategy & Content Brief based on prior AI-driven keyword gen…[truncated]", options: "[object Object]", promptType: "define"
33. **Write Content Brief ** `nocoDb` — operation: **create**, table: `mfsjucjn304v1hc`
34. **Update Status - Done** `nocoDb` — operation: **update**, table: `mp3qmbuye3pyihc`
35. **Send Notification** `slack` — text: "=>> DONE << 

SEO Keyword Research 
Primary Topic: {{ $('Merge Everything').item.json.primary_topic }}
Target Audience: {{ $('Merge Everything').item.json.target_audience }}
Conten…[truncated]", select: "channel", channelId: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**
This n8n workflow automates SEO keyword research. It starts with receiving input data from NocoDB, including primary topics and competitor URLs. The workflow uses OpenAI models to generate keyword suggestions and analyze competitor strategies. It checks keyword search volume, cost per click, and difficulty using DataForSEO. Finally, it merges all data into a comprehensive SEO strategy, updates statuses in NocoDB, and notifies the team via Slack.

**Demonstrate**
A digital marketing consultant could use this workflow to automate SEO strategy creation for clients, saving time and ensuring data-driven decisions for content planning.

**Imitate**
1. Import the workflow into n8n.
2. Connect NocoDB, OpenAI, DataForSEO, and Slack accounts.
3. Set up a webhook in NocoDB to trigger the workflow.
4. Customize input fields and tables in NocoDB.
5. Test the workflow using sample data to ensure accuracy.

**Practice**
Create a sample NocoDB database with topics and competitor URLs. Run the workflow to generate an SEO strategy. Adjust topics and observe changes in keyword suggestions and competitor analysis.

**WIIFM**
Mastering this workflow enables you to offer automated SEO services, reducing manual research time and improving strategy accuracy. This can attract more clients, enhance your service portfolio, and generate additional income in the AI automation industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, dataForSeoApi, nocoDbApiToken, slackApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
