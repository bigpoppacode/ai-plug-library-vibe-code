# Splitout Code Create Scheduled
## 🚀 What It Does
Automates a flow using spotify×7, stickyNote×6, if×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note1** `stickyNote` — width: "251.77358490566033", height: "334.6415094339622", content: "## Set Globals
Define the `download_limit` of how many songs should be kept in the Downloads playlist.
*This setup currently supports a maximum of 50.*"
4. **Sticky Note2** `stickyNote` — width: "251.77358490566033", height: "334.6415094339622", content: "## Setup Trigger
Define the update interval. By default the playlist gets updated ones a day."
5. **Sticky Note** `stickyNote` — color: "5", width: "511.919459860262", height: "227.98938005910577"
6. **Sticky Note3** `stickyNote` — color: "7", width: "1535.0943396226407", height: "509.28301886792553"
7. **Sticky Note4** `stickyNote` — color: "7", width: "435.1879320261786", height: "247.95572576973242"
8. **Sticky Note5** `stickyNote` — color: "7", width: "955.93368580286", height: "452.51466620839244"
9. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automatically manages a Spotify playlist named "Downloads." It checks if the playlist exists and creates it if not. It updates the playlist daily to include the latest liked songs up to a specified limit (default is 50). It adds new liked tracks and removes the oldest ones if the playlist exceeds the limit, ensuring your playlist always contains your most recent favorite tracks.

**Demonstrate:**  
A music enthusiast wants their Spotify "Downloads" playlist to always reflect their most current favorite songs, up to 50 tracks. This workflow automates that, saving them time from manually updating their playlist daily.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Spotify account.
3. Set the schedule trigger for daily updates.
4. Adjust the `download_limit` in the Globals node if needed.
5. Test the workflow to ensure it updates the playlist as desired.

**Practice:**  
Create a Spotify playlist named "Test Downloads" and add some random songs. Run the workflow and see how it updates the playlist, adding new liked songs and removing the oldest ones to maintain the set limit.

**WIIFM:**  
Mastering this workflow can help you offer personalized music curation services, attracting music lovers who want hassle-free playlist management. This can open up opportunities for subscription-based services, adding value to your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** spotifyOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
