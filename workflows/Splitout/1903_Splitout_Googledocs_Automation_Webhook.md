# Splitout Googledocs Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×6, set×6, manualTrigger.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Sticky Note1** `stickyNote` — color: "4", width: "340", height: "340"
3. **Sticky Note2** `stickyNote` — color: "4", width: "300", height: "300"
4. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
5. **Real Estate Spreadsheet Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
6. **Sticky Note** `stickyNote` — color: "7", width: "700", height: "300"
7. **Sticky Note3** `stickyNote` — color: "7", width: "460", height: "300"
8. **Sticky Note4** `stickyNote` — color: "7", width: "1200", height: "720"
9. **Sticky Note5** `stickyNote` — width: "480", height: "1340", content: "## 🦙👁️👁️ Find the Best Local Ollama Vision Models for Your Use Case

Process images using locally hosted Ollama Vision Models to extract detailed descriptions, contextual insigh…[truncated]"
10. **Google Doc Image Id** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Download Image File from Google Drive** `googleDrive` — operation: **download**
12. **Get Base64 String** `extractFromFile` — operation: **binaryToPropery**
13. **List of Vision Models** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
14. **Split List of Vision Models for Looping** `splitOut` — options: "[object Object]", fieldToSplitOut: "models"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This workflow processes images using locally hosted Ollama Vision Models to extract detailed descriptions and insights. It downloads an image from Google Drive, processes it through multiple vision models to generate markdown-based descriptions, and saves the results to a Google Docs file. This helps in detailed image analysis for applications like real estate, marketing, and research.

- **Demonstrate**: A real estate agent could use this workflow to analyze property images, extracting detailed descriptions and context to enhance listings, providing potential buyers with comprehensive visual information.

- **Imitate**: 
  1. Import the workflow into your n8n instance.
  2. Set up Google Drive and Docs credentials in n8n.
  3. Provide the Google Drive file ID for the image.
  4. Update the list of vision models if needed.
  5. Test the workflow to verify it processes the image and updates Google Docs.

- **Practice**: Try using a different image from your Google Drive. Modify the "General Image Prompt" node to change the analysis structure and observe how it affects the output.

- **WIIFM**: Mastering this workflow allows you to offer image analysis services, adding value for clients in industries like real estate or marketing. It enhances your AI automation business by providing unique insights and improving client decision-making processes.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, googleDocsOAuth2Api.
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
