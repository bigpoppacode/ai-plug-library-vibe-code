# Instagram Post
## 🚀 What It Does
Automates a flow using blotato×2, executeWorkflowTrigger.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Upload media** `blotato` — resource: **media**
4. **Instagram** `blotato` — accountId: "[object Object]", postContentText: "={{ $('When Executed by Another Workflow').item.json.text }}", postContentMediaUrls: "={{ $json.url }}"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of posting content to Instagram. When triggered by another workflow, it takes an image file ID and accompanying text input, uploads the image to a media resource, and then posts it to an Instagram account with the provided text as the caption. This ensures a streamlined process for sharing content on Instagram.

### Demonstrate
A social media manager could use this workflow to automatically post scheduled content from a content calendar, saving time and ensuring consistent posting without manual uploads each time.

### Imitate
1. Set up a trigger in another workflow to execute this one.
2. Ensure the trigger passes the image file ID and text.
3. Connect your Blotato and Instagram accounts.
4. Customize the text and media URL fields in the Instagram node.
5. Test the workflow to ensure it posts correctly.

### Practice
Create a dummy Instagram account and use a test image and text. Run the workflow to see how it uploads and posts to Instagram. Adjust the input fields to understand how changes affect the post.

### WIIFM
Mastering this workflow allows you to offer automated social media posting services, improving productivity for clients and increasing your service scope. This can attract more clients looking to enhance their social media presence efficiently, boosting your income in the automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** blotatoApi.

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
