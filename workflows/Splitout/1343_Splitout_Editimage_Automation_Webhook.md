# Splitout EditImage Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×4, googleDrive×3, httpRequest×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Watch for new images**.
2. **Sticky Note1** `stickyNote` — color: "5", width: "613.2529601722273", height: "653.6921420882659"
3. **Sticky Note2** `stickyNote` — color: "4", width: "437.4768568353068", height: "395.45317545748134"
4. **Watch for new images** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
5. **Sticky Note3** `stickyNote` — color: "3", width: "160.79224973089333", height: "80"
6. **Sticky Note4** `stickyNote` — color: "3", width: "263.8708288482238", height: "227.27233584499461"
7. **Download Image** `googleDrive` — operation: **download**
8. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get Image Size** `editImage` — operation: **information**
10. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "Geometry"
11. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of removing backgrounds from images uploaded to a specific Google Drive folder. It detects new images, downloads them, and processes them using the Photoroom API to remove backgrounds and add padding. The processed images are then uploaded back to a specified Google Drive folder with a new file name.

### Demonstrate
A product photographer could use this workflow to streamline the editing process by automating background removal for product images, saving time and ensuring consistency across images.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and Photoroom API accounts.
3. Set the Google Drive folder to watch for new images.
4. Configure the output folder and API settings in the workflow.
5. Test the workflow to ensure images are processed and uploaded correctly.

### Practice
Create a test Google Drive folder and upload a few sample images. Run the workflow to observe how images are processed and re-uploaded. Adjust settings like padding and output size to see how they affect the final images.

### WIIFM
Mastering this workflow allows you to offer automated image processing services to clients, enhancing your portfolio and increasing your business's efficiency. This can lead to new service offerings and a competitive edge in the automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
