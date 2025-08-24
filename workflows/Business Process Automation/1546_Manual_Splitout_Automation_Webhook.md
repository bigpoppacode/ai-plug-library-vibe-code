# Manual Splitout Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, html.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Request Techcrunsh Latest Page (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Parse a posts box (html)** - This step performs a key action in the workflow.
5. **Step 4: Parse all posts (html)** - This step performs a key action in the workflow.
6. **Step 5: split out the posts (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: Parse each post in detail (html)** - This step performs a key action in the workflow.
8. **Step 7: Request a post detail page (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Parse a post's content and metadata (html)** - This step performs a key action in the workflow.
10. **Step 9: Save the values (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow scrapes the latest 20 TechCrunch articles, extracting their titles, URLs, images, and publication dates. It does this by triggering a manual start, making an HTTP request to TechCrunch, parsing the HTML to gather article details, and then saving the extracted data.

### Demonstrate
A business owner could use this workflow to automatically gather the latest tech news articles for a daily newsletter, saving time on manual research and ensuring their audience receives timely updates on industry trends.

### Imitate
1. Set up a new n8n workflow and add a **Manual Trigger** node.
2. Use an **HTTP Request** node to fetch the TechCrunch latest page URL.
3. Add an **HTML Parse** node to extract the posts box using the appropriate CSS selectors.
4. Split the posts into separate items with a **Split Out** node.
5. For each post, parse its details (image, title, URL, created_at) using another **HTML Parse** node.
6. Save the parsed data using a **Set** node to structure it for further use.

### Practice
Try modifying the workflow to scrape articles from a different website, like BBC News. Adjust the HTTP request URL and update the CSS selectors in the parsing nodes to match the new site’s HTML structure.

### WIIFM
Mastering this workflow allows you to automate data collection, saving time and providing valuable insights. This skill can attract clients looking for automated reporting solutions, enhancing your value as a consultant and increasing your income potential in the automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Save the values" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
