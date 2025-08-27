# Code Manual Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
4. **OpenAI Chat Model2** `lmChatOpenAi` — options: "[object Object]"
5. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
6. **Sticky Note** `stickyNote` — color: "7", width: "3741.593083126444", height: "1044.8111554136713"
7. **Sticky Note1** `stickyNote` — color: "4", width: "1237.3377621763516", height: "575.9439659309116"
8. **Sticky Note2** `stickyNote` — color: "7", width: "804.3951263154196", height: "125.73173301324687"
9. **Sticky Note3** `stickyNote` — color: "5", width: "311.0523273992095", height: "843.8786512173932"
10. **Sticky Note4** `stickyNote` — color: "7", width: "423.41585047129973", height: "309.71740416262054"
11. **Sticky Note6** `stickyNote` — color: "5", width: "639.5579220386832", height: "242.80759628871897"
12. **Sticky Note7** `stickyNote` — width: "356.84794255678776", height: "186.36110628732342", content: "## How this workflow works
1. Replace ScrapingBee and OpenAI credentials
2. Replace company_name with company of choice (workflow performs better with larger US-based organizations…[truncated]"
13. **Sticky Note8** `stickyNote` — color: "6", width: "356.84794255678776", height: "181.54335665904924"
14. **Sticky Note9** `stickyNote` — color: "7", width: "847.5931795867759", height: "522.346478008115"
15. **Sticky Note10** `stickyNote` — color: "6", width: "989.7621518164046", height: "636.6345107975716"
16. **Sticky Note11** `stickyNote` — color: "6", width: "737.6316136259719", height: "444.9087184962878"
17. **Sticky Note12** `stickyNote` — color: "6", width: "643.5995639515581", height: "646.0030521944287"
18. **SET company_name** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Define dictionary of demographic keys** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
20. **ScrapingBee Search Glassdoor** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
21. **Extract company url path** `html` — operation: **extractHtmlContent**
22. **ScrapingBee GET company page contents** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
23. **Extract reviews page url path** `html` — operation: **extractHtmlContent**
24. **ScrapingBee GET Glassdoor Reviews Content** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
25. **Extract Demographics Module** `html` — operation: **extractHtmlContent**
26. **Extract Overall Review Summary** `html` — operation: **extractHtmlContent**
27. **Extract demographic distributions** `informationExtractor` — text: "={{ $json.demographics_content }}", options: "[object Object]", attributes: "[object Object]"
28. **Extract overall ratings and distribution percentages** `informationExtractor` — text: "={{ $json.review_summary }}", options: "[object Object]", attributes: "[object Object]"
29. **Define contributions to variance** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Set variance and std_dev** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
32. **Calculate Z-Scores and Effect Sizes** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Calculate P-Scores** `code` — jsCode: "// Approximate CDF for standard normal distribution
function normSDist(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z));
  const d = 0.254829592 * t - 0.284496736 * t * t + 1.421…[truncated]"
34. **Format dataset for scatterplot** `code` — jsCode: "// Iterate through the input data and format the dataset for QuickChart
for (const item of $input.all()) {
  // Ensure the data object exists and initialize datasets
  item.json.da…[truncated]"
35. **Sort Effect Sizes** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
36. **Specify additional parameters for scatterplot** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
37. **QuickChart Bar Chart** `quickChart` — data: "={{ $json.population_analysis.effect_sizes.values() }}", output: "bar_chart", labelsMode: "array"
38. **Text Analysis of Bias Data** `chainLlm` — text: "=This data compares the average rating given by different demographic groups against a baseline (the overall mean rating).

Objective:
1. Analyze the data and offer between 2 and 5…[truncated]", promptType: "define"
39. **Quickchart Scatterplot** `httpRequest` — url: `https://quickchart.io/chart`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to identify workplace discrimination patterns by extracting and analyzing data from Glassdoor. It scrapes company reviews and demographic information using ScrapingBee, processes the data with OpenAI for analysis, and visualizes it through QuickChart. The workflow calculates statistical measures like Z-scores and effect sizes to highlight disparities among different demographic groups within a company.

### Demonstrate
A business owner could use this workflow to assess the inclusivity and fairness of their workplace, identifying potential discrimination issues. This helps in making informed decisions about diversity and inclusion strategies, ultimately fostering a more equitable work environment.

### Imitate
1. Import the workflow into n8n.
2. Replace ScrapingBee and OpenAI credentials.
3. Set the company name you want to analyze.
4. Test the workflow to ensure data is scraped and processed correctly.
5. Review the generated charts and analysis for insights.

### Practice
Create a test run with a company of your choice to see how the workflow processes and visualizes data. Experiment by modifying the demographic keys or review criteria to see how it affects the analysis.

### WIIFM
Mastering this workflow allows you to offer a valuable service to businesses aiming to improve workplace equality. By identifying and addressing discrimination, you can help companies enhance their work culture and reputation, potentially leading to consulting opportunities and increased revenue for your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, httpQueryAuth.
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
  