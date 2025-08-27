# Gmail Stickynote Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-001"
4. **AI Agent** `agent` — text: "=Here's the email context: {{ $('Classification Agent').item.json.text }}", options: "[object Object]", promptType: "define"
5. **Groq Chat Model** `lmChatGroq` — model: `meta-llama/llama-4-scout-17b-16e-instruct`
6. **Sticky Note** `stickyNote` — color: "4", width: "300", height: "80"
7. **Sticky Note1** `stickyNote` — color: "4", content: "### 1) Change to your gmail's credential"
8. **Sticky Note2** `stickyNote` — color: "4", width: "340", content: "### 3) Login to your gmail inbox
* Create a label with "+" icon
* Change the color of your choice"
9. **Sticky Note3** `stickyNote` — color: "4", width: "320", content: "### 4) Agent instruction
* Input the category name that you just created in gmail.
* Description = Tell agent about how should it classify your email. Keywords can be useful to let…[truncated]"
10. **Sticky Note4** `stickyNote` — color: "4", width: "320", content: "### 5) Add Label Nodes
* In this option "Label Names or IDs" -> Select the category to match with the Classification Agent Node."
11. **Sticky Note5** `stickyNote` — color: "4", width: "220", content: "### 6) Add-on
* You can add more category of your choice!"
12. **Classification Agent** `textClassifier` — options: "[object Object]", inputText: "={{ $json.text || $json.html }}", categories: "[object Object]"
13. **Gmail3** `gmail` — resource: **draft**
14. **Add Label (High Priority)** `gmail` — operation: **addLabels**
15. **Add Label (KS Work Related)** `gmail` — operation: **addLabels**
16. **Add Label Promotion** `gmail` — operation: **addLabels**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the classification of incoming emails by using AI to categorize them into predefined labels such as "High Priority," "KS Work Related," and "Promotion." Emails are first triggered through Gmail, then classified by an AI model, and finally labeled accordingly in Gmail to help organize and prioritize them for further action.

**Demonstrate**  
A business owner could use this workflow to automatically sort and prioritize emails, ensuring that urgent messages are promptly addressed and work-related emails are organized, reducing the time spent on email management and improving productivity.

**Imitate**  
1. Import the workflow into n8n.  
2. Change Gmail credentials to your account.  
3. Set up labels in your Gmail matching the categories.  
4. Test the workflow with sample emails to ensure correct classification and labeling.  

**Practice**  
Create a test Gmail account and send emails with varying subjects and content. Run the workflow to observe how emails are categorized and labeled. Adjust the classification criteria to see how it affects the outcome.

**WIIFM (What's In It For Me)**  
Mastering this workflow allows you to offer email management automation services to businesses, helping them streamline communication processes. This can lead to increased client satisfaction and potential revenue through automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, googlePalmApi, groqApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  