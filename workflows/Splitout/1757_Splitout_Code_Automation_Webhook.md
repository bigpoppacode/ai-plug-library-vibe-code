# Splitout Code Automation Webhook
## 🚀 What It Does
Automates a flow using httpRequest×4, stickyNote×4, set×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "4", width: "391.0892880786254", height: "335.5179928232044"
4. **Sticky Note1** `stickyNote` — color: "3", width: "418.7983637184758", height: "440.36620487216396"
5. **Sticky Note2** `stickyNote` — color: "7", width: "814.7806424732389", height: "269.1258097879526"
6. **Sticky Note3** `stickyNote` — width: "880.0000000000002", height: "207.9041916167665", content: "# Create a new post with images on Bluesky
This workflow will 
1. retrieve images from URLs you specify
2. upload them 1 by 1 as blobs to BlueSky
3. let you specify the basic text …[truncated]"
7. **Define Credentials** `set` — mode: "raw", options: "[object Object]", jsonOutput: "[redacted]"
8. **Create Bluesky Session** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.server.createSession`
9. **Set Caption** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Set Images** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{  "photos":[
    {
      "url":"https://picsum.photos/800/600?random=234234"
    },
    {
      "url":"https://picsum.photos/800/600?random=676855"
    },
    {
      "url":"https…[truncated]"
11. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "photos"
12. **Download Images** `httpRequest` — url: `={{ $json.url }}`
13. **Post Image to Bluesky** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.repo.uploadBlob`
14. **Code** `code` — jsCode: "return $input.all().map( item => ({
    alt: "-",
    image: {
      ...item.json.blob
    }
}));"
15. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
16. **Post to Bluesky** `httpRequest` — method: **POST**, url: `https://bsky.social/xrpc/com.atproto.repo.createRecord`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of creating a post on Bluesky with images. It retrieves images from specified URLs, uploads them one by one as blobs to Bluesky, and allows you to specify basic text for the post. The workflow uses your Bluesky credentials to publish the post to your feed.

### Demonstrate
A social media manager could use this workflow to streamline posting to Bluesky, ensuring that posts with multiple images are uploaded correctly and efficiently, saving time and reducing manual errors.

### Imitate
1. Import the workflow into n8n.
2. Set up your Bluesky credentials.
3. Specify image URLs and post text in the workflow.
4. Test the workflow to ensure images are uploaded and post is published.

### Practice
Create a test post with a few image URLs and a short caption. Run the workflow to see how it uploads each image and posts to your Bluesky account. Experiment with different captions and image combinations.

### WIIFM
Mastering this workflow can help you offer social media automation services to clients, enhancing their online presence while saving them time. This can lead to increased client satisfaction and opportunities for upselling additional automation services.

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
