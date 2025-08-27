# Webhook Manual Create Webhook
## 🚀 What It Does
Automates a flow using stickyNote×12, httpRequest×3, set×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "224.61210598590444", height: "80", content: "**Replace API key in Header, webhook from 2nd scenario, change settings if needed**"
4. **Sticky Note1** `stickyNote` — width: "167.86310443717323", height: "80", content: "**Replace this link with direct link on your audio**"
5. **Sticky Note3** `stickyNote` — width: "167.86310443717323", height: "80", content: "**Replace API key and webhook**"
6. **Sticky Note4** `stickyNote` — width: "150", height: "80", content: "**Replace OpenAI connection**"
7. **Sticky Note5** `stickyNote` — color: "7", width: "280.2462120317618", height: "438.5821431288714"
8. **Sticky Note6** `stickyNote` — color: "7", width: "636.2128494576581", height: "598.6675280064023"
9. **Sticky Note2** `stickyNote` — color: "7", width: "330.5152611046425", height: "240.6839895136402"
10. **Webhook** `webhook` — method: **POST**, path: `/d1e5fdd0-b51d-4447-8af3-6754017d240b`
11. **Sticky Note8** `stickyNote` — color: "5", height: "80", content: "## Scenario 2"
12. **Sticky Note9** `stickyNote` — color: "5", height: "80", content: "## Scenario 1"
13. **Sticky Note7** `stickyNote` — width: "167.86310443717323", height: "80", content: "**Replace prompt and JSON schema**"
14. **Sticky Note10** `stickyNote` — color: "3", width: "224.61210598590444", height: "92.99888586957334"
15. **Sticky Note11** `stickyNote` — width: "167.86310443717323", height: "80", content: "**Replace Supabase connection**"
16. **Set link to audio** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Set vars** `set` — options: "[object Object]", assignments: "[object Object]"
18. **AssemblyAI - Transcribe** `httpRequest` — method: **POST**, url: `=https://api.assemblyai.com/v2/transcript`
19. **If** `if` — options: "[object Object]", conditions: "[object Object]"
20. **AssemblyAI - Get transcription** `httpRequest` — url: `=https://api.assemblyai.com/v2/transcript/{{ $('Webhook').item.json.body.transcript_id }}`
21. **OpenAI - Analyze call** `httpRequest` — method: **POST**, url: `=https://api.openai.com/v1/chat/completions`
22. **Create record** `supabase` — table: `demo_calls`

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates the process of transcribing and analyzing sales calls. It uses AssemblyAI to convert audio into text, then employs OpenAI to analyze the transcription for sales performance metrics like client intent and upsell opportunities. The results are stored in a Supabase database.

**Demonstrate:** A sales team can use this workflow to automatically transcribe and analyze calls, gaining insights into customer needs and improving sales strategies without manually reviewing each call.

**Imitate:** 1. Import the workflow into n8n. 2. Connect your AssemblyAI and OpenAI accounts. 3. Replace placeholders with your API keys and URLs. 4. Test with a sample audio file. 5. Review the analysis results stored in Supabase.

**Practice:** Use a short audio file of a mock sales call, run it through the workflow, and check the analysis output. Adjust parameters like speaker labels and expected speakers to see differences in results.

**WIIFM:** Mastering this workflow allows you to offer automated call analysis services, providing clients with valuable sales insights. This can enhance your service offerings, attract new customers, and increase revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, openAiApi, supabaseApi.
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
