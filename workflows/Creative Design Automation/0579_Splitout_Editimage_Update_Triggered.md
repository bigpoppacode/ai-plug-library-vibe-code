# Splitout EditImage Update Triggered

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
This n8n workflow automates the process of validating passport photos by downloading images from Google Drive, resizing them, and then using AI to check if they meet UK government guidelines.

### Demonstrate
A business owner in photography or a consultancy could use this workflow to streamline passport photo validation. By automating the process, they save time and ensure compliance with official standards, improving service efficiency.

### Imitate
1. Set up a manual trigger to start the workflow.
2. Use the structured output parser to define input schemas.
3. Create an array of photo URLs using the set node.
4. Download photos from Google Drive.
5. Resize images for AI analysis.
6. Validate using an AI model and output results.

### Practice
Try modifying the workflow to validate a different type of photo (e.g., driver’s license). Change the AI validation criteria and test the new setup to see how it adapts.

### WIIFM
Mastering this workflow helps automate tedious tasks, enhancing service offerings and reducing operational costs. This positions you as a valuable partner, attracting more clients and increasing revenue in the AI automation space.

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
