# Manual Code Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×12, set×9, manualTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note6** `stickyNote` — width: "780", height: "820", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — width: "780", height: "3580", content: "## Prompt Inspiration Ideas

Use these prompts as inspiration for your workflow. A quick way to iterate on ideas is to try them in [https://aistudio.google.com/](https://aistudio.g…[truncated]"
5. **Sticky Note5** `stickyNote` — width: "560", height: "520", content: "[redacted]"
6. **Sticky Note7** `stickyNote` — width: "560", height: "520", content: "## ℹ️ Determine which prompt will be passed in API call based on promptType value
"
7. **Sticky Note8** `stickyNote` — width: "560", height: "1520", content: "## ✏️ Set Values For Prompts & Model
1. prompt: What do you want to know about a video
2. model: Which model to use (gemini-1.5-flash)"
8. **Sticky Note9** `stickyNote` — width: "260", height: "520", content: "## ℹ️ Making it easier to reference values in the http node
"
9. **Sticky Note10** `stickyNote` — width: "560", height: "520", content: "## ℹ️ If you want to add special processing when errors occur (Optional)

"
10. **Sticky Note11** `stickyNote` — width: "260", height: "520", content: "## ℹ️ Makes call to Google endpoint using values set in earlier nodes

"
11. **Sticky Note13** `stickyNote` — width: "300", height: "520", content: "## ℹ️ Merges data from returned by Google with values set in prior nodes so that earlier data isn't lost"
12. **Sticky Note14** `stickyNote` — width: "300", height: "520", content: "## ℹ️ Gives returned data meaningful names; Simplifies amount of data available to follow-on nodes"
13. **Sticky Note** `stickyNote` — width: "360", content: "#### 💡 Trigger Ideas
You can change the trigger to meet your use case. If you need to run it once in awhile, can leave in current format. Try one of n8n's YouTube nodes, a form, a…[truncated]"
14. **Sticky Note2** `stickyNote` — width: "360", height: "240", content: "#### 💡 Next Step Ideas
Use a webhook to send data to another destination or use one of n8n's other nodes to send to Airtable, Notion, etc."
15. **Set: Define Initial Variables** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Switch: What kind of question do we want to ask?** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Set: Transcript Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
18. **Set: Transcript with Timestamps Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
19. **Set: Summarize Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
20. **Set: Scene Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
21. **Set: Scene Clips** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
22. **Set: Fallback** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
23. **Set: Merged Values** `set` — options: "[object Object]", includeOtherFields: "true"
24. **HTTP Request to Google** `httpRequest` — method: **POST**, url: `[redacted]`
25. **Code: Merge data from prior nodes with HTTP Output** `code` — mode: "runOnceForEachItem", jsCode: "return {
  json: {
    ...$json, // Keep data from http request
    ...$('Set: Merged Values').item.json, // Keep data from before http request
  }
};



"
26. **If: Was an error detected?** `if` — options: "[object Object]", conditions: "[object Object]"
27. **Set Fields: Define Outcome** `set` — include: "except", options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of analyzing YouTube videos. It can generate summaries, transcripts, and visual insights from videos using Google API. The workflow takes a YouTube URL, determines the type of analysis to perform (e.g., transcript, summary), sends a request to the Google API, and processes the response to provide the desired output. It is designed to be flexible, allowing users to adjust prompts and models for different types of video analysis.

**Demonstrate:**  
A content creator can use this workflow to quickly generate video summaries and transcripts, saving time on manual transcription and enabling faster content repurposing for blogs or social media.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Google API key and YouTube URL in the initial variables.
3. Choose the type of analysis you want (transcript, summary, etc.).
4. Run the workflow and check the output for the desired video insights.

**Practice:**  
Create a YouTube channel and upload a video. Use this workflow to generate a summary and transcript. Compare the output with the actual video content to evaluate accuracy and make adjustments as needed.

**WIIFM:**  
Mastering this workflow equips you to offer automated video analysis services. This can enhance your content strategy, improve SEO with transcripts, and provide valuable insights to clients, potentially increasing your income in the AI automation business.
  
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
  