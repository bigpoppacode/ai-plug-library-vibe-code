# Faceless Shorts System
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **GPT 4o** `lmChatOpenAi` — model: `[object Object]`
4. **Flash 2.0** `lmChatGoogleGemini` — modelName: "models/gemini-2.0-flash", options: "[object Object]"
5. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note3** `stickyNote` — content: "# Generate Image Prompts", height: "460", width: "1840"
7. **Sticky Note4** `stickyNote` — content: "# Generate Images
", height: "260", width: "600"
8. **Sticky Note1** `stickyNote` — content: "# Generate Videos (Kling)
", height: "260", width: "820"
9. **Sticky Note** `stickyNote` — content: "# Generate Audio

", height: "280", width: "1240"
10. **Sticky Note2** `stickyNote` — content: "# Render & Upload
", height: "580", width: "880"
11. **Generate Videos (Kling)** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
12. **Sticky Note5** `stickyNote` — content: "# Generate Videos
", height: "260", width: "600"
13. **Split Out Parts (Kling)** `code` — jsCode: "// Code to extract video URLs from JSON data in n8n
// This handles various possible input structures

// Function to extract video info if the object has the expected structure
fu…[truncated]"
14. **Sticky Note6** `stickyNote` — content: "# Nate Herk | AI Automation", height: "80", width: "500"
15. **Grab Idea** `googleSheets` — documentId: "[object Object]", sheetName: "[object Object]"
16. **8 Minutes** `wait` — amount: "8", unit: "minutes"
17. **Set Animals** `set` — assignments: "[object Object]", options: "[object Object]"
18. **Get Videos (Kling)** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
19. **Split Out** `splitOut` — fieldToSplitOut: "animals", options: "[object Object]"
20. **Image Prompt Agent** `agent` — promptType: "define", text: "=Animal: {{ $json.animals }}
Style: {{ $('Set Animals').item.json.style }}", options: "[object Object]"
21. **Remove \n** `code` — jsCode: "// N8N Code Node to remove all newline characters from previous node outputs

// Process all items in the array
// This will work regardless of whether we're running once for all i…[truncated]"
22. **Set Prompts** `set` — assignments: "[object Object]", options: "[object Object]"
23. **Generate Image** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
24. **90 seconds** `wait` — amount: "90"
25. **Get Images** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
26. **Generate Videos** `httpRequest` — method: **POST**, url: `https://api.dev.runwayml.com/v1/image_to_video`
27. **2 minutes** `wait` — amount: "2", unit: "minutes"
28. **Get Videos** `httpRequest` — url: `=https://api.dev.runwayml.com/v1/tasks/{{ $json.id }}`
29. **Limit** `limit` — configured for its default action.
30. **Video Status** `googleSheets` — operation: **update**
31. **Sound Agent** `agent` — promptType: "define", text: "=Style: {{ $('Grab Idea').item.json.style }}", options: "[object Object]"
32. **Set Audio** `set` — assignments: "[object Object]", options: "[object Object]"
33. **Generate Audio** `httpRequest` — method: **POST**, url: `https://api.elevenlabs.io/v1/sound-generation`
34. **Upload to Drive** `googleDrive` — name: "={{ $('Grab Idea').item.json.style }}.mp3", driveId: "[object Object]", options: "[object Object]"
35. **Share File** `googleDrive` — operation: **share**
36. **Merge** `merge` — mode: "combine", combineBy: "combineAll", options: "[object Object]"
37. **Split Out Parts** `code` — jsCode: "// N8n Code Node to extract URLs from output arrays and combine them into a single array

// This code assumes your input JSON is in items[0].json or is multiple items
// Determine…[truncated]"
38. **Render Video** `httpRequest` — method: **POST**, url: `https://api.creatomate.com/v1/renders`
39. **25 Seconds** `wait` — amount: "25"
40. **Download Video** `httpRequest` — url: `={{ $json.url }}`
41. **Upload Video** `youTube` — resource: **video**, operation: **upload**
42. **Update Sheet** `googleSheets` — operation: **update**
43. **Notification** `gmail` — subject: "=New Short Processed: {{ $('Grab Idea').first().json.title }}", emailType: "text", message: "=[Name],

A new short has been created and is awaiting your approval.

It is called "{{ $('Grab Idea').first().json.title }}".

You can view it here: 

Cheers!"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the creation of multimedia content. It fetches ideas from Google Sheets, generates image and video prompts using AI, creates images and videos, and finally uploads them to YouTube, updating the status in Google Sheets and notifying users via email.

- **Demonstrate**: A content creator could use this workflow to automate the production of YouTube shorts. By inputting ideas into a Google Sheets, they can generate videos and upload them directly to YouTube, saving time and streamlining content creation.

- **Imitate**: Import the workflow into n8n, connect to your Google Sheets, AI, and YouTube accounts. Set up a Google Sheet with ideas, and configure the AI models and sheet details in the workflow. Run the workflow to test and adjust settings as needed.

- **Practice**: Create a sample Google Sheet with a few content ideas. Run the workflow to see how it generates and uploads videos. Adjust the AI settings to see how the output changes, and test different styles and prompts.

- **WIIFM**: Mastering this workflow allows you to offer automated content creation services, improving efficiency and scalability for clients. This can enhance your service offerings, attract new customers, and increase revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, openAiApi, googlePalmApi, googleDriveOAuth2Api, youTubeOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
