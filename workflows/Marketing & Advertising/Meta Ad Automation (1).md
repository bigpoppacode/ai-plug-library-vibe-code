# Meta Ad Automation (1)

## 🚀 What It Does
This workflow automates a process involving webhook, switch, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Webhook (webhook)** - This step performs a key action in the workflow.
3. **Step 2: Switch (switch)** - This step performs a key action in the workflow.
4. **Step 3: Product Overview & Customer Research (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Edit Fields2 (set)** - This step performs a key action in the workflow.
6. **Step 5: Edit Fields (set)** - This step performs a key action in the workflow.
7. **Step 6: Split Out (splitOut)** - This step performs a key action in the workflow.
8. **Step 7: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
9. **Step 8: Basic LLM Chain1 (chainLlm)** - This step performs a key action in the workflow.
10. **Step 9: Basic LLM Chain2 (chainLlm)** - This step performs a key action in the workflow.
11. **Step 10: Schedule Trigger2 (scheduleTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Split Out6 (splitOut)** - This step performs a key action in the workflow.
13. **Step 12: Split Out7 (splitOut)** - This step performs a key action in the workflow.
14. **Step 13: Split Out8 (splitOut)** - This step performs a key action in the workflow.
15. **Step 14: Split Out9 (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Wait (wait)** - This step performs a key action in the workflow.
17. **Step 16: If9 (if)** - This step performs a key action in the workflow.
18. **Step 17: If10 (if)** - This step performs a key action in the workflow.
19. **Step 18: If11 (if)** - This step performs a key action in the workflow.
20. **Step 19: Edit Fields6 (set)** - This step performs a key action in the workflow.
21. **Step 20: If6 (if)** - This step performs a key action in the workflow.
22. **Step 21: Airtable9 (airtable)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Webhook1 (webhook)** - This step performs a key action in the workflow.
25. **Step 24: Airtable10 (airtable)** - This step performs a key action in the workflow.
26. **Step 25: Facebook Graph API10 (facebookGraphApi)** - This step performs a key action in the workflow.
27. **Step 26: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
28. **Step 27: HTTP Request1 (httpRequest)** - This step performs a key action in the workflow.
29. **Step 28: Edit Fields5 (set)** - This step performs a key action in the workflow.
30. **Step 29: Code1 (code)** - This step performs a key action in the workflow.
31. **Step 30: Edit Fields7 (set)** - This step performs a key action in the workflow.
32. **Step 31: If7 (if)** - This step performs a key action in the workflow.
33. **Step 32: OpenAI (openAi)** - This step performs a key action in the workflow.
34. **Step 33: Airtable11 (airtable)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
38. **Step 37: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
39. **Step 38: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
40. **Step 39: Google Gemini Chat Model2 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
41. **Step 40: Get Product (airtable)** - This step performs a key action in the workflow.
42. **Step 41: Get Product1 (airtable)** - This step performs a key action in the workflow.
43. **Step 42: Get Script (airtable)** - This step performs a key action in the workflow.
44. **Step 43: Get Script1 (airtable)** - This step performs a key action in the workflow.
45. **Step 44: Update Product Details (airtable)** - This step performs a key action in the workflow.
46. **Step 45: Create Angles (airtable)** - This step performs a key action in the workflow.
47. **Step 46: Update Product (airtable)** - This step performs a key action in the workflow.
48. **Step 47: Update Script (airtable)** - This step performs a key action in the workflow.
49. **Step 48: Update Script1 (airtable)** - This step performs a key action in the workflow.
50. **Step 49: Generate Angles (chainLlm)** - This step performs a key action in the workflow.
51. **Step 50: Parsing (chainLlm)** - This step performs a key action in the workflow.
52. **Step 51: Get FB Ad Accounts (facebookGraphApi)** - This step performs a key action in the workflow.
53. **Step 52: Get Ad Campaigns (facebookGraphApi)** - This step performs a key action in the workflow.
54. **Step 53: Get FB Ad Sets (facebookGraphApi)** - This step performs a key action in the workflow.
55. **Step 54: Get FB Ad Contents (facebookGraphApi)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of generating marketing content, such as video scripts and ad angles, based on customer input and product details. It uses webhooks to trigger actions, processes data through various nodes, and integrates AI for content generation.

### Demonstrate
A marketing agency could use this workflow to streamline the creation of video sales letters (VSLs) for clients. Instead of manually drafting scripts, they can input product details and receive fully developed scripts and marketing angles automatically, saving time and enhancing creativity.

### Imitate
1. Set up a webhook in n8n to receive product details.
2. Add a switch node to handle different actions (e.g., generate scripts or angles).
3. Use HTTP request nodes to call AI services for content generation.
4. Save results in Airtable or send them via email.
5. Test the workflow by submitting product details through the webhook.

### Practice
Create a simplified version of the workflow where you only generate a marketing angle based on a product name. Use a manual trigger and an HTTP request to simulate the AI response, then log the output to Airtable.

### WIIFM
Mastering this workflow enables you to offer high-value automation services, helping businesses generate marketing content efficiently. This can lead to increased client satisfaction, repeat business, and the ability to charge premium prices for your automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Webhook" and "Get FB Ad Contents" for IDs, table names, and URLs.
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
