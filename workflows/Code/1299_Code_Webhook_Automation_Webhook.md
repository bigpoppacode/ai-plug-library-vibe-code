# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note2** `stickyNote` — color: "7", width: "1163.3132111854613", height: "677.0358687053997"
3. **Sticky Note** `stickyNote` — color: "7", width: "437", height: "99"
4. **Sticky Note3** `stickyNote` — color: "6", width: "318", height: "106"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000", chunkOverlap: "200"
6. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
7. **Default Data Loader** `documentDefaultDataLoader` — loader: "pdfLoader", options: "[object Object]", dataType: "binary"
8. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
9. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
10. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
11. **PDFs to download** `noOp` — configured for its default action.
12. **Sticky Note4** `stickyNote` — color: "4", width: "414.36616595939887", height: "91.0723900084547"
13. **Sticky Note5** `stickyNote` — color: "4", width: "284.62109466374466", height: "86.95121951219511"
14. **Read Pinecone Vector Store** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
15. **Sticky Note6** `stickyNote` — color: "6", width: "504.25", height: "106"
16. **Sticky Note7** `stickyNote` — color: "6", width: "318", height: "111"
17. **Anthropic Chat Model** `lmChatAnthropic` — options: "[object Object]"
18. **Get calendar availability** `toolHttpRequest` — method: **POST**, url: `https://www.googleapis.com/calendar/v3/freeBusy`
19. **Appointment booking agent** `agent` — options: "[object Object]"
20. **Sticky Note1** `stickyNote` — color: "7", width: "327.46658341463433", height: "571.8601927804875"
21. **Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "10"
22. **Sticky Note8** `stickyNote` — color: "7", width: "615.2162978341456", height: "403.1877919219511"
23. **Sticky Note9** `stickyNote` — color: "7", width: "345.33741540309194", height: "398.9629539487597"
24. **Sticky Note10** `stickyNote` — color: "7", width: "411.2946586626259", height: "197.19036476628202"
25. **Book appointment** `toolHttpRequest` — method: **POST**, url: `https://www.googleapis.com/calendar/v3/calendars/max@n8n.io/events`
26. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "Hi there! 👋
I can help you schedule an appointment with Max Tkacz. On which day would you like to meet?"
27. **Sticky Note11** `stickyNote` — color: "7", width: "411.2946586626259", height: "80"
28. **Sticky Note12** `stickyNote` — color: "7", width: "411.2946586626259", height: "80"
29. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o`
30. **On new email to nathan's inbox** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
31. **Webhook** `webhook` — path: `/74facfd7-0f51-4605-9724-2c300594fcf9`
32. **Download PDF** `httpRequest` — url: `={{ $json.file_url }}`
33. **Question and Answer Chain** `chainRetrievalQa` — text: "={{ $json.chatInput }}. 
Only use vector store knowledge to answer the question. Don't make anything up. If you don't know the answer, tell the user that you don't know.", promptType: "define"
34. **Assign label with AI** `textClassifier` — options: "[object Object]", inputText: "={{ $json.text }}", categories: "[object Object]"
35. **Whether email contains n8n** `if` — options: "[object Object]", conditions: "[object Object]"
36. **Insert into Pinecone vector store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
37. **Add automation label** `gmail` — operation: **addLabels**
38. **Add music label** `gmail` — operation: **addLabels**
39. **Execute JavaScript** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
 item.json.myNewField = 1;
}

return $input.all();"
40. **Send message** `slack` — text: "=Data from webhook: {{ $json.query.email }}", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates email management by categorizing incoming emails based on their content. It checks if an email contains the term "n8n" and, if so, executes a JavaScript code to add a new field to the email data. The workflow then sends a notification to a Slack channel with the email details. This ensures that specific emails are flagged for further attention, streamlining communication and prioritization.

**Demonstrate:**  
A business owner could use this workflow to automatically flag all emails related to n8n workflows, ensuring they are prioritized and handled promptly by the relevant team.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up a Gmail trigger for incoming emails.  
3. Configure the "if" node to check for specific keywords.  
4. Connect the Slack node to send notifications to your desired channel.  
5. Test the workflow with sample emails.

**Practice:**  
Create a test email with the subject containing "n8n" and send it to the linked inbox. Observe how the workflow processes and categorizes this email, and notifies the Slack channel accordingly.

**WIIFM:**  
By mastering this workflow, you can offer email management services to clients, helping them automate their communication processes. This can lead to increased efficiency, better customer engagement, and open opportunities to upsell additional automation services.
  
  ## 🔧 Setup Instructions
  1. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  