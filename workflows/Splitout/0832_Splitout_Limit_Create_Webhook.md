# Splitout Limit Create Webhook
## 🚀 What It Does
Automates a flow using set×10, stickyNote×9, httpRequest×6.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Tags to Folders", formFields: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "960", height: "260", content: "## Step 1
Login to n8n, and get the tags we have for our personal owned projects"
4. **Sticky Note1** `stickyNote` — width: "960", height: "280", content: "## Step 2
Extract the tags as a json string, and format this into a suitable format for our response form for user to select the tags they want to work with"
5. **Sticky Note2** `stickyNote` — color: "2", width: "420", height: "260"
6. **Sticky Note3** `stickyNote` — color: "3", width: "340", height: "240"
7. **Sticky Note4** `stickyNote` — width: "940", height: "220", content: "## Step 4 a) 
If more than 1 folder is found, we dedupe the tags and limit to one, then use that as the folder"
8. **Sticky Note5** `stickyNote` — width: "680", height: "220", content: "## Step 4 b) 
If no folder is found, we create a new folder "
9. **Sticky Note6** `stickyNote` — color: "5", width: "420", height: "480"
10. **Sticky Note7** `stickyNote` — color: "4", width: "480", height: "240"
11. **Sticky Note8** `stickyNote` — width: "380", height: "220", content: "## Step 7
Respond with a success message"
12. **set credentials** `set` — options: "[object Object]", assignments: "[object Object]"
13. **login n8n** `httpRequest` — method: **POST**, url: `={{ $json.n8n }}/rest/login`
14. **my-projects** `httpRequest` — url: `={{ $('set credentials').item.json.n8n }}/rest/projects/my-projects`
15. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
16. **filter owned projects** `filter` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
17. **get tags** `httpRequest` — url: `={{ $('set credentials').first().json.n8n }}/rest/tags`
18. **tags to string** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Code** `code` — jsCode: "[redacted]"
20. **select tags to move** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "=[	{
		"fieldLabel": "Dropdown Options",
		"fieldType": "dropdown",
		"fieldOptions": {
			"values": {{ $json.fieldOptions.values.toJsonString() }}
		},
		"requiredField": true,
  …[truncated]"
21. **Split Out the tags** `splitOut` — options: "[object Object]", fieldToSplitOut: "['Dropdown Options']"
22. **extract name from form** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the organization of projects by converting tags into folders. When a form is submitted, it logs into n8n, retrieves tags associated with personal projects, and presents them in a form for selection. It then checks if folders for these tags exist, creating new ones if necessary, and moves workflows into the appropriate folders.

**Demonstrate**: A consultant can use this workflow to organize client projects in n8n, ensuring each project is neatly categorized and easy to manage. This simplifies workflow access and improves project management efficiency.

**Imitate**: 
1. Import the workflow into your n8n instance.
2. Set up your credentials and connect to your n8n instance.
3. Customize the form to suit your project tagging needs.
4. Test the workflow by submitting the form and observing the folder creation and workflow organization.

**Practice**: Create a few test projects in n8n with different tags. Run the workflow to see how it organizes these projects into folders. Modify tag names or add new tags to test the workflow's adaptability.

**WIIFM**: Mastering this workflow can streamline project management, making it easier to handle multiple clients or projects. This efficiency can be a selling point for your automation business, attracting clients seeking organized and scalable solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** n8nApi.
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
