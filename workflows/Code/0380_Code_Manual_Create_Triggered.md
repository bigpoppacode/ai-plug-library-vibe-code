# Code Manual Create Triggered
  ## 🚀 What It Does
  Automates a flow using googleDrive×2, splitInBatches, merge.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Manual Execute Workflow**.
  2. **Manual Execute Workflow** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1235.0111197082438", height: "545.6382804772701", content: "## Example Output:
```JSON
{
"link": "https://drive.google.com/u/3/uc?id=1hojqPfXchNTY8YRTNkxSo-8txK9re-V4&export=download&confirm=t&authuser=0",
"name": "firefox_rNjA0ybKu7.png",
…[truncated]"
4. **Set Folder ID** `set` — fields: "[object Object]", options: "[object Object]"
5. **Google Drive** `googleDrive` — operation: **list**
6. **Generate Download Links** `code` — jsCode: "// This function will create an array of file links from the given Google Drive folder
return items.map(file => {
  return { json: { 'link': `https://drive.google.com/u/3/uc?id=${f…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of generating public download links for files stored in a Google Drive folder. It lists all files in a specified folder, makes them accessible to anyone with the link, and generates download links for each file, which can be used for sharing or further processing.

- **Demonstrate:** A business owner could use this workflow to easily share large files with clients or partners by generating downloadable links for files stored in their Google Drive, ensuring secure and efficient file distribution.

- **Imitate:** Import the workflow into n8n, connect your Google Drive account, and input your desired folder ID. Run the workflow to list files in the folder, make them public, and generate download links. Customize the workflow to save the links to a database if needed.

- **Practice:** Create a test Google Drive folder and add some files. Run the workflow to see how it generates download links. Check the accessibility of the files using the generated links and adjust permissions as necessary.

- **WIIFM:** Mastering this workflow allows you to offer file sharing automation services, saving clients time and simplifying their file distribution processes. This increases your value proposition and can lead to new revenue streams in your automation business.
  
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
  