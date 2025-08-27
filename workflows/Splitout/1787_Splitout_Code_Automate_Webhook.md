# Splitout Code Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **When chat message received** `chatTrigger` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "280", height: "260", content: "## Send a mockup image url to chat"
5. **Sticky Note1** `stickyNote` — color: "5", width: "540", height: "300"
6. **Sticky Note2** `stickyNote` — color: "3", width: "680", height: "300"
7. **If** `if` — options: "[object Object]", conditions: "[object Object]"
8. **OpenAI** `openAi` — resource: **image**, operation: **analyze**
9. **AI Agent** `agent` — text: "={{ $json.content }}", options: "[object Object]", promptType: "define"
10. **Code** `code` — jsCode: "const rawContent = $json.output;

// 1. Replace all line breaks with spaces
let cleaned = rawContent.replace(/\n/g, ' ');

// 2. Trim any extra spaces at the beginning and end
clea…[truncated]"
11. **HTTP Request** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/images/generations`
12. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data[0].b64_json"
13. **Convert to File** `convertToFile` — operation: **toBinary**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of redesigning T-shirt mockups. It starts by receiving a chat message with a mockup image URL. The workflow checks if the URL is valid, then analyzes the image using OpenAI's capabilities to generate a refined prompt for an AI-based redesign. The image is then processed, and a new design is generated and converted into a file format suitable for review.

**Demonstrate:**  
A graphic design company could use this workflow to quickly iterate on T-shirt designs, improving creativity and efficiency by leveraging AI to enhance existing designs with minimal manual input.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your OpenAI account.
3. Set up a chat trigger to receive image URLs.
4. Customize the AI prompt and processing steps.
5. Test with a sample image URL to see the redesign process in action.

**Practice:**  
Create a test chat setup, use a URL of a T-shirt design, and run the workflow. Observe how the AI analyzes and redesigns the image. Experiment with different prompts to see how they influence the final design.

**WIIFM:**  
Mastering this workflow enables you to offer AI-driven design enhancement services, increasing creativity and speed in design processes. This can lead to higher client satisfaction, more projects, and additional income streams in a competitive market.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.
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
