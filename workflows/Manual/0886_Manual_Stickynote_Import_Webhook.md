# Manual Stickynote Import Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×3, stickyNote×3, set×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "320", height: "200", content: "## Prerequisites
1. [Create an application user](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users)
2. Ensure the following permissions are set:
- Sit…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "320", height: "340", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "440", height: "340", content: "## Set destination
In this step we will set the destination.
The destination is made of two parameters:

- TARGET_FOLDER
- FILE_NAME
---
### Example
Let's say this is our desired f…[truncated]"
6. **Set config (sensitive data)** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Authentication** `httpRequest` — method: **POST**, url: `[redacted]`
8. **Get photo (for testing purposes)** `httpRequest` — url: `https://fastly.picsum.photos/id/459/200/300.jpg?hmac=4Cn5sZqOdpuzOwSTs65XA75xvN-quC4t9rfYYyoTCEI`
9. **Set destination** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
10. **Upload photo** `httpRequest` — method: **PUT**, url: `=https://graph.microsoft.com/v1.0/sites/root/drive/root:{{ $json.TARGET_FOLDER }}/{{ $json.FILE_NAME }}:/content`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of uploading a photo to Microsoft SharePoint. It starts manually, retrieves an access token for authentication, downloads a sample photo, sets the destination path in SharePoint, and uploads the photo to the specified folder. This ensures efficient and automated handling of file uploads to SharePoint.

### Demonstrate
A business owner could use this workflow to automatically upload marketing images to their SharePoint site, ensuring all team members have access to the latest assets without manual uploads.

### Imitate
1. Import the workflow into n8n.
2. Set up your Microsoft Graph API credentials.
3. Modify the `TARGET_FOLDER` and `FILE_NAME` in the Set destination node.
4. Run the workflow manually to test the upload process.
5. Adjust for your specific file upload needs.

### Practice
Create a test workflow using a different file URL and folder path. Observe how the workflow executes and uploads the file to SharePoint. Experiment with different file types and sizes to understand the workflow's flexibility and limitations.

### WIIFM
Mastering this workflow allows you to offer automated file management solutions to clients, reducing manual work and increasing efficiency. This can enhance your service offerings, attract more clients, and generate additional income in the automation space.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  