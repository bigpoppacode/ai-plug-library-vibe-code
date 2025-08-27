# Code Strava Automation Triggered
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
 if (typeof obj[key] === 'object' && ob…[truncated]"
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
  - **Explain:** This workflow automatically analyzes athletes' activities from Strava. It starts with a Strava trigger that captures activity updates. The data is processed and analyzed using the Google Gemini Chat Model and a custom Triathlon Coach AI agent. The analysis is formatted into an HTML email and sent to a specified recipient, providing personalized performance insights and recommendations.
  
- **Demonstrate:** A fitness coach could use this workflow to provide personalized feedback to clients after every workout, improving client satisfaction and engagement by offering timely and tailored advice.

- **Imitate:** Import the workflow into n8n. Connect your Strava and Gmail accounts. Adjust the email recipient and message format as needed. Test with a sample Strava activity to ensure the workflow functions as expected.

- **Practice:** Create a mock Strava activity and run the workflow. Observe the changes and email results. Experiment with different activity data to see how the AI agent's recommendations vary.

- **WIIFM:** Mastering this workflow allows you to offer automated, AI-driven coaching services, enhancing your value proposition. This can attract more clients and increase your income potential by providing scalable, personalized fitness insights.
  
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
  