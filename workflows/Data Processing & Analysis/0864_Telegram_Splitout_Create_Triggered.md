# Telegram Splitout Create Triggered

## 🚀 What It Does
This workflow automates a process involving chatTrigger, lmChatOpenAi, outputParserStructured.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
5. **Step 4: Get Audio File (telegram)** - This step performs a key action in the workflow.
6. **Step 5: Transcribe Recording (openAi)** - This step performs a key action in the workflow.
7. **Step 6: Limit (limit)** - This step performs a key action in the workflow.
8. **Step 7: Receive Telegram message (telegramTrigger)** - This step performs a key action in the workflow.
9. **Step 8: If it's a voice message (if)** - This step performs a key action in the workflow.
10. **Step 9: Set chatInput from message (set)** - This step performs a key action in the workflow.
11. **Step 10: Set chatInput from voice (set)** - This step performs a key action in the workflow.
12. **Step 11: List of Ingredients and nutrients (agent)** - This step performs a key action in the workflow.
13. **Step 12: Explode the list (splitOut)** - This step performs a key action in the workflow.
14. **Step 13: Add date (code)** - This step performs a key action in the workflow.
15. **Step 14: Store in sheet (googleSheets)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Respond message (telegram)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of receiving a chat message or voice note through Telegram, transcribing it using OpenAI, analyzing the nutritional content of the meal described, and storing the results in Google Sheets. It ensures efficient data handling and response to users.

### Demonstrate
A restaurant owner could use this workflow to allow customers to send meal descriptions via Telegram. The automation calculates nutritional values and logs them in a Google Sheet for easy tracking, helping the owner provide better dietary information to customers.

### Imitate
1. Set up a Telegram bot and connect it to n8n.
2. Create a webhook trigger for receiving messages.
3. Add nodes to transcribe voice messages and analyze text using OpenAI.
4. Use a Google Sheets node to log the results.
5. Test the workflow with sample messages or voice notes.

### Practice
Try sending different meal descriptions via Telegram to see how the workflow processes them. Experiment with adding new nutritional queries to OpenAI and observe how the output changes, enhancing your understanding of the automation.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to clients in the food and wellness industries, helping them track dietary information efficiently. This can lead to new business opportunities, increased customer satisfaction, and potential income streams through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When chat message received" and "Sticky Note7" for IDs, table names, and URLs.
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
