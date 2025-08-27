# HTTP MQTT Automation Webhook
  ## 🚀 What It Does
  Automates a flow using cron, httpRequest, set.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **MQTT**.
  2. **MQTT** `mqtt` — channel/topic: `iss-position`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow tracks the International Space Station (ISS) position every minute. It fetches the ISS's current location using an API, extracts relevant data like name, latitude, longitude, and timestamp, and publishes this information to an MQTT topic called `iss-position`. This allows real-time tracking of the ISS position via MQTT.

### Demonstrate
A space research organization might use this workflow to monitor the ISS's position in real-time for educational purposes or to synchronize activities with the ISS's orbit.

### Imitate
1. Import the workflow into n8n.
2. Set up your MQTT broker credentials.
3. Ensure the API URL is correct and accessible.
4. Activate the workflow to start tracking the ISS position every minute.
5. Monitor the MQTT topic to receive updates.

### Practice
Create a test MQTT subscriber to receive and log the ISS position data. Verify the positions are updated every minute. Experiment by modifying the workflow to track different satellites using a similar API.

### WIIFM
Mastering this workflow equips you to offer real-time data streaming services, enhancing your automation portfolio. This skill can attract clients interested in IoT solutions, providing opportunities to generate income in the growing field of real-time data automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mqtt.
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
  