# Telegram Wait Automation Webhook

## 🚀 What It Does
This workflow automates a process involving stickyNote, telegramTrigger, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Trigger: Telegram Prompt** node.
2. **Step 1: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Trigger: Telegram Prompt (telegramTrigger)** - This step performs a key action in the workflow.
8. **Step 7: Extract Prompt & Caption (code)** - This step performs a key action in the workflow.
9. **Step 8: Transform Prompt for Kling (GPT-4) (agent)** - This step performs a key action in the workflow.
10. **Step 9: OpenAI Model Bridge (lmChatOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: Generate Video via Kling API (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Wait for Video Generation (wait)** - This step performs a key action in the workflow.
13. **Step 12: Get Generated Video URL (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Generate Voice-Over Script (openAi)** - This step performs a key action in the workflow.
15. **Step 14: Convert Script to Audio (TTS) (openAi)** - This step performs a key action in the workflow.
16. **Step 15: Upload Audio to Cloudinary (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Merge Audio + Video (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Wait for Audio/Video Fusion (wait)** - This step performs a key action in the workflow.
19. **Step 18: Get Video URL with Audio (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Wait Before Captioning (wait)** - This step performs a key action in the workflow.
21. **Step 20: Add Captions/Subtitles to Video (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Wait for Caption Render (wait)** - This step performs a key action in the workflow.
23. **Step 22: Get Final Video URL (Audio + Captions) (httpRequest)** - This step performs a key action in the workflow.
24. **Step 23: Generate Social Caption from Voiceover (openAi)** - This step performs a key action in the workflow.
25. **Step 24: Generate YouTube-Style Title (openAi)** - This step performs a key action in the workflow.
26. **Step 25: Save Video Metadata to Google Sheets (googleSheets)** - This step performs a key action in the workflow.
27. **Step 26: Send Final Video to Telegram (telegram)** - This step performs a key action in the workflow.
28. **Step 27: Send Caption Link via Telegram (telegram)** - This step performs a key action in the workflow.
29. **Step 28: Assign Social Media IDs (set)** - This step performs a key action in the workflow.
30. **Step 29: Upload Video to Blotato (httpRequest)** - This step performs a key action in the workflow.
31. **Step 30: Post to Instagram (httpRequest)** - This step performs a key action in the workflow.
32. **Step 31: Post to YouTube (httpRequest)** - This step performs a key action in the workflow.
33. **Step 32: Post to TikTok (httpRequest)** - This step performs a key action in the workflow.
34. **Step 33: Post to Facebook Page (httpRequest)** - This step performs a key action in the workflow.
35. **Step 34: Post to Threads (httpRequest)** - This step performs a key action in the workflow.
36. **Step 35: Post to Twitter (X) (httpRequest)** - This step performs a key action in the workflow.
37. **Step 36: Post to LinkedIn (httpRequest)** - This step performs a key action in the workflow.
38. **Step 37: Post to Bluesky (httpRequest)** - This step performs a key action in the workflow.
39. **Step 38: Post to Pinterest (httpRequest)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation and distribution of social media videos using AI. It generates a video based on a prompt received via Telegram, adds voice-over and captions, and then posts the final product across multiple social media platforms automatically.

### Demonstrate
A business owner can use this workflow to streamline their content marketing. For example, by simply sending a Telegram message with a video idea, the workflow will create a professional video and publish it on Instagram, YouTube, TikTok, and more, saving time and effort.

### Imitate
1. Set up a Telegram trigger to capture video prompts.
2. Use an HTTP request node to generate a video from a text prompt via Kling API.
3. Incorporate OpenAI nodes to create a voice-over script and convert it to audio.
4. Merge audio and video, add captions, and upload the final video.
5. Post the video to social media platforms using HTTP requests.

### Practice
Try sending different video prompts through Telegram to see how the workflow processes them. Experiment with varying the content of your prompts to understand how it affects the final video output.

### WIIFM
Mastering this workflow allows you to offer valuable video marketing services. By automating video creation and distribution, you can help businesses enhance their online presence, save time, and ultimately increase revenue, positioning yourself as a key player in digital marketing.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note" and "Post to Pinterest" for IDs, table names, and URLs.
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
