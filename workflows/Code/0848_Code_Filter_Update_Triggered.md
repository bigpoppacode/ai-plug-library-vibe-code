# Code Filter Update Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, googleDrive×3, set×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Google Drive Trigger**.
  2. **Sticky Note5** `stickyNote` — color: "5", width: "440", height: "800"
3. **Sticky Note6** `stickyNote` — color: "7", width: "320", height: "500"
4. **Google Drive Trigger** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "320", height: "500"
6. **Sticky Note7** `stickyNote` — color: "5", width: "440", height: "800"
7. **Sticky Note1** `stickyNote` — color: "7", width: "540", height: "220"
8. **Sticky Note2** `stickyNote` — color: "7", width: "360", height: "240"
9. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Working Folder** `googleDrive` — resource: **fileFolder**
11. **Drop Google Apps files** `filter` — options: "[object Object]", conditions: "[object Object]"
12. **Keep First/Last** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Deduplicate Keep Last** `code` — jsCode: "// Sort files by creation time (latest first)
const sorted = items.sort((a, b) => 
  new Date(b.json.createdTime) - new Date(a.json.createdTime));

const seen = {};
for (const item…[truncated]"
14. **Deduplicate Keep First** `code` — jsCode: "// Sort files by creation time (oldest first)
const sorted = items.sort((a, b) => 
  new Date(a.json.createdTime) - new Date(b.json.createdTime));

const seen = {};
for (const item…[truncated]"
15. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
17. **Trash/Flag Duplicates** `switch` — rules: "[object Object]", options: "[object Object]"
18. **Send Duplicates to Trash** `googleDrive` — operation: **deleteFile**
19. **Is Flagged** `if` — options: "[object Object]", conditions: "[object Object]"
20. **No Operation, do nothing** `noOp` — configured for its default action.
21. **Google Drive** `googleDrive` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow monitors a specified Google Drive folder for newly created files. It identifies duplicate files based on their content and either moves them to the trash or flags them by renaming with a "DUPLICATE-" prefix. This ensures the folder remains organized and free from redundant files.
  
- **Demonstrate:** A business owner could use this workflow to automatically manage files in a shared Google Drive folder, ensuring that only the latest versions are kept, reducing clutter, and maintaining an efficient file system for team collaboration.

- **Imitate:** 
  1. Import the workflow into your n8n instance.
  2. Connect your Google Drive account.
  3. Configure the Google Drive Trigger to monitor a specific folder.
  4. Set the "keep" parameter to "first" or "last" and the "action" parameter to "trash" or "flag".
  5. Test the workflow with sample files to ensure it functions as expected.

- **Practice:** Create a test folder in Google Drive and upload several duplicate files. Run the workflow to see how it processes duplicates. Experiment with different "keep" and "action" settings to understand their effects.

- **WIIFM:** Mastering this workflow allows you to offer a valuable service to clients who need efficient file management systems. This can help you expand your automation business by providing solutions that save time, reduce errors, and enhance productivity for organizations.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api.
  
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
  