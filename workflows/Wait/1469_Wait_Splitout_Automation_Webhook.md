# Wait Splitout Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note20** `stickyNote` — color: "6", width: "290", height: "1110"
4. **Sticky Note9** `stickyNote` — color: "7", width: "247", height: "1111"
5. **Sticky Note** `stickyNote` — color: "3", width: "427", height: "1111"
6. **Sticky Note10** `stickyNote` — color: "4", width: "667", height: "1111"
7. **Sticky Note7** `stickyNote` — color: "3", width: "220", height: "240"
8. **Sticky Note11** `stickyNote` — color: "5", width: "727", height: "1111"
9. **Sticky Note12** `stickyNote` — color: "6", width: "1447", height: "531"
10. **Sticky Note13** `stickyNote` — color: "3", width: "220", height: "280"
11. **Sticky Note14** `stickyNote` — color: "6", width: "1447", height: "551"
12. **Sticky Note15** `stickyNote` — color: "3", width: "220", height: "280"
13. **Wikipedia** `toolWikipedia` — configured for its default action.
14. **Sticky Note1** `stickyNote` — color: "7", width: "400", height: "80"
15. **Sticky Note2** `stickyNote` — color: "7", width: "400", height: "80"
16. **Get Brand Guidelines** `airtable` — operation: **search**, table: `[object Object]`
17. **Set Guidelines** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
18. **Get SEO Keywords** `airtable` — operation: **search**, table: `[object Object]`
19. **Keyword Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
20. **Remove Duplicates** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "id"
21. **Split Out Keywords** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "RelatedContent"
22. **Get Content** `airtable` — table: `[object Object]`
23. **Split Out Content** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "id"
24. **Limit** `limit` — configured for its default action.
25. **Script Prep** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
26. **Split Out TN Prompt** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.thumbnail_prompt"
27. **Split Out Scenes** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.scenes"
28. **Prompt Settings** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
29. **Leo - Improve Prompt1** `httpRequest` — method: **POST**, url: `https://cloud.leonardo.ai/api/rest/v1/prompt/improve`
30. **Leo - Generate Image1** `httpRequest` — method: **POST**, url: `https://cloud.leonardo.ai/api/rest/v1/generations`
31. **Wait 30 Seconds** `wait` — amount: "30"
32. **Leo - Get imageId1** `httpRequest` — url: `=https://cloud.leonardo.ai/api/rest/v1/generations/{{ $json.body.sdGenerationJob.generationId }}`
33. **Add Asset Info** `airtable` — operation: **create**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the generation of 9:16 aspect ratio images based on content from Airtable. It retrieves brand guidelines and SEO keywords, filters and processes content, and uses OpenAI to create scripts for short-form videos. The workflow then uses Leonardo.ai to generate images and stores the results in Airtable.

- **Demonstrate:** A content creator can use this workflow to automate the creation of video thumbnails and scenes for social media. This saves time by eliminating manual design work and ensures content is aligned with brand guidelines.

- **Imitate:** To adapt this workflow, import it into n8n, connect your Airtable and OpenAI accounts, and adjust the Airtable table configurations to match your data. Run the workflow to test image generation and review the outputs.

- **Practice:** Set up a test Airtable base with sample content. Run the workflow to generate images and observe how the content and brand guidelines influence the results. Adjust parameters to see how they affect the images.

- **WIIFM:** Mastering this workflow can enhance your service offerings by automating content creation for clients, increasing efficiency, and ensuring brand consistency. This can lead to higher client satisfaction and opportunities for upselling automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi, openAiApi, httpCustomAuth.
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
