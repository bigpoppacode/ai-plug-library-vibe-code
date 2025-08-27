# Stopanderror Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "learnings": {
      "type": "array",
      "description": "List of learnings, max of 3.",
      "items": { "type": "string" }
    },
  …[truncated]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
5. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
6. **Structured Output Parser1** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "questions": {
      "type": "array",
      "description": "Follow up questions to clarify the research direction, max of 3.",
      "it…[truncated]"
7. **On form submission** `formTrigger` — options: "[object Object]", formTitle: " DeepResearcher", formFields: "[object Object]"
8. **Structured Output Parser2** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "queries": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "query": {
            …[truncated]"
9. **OpenAI Chat Model3** `lmChatOpenAi` — model: `[object Object]`
10. **DeepResearch Subworkflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
11. **Sticky Note** `stickyNote` — color: "7", width: "1000", height: "560"
12. **Sticky Note1** `stickyNote` — color: "7", width: "1360", height: "640"
13. **OpenAI Chat Model4** `lmChatOpenAi` — model: `[object Object]`
14. **Structured Output Parser4** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description":" A short title summarising the research topic"
    },
    "description": {
     …[truncated]"
15. **Sticky Note2** `stickyNote` — color: "7", width: "600", height: "560"
16. **Sticky Note3** `stickyNote` — color: "7", width: "640", height: "560"
17. **Sticky Note4** `stickyNote` — color: "7", width: "620", height: "540"
18. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
19. **Sticky Note5** `stickyNote` — color: "7", width: "1340", height: "740"
20. **Sticky Note6** `stickyNote` — color: "7", width: "460", height: "360"
21. **Sticky Note7** `stickyNote` — color: "7", width: "800", height: "580"
22. **Sticky Note8** `stickyNote` — color: "7", width: "660", height: "540"
23. **Sticky Note9** `stickyNote` — color: "7", width: "1060", height: "540"
24. **Sticky Note10** `stickyNote` — color: "7", width: "800", height: "580"
25. **Sticky Note11** `stickyNote` — color: "7", width: "680", height: "560"
26. **Sticky Note12** `stickyNote` — color: "7", width: "580", height: "580"
27. **Sticky Note13** `stickyNote` — color: "5", width: "300", height: "100"
28. **Sticky Note14** `stickyNote` — color: "5", width: "460", height: "240"
29. **Sticky Note15** `stickyNote` — color: "5", width: "340", height: "200"
30. **Sticky Note16** `stickyNote` — width: "520", height: "1060", content: "## n8n DeepResearcher
### This template attempts to replicate OpenAI's DeepResearch feature which, at time of writing, is only available to their pro subscribers.

Though the inner…[truncated]"
31. **Sticky Note17** `stickyNote` — color: "7", width: "520", height: "240"
32. **Sticky Note18** `stickyNote` — width: "180", height: "260", content: "













### UPDATE APIFY CREDENTIAL HERE!"
33. **Sticky Note20** `stickyNote` — width: "180", height: "260", content: "











### UPDATE NOTION CREDENTIAL HERE!"
34. **Sticky Note19** `stickyNote` — color: "5", width: "560", height: "300"
35. **Research Request** `form` — options: "[object Object]", formFields: "[object Object]"
36. **Execution Data** `executionData` — dataToSave: "[object Object]"
37. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
38. **JobType Router** `switch` — rules: "[object Object]", options: "[object Object]"
39. **Clarifying Questions** `chainLlm` — text: "=Given the following query from the user, ask some follow up questions to clarify the research direction. Return a maximum of 3 questions, but feel free to return less if the origi…[truncated]", messages: "[object Object]", promptType: "define"
40. **Get Existing Row** `notion` — resource: **databasePage**, operation: **getAll**
41. **Generate SERP Queries** `chainLlm` — text: "=Given the following prompt from the user, generate a list of SERP queries to research the topic.
Reduce the number of words in each query to its keywords only.
Return a maximum of…[truncated]", messages: "[object Object]", promptType: "define"
42. **Get Existing Row1** `notion` — resource: **databasePage**, operation: **getAll**
43. **Feedback to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.questions"
44. **Set In-Progress** `notion` — resource: **databasePage**, operation: **update**
45. **SERP to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.queries"
46. **DeepResearch Report** `chainLlm` — text: "=You are are an expert and insightful researcher.
* Given the following prompt from the user, write a final report on the topic using the learnings from research.
* Make it as as d…[truncated]", promptType: "define"
47. **Set Initial Query** `set` — options: "[object Object]", assignments: "[object Object]"
48. **Convert to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.text }}"
49. **HTML to Array** `set` — options: "[object Object]", assignments: "[object Object]"
50. **Tags to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "tag"
51. **Notion Block Generator** `chainLlm` — text: "={{ $json.tag.trim() }}", messages: "[object Object]", promptType: "define"
52. **Parse JSON blocks** `set` — options: "[object Object]", assignments: "[object Object]"
53. **Valid Blocks** `filter` — options: "[object Object]", conditions: "[object Object]"
54. **URL Sources to Lists** `code` — jsCode: "const urls = Object.values($('JobType Router').first().json.data.all_urls
  .reduce((acc, url) => ({ ...acc, [url]: url }),{}));
const chunksize = 50;
const splits = Math.max(1, Ma…[truncated]"
55. **Append Blocks** `merge` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow, called "DeepResearcher," automates complex research tasks by leveraging AI and web scraping. It starts with a form submission where users input a research topic. The workflow then generates search queries, retrieves web content, and uses AI to compile insights into a detailed report, which is saved to a Notion database.

**Demonstrate:**  
A consultant could use this workflow to provide clients with in-depth market research reports quickly, saving hours of manual research and enabling data-driven decision-making.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your OpenAI and Notion accounts.
3. Create a Notion database for storing reports.
4. Customize the form fields to suit your research needs.
5. Run the workflow and test with a sample research query.

**Practice:**  
Set up a test research topic in the form and execute the workflow. Review the Notion report to see how well the AI-generated insights align with your expectations. Experiment with different topics to see the workflow's versatility.

**WIIFM:**  
Mastering this workflow enables you to offer AI-powered research services, increasing your value to clients. This can lead to new business opportunities and higher revenue by providing unique insights faster than traditional methods.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, notionApi, googlePalmApi, httpQueryAuth, httpHeaderAuth.
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
