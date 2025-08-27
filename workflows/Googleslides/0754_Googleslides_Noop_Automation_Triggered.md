# GoogleSlides Noop Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Google Sheets Trigger**.
  2. **Google Sheets Trigger** `googleSheetsTrigger` — event: "rowAdded", options: "[object Object]", pollTimes: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "300", height: "180", content: "### 1) Start here
* Create a Google Form and then enable quiz mode.
* Publish it, submit 1 text data.
* In response section, you'll see "Link to Google Sheet" option.
* Press, and …[truncated]"
4. **Sticky Note1** `stickyNote` — width: "180", content: "### 4) Passing Score
* Adjust your passing score here"
5. **Sticky Note2** `stickyNote` — height: "180", content: "### 2) Trigger Node
* Replace your Google Sheet id's in this node."
6. **Sticky Note3** `stickyNote` — width: "260", height: "180", content: "### 3) Extract Node
* Select the data we want to use to proceed.
* For this case, i'll select only Name, Email, Score (Because this is only what we need)"
7. **Sticky Note4** `stickyNote` — width: "260", content: "### 4.1) Score < passing criteria"
8. **Sticky Note5** `stickyNote` — width: "260", height: "200", content: "### 4.2) Score > passing criteria
* Create new Google Slide 
* Decorate it as you desired (This will be certificate's template)
* Use [ name ] to be a placeholder for user's name
*…[truncated]"
9. **Sticky Note6** `stickyNote` — width: "260", content: "### 5) Replace text
* This node will replace [ name ] with user's input name.
"
10. **Sticky Note7** `stickyNote` — width: "260", content: "### 6) To PDF
* Change file name as you desire."
11. **Sticky Note8** `stickyNote` — width: "260", content: "### 7) Send email
* Send to user's email
* Customize your message here.
"
12. **Extract essential data** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Score Checker** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Copy from your template** `googleDrive` — operation: **copy**
15. **No Operation, do nothing** `noOp` — configured for its default action.
16. **Replace text** `googleSlides` — operation: **replaceText**
17. **Convert to PDF** `googleDrive` — operation: **download**
18. **Send to user's email** `gmail` — sendTo: "={{ $('Score Checker').item.json.respondentEmail }}", message: "=Congratulations on passing the quiz! Attached is your certificate.", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates certificate issuance for quiz takers. When a new row is added to a linked Google Sheet (indicating a quiz submission), the workflow extracts the participant's name, email, and score. If the score meets the passing criteria, a personalized certificate is created using Google Slides, converted to PDF, and emailed to the participant. If not, no action is taken.

### Demonstrate
A training company uses this workflow to automatically generate and send certificates to participants who pass their online courses, ensuring a seamless and efficient certification process without manual intervention.

### Imitate
1. Set up a Google Form linked to a Google Sheet.
2. Import the workflow into n8n.
3. Replace the Google Sheet ID and template IDs in the nodes.
4. Define the passing score in the "Score Checker" node.
5. Test with sample data to ensure it works.

### Practice
Create a Google Form quiz linked to a Google Sheet and run the workflow with test submissions. Adjust the passing score and customize the certificate template in Google Slides to see how changes affect the outcome.

### WIIFM
Mastering this workflow can help you efficiently manage certification processes, offering a valuable service to educational institutions or training providers. This can enhance your service offerings and generate additional revenue streams in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsTriggerOAuth2Api, googleDriveOAuth2Api, googleSlidesOAuth2Api, gmailOAuth2.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  