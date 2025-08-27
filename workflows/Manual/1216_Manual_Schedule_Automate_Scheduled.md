# Manual Schedule Automate Scheduled
  ## 🚀 What It Does
  Automates a flow using manualTrigger, signl4, openWeatherMap.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **OpenWeatherMap** `openWeatherMap` — cityName: "Berlin"
5. **If** `if` — options: "[object Object]", conditions: "[object Object]"
6. **SIGNL4** `signl4` — message: "=Weather alert ❄️ Temperature: {{ $json.main.temp }} °C", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates weather alerts for Berlin. It triggers at 6:15 AM daily, checks the current temperature using OpenWeatherMap, and sends a notification via SIGNL4 if the temperature is below 25°C. This helps users stay informed about cold weather conditions.

### Demonstrate
A business owner might use this workflow to alert staff about cold weather conditions, ensuring they dress appropriately for the day, which can improve workplace comfort and productivity.

### Imitate
1. Import the workflow into n8n.
2. Set up your OpenWeatherMap and SIGNL4 accounts.
3. Adjust the city and temperature threshold as needed.
4. Test the workflow manually to ensure it triggers and sends alerts correctly.
5. Schedule it to run daily.

### Practice
Create a test workflow with your city and a different temperature threshold. Run it manually to see how alerts are sent. Adjust the conditions to experiment with different scenarios.

### WIIFM
Mastering this workflow allows you to offer weather alert services to clients, enhancing their operations by keeping them informed. This can expand your service offerings and increase revenue in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** signl4Api, openWeatherMapApi.
  
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
  