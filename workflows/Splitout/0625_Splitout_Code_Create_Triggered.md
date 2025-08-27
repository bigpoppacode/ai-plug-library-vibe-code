# Splitout Code Create Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **receive_topic**.
2. **receive_topic** `formTrigger` — path: `/generator`
3. **Sticky Note** `stickyNote` — color: "4", width: "626.3622313971345", height: "534.5136001658811"
4. **Sticky Note1** `stickyNote` — color: "2", width: "522.4076473360327", height: "269.1338026993484"
5. **Sticky Note2** `stickyNote` — width: "152.8844206522747", height: "245.20095123019289", content: "### Creates a folder in Google Drive to store the generated content and outline"
6. **Sticky Note3** `stickyNote` — width: "263.93285146915525", height: "203.07913264447978", content: "### Sends user inputs to an AI model to generate a detailed content outline in Markdown format."
"
7. **Sticky Note4** `stickyNote` — width: "376.89591040356845", height: "193.50599205681746", content: "### Uploads the AI-generated outline to the Google Drive folder created earlier."
8. **Sticky Note5** `stickyNote` — width: "540.5966144525913", height: "159.0426859412338", content: "### Breaks the AI-generated outline into manageable sections. Each section will be individually processed to ensure clarity, structure, and relevance."
9. **Sticky Note6** `stickyNote` — color: "7", width: "1360.0574487564681", height: "295.93859634480214"
10. **Sticky Note7** `stickyNote` — color: "7", width: "723.7577183524706", height: "299.4686919365027"
11. **Sticky Note8** `stickyNote` — width: "301.26809976103766", height: "198.29256235064872", content: "### Joins all ordered sections into a unified article. Ensures the flow and structure of the final content remain consistent and logical"
12. **Sticky Note9** `stickyNote` — width: "320.41438093636225", height: "213.60958729090797", content: "### Converts the aggregated article into a downloadable text file. Uploads it to the Google Drive folder created earlier, ready for review and sharing."
13. **Sticky Note10** `stickyNote` — width: "192.13429706168935", height: "255.7314058766213", content: "### Records the generated outline and article links in a Google Sheets document. This ensures easy access and tracking of the generated content for future use."
14. **Sticky Note11** `stickyNote` — color: "4", width: "570.2733502743432", height: "280.62157140454303"
15. **add_row** `googleSheets` — operation: **append**
16. **topic_variables** `set` — options: "[object Object]", assignments: "[object Object]"
17. **create_folder** `googleDrive` — resource: **folder**
18. **create_outline** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
19. **markdown_to_file** `convertToFile` — operation: **toText**
20. **upload_outline_file** `googleDrive` — name: "=O: {{ $('topic_variables').item.json['Primary Keyword'] }}", driveId: "[object Object]", options: "[object Object]"
21. **input_brief** `set` — options: "[object Object]", assignments: "[object Object]"
22. **new_lines** `set` — options: "[object Object]", assignments: "[object Object]"
23. **split_out** `splitOut` — options: "[object Object]", fieldToSplitOut: "content"
24. **section_starts_with_#** `if` — options: "[object Object]", conditions: "[object Object]"
25. **set_introduction** `set` — options: "[object Object]", assignments: "[object Object]"
26. **input_sections** `set` — options: "[object Object]", assignments: "[object Object]"
27. **section_paragraphs** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
28. **section_text** `set` — options: "[object Object]", assignments: "[object Object]"
29. **25_percent_chance** `if` — options: "[object Object]", conditions: "[object Object]"
30. **change_section_format** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
31. **set_section_content** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Merge** `merge` — configured for its default action.
33. **Sort** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
34. **add_2_new_lines** `code` — jsCode: "// Create an array to hold the rearranged items
const rearrangedItems = [];

// Loop over input items and push each message into the rearrangedItems array
for (const item of $input…[truncated]"
35. **Merge1** `merge` — configured for its default action.
36. **Aggregate** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
37. **final_article** `set` — options: "[object Object]", assignments: "[object Object]"
38. **final_article_file** `convertToFile` — operation: **toText**
39. **upload_fiinalArticle** `googleDrive` — name: "={{ $('topic_variables').item.json['Primary Keyword'] }}", driveId: "[object Object]", options: "[object Object]"
40. **update_article_link** `googleSheets` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of content using AI. It starts with a form to gather user inputs like title, keywords, and word count. The workflow then creates a folder in Google Drive, generates a detailed content outline using AI, breaks it into sections for processing, and compiles it into a complete article. The final content is uploaded to Google Drive and links are recorded in Google Sheets for easy tracking.

### Demonstrate
A content marketing agency could use this workflow to automate blog post creation. By inputting a topic and keywords, they can quickly generate a high-quality article, saving time and ensuring consistent content production for their clients.

### Imitate
1. Import the workflow into n8n.
2. Set up Google Drive and Sheets API credentials.
3. Customize the form fields to suit your content needs.
4. Test the workflow with sample data to ensure it generates and uploads content correctly.
5. Adjust AI prompts and processing steps as needed.

### Practice
Create a test form with a few content topics. Run the workflow to see how it generates and organizes content. Experiment with different keywords and instructions to observe the changes in the generated content.

### WIIFM
Mastering this workflow can streamline your content creation process, making it faster and more efficient. This can attract more clients who need regular content, increasing your service offerings and generating additional income in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, googleSheetsOAuth2Api, openAiApi.
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
