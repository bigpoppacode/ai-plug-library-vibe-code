# Readbinaryfiles Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "746.6347949130579", height: "295.50954755505853", content: "## The old way of using text completion and text edit
### Davinci model is 10 times more expensive then ChatGPT, consider switching to the new API:
https://openai.com/blog/introduc…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "428.4578974150008", height: "316.6202633391793", content: "## Whisper-1 example
### Prepare your audio file and send it to whisper-1 transcription model"
5. **Sticky Note2** `stickyNote` — width: "421.9002034748082", height: "302.4086532331564", content: "## An example of transcribed text
### Please pause this node when using real audio files"
6. **Sticky Note3** `stickyNote` — width: "747.8556016477869", height: "288.18470714667706", content: "## ChatGPT example 1.1 and 1.2 
### Write a Tl;dr of the text input
### Translate it to German
### only user content provided"
7. **Sticky Note4** `stickyNote` — width: "742.9723747088658", height: "288.18470714667706", content: "## ChatGPT example 2 
### Use system content to provide general instruction
### Manual setup of system and user content"
8. **Sticky Note5** `stickyNote` — width: "739.309954504675", height: "288.18470714667706", content: "## ChatGPT example 3.1
### When using ChatGPT programmatically, create an array of system / user / assistant contents and append them one after another
### Call ChatGPT API via HTT…[truncated]"
9. **Sticky Note6** `stickyNote` — width: "611.1252473579985", height: "284.52228694248623", content: "## ChatGPT example 3.2 & DALLE-2 example 3.3
### Use ChatGPT to create a prompt for a cover image of the Tl;dr message
### Use OpenAI node to generate 4 images using the auto-gener…[truncated]"
10. **Sticky Note7** `stickyNote` — width: "739.309954504675", height: "288.18470714667706", content: "## ChatGPT example 4
### Generate HTML code that contains SVG image"
11. **Sticky Note8** `stickyNote` — width: "739.309954504675", height: "288.18470714667706", content: "## ChatGPT example 5
### Provide several outputs. Useful for quick replies (i.e. in Gmail / Outlook)"
12. **Sticky Note9** `stickyNote` — width: "596.9600747621192", height: "320.63203364295396", content: "## Do not run the whole workflow, it's rather slow
### Better execute the last node of each branch or simply disconnect branches that are not needed"
13. **LoadMP3** `readBinaryFiles` — fileSelector: "/home/node/.n8n/OpenAI-article/Using Science to Stop Your Mirror From Fogging Up.mp3"
14. **Set-ex4** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
15. **ChatGPT-ex** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-3.5-turbo-0301`
16. **Whisper-transcribe** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/audio/transcriptions`
17. **ChatGPT-ex4** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-3.5-turbo-0301`
18. **Text-example** `code` — jsCode: "[redacted]"
19. **HTML-ex4** `html` — html: "{{$json.message.content }}"
20. **davinci-003-complete** `openAi` — prompt: "={{ $json.text }}

Tl;dr:"
21. **ChatGPT-ex1.1** `openAi` — resource: **chat**, prompt: "[object Object]"
22. **ChatGPT-ex2** `openAi` — resource: **chat**, prompt: "[object Object]"
23. **Code-ex3.1** `code` — jsCode: "var intext = $input.first().json;

var messages = [
 {"role": "system", "content": "You are a helpful assistant. Write a Tl;dr of each user message"},
 {"role": "user", "content": …[truncated]"
24. **davinci-003-edit** `openAi` — operation: **edit**
25. **ChatGPT-ex1.2** `openAi` — resource: **chat**, prompt: "[object Object]"
26. **ChatGPT-ex3.1** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/chat/completions`
27. **ChatGPT-ex3.2** `openAi` — resource: **chat**, prompt: "[object Object]"
28. **DALLE-ex3.3** `openAi` — resource: **image**, prompt: "={{ $json.message.content }}"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow demonstrates various examples of using OpenAI's models for text and audio processing. It includes tasks like audio transcription using Whisper, text summarization and translation with ChatGPT, and image generation with DALL-E. The workflow showcases how to integrate AI models for different tasks, providing a comprehensive guide on utilizing OpenAI's capabilities in an automated environment.

### Demonstrate
A business owner could use this workflow to automate content creation. For example, transcribing meeting recordings, summarizing key points, translating them for a multilingual team, and generating visual content for presentations.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI account.
3. Set up the necessary triggers and nodes (e.g., for audio input and text processing).
4. Customize the prompts and models as needed for your specific tasks.
5. Test each branch to ensure it performs the desired action.

### Practice
Create a sample audio file and use the workflow to transcribe and summarize it. Then, translate the summary into another language and generate an image based on the content. Observe how each node interacts and processes the data.

### WIIFM
Mastering this workflow allows you to offer AI-driven automation services, enhancing content creation and data processing for clients. This can lead to new opportunities in the automation business, providing innovative solutions that save time and increase efficiency.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.
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
