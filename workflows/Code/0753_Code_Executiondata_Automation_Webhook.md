# Code Executiondata Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "3", width: "180", content: "## Define your SETTINGS here"
4. **Sticky Note1** `stickyNote` — color: "5", width: "840", content: "## This is where the magic happens... "
5. **Global SETTINGS** `set` — options: "[object Object]", assignments: "[object Object]"
6. **RANDOM Camera Motion** `code` — jsCode: "const items = [
  "Static",
  "Move Left",
  "Move Right",
  "Move Up",
  "Move Down",
  "Push In",
  "Pull Out",
  "Zoom In",
  "Zoom Out",
  "Pan Left",
  "Pan Right",
  "Orbit L…[truncated]"
7. **Text 2 Video** `httpRequest` — method: **POST**, url: `https://api.lumalabs.ai/dream-machine/v1/generations`
8. **Execution Data** `executionData` — configured for its default action.
9. **ADD Video Info** `airtable` — operation: **create**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow generates a video based on a text prompt, with a randomly selected camera motion, and records the output data in Airtable. It starts with a manual trigger, sets global settings for video parameters, selects a random camera motion, sends a request to the Luma AI API to generate the video, logs the execution data, and finally updates an Airtable table with video details.

**Demonstrate:**  
A video production company could use this workflow to automate the creation of video content for social media, applying random camera motions to add variety and storing the results for easy access and review.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Luma AI and Airtable credentials.
3. Define video settings like aspect ratio and prompt in the `Global SETTINGS`.
4. Run the workflow manually to test the video generation process.
5. Check Airtable to verify video details are recorded correctly.

**Practice:**  
Create a test setup with a sample Airtable base and run the workflow. Experiment with different prompts and observe how the camera motion impacts the video output. Modify the settings to see how changes affect the final video.

**WIIFM:**  
Mastering this workflow enables you to offer automated video generation services, enhancing your content creation capabilities. This can attract clients seeking unique video content, leading to increased revenue and client satisfaction in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, airtableTokenApi.
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
  