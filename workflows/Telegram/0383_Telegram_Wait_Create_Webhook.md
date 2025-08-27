# Telegram Wait Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram-Bot**.
2. **Sticky Note** `stickyNote` — color: "7", width: "629.040241216464", height: "1416.261500302191"
3. **Sticky Note1** `stickyNote` — color: "3", width: "734.3067601294108", height: "466.5190319644644"
4. **Sticky Note2** `stickyNote` — color: "5", width: "656", height: "473"
5. **Sticky Note3** `stickyNote` — color: "3", width: "1409.9137494026593", height: "422"
6. **Telegram-Bot** `telegramTrigger` — updates: "message,channel_post", additionalFields: "[object Object]"
7. **Sticky Note4** `stickyNote` — color: "6", width: "1413.320293398532", height: "460.58353708231465"
8. **Bot-Config** `set` — fields: "[object Object]", options: "[object Object]"
9. **Format** `code` — jsCode: "function escapeRedisJsonSyntax(value) {
  if (typeof value === 'string') {
    return value.replace(/["\\/]/g, '\\$&');
  }
  return value;
}

const outputItems = [];

for (let i =…[truncated]"
10. **Bot-Fields** `set` — mode: "raw", include: "selected", options: "[object Object]"
11. **1st** `switch` — rules: "[object Object]", value1: "={{ $json.chat_type || $json.channel_post_sender_chat_type }}", dataType: "string"
12. **Check User in Database** `redis` — operation: **keys**
13. **Support Forum** `if` — conditions: "[object Object]"
14. **IF Verified Channel** `if` — conditions: "[object Object]"
15. **New User ?** `if` — conditions: "[object Object]"
16. **From Ticket** `if` — conditions: "[object Object]"
17. **Retrieve all users in DB** `redis` — operation: **keys**
18. **Save User Data** `redis` — operation: **set**
19. **Update User Data** `redis` — operation: **set**
20. **Forward Support Reply To User** `httpRequest` — method: **POST**, url: `[redacted]`
21. **IF Topic Created** `if` — conditions: "[object Object]"
22. **Format Users** `code` — jsCode: "let response = items[0].json; // get the Redis response
let newItems = []; // to store the new items

for(let key in response) {
    if(response.hasOwnProperty(key)) {
        newI…[truncated]"
23. **Create Topic (Chat Ticket)** `httpRequest` — url: `[redacted]`
24. **Get User Chat Topic** `redis` — operation: **get**
25. **Send User Ticket Created Notification** `telegram` — text: "A new ticket has been created for you. Please wait while one of our support team members becomes available to reply.", chatId: "={{ $json.forum_topic_created_name.match(/\[id:(\d+)\]/)[1] }}", additionalFields: "[object Object]"
26. **Filter Blocked Users** `filter` — conditions: "[object Object]"
27. **Save Topic ID** `redis` — operation: **set**
28. **Forward New Message** `httpRequest` — method: **POST**, url: `[redacted]`
29. **IF No Topic Created** `if` — conditions: "[object Object]"
30. **ReCreate Topic (Chat Ticket)** `httpRequest` — url: `[redacted]`
31. **ReSave Topic ID** `redis` — operation: **set**
32. **Forward New Message to the recrated topic** `httpRequest` — method: **POST**, url: `[redacted]`
33. **No Operation, do nothing** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** redis, telegramApi.
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
