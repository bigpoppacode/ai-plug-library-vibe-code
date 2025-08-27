# Comparedatasets Manual Create Triggered
  ## 🚀 What It Does
  Automates a flow using spotify×3, stickyNote×3, set×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "517.7419354838706", height: "654.6451612903234", content: "## Workflow Overview

This workflow automates the process of updating a Spotify playlist with tracks from a YouTube playlist, ensuring no duplicates are added.

## Key Components

…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "251.65748259981103", height: "468.0906115664312"
5. **Sticky Note2** `stickyNote` — color: "6", width: "414.86223899716344", height: "80"
6. **Get my tracks inside my playlist** `youTube` — resource: **playlistItem**, operation: **getAll**
7. **Get tracks inside the Spotify Playlist** `spotify` — resource: **playlist**, operation: **getTracks**
8. **Extract the spotify track ID** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  Could not generate AI recommendations at this time.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** spotifyOAuth2Api, youTubeOAuth2Api.
  
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
  