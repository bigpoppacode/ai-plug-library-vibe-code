# Splitout EditImage Automate Triggered

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
This n8n workflow automates the validation of passport photos by using AI to check if images meet specific criteria set by the UK government. It handles downloading, resizing, and validating the images, making the process efficient and consistent.

### Demonstrate
A photographer can use this workflow to automatically validate client passport photos before submission. By ensuring images meet legal requirements, they save time and reduce the chances of rejection, enhancing customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up a Manual Trigger to start the process.
3. Input photo URLs in the "Photo URLs" node.
4. Download images with the "Download Photos" node.
5. Resize images using the "Resize For AI" node.
6. Validate with the "Passport Photo Validator" node.
7. Review outputs and make adjustments as needed.

### Practice
Try modifying the "Photo URLs" section to include your own images, then run the workflow. Observe how the AI validation outputs differ based on the images you provide, reinforcing understanding of automation.

### WIIFM
Mastering this workflow allows you to offer valuable photo validation services, especially for photographers and businesses requiring compliance with photo regulations. This can create new revenue streams and enhance client satisfaction through faster processing.

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
