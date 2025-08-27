# Splitout Webhook Create Webhook
## 🚀 What It Does
Automates a flow using set×4, stickyNote×4, filter×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note3**.
2. **Webhook** `webhook` — path: `/youtube-engaging-moments-extractor`
3. **Sticky Note** `stickyNote` — color: "3", width: "307.626814098134", height: "357.96212854181044"
4. **Sticky Note1** `stickyNote` — color: "4", width: "402.30435383552106", height: "480.9199723565991"
5. **Sticky Note2** `stickyNote` — color: "5", width: "362.9578438147888", height: "424.35936420179615"
6. **Sticky Note3** `stickyNote` — color: "5", width: "445.3395991706974", height: "184.59156876295762"
7. **Input variables** `set` — options: "[object Object]", assignments: "[object Object]"
8. **HTTP Request** `httpRequest` — url: `=https://yt.lemnoslife.com/videos?part=mostReplayed&id={{ $json.youtubeVideoID }}`
9. **has intensity data?** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "items[0].mostReplayed.markers"
11. **No intensity data available for video** `noOp` — configured for its default action.
12. **intensity > 0.6** `filter` — options: "[object Object]", conditions: "[object Object]"
13. **Respond with "no results"** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
  "engagingMoments": null,
  "youtubeID": "{{ $('Webhook').item.json.query.ytID }}"
}"
14. **millisecs to seconds** `set` — include: "except", options: "[object Object]", assignments: "[object Object]"
15. **Filter out moments close to each other** `filter` — options: "[object Object]", conditions: "[object Object]"
16. **Create each moment (human readable)** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
17. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "engagingMoments"
18. **prepare response** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
19. **Respond with moments** `respondToWebhook` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow extracts engaging moments from a YouTube video using its ID. It retrieves the most-replayed parts of the video via an API, filters these moments based on intensity, and returns a list of timestamps where engagement is high. If no engaging moments are found, it responds with "no results."

**Demonstrate:** A content creator can use this workflow to identify the most engaging parts of their video, allowing them to highlight these moments in promotional materials to attract more viewers and retain audience attention.

**Imitate:** 
1. Import the workflow into your n8n instance.
2. Connect it to your YouTube API.
3. Activate the workflow.
4. Use an HTTP tool like Postman to send a request to the webhook with a YouTube video ID.
5. Review the engaging moments returned in the response.

**Practice:** Set up a test YouTube video ID and use the workflow to extract engaging moments. Experiment with different videos to see how the workflow filters and outputs results. Adjust the intensity threshold to see how it affects the output.

**WIIFM:** Mastering this workflow allows you to offer a unique service to YouTube creators or marketers, helping them optimize content strategy by focusing on what viewers find most engaging. This can lead to increased demand for your automation services and potentially higher income.

## 🔧 Setup Instructions
1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
