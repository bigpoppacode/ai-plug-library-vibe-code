# ExecuteWorkflow Slack Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note1** `stickyNote` — color: "7", width: "1118.3459011229047", height: "775.3931210698682"
3. **Sticky Note2** `stickyNote` — color: "7", width: "927.5", height: "486.5625"
4. **Sticky Note** `stickyNote` — color: "5", width: "197.45572294791873", height: "179.21380662202682"
5. **Sticky Note5** `stickyNote` — color: "2", width: "150", height: "213.44323866265472"
6. **Sticky Note4** `stickyNote` — color: "2", width: "178.0499248677781", height: "250.57252651663197"
7. **Sticky Note3** `stickyNote` — color: "4", width: "185.9375", height: "214.8397420554627"
8. **Sticky Note6** `stickyNote` — height: "145", content: "## Next steps

Learn more about [Advanced AI in n8n](https://docs.n8n.io/advanced-ai/)"
9. **When chat message received** `chatTrigger` — options: "[object Object]"
10. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
11. **Simple Memory** `memoryBufferWindow` — configured for its default action.
12. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
13. **Not sure?** `toolWorkflow` — name: "dont_know_tool", workflowId: "[object Object]", description: "Use this tool if you don't know the answer to the user's question, or if you're not very confident about your answer."
14. **AI Agent** `agent` — options: "[object Object]"
15. **Check if user has provided email** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Message Slack for help** `slack` — text: "={{ "A user had a question the bot couldn't answer. Here's their message: " + $('When Executed by Another Workflow').first().json.chatInput }}", select: "channel", channelId: "[object Object]"
17. **Prompt the user to provide an email** `code` — jsCode: "const response = {"response":"I'm sorry I don't know the answer. Please repeat your question and include your email address so I can request help."};
return response;"
18. **Confirm that we've messaged a human** `code` — jsCode: "const response = {"response": "Thank you for getting in touch. I've messaged a human to help."}
return response;"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow serves as a customer support assistant, using AI to interact with users via chat. When a chat message is received, it triggers an AI Agent to attempt to answer the user's question. If the AI cannot find an answer, it checks if the user has provided an email address. If not, the workflow prompts the user for an email. If the email is provided, a Slack message is sent to notify human support for assistance.

### Demonstrate
A business could use this workflow to enhance customer service by automatically addressing common queries through AI, reducing the load on human staff. This ensures quicker response times and allows human agents to focus on more complex issues.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and Slack accounts.
3. Set up a chat trigger to start the workflow.
4. Customize the AI responses and email prompts to fit your business needs.
5. Test the workflow to ensure it correctly routes unanswered queries to human agents.

### Practice
Create a test chat scenario where the AI cannot answer a question. Observe how the workflow prompts for an email and sends a Slack notification to a human agent. Adjust settings to improve the AI's response accuracy.

### WIIFM
Mastering this workflow allows you to offer automated customer support solutions, improving client satisfaction and efficiency. This can enhance your service offerings and generate additional revenue streams in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, slackApi.
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
  