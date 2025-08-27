# Airtoptool Slack Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **Click** `airtopTool` — resource: **interaction**
3. **Query** `airtopTool` — resource: **extraction**, operation: **query**, prompt: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt', `Ask anything and request to extract information from the current page, e.g. "Is there any sign-up form? yes or no"`, '…[truncated]"
4. **Load URL** `airtopTool` — resource: **window**, operation: **load**, url: `={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('URL', ``, 'string') }}`
5. **End session** `airtopTool` — operation: **terminate**
6. **Type** `airtopTool` — resource: **interaction**, operation: **type**
7. **Start browser** `toolWorkflow` — name: "Start_Browser", workflowId: "[object Object]", description: "Start a new browser session and window"
8. **Claude 3.5 Haiku** `lmChatAnthropic` — model: `[object Object]`
9. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Instruction for the Web AI Agent", formFields: "[object Object]"
10. **Sticky Note1** `stickyNote` — color: "5", width: "220", height: "300"
11. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"results": {
			"type": "string",
            "description": "Synthesis of the agent's results. Must include all the relevant information re…[truncated]"
12. **Sticky Note** `stickyNote` — color: "7", width: "220", height: "340"
13. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
14. **AI Agent** `agent` — text: "={{ $json.Prompt }}", options: "[object Object]", promptType: "define"
15. **Session** `airtop` — profileName: "={{ $json.profile_name }}"
16. **Output** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Window** `airtop` — resource: **window**, url: `={{ $('When Executed by Another Workflow').item.json.url }}`
18. **Slack1** `slack` — text: "={{ $json.output }}", select: "channel", channelId: "[object Object]"
19. **Slack** `slack` — text: "={{ $json.data.liveViewUrl }}", select: "channel", channelId: "[object Object]"
20. **Return IDs** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow automates interactions with web pages using an AI agent. It starts a browser session, loads a URL, interacts with page elements by clicking or typing, queries the page for information, and ends the session. The results are parsed and sent via Slack, making it useful for web data extraction and automation tasks.

- **Demonstrate**: A developer might use this workflow to automate data extraction from competitor websites for market analysis, saving time and ensuring up-to-date information is collected consistently.

- **Imitate**: To adapt this workflow, start by importing it into n8n. Customize the URL and interaction details to match your target website. Set up Slack to receive notifications. Test the workflow to ensure it interacts with the page as expected and extracts the required data.

- **Practice**: Create a simple experiment by setting up a workflow to navigate to a news website, extract the headlines, and send them to a Slack channel. Adjust the query settings to ensure accurate data extraction.

- **WIIFM**: Mastering this workflow enables you to offer automated web data extraction services, a valuable tool for businesses needing competitive insights. This can enhance your service offerings, attract new clients, and increase your income in the AI automation sector.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtopApi, anthropicApi, slackOAuth2Api.
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
  