# Splitout Aggregate Create Triggered
## 🚀 What It Does
Automates a flow using stickyNote×8, lmChatAnthropic, splitOut.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Sticky Note** `stickyNote` — color: "4", width: "462.4041757955455", height: "315.6388466176832"
3. **Sticky Note13** `stickyNote` — color: "7", width: "287.0816455493243", height: "330.47923074942287"
4. **Anthropic Chat Model** `lmChatAnthropic` — options: "[object Object]"
5. **Sticky Note12** `stickyNote` — color: "7", width: "492.16246201447336", height: "213.62075341687063"
6. **Sticky Note17** `stickyNote` — color: "7", width: "348.42891651921957", height: "213.62075341687063"
7. **Sticky Note11** `stickyNote` — color: "6", width: "393.46745700785266", height: "80"
8. **Sticky Note14** `stickyNote` — color: "3", width: "284.87764467541297", height: "80"
9. **Sticky Note16** `stickyNote` — color: "3", width: "284.87764467541297", height: "80"
10. **Sticky Note15** `stickyNote` — color: "3", width: "284.87764467541297", height: "80"
11. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
12. **Set Ideal Customer Profile (ICP)** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Aggregate for AI node** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
14. **AI Agent** `agent` — text: "=User:
Here are some important rules for you to follow:
<rules>
1. Analyze the ICP information carefully.
2. Generate 15-20 seed keywords that are relevant to the ICP's needs, chal…[truncated]", agent: "conversationalAgent", options: "[object Object]"
15. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.answer"
16. **Connect to your own database** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow generates SEO seed keywords using AI based on an Ideal Customer Profile (ICP). It starts by setting the ICP, aggregating data, and then using an AI agent to analyze this information and produce 15-20 relevant seed keywords. These keywords are designed to align with the target audience's needs, challenges, and search behaviors. The final output can be connected to a database or spreadsheet for further use.

**Demonstrate:**  
A digital marketing consultant could use this workflow to quickly generate a list of SEO keywords tailored to a client's specific audience, enhancing targeted marketing efforts and improving search engine visibility.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up your ICP details in the "Set Ideal Customer Profile" node.  
3. Connect to an AI API (e.g., OpenAI or Anthropic).  
4. Configure the output to your database or spreadsheet.  
5. Run the workflow to generate and retrieve the SEO keywords.

**Practice:**  
Create a test ICP with hypothetical data and run the workflow. Review the generated keywords and assess their relevance to the provided profile. Experiment with different ICP inputs to see how they affect the keyword output.

**WIIFM:**  
Mastering this workflow enables you to offer bespoke SEO strategies to clients, increasing their online visibility and driving traffic. This can enhance your service offerings, increase client satisfaction, and potentially generate more revenue for your AI automation business.

## 🔧 Setup Instructions
1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.

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
