# Form Youtube Update Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, set×2, formTrigger.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **Sticky Note11** `stickyNote` — color: "4", width: "1075", height: "736"
3. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Syncbricks Youtube", formFields: "[object Object]"
4. **syncbricks information** `googleDocsTool` — operation: **get**
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"video_title": {
			"type": "string"
		},
		"video_description": {
			"type": "string"
		},
		"youtube_metadata": {
			"type": "object",
			…[truncated]"
7. **Sticky Note** `stickyNote` — color: "3", width: "1435", height: "736"
8. **Youtube Meta Generator** `agent` — text: "=You are an AI content generator specialized in crafting high-converting YouTube metadata for videos related to stores, shops, memberships, and business promotions. Your task is to…[truncated]", options: "[object Object]", promptType: "define"
9. **Extract Video ID** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Format Tags** `set` — options: "[object Object]", assignments: "[object Object]"
11. **YouTube** `youTube` — resource: **video**, operation: **update**
12. **Form** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the generation of YouTube video metadata. When a form is submitted with a YouTube video link, transcript, and optional keywords, the workflow retrieves relevant information, utilizes OpenAI to generate optimized metadata, and updates the YouTube video with a new title, description, tags, and hashtags.

### Demonstrate
A YouTube content creator could use this workflow to quickly optimize their video metadata, enhancing SEO and audience engagement, saving time on manual updates, and ensuring consistency across their channel.

### Imitate
1. Import the workflow into n8n.
2. Connect your YouTube and OpenAI accounts.
3. Customize the form fields to suit your input requirements.
4. Test the workflow by submitting a form with video details.
5. Verify the YouTube video is updated with new metadata.

### Practice
Create a test YouTube video and use the workflow to update its metadata. Experiment with different transcripts and keywords to see how the metadata changes. Check the video's SEO performance before and after the update.

### WIIFM
Mastering this workflow allows you to offer YouTube optimization services, helping clients boost their video visibility and engagement. This skill can attract new customers and generate additional income in the digital marketing and video content creation industries.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  