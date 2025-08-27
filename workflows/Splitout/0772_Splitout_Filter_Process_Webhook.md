# Splitout Filter Process Webhook
## 🚀 What It Does
Automates a flow using httpRequest×8, stickyNote×6, extractFromFile×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
4. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
5. **Sticky Note** `stickyNote` — color: "5", width: "440", height: "340"
6. **Sticky Note1** `stickyNote` — color: "4", width: "440", height: "300"
7. **Sticky Note2** `stickyNote` — color: "3", width: "460", height: "360"
8. **Sticky Note3** `stickyNote` — color: "7", width: "360", height: "380"
9. **Sticky Note4** `stickyNote` — width: "340", height: "280", content: "## METHOD 4: PDF analysis via direct API

This branch shows how to analyze PDF documents:
1. Fetch a PDF file
2. Transform to base64 format
3. Send directly to Gemini API for analy…[truncated]"
10. **Sticky Note5** `stickyNote` — width: "340", height: "300", content: "## METHOD 5: Image analysis via direct API

This branch demonstrates direct API control for image analysis:
1. Fetch an image
2. Transform to base64 format
3. Make a customized API…[truncated]"
11. **Define URLs And Prompts** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Define Multiple Image URLs** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Get PDF file** `httpRequest` — url: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`
14. **Get image from unsplash** `httpRequest` — url: `=https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
15. **Get image from unsplash4** `httpRequest` — url: `=https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
16. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "urls"
17. **Split Out to multiple items** `splitOut` — options: "[object Object]", fieldToSplitOut: "urls"
18. **Transform to base64 (pdf)** `extractFromFile` — operation: **binaryToPropery**
19. **Transform to base64 (image)** `extractFromFile` — operation: **binaryToPropery**
20. **AI Agent2** `agent` — text: "whats on the image", options: "[object Object]", promptType: "define"
21. **Filter (optional)** `filter` — options: "[object Object]", conditions: "[object Object]"
22. **Get image from unsplash3** `httpRequest` — url: `={{ $json.urls }}`
23. **Call Gemini API with PDF** `httpRequest` — method: **POST**, url: `=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`
24. **Call Gemini API with Image** `httpRequest` — method: **POST**, url: `=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`
25. **Get image from unsplash2** `httpRequest` — url: `={{ $json.url }}`
26. **Transform to base** `extractFromFile` — operation: **binaryToPropery**
27. **Call Gemini API1** `httpRequest` — method: **POST**, url: `=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow demonstrates five different methods for analyzing media files using AI. It covers analyzing single and multiple images with custom prompts and direct API calls for PDFs and images via Google's Gemini AI model. The workflow fetches media files, converts them to a suitable format, and sends them to the AI for analysis.

### Demonstrate
A business owner could use this workflow to automate the analysis of marketing images and PDFs, gaining insights quickly and efficiently. This could help in understanding customer engagement with visual content and optimizing marketing strategies.

### Imitate
1. Import the workflow into n8n.
2. Set up the Google Gemini API credentials.
3. Customize the media URLs and prompts according to your needs.
4. Test the workflow to ensure the AI analyses are accurate and relevant.
5. Adjust the workflow to include additional media types or analysis criteria if needed.

### Practice
Create a test workflow using a few image URLs and a sample PDF. Run the workflow to see how the AI analyzes the content. Experiment with different prompts to see how they affect the AI's output and adjust the workflow accordingly.

### WIIFM
Mastering this workflow allows you to offer AI-powered media analysis services to clients, enhancing your portfolio. It can help businesses optimize their visual content strategies, leading to better customer engagement and potentially increasing revenue. This expertise positions you as a valuable resource in the growing field of AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, httpQueryAuth.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
