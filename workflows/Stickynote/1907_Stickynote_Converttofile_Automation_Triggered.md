# Stickynote Converttofile Automation Triggered
## 🚀 What It Does
Automates a flow using code×11, agent×10, stickyNote×3.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "Hi there! 👋
Please tell me everything about your business, and I will help you create the business canvas."
3. **Ollama Chat Model** `lmChatOllama` — model: `llama3.1:latest`
4. **Sticky Note** `stickyNote` — color: "5", width: "420", height: "220"
5. **Sticky Note1** `stickyNote` — color: "6", width: "500", height: "320"
6. **Sticky Note2** `stickyNote` — width: "460", height: "200", content: "## I'm here to help!

If you need assistance customizing the model or have feedback to share, please don’t hesitate to reach out. Your thoughts are important to me, and I'm eager t…[truncated]"
7. **Key Partners Generator** `agent` — text: "=Act as a strategic business analyst. Based on the idea and goals I give you, list 10 key insights for the "Key Partners" section of the Business Model Canvas. Be sure to cover the…[truncated]", options: "[object Object]", promptType: "define"
8. **Value Proposition Generator** `agent` — text: "=You're a value-driven strategist. Based on the provided business idea, write 6-7 concise bullet points that define the "Value Proposition" section of the Business Model Canvas. Ad…[truncated]", options: "[object Object]", promptType: "define"
9. **Customer Relationship Generator** `agent` — text: "=As a customer relationship strategist, provide 6-7 key approaches for the "Customer Relationship" section of the Business Model Canvas, based on the business idea. Reflect on thes…[truncated]", options: "[object Object]", promptType: "define"
10. **Customer Segments Generator** `agent` — text: "=Act as a segmentation expert. Based on the business idea provided, define 6-7 customer segments for the "Customer Segments" section of the Business Model Canvas. Make sure your su…[truncated]", options: "[object Object]", promptType: "define"
11. **Key Resources Generator** `agent` — text: "=You're an operational strategist. Based on the business idea, generate 6-7 bullet points for the "Key Resources" section of the Business Model Canvas. Answer:

- What key resource…[truncated]", options: "[object Object]", promptType: "define"
12. **Channels Generator** `agent` — text: "=You're a marketing strategist. Provide 6-7 channel strategies for the "Channels" section of the Business Model Canvas, using the business idea. Answer:

- Through which channels d…[truncated]", options: "[object Object]", promptType: "define"
13. **Cost Structure Generator** `agent` — text: "=You're a finance strategist. Based on the business idea, provide 6-7 main cost drivers for the "Cost Structure" section of the Business Model Canvas. Include insights related to:
…[truncated]", options: "[object Object]", promptType: "define"
14. **Revenue Streams Generator** `agent` — text: "=Act as a monetization expert. Based on the business idea, generate 6-7 revenue strategies for the "Revenue Streams" section of the Business Model Canvas. Reflect on:

- What value…[truncated]", options: "[object Object]", promptType: "define"
15. **Title Generator** `agent` — text: "=Make a simple business name with this idea (maximum 5 words)
{{ $json.chatInput }}

only write the name, do not add anything to the output.", options: "[object Object]", promptType: "define"
16. **Key Activities Generator** `agent` — text: "=Act as a strategic business analyst. Based on the business idea I gave you, generate 6-7 insights for the "Key Activities" section of the Business Model Canvas. Consider the follo…[truncated]", options: "[object Object]", promptType: "define"
17. **Key Partners HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
18. **Values proposition HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
19. **Customer Relationship HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
20. **Customer Segments HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
21. **Key Resources HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
22. **Channels HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
23. **Cost Structure HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
24. **Revenue streams HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
25. **Code1** `code` — jsCode: "
const input = $input.first().json.output.replaceAll("\n","")
return {
  "title":input
}"
26. **Key Activities HTML Transformer** `code` — jsCode: "function formatToHtmlList(inputString) {
  const items = inputString.split('|').map(item => item.trim());

  let htmlOutput = '';
  for (let i = 0; i < items.length; i++) {
    if …[truncated]"
27. **Merge All Data** `merge` — numberInputs: "10"
28. **Turn to HTML** `code` — jsCode: "const input = $input.all()
// Simple merge

const output = {
  title: input[0].json.title,
  key_partners: input[1].json.key_partners,
  key_activities: input[2].json.key_activitie…[truncated]"
29. **HTML code to HTML file** `convertToFile` — operation: **toText**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow assists in generating a Business Model Canvas by automating the process of gathering and organizing business insights. It starts with a chat input where users describe their business. The workflow then uses AI models to generate insights for various sections of the Business Model Canvas, such as Key Partners, Value Proposition, and Customer Segments. These insights are formatted into HTML and compiled into a downloadable HTML file representing the Business Model Canvas.

**Demonstrate:**  
A startup founder could use this workflow to quickly generate a detailed Business Model Canvas for a new business idea, saving time and ensuring a structured approach to business planning.

**Imitate:**  
1. Set up n8n and import the workflow.
2. Connect AI models and configure API keys.
3. Customize input prompts and output formats as needed.
4. Trigger the workflow by providing business details in the chat.
5. Download the generated Business Model Canvas HTML file.

**Practice:**  
Try creating a business idea and input it into the chat trigger. Run the workflow to generate a Business Model Canvas. Review the output and consider changes for clarity or depth.

**WIIFM:**  
Mastering this workflow enables you to offer a unique service in business planning automation. It can help you attract entrepreneurs and startups looking for efficient ways to develop business strategies, thereby expanding your client base and increasing revenue.

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
