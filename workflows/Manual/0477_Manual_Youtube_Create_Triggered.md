# Manual Youtube Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, set×2, youTube×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Trigger Workflow**.
  2. **Sticky Note1** `stickyNote` — color: "6", width: "275.01592825011585", height: "313.3780970521015"
3. **Trigger Workflow** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — color: "7", width: "202.64787116404852", height: "85.79488430601403"
5. **Sticky Note2** `stickyNote` — color: "6", width: "372", height: "120.19860141384585"
6. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
7. **List all videos** `youTube` — resource: **video**
8. **Generate Description** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: ""
9. **Check if has changed** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Update Description** `youTube` — resource: **video**, operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of updating YouTube video descriptions. It starts manually, retrieves a list of all videos from a YouTube account, generates a new description by appending a predefined text to the existing description, checks if the description has changed, and updates it if necessary. This ensures that all videos have consistent and updated descriptions.

- **Demonstrate:** A YouTuber could use this workflow to swiftly update all their video descriptions with new promotional text or links, ensuring uniformity across their channel without manually editing each video.

- **Imitate:** Import the workflow into your n8n, connect your YouTube account, define the text to append in the Config node, and run the workflow. Customize the text and delimiter to suit your needs and ensure your YouTube credentials are correctly set up.

- **Practice:** Create a test YouTube channel with a few videos. Use the workflow to append a promotional message to each description. Check to see how the workflow updates the descriptions and adjust the text or delimiter as needed.

- **WIIFM:** Mastering this workflow enables you to offer YouTube channel optimization services, helping creators maintain updated and consistent video descriptions. This can enhance their branding and improve viewer engagement, providing a valuable service to potential clients.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** youTubeOAuth2Api.
  
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
  