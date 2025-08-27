# Telegram Code Create Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Sticky Note3** `stickyNote` — width: "780", height: "540", content: "### 5. Do you need more details?
Find a step-by-step guide in this tutorial
![Guide](https://www.samirsaci.com/content/images/2025/04/Telegram-Shipment-Tracking.png)
[🎥 Watch My T…[truncated]"
3. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
4. **Sticky Note5** `stickyNote` — color: "7", width: "1013", height: "1189"
5. **Sticky Note6** `stickyNote` — color: "7", width: "993", height: "1149"
6. **Initiate Workflow Data** `code` — jsCode: "let workflowStaticData = $getWorkflowStaticData('global');
if (!workflowStaticData.telegramStates) {
    workflowStaticData.telegramStates = {}; 
}
return workflowStaticData;"
7. **Sticky Note** `stickyNote` — width: "440", height: "380", content: "### 0. Initiate Workplace Static Data
Run it **once** before activating the workflow to initialize workspace data that will be used to **store state flags** and **outputs from user…[truncated]"
8. **Sticky Note1** `stickyNote` — color: "7", width: "620", height: "740"
9. **Command?** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Switch Command** `switch` — rules: "[object Object]", options: "[object Object]"
11. **Waiting Conditions** `code` — jsCode: "let globalData = $getWorkflowStaticData('global');
let state = "none"; // Default state

if (globalData && globalData.telegramStates) {
    let chatData = globalData.telegramStates…[truncated]"
12. **waitingShipmentNumber** `code` — jsCode: "let workflowStaticData = $getWorkflowStaticData('global');
if (!workflowStaticData.telegramStates) {
    workflowStaticData.telegramStates = {};
}
workflowStaticData.telegramStates…[truncated]"
13. **waitingGPS** `code` — jsCode: "let workflowStaticData = $getWorkflowStaticData('global');
if (!workflowStaticData.telegramStates) {
    workflowStaticData.telegramStates = {};
}
workflowStaticData.telegramStates…[truncated]"
14. **waitingPhoto** `code` — jsCode: "let workflowStaticData = $getWorkflowStaticData('global');
if (!workflowStaticData.telegramStates) {
    workflowStaticData.telegramStates = {};
}
workflowStaticData.telegramStates…[truncated]"
15. **Load Workspace Data** `code` — jsCode: "let workflowData = $getWorkflowStaticData('global');

return [
    {
        json: {
            shipmentNumber: workflowData.shipmentNumber || "Not available",
            gpsLati…[truncated]"
16. **Welcome Message** `telegram` — text: "=Hello {{ $json.message.chat.first_name }}! 👋  
I am **LogiGreenTrack**, your delivery tracking assistant. 🚛📦  

You can use the following commands:  

🚚 /addShipment - Start a…[truncated]", chatId: "={{ $json.message.chat.id }}", additionalFields: "[object Object]"
17. **Check State** `switch` — rules: "[object Object]", options: "[object Object]"
18. **addShipmentNumber** `telegram` — text: "📦 Please enter the delivery number for this shipment.", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", forceReply: "[object Object]"
19. **addGPS** `telegram` — text: "=📍 Please share your GPS location by clicking the 📎 attachment button.", chatId: "={{ $json.message.chat.id }}", forceReply: "[object Object]"
20. **sendPhoto** `telegram` — text: "=Please take a **photo of the shipment** and upload it here by clicking the 📎 attachment button.", chatId: "={{ $json.message.chat.id }}", forceReply: "[object Object]"
21. **Load Delivery Information** `googleSheets` — operation: **append**
22. **Confirmation Driver** `telegram` — text: "=<b>📦 Shipment Details</b>

<b>Shipment Number:</b> {{ $json.shipmentNumber }}

<b>📍 Location:</b>  
Lat: <code>{{ $json.gpsLatitude }}</code>  
Long: <code>{{ $json.gpsLongitude…[truncated]", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
23. **Distribution Team Confirmation** `gmail` — sendTo: "logigreenbot@logistics.com", message: "=<h2>📦 Delivery Confirmation</h2>

<p><b>Shipment Number:</b> {{ $json.shipmentNumber }}</p>

<p>📍 <b>Delivery Location:</b><br>
Lat: <code>{{ $json.gpsLatitude }}</code><br>
Lon…[truncated]", options: "[object Object]"
24. **Shipment Number** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Store GPS Location** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Get Picture** `telegram` — resource: **file**
27. **Instructions** `telegram` — text: "=Hello {{ $json.message.chat.first_name }}! 👋  
I am **LogiGreenTrack**, your delivery tracking assistant. 🚛📦  

You can use the following commands:  

🚚 /addShipment - Start a…[truncated]", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
28. **Clear State** `code` — jsCode: "let workflowStaticData = $getWorkflowStaticData('global');
if (workflowStaticData.telegramStates) {
    delete workflowStaticData.telegramStates[$('Telegram Trigger').first().json.…[truncated]"
29. **addShipmentNumber result** `telegram` — text: "=Recorded Shipment Number: {{ $json.shipmentNumber }}. 
Next step:📍 /addGPS - Add your GPS location", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
30. **Store Shipment** `code` — jsCode: "let workflowData = $getWorkflowStaticData('global');
workflowData.shipmentNumber = $input.first().json.shipmentNumber;
return $json;"
31. **addGPS result** `telegram` — text: "=Record GPS Coordinates: [{"latitude": {{ $json.latitude }}, "longitude": {{ $json.longitude }}}].  
Please continue with 📸 /sendPhoto to upload a picture of the shipment.", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
32. **Store GPS** `code` — jsCode: "let workflowData = $getWorkflowStaticData('global');
workflowData.gpsLatitude = $input.first().json.latitude
workflowData.gpsLongitude = $input.first().json.longitude
return $json;"
33. **Upload Picture** `googleDrive` — name: "=", driveId: "[object Object]", options: "[object Object]"
34. **Extract FileName** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Share Picture** `googleDrive` — operation: **share**
36. **Store fileName** `code` — jsCode: "let workflowData = $getWorkflowStaticData('global');
workflowData.fileName = $input.first().json.fileName
return $json;
"
37. **Save Public Image Link** `code` — jsCode: "let workflowData = $getWorkflowStaticData('global');

// Extract the file link from Google Drive node
let fileLink = $('Upload Picture').first().json.webContentLink || "No link ava…[truncated]"
38. **addPhoto result** `telegram` — text: "=Photo saved in a file named using shipment number. 
Please continue with 📩 /sendConfirmation to send a proof of delivery via email to the logistics team.
", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of tracking shipments using Telegram. It starts when a user sends a message in Telegram, prompting the user to enter a shipment number, GPS location, and a photo of the shipment. These details are stored and processed, with confirmations sent via Telegram and email.

- **Demonstrate:** A logistics company can use this workflow to streamline their delivery tracking process. Drivers use Telegram to update shipment details in real-time, reducing manual entry errors and ensuring timely updates to the logistics team.

- **Imitate:** 1. Set up a Telegram bot and connect it with n8n. 2. Import the workflow into n8n. 3. Customize the Telegram messages and Google Sheets document to fit your needs. 4. Initialize the workflow data and activate the workflow. 5. Test the workflow by simulating a shipment tracking update.

- **Practice:** Create a test Telegram bot and simulate a delivery process by entering test shipment data. Observe how the workflow processes each step and updates the Google Sheets document. Adjust the workflow to suit different shipment types or additional data points.

- **WIIFM:** Mastering this workflow enables you to offer delivery tracking automation services to logistics companies, enhancing their efficiency and reducing errors. This skill can expand your service offerings and create new revenue streams in the automation business.

## 🔧 Setup Instructions
1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
