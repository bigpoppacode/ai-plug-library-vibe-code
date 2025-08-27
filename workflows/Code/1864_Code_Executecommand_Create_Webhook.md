# Code Executecommand Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Start AutoClip Workflow**.
  2. **Start AutoClip Workflow** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1100", height: "660", content: "## Data Preparation & File Selection
Retrieve and merge source data for quotes, video backgrounds, and music from Google Sheets and Google Drive; then randomly select one quote, on…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "3", width: "700", height: "660"
5. **Sticky Note2** `stickyNote` — width: "620", height: "660", content: "## Video Upload & Post-Processing
Upload the final video to YouTube using the YouTube API and update your Google Sheets with upload statuses and YouTube links."
6. **Retrieve Quote Data** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
7. **List Video Background Files** `googleDrive` — resource: **fileFolder**
8. **Configure Music Background Folder ID** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Retrieve Video Background Data** `googleSheets` — operation: **append**
10. **List Music Background Files** `googleDrive` — resource: **fileFolder**
11. **Retrieve Music Background Data** `googleSheets` — operation: **append**
12. **Merge File Selection Data** `merge` — numberInputs: "3"
13. **Select Random Video, Music & Quote** `code` — jsCode: "function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Filter items based on unique keys from the merged inputs
const videoItems = items.filter(i…[truncated]"
14. **Download Selected Video Background** `googleDrive` — operation: **download**
15. **Save Video Background Locally** `readWriteFile` — operation: **write**
16. **Download Selected Music Background** `googleDrive` — operation: **download**
17. **Save Music Background Locally** `readWriteFile` — operation: **write**
18. **Prepare Overlay Text (Quote & Author)** `code` — jsCode: "// Define separate configuration for the quote and the author
const quoteFont = "Kanit-Italic.ttf";      // Font for the quote
const quoteFontSize = 70;
const authorFont = "Kanit-I…[truncated]"
19. **Generate Final Video Clip** `executeCommand` — command: "=ffmpeg -i {{ $('Save Video Background Locally').item.json.fileName }} -i {{ $('Save Music Background Locally').item.json.fileName }} -filter_complex "[0:v]scale=1080:1920:force_or…[truncated]"
20. **Initiate YouTube Resumable Upload** `httpRequest` — method: **POST**, url: `=https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status&uploadType=resumable`
21. **Read output file** `readWriteFile` — options: "[object Object]", fileSelector: "=output.mp4"
22. **Upload Video to YouTube** `httpRequest` — method: **PUT**, url: `={{ $('Initiate YouTube Resumable Upload').item.json.headers.location }}`
23. **Update Quote Upload Status** `googleSheets` — operation: **appendOrUpdate**
24. **Mark Background as Used** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the creation and upload of video clips to YouTube. It retrieves quotes, video backgrounds, and music from Google Sheets and Google Drive, randomly selects a set, downloads the files, and combines them into a video clip with overlay text. The final video is uploaded to YouTube, and the status is updated in Google Sheets.

- **Demonstrate:** A content creator could use this workflow to automate the creation of inspirational video clips with quotes and music for their YouTube channel, saving time on manual editing and uploading.

- **Imitate:** To apply this workflow, import it into n8n, connect your Google Sheets, Google Drive, and YouTube accounts. Customize the Google Sheets to include your quotes and media files. Set up a manual or scheduled trigger to run the workflow and test it.

- **Practice:** Create a small dataset in Google Sheets with a few quotes and corresponding video and music files in Google Drive. Run the workflow to generate a video clip and upload it to a test YouTube channel.

- **WIIFM:** Mastering this workflow allows you to offer automated content creation services, enhancing your value proposition as an automation consultant. It can help you attract clients looking to streamline their video production processes, leading to increased income through service offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, googleDriveOAuth2Api, youTubeOAuth2Api.
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
  