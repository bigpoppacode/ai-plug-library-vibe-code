# Code HTTP Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Sticky Note2** `stickyNote` — color: "2", width: "260", height: "1880"
3. **Sticky Note1** `stickyNote` — width: "880", height: "360", content: "## Quick Debug Checking
### I set up quick links to social media to check whether the posting system succeeded or not.  I tried video if possible, if not I used image.  You can als…[truncated]"
4. **Sticky Note** `stickyNote` — width: "880", height: "300", content: "## Current Issues (last updated April 29, 2025)

- Haven't confirmed, but you -have- to post to a FB Page?
- I believe you can only post to a particular Board in Pinterest
- Some E…[truncated]"
5. **Sticky Note3** `stickyNote` — color: "2", width: "150", height: "640"
6. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
7. **Sticky Note4** `stickyNote` — color: "5", width: "320", height: "260"
8. **Sticky Note5** `stickyNote` — width: "580", height: "1880", content: "[redacted]"
9. **Sticky Note6** `stickyNote` — width: "1300", height: "100", content: "[redacted]"
10. **Sticky Note7** `stickyNote` — color: "5", width: "260", height: "620"
11. **Pinterest System (tm)** `formTrigger` — options: "[object Object]", formTitle: "Pinterest System (tm)", formFields: "[object Object]"
12. **Sticky Note8** `stickyNote` — color: "4", width: "660", height: "300"
13. **Airtable Record ID** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Grab Pinterest Board Page** `httpRequest` — url: `={{ $json['Pinterest Board URL'] }}`
15. **Airtable** `airtable` — table: `[object Object]`
16. **Pinterest Page Sleuth** `code` — jsCode: "// n8n Code Node JavaScript

// Get the first item OBJECT using $input.first() or $items[0]
// Let's use $input.first() as it's slightly more modern n8n syntax
const item = $input.…[truncated]"
17. **Ensure Valid YouTube Title** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
18. **Prepare for Publish** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "instagram_id": "2244",
  "youtube_id": "1300",
  "tiktok_id": "2761",
  "facebook_id": "2152",
  "facebook_page_id": "127923797405586",
  "threads_id": "670",
  "twitter_id":…[truncated]"
19. **Upload Image to Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/media`
20. **Upload Video to Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/media`
21. **[Instagram] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
22. **[Facebook] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
23. **[Linkedin] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
24. **[Tiktok] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
25. **[Youtube] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
26. **[Threads] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
27. **[Twitter] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
28. **[Bluesky] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
29. **[Pinterest] Publish via Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
30. **Airtable: Posted Instagram** `airtable` — operation: **update**, table: `[object Object]`
31. **Airtable: Posted Instagram1** `airtable` — operation: **update**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates social media publishing by retrieving content and media URLs from Airtable, preparing them for publishing, and posting them across multiple platforms like Instagram, Facebook, LinkedIn, TikTok, YouTube, and more via the Blotato API. It ensures that all posts are correctly formatted and tracks the publishing status in Airtable.
  
- **Demonstrate:** A digital marketing agency could use this workflow to streamline their clients' social media campaigns, ensuring consistent and timely posts across platforms, thereby saving time and reducing the chance of errors.

- **Imitate:** To apply this workflow, import it into n8n, configure your Airtable with the necessary content, and set up Blotato with your social media credentials. Customize the workflow to match your specific platforms and content needs, and test it to ensure it posts correctly.

- **Practice:** Create a test Airtable base with sample content and media URLs. Run the workflow in a controlled environment to observe how posts are formatted and published across platforms. Adjust the workflow settings to handle different media types or post formats.

- **WIIFM:** Mastering this workflow can help you offer comprehensive social media management services, attracting clients who need efficient and reliable content distribution. This can lead to increased revenue streams and a competitive edge in the digital marketing sector.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, airtableTokenApi, openAiApi.
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
  