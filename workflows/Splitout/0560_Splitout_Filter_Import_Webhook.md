# Splitout Filter Import Webhook
## 🚀 What It Does
Automates a flow using spotify×8, httpRequest×6, stickyNote×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **MQTT Trigger - Remote Switch**.
2. **Sticky Note** `stickyNote` — width: "611.1911357340722", height: "291.1542012927053", content: "### Receive MQTT message from IKEA 5-button Switch, and route actions."
3. **Sticky Note8** `stickyNote` — color: "5", width: "906.3175117167951", height: "278.70214810442735"
4. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
5. **MQTT Trigger - Remote Switch** `mqttTrigger` — topics: "zigbee2mqtt/MyIOTButton1234/action", options: "[object Object]"
6. **Remote Action -> Function Router** `switch` — rules: "[object Object]", value1: "={{ $('MQTT Trigger - Ikea Remote Switch').first().json.message }}", dataType: "string"
7. **Spotify Prev** `spotify` — operation: **previousSong**
8. **Spotify Next** `spotify` — operation: **nextSong**
9. **Spotify API - Get Device Status** `httpRequest` — url: `https://api.spotify.com/v1/me/player`
10. **Already playing on Target Device?** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Spotify API - Get Available Devices** `httpRequest` — url: `https://api.spotify.com/v1/me/player/devices`
12. **Extract Individual Devices** `splitOut` — options: "[object Object]", fieldToSplitOut: "devices"
13. **Select Device by Name to get device_id** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **Spotify API - Activate Target Playback Device** `httpRequest` — method: **PUT**, url: `https://api.spotify.com/v1/me/player`
15. **Route to Requested Function** `switch` — rules: "[object Object]", options: "[object Object]"
16. **Spotify API - Volume up 5pct** `httpRequest` — method: **PUT**, url: `https://api.spotify.com/v1/me/player/volume`
17. **Spotify API - Volume down 5pct** `httpRequest` — method: **PUT**, url: `https://api.spotify.com/v1/me/player/volume`
18. **Is Playing?** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Custom Function 1 - P1** `httpRequest` — method: **PUT**, url: `https://api.spotify.com/v1/me/player/volume`
20. **Custom Function 2 - P1** `spotify` — resource: **playlist**, operation: **getUserPlaylists**
21. **Oops. How was this reached?** `noOp` — configured for its default action.
22. **Spotify Pause** `spotify` — operation: **pause**
23. **Spotify Resume** `spotify` — operation: **resume**
24. **Custom Function 2 - P2** `spotify` — id: "spotify:track:4PTG3Z6ehGkBFwjybzWkR8"
25. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
26. **Custom Function 1 - P3** `spotify` — operation: **nextSong**
27. **Custom Function 2 - P3** `spotify` — operation: **startMusic**

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the control of Spotify playback using an IKEA 5-button remote switch. It receives MQTT messages from the switch, interprets the actions (like play, pause, volume up/down), and executes corresponding Spotify commands such as playing the next song, adjusting the volume, or pausing the playback. The workflow also ensures the correct Spotify device is targeted for playback.

- **Demonstrate**: A homeowner with a smart home setup could use this workflow to control their Spotify music system using an IKEA remote. This allows them to easily manage music playback without needing to use their phone or computer, enhancing convenience and user experience.

- **Imitate**: 1. Import the workflow into n8n. 2. Set up MQTT to receive signals from your IKEA switch. 3. Configure Spotify API credentials. 4. Map the switch actions to Spotify commands (e.g., button press to play/pause). 5. Test the setup to ensure it controls Spotify as expected.

- **Practice**: Create a test environment with a simple MQTT setup and a dummy Spotify account. Use the workflow to simulate button presses and observe how it controls Spotify playback. Experiment with different button configurations to see how they impact the music playback.

- **WIIFM**: Mastering this workflow enables you to offer smart home automation solutions, particularly for audio systems, to potential clients. This can expand your service offerings in the growing smart home market, providing a unique value proposition and increasing your potential income streams.

## 🔧 Setup Instructions
1. **Connect Credentials:** spotifyOAuth2Api, mqtt.
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
