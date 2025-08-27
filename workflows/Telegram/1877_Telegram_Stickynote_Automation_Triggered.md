# Telegram Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×4, executeWorkflowTrigger, agent.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Sticky Note** `stickyNote` — color: "5", width: "389", height: "381"
5. **Sticky Note1** `stickyNote` — color: "6", width: "489", height: "381"
6. **Simple Memory** `memoryBufferWindow` — configured for its default action.
7. **Sticky Note3** `stickyNote` — width: "349", height: "381", content: "# Improved prompt:

- Send as a response

- Use as input for next nodes"
8. **Sticky Note2** `stickyNote` — color: "7", width: "1249", height: "541"
9. **AI Agent** `agent` — text: "={{ $json.query }}", options: "[object Object]", promptType: "define"
10. **Split into chunks1** `code` — jsCode: "// Get the entire output of the previous node
let text = $input.all() || '';

// Convert the output to a string if it's not already
if (typeof text !== 'string') {
  text = JSON.st…[truncated]"
11. **Telegram3** `telegram` — text: "={{ $json.text }}", chatId: "={{ $('When Executed by Another Workflow').item.json.chat_id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to enhance and optimize prompts using AI. It begins by being triggered from another workflow. The input prompt is processed by an AI model, which refines it by adding clarity and specificity. The improved prompt is then prepared for delivery and sent back to the user via Telegram, ensuring it is ready for further use in workflows or processes.

**Demonstrate:**  
A content creator could use this workflow to refine their prompts for AI-generated content creation, ensuring precise and effective communication with AI, thereby improving the quality of the output and saving time on revisions.

**Imitate:**  
1. Import the workflow into your n8n setup.  
2. Connect your OpenAI and Telegram accounts.  
3. Set the workflow to be triggered by another workflow.  
4. Customize the AI model settings to suit your needs.  
5. Test the workflow to ensure the optimized prompt is delivered correctly via Telegram.

**Practice:**  
Create a test workflow to trigger the prompt optimization process. Use a simple prompt and observe how the AI refines it. Experiment with different prompts to see how the workflow handles various input styles.

**WIIFM:**  
Mastering this workflow allows you to offer prompt optimization services, enhancing the quality of AI-driven projects. This can lead to better client outcomes, higher satisfaction, and opportunities to charge premium rates for AI consulting services, boosting your business's profitability.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, openAiApi.

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
