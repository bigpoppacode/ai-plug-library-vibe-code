# Splitout EditImage Update Triggered
## 🚀 What It Does
Automates a flow using stickyNote×3, manualTrigger, outputParserStructured.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"is_valid": { "type": "boolean" },
        "photo_description": {
          "type": "string",
          "description": "describe the appeara…[truncated]"
4. **Sticky Note** `stickyNote` — color: "7", width: "594", height: "438"
5. **Sticky Note1** `stickyNote` — color: "7", width: "774", height: "589.25"
6. **Sticky Note2** `stickyNote` — width: "386", height: "610.0104651162792", content: "## Try It Out!

### This workflow takes a portrait and verifies if it makes for a valid passport photo. It achieves this by using an AI vision model following the UK government gui…[truncated]"
7. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-latest"
8. **Photo URLs** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Photos To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
10. **Download Photos** `googleDrive` — operation: **download**
11. **Resize For AI** `editImage` — operation: **resize**
12. **Passport Photo Validator** `chainLlm` — text: "Assess if the image is a valid according to the passport photo criteria as set by the UK Government.", messages: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the verification of passport photos against UK government standards using AI. It downloads photos from Google Drive, resizes them, and assesses their validity with an AI model. The AI checks criteria like clarity and background, providing feedback on the photo's suitability for a passport.

- **Demonstrate:** A travel agency could use this workflow to streamline their passport application process by ensuring all client photos meet official requirements before submission, reducing rejections and saving time.

- **Imitate:** Import the workflow into your n8n instance. Connect your Google Drive and AI accounts. Set up a Google Drive folder with photos to be verified. Run the workflow to download, resize, and validate these photos, receiving feedback on their passport suitability.

- **Practice:** Create a Google Drive folder with various photos. Run the workflow to see how it assesses each photo's validity. Adjust the photos based on feedback, then re-run to see if changes meet the criteria.

- **WIIFM:** Mastering this workflow allows you to offer a valuable service in verifying passport photos, reducing application errors and enhancing client satisfaction. This can differentiate your business and increase revenue opportunities in the travel and documentation sectors.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, googlePalmApi.

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
