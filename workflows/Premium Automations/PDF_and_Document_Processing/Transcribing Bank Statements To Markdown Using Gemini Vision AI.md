# Transcribing Bank Statements To Markdown Using Gemini Vision AI

## 🚀 What It Does
This workflow automates a process involving manualTrigger, lmChatGoogleGemini, sort.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
4. **Step 3: Sort Pages (sort)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Get Bank Statement (googleDrive)** - This step performs a key action in the workflow.
7. **Step 6: Split PDF into Images (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Extract Zip File (compression)** - This step performs a key action in the workflow.
9. **Step 8: Images To List (code)** - This step performs a key action in the workflow.
10. **Step 9: Resize Images For AI (editImage)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Combine All Pages (aggregate)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Extract All Deposit Table Rows (informationExtractor)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Transcribe to Markdown (chainLlm)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of converting a bank statement PDF into Markdown, extracting key data like deposit rows using AI, and organizing it for easy access. It involves downloading the PDF, processing it into images, and utilizing AI to transcribe and analyze the content.

### Demonstrate
A business owner might use this workflow to automate financial reporting. Instead of manually extracting data from bank statements, the workflow quickly converts them into a structured format, saving time and reducing errors, which is crucial during tax season.

### Imitate
1. **Set Up n8n**: Install n8n on your server or use the cloud version.
2. **Create a New Workflow**: Start with a manual trigger.
3. **Add Nodes**: Include nodes for downloading the PDF, splitting it into images, and processing with AI.
4. **Configure Each Node**: Set up parameters for Google Drive and AI API keys.
5. **Test the Workflow**: Run the workflow and ensure it converts your sample PDF correctly.

### Practice
Try modifying the workflow to process a different document type, like an invoice PDF. Adjust the AI prompts to extract relevant fields like invoice number or total amount, and see how well it performs.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, helping businesses streamline their financial processes. This skill can lead to finding new clients, generating income, and positioning yourself as an expert in AI-driven automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Transcribe to Markdown" for IDs, table names, and URLs.
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
