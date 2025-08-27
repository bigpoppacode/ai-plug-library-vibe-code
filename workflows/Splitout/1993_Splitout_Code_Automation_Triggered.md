# Splitout Code Automation Triggered
## 🚀 What It Does
Automates a flow using code×6, splitOut, googleTranslate.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Receive SRT File to Translate**.
2. **Receive SRT File to Translate** `formTrigger` — options: "[object Object]", formTitle: "upload srt", formFields: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "760", height: "300", content: "## Required Credentials
https://docs.n8n.io/integrations/builtin/credentials/google/

## Selecting Language
You can update the form to include your preferred language code (that yo…[truncated]"
4. **Expose Binary** `code` — mode: "runOnceForEachItem", jsCode: "// Add a new field called 'myNewField' to the JSON of the item
$input.item.json.binary = $binary;

return $input.item;"
5. **Extract text from Binary File** `extractFromFile` — operation: **text**
6. **Split SRT Lines** `code` — mode: "runOnceForEachItem", jsCode: "let text = $json.data

delete $json.base64
delete $json.binary


// Split by single newlines
const lines = text.split('\n')

// Create an array to hold grouped subtitle entries
let…[truncated]"
7. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "txt"
8. **Prep Parts for Translate** `code` — mode: "runOnceForEachItem", jsCode: "function splitBySecondNewline(text) {
  // Find the position of the first newline
  const firstNewlinePos = text.indexOf('\n');
  
  if (firstNewlinePos === -1) {
    return { firs…[truncated]"
9. **Google Translate** `googleTranslate` — text: "={{ JSON.stringify($json.parts.secondPart) }}", translateTo: "={{ $json.language }}"
10. **Clean Translations & Group Titles** `code` — mode: "runOnceForEachItem", jsCode: "let translated = $json.translatedText.replaceAll("\\n","\n").replaceAll('&quot;',"").replaceAll('&#39;',"'");

function splitIntoTwoLines(text, maxLength = 40) {
  // If text alrea…[truncated]"
11. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
12. **Join completed text with double new line** `code` — mode: "runOnceForEachItem", jsCode: "let texts = $json.data.map(item=>{
  return item.complete
})


$input.item.json.complete_text = texts.join('\n\n')

return $input.item;"
13. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Generate Binary** `code` — mode: "runOnceForEachItem", jsCode: "function encodeBase64(text) {
  try {
    // For browser environments
    if (typeof window !== 'undefined') {
      // First, create a UTF-8 encoded string
      const utf8String …[truncated]"
15. **Convert to File** `convertToFile` — operation: **toBinary**
16. **Respond with file** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of translating SRT subtitle files. It begins by receiving an SRT file and a target language via a form. The workflow extracts text from the SRT file, processes it to separate subtitle entries, and uses Google Translate to convert the text into the desired language. The translated text is then cleaned, grouped, and formatted back into a subtitle file, which is returned to the user.

### Demonstrate
A video production company could use this workflow to quickly translate subtitles for international releases, saving time and ensuring consistency across various languages, ultimately improving their global content distribution.

### Imitate
1. Import the workflow into n8n.
2. Connect Google Translate API credentials.
3. Update the form trigger to include your preferred language options.
4. Test the workflow with a sample SRT file to ensure it translates and returns correctly.

### Practice
Create a test SRT file with a few subtitle entries. Run the workflow to translate it into another language, then check the output for accuracy. Experiment by adding more languages or modifying the text content.

### WIIFM
Mastering this workflow allows you to offer translation services, enhancing your business's service portfolio. This can attract clients looking for quick and efficient subtitle translation, leading to increased revenue and customer satisfaction in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleTranslateOAuth2Api.

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
