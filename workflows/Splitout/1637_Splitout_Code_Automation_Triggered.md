# Splitout Code Automation Triggered
## 🚀 What It Does
Automates a flow using googleDrive×2, splitOut×2, googleDriveTrigger.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Google Drive Trigger**.
2. **Google Drive Trigger** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
3. **Sticky Note** `stickyNote` — height: "260", content: "## Remove PII from CSV Files
This workflow monitors a Google Drive folder for new CSV files, identifies and removes PII columns using OpenAI, and uploads the sanitized file back to…[truncated]"
4. **Get filename** `splitOut` — options: "[object Object]", fieldToSplitOut: "name"
5. **Google Drive** `googleDrive` — operation: **download**
6. **Extract from File** `extractFromFile` — options: "[object Object]"
7. **OpenAI** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
8. **Get result** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.content"
9. **Merge** `merge` — numberInputs: "3"
10. **Remove PII columns** `code` — jsCode: "// Input: All items from the previous node
const input = $input.all();

// Step 1: Extract the PII column names from the first item
const firstItem = input[0];
if (!firstItem.json.…[truncated]"
11. **Upload to Drive** `googleDrive` — operation: **createFromText**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of sanitizing CSV files by removing Personally Identifiable Information (PII). It monitors a specified folder in Google Drive for new CSV files, downloads them, identifies PII columns using OpenAI, removes these columns, and uploads the sanitized files back to Google Drive. This ensures that sensitive data is not stored or shared inappropriately.

**Demonstrate**  
A business could use this workflow to ensure that any client data shared internally or externally is free from PII, thus complying with data protection regulations and maintaining client trust.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Google Drive and OpenAI accounts.  
3. Set the folder to monitor in Google Drive.  
4. Test the workflow with a CSV file containing PII.  
5. Ensure the sanitized file is correctly uploaded back to Drive.

**Practice**  
Create a CSV file with sample data including PII. Place it in the monitored Google Drive folder. Run the workflow and check if the sanitized file correctly has PII removed. Modify the file to test different scenarios.

**WIIFM**  
By mastering this workflow, you can offer data sanitization services to businesses, ensuring compliance with data protection laws. This can increase your service offerings, help find customers needing data security solutions, and generate income in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi.

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
