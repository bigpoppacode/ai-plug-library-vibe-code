# Stickynote Splitinbatches Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×5, code×4, set×3.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $('When chat message received').first().json.sessionId }}", sessionIdType: "customKey", contextWindowLength: "99"
4. **Sticky Note** `stickyNote` — color: "4", width: "500", height: "500"
5. **Sticky Note1** `stickyNote` — color: "4", width: "360", height: "720"
6. **Sticky Note2** `stickyNote` — color: "5", width: "2180", height: "1100"
7. **Sticky Note3** `stickyNote` — width: "380", height: "360", content: "## About this workflow

**What does this workflow do?**
Enables you to initiate a conversation with multiple AI agents at once. Each agent can be configured with a unique name, sys…[truncated]"
8. **Sticky Note4** `stickyNote` — width: "380", height: "360", content: "**How does it work?**
Settings are configured in the first two nodes after the chat trigger. Then @mentions in your message are extracted and fed into a loop. With each loop, the a…[truncated]"
9. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `={{ $('Extract mentions').item.json.model }}`
10. **Define Global Settings** `code` — jsCode: "// Configure Global settings. This includes information about you - the user - and a section of the System Message that all Assistants will see. (Assistant-specific System Message …[truncated]"
11. **Define Agent Settings** `code` — jsCode: "// Configure Assistants. The number of Assistants can be changed by adding or removing JSON objects. Use the OpenRouter model naming convention.
return [
  {
    json: {
      "Cha…[truncated]"
12. **Extract mentions** `code` — jsCode: "// Analyzes the user message and extracts @mentions in the order they appear. If there are none, all Assistants will be called in random order.
// --- Configuration: Adjust these l…[truncated]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow allows users to interact with multiple AI agents in a single conversation. When a chat message is received, it extracts @mentions to identify which agents should respond. Each agent is configured with unique names and models, and they process the message in a loop. Their responses are then combined and formatted for the user.

**Demonstrate:**  
A digital marketing agency could use this workflow to simultaneously consult multiple AI agents for campaign strategies, receiving diverse insights in one go.

**Imitate:**  
1. Import the workflow into n8n.
2. Configure agent settings with desired names and models.
3. Set up a chat trigger to initiate the workflow.
4. Test by sending a message with @mentions to see responses from specific agents.

**Practice:**  
Create a test chat environment and send messages with different @mentions. Observe how the workflow processes each mention and combines the responses. Adjust agent configurations and test again.

**WIIFM:**  
Mastering this workflow allows you to offer advanced AI consulting services, enabling clients to leverage multi-agent conversations for diverse insights. This can enhance customer satisfaction, improve decision-making, and generate income by offering unique AI-driven solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** openRouterApi.

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
