# Video Automation  Images Only 
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[
  {
    "scene": {
      "image-prompt": "X",
      "image-to-video-prompt": "X",
      "voiceover-script": "The Master says brush before blade. Every stroke must honor the class…[truncated]"
4. **Sticky Note** `stickyNote` — content: "## Generate Images", height: "320", width: "1260"
5. **Sticky Note2** `stickyNote` — content: "## Generate Audio", height: "340", width: "1260"
6. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
7. **Google Sheets** `googleSheets` — documentId: "[object Object]", sheetName: "[object Object]", filtersUI: "[object Object]"
8. **Google Drive** `googleDrive` — resource: **folder**
9. **Edit Fields** `set` — assignments: "[object Object]", options: "[object Object]"
10. **Google Drive2** `googleDrive` — resource: **folder**, operation: **share**
11. **Basic LLM Chain** `chainLlm` — promptType: "=define", text: "=You are a master at creating short-form viral videos. I want your help in generating historical POV videos, in which the user sees POV-style images of an individual throughout a m…[truncated]", hasOutputParser: "true"
12. **Split Out** `splitOut` — fieldToSplitOut: "output", options: "[object Object]"
13. **HTTP Request** `httpRequest` — method: **POST**, url: `https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions`
14. **Wait** `wait` — amount: "7"
15. **HTTP Request1** `httpRequest` — url: `={{ $json.urls.get }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This workflow automates the creation of historical POV-style videos using AI. It pulls data from Google Sheets, generates images and audio based on historical prompts, and assembles them into a video. The workflow schedules tasks, uses OpenAI for script generation, and manages files via Google Drive.

- **Demonstrate**: A content creator could use this workflow to produce educational videos about historical events, saving time on video production and allowing for consistent output quality across multiple projects.

- **Imitate**: To adapt this workflow, connect your Google Sheets and Google Drive accounts in n8n. Define your video themes and topics in a Google Sheet. Set up the workflow to trigger based on your schedule. Test with sample data to ensure images and audio are generated correctly.

- **Practice**: Create a sample project in Google Sheets with historical events. Set up the workflow to generate a video for one event, checking each step's output for accuracy. Adjust prompts and settings to refine the final video quality.

- **WIIFM**: Mastering this workflow enables you to offer automated video content production services, attracting clients seeking efficient and creative content solutions. It can enhance your portfolio, increase business opportunities, and generate income through AI-driven automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, googleSheetsOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
  