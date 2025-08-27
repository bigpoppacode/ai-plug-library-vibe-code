# Splitout EditImage Automate Triggered
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
 "description": "describe the appearance of the person(s), obj…[truncated]"
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
### Explain
This n8n workflow automates the process of validating passport photos. It downloads portrait images from Google Drive, resizes them, and uses an AI model to assess if they meet UK passport photo standards. The AI evaluates the photos based on criteria like focus, color, and background, and provides structured feedback on their validity.

### Demonstrate
A photography studio could use this workflow to ensure passport photos meet official standards before submitting them to clients, reducing the risk of rejections and improving customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and AI model accounts.
3. Set up a trigger to start the workflow.
4. Customize the photo URLs and validation criteria as needed.
5. Test the workflow with sample photos to ensure accurate validation.

### Practice
Create a test Google Drive folder with sample portrait images. Run the workflow to validate these images, checking if the AI correctly identifies valid and invalid photos. Modify some images to see how the workflow responds to changes.

### WIIFM
Mastering this workflow allows you to offer automated photo validation services, adding value to photography or document services. It can streamline operations, reduce manual checks, and enhance service offerings, potentially increasing revenue and client satisfaction.

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
