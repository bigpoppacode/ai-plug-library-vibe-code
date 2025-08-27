# ExecuteWorkflow Executecommandtool Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, executeCommandTool×3, executeCommand×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **FileSystem MCP Server**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "680", height: "660"
3. **Sticky Note3** `stickyNote` — color: "5", width: "380", height: "100"
4. **FileSystem MCP Server** `mcpTrigger` — path: `/0d93cfd5-2fbf-457e-9535-5bfc9a73ba9e`
5. **ListDirectory** `executeCommandTool` — command: "=ls /home/node/{{ $fromAI('path', 'optional, leave blank for project root directory.') }}", toolDescription: "List directories under the project root folder. The project root directory is /home/node/"
6. **CreateDirectory** `executeCommandTool` — command: "=mkdir -p /home/node/{{ $fromAI('filename', 'name of directory. Will be scoped under the /home/node/ project root directory. Optionally use path to create within subdirectories') }…[truncated]", toolDescription: "Create directories under the project root folder. The project root folder is /home/node."
7. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
8. **ReadFiles** `toolWorkflow` — name: "readFil", workflowId: "[object Object]", description: "=Call this tool to read the contents of a file. Include file extension."
9. **WriteFiles** `toolWorkflow` — name: "write_file", workflowId: "[object Object]", description: "Call this tool to write contents to one or more files. Filenames and Contents are matched by their respective Array Indexes. Eg. To write to a single file, use { filenames: [<filen…[truncated]"
10. **SearchDirectory** `executeCommandTool` — command: "=find /home/node/ -name "{{ $fromAI('filename', 'A name search paramter for the linux find tool') }}"
", toolDescription: "Search the project folder for a file by name. The project root directory is /home/node/"
11. **Sticky Note1** `stickyNote` — color: "7", width: "740", height: "660"
12. **Sticky Note2** `stickyNote` — width: "460", height: "1120", content: "## Try It Out!
### This n8n demonstrates how to build a simple FileSystem MCP server. Connecting to this server allows MCP clients and agents to list, read and create directories a…[truncated]"
13. **Operation** `switch` — rules: "[object Object]", options: "[object Object]"
14. **writeOneOrMultipleFiles** `executeCommand` — command: "={{
$json.filenames.map((filename,idx) =>
  `echo "${$json.contents[idx] ?? ''}" > /home/node/${filename}`
).join('\n')
}}"
15. **readOneOrMultipleFiles** `executeCommand` — command: "=cat {{ $json.filenames.join(' ') }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow sets up a simple FileSystem MCP server that allows users to interact with files on a server. It can list directories, create directories, search for files, read file contents, and write data to files. The workflow uses various tools to manage files and directories, ensuring that operations are secure by restricting arbitrary command execution.

### Demonstrate
A developer could use this workflow to automate server file management tasks, like organizing logs or updating configuration files, without manually logging into the server. This reduces time spent on repetitive tasks and minimizes errors.

### Imitate
1. Import the workflow into n8n.
2. Configure the FileSystem MCP Server node with your server path.
3. Connect your MCP client to the server.
4. Use the ListDirectory, CreateDirectory, SearchDirectory, ReadFiles, and WriteFiles nodes to perform file operations.
5. Test by listing directories or creating a new directory.

### Practice
Create a directory structure on your local or remote server using this workflow. Try listing the directories, creating a new one, searching for a file, and reading its contents. Experiment with writing data to a file and checking the results.

### WIIFM
Mastering this workflow can help streamline file management tasks, offering a valuable service to businesses needing automated server file operations. This can lead to increased efficiency, reduced manual errors, and potential revenue from offering these automation services to clients.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  