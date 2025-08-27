# Splitout Filter Automate Triggered
## 🚀 What It Does
Automates a flow using stickyNote×11, lmChatOpenAi×6, bambooHr×5.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
4. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkOverlap: "100"
6. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
7. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **Vector Store Tool** `toolVectorStore` — name: "company_files", topK: "5", description: "Retrieves information from the company handbook, 401k policies, benefits overview, and expense policies available to all employees."
9. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
10. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
11. **Employee Lookup Tool** `toolWorkflow` — name: "employee_lookup_tool", workflowId: "[object Object]", description: "Call this tool with the full name of an employee to retrieve their details from our HRIS, including their job title, department, and supervisor. If an employee name is not provided…[truncated]"
12. **OpenAI Chat Model2** `lmChatOpenAi` — options: "[object Object]"
13. **OpenAI Chat Model3** `lmChatOpenAi` — options: "[object Object]"
14. **OpenAI Chat Model4** `lmChatOpenAi` — options: "[object Object]"
15. **Auto-fixing Output Parser** `outputParserAutofixing` — configured for its default action.
16. **OpenAI Chat Model5** `lmChatOpenAi` — options: "[object Object]"
17. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"name": "The name of an employee"
}"
18. **Sticky Note** `stickyNote` — color: "7", width: "1695.17727595829", height: "582.7965199011514"
19. **Sticky Note1** `stickyNote` — color: "4", width: "873.5637402697844", height: "780.6181567295652"
20. **Sticky Note2** `stickyNote` — color: "7", width: "2783.3549952823255", height: "781.525845027296"
21. **Sticky Note3** `stickyNote` — color: "5", width: "177.89252000024067", height: "99.24268260893132"
22. **Sticky Note4** `stickyNote` — color: "5", width: "530.9221622705562", height: "91.00370621080086"
23. **Employee initiates a conversation** `chatTrigger` — options: "[object Object]"
24. **Supabase Vector Store Retrieval** `vectorStoreSupabase` — options: "[object Object]", tableName: "[object Object]"
25. **Sticky Note5** `stickyNote` — width: "865.771928038017", height: "281.07009330339326", content: "### AI Chatbot Operating Guidelines 
- When an employee asks for a contact person, first attempt to find the relevant contact in company_files. 
- If a contact person is found but …[truncated]"
26. **AI-Powered HR Benefits and Company Policies Chatbot** `executeWorkflowTrigger` — configured for its default action.
27. **Sticky Note6** `stickyNote` — color: "3", width: "340.93489445096634", height: "180.79319430657273"
28. **Sticky Note7** `stickyNote` — color: "5", width: "542.9452105095002", height: "89.69037140899545"
29. **Sticky Note8** `stickyNote` — color: "5", width: "542.9452105095002", height: "121.0648445295759"
30. **Sticky Note9** `stickyNote` — color: "5", width: "300.8019702746294", height: "97.8161667645835"
31. **Sticky Note10** `stickyNote` — color: "4", width: "244.3952545193282", height: "87.34661077350344"
32. **GET all files** `bambooHr` — resource: **file**, operation: **getAll**
33. **HR AI Agent** `agent` — options: "[object Object]"
34. **Text Classifier** `textClassifier` — options: "[object Object]", inputText: "={{ $json.query.name }}", categories: "[object Object]"
35. **Filter out files from undesired categories** `filter` — options: "[object Object]", conditions: "[object Object]"
36. **GET all employees** `bambooHr` — operation: **getAll**
37. **GET all employees (second path)** `bambooHr` — operation: **getAll**
38. **Split out individual files** `splitOut` — options: "[object Object]", fieldToSplitOut: "files"
39. **Filter out other employees** `filter` — options: "[object Object]", conditions: "[object Object]"
40. **Extract departments** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
41. **Filter out non-pdf files** `filter` — options: "[object Object]", conditions: "[object Object]"
42. **Stringify employee record for response** `set` — options: "[object Object]", assignments: "[object Object]"
43. **Ensure uniqueness in department list** `set` — options: "[object Object]", assignments: "[object Object]"
44. **Download file from BambooHR** `bambooHr` — resource: **file**, operation: **download**
45. **Extract department** `informationExtractor` — text: "={{ $json.query }}", options: "[object Object]", attributes: "[object Object]"
46. **Supabase Vector Store** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", tableName: "[object Object]"
47. **Retrieve all employees** `bambooHr` — operation: **getAll**
48. **Filter out other departments** `filter` — options: "[object Object]", conditions: "[object Object]"
49. **Extract relevant employee fields** `aggregate` — include: "specifiedFields", options: "[object Object]", aggregate: "aggregateAllItemData"
50. **Identify most senior employee** `chainLlm` — text: "=Who is the most senior employee from this list:
{{ $json.department_employees.toJsonString() }}", promptType: "define", hasOutputParser: "true"
51. **Format name for response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow acts as an AI-powered HR chatbot that retrieves and processes employee-related information. It integrates with BambooHR to obtain employee data and company policies, utilizes OpenAI models to generate responses, and uses a Supabase vector store to manage and retrieve document embeddings for accurate information retrieval. The workflow is designed to assist employees with questions about company policies and employee details by searching company files and using AI to provide informed answers.

- **Demonstrate**: A company could implement this workflow to automate the HR inquiry process. For example, when an employee has a question about their 401k policy, the chatbot can quickly provide the answer by searching through stored documents and data, reducing the need for direct HR intervention.

- **Imitate**: 
  1. Set up an n8n instance and import the workflow.
  2. Connect your BambooHR and OpenAI accounts.
  3. Configure the vector store with your company documents.
  4. Customize the workflow to match your HR policies and employee data.
  5. Test the chatbot with sample queries to ensure accurate responses.

- **Practice**: Create a test scenario where an employee asks about a specific company policy. Run the workflow and analyze the chatbot's response. Modify the documents or embeddings in the vector store and observe changes in the chatbot's accuracy.

- **WIIFM**: By mastering this workflow, you can offer AI-driven HR solutions to businesses, helping them automate employee inquiries and improve efficiency. This can attract clients looking to streamline HR operations and enhance employee satisfaction, leading to increased business opportunities and revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, bambooHrApi, supabaseApi.

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
