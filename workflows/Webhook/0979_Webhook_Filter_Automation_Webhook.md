# Webhook Filter Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×5, webhook×2, httpRequest×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Webhook** `webhook` — path: `/ea7d37ac-9e82-40d7-bbb3-e9b7ce180fc9`
3. **Sticky Note** `stickyNote` — width: "1440", height: "320", content: "[redacted]"
4. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `google/gemini-2.0-flash-exp:free`
5. **Sticky Note1** `stickyNote` — color: "5", width: "1440", height: "320"
6. **Sticky Note2** `stickyNote` — color: "6", width: "1440", height: "320"
7. **Sticky Note3** `stickyNote` — color: "2", width: "1440", height: "320"
8. **Sticky Note4** `stickyNote` — color: "3", width: "1440", height: "320"
9. **get_new_comments** `webhook` — method: **POST**, path: `/ea7d37ac-9e82-40d7-bbb3-e9b7ce180fc9`
10. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.query['hub.challenge'] }}"
11. **data** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Get post data** `httpRequest` — url: `=https://graph.instagram.com/v22.0/{{ $json.usuario.media.id }}?fields=id,caption`
13. **its me?** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **AI Agent** `agent` — text: "=### CONTEXTO E PERSONA ###
Você é um assistente de IA especialista, responsável por gerenciar os comentários de um perfil no Instagram focado em Inteligência Artificial e Automaçõ…[truncated]", options: "[object Object]", promptType: "define"
15. **Post comment** `httpRequest` — method: **POST**, url: `={{ $('data').item.json.endpoint }}/{{ $('data').item.json.usuario.message.id }}/replies`

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the management of Instagram comments. It starts by receiving comments via a webhook, verifies the authenticity of the webhook, and then checks if the comment is from another user. If valid, it uses an AI agent to generate a personalized response based on the comment's content. The response is then posted back to Instagram, ensuring engagement with followers while maintaining a professional tone.

**Demonstrate**  
A social media manager could use this workflow to automatically respond to comments on their brand's Instagram posts, saving time and ensuring consistent interaction. This keeps the audience engaged and enhances brand presence.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Instagram account and set up the webhook.
3. Configure the AI agent with appropriate prompts.
4. Test the workflow with sample comments to ensure correct responses.
5. Activate the workflow to handle real comments automatically.

**Practice**  
Create a test Instagram account and post a few comments. Run the workflow and observe how it processes and responds to each comment. Adjust the AI prompts to improve response quality.

**WIIFM**  
Mastering this workflow can help you offer automated social media management services, attracting clients who need consistent and efficient engagement. This can lead to increased revenue and opportunities to upsell additional automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** openRouterApi, httpHeaderAuth, facebookGraphApi.
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
