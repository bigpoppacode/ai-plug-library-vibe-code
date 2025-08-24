# Code Filter Process Triggered

## 🚀 What It Does
This workflow automates a process involving splitInBatches, lmChatOpenAi, toolCalculator.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On Email receipt** node.
2. **Step 1: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Calculator (toolCalculator)** - This step performs a key action in the workflow.
5. **Step 4: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
6. **Step 5: On Email receipt (gmailTrigger)** - This step performs a key action in the workflow.
7. **Step 6: Get Filename and mimeType (code)** - This step performs a key action in the workflow.
8. **Step 7: Filter ZIP files only (filter)** - This step performs a key action in the workflow.
9. **Step 8: Unzip Invoice (compression)** - This step performs a key action in the workflow.
10. **Step 9: Just for style (noOp)** - This step performs a key action in the workflow.
11. **Step 10: Get filename and mimeType on extracted docs (code)** - This step performs a key action in the workflow.
12. **Step 11: Split XML and PDF (switch)** - This step performs a key action in the workflow.
13. **Step 12: Extract PDF Data (extractFromFile)** - This step performs a key action in the workflow.
14. **Step 13: Extract XML Data (extractFromFile)** - This step performs a key action in the workflow.
15. **Step 14: Convert to JSON (xml)** - This step performs a key action in the workflow.
16. **Step 15: Append both Docs (merge)** - This step performs a key action in the workflow.
17. **Step 16: Aggregate all Data into 1 list (aggregate)** - This step performs a key action in the workflow.
18. **Step 17: Extract Data from PDF and XML (agent)** - This step performs a key action in the workflow.
19. **Step 18: Create initial PDF (googleDrive)** - This step performs a key action in the workflow.
20. **Step 19: Merge both flows (merge)** - This step performs a key action in the workflow.
21. **Step 20: Update PDF with actual name (googleDrive)** - This step performs a key action in the workflow.
22. **Step 21: Get Current Date (code)** - This step performs a key action in the workflow.
23. **Step 22: Create or update row (googleSheets)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the processing of Colombian invoices received via email. It extracts data from ZIP files containing PDF and XML formats, validates the data, and stores it in Google Drive and Google Sheets, enhancing efficiency and accuracy.

### Demonstrate
A business owner could use this workflow to automate the handling of electronic invoices, saving time on manual data entry and ensuring compliance with local regulations, thus improving financial management and reducing errors.

### Imitate
1. Set up a Gmail Trigger to monitor for incoming ZIP files.
2. Use a Compression node to extract files.
3. Implement an OpenAI node to analyze invoice data.
4. Store results in Google Sheets for easy access.
5. Schedule the workflow to run regularly for continuous processing.

### Practice
Try creating a simplified version of this workflow that only processes a single invoice type. Focus on extracting data from a PDF file and storing it in a Google Sheet, then gradually add complexity like email triggers and ZIP handling.

### WIIFM
Mastering this workflow allows you to automate tedious tasks, providing value to clients by saving them time and reducing errors. As a result, you can position yourself as a valuable automation consultant, attracting more clients and generating income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Loop Over Items" and "Sticky Note" for IDs, table names, and URLs.
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
