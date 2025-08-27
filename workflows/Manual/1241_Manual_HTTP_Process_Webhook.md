# Manual HTTP Process Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "260", height: "240", content: "## Set Variables
Set your variables here, such as:
- YouTube Video URL: The YouTube video you want to convert into a SEO Blog Post
- Recipient Email Address: This is the email we s…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "280", height: "200", content: "## Get YouTube Transcript
This step gets the transcript of the YouTube video with Dumpling AI. The target video must have captions or subtitles enabled. You can modify this to spec…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "260", height: "320", content: "## Generate Blog Post
Here we get GPT-4o (or a model of your choice) to generate a detailed SEO blog post. We ask for:
- title 
- description
- blogImagePrompt
- content

To improv…[truncated]"
6. **Sticky Note3** `stickyNote` — height: "260", content: "## Generate Blog Image
Here we use the FLUX.1-dev model via Dumpling AI to generate a image for the blog post. Feel free to use the image model you prefer. You may need to update t…[truncated]"
7. **Sticky Note4** `stickyNote` — width: "260", height: "180", content: "## Convert Markdown to HTML
OpenAI LLMs tend to output markdown. We need to convert to HTML for formatting in the the Gmail node."
8. **Sticky Note5** `stickyNote` — width: "260", height: "180", content: "## Download Image for Attachment
The image URL is a temporary URL, so we need to download the image and attach it to the email being sent."
9. **Sticky Note6** `stickyNote` — width: "260", height: "180", content: "## Send blog post via email for next steps
We send all generated content to your email address so you have a record of all generations and can get it ready for publication"
10. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Get YouTube Transcript** `httpRequest` — method: **POST**, url: `https://app.dumplingai.com/api/v1/get-youtube-transcript`
12. **Generate Blog Post** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
13. **Generate AI Image** `httpRequest` — method: **POST**, url: `https://app.dumplingai.com/api/v1/generate-ai-image`
14. **Markdown** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $('Generate Blog Post').item.json.message.content.content }}"
15. **Download Image** `httpRequest` — url: `={{ $('Generate AI Image').item.json.images[0].url }}`
16. **Gmail** `gmail` — sendTo: "={{ $('Set Variables').item.json['Recipient Email Address'] }}", message: "=Description: {{ $('Generate Blog Post').item.json.message.content.description }}

Content:
{{ $('Markdown').item.json.htmlContent }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the conversion of a YouTube video into an SEO blog post. It starts by retrieving the video's transcript using Dumpling AI, then utilizes GPT-4o to generate a detailed blog post including a title, description, and content. An AI-generated image is created to accompany the blog post. The markdown content is converted into HTML, and all components are sent via email, complete with the image attachment.

**Demonstrate:**  
A content creator can use this workflow to quickly convert their YouTube videos into blog posts, enhancing their online presence and SEO without manually writing each post.

**Imitate:**  
1. Import the workflow into n8n.
2. Set your YouTube video URL and recipient email in the variables.
3. Connect your Dumpling AI and email accounts.
4. Test the workflow with a video to ensure it generates and sends the content correctly.

**Practice:**  
Create a test YouTube video with subtitles, run the workflow, and observe how the transcript is transformed into a blog post. Modify the AI prompts or email content to personalize the output.

**WIIFM:**  
Mastering this workflow allows you to offer automated content creation services, enhancing your ability to attract clients looking for efficient ways to repurpose their video content into written form, thus increasing your service offerings and potential revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBearerAuth, httpHeaderAuth, openAiApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  