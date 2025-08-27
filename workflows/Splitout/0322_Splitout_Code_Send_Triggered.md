# Splitout Code Send Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "456", height: "638", content: "## Chunk the transcript into several parts, and refine-summarize it "
4. **Sticky Note1** `stickyNote` — width: "615.8516011477997", height: "443.66706715913415", content: "## Generate Questions and Topics from the summary and make sure the response follows required schema."
5. **Sticky Note3** `stickyNote` — width: "479", height: "508", content: "## Ask Agent to research and explain each topic using Wikipedia

"
6. **Sticky Note4** `stickyNote` — width: "452", height: "351", content: "## Format as HTML and send via Gmail"
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
8. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
9. **Wikipedia** `toolWikipedia` — configured for its default action.
10. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "6000", chunkOverlap: "1000"
11. **OpenAI Chat Model3** `lmChatOpenAi` — model: `[object Object]`
12. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
13. **Podcast Episode Transcript** `code` — jsCode: "return { transcript: `So throughout the last couple episodes we’ve been doing on the philosophy of mind…there’s been an IDEA that we’ve referenced MULTIPLE TIMES… and really just g…[truncated]"
14. **Summarize Transcript** `chainSummarization` — options: "[object Object]", operationMode: "documentLoader"
15. **Extract Topics & Questions** `informationExtractor` — text: "=Podcast Summary:  {{ $json.response.output_text }}", options: "[object Object]", schemaType: "manual"
16. **Topics** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.questions"
17. **AI Agent** `agent` — text: "=Question: {{ $json.question }}
Why: {{ $json.why }}

Context:  {{ $('Summarize Transcript').first().json.response.text }}
", options: "[object Object]", promptType: "define"
18. **Format topic text & title** `code` — jsCode: "const inputItems = $input.all();
const topics = [];
const questions = [];
const summary = $('Summarize Transcript').first().json.response.text;
// Format Topics
for (const [index, …[truncated]"
19. **Send Digest** `gmail` — sendTo: "oleg@n8n.io", message: "=Greetings 👋,
Hope you're doing well! Here's your digest for this week's episode of Philoshopy This! 

<h2>🎙 Episode Summary</h2>
{{ $json.summary }}

<h2>💡 Topics Discussed</h2…[truncated]", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow processes a podcast episode transcript by summarizing it, extracting key topics and questions, researching those topics using Wikipedia, and then formatting the information into a digest that is emailed to a recipient. It automates content curation and delivery, making it useful for generating summaries and insights from lengthy discussions.

### Demonstrate
A podcast producer could use this workflow to automatically generate summaries and discussion points for each episode, enhancing audience engagement and aiding in content marketing efforts.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and Gmail accounts.
3. Set the podcast transcript as input.
4. Customize the email recipient and format.
5. Test the workflow to ensure it correctly summarizes, extracts topics, and sends the digest.

### Practice
Create a test transcript and run the workflow. Observe how the summary and topics are generated and emailed. Experiment by altering the transcript content to see different results.

### WIIFM
Mastering this workflow allows you to offer automated content summarization and distribution services, appealing to podcasters, educators, and content creators, thereby expanding your service offerings and increasing potential revenue in the AI automation industry.

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
