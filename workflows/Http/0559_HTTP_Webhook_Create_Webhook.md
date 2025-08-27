# HTTP Webhook Create Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×2, stickyNote, set.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Replace placeholders in template body and title**.
  2. **Sticky Note** `stickyNote` — color: "2", width: "610", height: "315"
3. **Webhook** `webhook` — method: **POST**, path: `/d291ef27-c27f-42cf-90cf-4dad7dd71a7c`
4. **Set parameters** `set` — options: "[object Object]", assignments: "[object Object]"
5. **Confluence: Get template content** `httpRequest` — url: `={{ $('Set parameters').item.json.confluence_base_url }}/wiki/rest/api/template/{{ $json.template_id }}`
6. **Replace placeholders in template body and title** `code` — mode: "runOnceForEachItem", jsCode: "function replacePlaceholders(template, values) {
    // Regular expression to find placeholders in the format $some.place.holder$
    const placeholderPattern = /\$(.*?)\$/g;

    …[truncated]"
7. **Confluence: Create page from template** `httpRequest` — method: **POST**, url: `={{ $('Set parameters').item.json.confluence_base_url }}/wiki/rest/api/content/`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation of a new page in Atlassian Confluence using a predefined template. It starts with a webhook that receives data, sets parameters for the Confluence API, retrieves the template content, replaces placeholders in the template with actual data, and finally creates a new page in Confluence with the updated content.

### Demonstrate
A project manager could use this workflow to automatically generate project update pages in Confluence, ensuring consistency and saving time on repetitive documentation tasks.

### Imitate
1. Import the workflow into n8n.
2. Connect your Confluence account and set up API credentials.
3. Customize the parameters in the "Set parameters" node to match your Confluence setup.
4. Test the webhook by sending POST data to the provided URL.
5. Verify that the new page is created in Confluence as expected.

### Practice
Create a sample Confluence template with placeholders, then run the workflow with test data to see how placeholders are replaced and how the page is created. Adjust the template and parameters to understand the customization potential.

### WIIFM
Mastering this workflow allows you to offer automated documentation services, reducing manual workload and ensuring consistency. This can enhance your service offerings, attract more clients, and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBasicAuth.
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
  