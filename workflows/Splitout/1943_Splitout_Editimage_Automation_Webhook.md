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
This n8n workflow automates the process of removing backgrounds from images uploaded to a Google Drive folder. It detects new images, downloads them, processes them through an API to remove backgrounds and add padding, and then uploads the modified images back to Google Drive. The workflow allows customization of background color, padding, and output size.

### Demonstrate
A business owner can use this workflow to automatically prepare product images for an e-commerce site, ensuring a consistent look with transparent or colored backgrounds and specific dimensions, saving time on manual editing.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and Photoroom API accounts.
3. Set the Google Drive folder to watch for new images.
4. Configure the background color, padding, and output size in the Config node.
5. Run the workflow to test its functionality.

### Practice
Create a test Google Drive folder with sample images. Set the workflow to watch this folder and observe how it processes and uploads the edited images. Experiment with different background colors and padding settings to see the effects.

### WIIFM
Mastering this workflow can streamline image processing tasks, allowing you to offer automated image editing services to clients. This can enhance your service portfolio, attract e-commerce businesses, and generate additional income through automation solutions.

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
