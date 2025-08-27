# HTTP Rssfeedread Create Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×4, stickyNote×4, rssFeedReadTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **RSS Feed Trigger**.
  2. **RSS Feed Trigger** `rssFeedReadTrigger` — feedUrl: "<your feed URL here>", pollTimes: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "220", height: "300", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — width: "210", height: "300", content: "### Customize the text 
You can customize the message text here"
5. **Sticky Note2** `stickyNote` — width: "220", height: "300", content: "### Image preview 
By default retrieved from the feed, but you can configure a custom one here from an URL"
6. **Sticky Note3** `stickyNote` — color: "5", width: "420", height: "180"
7. **Create Session** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.server.createSession`
8. **Get current datetime** `dateTime` — options: "[object Object]"
9. **Download image** `httpRequest` — url: `={{ $('RSS Feed Trigger').item.json.enclosure.url }}`
10. **Upload image** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.repo.uploadBlob`
11. **Create Post** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.repo.createRecord`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of posting new items from an RSS feed to BlueSky. It starts by monitoring an RSS feed for new entries. When a new entry is detected, it creates a session with BlueSky, downloads any associated images, uploads these images to BlueSky, and then constructs a post using the entry's content, image, and metadata. This workflow allows for automatic sharing of RSS feed updates to the BlueSky platform, keeping your social media presence active and up-to-date without manual intervention.

### Demonstrate
A blogger could use this workflow to automatically share their latest blog posts on BlueSky. Each time they publish a new article, it gets automatically posted on their BlueSky account, increasing reach and engagement without extra effort.

### Imitate
1. Import the workflow into n8n.
2. Set your RSS feed URL in the RSS Feed Trigger node.
3. Configure BlueSky credentials in the Create Session node.
4. Customize the post content in the Create Post node.
5. Test the workflow with a sample RSS feed item to ensure proper posting.

### Practice
Create a test RSS feed with a few entries. Run the workflow to see how it processes each entry and posts it to BlueSky. Modify the post content or image settings to understand how changes affect the final post.

### WIIFM
Mastering this workflow can help you automate content distribution, enhancing your online presence with minimal effort. By offering this as a service, you can assist clients in maintaining active social media profiles, potentially leading to increased business opportunities and revenue streams.
  
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
  