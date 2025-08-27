# Schedule Stickynote Send Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note1** `stickyNote` — width: "320", height: "280", content: "## Update email addresses
Update From and To email addresses in this node to receive notifications"
3. **Sticky Note** `stickyNote` — width: "320", height: "260", content: "## Check VPS resource usage every 15 minutes
This workflow checks VPS CPU, RAM and Disk usage every 15 minutes and if any of it exceeds 80% will inform you by email"
4. **Sticky Note2** `stickyNote` — width: "360", height: "280", content: "## Update threshold
If needed, you can increase/decrease the 80% threshold in this node individually per resource "
5. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Check RAM usage** `ssh` — command: "free | awk '/Mem:/ {printf "%.2f", (1 - $7/$2) * 100}'"
7. **Check Disk usage** `ssh` — command: "df -h | awk '$NF=="/"{printf "%.2f", $5}'"
8. **Check CPU usage** `ssh` — command: "top -bn 1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}'"
9. **Merge check results** `merge` — mode: "combineBySql", query: "SELECT input1.stdout as CPU, input2.stdout as Disk, input3.stdout as RAM FROM input1 LEFT JOIN input2 ON input1.name = input2.id LEFT JOIN input3 ON input1.name = input3.id", numberInputs: "3"
10. **Check results against thresholds** `if` — conditions: "[object Object]", combineOperation: "any"
11. **Send Email** `emailSend` — text: "=System resources are above the threshold.

CPU: {{ $json.CPU.toNumber().round(2) }}%
RAM: {{ $json.RAM.toNumber().round(2) }}%
Disk: {{ $json.Disk.toNumber().round(2) }}%", options: "[object Object]", subject: "System Resource Alert"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow monitors a Virtual Private Server (VPS) by checking its CPU, RAM, and Disk usage every 15 minutes. If any usage exceeds 80%, it sends an alert email to notify the user, helping to ensure the server is running efficiently and avoiding potential downtime.

- **Demonstrate:** A business owner might use this workflow to keep their website's server running smoothly by receiving alerts if server resources are overused, preventing potential crashes or slowdowns, which could result in lost sales or customer dissatisfaction.

- **Imitate:** 1. Import the workflow into n8n. 2. Update the email addresses in the "Send Email" node. 3. Adjust the 80% threshold if needed in the "Check results against thresholds" node. 4. Activate the workflow to start monitoring.

- **Practice:** Create a test environment with simulated high resource usage to see how the workflow reacts. Adjust the alert thresholds and observe how notifications change with different server loads.

- **WIIFM:** Mastering this workflow equips you to offer server monitoring as a service, ensuring clients' servers run optimally. This can enhance your service portfolio, attract new clients, and create recurring revenue streams by offering maintenance and monitoring packages.

## 🔧 Setup Instructions
1. **Connect Credentials:** smtp, sshPassword.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
