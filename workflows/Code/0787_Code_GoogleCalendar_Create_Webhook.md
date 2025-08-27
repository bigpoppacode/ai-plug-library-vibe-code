# Code GoogleCalendar Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking 'Test workflow'**.
  2. **When clicking 'Test workflow'** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    },
    "mail_object": {
      "type": "string"
    }
  }
}"
5. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note** `stickyNote` — width: "260", height: "120", content: "## ElevenlabsAPI key
**Click** to get your Elevenlabs  API key. [Elevenlabs](https://try.elevenlabs.io/text-audio)"
7. **Sticky Note1** `stickyNote` — width: "300", height: "120", content: "## Gmail API Credentials  
**Click here** to view the [documentation](https://docs.n8n.io/integrations/builtin/credentials/google/) and configure your access permissions for the Go…[truncated]"
8. **Sticky Note2** `stickyNote` — width: "300", height: "140", content: "## Calendar API Credentials  
**Click here** to view the [documentation](https://docs.n8n.io/integrations/builtin/credentials/google/) and configure your access permissions for the…[truncated]"
9. **Get Appointments** `googleCalendar` — operation: **getAll**
10. **create message** `chainLlm` — text: "=name: {{ $json.summary }}
time: {{ $json.start.dateTime }}
address: {{ $json.location }}
Today's date: {{ $now }}", messages: "[object Object]", promptType: "define"
11. **Generate Voice Reminder** `httpRequest` — method: **POST**, url: `https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb`
12. **Change filename** `code` — jsCode: "/*
 * Filename: addFileName.js
 * Purpose: Add a file name to binary data in an n8n workflow using mail_object from input
 */

const mailObject = $input.first().json.output.mail_ob…[truncated]"
13. **Send Voice Reminder** `gmail` — sendTo: "={{ $('Get Appointments').item.json.attendees[0].email }}", message: "=👇 Information for tomorrow 🗣️", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the process of sending voice reminders for appointments. It retrieves upcoming appointments from Google Calendar, uses OpenAI to create a personalized message, converts it into a voice message via Elevenlabs, and sends it to the attendee's email using Gmail. This ensures attendees are reminded of their appointments in a more engaging way.

**Demonstrate:**  
A real estate agent could use this workflow to send automatic voice reminders to clients about their property viewings, enhancing client communication and ensuring appointments aren't missed.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Calendar, OpenAI, Elevenlabs, and Gmail accounts.
3. Customize the message template in the OpenAI node.
4. Set a schedule for the workflow to run daily.
5. Test the workflow with sample appointments.

**Practice:**  
Create a test Google Calendar with a few appointments, then run the workflow. Check if the voice reminders are generated and sent via email. Modify appointment details and observe how the workflow adapts.

**WIIFM:**  
Mastering this workflow can help you offer a unique service to businesses, improving client communication through innovative voice reminders. This can differentiate your offerings, attract new clients, and generate additional income in the AI automation market.
  
  ## 🔧 Setup Instructions
  1. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  