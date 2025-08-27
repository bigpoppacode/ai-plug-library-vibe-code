# ExecuteWorkflow Stickynote Automate Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, googleDrive×2, agent×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Receive results from any workflow**.
  2. **Sticky Note** `stickyNote` — width: "440", height: "680", content: "## Connect folder to Obsidian Vault 
**Setup Instructions:**
- Create a folder in your Google Drive that syncs with your desktop.
- Configure the Google Drive node as follows:
   -…[truncated]"
3. **Sticky Note1** `stickyNote` — width: "440", height: "680", content: "## Workflow results to Obsidian Vault 
This template automatically creates and updates notes in your Obsidian Vault in real-time from n8n workflow results. Markdown files and attac…[truncated]"
4. **Sticky Note2** `stickyNote` — color: "3", width: "460", height: "540"
5. **Receive results from any workflow** `executeWorkflowTrigger` — configured for its default action.
6. **Write Zettlekasten note from input1** `agent` — text: "={{ JSON.stringify($json) }}", options: "[object Object]", promptType: "define"
7. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "title": "Concise, Descriptive Title",
  "content": "Synthesized insights and key information"
}"
8. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
9. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "{
	"frontmatter": "frontmatter here"
}"
10. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
11. **Sticky Note3** `stickyNote` — color: "4", width: "880", height: "460"
12. **If the input has binary attachment** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Save Markdown file** `googleDrive` — operation: **createFromText**
14. **Write YAML Frontmatter** `agent` — text: "={{ $json.output.content }}", options: "[object Object]", promptType: "define"
15. **Save attachment** `googleDrive` — name: "=", driveId: "[object Object]", options: "[object Object]"
16. **Restructure JSON** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of converting workflow results into Markdown notes and storing them in an Obsidian Vault via Google Drive. It triggers from any workflow, creates Zettelkasten-style notes using AI agents, and saves them as Markdown files in Google Drive, which syncs with your Obsidian Vault through a symlink. It handles both text and binary attachments, ensuring real-time updates and organization of notes.

### Demonstrate
A content creator could use this workflow to automatically archive research notes, drafts, and ideas from various workflows into their Obsidian Vault for seamless organization and accessibility, enhancing their productivity and creative process.

### Imitate
1. Set up a Google Drive folder and sync it with your desktop.
2. Create a symlink to your Obsidian Vault.
3. Import the workflow to n8n and configure Google Drive and OpenAI nodes.
4. Trigger the workflow with data from any source.
5. Verify the notes appear in your Obsidian Vault.

### Practice
Create a test workflow that generates JSON data, then trigger the primary workflow to convert this data into Markdown notes. Check your Obsidian Vault to see how the notes are structured and organized.

### WIIFM
Mastering this workflow enables you to offer automated knowledge management solutions, improving content organization for clients. This can lead to new business opportunities, increased client satisfaction, and potential income from automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi.
  
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
  