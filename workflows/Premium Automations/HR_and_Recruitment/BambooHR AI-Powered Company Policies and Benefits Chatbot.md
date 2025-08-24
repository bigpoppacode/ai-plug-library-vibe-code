# Bamboohr AI Powered Company Policies And Benefits Chatbot

## 🚀 What It Does
This workflow automates a process involving manualTrigger, documentDefaultDataLoader, embeddingsOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
4. **Step 3: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
6. **Step 5: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
7. **Step 6: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: Vector Store Tool (toolVectorStore)** - This step performs a key action in the workflow.
9. **Step 8: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: Employee Lookup Tool (toolWorkflow)** - This step performs a key action in the workflow.
12. **Step 11: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: OpenAI Chat Model3 (lmChatOpenAi)** - This step performs a key action in the workflow.
14. **Step 13: OpenAI Chat Model4 (lmChatOpenAi)** - This step performs a key action in the workflow.
15. **Step 14: Auto-fixing Output Parser (outputParserAutofixing)** - This step performs a key action in the workflow.
16. **Step 15: OpenAI Chat Model5 (lmChatOpenAi)** - This step performs a key action in the workflow.
17. **Step 16: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: GET all files (bambooHr)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Filter out files from undesired categories (filter)** - This step performs a key action in the workflow.
24. **Step 23: Split out individual files (splitOut)** - This step performs a key action in the workflow.
25. **Step 24: Filter out non-pdf files (filter)** - This step performs a key action in the workflow.
26. **Step 25: Download file from BambooHR (bambooHr)** - This step performs a key action in the workflow.
27. **Step 26: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Employee initiates a conversation (chatTrigger)** - This step performs a key action in the workflow.
30. **Step 29: Supabase Vector Store Retrieval (vectorStoreSupabase)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: AI-Powered HR Benefits and Company Policies Chatbot (executeWorkflowTrigger)** - This step performs a key action in the workflow.
33. **Step 32: Text Classifier (textClassifier)** - This step performs a key action in the workflow.
34. **Step 33: GET all employees (bambooHr)** - This step performs a key action in the workflow.
35. **Step 34: Filter out other employees (filter)** - This step performs a key action in the workflow.
36. **Step 35: Stringify employee record for response (set)** - This step performs a key action in the workflow.
37. **Step 36: GET all employees (second path) (bambooHr)** - This step performs a key action in the workflow.
38. **Step 37: Extract departments (aggregate)** - This step performs a key action in the workflow.
39. **Step 38: Ensure uniqueness in department list (set)** - This step performs a key action in the workflow.
40. **Step 39: Extract department (informationExtractor)** - This step performs a key action in the workflow.
41. **Step 40: Retrieve all employees (bambooHr)** - This step performs a key action in the workflow.
42. **Step 41: Filter out other departments (filter)** - This step performs a key action in the workflow.
43. **Step 42: Extract relevant employee fields (aggregate)** - This step performs a key action in the workflow.
44. **Step 43: Identify most senior employee (chainLlm)** - This step performs a key action in the workflow.
45. **Step 44: Format name for response (set)** - This step performs a key action in the workflow.
46. **Step 45: HR AI Agent (agent)** - This step performs a key action in the workflow.
47. **Step 46: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
48. **Step 47: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
49. **Step 48: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
50. **Step 49: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
51. **Step 50: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of retrieving company policies and benefits from BambooHR, utilizing AI for chat interactions. It fetches employee data, processes it, and allows employees to inquire about policies via a chatbot, streamlining HR responses.

### Demonstrate
A business owner might use this workflow to enhance employee engagement. For instance, an HR manager can deploy the chatbot to answer employee queries about benefits, reducing the time spent on routine inquiries and allowing HR to focus on strategic tasks.

### Imitate
1. Import the workflow into n8n.
2. Connect your BambooHR and OpenAI accounts.
3. Adjust the settings for your specific company policies.
4. Test the chatbot by triggering a conversation and asking HR-related questions.
5. Refine responses based on employee feedback.

### Practice
Try modifying the workflow to include additional policies or benefits. Create a new node that logs the inquiries made by employees, allowing you to analyze which policies are most commonly queried.

### WIIFM
Mastering this workflow can help you offer valuable services to businesses by automating HR processes. This not only enhances employee satisfaction but also positions you as a provider of efficient automation solutions, potentially increasing your income through service contracts.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note10" for IDs, table names, and URLs.
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
