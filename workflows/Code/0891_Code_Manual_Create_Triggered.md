# Code Manual Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, code×3, set×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — width: "480", height: "880", content: "# Create Google Drive Folders by Path
This workflow created nested Google Drive folder from a path string and returns the ID of the final folder for immediate use.

Use this workfl…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "5", width: "500", height: "80"
6. **Sticky Note2** `stickyNote` — color: "5", width: "500", height: "120"
7. **Sticky Note3** `stickyNote` — color: "5", width: "1320", height: "120"
8. **Sticky Note4** `stickyNote` — color: "5", width: "280", height: "120"
9. **Dummy input data** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Split the desired path** `code` — mode: "runOnceForEachItem", jsCode: "// Add a new field called 'myNewField' to the JSON of the item
$input.item.json.desired_path = $input.item.json.desired_path.split('/');

return $input.item;"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the creation of nested Google Drive folders based on a specified path. It takes a path string and splits it into individual folder names, checking if each folder exists in Google Drive. If a folder doesn't exist, it creates it. This process continues until all folders in the path are created. Finally, it returns the ID of the last folder created, allowing for immediate use in other workflows.

**Demonstrate**  
A consultant could use this workflow to automatically organize client files in Google Drive, ensuring a consistent folder structure for each new project. This saves time and reduces errors in folder organization.

**Imitate**  
1. Import the workflow into your n8n instance.  
2. Connect your Google Drive account.  
3. Set the `desired_path` and `google_drive_folder_id` in the input data node.  
4. Run the workflow to test folder creation.  
5. Adjust the path as needed for your specific use case.

**Practice**  
Create a test path like `ClientA/2023/ProjectX` in your input data and run the workflow. Verify that the folders are created in Google Drive. Modify the path to see how the workflow handles different structures.

**WIIFM**  
Mastering this workflow enables you to offer automated file organization as a service, enhancing efficiency for businesses. It can attract clients looking to streamline their digital file management, increasing your service offerings and potential income.
  
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
  