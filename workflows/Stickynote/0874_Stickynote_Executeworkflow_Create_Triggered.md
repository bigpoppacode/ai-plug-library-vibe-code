# Stickynote ExecuteWorkflow Create Triggered
## 🚀 What It Does
Automates a flow using stickyNote×5, code×3, toolWorkflow×3.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "680", height: "660"
4. **Sticky Note1** `stickyNote` — color: "7", width: "820", height: "720"
5. **Sticky Note3** `stickyNote` — color: "5", width: "380", height: "100"
6. **SQLite MCP Server** `mcpTrigger` — path: `/3124a4cd-4e93-4c1b-b4db-b5599f4889b1`
7. **DescribeTables** `toolCode` — name: "describeTable", jsCode: "const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const db = new sqlite3.Database('/home/node/test.db');
const all = promisify(db.all.bind(db));…[truncated]", schemaType: "manual"
8. **ListTables** `toolCode` — name: "listTables", jsCode: "const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const db = new sqlite3.Database('/home/node/test.db');
const all = promisify(db.all.bind(db));…[truncated]", description: "Call this tool to list all available tables in the SQLite Database."
9. **CreateRecords** `toolWorkflow` — name: "CreateRecords", workflowId: "[object Object]", description: "Call this tool to create a row in a SQLite table."
10. **UpdateRows** `toolWorkflow` — name: "updateRows", workflowId: "[object Object]", description: "Call this tool to create a row in a table."
11. **ReadRows** `toolWorkflow` — name: "readRows", workflowId: "[object Object]", description: "Call this tool to read one or more rows in a table"
12. **Sticky Note2** `stickyNote` — width: "440", height: "1360", content: "## Try It Out!
**NOTE: This template is for Self-Hosted N8N Instances only.**

### This n8n demonstrates how to build a simple SQLite MCP server to perform local database operation…[truncated]"
13. **Sticky Note4** `stickyNote` — color: "3", width: "380", height: "100"
14. **Operation** `switch` — rules: "[object Object]", options: "[object Object]"
15. **ReadRecords** `code` — jsCode: "const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const db = new sqlite3.Database('/home/node/test.db');
const all = promisify(db.all.bind(db));…[truncated]"
16. **CreateRecord** `code` — jsCode: "const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const db = new sqlite3.Database('/home/node/test.db');
const run = promisify(db.run.bind(db));…[truncated]"
17. **UpdateRecord** `code` — jsCode: "const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const db = new sqlite3.Database('/home/node/test.db');
const run = promisify(db.run.bind(db));…[truncated]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow sets up a simple SQLite MCP server to manage a local database, allowing operations like reading, inserting, and updating records. It uses a trigger to execute workflows based on input parameters, such as operation type and table name. The workflow is designed for self-hosted environments and emphasizes security by avoiding raw SQL statements and using query parameters to protect against SQL injection.

### Demonstrate
A small business owner could use this workflow to automate their inventory management by easily adding, updating, or retrieving product data from a local SQLite database, enhancing operational efficiency and data accuracy.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up a self-hosted environment with SQLite.
3. Customize the workflow to match your database schema.
4. Test the workflow by executing different operations like read, insert, and update through the MCP server.

### Practice
Create a sample SQLite database with a few tables. Use the workflow to perform operations like adding a new product, updating stock levels, and retrieving product information. Observe how the workflow processes each operation type.

### WIIFM
Mastering this workflow enables you to offer robust database management solutions to clients, particularly those needing local data handling. It can expand your service offerings, attract more clients, and generate income by providing reliable, secure automation in your AI automation business.

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
