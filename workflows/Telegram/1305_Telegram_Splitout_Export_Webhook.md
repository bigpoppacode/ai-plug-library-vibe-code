# Telegram Splitout Export Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note7**.
2. **Sticky Note7** `stickyNote` — color: "4", width: "340", height: "380"
3. **Sticky Note8** `stickyNote` — width: "280", height: "380", content: "## Save To Current Chat Memory"
4. **Sticky Note9** `stickyNote` — color: "4", width: "280", height: "380"
5. **gpt-4o-mini** `lmChatOpenAi` — options: "[object Object]"
6. **Sticky Note** `stickyNote` — color: "3", width: "280", height: "380"
7. **Sticky Note1** `stickyNote` — width: "360", height: "300", content: "## Telegram 
(Optional)"
8. **Sticky Note2** `stickyNote` — color: "5", width: "1320", height: "780"
9. **Sticky Note10** `stickyNote` — color: "4", width: "280", height: "380"
10. **Sticky Note11** `stickyNote` — color: "4", width: "340", height: "380"
11. **Sticky Note5** `stickyNote` — color: "7", width: "420", height: "260"
12. **Sticky Note3** `stickyNote` — color: "6", width: "1289", height: "432"
13. **Sticky Note12** `stickyNote` — color: "6", width: "513", height: "309"
14. **Sticky Note6** `stickyNote` — color: "6", width: "513", height: "329"
15. **Sticky Note13** `stickyNote` — color: "4", width: "753", height: "669"
16. **Sticky Note14** `stickyNote` — color: "3", width: "273", height: "269"
17. **Postgres Chat Memory** `memoryPostgresChat` — sessionKey: "={{ $('Listen for Telegram Events').item.json.body.message.from.id }}", sessionIdType: "customKey", contextWindowLength: "50"
18. **Save Note Tool** `baserowTool` — operation: **create**, table: `640`
19. **Save Memory** `baserowTool` — operation: **create**, table: `639`
20. **Listen for Telegram Events** `webhook` — method: **POST**, path: `/gram`
21. **Sticky Note15** `stickyNote` — color: "6", width: "273", height: "269"
22. **Window Memory (Easy Mode)** `memoryBufferWindow` — sessionKey: "={{ $('Listen for Telegram Events').item.json.body.message.from.id }}", sessionIdType: "customKey", contextWindowLength: "50"
23. **Sticky Note4** `stickyNote` — width: "280", height: "520", content: "## Baserow Set-up:
- Create a new Workspace called "Memories and Notes"
- Create a table within the new workspace called "Memory Table"
- Within the "Memory Table" table, create tw…[truncated]"
24. **Sticky Note16** `stickyNote` — color: "6", width: "720", height: "1180"
25. **Sticky Note17** `stickyNote` — color: "5", width: "540", height: "1120"
26. **Sticky Note18** `stickyNote` — width: "150", height: "80", content: "## *Setup validation"
27. **Sticky Note19** `stickyNote` — width: "200", height: "120", content: "## *Setup Prompt
"
28. **Validation** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
29. **Check User & Chat ID** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "="
30. **Message Router** `switch` — rules: "[object Object]", options: "[object Object]"
31. **Get Audio File** `telegram` — resource: **file**
32. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Image Schema1** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Error message** `telegram` — text: "=Unable to process your message.", chatId: "={{ $json.body.message.chat.id }}", additionalFields: "[object Object]"
35. **Transcribe Recording** `openAi` — resource: **audio**, operation: **transcribe**
36. **Get Image** `telegram` — resource: **file**
37. **caption** `splitOut` — options: "[object Object]", fieldToSplitOut: "caption"
38. **Extract from File to Base64** `extractFromFile` — operation: **binaryToPropery**
39. **Convert to Image File** `convertToFile` — operation: **toBinary**
40. **Analyze Image** `openAi` — resource: **image**, operation: **analyze**
41. **Merge1** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
42. **Edit Fields1** `set` — options: "[object Object]", assignments: "[object Object]"
43. **Baserow Retrieve Memories** `baserow` — table: `639`
44. **Baserow Retrieve Notes** `baserow` — table: `640`
45. **Merge** `merge` — configured for its default action.
46. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
47. **AI Tools Agent** `agent` — text: "={{
  (() => {
    try {
      return $('Edit Fields').item.json.text;
    } catch (e) {
      return undefined;
    }
  })() ||
  (() => {
    try {
      return $('Edit Fields1')…[truncated]", options: "[object Object]", promptType: "define"
48. **Telegram Response** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"
49. **Chat Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to act as an AI assistant, integrating with Telegram and Baserow to manage notes and long-term memories. It processes input from Telegram, such as text, audio, and images, using OpenAI for transcription and analysis. It stores relevant information as notes and memories in Baserow tables for easy retrieval and context-aware responses.

**Demonstrate:**  
A business owner could use this workflow to automate customer interaction on Telegram, storing important customer preferences and past interactions in Baserow for personalized service and improved customer satisfaction.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect Telegram, Baserow, and OpenAI accounts.
3. Set up Baserow tables for notes and memories.
4. Test with sample Telegram interactions to ensure notes/memories are saved.
5. Adjust AI prompts to fit your business needs.

**Practice:**  
Create a Telegram bot and interact with it using text and images. Observe how the workflow saves notes and memories in Baserow. Try customizing the AI prompts to change how it responds to different inputs.

**WIIFM:**  
Mastering this workflow enables you to offer automation services that enhance customer engagement and personalization. By managing interactions and memories efficiently, you can provide high-value services to clients, increasing business opportunities and income in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, postgres, baserowApi.

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
