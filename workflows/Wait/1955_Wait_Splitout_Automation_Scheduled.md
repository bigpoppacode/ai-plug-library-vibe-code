# Wait Splitout Automation Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Simple Memory** `memoryBufferWindow` — configured for its default action.
5. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[
  {
    "salesNavigatorParams": {
      "keywords": "additional keywords important to search but not mentioned in other fields",
      "current_titles": "title1, title2",
      "…[truncated]"
6. **Sticky Note** `stickyNote` — color: "4", width: "1320", content: "Find leads in LinkedIn"
7. **Sticky Note1** `stickyNote` — color: "4", width: "980", content: "Get company website "
8. **Sticky Note2** `stickyNote` — color: "4", width: "1520", content: "Research company website"
9. **Sticky Note3** `stickyNote` — color: "4", width: "980", content: "Score data"
10. **Sticky Note4** `stickyNote` — color: "4", width: "1860", content: "Communicate with leads"
11. **Sticky Note5** `stickyNote` — color: "4", width: "1520", content: "Research lead LN post"
12. **Sticky Note6** `stickyNote` — color: "4", width: "1520", content: "Research company LN post"
13. **Sticky Note7** `stickyNote` — color: "4", width: "1520", content: "Research company News"
14. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
15. **HDW Site-map** `hdwWebParserTool` — operation: **map**, url: `={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', `use company url to get a site-map`, 'string') }}`
16. **HDW Parser** `hdwWebParserTool` — url: `={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', ``, 'string') }}`
17. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
18. **Schedule Trigger1** `scheduleTrigger` — rule: "[object Object]"
19. **Sticky Note8** `stickyNote` — color: "7", width: "620", height: "640"
20. **Sticky Note9** `stickyNote` — color: "7", width: "300", height: "80"
21. **Sticky Note10** `stickyNote` — color: "7", width: "320", height: "80"
22. **Sticky Note11** `stickyNote` — color: "7", width: "320", height: "120"
23. **Sticky Note12** `stickyNote` — color: "5", width: "360", height: "100"
24. **Sticky Note13** `stickyNote` — color: "5", width: "360", height: "100"
25. **Sticky Note14** `stickyNote` — color: "5", width: "360", height: "100"
26. **Sticky Note15** `stickyNote` — color: "5", width: "360", height: "100"
27. **Sticky Note16** `stickyNote` — color: "5", width: "360", height: "100"
28. **Sticky Note17** `stickyNote` — color: "5", width: "360", height: "100"
29. **Sticky Note18** `stickyNote` — color: "3", width: "360", height: "100"
30. **Sticky Note19** `stickyNote` — color: "3", width: "180", height: "80"
31. **Sticky Note20** `stickyNote` — color: "3", width: "200", height: "100"
32. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
33. **AI Agent: ICP -> LinkedIn search filters** `agent` — options: "[object Object]", hasOutputParser: "true"
34. **HDW Get LinkedIn Profile Connections** `hdwLinkedinManagement` — operation: **getConnections**
35. **Split Out** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "output"
36. **Split LinkedIn connections to items** `code` — jsCode: "const inputData = $input.all();
const connectionArray = inputData[0].json;

return connectionArray.map(connection => {
  return { json: connection };
});"
37. **Google Sheets15** `googleSheets` — operation: **update**
38. **Google Sheets16** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of finding and communicating with potential leads on LinkedIn based on an Ideal Customer Profile (ICP). It begins by receiving a chat message, utilizes AI to transform the ICP into LinkedIn search filters, retrieves potential leads, and gathers additional information like company websites and posts. The workflow scores the data, identifies high-priority leads, and sends connection requests or messages via LinkedIn. It also logs all interactions and data in Google Sheets for tracking and analysis.

### Demonstrate
A business owner could use this workflow to automate lead generation and outreach on LinkedIn, saving time and ensuring a systematic approach to finding and engaging with potential clients. For example, a consultant targeting tech startups can streamline finding and connecting with decision-makers using this workflow.

### Imitate
1. Import the workflow into n8n.
2. Set up the chat trigger and configure the AI model with your OpenAI credentials.
3. Customize the ICP parameters for your target audience.
4. Connect your LinkedIn and Google Sheets accounts to capture and log data.
5. Run the workflow and monitor results in Google Sheets.

### Practice
Create a test version of this workflow with a small list of target companies and use dummy data to simulate the process. Adjust the AI prompt for your specific industry and see how it affects lead scoring and filtering.

### WIIFM
Mastering this workflow enables you to automate and scale your LinkedIn outreach, enhancing your ability to generate and nurture leads efficiently. This capability can be offered as a high-value service to clients, increasing your business's revenue potential and positioning you as an expert in AI-driven automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api, hdwLinkedinApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.

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
