# Wait Splitout Create Webhook

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, code, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Capture Frames (code)** - This step performs a key action in the workflow.
4. **Step 3: Split Out Frames (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Download Video (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Convert to Binary (convertToFile)** - This step performs a key action in the workflow.
7. **Step 6: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
8. **Step 7: Combine Script (aggregate)** - This step performs a key action in the workflow.
9. **Step 8: Upload to GDrive (googleDrive)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Stay Within Service Limits (wait)** - This step performs a key action in the workflow.
16. **Step 15: For Every 15 Frames (splitInBatches)** - This step performs a key action in the workflow.
17. **Step 16: Resize Frame (editImage)** - This step performs a key action in the workflow.
18. **Step 17: Aggregate Frames (aggregate)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Use Text-to-Speech (openAi)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Generate Narration Script (chainLlm)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of extracting frames from a video, generating a narration script using AI, and creating a voiceover. It simplifies video processing by breaking it down into manageable tasks and outputs a finished audio product.

### Demonstrate
A business owner could use this workflow to turn promotional videos into narrated content, saving time on script writing and voice recording. This automation allows for consistent and professional audio output, enhancing marketing efforts.

### Imitate
1. Import the workflow into n8n.
2. Set up a Manual Trigger to initiate the workflow.
3. Add an HTTP Request node to download a video.
4. Use a Code node to extract frames.
5. Implement AI nodes to generate a narration script and voiceover.
6. Upload the final audio to Google Drive.

### Practice
Try modifying the video URL in the Download Video step with a different video link. Run the workflow and check if it successfully generates a new audio file. This helps reinforce the process of working with video and audio data.

### WIIFM
Mastering this workflow enables you to offer valuable services like video narration automation, appealing to businesses needing efficient content production. This skill can attract clients, enhance your portfolio, and generate income through automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Generate Narration Script" for IDs, table names, and URLs.
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
