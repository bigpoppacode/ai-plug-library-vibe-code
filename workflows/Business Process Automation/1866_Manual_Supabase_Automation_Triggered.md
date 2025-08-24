# Manual Supabase Automation Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, lmChatGoogleGemini.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Set sample Input Variables (set)** - This step performs a key action in the workflow.
4. **Step 3: GeminiFlash2.0 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
5. **Step 4: Supabase Postgres Database (memoryPostgresChat)** - This step performs a key action in the workflow.
6. **Step 5: Update additonal Values e.g. Name, Address ... (supabase)** - This step performs a key action in the workflow.
7. **Step 6: Sample Agent  (agent)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates data handling by triggering actions when a user clicks to test it. It sets sample input variables, processes them through an AI model (Gemini 2.0), stores data in a Supabase database, and updates records with additional values.

### Demonstrate
A business owner could use this workflow to automatically process customer inquiries. When a customer submits a query, the workflow captures their info, analyzes it with AI, stores it, and updates their record, streamlining customer service.

### Imitate
1. Create a new n8n workflow and add a **Manual Trigger** node.
2. Use a **Set** node to define sample input variables (e.g., session_id, name, chatInput).
3. Add a **GeminiFlash2.0** node to process the input.
4. Integrate a **Supabase Postgres Database** node to store the output.
5. Use another **Supabase** node to update additional values.
6. Connect everything and test the workflow.

### Practice
Try modifying the sample input variables in the **Set** node to see how changes affect the workflow output. Experiment with different values and observe how the AI processes them.

### WIIFM
Mastering this workflow allows you to automate data processing tasks, saving time and reducing errors. This can help you attract clients seeking efficient solutions, enabling you to offer value-added services and potentially increasing your income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sample Agent " for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
