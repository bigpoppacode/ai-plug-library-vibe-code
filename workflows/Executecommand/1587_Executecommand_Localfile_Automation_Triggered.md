# Executecommand Localfile Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, executeCommand×2, set×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Local File Trigger**.
  2. **Local File Trigger** `localFileTrigger` — path: `//home/node/host_mount/shared_drive`
3. **Mistral Cloud Chat Model** `lmChatMistralCloud` — model: `mistral-small-2402`
4. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "array",
	"items": {
 	"type": "object",
 "properties": {
 "folder": { "type": "string" },
 "files": {
 "type": "array",
 "items": { "type": "string" }
 }
		}
 }
}"
5. **Sticky Note** `stickyNote` — color: "7", width: "483.7926535356806", height: "501.2939838391483"
6. **Sticky Note1** `stickyNote` — color: "7", width: "583.2857596176409", height: "391.527066537946"
7. **Sticky Note2** `stickyNote` — color: "7", width: "631.2649908751414", height: "506.8242545618477"
8. **Sticky Note3** `stickyNote` — color: "7", width: "401.0065589583014", height: "374.8503908496576"
9. **Sticky Note4** `stickyNote` — width: "372.51107341403605", height: "422.70324544339167", content: "## Try It Out!
### This workflow does the following:
* Monitors a target folder for changes using the local file trigger
* identifies all files and subdirectories in the target fol…[truncated]"
10. **Sticky Note5** `stickyNote` — color: "3", width: "438.23697639546396", height: "97.88076166036412"
11. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Get Files and Folders** `executeCommand` — command: "=ls -p {{ $json.directory }} | grep -v / || true; \
echo "==="; \
ls -p {{ $json.directory }} | grep / || true;"
13. **Files and Folders to Array** `set` — options: "[object Object]", assignments: "[object Object]"
14. **If Has Target Files...** `if` — options: "[object Object]", conditions: "[object Object]"
15. **AI File Manager** `chainLlm` — text: "=Here is the list of current files in the directory:
{{ $json.files.map(file => `* ${file}`).join('\n') }}

Here is the list of current folders in the directory:
{{ $json.folders.l…[truncated]", messages: "[object Object]", promptType: "define"
16. **Get Suggestions to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
17. **Move Files into Folders** `executeCommand` — command: "=directory="{{ $('Set Variables').item.json.directory }}"
subdirectory="$directory/{{ $json.folder }}";
file_list="{{ $json.files.join(' ') }}";

# create subdirectory if not exist…[truncated]", executeOnce: "false"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of organizing files in a shared directory. It monitors a specified folder for new files, identifies these files and subdirectories, and then uses Mistral AI to suggest how to categorize and move these files into appropriate subdirectories. If necessary, it creates new folders based on the AI's suggestions and moves files accordingly.

**Demonstrate:**  
A small business owner can use this workflow to automatically organize incoming files from a shared drive, ensuring that documents are neatly categorized without manual intervention, saving time and reducing clutter.

**Imitate:**  
1. Import the workflow into n8n.
2. Set the path for the Local File Trigger to your desired directory.
3. Ensure Mistral AI and the necessary command nodes are configured.
4. Test with a few files to see how they get organized.
5. Adjust settings as needed for your specific file types and categories.

**Practice:**  
Create a test directory with a mix of document types (e.g., PDFs, Word docs). Run the workflow and observe how files are categorized. Experiment with renaming files to see how categorization suggestions change.

**WIIFM (What's In It For Me):**  
Mastering this workflow can help you offer services in file management automation, streamlining operations for businesses. This capability can enhance your portfolio, attract clients needing efficient file organization, and potentially increase your income as an automation consultant.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mistralCloudApi.
  
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
  