# Splitout Code Create Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Anthropic Chat Model** `lmChatAnthropic` — options: "[object Object]"
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "playlistName": {
        "type": "string"…[truncated]"
4. **Sticky Note** `stickyNote` — width: "1055", height: "1188.074539731524", content: "[redacted]"
5. **Monthly Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note1** `stickyNote` — width: "1729.2548791395811", height: "349.93537232723713", content: "**Get & Log Playlists informations**"
7. **Sticky Note2** `stickyNote` — width: "2831.0439846349473", height: "394.4687643158222", content: "**Get & Log Playlists informations**"
8. **Sticky Note3** `stickyNote` — width: "726.2282986582347", height: "562.9881279640259", content: "**AI Classification**"
9. **Sticky Note4** `stickyNote` — width: "858.3555537284071", height: "309.3037982292949", content: "**Update Spotify Playlists**"
10. **Sticky Note5** `stickyNote` — width: "578.2457729796415", height: "309.3037982292949", content: "[redacted]"
11. **Sticky Note6** `stickyNote` — width: "610.3407699712512", height: "922.4081979777811", content: "### Playlists' Description Examples


| Playlist Name           | Playlist Description                                                                                              …[truncated]"
12. **Get Playlist** `spotify` — resource: **playlist**, operation: **getUserPlaylists**
13. **Get Tracks** `spotify` — resource: **library**
14. **Filter my playlist** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Retrieve relevant info** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
"track" : "{{ $json.track.name.replaceAll('"',"'") }}",
"artist":  "{{ $json.track.artists[0].name }}",
"album" :"{{ $json.track.album.name }}",
"track_spotify_uri" : "{{ $json.…[truncated]"
16. **Playlists informations** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "playlist_name": "{{ $json.name }}",
  "playlist_description": "{{ $json.description }}",
  "playlist_spotify_uri": "{{ $json.uri }}"
}
 "
17. **Batch preparation** `code` — jsCode: "const items = $input.all();
const trackSpotifyIds = items.map((item) => item?.json?.track_spotify_id);

const aggregatedItems = [];
for (let i = 0; i < trackSpotifyIds.length; i +=…[truncated]"
18. **Limit2** `limit` — configured for its default action.
19. **Get Track details** `httpRequest` — url: `https://api.spotify.com/v1/audio-features`
20. **Get logged playlists** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
21. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "audio_features"
22. **Excluding logged playlists** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
23. **Merge** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
24. **Log new playlists** `googleSheets` — operation: **append**
25. **Simplify Tracks informations** `set` — include: "except", options: "[object Object]", assignments: "[object Object]"
26. **Limit** `limit` — configured for its default action.
27. **Get logged tracks** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
28. **Excluding logged tracks** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
29. **Log new tracks** `googleSheets` — operation: **append**
30. **Classify new tracks** `noOp` — configured for its default action.
31. **Aggregate by 200 tracks** `code` — jsCode: "const items = $input.all();
const chunkSize = 200;
const result = [];

for (let i = 0; i < items.length; i += chunkSize) {
  const chunk = items.slice(i, i + chunkSize).map((item) …[truncated]"
32. **Basic LLM Chain - AI Classification** `chainLlm` — text: "=#### Tracks to Analyze:
<tracks_to_analyze>
   {{ JSON.stringify($json.chunk) }}
</tracks_to_analyze>", messages: "[object Object]", promptType: "define"
33. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
34. **Split Out2** `splitOut` — include: "allOtherFields", options: "[object Object]", fieldToSplitOut: "trackUris"
35. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
36. **Manual Verification** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
37. **Batch preparation1** `code` — jsCode: "const items = $input.all();
const result = [];

items.forEach((item) => {
  const trackUris = item.json.trackUris;
  if (trackUris.length > 100) {
    for (let i = 0; i < trackUris…[truncated]"
38. **Spotify** `spotify` — resource: **playlist**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of managing Spotify playlists. It periodically retrieves your Spotify playlists and tracks, logs them into Google Sheets, and uses AI to classify tracks into suitable playlists based on various audio features. The workflow ensures that playlists are updated with new tracks according to the classification, helping maintain an organized music collection.

**Demonstrate:** A music curator could use this workflow to keep their Spotify playlists updated with new tracks that fit specific themes or moods, ensuring their audience always has fresh and relevant content.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Spotify and Google Sheets accounts.
3. Set up the monthly trigger to automate the workflow.
4. Customize playlist descriptions and AI classification criteria as needed.
5. Run the workflow to ensure it logs and updates playlists correctly.

**Practice:** Create a test Spotify account with a few playlists and run the workflow. Observe how it logs the playlists into Google Sheets and updates them based on AI classification. Modify some playlists to see how the workflow adapts.

**WIIFM:** Mastering this workflow allows you to offer playlist management services to clients, enhancing their music curation efforts. This can lead to increased engagement and customer satisfaction, adding value to your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** spotifyOAuth2Api, anthropicApi, googleSheetsOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
