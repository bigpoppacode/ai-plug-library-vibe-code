# Telegram Stickynote Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $('Telegram Trigger').item.json.message.from.id }}", sessionIdType: "customKey"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Check permissions** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
5. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
7. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
8. **Simple Memory1** `memoryBufferWindow` — sessionKey: "={{ $('Settings').item.json.sessionId }}_weather_check", sessionIdType: "customKey"
9. **Check permissions1** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
10. **list_granted_roles** `toolCode` — name: "list_granted_roles", jsCode: "// Example: convert the incoming query to uppercase and return it
return "You are assigned the following roles: " + $input.item.json.granted_roles.join(", ");", description: "Call this tool to tell the user which roles they have been granted."
11. **list_allowed_tools** `toolCode` — name: "list_allowed_tools", jsCode: "return "You have access to the following tools: " + $input.item.json.allowed_tools.join(", ");", description: "Call this tool to tell the user which tools they have access to."
12. **calculator** `toolCalculator` — configured for its default action.
13. **Wikipedia** `toolWikipedia` — configured for its default action.
14. **get_coordinates** `toolHttpRequest` — url: `https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1`
15. **get_weather** `toolHttpRequest` — url: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true`
16. **weather_agent** `toolWorkflow` — name: "weather_agent", workflowId: "[object Object]", workflowInputs: "[object Object]"
17. **Sticky Note** `stickyNote` — width: "220", height: "300", content: "## Choose Base
Copy [this Airtable Template](https://airtable.com/appi5nijuvzQbZLJJ/shr8OkLysG1VtlCiz) into your workspace and select that Base here"
18. **Sticky Note1** `stickyNote` — height: "300", content: "## Choose workflow
Select the current workflow as the workflow that should be called"
19. **Sticky Note2** `stickyNote` — color: "7", width: "380", height: "220"
20. **Sticky Note3** `stickyNote` — color: "7", width: "200", height: "220"
21. **Sticky Note4** `stickyNote` — color: "7", width: "380", height: "240"
22. **Sticky Note5** `stickyNote` — color: "7", width: "220", height: "240"
23. **Sticky Note7** `stickyNote` — color: "7", width: "220", height: "240"
24. **Sticky Note8** `stickyNote` — color: "7", width: "380", height: "220"
25. **Sticky Note9** `stickyNote` — color: "7", width: "380", height: "240"
26. **Sticky Note6** `stickyNote` — color: "6", width: "200", height: "220"
27. **Sticky Note10** `stickyNote` — color: "7", width: "200", height: "220"
28. **Sticky Note11** `stickyNote` — color: "7", width: "220", height: "240"
29. **Sticky Note12** `stickyNote` — color: "7", width: "220", height: "240"
30. **Get user permissions** `airtable` — operation: **search**, table: `[object Object]`
31. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Unknown user** `if` — options: "[object Object]", conditions: "[object Object]"
33. **Weather Agent** `agent` — options: "[object Object]"
34. **Reply: unknown user** `telegram` — text: "=Unknown user '{{ $('Telegram Trigger').item.json.message.from.username }}'. Please contact your supervisor.", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
35. **Set input** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Main Agent** `agent` — text: "={{ $('Telegram Trigger').item.json.message.text }}", options: "[object Object]", promptType: "define"
37. **Reply with results** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow is designed to manage user interactions and permissions through Telegram using a combination of Airtable and OpenAI. When a user sends a message via Telegram, the workflow checks their permissions in Airtable. If the user is recognized, it processes their message using OpenAI to provide responses or execute tasks, depending on the tools they are authorized to use. If unrecognized, it notifies them to contact their supervisor.

### Demonstrate
A company could use this workflow to automate customer support via Telegram. Authorized users receive immediate responses or actions based on their queries, while unauthorized users are directed to contact support, ensuring secure access and efficient service.

### Imitate
1. Import the workflow into n8n.
2. Connect your Telegram and Airtable accounts.
3. Set up an Airtable base with user permissions.
4. Customize the OpenAI prompts for specific tasks.
5. Test the workflow by sending messages from different user accounts to see how permissions affect responses.

### Practice
Create a mock Airtable database with different user roles and test the workflow by sending various queries via Telegram. Adjust permissions and observe changes in responses, ensuring the workflow accurately handles user access.

### WIIFM
By mastering this workflow, you can offer powerful automation solutions that enhance communication and service delivery for businesses. This capability can attract new clients and increase revenue by providing tailored, efficient automation services that leverage AI and secure data management.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, airtableTokenApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
