# Form Automation Triggered
  ## 🚀 What It Does
  Automates a flow using chainLlm, form, lmChatOpenRouter.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **FromTrigger**.
  2. **OpenRouter LLM** `lmChatOpenRouter` — model: `={{ $json.model }}`
3. **FromTrigger** `formTrigger` — options: "[object Object]", formTitle: "Analyse image", formFields: "[object Object]"
4. **Settings** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
5. **Basic LLM Chain** `chainLlm` — text: "={{ $json.prompt }}", messages: "[object Object]", promptType: "define"
6. **FormResultPage** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the extraction of license plate numbers from uploaded images. Users upload an image through a form, and the workflow utilizes a language model (OpenRouter LLM) to analyze the image and extract the license plate number. The extracted number is then displayed on a result page.

### Demonstrate
A car rental company could use this workflow to automate the process of verifying returned vehicles by extracting license plate numbers from uploaded images. This ensures quick and accurate vehicle identification, streamlining the check-in process.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenRouter LLM account.
3. Set up a form trigger for image uploads.
4. Customize the settings node with your desired model.
5. Test the workflow by uploading an image with a visible license plate.

### Practice
Create a mock scenario where you upload images of cars with visible license plates. Run the workflow to see how accurately it extracts the numbers. Try different image qualities to test robustness.

### WIIFM
Mastering this workflow allows you to offer automated image analysis services, such as vehicle verification for rental companies or parking management systems, enhancing your service portfolio and potentially increasing your revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openRouterApi.
  
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
  