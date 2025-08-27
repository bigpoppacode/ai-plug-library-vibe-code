# Wait Code Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking Test workflow**.
2. **Sticky Note** `stickyNote` — width: "360", content: "## Basic Setting Instruction
Fill in **Basic Params** based on user's need. 
The node concludes three section: style, character and situation_keyword.
GPT-4o-mini will generate ima…[truncated]"
3. **When clicking Test workflow** `manualTrigger` — configured for its default action.
4. **Sticky Note1** `stickyNote` — height: "120", content: "### Generate the first image
This workflow section is uesd to generate the first Midjourney image. "
5. **Sticky Note2** `stickyNote` — height: "120", content: "### Generate the second image
This workflow section is uesd to generate the second Midjourney image. "
6. **Sticky Note3** `stickyNote` — height: "120", content: "### Generate the third image
This workflow section is uesd to generate the third Midjourney image. "
7. **Sticky Note4** `stickyNote` — height: "120", content: "### Generate three Kling videos
This section is used to generate three Kliong videos."
8. **Sticky Note5** `stickyNote` — content: "### Combine Videos in Creatomate
Set a video template in Creatomate, then set the node with instruction."
9. **Basic Params** `set` — mode: "raw", options: "[object Object]", jsonOutput: "[redacted]"
10. **GPT-4o-mini Generate Image Scenario Prompt** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/v1/chat/completions`
11. **Get Prompt** `code` — jsCode: "const content = $input.first().json.choices[0].message.content;

const prompts = JSON.parse(content);

return { prompts };"
12. **Midjourney Generator of the First Image** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
13. **Get Task ID of the First Image** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the creation of animated stories by integrating multiple AI and media tools. It starts by generating prompts using GPT-4o-mini based on user-defined parameters like style and character. It then creates three images using Midjourney and converts each into a video using Kling. Finally, it combines these videos into a single animated story using Creatomate, ensuring a seamless and efficient content creation process.

**Demonstrate:** A content creator can use this workflow to quickly generate engaging animated stories for social media, enhancing brand presence and audience engagement without spending hours on manual design and video editing.

**Imitate:** 1) Import the workflow into n8n. 2) Set up your API keys for GPT-4o-mini, Midjourney, Kling, and Creatomate. 3) Define your style, character, and situational keywords in Basic Params. 4) Test and execute the workflow to generate your animated story.

**Practice:** Create a simple animated story for a fictional character using this workflow. Use different styles and characters to see how variations affect the final output. 

**WIIFM:** Mastering this workflow allows you to offer unique and high-quality content creation services, reducing production time and costs. It can attract clients seeking innovative content solutions, providing a competitive edge in the digital marketing and content creation industry.

## 🔧 Setup Instructions
1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
