# Manual Summarize Automation Triggered
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "6000"
4. **Sticky Note** `stickyNote` — color: "5", width: "320", content: "## Youtube Video Summary
Given a **video_id** from Youtube, we concatenate the data and pass it to a summarization chain. To run this workflow, you need to have the credentials for…[truncated]"
5. **Sticky Note1** `stickyNote` — height: "120", content: "## Tip 
You can pass the **video_id** from previous nodes to make a better automation"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **SearchApi** `searchApi` — parameters: "[object Object]", requestOptions: "[object Object]"
8. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "transcripts"
9. **Summarize** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
10. **Summarization Chain** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to summarize YouTube video content. It starts with a manual trigger, then uses the SearchApi to retrieve video data using a video ID. The transcripts are split and processed to create a summary using the OpenAI Chat Model. This summary helps users quickly understand the video's content without watching it in full.

### Demonstrate
A content creator might use this workflow to generate summaries of their YouTube videos for blogs or social media, saving time in manually creating content descriptions and enhancing audience engagement.

### Imitate
1. Import the workflow into n8n.
2. Connect your SearchApi and OpenAI accounts.
3. Set up a manual trigger or schedule.
4. Input a YouTube video ID in the SearchApi node.
5. Test the workflow to ensure it generates a summary correctly.

### Practice
Create a test workflow using a YouTube video of your choice. Run the workflow and analyze how the summary reflects the video's content. Experiment by tweaking parameters like chunk size to optimize the summarization.

### WIIFM
Mastering this workflow can help you offer video summarization services to clients, streamlining content creation processes and improving SEO. This capability can differentiate your services and potentially lead to new business opportunities in digital content management.
  
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
  