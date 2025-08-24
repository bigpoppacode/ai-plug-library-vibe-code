# Splitout Webhook Create Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, splitOut, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **HTTP Request** node.
2. **Step 1: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Split Out (splitOut)** - This step performs a key action in the workflow.
4. **Step 3: has intensity data? (if)** - This step performs a key action in the workflow.
5. **Step 4: No intensity data available for video (noOp)** - This step performs a key action in the workflow.
6. **Step 5: intensity > 0.6 (filter)** - This step performs a key action in the workflow.
7. **Step 6: Filter out moments close to each other (filter)** - This step performs a key action in the workflow.
8. **Step 7: Input variables (set)** - This step performs a key action in the workflow.
9. **Step 8: Aggregate (aggregate)** - This step performs a key action in the workflow.
10. **Step 9: Create each moment (human readable) (set)** - This step performs a key action in the workflow.
11. **Step 10: Webhook (webhook)** - This step performs a key action in the workflow.
12. **Step 11: millisecs to seconds (set)** - This step performs a key action in the workflow.
13. **Step 12: prepare response (set)** - This step performs a key action in the workflow.
14. **Step 13: Respond with "no results" (respondToWebhook)** - This step performs a key action in the workflow.
15. **Step 14: Respond with moments (respondToWebhook)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow extracts engaging moments from a YouTube video based on intensity scores, checking for relevant data, filtering for significant moments, and returning a list of engaging timestamps.

### Demonstrate
A business owner might use this workflow to analyze YouTube content, pinpointing key moments to create promotional clips or highlight reels, enhancing viewer engagement and marketing efforts.

### Imitate
1. Set up a Webhook node to trigger the workflow.
2. Add an HTTP Request node to fetch video data.
3. Use Split Out and If nodes to handle intensity data.
4. Filter moments based on intensity scores and time proximity.
5. Aggregate results and respond with engaging moments.

### Practice
Create a simplified version of this workflow that extracts timestamps from a different video platform (e.g., Vimeo) using similar logic, tweaking the HTTP Request URL and response handling.

### WIIFM
Mastering this workflow can help you offer video content analysis services, creating value for creators and marketers by enabling them to identify and leverage engaging moments, thereby attracting more viewers and increasing revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "HTTP Request" and "Sticky Note3" for IDs, table names, and URLs.
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
