# Form HTML Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When User Completes Form**.
  2. **When User Completes Form** `formTrigger` — options: "[object Object]", formTitle: "Top deals", formFields: "[object Object]"
3. **Get MediaMarkt Offers Website** `brightData` — url: `https://www.mediamarkt.es/es/campaign/campanas-y-ofertas`
4. **Extract Body and Title from Website** `html` — operation: **extractHtmlContent**
5. **Generate List of Deals by Category** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
6. **Extract items from results** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.results"
7. **Create HTML for Email** `documentGenerator` — template: "<br>
These are our recommended deals today:<br>
<ul>
{{#each items}}
<li>{{category}}: <a href="https://www.bestbuy.com{{link}}">{{name}}</a> for {{price}}€</li>
{{/each}}
</ul>
<b…[truncated]", oneTemplate: "true"
8. **Notify End User by Email** `emailSend` — html: "=Hi!
<br>
{{ $json.text }}

Best,
<br>
The n8nhackers team!", options: "[object Object]", subject: "Your last deals!"
9. **Show Form Results Page** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of sending personalized deal recommendations via email. When a user submits a form with their preferred categories, the workflow fetches current offers from the MediaMarkt website, extracts relevant data, and uses OpenAI to categorize and generate a list of top deals. The deals are formatted into an HTML email and sent to the user, providing them with tailored shopping recommendations.

### Demonstrate
A retailer could use this workflow to engage customers by sending daily or weekly personalized deal emails based on user preferences, increasing customer retention and sales through targeted marketing.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and email accounts.
3. Customize the form fields to match your desired categories.
4. Test the workflow by submitting the form and checking your email for the personalized deals.

### Practice
Create a test form with a few categories and your email. Submit it to see how the workflow processes and sends the deals. Adjust categories and observe different outcomes to understand the workflow's flexibility.

### WIIFM
Mastering this workflow allows you to offer personalized marketing solutions to businesses, helping them increase customer engagement and sales. This can enhance your service portfolio, attract new clients, and boost income in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** brightdataApi, smtp, openAiApi.
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
  