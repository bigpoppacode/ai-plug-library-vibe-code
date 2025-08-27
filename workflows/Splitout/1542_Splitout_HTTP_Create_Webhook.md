# Splitout HTTP Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **GetTopicFromToLearn**.
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash"
3. **GetTopicFromToLearn** `formTrigger` — options: "[object Object]", formTitle: "What do You want to learn ?", formFields: "[object Object]"
4. **SearchAskHN** `hackerNews` — resource: **all**
5. **SplitOutChildrenIDs** `splitOut` — options: "[object Object]", fieldToSplitOut: "children"
6. **FindHNComments** `httpRequest` — url: `=https://hacker-news.firebaseio.com/v0/item/{{ $json.children }}.json?print=pretty`
7. **CombineIntoSingleText** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
8. **Basic LLM Chain** `chainLlm` — text: "=Your Task is to find the best resources to learn {{ $('GetTopicFromToLearn').item.json["I want to learn"] }}. 

I have scraped the HackerNews and The following is the list of comm…[truncated]", promptType: "define"
9. **Convert2HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.text }}"
10. **SendEmailWithTopResources** `emailSend` — html: "=FYI, We read through {{ $('SplitOutChildrenIDs').all().length }} comments in search for the best.

{{ $json.data }}", options: "[object Object]", subject: "=Here are Top HN Recommendations for Learning {{ $('GetTopicFromToLearn').item.json["I want to learn"] }}"
11. **Finished** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of finding and emailing the best learning resources for a specified topic. It starts by asking the user what they want to learn, searches Hacker News for relevant discussions, collects and analyzes the comments to identify top resources, and then emails the user a list of these resources.

### Demonstrate
A consultant could use this workflow to provide clients with curated learning materials on new technologies, saving time and adding value to their services by automating the research process.

### Imitate
1. Import the workflow into n8n.
2. Connect your Hacker News and email accounts.
3. Set up a form to capture learning topics and user emails.
4. Customize the email content and format.
5. Test the workflow to ensure it sends the correct recommendations.

### Practice
Create a form with a few learning topics and email addresses. Run the workflow and verify that it sends the appropriate resource recommendations. Adjust the workflow to handle different topics or customize the output format.

### WIIFM
Mastering this workflow can help you offer personalized, automated resource curation services, boosting client satisfaction and retention. It enhances your service portfolio, potentially increasing revenue and establishing you as an expert in AI-driven solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, smtp.
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
