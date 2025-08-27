# HTTP Filter Automation Scheduled
  ## 🚀 What It Does
  Automates a flow using stickyNote×11, httpRequest×4, filter.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note1**.
  2. **Runs every 48hrs** `cron` — triggerTimes: "[object Object]"
3. **Sticky Note2** `stickyNote` — color: "7", width: "232.0445295774649", height: "411.1655661971828"
4. **Sticky Note3** `stickyNote` — color: "5", width: "232.0445295774649", height: "411.1655661971829"
5. **Sticky Note4** `stickyNote` — color: "5", width: "232.0445295774649", height: "412.3020619718309"
6. **Sticky Note5** `stickyNote` — color: "7", width: "232.0445295774649", height: "411.1655661971828"
7. **Sticky Note6** `stickyNote` — color: "5", width: "232.0445295774649", height: "411.1655661971829"
8. **Sticky Note7** `stickyNote` — color: "5", width: "232.0445295774649", height: "411.1655661971829"
9. **Sticky Note1** `stickyNote` — color: "7", width: "366.75796434038665", height: "381.1643518785302"
10. **Sticky Note11** `stickyNote` — color: "6", width: "396.6384066163515", height: "282.5799404564392"
11. **Sticky Note14** `stickyNote` — width: "777.0408639013781", height: "201.45195676871373", content: "## Setup
1. **`DigitalOcean API Key`**: You’ll need to configure the HTTP Request nodes with your DigitalOcean API key. This key is required for authenticating requests to list dro…[truncated]"
12. **Sticky Note9** `stickyNote` — color: "7", width: "809.515353297114", height: "944.3745310796205"
13. **Sticky Note15** `stickyNote` — color: "7", width: "777.0408639013781", height: "168.5111194243667"
14. **List All Droplets** `httpRequest` — url: `https://api.digitalocean.com/v2/droplets`
15. **List Snapshots for a Droplet** `httpRequest` — url: `=https://api.digitalocean.com/v2/droplets/{{ $json.droplets[0].id }}/snapshots `
16. **Filter** `filter` — conditions: "[object Object]"
17. **Delete a Snapshot** `httpRequest` — url: `=https://api.digitalocean.com/v2/snapshots/{{ $json.snapshots[0].id }}`
18. **Droplet Actions snapshot (n8n.optimus01.co.za)** `httpRequest` — url: `=https://api.digitalocean.com/v2/droplets/{{ $('List All Droplets').item.json.droplets[0].id }}/actions `
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the management of DigitalOcean Droplet snapshots. Every 48 hours, it retrieves all droplets, checks their snapshots, and ensures no more than four snapshots exist per droplet. If a droplet has more than four snapshots, the oldest one is deleted, and a new snapshot is created, ensuring that backups are always current.

**Demonstrate:**  
A developer managing multiple servers on DigitalOcean could use this workflow to automate backup maintenance, reducing storage costs and ensuring only the most recent snapshots are kept.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your DigitalOcean account using API keys.
3. Adjust the filter to change the snapshot limit if needed.
4. Setup the cron trigger to fit your schedule.
5. Test the workflow to ensure it correctly manages snapshots.

**Practice:**  
Create a test droplet on DigitalOcean and manually add snapshots. Run the workflow to see if it deletes the oldest snapshot and creates a new one. Adjust the filter conditions and re-test.

**WIIFM:**  
Mastering this workflow allows you to offer automated backup solutions to clients, ensuring their data is always protected with minimal manual intervention. This can enhance your service offerings and potentially increase your income by providing a valuable automation solution.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth.
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
  