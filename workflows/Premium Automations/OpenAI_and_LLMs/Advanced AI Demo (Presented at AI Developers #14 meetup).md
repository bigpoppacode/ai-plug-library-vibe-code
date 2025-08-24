# Advanced AI Demo (presented At AI Developers #14 Meetup)

## 🚀 What It Does
This workflow automates a process involving slack, stickyNote, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: Send message (slack)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Execute JavaScript (code)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
8. **Step 7: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
10. **Step 9: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
12. **Step 11: Vector Store Retriever (retrieverVectorStore)** - This step performs a key action in the workflow.
13. **Step 12: Download PDF (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: PDFs to download (noOp)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Read Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
18. **Step 17: Question and Answer Chain (chainRetrievalQa)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Anthropic Chat Model (lmChatAnthropic)** - This step performs a key action in the workflow.
22. **Step 21: Get calendar availability (toolHttpRequest)** - This step performs a key action in the workflow.
23. **Step 22: Appointment booking agent (agent)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Insert into Pinecone vector store (vectorStorePinecone)** - This step performs a key action in the workflow.
30. **Step 29: Book appointment (toolHttpRequest)** - This step performs a key action in the workflow.
31. **Step 30: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
35. **Step 34: Add automation label (gmail)** - This step performs a key action in the workflow.
36. **Step 35: On new email to nathan's inbox (gmailTrigger)** - This step performs a key action in the workflow.
37. **Step 36: Add music label (gmail)** - This step performs a key action in the workflow.
38. **Step 37: Assign label with AI (textClassifier)** - This step performs a key action in the workflow.
39. **Step 38: Webhook (webhook)** - This step performs a key action in the workflow.
40. **Step 39: Whether email contains n8n (if)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates tasks such as sending Slack messages, processing PDFs, generating AI responses, and scheduling appointments. It connects various services, allowing data to flow seamlessly and enabling efficient task execution without manual intervention.

### Demonstrate
A business owner could use this workflow to automatically handle appointment requests via a chat interface. When a customer asks to book a meeting, the workflow checks calendar availability, confirms the appointment, and sends a confirmation message, saving time and enhancing customer service.

### Imitate
1. Import the workflow into n8n.
2. Set up a Webhook trigger to receive incoming chat messages.
3. Add a Slack node to send notifications for new appointments.
4. Integrate Google Calendar for checking availability.
5. Use OpenAI for generating responses or confirmations.
6. Test the workflow by simulating an appointment request.

### Practice
Create a simplified version of the workflow that only sends a Slack message when a new email arrives in your inbox. Set up the Gmail trigger and connect it to the Slack node, customizing the message to include the email sender's name.

### WIIFM
Mastering this workflow enables you to provide valuable automation services to clients, helping them streamline operations, save time, and improve customer engagement. This skill can lead to increased business opportunities and potential income as a consultant or service provider.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Send message" and "Whether email contains n8n" for IDs, table names, and URLs.
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
