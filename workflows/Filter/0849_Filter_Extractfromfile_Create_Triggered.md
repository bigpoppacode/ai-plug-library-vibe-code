# Filter Extractfromfile Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Sticky Note** `stickyNote` — color: "4", width: "260", height: "440"
5. **Sticky Note1** `stickyNote` — color: "5", height: "360", content: "## Create an empty google sheet file

That will get your entries from the notes "
6. **Sticky Note2** `stickyNote` — color: "5", height: "360", content: "## Set the directory Where you put the files"
7. **Sticky Note3** `stickyNote` — color: "5", height: "360", content: "## Filter the files

If you need the content to contain a word, or after a certain date.

If you don't need to filter it, just remove the node"
8. **Sticky Note4** `stickyNote` — color: "5", width: "320", height: "560"
9. **Sticky Note5** `stickyNote` — color: "4", width: "380", height: "300"
10. **Sticky Note6** `stickyNote` — width: "720", height: "100", content: "## Contact me
### If you need some help with this workflow: Write to me: [thomas@pollup.net](mailto:thomas@pollup.net)
"
11. **Search in "Keep" folder** `googleDrive` — resource: **fileFolder**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow automates the process of organizing Google Keep notes. It starts by manually triggering the workflow, then searches for files in a designated Google Drive folder. It filters for JSON files, downloads them, and checks if each note is archived. If not archived, it processes the notes using AI to extract specific data (like amounts in euros) and organizes the extracted data into a Google Sheet for easy access and analysis.

**Demonstrate:** A consultant could use this workflow to manage client notes stored in Google Keep, automatically filtering and extracting key financial details for reporting or billing purposes. This saves time and ensures accuracy in data handling.

**Imitate:** 
1. Set up Google Drive, OpenAI, and Google Sheets in n8n.
2. Create a Google Drive folder and upload JSON files of your notes.
3. Import the workflow and configure the folder path in the "Search in 'Keep' folder" node.
4. Run the workflow to test and ensure data is accurately processed and added to the Google Sheet.

**Practice:** Create a small Google Keep note, export it using Google Takeout, and upload the JSON file to your Google Drive. Run the workflow to see how it processes and extracts data into your Google Sheet. Adjust filters and AI processing as needed.

**WIIFM:** Mastering this workflow can help you offer efficient note management services, enhancing productivity for your clients. By automating data extraction, you can provide valuable insights, improve client satisfaction, and potentially increase your service offerings and income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  