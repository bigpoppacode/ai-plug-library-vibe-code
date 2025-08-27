# Odoo Code Import Scheduled
  ## 🚀 What It Does
  Automates a flow using googleDrive×6, odoo×4, extractFromFile×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Click Manual** `manualTrigger` — configured for its default action.
4. **Find Files** `googleDrive` — resource: **fileFolder**
5. **Filter Images** `filter` — options: "[object Object]", conditions: "[object Object]"
6. **Decorate Images** `code` — jsCode: "for (const item of $input.all()) {
    let parts = item.json.name.split('.').slice(0, -1).join('.').split('_');
    item.json.model = parts[0];
    item.json.sku = parts.slice(1).j…[truncated]"
7. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
8. **Move Images** `googleDrive` — operation: **move**
9. **Search Old Images** `googleDrive` — resource: **fileFolder**
10. **Find Templates** `odoo` — resource: **custom**, operation: **getAll**
11. **Find Products** `odoo` — resource: **custom**, operation: **getAll**
12. **Sum Images** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
13. **Drop Old Images** `googleDrive` — operation: **deleteFile**
14. **Download Images Templates** `googleDrive` — operation: **download**
15. **Download Images Products** `googleDrive` — operation: **download**
16. **Announce** `googleChat` — spaceId: "spaces/AAAAt6xI1aY", messageUi: "[object Object]", authentication: "oAuth2"
17. **Convert Base64 Images Templates** `extractFromFile` — operation: **binaryToPropery**
18. **Convert Base64 Images Products** `extractFromFile` — operation: **binaryToPropery**
19. **Update Images Templates** `odoo` — resource: **custom**, operation: **update**
20. **Update Images Products** `odoo` — resource: **custom**, operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of importing product images from Google Drive into Odoo. It starts by finding image files in a specified Google Drive folder, filters them by file type (JPEG or PNG), and decorates them with additional metadata. The images are then categorized as either templates or products using a switch node. Depending on their category, images are downloaded, converted to a suitable format, and updated in Odoo's product or template records. The workflow also manages old images by deleting them and moving processed images to a different folder. Finally, it announces the completion of the process via Google Chat.

**Demonstrate:** A retail business could use this workflow to automate the import of new product images into their Odoo ERP system, ensuring that product listings are always up-to-date with the latest visuals, thereby improving the online shopping experience.

**Imitate:** 1. Import the workflow into n8n. 2. Connect Google Drive and Odoo accounts. 3. Set up a schedule trigger or manual trigger. 4. Configure Google Drive folder IDs and Odoo product/template settings. 5. Test the workflow to ensure images are correctly imported and updated.

**Practice:** Create a test Google Drive folder with sample images and run the workflow. Check how images are processed, moved, and updated in your Odoo instance. Modify file names to test the categorization logic.

**WIIFM:** Mastering this workflow enables you to offer automated product image management services to businesses, enhancing their e-commerce operations. This can help you attract clients looking to streamline their product catalog management, opening up new revenue streams in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, googleChatOAuth2Api, odooApi.
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
  