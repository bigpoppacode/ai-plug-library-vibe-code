# Manual Code Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, switch.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Set: Define Initial Variables (set)** - This step performs a key action in the workflow.
4. **Step 3: Switch: What kind of question do we want to ask? (switch)** - This step performs a key action in the workflow.
5. **Step 4: Set: Scene Prompt (set)** - This step performs a key action in the workflow.
6. **Step 5: Set: Summarize Prompt (set)** - This step performs a key action in the workflow.
7. **Step 6: Set: Transcript Prompt (set)** - This step performs a key action in the workflow.
8. **Step 7: Set: Fallback (set)** - This step performs a key action in the workflow.
9. **Step 8: Set: Transcript with Timestamps Prompt (set)** - This step performs a key action in the workflow.
10. **Step 9: Set: Scene Clips (set)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Set Fields: Define Outcome (set)** - This step performs a key action in the workflow.
13. **Step 12: HTTP Request to Google (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Set: Merged Values (set)** - This step performs a key action in the workflow.
15. **Step 14: If: Was an error detected? (if)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Code: Merge data from prior nodes with HTTP Output (code)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of transforming YouTube videos into summaries, transcripts, and visual insights. It starts with a manual trigger, sets initial variables (like the YouTube URL), then processes the video based on user-defined prompts (e.g., summary, transcript), and finally sends the results to a designated platform.

### Demonstrate
A content creator could use this workflow to automatically generate video summaries for their YouTube channel, saving time on content preparation. This can help improve viewer engagement by providing concise video descriptions and enhancing SEO efforts.

### Imitate
1. **Set Up n8n**: Install n8n and create a new workflow.
2. **Add Manual Trigger**: Use the manual trigger to start the workflow.
3. **Define Variables**: Use the "Set" node to input your YouTube URL and desired output type (summary, transcript, etc.).
4. **Process Video**: Add a "Switch" node to determine the type of output you want, then set corresponding prompts for AI processing.
5. **Send Results**: Use an HTTP Request node to send the processed data to Google Sheets or any platform of your choice.

### Practice
Experiment with different YouTube video URLs and output types (transcript vs. summary) to see how the results vary. Adjust the prompts in the workflow to refine the output quality and learn how different settings affect the final content.

### WIIFM
Mastering this workflow enables you to offer valuable automation services to clients, such as content creators and marketers, enhancing their productivity while generating income for yourself. Automating video insights can attract more clients looking to scale their content strategies effectively.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note2" for IDs, table names, and URLs.
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
