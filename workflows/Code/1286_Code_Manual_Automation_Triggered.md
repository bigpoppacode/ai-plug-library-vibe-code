# Code Manual Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Workflow Input to JSON Document** `documentJsonInputLoader` — pointers: "/transcript"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — chunkSize: "6000", chunkOverlap: "1000"
5. **Sticky Note** `stickyNote` — width: "455.5091388435286", height: "577.6862533692728", content: "## Chunk the transcript into several parts, and refine-summarize it "
6. **GPT 4 - Extract** `lmChatOpenAi` — model: `gpt-4`
7. **Wikipedia1** `toolWikipedia` — configured for its default action.
8. **Sticky Note1** `stickyNote` — width: "615.8516011477997", height: "443.66706715913415", content: "## Generate Questions and Topics from the summary and make sure the response follows required schema."
9. **Sticky Note3** `stickyNote` — width: "359.3751741576458", height: "567.5105121293799", content: "## Ask Agent to research and explain each topic using Wikipedia

"
10. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
 "$schema": "http://json-schema.org/draft-07/schema#",
 "title": "Generated schema for Root",
 "type": "object",
 "properties": {
 "questions": {
 "type": "array",
 "items": {
 "…[truncated]"
11. **GPT3.5 - Research** `lmChatOpenAi` — model: `gpt-3.5-turbo-16k`
12. **GPT3.5 - Summarize** `lmChatOpenAi` — model: `gpt-3.5-turbo-16k`
13. **Sticky Note4** `stickyNote` — width: "371.7094059635757", height: "330.6932614555254", content: "## Format as HTML and send via Gmail"
14. **Podcast Episode Transcript** `code` — jsCode: "return { transcript: `So throughout the last couple episodes we’ve been doing on the philosophy of mind…there’s been an IDEA that we’ve referenced MULTIPLE TIMES… and really just g…[truncated]"
15. **Summarize Transcript** `chainSummarization` — type: "refine"
16. **Extract Topics & Questions** `chainLlm` — prompt: "=Come up with a list of questions and further topics to explore that are relevant for the context. Make sure questions are relevant to the topics but not verbatim. Think hard about…[truncated]"
17. **Topics** `itemLists` — options: "[object Object]", fieldToSplitOut: "topics"
18. **Research & Explain Topics** `agent` — text: "=Topic: {{ $json.topic }}

Context: {{ $('Summarize Transcript').item.json.response.output_text }}
", agent: "openAiFunctionsAgent"
19. **Format topic text & title** `code` — jsCode: "const inputItems = $input.all();
const topics = [];
const questions = [];
const summary = $('Summarize Transcript').item.json.response.output_text;
// Format Topics
for (const [ind…[truncated]"
20. **Send Digest** `gmail` — sendTo: "oleg@n8n.io", message: "=Greetings 👋,
Hope you're doing well! Here's your digest for this week's episode of Philoshopy This! 

<h2>🎙 Episode Summary</h2>
{{ $json.summary }}

<h2>💡 Topics Discussed</h2…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of generating a podcast digest email. It starts by taking a podcast transcript, splits it into manageable parts, and summarizes it using AI. The workflow extracts topics and questions, researches them using Wikipedia and OpenAI models, formats the information as HTML, and sends a digest email via Gmail. This process transforms a lengthy podcast transcript into a concise, informative email digest.

**Demonstrate**  
A podcast producer could use this workflow to automate the creation of episode summaries and discussion topics for their audience, saving time and ensuring consistent output quality.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your OpenAI and Gmail accounts.
3. Set up a trigger (e.g., manual or scheduled).
4. Configure the input to match your podcast transcript.
5. Test the workflow to ensure it sends the email correctly.

**Practice**  
Experiment by using a short, test podcast transcript. Observe how the workflow processes the transcript and sends the email. Adjust the transcript to see how changes affect the output.

**WIIFM**  
Mastering this workflow enables you to efficiently produce high-quality content digests, offering clients a valuable service. This can enhance your automation business by providing a scalable way to generate content, potentially leading to increased client retention and new business opportunities.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  