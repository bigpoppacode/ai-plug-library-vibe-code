# Code HTTP Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Start Workflow**.
  2. **Sticky Note2** `stickyNote` — width: "300", height: "600", content: "### Prompt Options

- **default**: Summarizes the video with emphasis on actionable insights, tools, strategies, and resources mentioned.

- **transcribe**: Provides verbatim trans…[truncated]"
3. **Sticky Note** `stickyNote` — color: "7", width: "300", height: "300"
4. **Sticky Note4** `stickyNote` — color: "3", width: "300", height: "300"
5. **Sticky Note5** `stickyNote` — color: "3", width: "300", height: "300"
6. **Sticky Note7** `stickyNote` — color: "7", width: "300", height: "300"
7. **Sticky Note8** `stickyNote` — color: "7", width: "300", height: "300"
8. **Sticky Note9** `stickyNote` — color: "7", width: "300", height: "300"
9. **Sticky Note10** `stickyNote` — color: "7", width: "300", height: "300"
10. **Sticky Note1** `stickyNote` — color: "4", width: "300", height: "300"
11. **Sticky Note3** `stickyNote` — color: "5", width: "300", height: "100"
12. **Sticky Note6** `stickyNote` — color: "5", width: "300", height: "100"
13. **Sticky Note11** `stickyNote` — color: "7", width: "300", height: "300"
14. **Sticky Note12** `stickyNote` — color: "7", width: "300", height: "300"
15. **Sticky Note13** `stickyNote` — color: "7", width: "300", height: "300"
16. **Sticky Note14** `stickyNote` — color: "4", width: "300", height: "300"
17. **Sticky Note15** `stickyNote` — color: "7", width: "2080", height: "1660"
18. **Start Workflow** `formTrigger` — options: "[object Object]", formTitle: "Extract Information from YouTube Videos", formFields: "[object Object]"
19. **Sticky Note16** `stickyNote` — color: "3", width: "300", height: "300"
20. **Sticky Note17** `stickyNote` — color: "7", width: "300", height: "300"
21. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Create YouTube API URL** `code` — jsCode: "[redacted]"
23. **Define Audience Meta Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Get YouTube Video Details** `httpRequest` — url: `={{ $json.youtubeUrl }}`
25. **Get Video Audience MetaData** `httpRequest` — method: **POST**, url: `[redacted]`
26. **Extract MetaData Object** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
28. **Compose Prompts** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Get Prompt by Prompt Type** `code` — jsCode: "// Get the XML content from the input
const xmlContent = $input.first().json.content;

// Get the tag name from the Config node
const tagName = $node["Config"].json.prompt_type;

/…[truncated]"
30. **Get YouTube Information by Prompt Type** `httpRequest` — method: **POST**, url: `[redacted]`
31. **Convert Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.candidates[0].content.parts[0].text }}"
32. **Save to Google Drive as Text File** `googleDrive` — operation: **createFromText**
33. **Send to Gmail as HTML** `gmail` — sendTo: "={{ $env.EMAIL_ADDRESS_JOE }}", message: "=<p>{{ $('Merge').item.json.items[0].snippet.title }}</p>
<p>{{ $('Merge').item.json.items[0].id }}</p>

<img src="{{ $('Merge').item.json.items[0].snippet.thumbnails.medium.url }}…[truncated]", options: "[object Object]"
34. **Provide YouTube Information to User as HTML** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow analyzes YouTube videos to extract and process information like summaries, transcripts, and audience insights. It uses various prompts to generate different types of outputs, such as summaries or detailed descriptions, and can save or email the results for further use.
  
- **Demonstrate:** A content creator might use this workflow to quickly generate summaries of their YouTube videos, helping them to create blog posts or social media content that highlights key points and engages their audience.

- **Imitate:** Import the workflow into n8n, connect your YouTube API, set up Google Drive and Gmail integrations, and configure the prompts you want to use. Test the workflow with a sample video to ensure it generates the desired outputs.

- **Practice:** Use a YouTube video of your choice and run the workflow to generate a summary. Compare the output with the original video to evaluate the accuracy and usefulness of the generated content.

- **WIIFM:** Mastering this workflow allows you to offer video content analysis services, expanding your offerings in the AI automation field. This skill can help attract clients looking to optimize their video content strategy, leading to new business opportunities and revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, gmailOAuth2.
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
  