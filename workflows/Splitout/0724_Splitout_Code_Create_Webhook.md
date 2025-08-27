# Splitout Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Notion Trigger**.
2. **Notion Trigger** `notionTrigger` — event: "pagedUpdatedInDatabase", pollTimes: "[object Object]", databaseId: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "640", height: "300", content: "## Either use the official Notion getAll: Blocks node
This removes formatting like bold and links. "
4. **Sticky Note1** `stickyNote` — width: "640", height: "260", content: "## ... or get block rich text data
with custom HTTP request."
5. **Sticky Note2** `stickyNote` — width: "340", height: "340", content: "## Configure a notion connection."
6. **Sticky Note3** `stickyNote` — height: "320", content: "## This will triple the content by way of demo."
7. **Notion** `notion` — resource: **block**, operation: **getAll**
8. **Get Child blocks** `httpRequest` — url: `=https://api.notion.com/v1/blocks/{{ $json.id }}/children`
9. **Notion Node Blocks to Md** `code` — jsCode: "function notionToMarkdown(blocks) {
  return blocks
    .map(block => {
      if (!block.json.content) return ""; // Skip empty content
      
      switch (block.json.type) {
    …[truncated]"
10. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
11. **Full Notion Blocks to Md** `code` — jsCode: "function jsonToMarkdown(blocks) {
    let markdown = "";

    function parseRichText(richTextArray) {
        return richTextArray.map(text => {
            let content = text.text…[truncated]"
12. **Md to Notion Blocks v3** `code` — mode: "runOnceForEachItem", jsCode: "function markdownToNotionBlocks(markdown) {
    const lines = markdown.split('\n');
    const blocks = [];
    let currentList = null;
    
    function parseRichText(text) {
     …[truncated]"
13. **Add blocks as Children** `httpRequest` — method: **PATCH**, url: `=https://api.notion.com/v1/blocks/{{ $('Notion Trigger').first().json.id }}/children`

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow monitors updates in a Notion database. When a page is updated, it retrieves all blocks (content pieces) from the page, processes them to convert the content into Markdown format, and then transforms it back into Notion's block format. Finally, it updates the Notion page by adding the processed content back as child blocks. This workflow helps in content conversion and management within Notion, ensuring that the content is consistently formatted.

**Demonstrate:**  
A content manager might use this workflow to ensure that all content updates in Notion maintain a consistent format. This is useful when preparing documents for publishing, ensuring they adhere to style guidelines.

**Imitate:**  
1. Import this workflow into n8n.
2. Set up a Notion connection with your database ID.
3. Ensure the Notion API credentials are configured.
4. Trigger the workflow by updating a page in your Notion database.
5. Verify that updated content is processed and added back correctly.

**Practice:**  
Create a test page in Notion and make updates to it. Run the workflow to observe how it converts content to Markdown and back. Experiment with different content types to see how they are processed.

**WIIFM:**  
Mastering this workflow allows you to offer automated content formatting services, ensuring consistency and saving time on manual formatting. This skill can enhance your service offerings and attract clients needing efficient content management solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** notionApi.
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
