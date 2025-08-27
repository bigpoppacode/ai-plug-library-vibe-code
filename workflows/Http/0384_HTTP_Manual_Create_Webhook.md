# HTTP Manual Create Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×20, stickyNote×16, set×10.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Manual Trigger**.
  2. **Sticky Note** `stickyNote` — color: "6", width: "305", height: "254.26094733974475"
3. **Sticky Note1** `stickyNote` — color: "4", width: "289.22425544359976", height: "259"
4. **Sticky Note2** `stickyNote` — color: "3", width: "767.2997851806018", height: "260.5583291593211"
5. **Sticky Note3** `stickyNote` — color: "4", width: "762.4679767633019", height: "259"
6. **Sticky Note4** `stickyNote` — color: "3", width: "838.4149493375248", height: "259"
7. **Sticky Note5** `stickyNote` — color: "7", width: "1264.141937886304", height: "607"
8. **Sticky Note6** `stickyNote` — color: "4", width: "839.99463355761", height: "257.7516694510983"
9. **Sticky Note7** `stickyNote` — color: "6", width: "513", height: "254.59230101092814"
10. **Sticky Note8** `stickyNote` — color: "7", width: "878.0751770171937", height: "920.8960116234484"
11. **Sticky Note9** `stickyNote` — color: "6", width: "755.5520725546517", height: "257.7516694510983"
12. **Sticky Note10** `stickyNote` — color: "3", width: "828.445488674341", height: "259"
13. **Sticky Note11** `stickyNote` — color: "6", width: "834.9104620941396", height: "259"
14. **Sticky Note12** `stickyNote` — color: "4", width: "531.3495902609195", height: "263.788476053995"
15. **Sticky Note13** `stickyNote` — color: "7", width: "817.7528311355856", height: "917.7366431832784"
16. **Sticky Note14** `stickyNote` — color: "7", width: "876.5452405896403", height: "913.7927070441785"
17. **Sticky Note15** `stickyNote` — color: "7", width: "1389.3461161034518", height: "607"
18. **Manual Trigger** `manualTrigger` — configured for its default action.
19. **Set KV-NM Name (4)** `set` — fields: "[object Object]", options: "[object Object]"
20. **List KV-NMs (10)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
21. **Account Path** `set` — fields: "[object Object]", options: "[object Object]"
22. **List KV-NMs (4)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
23. **Set KV-NM Name (1)** `set` — fields: "[object Object]", options: "[object Object]"
24. **Create KV-NM** `httpRequest` — method: **POST**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces`
25. **Set KV-NM Name (6)** `set` — fields: "[object Object]", options: "[object Object]"
26. **Set KV-NM Name (2)** `set` — fields: "[object Object]", options: "[object Object]"
27. **KV to Rename** `set` — fields: "[object Object]", options: "[object Object]"
28. **Set KV-NM Name (7)** `set` — fields: "[object Object]", options: "[object Object]"
29. **Set KV-NM Name (3)** `set` — fields: "[object Object]", options: "[object Object]"
30. **Set KV-NM Name (5)** `set` — fields: "[object Object]", options: "[object Object]"
31. **Set KV-NM Name (8)** `set` — fields: "[object Object]", options: "[object Object]"
32. **Write V & MD of KV In NM** `httpRequest` — method: **PUT**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (4)"].json["result"]…[truncated]`
33. **List KV-NMs (1)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
34. **List KV-NMs (7)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
35. **List KV-NMs (2)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
36. **List KV-NMs (5)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
37. **List KV-NMs (8)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
38. **List KV-NMs (3)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
39. **List KV-NMs (6)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
40. **List KV-NMs (9)** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $json["Account Path (account_identifier)"] }}/storage/kv/namespaces`
41. **Delete KV inside NM** `httpRequest` — method: **DELETE**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (1)"].json["result"]…[truncated]`
42. **Read Value Of KV In NM** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (7)"].json["result"]…[truncated]`
43. **Delete KV** `httpRequest` — method: **DELETE**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (2)"].json["result"]…[truncated]`
44. **Delete KV1** `httpRequest` — method: **PUT**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (5)"].json["result"]…[truncated]`
45. **Read MD from Key** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (8)"].json["result"]…[truncated]`
46. **Delete KVs inside NM** `httpRequest` — method: **DELETE**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (3)"].json["result"]…[truncated]`
47. **Write KVs inside NM** `httpRequest` — method: **PUT**, url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (6)"].json["result"]…[truncated]`
48. **-Get Keys inside NM** `httpRequest` — url: `=https://api.cloudflare.com/client/v4/accounts/{{ $('Account Path').params["fields"]["values"][0]["stringValue"] }}/storage/kv/namespaces/{{ $node["List KV-NMs (9)"].json["result"]…[truncated]`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow manages Cloudflare KV storage. It allows users to create, list, rename, delete, and manipulate key-value pairs in Cloudflare's KV namespaces. It uses HTTP requests to interact with Cloudflare's API, providing a structured way to handle data storage and retrieval operations.

**Demonstrate**  
A developer managing a web app's caching strategy could use this workflow to automate cache updates in Cloudflare KV, ensuring the app serves the latest content efficiently without manual intervention.

**Imitate**  
1. Import the workflow into your n8n instance.
2. Configure the 'Account Path' with your Cloudflare account identifier.
3. Connect your Cloudflare API credentials.
4. Customize namespace and key names in the 'Set' nodes.
5. Test the workflow by creating, listing, or deleting a namespace or key-value pair.

**Practice**  
Create a test namespace and add some key-value pairs. Use the workflow to list these pairs, rename the namespace, and delete specific keys. Observe how changes reflect in your Cloudflare dashboard.

**WIIFM**  
Mastering this workflow can streamline your data management tasks in Cloudflare, saving time and reducing errors. Offering this as a service can attract clients looking to optimize their web applications, providing you with a competitive edge in the automation market.
  
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
  