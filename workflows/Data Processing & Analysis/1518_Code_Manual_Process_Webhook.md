# Code Manual Process Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, googleSheets.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Set API KEY (set)** - This step performs a key action in the workflow.
4. **Step 3: Get images (googleSheets)** - This step performs a key action in the workflow.
5. **Step 4: Get extension (code)** - This step performs a key action in the workflow.
6. **Step 5: JPG or PNG? (switch)** - This step performs a key action in the workflow.
7. **Step 6: From JPG to WEBP (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: PNG to WEBP (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Update Sheet (googleSheets)** - This step performs a key action in the workflow.
10. **Step 9: Get file image (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Upload image (googleDrive)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the conversion of images from JPG/PNG formats to WEBP. It retrieves image URLs from a Google Sheet, checks the image format, converts them using an external API, and uploads the converted files to Google Drive while updating the spreadsheet.

### Demonstrate
A graphic designer may use this workflow to save time by automatically converting image formats for web use. Instead of manually converting each file, the designer can run this workflow to process multiple images from a Google Sheet in one go, ensuring faster delivery to clients.

### Imitate
1. Set up a manual trigger in n8n.
2. Use the Set node to input your API key.
3. Add a Google Sheets node to fetch image URLs.
4. Use a code node to extract file extensions.
5. Implement a switch node to determine if the file is JPG or PNG.
6. Use HTTP request nodes to convert JPG/PNG to WEBP.
7. Update your Google Sheet with the new file links.
8. Upload the converted images to Google Drive.

### Practice
Create a test Google Sheet with image URLs in JPG and PNG formats. Run the workflow to see if it successfully converts and uploads the images to your Google Drive. Modify the API key and image URLs to ensure adaptability.

### WIIFM
Mastering this workflow allows you to provide valuable automation services, reducing time spent on repetitive tasks. This can help you attract clients in need of efficient image handling solutions, ultimately generating income by offering tailored automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note1" for IDs, table names, and URLs.
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
