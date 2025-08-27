# Code HTTP Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **Sticky Note** `stickyNote` — width: "440", height: "180", content: "[redacted]"
3. **Sticky Note1** `stickyNote` — width: "440", content: "## STEP 3

Submit the form and you will receive a call to the phone number you entered where the selected voice will tell you the content of the text you wrote."
4. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Send Voice Message", formFields: "[object Object]"
5. **Sticky Note2** `stickyNote` — color: "3", width: "440", height: "240"
6. **Sticky Note3** `stickyNote` — width: "180", height: "240", content: "Set the code that will be spoken in the verification phone call"
7. **Sticky Note4** `stickyNote` — width: "180", height: "240", content: "Set the code that will be sent in the verification email"
8. **Sticky Note5** `stickyNote` — width: "440", content: "## STEP 2

Set the verification code for this explanatory flow that will be set in the voice call and verification email.

In the node "Send Email" set the sender."
9. **Set voice code** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Code for voice** `code` — jsCode: "// Loop over input items and modify the 'Code' field to add spaces between characters
for (const item of $input.all()) {
  const code = item.json.Code;

  const spacedCode = code.s…[truncated]"
11. **Send Voice** `httpRequest` — method: **POST**, url: `https://rest.clicksend.com/v3/voice/send`
12. **Verify voice code** `form` — options: "[object Object]", formFields: "[object Object]"
13. **Is voice code correct?** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Set email code** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Fail voice code** `form` — operation: **completion**
16. **Send Email** `emailSend` — html: "=Hi {{ $('On form submission').item.json['Nome '] }},<br>
The email verification code is <b>{{ $json['Code Email'] }}</b>", options: "[object Object]", subject: "Verify your code"
17. **Verify email code** `form` — options: "[object Object]", formFields: "[object Object]"
18. **Is email code correct?** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Success** `form` — operation: **completion**
20. **Fail email code** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the process of verifying phone numbers and email addresses using text-to-speech (TTS) voice calls and email verification. When a form is submitted, it sends a voice call with a verification code to the given phone number and an email with a separate code to the provided email address. The user must then enter these codes to confirm their phone number and email address.

**Demonstrate:**  
A business owner could use this workflow to verify new customer contact information, ensuring that phone numbers and emails are valid before adding them to their CRM, reducing invalid entries and improving communication efficiency.

**Imitate:**  
1. Import the workflow to n8n.
2. Set up the ClickSend and email credentials.
3. Configure the form with your desired fields.
4. Test the workflow by submitting the form with your contact details.
5. Enter the received verification codes to complete the process.

**Practice:**  
Create a test form with your phone number and email. Submit it to trigger the workflow. Check if you receive both the voice call and email with verification codes. Enter the codes to see if the verification is successful.

**WIIFM:**  
Mastering this workflow can enhance your service offerings by providing secure and efficient contact verification for clients, reducing erroneous data entry and improving customer engagement in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBasicAuth, smtp.
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
  