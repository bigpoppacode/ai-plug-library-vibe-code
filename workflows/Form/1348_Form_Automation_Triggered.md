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
This n8n workflow extracts the license plate number from an image of a car. It starts with a form where users can upload an image. The workflow then uses an AI model to analyze the image and extract the license plate number. Finally, it displays the extracted number on a result page.

### Demonstrate
A car rental company could use this workflow to automate the process of recording license plate numbers from images taken at rental returns, ensuring accurate data entry and saving time on manual checks.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenRouter account for AI processing.
3. Set up a form trigger for image uploads.
4. Customize the workflow to extract data relevant to your needs.
5. Test the workflow with sample images to verify accuracy.

### Practice
Create a test form with a few car images, run the workflow, and observe how it extracts the license plate numbers. Modify the images or try different angles to see how it affects accuracy and adjust the workflow settings as needed.

### WIIFM
Mastering this workflow allows you to offer automated image analysis services, reducing manual data entry errors and saving time for clients. This can lead to increased efficiency and potential new revenue streams in your automation business.
  
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
  