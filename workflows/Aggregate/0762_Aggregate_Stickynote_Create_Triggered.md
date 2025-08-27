# Aggregate Stickynote Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, set×5, executeWorkflow×4.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "{
    "MarketingInsights": [
        {
            "Tag": "Landing Page Opportunity",
            "Summary": "The prospect mentioned needing more detailed information about how n8n…[truncated]"
4. **Structured Output Parser2** `outputParserStructured` — jsonSchemaExample: "{
    "ProductFeedback": [
        {
            "Sentiment": "Positive",
            "Feedback": "The external speaker mentioned that 'n8n's interface is very intuitive and user-f…[truncated]"
5. **Azure OpenAI Chat Model** `lmChatAzureOpenAi` — model: `gpt-4o-mini`
6. **Azure OpenAI Chat Model1** `lmChatAzureOpenAi` — model: `gpt-4o-mini`
7. **Azure OpenAI Chat Model2** `lmChatAzureOpenAi` — model: `gpt-4o-mini`
8. **Sticky Note** `stickyNote` — color: "7", width: "480", height: "600"
9. **Sticky Note6** `stickyNote` — color: "5", width: "340", height: "820"
10. **Sticky Note1** `stickyNote` — color: "7", width: "1160", height: "580"
11. **Sticky Note2** `stickyNote` — color: "7", width: "1160", height: "600"
12. **Sticky Note3** `stickyNote` — color: "7", width: "1160", height: "600"
13. **Sticky Note4** `stickyNote` — color: "7", width: "700", height: "440"
14. **Structured Output Parser3** `outputParserStructured` — jsonSchemaExample: "{
  "UseCases": [
    {
      "Summary": "An organization in the healthcare industry wants to automate appointment scheduling to reduce no-shows and improve patient experience by i…[truncated]"
15. **Create User Prompt** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
16. **Marketing AI Agent Processor** `agent` — text: "={{ $json.prompt.transcript }}", options: "[object Object]", promptType: "define"
17. **Product AI Agent Processor** `agent` — text: "={{ $json.prompt.transcript }}", options: "[object Object]", promptType: "define"
18. **AI Agent** `agent` — text: "=You have no tools, do not attempt to use an ai tool. {{ $json.prompt.transcript }}", options: "[object Object]", promptType: "define"
19. **Data Recall Marketing** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Data Recall Product** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Data Recall Sales** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Marketing Data Processor** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
23. **Product AI Data Processor** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
24. **Sales Data Processor** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
25. **SF Sales Data Processor** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
26. **Merge all processed data** `merge` — numberInputs: "3"
27. **Bundle processed Data** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
28. **Success Status Generated** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow processes sales call transcripts to extract structured data for marketing, product, and sales teams. It uses AI models to analyze transcripts, identifying insights like marketing opportunities, product feedback, and sales use cases. The data is processed and stored for further action, ensuring teams have actionable insights from call data.

**Demonstrate:** A business owner could use this workflow to automatically analyze sales calls, extracting insights that help refine marketing strategies, improve product offerings, and enhance sales approaches, all without manual intervention.

**Imitate:** To adapt this workflow:
1. Import the workflow into n8n.
2. Connect your data sources, like sales call transcripts.
3. Configure AI nodes with your specific analysis needs.
4. Set up integrations with your CRM or data storage systems.
5. Test the workflow with sample data.

**Practice:** Create a test call transcript and run the workflow to observe how it extracts and categorizes insights. Modify the AI prompts to see how changes affect the output.

**WIIFM:** Mastering this workflow enables you to offer automated call analysis as a service, helping businesses leverage insights from sales calls to drive marketing, product, and sales strategies, potentially increasing your revenue and client base in the AI automation sector.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** azureOpenAiApi.
  
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
  