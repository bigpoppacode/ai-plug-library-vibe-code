# HTTP ExecuteWorkflow Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note9** `stickyNote` — color: "7", width: "330.5152611046425", height: "239.5888196628349"
3. **Sticky Note7** `stickyNote` — color: "7", width: "636.2128494576581", height: "497.1532689930921"
4. **Sticky Note6** `stickyNote` — color: "7", width: "280.2462120317618", height: "545.9087885077763"
5. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
6. **get_channel_details** `toolWorkflow` — name: "get_channel_details", fields: "[object Object]", schemaType: "manual"
7. **get_video_description** `toolWorkflow` — name: "get_video_description", fields: "[object Object]", schemaType: "manual"
8. **get_list_of_videos** `toolWorkflow` — name: "get_list_of_videos", fields: "[object Object]", schemaType: "manual"
9. **get_list_of_comments** `toolWorkflow` — name: "get_list_of_comments", fields: "[object Object]", schemaType: "manual"
10. **search** `toolWorkflow` — name: "search", fields: "[object Object]", schemaType: "manual"
11. **analyze_thumbnail** `toolWorkflow` — name: "analyze_thumbnail", fields: "[object Object]", schemaType: "manual"
12. **video_transcription** `toolWorkflow` — name: "video_transcription", fields: "[object Object]", schemaType: "manual"
13. **Postgres Chat Memory** `memoryPostgresChat` — sessionKey: "={{ $('When chat message received').item.json.sessionId }}", sessionIdType: "customKey"
14. **When chat message received** `chatTrigger` — options: "[object Object]"
15. **Sticky Note** `stickyNote` — width: "1430.34590072234", height: "588.1344471094899", content: "## Scenario 1: AI agent"
16. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
17. **Sticky Note1** `stickyNote` — width: "1427.3810326521016", height: "1313.2689194736308", content: "## Scenario 2: Agent tools"
18. **Sticky Note2** `stickyNote` — color: "4", width: "266.7375650720483", height: "80"
19. **Sticky Note3** `stickyNote` — color: "4", width: "266.7375650720483", height: "80"
20. **AI Agent** `agent` — text: "={{ $('When chat message received').item.json.chatInput }}", agent: "openAiFunctionsAgent", options: "[object Object]"
21. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Get Channel Details** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/channels`
23. **Get Video Description** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/videos`
24. **Get Comments** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/commentThreads`
25. **Run Query** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/search`
26. **Get Videos by Channel** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/search`
27. **OpenAI** `openAi` — resource: **image**, operation: **analyze**
28. **Get Video Transcription** `httpRequest` — method: **POST**, url: `=https://api.apify.com/v2/acts/dB9f4B02ocpTICIEY/run-sync-get-dataset-items`
29. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Response** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow automates the extraction and analysis of data from YouTube videos and comments using various integrated APIs. It retrieves channel details, video descriptions, comments, and transcriptions, and analyzes thumbnails to generate insights. The workflow can help content creators understand audience preferences and optimize their content strategy.

- **Demonstrate**: A content creator can use this workflow to analyze comments on their YouTube channel, identify viewer preferences, and adjust their content strategy accordingly. This helps in creating more engaging videos and improving viewer retention.

- **Imitate**: To apply this workflow, import it into your n8n instance, set up your API credentials for YouTube and OpenAI, and configure the nodes to match your specific data needs. Test the workflow by running it against your YouTube channel to ensure it retrieves and analyzes data correctly.

- **Practice**: Create a new YouTube channel, upload a few videos, and use this workflow to gather insights from the comments. Experiment with different video topics and analyze the comments to see how viewer preferences change, using these insights to refine your content strategy.

- **WIIFM**: Mastering this workflow enables you to offer data-driven content optimization services to YouTube creators, helping them increase engagement and grow their audience. This skill can be a valuable addition to your automation business, attracting clients looking to enhance their online presence and monetization.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, postgres, httpQueryAuth.
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
  