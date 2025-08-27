# Splitout GoogleCalendar Automate Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **OpenAI Chat Model2** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
3. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
4. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
5. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
6. **OpenAI Chat Model3** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
7. **Sticky Note** `stickyNote` — color: "7", width: "616.7897454470152", height: "449.1424626006906"
8. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
9. **Sticky Note1** `stickyNote` — color: "7", width: "655.5654775604146", height: "670.4114154200236"
10. **Sticky Note2** `stickyNote` — color: "7", width: "1020.0959898041108", height: "670.8210817031078"
11. **Sticky Note3** `stickyNote` — color: "7", width: "610.3630186140072", height: "582.1201380897592"
12. **Sticky Note4** `stickyNote` — color: "7", width: "466.8967433831988", height: "454.24485615650235"
13. **Sticky Note5** `stickyNote` — color: "7", width: "519.1145893777881", height: "190.5042226526524"
14. **Sticky Note6** `stickyNote` — color: "7", width: "667.8619481635637", height: "259.7914017217902"
15. **Sticky Note7** `stickyNote` — color: "7", width: "572.0305871208889", height: "231.49547088049098"
16. **Sticky Note9** `stickyNote` — color: "7", width: "682.7350931085596", height: "219.59936012669806"
17. **Sticky Note8** `stickyNote` — color: "3", width: "308.16846950517856", height: "110.18457997698513"
18. **Sticky Note10** `stickyNote` — width: "209.84856156501735", height: "301.5806674338321", content: "













### 🚨 Input Required!
You need to add your cuurent linkedIn Cookies here to continue."
19. **Sticky Note11** `stickyNote` — color: "7", width: "508.12647286359606", height: "212.26880753952497"
20. **Sticky Note12** `stickyNote` — color: "7", width: "593.8676556715506", height: "196.6490014749014"
21. **Sticky Note13** `stickyNote` — width: "453.4804561790962", height: "588.3011632094225", content: "## Try It Out!

### This workflow builds an AI meeting assistant who sends information-dense pre-meeting notifications for a user's upcoming meetings. This template is ideal for bu…[truncated]"
22. **Router** `switch` — rules: "[object Object]", options: "[object Object]"
23. **Check For Upcoming Meetings** `googleCalendar` — operation: **getAll**
24. **Has Email Address?** `if` — options: "[object Object]", conditions: "[object Object]"
25. **Has LinkedIn URL?** `if` — options: "[object Object]", conditions: "[object Object]"
26. **Extract Attendee Information** `informationExtractor` — text: "=start: {{ $json.start.dateTime }}
meeting url: {{ $json.hangoutLink }}
summary: {{ $json.summary }}
description: {{ $json.description }}
organiser: {{ $json.organizer.displayName …[truncated]", options: "[object Object]", schemaType: "manual"
27. **Get Last Correspondence** `gmail` — operation: **getAll**
28. **Return Email Error1** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Set LinkedIn Cookie** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Return LinkedIn Error1** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Attendees to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.attendees"
32. **Has Emails?** `if` — options: "[object Object]", conditions: "[object Object]"
33. **APIFY Web Scraper** `httpRequest` — url: `https://api.apify.com/v2/acts/apify~web-scraper/run-sync-get-dataset-items`
34. **Set Route Email** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ Object.assign({ "route": "email" }, $json) }}"
35. **Set Route Linkedin** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ Object.assign({ "route": "linkedin" }, $json) }}"
36. **Get Message Contents** `gmail` — operation: **get**
37. **Return Email Error** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Is Scrape Successful?** `if` — options: "[object Object]", conditions: "[object Object]"
39. **Get Correspondance** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
40. **Get LinkedIn Profile & Activity** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
41. **Simplify Emails** `set` — options: "[object Object]", assignments: "[object Object]"
42. **Extract Profile Metadata** `html` — operation: **extractHtmlContent**
43. **Return LinkedIn Error** `set` — options: "[object Object]", assignments: "[object Object]"
44. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
45. **Correspondance Recap Agent** `chainLlm` — text: "=from: {{ $json.from }}
to: {{ $json.to }}
date: {{ $json.date }}
subject: {{ $json.subject }}
text:
{{ $json.text }}", messages: "[object Object]", promptType: "define"
46. **Sections To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "sections"
47. **Merge Attendee with Summaries** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ Object.assign({}, $('Attendees to List').item.json, $json) }}"
48. **Return Email Success** `set` — options: "[object Object]", assignments: "[object Object]"
49. **Get Sections** `html` — operation: **extractHtmlContent**
50. **Aggregate Attendees** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "attendees"
51. **Get About Section** `set` — options: "[object Object]", assignments: "[object Object]"
52. **Get Activity Section** `set` — options: "[object Object]", assignments: "[object Object]"
53. **Attendee Research Agent** `chainLlm` — text: "=meeting date: {{ $('Check For Upcoming Meetings').item.json.start.dateTime }}
meeting url: {{ $('Check For Upcoming Meetings').item.json.hangoutLink }}
meeting summary: {{ $('Chec…[truncated]", messages: "[object Object]", promptType: "define"
54. **Extract About** `html` — operation: **extractHtmlContent**
55. **Extract Activities** `html` — operation: **extractHtmlContent**
56. **WhatsApp Business Cloud** `whatsApp` — operation: **send**
57. **Activities To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "activity"
58. **Get Activity Details** `html` — operation: **extractHtmlContent**
59. **Activities To Array** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "activity"
60. **Merge1** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
61. **LinkedIn Summarizer Agent** `chainLlm` — text: "=### name
{{ $('Extract Profile Metadata').item.json.name }}
### about
"{{ $('Extract Profile Metadata').item.json.tagline }}"
{{ $json.about.replaceAll('\n', ' ')}}
### recent act…[truncated]", messages: "[object Object]", promptType: "define"
62. **Return LinkedIn Success** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow acts as an AI meeting assistant. It automatically checks your Google Calendar for upcoming meetings, extracts attendee information, retrieves recent correspondence and LinkedIn activity for each attendee, and then uses AI to generate a pre-meeting summary. This summary is sent via WhatsApp to help you prepare effectively.

### Demonstrate
A business consultant could use this workflow to stay on top of client meetings by receiving detailed summaries that include recent interactions and social media updates of attendees, enhancing preparation and client engagement.

### Imitate
1. Set up the workflow in n8n.
2. Connect your Google Calendar, Gmail, and LinkedIn.
3. Schedule the workflow to trigger at regular intervals.
4. Customize the AI prompts to fit your meeting summary needs.
5. Test the workflow with a mock meeting to ensure accurate summaries.

### Practice
Create a test meeting in your Google Calendar with a few attendees. Run the workflow and review the generated WhatsApp message for accuracy. Adjust the AI prompts and data extraction methods if needed.

### WIIFM
Mastering this workflow empowers you to offer AI-driven meeting preparation services. This can enhance productivity, improve client interactions, and potentially increase your consultancy's value proposition, leading to more client engagements and revenue streams.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, googleCalendarOAuth2Api, openAiApi, whatsAppApi, httpQueryAuth.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
