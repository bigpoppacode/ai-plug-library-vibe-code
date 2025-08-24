# Manual Stickynote Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Set Yelp URL with the Bright Data Zone (set)** - This step performs a key action in the workflow.
6. **Step 5: HTTP Request to fetch the Yelp Business Reviews (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
8. **Step 7: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
9. **Step 8: Summarization Chain (chainSummarization)** - This step performs a key action in the workflow.
10. **Step 9: Merge (merge)** - This step performs a key action in the workflow.
11. **Step 10: Webhook Notifier for the merged response (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Google Gemini Chat Model for Summarization (lmChatGoogleGemini)** - This step performs a key action in the workflow.
13. **Step 12: Structured Data Extractor (chainLlm)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the extraction and summarization of Yelp business reviews using Bright Data and Google Gemini AI. It fetches reviews from Yelp, processes the data, and generates a concise summary, ultimately sending the summarized output to a specified location.

### Demonstrate
A business owner might use this workflow to quickly analyze customer feedback on their restaurant from Yelp. By automating the review extraction and summarization, they can gain insights into customer sentiment without manually reading each review, saving time and improving decision-making.

### Imitate
1. Import the workflow into n8n.
2. Update the Yelp URL in the "Set Yelp URL" node to your desired business.
3. Configure the HTTP Request with your Bright Data API credentials.
4. Set up Google Gemini credentials to enable AI processing.
5. Test the workflow to ensure it fetches and summarizes reviews correctly.

### Practice
Try modifying the Yelp URL to target a different business and run the workflow. Observe how the summary changes based on the reviews extracted. Experiment with different locations or business types to see how the summarization adapts.

### WIIFM
Mastering this workflow allows you to offer valuable insights to clients by automating the analysis of customer feedback. This skill can help you attract new customers, differentiate your services, and potentially generate income through consulting or automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Structured Data Extractor" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
