# Linkedin Telegram Automate Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Sticky Note20** `stickyNote` — color: "7", height: "240", content: "## LLM"
4. **Sticky Note21** `stickyNote` — color: "7", height: "240", content: "## Chat Memory"
5. **Sticky Note22** `stickyNote` — color: "4", width: "300", height: "280"
6. **Sticky Note32** `stickyNote` — color: "2", width: "340", height: "420"
7. **Sticky Note33** `stickyNote` — color: "6", height: "240", content: "## 1️⃣ X - Twitter"
8. **X-Twiter** `toolWorkflow` — name: "create_x_twitter_posts_tool", fields: "[object Object]", workflowId: "[object Object]"
9. **Sticky Note34** `stickyNote` — color: "6", height: "240", content: "## 2️⃣ Instagram"
10. **Instagram** `toolWorkflow` — name: "create_instagram_posts_tool", fields: "[object Object]", workflowId: "[object Object]"
11. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
12. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
13. **Sticky Note35** `stickyNote` — color: "6", height: "240", content: "## 3️⃣ Facebook"
14. **Sticky Note36** `stickyNote` — color: "6", height: "240", content: "## 4️⃣ LinkedIn"
15. **Facebook** `toolWorkflow` — name: "create_facebook_posts_tool", fields: "[object Object]", workflowId: "[object Object]"
16. **LinkedIn** `toolWorkflow` — name: "create_linkedin_posts_tool", fields: "[object Object]", workflowId: "[object Object]"
17. **Sticky Note37** `stickyNote` — color: "6", height: "240", content: "## 5️⃣Threads"
18. **Sticky Note38** `stickyNote` — color: "6", height: "240", content: "## 6️⃣YouTube Shorts"
19. **Short** `toolWorkflow` — name: "create_threads_posts_tool", fields: "[object Object]", workflowId: "[object Object]"
20. **YouTube Short** `toolWorkflow` — name: "create_youtube_short_tool", fields: "[object Object]", workflowId: "[object Object]"
21. **Sticky Note18** `stickyNote` — color: "7", width: "1100", height: "620"
22. **Sticky Note25** `stickyNote` — color: "6", width: "3520", height: "820"
23. **Sticky Note26** `stickyNote` — color: "7", width: "300", height: "340"
24. **Sticky Note41** `stickyNote` — width: "340", height: "180", content: "💡Notes

Update all Social Media Platform Credentials as required.

Adjust parameters and content for each platform to suit your needs."
25. **Sticky Note42** `stickyNote` — color: "4", width: "400", height: "360"
26. **Sticky Note** `stickyNote` — color: "7", width: "1120", height: "640"
27. **gpt-40-mini** `lmChatOpenAi` — model: `[object Object]`
28. **gpt-40-mini1** `lmChatOpenAi` — model: `[object Object]`
29. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
30. **Sticky Note1** `stickyNote` — color: "5", width: "760", height: "1540"
31. **Sticky Note2** `stickyNote` — color: "3", height: "1540", content: "<common>
{
    "type": "object",
    "properties": {
        "hashtags": {
            "type": "array",
            "items": {
                "type": "string"
            }
      …[truncated]"
32. **Sticky Note3** `stickyNote` — color: "5", width: "260", height: "240"
33. **Sticky Note4** `stickyNote` — color: "3", width: "260", height: "240"
34. **Sticky Note5** `stickyNote` — color: "7", width: "1100", height: "1760"
35. **Sticky Note6** `stickyNote` — color: "6", width: "700", height: "1240"
36. **Sticky Note7** `stickyNote` — width: "400", height: "480", content: "## Social Media Content Creator"
37. **Sticky Note8** `stickyNote` — color: "7", width: "660", height: "420"
38. **Sticky Note9** `stickyNote` — color: "7", width: "840", height: "260"
39. **Sticky Note10** `stickyNote` — width: "320", height: "380", content: ""
40. **Sticky Note11** `stickyNote` — color: "3", height: "80", content: "## Social Media Schema"
41. **Sticky Note12** `stickyNote` — color: "5", width: "760", height: "80"
42. **Sticky Note13** `stickyNote` — width: "620", height: "320", content: "# Social Media Router Agent"
43. **Sticky Note14** `stickyNote` — width: "400", height: "440", content: "## Prepare Email Approval Contents as HTML"
44. **SerpAPI** `toolSerpApi` — options: "[object Object]"
45. **Sticky Note15** `stickyNote` — color: "7", width: "3520", height: "680"
46. **Sticky Note16** `stickyNote` — color: "7", width: "680", height: "280"
47. **Sticky Note17** `stickyNote` — color: "7", width: "680", height: "260"
48. **Sticky Note19** `stickyNote` — color: "7", width: "400", height: "520"
49. **Sticky Note23** `stickyNote` — color: "7", width: "340", height: "520"
50. **Sticky Note24** `stickyNote` — color: "7", width: "300", height: "520"
51. **Sticky Note27** `stickyNote` — color: "7", width: "260", height: "520"
52. **Sticky Note28** `stickyNote` — color: "7", width: "840", height: "280"
53. **Sticky Note29** `stickyNote` — color: "7", width: "840", height: "260"
54. **Sticky Note30** `stickyNote` — width: "420", height: "960", content: "## 3️⃣Dynamic System Prompt and Platform Schema Composition based on User Prompt using External Sources
- Centralized prompt management: Store all system prompts in a single extern…[truncated]"
55. **Sticky Note43** `stickyNote` — height: "500", content: "💡Notes

- Create Google Doc for the Social Media Schema and copy the provided schema.

- Update the Google Doc ID in the Social Media Schema node.

- Create Google Doc for the Soc…[truncated]"
56. **Sticky Note44** `stickyNote` — width: "300", content: "💡Notes

Replace pollinations.ai with any online image generation service that produces an image file you can download."
57. **Sticky Note45** `stickyNote` — width: "400", height: "140", content: "💡Notes

Replace Chat model with other LLMs and test out the results.  Add more tools or try other web search tools to suit your use case."
58. **gpt-4o** `lmChatOpenAi` — model: `[object Object]`
59. **🤖Social Media Router Agent** `agent` — text: "=You are a helpful assistant that uses the provided tools.  Respond with a valid JSON object.

User prompt:  {{ $json.chatInput }}", options: "[object Object]", promptType: "define"
60. **Social Media System Prompt** `googleDocs` — operation: **get**
61. **Social Media Schema** `googleDocs` — operation: **get**
62. **File Id** `set` — options: "[object Object]", assignments: "[object Object]"
63. **System Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
64. **Schema** `set` — options: "[object Object]", assignments: "[object Object]"
65. **Get Social Post from Google Drive** `googleDrive` — operation: **download**
66. **Parse System Prompt** `code` — jsCode: "// Get the input data from previous node
const inputData = $input.first().json;
const xmlString = inputData.system_prompt;

// Function to extract all content between XML tags
func…[truncated]"
67. **Parse Schema** `code` — jsCode: "// Get the input data from previous node
const inputData = $input.first().json;
const xmlString = inputData.schema;

console.log(inputData)

// Function to extract content between …[truncated]"
68. **Extract as JSON** `extractFromFile` — operation: **fromJson**
69. **Merge Prompts and Schema** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
70. **Prepare Email Contents** `agent` — text: "=Use the HTML template and populate [fields] as required from this: {{ $json.data.social_content.toJsonString() }}
-----
Only output HTML without code block tags, preamble or furth…[truncated]", options: "[object Object]", promptType: "define"
71. **Compose Prompt & Schema** `set` — options: "[object Object]", assignments: "[object Object]"
72. **Gmail User for Approval** `gmail` — operation: **sendAndWait**
73. **Social Media Content Creator** `agent` — text: "=Social Media Platform: {{ $json.route }}
User Prompt: {{ $json.user_prompt }}
", options: "[object Object]", promptType: "define"
74. **Is Approved?** `if` — options: "[object Object]", conditions: "[object Object]"
75. **Social Content** `set` — options: "[object Object]", assignments: "[object Object]"
76. **Get Social Post Image** `httpRequest` — url: `={{ $('Extract as JSON').item.json.data.social_image.medium.url }}`
77. **pollinations.ai1** `httpRequest` — url: `=https://image.pollinations.ai/prompt/{{ $json.output.common_schema.image_suggestion.replaceAll(' ','-').replaceAll(',','').replaceAll('.','').slice(0,100) }}`
78. **Merge Image and Post Contents** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
79. **Telegram Success Message (Optional)** `telegram` — text: "Image created successfully", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
80. **Save Image to imgbb.com** `httpRequest` — method: **POST**, url: `https://api.imgbb.com/1/upload`
81. **Save Image to Google Drive** `googleDrive` — name: "={{ $json.output.root_schema.name.replaceAll(' ','-').replaceAll(',','').replaceAll('.','') }}", driveId: "[object Object]", options: "[object Object]"
82. **Telegram Error Message (Optional)** `telegram` — text: "Error creating image (Debugging)", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
83. **Social Media Publishing Router** `switch` — rules: "[object Object]", options: "[object Object]"
84. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
85. **X Post** `twitter` — text: "={{ $json.data.social_content.schema.post }}", additionalFields: "[object Object]"
86. **Instagram Image** `httpRequest` — method: **POST**, url: `https://graph.facebook.com/v20.0/[your-unique-id]/media`
87. **Facebook Post** `facebookGraphApi` — edge: "photos", node: "[your-unique-id]", options: "[object Object]"
88. **LinkedIn Post** `linkedIn` — text: "={{ $json.data.social_content.schema.post }}
{{ $json.data.social_content.schema.call_to_action }}
{{ $json.data.social_content.common_schema.hashtags }}
", postAs: "organization", organization: "12345678"
89. **Implement Threads Here** `noOp` — configured for its default action.
90. **Implement YouTube Shorts Here** `noOp` — configured for its default action.
91. **Prepare Social Media Email Contents** `agent` — text: "=Use the HTML template and populate [fields] as required from this: {{ $('pollinations.ai1').item.json.output.toJsonString() }}
-----
Only output HTML without code block tags, prea…[truncated]", options: "[object Object]", promptType: "define"
92. **Google Drive Image Meta** `set` — options: "[object Object]", assignments: "[object Object]"
93. **X Response** `set` — options: "[object Object]", assignments: "[object Object]"
94. **Instragram Post** `facebookGraphApi` — edge: "media_publish", node: "[your-unique-id]", options: "[object Object]"
95. **Facebook Response** `set` — options: "[object Object]", assignments: "[object Object]"
96. **LinkedIn Response** `set` — options: "[object Object]", assignments: "[object Object]"
97. **Gmail** `gmail` — sendTo: "={{ $env.TELEGRAM_CHAT_ID }}", message: "={{ $json.output }}", options: "[object Object]"
98. **Social Post JSON** `set` — options: "[object Object]", assignments: "[object Object]"
99. **Instagram Response** `set` — options: "[object Object]", assignments: "[object Object]"
100. **Save Social Post to Google Drive** `googleDrive` — operation: **createFromText**
101. **Respond with Google Drive Id** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the creation and publishing of social media content across multiple platforms. It receives a chat message as input, processes the message to generate content tailored for platforms like Twitter, Instagram, Facebook, LinkedIn, Threads, and YouTube Shorts, and routes the content to the respective social media APIs for posting. It includes dynamic content creation, image generation, and approval processes to ensure content quality and consistency.

**Demonstrate:** A business owner can use this workflow to automate social media marketing by automatically generating and posting tailored content on various platforms, saving time and ensuring consistent brand messaging.

**Imitate:** 1. Import the workflow into n8n. 2. Connect your social media accounts. 3. Set up triggers for content creation. 4. Customize content templates for each platform. 5. Test and activate the workflow.

**Practice:** Create a test chat message and run the workflow to see how it generates and routes content to different social media platforms. Adjust the content templates and approval settings to match your brand requirements.

**WIIFM:** Mastering this workflow can help you offer automated social media management services, enhancing your client offerings and generating recurring income. It allows you to efficiently manage multiple clients' social media strategies, increasing your business's scalability and profitability.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, googleDocsOAuth2Api, openAiApi, facebookGraphApi, twitterOAuth2Api.
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
  