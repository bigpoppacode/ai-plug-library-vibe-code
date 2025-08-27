# Splitout Filter Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×8, form×3, lmChatOpenAi.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Get Basic Information**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Get Basic Information** `formTrigger` — options: "[object Object]", formTitle: "Get in Touch", formFields: "[object Object]"
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "response": [
    {
      "question": "What is the biggest challenge facing their business at present?",
      "has_been_answered": false,
      "reasoning": "put your reason h…[truncated]"
5. **Sticky Note4** `stickyNote` — width: "700", height: "780", content: "# Avoid Asking Redundant Questions with Dynamically Generated Forms using OpenAI 
## Target Audience
This workflow has been built for those who require a form to capture as much da…[truncated]"
6. **Sticky Note5** `stickyNote` — width: "480", height: "140", content: "## Setup
1. Add your **OpenAI** credentials
2. Go to the **Get Basic Information** node and click **Test Step**
3. Complete the form to test the generic use case
4. Modify the prom…[truncated]"
7. **Sticky Note** `stickyNote` — color: "7", width: "480", height: "240"
8. **Sticky Note1** `stickyNote` — color: "7", width: "480", height: "620"
9. **Sticky Note8** `stickyNote` — color: "5", width: "220", height: "240"
10. **Sticky Note6** `stickyNote` — color: "5", width: "300", height: "240"
11. **Sticky Note2** `stickyNote` — color: "7", width: "920", height: "260"
12. **Sticky Note3** `stickyNote` — color: "7", width: "520", height: "260"
13. **Get Business Overview** `form` — options: "[object Object]", formFields: "[object Object]"
14. **Analyse Response** `chainLlm` — text: "=## Analysis Task

Analyze the following customer response to the question "Please describe your current situation and why you are interested in automating with AI." 

Customer Inf…[truncated]", promptType: "define", hasOutputParser: "true"
15. **Split Out Analysis** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.response"
16. **Remove Already Answered Questions** `filter` — options: "[object Object]", conditions: "[object Object]"
17. **Prepare For Form Generation** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Aggregate For Form Generation** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
19. **Clarification Questions** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "={{ $json.data }}"
20. **End Form** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow dynamically generates forms to avoid redundant questions using AI. It collects basic business information and an open-ended response about automation needs. AI analyzes the response, identifies unanswered questions, and generates a follow-up form with only those questions, streamlining data collection and enhancing user experience.

**Demonstrate:** A consultant could use this workflow to efficiently gather detailed client needs for automation projects, ensuring no repetitive questions are asked, thus improving client interactions and data quality.

**Imitate:** 1. Import the workflow into n8n. 2. Add OpenAI credentials. 3. Test the "Get Basic Information" node. 4. Customize the "Analyse Response" prompt for specific use cases. 5. Run the workflow to see how it generates the follow-up form.

**Practice:** Create a test form with basic info and an open-ended question. Run the workflow to see how it generates follow-up questions. Adjust the AI prompt to change the analysis criteria and observe the impact.

**WIIFM:** Mastering this workflow lets you offer tailored data collection services, enhancing client satisfaction and data accuracy. It could lead to more efficient project setups, better client insights, and increased revenue opportunities in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.

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
