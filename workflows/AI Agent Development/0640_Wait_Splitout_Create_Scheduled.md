# Wait Splitout Create Scheduled

## 🚀 What It Does
This workflow automates a process involving httpRequest, convertToFile, extractFromFile.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Create Session (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: List followers (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Convert to File (convertToFile)** - This step performs a key action in the workflow.
5. **Step 4: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
6. **Step 5: Split Out (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
8. **Step 7: Wait (wait)** - This step performs a key action in the workflow.
9. **Step 8: Find new followers (code)** - This step performs a key action in the workflow.
10. **Step 9: Read followers from file (readWriteFile)** - This step performs a key action in the workflow.
11. **Step 10: Save followers to file (readWriteFile)** - This step performs a key action in the workflow.
12. **Step 11: Define welcome message (set)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Send message (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: Get conversation ID (httpRequest)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Each 60 minutes (scheduleTrigger)** - This step performs a key action in the workflow.
20. **Step 19: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of welcoming new followers on BlueSky. It checks for new followers every hour, saves their details, and sends them a personalized welcome message with a link to the user's website.

### Demonstrate
A business owner can use this workflow to automatically greet new followers on social media, enhancing engagement and saving time. For example, a consultant can welcome new clients with tailored messages, improving relationships without manual effort.

### Imitate
1. Import the workflow into n8n.
2. Set up your BlueSky account details in the "Create Session" node.
3. Define your personalized welcome message in the "Define welcome message" node.
4. Run the workflow to test it with existing followers.
5. Enable the schedule to run every hour for automatic updates.

### Practice
Create a variation of the workflow that sends a different message to new followers based on their engagement level (e.g., followers with over 1000 followers get a special offer). Test it with sample data.

### WIIFM
Mastering this workflow allows you to streamline communication processes, save time, and enhance customer engagement, making you more valuable to clients and increasing your potential income in automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Create Session" and "No Operation, do nothing" for IDs, table names, and URLs.
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
