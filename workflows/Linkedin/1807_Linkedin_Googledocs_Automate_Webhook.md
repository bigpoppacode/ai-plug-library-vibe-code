# Linkedin Googledocs Automate Webhook
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
23. **pollinations.ai1** `httpRequest` — url: `=https://image.pollinations.ai/prompt/{{ $json.output.common_schema.image_suggestion.replaceAll(' ','-').replaceAll(',','').replaceAll('.','').slice(0,100) }}`
24. **Sticky Note26** `stickyNote` — color: "7", width: "300", height: "340"
25. **Sticky Note41** `stickyNote` — width: "340", height: "180", content: "💡Notes

Update all Social Media Platform Credentials as required.

Adjust parameters and content for each platform to suit your needs."
26. **Sticky Note42** `stickyNote` — color: "4", width: "400", height: "360"
27. **Sticky Note** `stickyNote` — color: "7", width: "1120", height: "640"
28. **gpt-40-mini** `lmChatOpenAi` — model: `[object Object]`
29. **Instagram Image** `httpRequest` — method: **POST**, url: `https://graph.facebook.com/v20.0/[your-unique-id]/media`
30. **X Post** `twitter` — text: "={{ $json.data.social_content.schema.post }}", additionalFields: "[object Object]"
31. **Facebook Post** `facebookGraphApi` — edge: "photos", node: "[your-unique-id]", options: "[object Object]"
32. **LinkedIn Post** `linkedIn` — text: "={{ $json.data.social_content.schema.post }}
{{ $json.data.social_content.schema.call_to_action }}
{{ $json.data.social_content.common_schema.hashtags }}
", postAs: "organization", organization: "12345678"
33. **Gmail User for Approval** `gmail` — operation: **sendAndWait**
34. **Get Social Post Image** `httpRequest` — url: `={{ $('Extract as JSON').item.json.data.social_image.medium.url }}`
35. **gpt-40-mini1** `lmChatOpenAi` — model: `[object Object]`
36. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
37. **Sticky Note1** `stickyNote` — color: "5", width: "760", height: "1540"
38. **Sticky Note2** `stickyNote` — color: "3", height: "1540", content: "<common>
{
    "type": "object",
    "properties": {
        "hashtags": {
            "type": "array",
            "items": {
                "type": "string"
            }
      …[truncated]"
39. **Sticky Note3** `stickyNote` — color: "5", width: "260", height: "240"
40. **Sticky Note4** `stickyNote` — color: "3", width: "260", height: "240"
41. **Compose Prompt & Schema** `set` — options: "[object Object]", assignments: "[object Object]"
42. **Sticky Note5** `stickyNote` — color: "7", width: "1100", height: "1760"
43. **Prepare Social Media Email Contents** `agent` — text: "=Use the HTML template and populate [fields] as required from this: {{ $('pollinations.ai1').item.json.output.toJsonString() }}
-----
Only output HTML without code block tags, prea…[truncated]", options: "[object Object]", promptType: "define"
44. **Sticky Note43** `stickyNote` — height: "500", content: "💡Notes

- Create Google Doc for the Social Media Schema and copy the provided schema.

- Update the Google Doc ID in the Social Media Schema node.

- Create Google Doc for the Soc…[truncated]"
45. **Sticky Note44** `stickyNote` — width: "300", content: "💡Notes

Replace pollinations.ai with any online image generation service that produces an image file you can download."
46. **Sticky Note45** `stickyNote` — width: "400", height: "140", content: "💡Notes

Replace Chat model with other LLMs and test out the results.  Add more tools or try other web search tools to suit your use case."
47. **gpt-4o** `lmChatOpenAi` — model: `[object Object]`
48. **Social Media System Prompt** `googleDocs` — operation: **get**
49. **Social Media Schema** `googleDocs` — operation: **get**
50. **Save Image to imgbb.com** `httpRequest` — method: **POST**, url: `https://api.imgbb.com/1/upload`
51. **Instragram Post** `facebookGraphApi` — edge: "media_publish", node: "[your-unique-id]", options: "[object Object]"
52. **Social Media Content Creator** `agent` — text: "=Social Media Platform: {{ $json.route }}
User Prompt: {{ $json.user_prompt }}
", options: "[object Object]", promptType: "define"
53. **Gmail** `gmail` — sendTo: "={{ $env.TELEGRAM_CHAT_ID }}", message: "={{ $json.output }}", options: "[object Object]"
54. **System Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
55. **Schema** `set` — options: "[object Object]", assignments: "[object Object]"
56. **Parse System Prompt** `code` — jsCode: "// Get the input data from previous node
const inputData = $input.first().json;
const xmlString = inputData.system_prompt;

// Function to extract all content between XML tags
func…[truncated]"
57. **Parse Schema** `code` — jsCode: "// Get the input data from previous node
const inputData = $input.first().json;
const xmlString = inputData.schema;

console.log(inputData)

// Function to extract content between …[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates social media content creation and posting across multiple platforms like Twitter, Instagram, Facebook, LinkedIn, Threads, and YouTube Shorts. It uses AI to generate content tailored to each platform's style and audience, verifies it, and posts it, ensuring consistent and engaging social media presence.

### Demonstrate
A business owner could use this workflow to maintain an active social media presence without spending hours crafting posts. It ensures consistent messaging and branding across platforms, which is crucial for customer engagement and brand awareness.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your social media accounts and configure the necessary credentials.
3. Set up triggers to initiate the workflow, such as new chat messages or scheduled times.
4. Customize content styles and templates for each platform.
5. Test the workflow to ensure correct content generation and posting.

### Practice
Create a sample social media campaign using this workflow. Develop posts for a specific event or product launch across multiple platforms. Observe how AI-generated content aligns with your brand voice and makes adjustments as needed.

### WIIFM
Mastering this workflow enables you to offer social media automation services, saving clients time and ensuring active engagement. This can enhance your service offerings, attract new clients, and generate additional revenue streams in the automation business.
  
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
  