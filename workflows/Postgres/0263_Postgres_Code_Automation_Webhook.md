# Postgres Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
5. **Sticky Note** `stickyNote` — color: "4", width: "1180", height: "1780"
6. **Sticky Note1** `stickyNote` — color: "4", width: "220", height: "360"
7. **Sticky Note2** `stickyNote` — color: "6", width: "220", height: "360"
8. **Sticky Note3** `stickyNote` — width: "220", height: "360", content: "🧹 Filters out excluded category IDs.

Choose them yourself, some categories are not for AI Agent, like reviews or same"
9. **Sticky Note4** `stickyNote` — color: "5", width: "220", height: "360"
10. **Sticky Note5** `stickyNote` — width: "220", height: "360", content: "🎯 Picks least-used category for next post."
11. **Sticky Note6** `stickyNote` — color: "5", width: "220", height: "360"
12. **Sticky Note7** `stickyNote` — color: "7", width: "300", height: "460"
13. **Sticky Note8** `stickyNote` — width: "220", height: "360", content: "🧾 Prepares the new article title."
14. **Sticky Note9** `stickyNote` — width: "220", height: "360", content: "🔀 Merges category + title data."
15. **Sticky Note10** `stickyNote` — width: "220", height: "360", content: "📦 Combines all post metadata into one object."
16. **Sticky Note11** `stickyNote` — color: "5", width: "220", height: "360"
17. **Sticky Note12** `stickyNote` — color: "7", width: "300", height: "460"
18. **Sticky Note13** `stickyNote` — width: "220", height: "360", content: "🧾 Extracts content block from AI output."
19. **Sticky Note14** `stickyNote` — width: "220", height: "360", content: "🖼 Prepares a placeholder cover image URL."
20. **Sticky Note15** `stickyNote` — color: "6", width: "220", height: "360"
21. **Sticky Note16** `stickyNote` — color: "6", width: "220", height: "360"
22. **Sticky Note17** `stickyNote` — width: "220", height: "360", content: "🔗 Merges image + content + category info."
23. **Sticky Note18** `stickyNote` — width: "220", height: "360", content: "📬 Prepares final JSON body for the WP post."
24. **Sticky Note19** `stickyNote` — color: "6", width: "220", height: "360"
25. **Sticky Note20** `stickyNote` — color: "3", width: "220", height: "300"
26. **Sticky Note21** `stickyNote` — color: "3", width: "220", height: "300"
27. **Sticky Note22** `stickyNote` — color: "4", width: "220", height: "360"
28. **Config** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Load Categories** `httpRequest` — url: `={{ $json.domain }}/wp-json/wp/v2/categories?per_page=100 `
30. **Category Filter** `code` — jsCode: "const excludeIds = [1, 11, 12, 13, 15, 17, 18, 36, 37, 38, 39];

return $input.all()
  .filter(item => !excludeIds.includes(item.json.id))
  .map(item => {
    const { id, name, de…[truncated]"
31. **Selecting recent** `postgres` — operation: **executeQuery**
32. **Picks Less Used** `code` — jsCode: "const categories = $items("Category Filter");
const usedRows = $items("Selecting recent");

if (!categories || categories.length === 0) {
  throw new Error("No category in Code2");…[truncated]"
33. **10 latest headlines** `postgres` — operation: **executeQuery**
34. **AI Agent SEO Headings** `agent` — text: "=Based on the category "{{ $('Picks Less Used').item.json.name }}"  
with the description:  
{{ $('Picks Less Used').item.json.description }}

Here are existing article titles alre…[truncated]", options: "[object Object]", promptType: "define"
35. **New article title** `code` — jsCode: "return [
  {
    json: {
      title: $input.first().json.output
    }
  }
];
"
36. **Merge heading** `merge` — configured for its default action.
37. **Combines full post meta** `code` — jsCode: "let data = {};
$input.all().forEach(item => {
  Object.assign(data, item.json);
});
return [{ json: data }];
"
38. **Updating posts DB** `postgres` — operation: **upsert**, table: `[object Object]`
39. **AI Agent SEO writer** `agent` — text: "=You are writing a blog post using native WordPress HTML blocks.

🧱 Follow this exact structure:

- Paragraphs inside: <!-- wp:paragraph --> ... <!-- /wp:paragraph -->
- Level 3 h…[truncated]", options: "[object Object]", promptType: "define"
40. **Placeholder creator** `code` — jsCode: "const name = $('Updating posts DB').first().json.name || "{{ $json.domain }}";
const encoded = encodeURIComponent(name); 

return {
  image_url: `https://placehold.co/1200x675/FF00…[truncated]"
41. **Extracting output** `code` — jsCode: "return [{
  json: {
    content: $input.first().json.output,
  }
}];
"
42. **Download Image** `httpRequest` — url: `={{ $json.image_url }}`
43. **Media Upload to WP** `httpRequest` — method: **POST**, url: `={{ $('Config').first().json.domain }}/wp-json/wp/v2/media`
44. **Merge** `merge` — numberInputs: "3"
45. **Prepare Post JSON** `code` — jsCode: "const items = $input.all();

let image = null;
let contentBlock = null;
let categoryBlock = null;
let titleBlock = null;

// Inspect all incoming JSON
for (const item of items) {
 …[truncated]"
46. **Post to WP** `httpRequest` — method: **POST**, url: `={{ $('Config').first().json.domain }}/wp-json/wp/v2/posts`
47. **No Operation, do nothing** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the creation and publication of WordPress blog posts. It begins by loading WordPress categories, filtering out exclusions, and selecting the least-used category. Using OpenAI, it generates a unique article title and content. The workflow also creates a placeholder cover image, uploads it to WordPress, and finally publishes the post. This process is scheduled to run automatically at set intervals, ensuring consistent content updates on the WordPress site.

**Demonstrate**  
A digital marketing agency could use this workflow to maintain a client's blog with fresh, SEO-friendly content without manual intervention, saving time and ensuring consistent content output.

**Imitate**  
1. Import the workflow into n8n.
2. Set your WordPress domain in the Config node.
3. Connect your WordPress, PostgreSQL, and OpenAI accounts.
4. Customize category exclusions and test the workflow.
5. Enable the Schedule Trigger for automatic execution.

**Practice**  
Create a test WordPress site and run the workflow. Observe how it generates and publishes posts. Adjust category filters and content prompts to see how changes affect the output.

**WIIFM**  
Mastering this workflow allows you to offer automated content creation services, appealing to businesses looking to maintain an active blog without dedicating manual resources. This can lead to increased client engagement and revenue opportunities for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, postgres, wordpressApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
