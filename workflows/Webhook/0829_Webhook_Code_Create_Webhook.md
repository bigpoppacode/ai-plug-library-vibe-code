# Webhook Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note7**.
2. **Sticky Note** `stickyNote` — color: "4", width: "190", height: "80"
3. **Sticky Note1** `stickyNote` — width: "230", height: "80", content: "## Check Availability
"
4. **Sticky Note2** `stickyNote` — width: "310", height: "80", content: "## If time available Respond
"
5. **Sticky Note3** `stickyNote` — width: "190", height: "80", content: "## Get All Events
"
6. **Sticky Note4** `stickyNote` — width: "350", height: "100", content: "## Get Available Slots

Format the slots and Enrich the date and timings
"
7. **Sticky Note5** `stickyNote` — width: "230", height: "80", content: "## Respond to Vapi"
8. **Sticky Note BookSlot Webhook** `stickyNote` — color: "5", width: "190", height: "80"
9. **Sticky Note BookSlot Check** `stickyNote` — width: "230", height: "80", content: "Checks if required booking info (email, name, etc.) is provided."
10. **Sticky Note BookSlot Error** `stickyNote` — width: "190", height: "80", content: "If info missing, sends error back."
11. **Sticky Note BookSlot GCal** `stickyNote` — width: "190", height: "80", content: "Books the appointment in Google Calendar."
12. **Sticky Note BookSlot Error Handle** `stickyNote` — width: "230", height: "80", content: "Handles potential booking errors (e.g., slot taken)."
13. **Sticky Note BookSlot Response** `stickyNote` — width: "210", height: "80", content: "Sends confirmation/error back to Vapi."
14. **Sticky Note BookSlot Airtable** `stickyNote` — width: "230", height: "80", content: "Logs the confirmed booking details to Airtable."
15. **Sticky Note CancelSlot Webhook** `stickyNote` — color: "3", width: "250", height: "80"
16. **Sticky Note CancelSlot Check** `stickyNote` — width: "230", height: "80", content: "Checks if required info (email, name, start time) is provided."
17. **Sticky Note CancelSlot Error** `stickyNote` — width: "150", height: "80", content: "If info missing, sends error back."
18. **Sticky Note CancelSlot Search** `stickyNote` — width: "190", height: "100", content: "Finds the appointment record in Airtable by phone number to get event ID."
19. **Sticky Note CancelSlot GCal Delete** `stickyNote` — width: "190", height: "80", content: "Deletes the event from Google Calendar using event ID."
20. **Sticky Note CancelSlot Airtable Update** `stickyNote` — width: "190", height: "80", content: "Updates Airtable record status to 'Canceled'."
21. **Sticky Note CancelSlot Response** `stickyNote` — width: "190", height: "80", content: "Sends cancellation confirmation/error back to Vapi."
22. **Sticky Note UpdateSlot Webhook** `stickyNote` — color: "6", width: "250", height: "80"
23. **Sticky Note UpdateSlot Check** `stickyNote` — width: "230", height: "80", content: "Checks if required info (email, name, old/new times) is provided."
24. **Sticky Note UpdateSlot Error** `stickyNote` — width: "190", height: "80", content: "If info missing, sends error back."
25. **Sticky Note UpdateSlot Search** `stickyNote` — width: "190", height: "80", content: "Finds original appointment in Airtable by old phone number"
26. **Sticky Note UpdateSlot GCal Update** `stickyNote` — width: "190", height: "80", content: "Updates the event time in Google Calendar."
27. **Sticky Note UpdateSlot Airtable Update** `stickyNote` — width: "170", height: "100", content: "Updates Airtable record with new times & 'Updated' status."
28. **Sticky Note UpdateSlot Response** `stickyNote` — width: "230", height: "80", content: "Sends rescheduling confirmation/error back to Vapi."
29. **Sticky Note CallResults Webhook** `stickyNote` — color: "2", width: "390", height: "120"
30. **Sticky Note CallResults Airtable** `stickyNote` — width: "230", height: "80", content: "Logs call transcript, recording URL, summary, cost, customer number to Airtable."
31. **Getslot_tool** `webhook` — method: **POST**, path: `/getslots`
32. **bookslots_tool** `webhook` — method: **POST**, path: `/bookslots`
33. **Updateslots_tool** `webhook` — method: **POST**, path: `/updateslots`
34. **CancelSlots_tool** `webhook` — method: **POST**, path: `/cancelslots`
35. **call_results** `webhook` — method: **POST**, path: `/callresults`
36. **Sticky Note7** `stickyNote` — color: "4", width: "1680", height: "2700"
37. **Sticky Note15** `stickyNote` — color: "7", width: "191", height: "80"
38. **Sticky Note16** `stickyNote` — color: "7", width: "191", height: "80"
39. **Sticky Note17** `stickyNote` — color: "7", width: "191", height: "80"
40. **Sticky Note18** `stickyNote` — color: "7", width: "191", height: "80"
41. **Sticky Note19** `stickyNote` — color: "7", width: "191", height: "80"
42. **Sticky Note9** `stickyNote` — color: "7", width: "1460", height: "1540"
43. **Sticky Note12** `stickyNote` — color: "7", width: "3700", height: "4400"
44. **Input Arguments** `set` — options: "[object Object]", assignments: "[object Object]"
45. **Input Arguments from booking tools** `set` — options: "[object Object]", assignments: "[object Object]"
46. **Input Arguments from updateslot tool** `set` — options: "[object Object]", assignments: "[object Object]"
47. **Input Arguments from cancelslot tool** `set` — options: "[object Object]", assignments: "[object Object]"
48. **All Input Arguments** `set` — options: "[object Object]", assignments: "[object Object]"
49. **Check Availability** `googleCalendar` — resource: **calendar**
50. **Has all information** `if` — options: "[object Object]", conditions: "[object Object]"
51. **Checks if required info is provided.** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
52. **Checks if required info is provided for cancelation** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
53. **Save all information** `airtable` — operation: **upsert**, table: `[object Object]`
54. **Check if time is available or not** `if` — options: "[object Object]", conditions: "[object Object]"
55. **Escape Json** `code` — mode: "runOnceForEachItem", jsCode: "const escapeStringForJson = (str) => {
    return str
        .replace(/\\/g, '\\\\') // Escape backslashes
        .replace(/"/g, '\\"')    // Escape double quotes
        .replac…[truncated]"
56. **Build Error Response Payload** `set` — options: "[object Object]", assignments: "[object Object]"
57. **Finds original appointment** `airtable` — operation: **search**, table: `[object Object]`
58. **Build Error Response Payload2** `set` — options: "[object Object]", assignments: "[object Object]"
59. **Finds the appointment record** `airtable` — operation: **search**, table: `[object Object]`
60. **Build Error Response** `set` — options: "[object Object]", assignments: "[object Object]"
61. **Time available (true) & Call_id** `set` — options: "[object Object]", assignments: "[object Object]"
62. **Get All Calendar Events** `googleCalendar` — operation: **getAll**
63. **Convert time to CST America / Chicago** `code` — jsCode: "// Get all input items
const items = $input.all();

// Loop through each item
for (const item of items) {
  // Get the values from the current item's JSON data
  const startTimeUTC…[truncated]"
64. **Respond with Error** `respondToWebhook` — options: "[object Object]"
65. **Update Event** `googleCalendar` — operation: **update**
66. **Response with Error** `respondToWebhook` — options: "[object Object]"
67. **Delete Event** `googleCalendar` — operation: **delete**
68. **Respond with Error to Vapi** `respondToWebhook` — options: "[object Object]"
69. **Response** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
    "results":[
        {
            "toolCallId":"{{ $('Getslot_tool').first().json.body.message.toolCalls[0].id }}",
            "result":"available:{{ $json.available }}"
  …[truncated]"
70. **Extract start, end and name** `set` — options: "[object Object]", assignments: "[object Object]"
71. **Create Event** `googleCalendar` — end: "={{ $json.endtime }}", start: "={{ $json.starttime }}", calendar: "[object Object]"
72. **Updates Airtable record** `airtable` — operation: **update**, table: `[object Object]`
73. **Update Airtable record** `airtable` — operation: **update**, table: `[object Object]`
74. **Sort** `itemLists` — operation: **sort**
75. **Booking Payload** `set` — options: "[object Object]", assignments: "[object Object]"
76. **Add Friendly Error** `code` — mode: "runOnceForEachItem", jsCode: "function replaceValue(value) {
  if (error.message.include('no_available_users_found_error')) {
    return "This time slot is no longer available.";
  }
  return value;
}

$input.i…[truncated]"
77. **Response & call_id** `set` — options: "[object Object]", assignments: "[object Object]"
78. **Call_id & Response** `set` — options: "[object Object]", assignments: "[object Object]"
79. **Format response** `itemLists` — operation: **concatenateItems**
80. **Success Response** `set` — options: "[object Object]", assignments: "[object Object]"
81. **Error Response** `set` — options: "[object Object]", assignments: "[object Object]"
82. **Respond to Vapi about Updating slots** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
    "results":[
        {
            "toolCallId":"{{ $json.results[0].toolCallId }}",
            "result":"{{ $json.results[0].result }}"
        }
    ]
}"
83. **Respond to Vapi about cancelation** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
    "results":[
        {
            "toolCallId":"{{ $json.results[0].toolCallId }}",
            "result":"{{ $json.results[0].result }}"
        }
    ]
}"
84. **Available Start Times & Ranges** `code` — jsCode: "// Input data
const inputData = $input.all()[0].json.response;

// Define workday hours in CST
const WORKDAY_START = "09:00:00 CST";
const WORKDAY_END = "18:00:00 CST";
const SLOT_…[truncated]"
85. **Respond to Vapi** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
    "results":[
        {
            "toolCallId":"{{ $json.results[0].toolCallId }}",
            "result":"available:{{ $json.results[0].result }}"
        }
    ]
}"
86. **Flatten Slots** `code` — mode: "runOnceForEachItem", jsCode: "const flattenSlots = (data) => {
  // If data is missing or empty, return an empty array of slots
  if (!data) {
    return { slots: [] };
  }

  // data is an object whose keys ar…[truncated]"
87. **If the booking is confirmed then true** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
88. **Enrich Date** `code` — mode: "runOnceForEachItem", jsCode: "function formatTimeSlot(dateString) {
  // Format options for date/time with America/Chicago timezone
  const options = {
    timeZone: 'America/Chicago',
    weekday: 'long',
    …[truncated]"
89. **Information to be Saved in Airtable** `set` — options: "[object Object]", assignments: "[object Object]"
90. **Build Response Payload** `set` — options: "[object Object]", assignments: "[object Object]"
91. **Logs the confirmed booking details** `airtable` — operation: **create**, table: `[object Object]`
92. **Convert into Json format for Vapi** `code` — jsCode: "// Get the input data for the first item
const inputData = $input.first().json;
console.log("Input Data:", inputData); // Log input for debugging

// Access the message string from…[truncated]"
93. **Response to Vapi** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
    "results":[
        {
            "toolCallId":"{{ $('Getslot_tool').first().json.body.message.toolCalls[0].id }}",
            "result":"The original time is not available,…[truncated]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates appointment management using Google Calendar, Airtable, and a voice AI receptionist powered by Vapi. It facilitates booking, updating, and canceling appointments. When a request is received, it checks calendar availability, books or updates events in Google Calendar, logs details in Airtable, and sends confirmations or errors back to Vapi.

### Demonstrate
A business could use this workflow to streamline scheduling for client meetings, reducing administrative workload and ensuring all appointments are accurately logged and managed. This enhances efficiency and customer satisfaction by providing real-time scheduling capabilities.

### Imitate
1. Set up Google Calendar and Airtable accounts.
2. Import the workflow into your n8n instance.
3. Configure your Google Calendar and Airtable credentials in n8n.
4. Customize the Airtable tables to match your data structure.
5. Test the workflow by sending booking requests and checking the responses.

### Practice
Create a test scenario by setting up a mock Airtable base and Google Calendar. Run the workflow with sample booking requests to observe how it handles different scenarios like available slots, booking conflicts, and cancellations.

### WIIFM
Mastering this workflow allows you to offer automated scheduling solutions to clients, reducing their administrative burden and improving their operational efficiency. This can be a valuable service, leading to increased client satisfaction and potential revenue growth for your automation business.

## 🔧 Setup Instructions
1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.

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
