# Googleanalytics Code Automate Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "6", width: "1270.4518485107694", height: "209.13454984057833"
4. **Sticky Note1** `stickyNote` — color: "4", width: "1269.8517211291685", height: "745.919853945687"
5. **Sticky Note4** `stickyNote` — color: "6", width: "231.71528995536218", height: "986.0715248510506"
6. **Sticky Note5** `stickyNote` — color: "5", width: "1264.897623827279", height: "295.7350020039967"
7. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
8. **Get Page Engagement Stats for this week** `googleAnalytics` — simple: "false", returnAll: "true", metricsGA4: "[object Object]"
9. **Parse - Get Page Engagement This Week** `code` — jsCode: "function transformToUrlString(items) {
    // Debug logging
    console.log('Input items:', JSON.stringify(items, null, 2));
    
    // Check if items is an array and has content
…[truncated]"
10. **Get Page Engagement Stats for prior week** `googleAnalytics` — simple: "false", endDate: "={{$today.minus({days: 7})}}", dateRange: "custom"
11. **Parse - Get Page Engagement Prior Week** `code` — jsCode: "function transformToUrlString(items) {
    // Debug logging
    console.log('Input items:', JSON.stringify(items, null, 2));
    
    // Check if items is an array and has content
…[truncated]"
12. **Get Google Search Results for this week** `googleAnalytics` — simple: "false", returnAll: "true", metricsGA4: "[object Object]"
13. **Parse - Get Google Search This Week** `code` — jsCode: "function transformToUrlString(items) {
    // Check if items is an array and get the JSON property
    const data = items[0]?.json;

    if (!data || !Array.isArray(data.rows)) {
 …[truncated]"
14. **Get Google Search Results for prior week** `googleAnalytics` — simple: "false", endDate: "={{$today.minus({days: 7})}}", dateRange: "custom"
15. **Parse - Get Google Search Prior Week** `code` — jsCode: "function transformToUrlString(items) {
    // Ensure the input is valid and contains data
    const data = items[0]?.json;

    if (!data || !Array.isArray(data.rows)) {
        co…[truncated]"
16. **Get Country views data for this week** `googleAnalytics` — simple: "false", returnAll: "true", metricsGA4: "[object Object]"
17. **Parse - Country Views This Week** `code` — jsCode: "function transformToUrlString(items) {
    // In n8n, we need to check if items is an array and get the json property
    const data = items[0].json;
    
    if (!data || !data.ro…[truncated]"
18. **Get Country views data for prior week** `googleAnalytics` — simple: "false", endDate: "={{$today.minus({days: 7})}}", dateRange: "custom"
19. **Parse - Country Views Prior Week** `code` — jsCode: "function transformToUrlString(items) {
    // Ensure the input is valid and contains data
    const data = items[0]?.json;

    if (!data || !Array.isArray(data.rows)) {
        co…[truncated]"
20. **Set urlStrings** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Aggregate Data** `code` — jsCode: "// Helper function to decode and parse a URL-encoded JSON string
function decodeUrlString(urlString) {
    try {
        const decoded = JSON.parse(decodeURIComponent(urlString));
…[truncated]"
22. **Input All** `code` — jsCode: "console.log($input.all());
return $input.all();
"
23. **Format Data** `code` — jsCode: "const input = $input.first().json;

// Extract data
const engagementStats = input.engagementStats || {};
const searchResults = input.searchResults || {};
const countryViews = input…[truncated]"
24. **Email the Report** `gmail` — sendTo: "info@alexk1919.com", message: "={{ $json.htmlContent }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of collecting and analyzing Google Analytics data. It retrieves page engagement, Google search results, and country view stats for the current and prior week. The data is then aggregated, formatted into a report, and emailed. This workflow helps businesses compare weekly web traffic and engagement metrics to inform marketing strategies.

**Demonstrate:**  
A digital marketing consultant could use this workflow to automatically generate and email weekly reports to clients, highlighting changes in web traffic and engagement, helping clients adjust their marketing strategies more effectively.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up Google Analytics credentials and input your property ID.  
3. Configure the schedule trigger for weekly execution.  
4. Test the workflow to ensure it retrieves and emails the correct data.  
5. Customize the email template to suit your needs.

**Practice:**  
Create a test Google Analytics account and use this workflow to track a small website. Compare the data manually to the automated report to ensure accuracy. Modify metrics and dimensions to see how they affect the report.

**WIIFM:**  
Mastering this workflow enables you to offer automated reporting services, saving clients time and providing valuable insights into their web performance. This can enhance your service offerings and increase income potential as part of an AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleAnalyticsOAuth2, gmailOAuth2.
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
  