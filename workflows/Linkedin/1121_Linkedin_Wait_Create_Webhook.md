# Linkedin Wait Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model3** `lmChatOpenAi` — options: "[object Object]"
4. **HTTP Request1** `toolHttpRequest` — url: `={{ $json.url }}`
5. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"summary": {
			"type": "string"
		},
		"related": {
			"type": "string"
		},
        "image urls": {
			"type": "string"
        }
	}
}"
6. **Sticky Note** `stickyNote` — color: "5", width: "341", height: "951"
7. **Dropbox** `dropbox` — configured for its default action.
8. **YouTube** `youTube` — resource: **video**, operation: **upload**
9. **Sticky Note1** `stickyNote` — color: "6", width: "882", height: "372"
10. **Sticky Note2** `stickyNote` — color: "6", width: "882", height: "372"
11. **Sticky Note3** `stickyNote` — color: "4", width: "1114", height: "943"
12. **Sticky Note4** `stickyNote` — color: "5", width: "1114", height: "372"
13. **Sticky Note6** `stickyNote` — color: "3", width: "1033", height: "951"
14. **Sticky Note7** `stickyNote` — color: "3", width: "630", height: "947"
15. **Sticky Note5** `stickyNote` — color: "6", width: "252", height: "946"
16. **Sticky Note8** `stickyNote` — color: "7", width: "180", height: "100"
17. **Hacker News** `hackerNews` — resource: **all**
18. **Google Drive** `googleDrive` — operation: **update**
19. **X** `twitter` — additionalFields: "[object Object]"
20. **Limit** `limit` — keep: "lastItems", maxItems: "50"
21. **Microsoft OneDrive** `microsoftOneDrive` — configured for its default action.
22. **LinkedIn** `linkedIn` — additionalFields: "[object Object]"
23. **Upload to Minio** `s3` — operation: **upload**
24. **Instagram** `httpRequest` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automates the process of converting articles from Hacker News into video content. It starts by fetching articles from Hacker News, then uses OpenAI to analyze the articles, generating summaries and identifying if they're related to AI or automation. If relevant, it retrieves images and uses AI tools to create videos from these summaries and images. The completed videos can be uploaded to platforms like YouTube or stored in cloud storage services such as Dropbox or Google Drive.

**Demonstrate**  
A content creator could use this workflow to automatically generate video summaries of trending tech news from Hacker News, saving time on manual content creation and staying updated on the latest trends.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Hacker News, OpenAI, RunwayML, and cloud storage accounts.
3. Customize the parameters to fit your content preferences.
4. Set a schedule for the workflow to run automatically.
5. Test the workflow with a few articles to ensure it generates the desired output.

**Practice**  
Set up a test with a few articles from Hacker News that interest you. Run the workflow to see how it processes the articles and generates video content. Experiment with different article topics to see how the workflow adapts.

**WIIFM**  
Mastering this workflow allows you to offer automated content creation services, reducing the time needed for video production and expanding your service offerings. This can attract clients seeking efficient content solutions, increasing your income potential in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, httpCustomAuth.
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
  