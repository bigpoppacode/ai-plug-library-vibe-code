# Splitout Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Leads Search", formFields: "[object Object]"
3. **Google Sheets Trigger** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
4. **Google Sheets Trigger2** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "3", width: "1260", height: "300"
6. **Sticky Note1** `stickyNote` — width: "1260", height: "300", content: "## Scrape Leads from Apollo
"
7. **Sticky Note2** `stickyNote` — color: "5", width: "1700", height: "360"
8. **Sticky Note3** `stickyNote` — color: "5", width: "800", height: "360"
9. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
10. **Google Sheets Trigger3** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
11. **Sticky Note4** `stickyNote` — color: "6", width: "1920", height: "360"
12. **Google Sheets Trigger4** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
13. **Sticky Note5** `stickyNote` — color: "7", width: "1920", height: "360"
14. **Sticky Note6** `stickyNote` — color: "4", width: "800", height: "360"
15. **Google Sheets Trigger5** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
16. **Sticky Note8** `stickyNote` — color: "6", width: "800", height: "360"
17. **Schedule Trigger2** `scheduleTrigger` — rule: "[object Object]"
18. **Sticky Note9** `stickyNote` — color: "7", width: "800", height: "360"
19. **Schedule Trigger3** `scheduleTrigger` — rule: "[object Object]"
20. **Google Sheets Trigger6** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
21. **Sticky Note7** `stickyNote` — color: "3", width: "2040", height: "820"
22. **Generate Leads with Apollo.io** `httpRequest` — method: **POST**, url: `https://api.apollo.io/api/v1/mixed_people/search`
23. **Get Pending Username Row** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
24. **Get Pending Email Statuses** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
25. **get invalid email rows** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
26. **Get Pending About and Posts Rows** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
27. **Get Pending About and Posts Rows1** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
28. **Get Completely Enriched Profiles** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
29. **get_failed_profile_summary_rows** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
30. **get_failed_posts_summary_rows1** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
31. **Get Pending About and Posts Rows2** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
32. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "people"
33. **OpenAI1** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
34. **Get Email from Apollo** `httpRequest` — method: **POST**, url: `https://api.apollo.io/api/v1/people/match`
35. **update_to_pending** `googleSheets` — operation: **update**
36. **Get About Profile** `httpRequest` — url: `https://linkedin-data-api.p.rapidapi.com`
37. **Get Profile Posts** `httpRequest` — url: `https://linkedin-data-api.p.rapidapi.com/get-profile-posts`
38. **Append to Enriched Leads Database** `googleSheets` — operation: **appendOrUpdate**
39. **update_to_pending1** `googleSheets` — operation: **update**
40. **update_to_unscraped** `googleSheets` — operation: **update**
41. **Get About Profile2** `httpRequest` — url: `"apify-actor-endpoint"`
42. **Clean Data** `set` — options: "[object Object]", assignments: "[object Object]"
43. **Add Linkedin Username** `googleSheets` — operation: **update**
44. **Confirm Email Validity** `httpRequest` — url: `=https://api.mails.so/v1/validate?email={{ $json.person.email }}`
45. **Clean Profile Data** `code` — jsCode: "return [{
  summary: $input.first().json.summary,
  headline: $input.first().json.headline,
  nationality: $input.first().json.geo.country,
  languaage: $input.first().json.languag…[truncated]"
46. **Clean Posts Data** `code` — jsCode: "const data = $input.first().json.data || [];

function getText(post, reshared = false) {
  if (!post) return "";
  return reshared ? (post.resharedPost?.text || "") : (post.text ||…[truncated]"
47. **Clean Profile Data1** `code` — jsCode: "// Safe LinkedIn profile details scraper for n8n
const profileData = {};
const input = $input.first() && $input.first().json ? $input.first().json : {};

// Basic profile informati…[truncated]"
48. **Clean Profile Data2** `code` — jsCode: "// n8n function to extract LinkedIn posts
const items = [];

// Check if input exists and has updates
if (!$input.first() || !$input.first().json || !$input.first().json.updates ||…[truncated]"
49. **update status to failed1** `googleSheets` — operation: **update**
50. **Add Leads to Google Sheet** `googleSheets` — operation: **append**
51. **If email is valid** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
52. **Stringify Profile Data1** `code` — jsCode: "const profile = items[0].json;

return [{
  json: {
    profileString: JSON.stringify(profile, null, 2) // Pretty print with 2-space indentation
  }
}];"
53. **update status to failed** `googleSheets` — operation: **update**
54. **Stringify Posts Data** `code` — jsCode: "const profile = items[0].json;

return [{
  json: {
    postsString: JSON.stringify(profile, null, 2) // Pretty print with 2-space indentation
  }
}];"
55. **Google Sheets** `googleSheets` — operation: **update**
56. **Stringify Data2** `code` — jsCode: "const profile = items[0].json;

return [{
  json: {
    profileString: JSON.stringify(profile, null, 2) // Pretty print with 2-space indentation
  }
}];"
57. **Stringify Data3** `code` — jsCode: "const profile = items[0].json;

return [{
  json: {
    postsString: JSON.stringify(profile, null, 2) // Pretty print with 2-space indentation
  }
}];"
58. **Add Email Address** `googleSheets` — operation: **update**
59. **Mark Invalid Email** `googleSheets` — operation: **update**
60. **AI Profile Summarizer** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
61. **Posts AI Summarizer** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
62. **AI Profile Summarizer1** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
63. **Posts AI Summarizer1** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
64. **Update Profile Summary** `googleSheets` — operation: **update**
65. **Update Posts Summary** `googleSheets` — operation: **update**
66. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
67. **Update Profile Summary1** `googleSheets` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of collecting, verifying, enriching, and storing LinkedIn lead data. It begins with a form submission to capture lead criteria, then scrapes data from Apollo.io for matching leads. The workflow processes and cleans this data, checks email validity, and enriches LinkedIn profiles with additional information like posts and summaries. This enriched data is then stored in Google Sheets for further use.

**Demonstrate:**  
A sales team could use this workflow to automatically gather and verify LinkedIn profiles of potential leads, ensuring they have accurate contact information and up-to-date profile summaries for outreach.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your accounts for Google Sheets, Apollo.io, and OpenAI.
3. Configure the form to capture lead criteria.
4. Test the workflow with sample data to verify it fetches, verifies, and enriches lead information correctly.
5. Adjust settings as needed for your specific use case.

**Practice:**  
Create a test form to submit lead criteria and observe how the workflow processes this information, scrapes data, verifies emails, and enriches profiles. Try using different lead criteria to see how the workflow adapts.

**WIIFM (What's In It For Me):**  
Mastering this workflow allows you to offer automated lead generation and enrichment services, enhancing sales processes for clients. This can increase your service offerings, improve lead quality, and potentially lead to higher income from automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsTriggerOAuth2Api, openAiApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
