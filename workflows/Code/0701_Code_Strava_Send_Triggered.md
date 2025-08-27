# Code Strava Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Strava Trigger**.
  2. **Strava Trigger** `stravaTrigger` — event: "update", object: "activity", options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
4. **Gmail** `gmail` — sendTo: "amjid@amjidali.com", message: "={{ $json.html }}", options: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "444", height: "649"
6. **Sticky Note12** `stickyNote` — color: "5", width: "329", height: "655"
7. **Sticky Note13** `stickyNote` — color: "6", width: "503", height: "651"
8. **Sticky Note11** `stickyNote` — color: "4", width: "475.27306699862953", height: "636.1483291619771"
9. **Sticky Note16** `stickyNote` — color: "4", width: "609", height: "655"
10. **WhatsApp Business Cloud** `whatsApp` — operation: **send**
11. **Code** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
  item.json.myNewField = 1;
}

return $input.all();"
12. **Combine Everything** `code` — jsCode: "// Recursive function to flatten JSON into a single string
function flattenJson(obj, prefix = '') {
    let str = '';
    for (const key in obj) {
        if (typeof obj[key] === '…[truncated]"
13. **Fitness Coach** `agent` — text: "=You are an Triathlon Coach specializing in guiding the athlete on running, swimming, and cycling. Your role is to analyze Strava data and provide personalized coaching to help use…[truncated]", agent: "conversationalAgent", options: "[object Object]"
14. **Structure Output** `code` — jsCode: "// Input JSON from the previous node
const input = $json.output;

// Split the input into sections based on double newlines
const sections = input.split('\n\n');

// Initialize the…[truncated]"
15. **Conver to HTML** `code` — jsCode: "// Get input data from n8n
const inputData = $input.all(); // Fetch all input data items

// Function to convert JSON data into a single HTML string
function convertToHTML(data) {
…[truncated]"
16. **Send Email** `emailSend` — html: "={{ $json.html }}", options: "[object Object]", subject: "=New Activity on Strava"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of analyzing Strava activity data for athletes. It starts by triggering on new activity updates from Strava. The data is then processed using Google Gemini's AI model for insights and recommendations. A personalized coaching response is generated, structured, and converted into HTML, which is then sent via email to the athlete. This ensures athletes receive timely, data-driven feedback on their performance, helping them improve their training and reach their fitness goals.

**Demonstrate:**  
A fitness coach could use this workflow to provide automated feedback to athletes after each workout. This saves time and offers personalized coaching at scale, enhancing the athlete's training experience without manual input from the coach.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Strava, Google Gemini, and email accounts.
3. Set up the Strava trigger to monitor activity updates.
4. Customize the AI model and email contents for your coaching style.
5. Test the workflow with sample data to ensure it sends the correct feedback.

**Practice:**  
Create a simple test activity in Strava and run the workflow. Check if the email with personalized feedback is received and formatted correctly. Modify the AI model prompt or email template to see how it changes the output.

**WIIFM:**  
Mastering this workflow can position you as a tech-savvy fitness coach, offering automated, personalized training insights. This can attract more clients and justify premium pricing, as you provide high-value services with minimal manual intervention, leveraging AI and automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** stravaOAuth2Api, googlePalmApi, gmailOAuth2, smtp, whatsAppApi.
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
  