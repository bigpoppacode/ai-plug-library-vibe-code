# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "319.5392879244982", height: "218.88813194060202"
3. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
4. **Sticky Note1** `stickyNote` — color: "7", width: "365.9021913627245", height: "245.35379866205295"
5. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
6. **Activity Tool** `toolHttpRequest` — url: `https://bored-api.appbrewery.com/filter`
7. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
8. **Webscraper Tool** `toolHttpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
9. **Sticky Note2** `stickyNote` — width: "413.82332632615135", height: "435.92895157500243", content: "## Try It Out!

### The HTTP tool is drastically simplifies API-enabled AI agents cutting down the number of workflow nodes by as much as 10!

* Available since v1.47.0
* Recommend…[truncated]"
10. **Set ChatInput** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Set ChatInput1** `set` — options: "[object Object]", assignments: "[object Object]"
12. **AI Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
13. **AI Agent1** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates web scraping and activity suggestions using AI. It triggers manually, sends a web scraping request to gather webpage content, and uses AI to process text inputs. Two AI agents are involved: one fetches GitHub issues, and the other suggests activities based on user input.

**Demonstrate:**  
A developer might use this workflow to automatically gather the latest issues from a GitHub repository and suggest recreational activities, enhancing productivity and engagement in a tech team.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect OpenAI and Firecrawl API credentials.  
3. Configure manual trigger and test inputs.  
4. Customize the AI prompts and URLs as needed.  
5. Run the workflow to ensure it executes correctly.

**Practice:**  
Create a simple workflow that scrapes a webpage of your choice and processes the data using OpenAI. Test by changing URLs and prompts to see how the output varies.

**WIIFM:**  
Mastering this workflow enables you to offer web scraping and AI services, adding value to businesses needing data extraction and intelligent suggestions. This can attract new clients and boost income in the AI automation sector.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, httpHeaderAuth.
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
  