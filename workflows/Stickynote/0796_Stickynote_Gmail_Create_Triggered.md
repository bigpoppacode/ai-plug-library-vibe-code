# Stickynote Gmail Create Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
4. **Sticky Note11** `stickyNote` — color: "4", width: "715", height: "716"
5. **Sticky Note** `stickyNote` — width: "520", height: "720", content: "## Get the and Validate  New Email"
6. **Sticky Note1** `stickyNote` — color: "3", width: "520", height: "720"
7. **Sticky Note2** `stickyNote` — color: "5", width: "520", height: "720"
8. **Sticky Note3** `stickyNote` — color: "4", width: "520", height: "720"
9. **Emails from Existing Contracts** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Reply** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Text Classifier** `textClassifier` — options: "[object Object]", inputText: "={{ $('Gmail Trigger').item.json.subject }}
{{ $('Gmail Trigger').item.json.text }}", categories: "[object Object]"
12. **GuestPost Inquiry** `emailSend` — html: "=<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

<p>Hello,</p>

<p>Thank you for reaching out! We’re thrilled to help you gain…[truncated]", options: "[object Object]", subject: "=Re: {{ $('Gmail Trigger').item.json.subject }}"
13. **Youtube Video Inquiry** `emailSend` — html: "=<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
…[truncated]", options: "[object Object]", subject: "=Re: {{ $('Gmail Trigger').item.json.subject }}"
14. **Send Email** `emailSend` — html: "=<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
…[truncated]", options: "[object Object]", subject: "=Re:  {{ $('Gmail Trigger').item.json.Subject }}"
15. **Mark as Read** `gmail` — operation: **markAsRead**
16. **Apply Label** `gmail` — operation: **addLabels**
17. **Create Contact in Brevo** `sendInBlue` — resource: **contact**, operation: **upsert**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of handling incoming emails. It begins with a Gmail trigger that detects new emails, followed by filtering emails from existing contacts. It then classifies the emails using a text classifier to determine if they are related to guest posts, YouTube inquiries, or Udemy courses. Based on the classification, it sends an appropriate email response. After responding, it marks the email as read, applies a label, and creates a contact in Brevo for future communication.

**Demonstrate:**  
A consultant could use this workflow to manage client inquiries efficiently, ensuring each type of inquiry receives a tailored response, enhancing client satisfaction and reducing manual email sorting.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Gmail and Brevo accounts.
3. Set up the Gmail trigger and text classifier categories.
4. Customize email responses for each category.
5. Activate the workflow and test with sample emails.

**Practice:**  
Create a test Gmail account and send different types of emails (guest post, YouTube inquiry, etc.) to it. Run the workflow and observe how it automatically classifies and responds to each email, updating records in Brevo.

**WIIFM:**  
Mastering this workflow allows you to offer automated email management services, saving businesses time and improving response efficiency. This skill can attract clients seeking to streamline their communication processes, leading to potential business growth and increased revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, googlePalmApi, smtp, sendInBlueApi.
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
