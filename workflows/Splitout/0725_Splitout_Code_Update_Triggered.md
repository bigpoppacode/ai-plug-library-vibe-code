# Splitout Code Update Triggered
## 🚀 What It Does
Automates a flow using stickyNote×5, chainLlm×2, merge×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Ollama Chat Model** `lmChatOllama` — model: `bespoke-minicheck:latest`
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
5. **Ollama Model** `lmOllama` — model: `qwen2.5:1.5b`
6. **Sticky Note** `stickyNote` — width: "860", height: "600", content: "## Build a summary

This is useful to run it in an agentic workflow. You may remove the summary part and return the raw array with the found issues."
7. **Sticky Note1** `stickyNote` — width: "760", height: "600", content: "## Split into sentences"
8. **Sticky Note2** `stickyNote` — width: "920", height: "600", content: "## Fact checking

This use a small ollama model that is specialized on that task: https://ollama.com/library/bespoke-minicheck

You have to install it before use with `ollama pull …[truncated]"
9. **Sticky Note3** `stickyNote` — width: "600", height: "300", content: "## Test workflow
"
10. **Sticky Note4** `stickyNote` — width: "600", height: "280", content: "## Entrypoint to use in other workflows
"
11. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Code** `code` — mode: "runOnceForEachItem", jsCode: "// Get the input text
const text = $input.item.json.text;

// Ensure text is not null or undefined
if (!text) {
  throw new Error('Input text is empty');
}

// Function to split te…[truncated]"
13. **Merge1** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
14. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "sentences"
15. **Basic LLM Chain4** `chainLlm` — text: "=Document: {{ $('Merge1').item.json.facts }}
Claim: {{ $json.claim }}", promptType: "define"
16. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
17. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
18. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
19. **Basic LLM Chain** `chainLlm` — text: "={{ $json.data }}", messages: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow is designed to fact-check text by splitting it into sentences, analyzing each for factual accuracy, and summarizing the results. It begins by manually or automatically triggering the workflow, then processes the text using AI models to check facts and compile a report indicating any inaccuracies found.

- **Demonstrate:** A content editor could use this workflow to ensure articles are factually accurate before publication, reducing errors and maintaining credibility. It automates the fact-checking process, saving time and improving efficiency.

- **Imitate:** To adapt this workflow, import it into n8n, configure the trigger to fit your use case (e.g., manual or webhook trigger), input your text data, and connect your AI model credentials. Run the workflow to analyze text and receive a factual accuracy summary.

- **Practice:** Create a short article with a mix of factual and fictional statements. Use the workflow to process the article and review the generated summary to see how it identifies inaccuracies. Adjust the text and rerun to test different scenarios.

- **WIIFM:** Mastering this workflow enhances your ability to offer automated fact-checking services, ensuring content accuracy for clients. This skill can differentiate your services, attract more customers, and increase revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** ollamaApi.

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
