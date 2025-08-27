# Filter Schedule Automation Scheduled
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, httpRequest×2, itemLists.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — width: "607.8070576425011", height: "564.6974012965735", content: "![Shodan](https://i.imgur.com/tK0RXSK.png)
## Format port service data as a Markdown table
After identifying the open ports, the next step is to organize this information neatly. T…[truncated]"
3. **Sticky Note1** `stickyNote` — width: "606.297701841459", height: "562.5474916374191", content: "![Shodan](https://i.imgur.com/q4G3kQf.png)
## Query Shodan for unexpected open ports
This stage of the workflow leverages `Shodan`, a search engine for internet-connected devices, …[truncated]"
4. **Sticky Note2** `stickyNote` — width: "650.8045775723033", height: "890.9735108226744", content: "![Scheduled](https://i.imgur.com/PcOuvAL.png)
# Workflow Overview

The n8n workflow initiates with a node that fetches a list of IP addresses and their specified ports from a secur…[truncated]"
5. **Sticky Note4** `stickyNote` — width: "438.8550109331452", height: "594.7981050471616", content: "![thehive](https://i.imgur.com/y2Yw1ZP.png)
## Post to TheHive
The final step in the process involves posting the findings to TheHive - a scalable, open-source and free Security In…[truncated]"
6. **Every Monday** `scheduleTrigger` — rule: "[object Object]"
7. **Sticky Note5** `stickyNote` — width: "432.3140705656865", height: "690.0398460499007", content: "![n8n](https://i.imgur.com/lKnBNnH.png)
## Iterate Through IP addresses
The "`Split In Batches`" node is configured with a batch size of one, ensuring that the array of IP addresse…[truncated]"
8. **Get watched IPs & Ports** `httpRequest` — url: `https://internal.users.n8n.cloud/webhook/mock-shodan-ips`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of monitoring IP addresses for unexpected open ports using Shodan. Every Monday, it fetches a list of IPs and their ports, checks each IP with Shodan for open ports, and determines if there are any unexpected ones. If found, it formats this data into a Markdown table and sends an alert to TheHive, a security incident response platform, for further investigation.

- **Demonstrate:** A cybersecurity consultant might use this workflow to automate weekly checks for unauthorized open ports on client networks, helping to quickly identify and mitigate potential security threats.

- **Imitate:** To apply this workflow, import it into n8n, configure the Shodan and TheHive API credentials, and set up the IP list source. Adjust the schedule trigger to match your monitoring needs, and test the workflow to ensure it sends alerts correctly.

- **Practice:** Create a mock list of IP addresses with associated ports and run the workflow. Check if it correctly identifies unexpected ports and sends alerts to TheHive. Experiment by adding new IPs and ports to see how the workflow handles them.

- **WIIFM:** Mastering this workflow can enhance your cybersecurity services by providing automated threat detection, increasing client trust and satisfaction. It's a valuable skill that can help you attract new clients and offer comprehensive network security solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpQueryAuth, theHiveApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  