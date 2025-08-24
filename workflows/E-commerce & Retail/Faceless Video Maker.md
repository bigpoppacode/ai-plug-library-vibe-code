# Faceless Video Maker

## 🚀 What It Does
This workflow automates a process involving httpRequest, limit, googleDrive.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Generate Videos** node.
2. **Step 1: Generate Videos (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Get Generated Videos (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Limit (limit)** - This step performs a key action in the workflow.
5. **Step 4: Upload to Drive (googleDrive)** - This step performs a key action in the workflow.
6. **Step 5: Update Video Status (googleSheets)** - This step performs a key action in the workflow.
7. **Step 6: Generate Sound Prompt (chainLlm)** - This step performs a key action in the workflow.
8. **Step 7: Generate Audio (Background sound) (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Merge (merge)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Get all video urls (code)** - This step performs a key action in the workflow.
14. **Step 13: Render Video with Creatomate (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Wait 30 Seconds (wait)** - This step performs a key action in the workflow.
16. **Step 15: Upload to Drive1 (googleDrive)** - This step performs a key action in the workflow.
17. **Step 16: Text to Speech (Adam Voice) (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Merge1 (merge)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Upload Video (youTube)** - This step performs a key action in the workflow.
23. **Step 22: Update Sheet (googleSheets)** - This step performs a key action in the workflow.
24. **Step 23: Add Captions - replicate (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Wait (wait)** - This step performs a key action in the workflow.
26. **Step 25: Get Captioned Video Url (httpRequest)** - This step performs a key action in the workflow.
27. **Step 26: Download file binary (httpRequest)** - This step performs a key action in the workflow.
28. **Step 27: All_scenes_to_array (code)** - This step performs a key action in the workflow.
29. **Step 28: Split Out (splitOut)** - This step performs a key action in the workflow.
30. **Step 29: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.
31. **Step 30: Google Drive (googleDrive)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Image Prompt Generator (agent)** - This step performs a key action in the workflow.
34. **Step 33: Generate Image1 (httpRequest)** - This step performs a key action in the workflow.
35. **Step 34: Convert Base64 String to Binary File1 (convertToFile)** - This step performs a key action in the workflow.
36. **Step 35: Upload to Drive2 (googleDrive)** - This step performs a key action in the workflow.
37. **Step 36: Image Link: WebView Link (set)** - This step performs a key action in the workflow.
38. **Step 37: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
39. **Step 38: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
40. **Step 39: Youtube shorts (googleSheets)** - This step performs a key action in the workflow.
41. **Step 40: Write Video Script (agent)** - This step performs a key action in the workflow.
42. **Step 41: Calculator Code (toolCode)** - This step performs a key action in the workflow.
43. **Step 42: Webhook (webhook)** - This step performs a key action in the workflow.
44. **Step 43: Filter (filter)** - This step performs a key action in the workflow.
45. **Step 44: Anthropic Chat Model (lmChatAnthropic)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Filter1 (filter)** - This step performs a key action in the workflow.
48. **Step 47: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
49. **Step 48: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
50. **Step 49: 80 seconds (wait)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation and management of videos for a YouTube channel. It generates videos, adds audio, merges content, uploads it to Google Drive, and updates Google Sheets, streamlining the video production process.

### Demonstrate
A content creator could use this workflow to automate producing and uploading YouTube shorts, saving time on repetitive tasks like video editing and organization, allowing them to focus on content quality and engagement.

### Imitate
1. Set up a webhook to trigger the workflow.
2. Use an HTTP request to generate videos with a specific prompt.
3. Upload generated videos to Google Drive.
4. Update status in Google Sheets.
5. Schedule or trigger the workflow periodically for consistent uploads.

### Practice
Create a simple version of this workflow that generates a video from a single prompt, uploads it to Google Drive, and logs the video link in a Google Sheet. Experiment with different prompts to see how outputs vary.

### WIIFM
Mastering this workflow can empower you to offer video creation services, attract clients needing automated content production, and generate income through efficient, scalable solutions in the growing field of online video marketing.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Generate Videos" and "80 seconds" for IDs, table names, and URLs.
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
