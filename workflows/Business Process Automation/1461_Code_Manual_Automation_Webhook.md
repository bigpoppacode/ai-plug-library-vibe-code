# Code Manual Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, code, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: YouTube Video ID (code)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: OpenRouter Chat Model (lmChatOpenRouter)** - This step performs a key action in the workflow.
6. **Step 5: DeepSeek Chat Model (lmChatDeepSeek)** - This step performs a key action in the workflow.
7. **Step 6: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Send Email (emailSend)** - This step performs a key action in the workflow.
10. **Step 9: Generate transcript (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Exist? (if)** - This step performs a key action in the workflow.
12. **Step 11: Analyze LLM Chain (chainLlm)** - This step performs a key action in the workflow.
13. **Step 12: Set YouTube URL (set)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Get transcript (set)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Get Fulltext (code)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the analysis of YouTube videos by extracting transcripts, summarizing content with AI, and sending the results via email. It starts with a manual trigger, processes the video URL, and utilizes AI models to generate insights.

### Demonstrate
A content creator can use this workflow to quickly analyze YouTube videos for their key points and summaries, saving hours of manual watching and note-taking, enabling them to create better content and engage with their audience more effectively.

### Imitate
1. Set up a manual trigger in n8n.
2. Add a code node to extract the YouTube Video ID from a URL.
3. Use HTTP requests to fetch the video transcript.
4. Integrate AI models to summarize the transcript.
5. Send the summary via email.

### Practice
Create a simplified version of this workflow by focusing on just extracting the video ID and sending a basic email with that ID. Experiment with different YouTube URLs to see how the workflow handles various formats.

### WIIFM
Mastering this workflow allows you to automate content analysis, saving time for clients and enhancing their productivity. This skill can lead to value-added services, helping you attract more customers and generate income through automation consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note7" for IDs, table names, and URLs.
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
