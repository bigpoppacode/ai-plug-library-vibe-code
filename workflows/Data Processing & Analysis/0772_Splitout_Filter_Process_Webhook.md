# Splitout Filter Process Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, lmChatGoogleGemini, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
4. **Step 3: AI Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: Get image from unsplash2 (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Split Out (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: Get image from unsplash3 (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Transform to base (extractFromFile)** - This step performs a key action in the workflow.
9. **Step 8: Call Gemini API1 (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
11. **Step 10: AI Agent2 (agent)** - This step performs a key action in the workflow.
12. **Step 11: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
13. **Step 12: Get image from unsplash4 (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Get PDF file (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Get image from unsplash (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: Call Gemini API with PDF (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Call Gemini API with Image (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Transform to base64 (image) (extractFromFile)** - This step performs a key action in the workflow.
19. **Step 18: Transform to base64 (pdf) (extractFromFile)** - This step performs a key action in the workflow.
20. **Step 19: Define Multiple Image URLs (set)** - This step performs a key action in the workflow.
21. **Step 20: Split Out to multiple items (splitOut)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Define URLs And Prompts (set)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Filter (optional) (filter)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the analysis of various media types (images and PDFs) using AI. It triggers manually, fetches images from Unsplash, processes them through Google Gemini AI for analysis, and manages outputs in a structured way, making it suitable for tasks like content generation or feedback analysis.

### Demonstrate
A business owner could use this workflow to automate image analysis for marketing materials. For instance, they could analyze customer feedback images and PDFs, transforming them into insights without manual effort, saving time and enhancing decision-making.

### Imitate
1. Import the workflow into n8n.
2. Adjust the trigger node to suit your needs (e.g., a schedule or webhook).
3. Update the image URLs and prompts in the "Define URLs And Prompts" node.
4. Connect your Google Gemini API credentials.
5. Execute the workflow to see how it processes inputs and outputs.

### Practice
Try modifying the image URLs to point to your own images or PDFs. Analyze how changing the prompts affects the AI's responses. Document the differences in outputs to see the impact of your adjustments.

### WIIFM
Mastering this workflow allows you to offer AI-driven automation services, helping businesses streamline processes, enhance customer interactions, and generate insightful data analysis—all of which can lead to increased client satisfaction and higher income opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note5" for IDs, table names, and URLs.
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
