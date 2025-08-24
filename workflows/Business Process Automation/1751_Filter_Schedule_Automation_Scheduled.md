# Filter Schedule Automation Scheduled

## 🚀 What It Does
This workflow automates a process involving httpRequest, itemLists, filter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Scan each IP (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Get watched IPs & Ports (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Split out services (itemLists)** - This step performs a key action in the workflow.
5. **Step 4: Unexpected port? (filter)** - This step performs a key action in the workflow.
6. **Step 5: Set data to post for each port (set)** - This step performs a key action in the workflow.
7. **Step 6: Convert to table (html)** - This step performs a key action in the workflow.
8. **Step 7: Convert to Markdown (markdown)** - This step performs a key action in the workflow.
9. **Step 8: For each IP (splitInBatches)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Every Monday (scheduleTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Create TheHive alert (theHive)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates the monitoring of IP addresses and their open ports by querying Shodan's API weekly. It identifies unexpected open ports and formats the data into readable reports for further action, improving security oversight.

### Demonstrate
A cybersecurity consultant can use this workflow to regularly check client servers for unexpected open ports, generating alerts in TheHive if vulnerabilities are detected. This proactive approach helps maintain security and compliance.

### Imitate
1. Import the workflow into n8n.
2. Configure the Shodan API key in the "Scan each IP" node.
3. Set the IP addresses to monitor in "Get watched IPs & Ports."
4. Adjust the schedule in "Every Monday" to your preference.
5. Test the workflow to ensure alerts are generated correctly.

### Practice
Create a test IP list and run the workflow to see how it identifies unexpected ports. Modify the report formatting in the "Convert to Markdown" node to customize the output style for easier readability.

### WIIFM
Mastering this workflow enables you to offer valuable cybersecurity services, helping clients protect their networks from vulnerabilities. This can lead to increased business opportunities, creating a niche in the growing field of cybersecurity automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Scan each IP" and "Sticky Note5" for IDs, table names, and URLs.
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
