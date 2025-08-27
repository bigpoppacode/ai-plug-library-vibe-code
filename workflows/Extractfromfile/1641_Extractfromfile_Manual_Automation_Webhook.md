# Extractfromfile Manual Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Structured Captions** `outputParserStructured` — jsonSchemaExample: "{
	"description": "California"
	
}"
4. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash-8b-exp-0924"
5. **Sticky Note** `stickyNote` — width: "1040", height: "440", content: "
## Get Captions"
6. **Sticky Note1** `stickyNote` — color: "4", width: "420", height: "440"
7. **Sticky Note2** `stickyNote` — color: "6", width: "440", height: "440"
8. **Set Video ID** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get Video Meta Data** `youTube` — resource: **video**, operation: **get**
10. **Get Caption ID** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId={{ $json.id }}`
11. **Get Captions** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/captions/{{ $json.items[0].id }}?tfmt=srt`
12. **Extract Captions** `extractFromFile` — operation: **text**
13. **Tag Chapters in Description** `chainLlm` — text: "=This is an srt format data. please classify this data into chapters
based upon this transcript 
{{ $json.data }}
{
"description":"00:00 Introduction
02:15 Topic One
05:30 Topic Tw…[truncated]", promptType: "define", hasOutputParser: "true"
14. **Update Chapters** `youTube` — resource: **video**, operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of generating YouTube video chapters. It retrieves video metadata and captions, extracts text from the captions, and then uses AI to classify the text into chapters. Finally, it updates the video description with these chapters, making the video more accessible and easier to navigate for viewers.

- **Demonstrate:** A YouTuber could use this workflow to automatically create chapters for their videos, enhancing viewer engagement and increasing searchability. This is particularly useful for long-form content where chapters help viewers find the information they're interested in quickly.

- **Imitate:** Import the workflow into n8n. Connect your YouTube account. Set the video ID for the video you want to process. Ensure your AI and caption extraction nodes are configured correctly. Test the workflow to ensure it updates the video description with chapters.

- **Practice:** Create a test video on YouTube with captions, then use this workflow to generate chapters. Observe how the workflow processes the captions and updates the video description. Adjust the chapter classification logic to better suit your video content.

- **WIIFM:** Mastering this workflow allows you to offer chapter generation as a service to content creators, improving their video SEO and viewer experience. This can lead to new business opportunities and increased revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** youTubeOAuth2Api, googlePalmApi.
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
  