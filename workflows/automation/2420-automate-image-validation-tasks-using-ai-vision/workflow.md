# Workflow

## 🚀 What It Does
This workflow automates a process involving manualTrigger, outputParserStructured, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
4. **Step 3: Photo URLs (set)** - This step performs a key action in the workflow.
5. **Step 4: Photos To List (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Download Photos (googleDrive)** - This step performs a key action in the workflow.
7. **Step 6: Resize For AI (editImage)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Passport Photo Validator (chainLlm)** - This step performs a key action in the workflow.
12. **Step 11: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the validation of passport photos. It triggers manually, downloads photos from Google Drive, resizes them for AI analysis, and checks their validity against UK government guidelines using AI models. The workflow outputs structured feedback on each photo.

### Demonstrate
A business owner might use this workflow to streamline the passport photo verification process, ensuring compliance with legal standards and enhancing customer experience by providing quicker feedback on photo submissions.

### Imitate
1. Set up a manual trigger in n8n.
2. Use the Google Drive node to fetch photo URLs.
3. Add a split node to process each photo.
4. Download the photos and resize them.
5. Implement an AI model to validate the photos against set criteria.
6. Output the results for each photo.

### Practice
Try modifying the workflow to validate different types of images (e.g., driver’s license photos). Change the AI model prompt and test the workflow with various images to see how it adapts to different criteria.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, streamline their processes, and potentially generate income by developing custom solutions that save time and reduce manual errors in photo validations.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Google Gemini Chat Model" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
