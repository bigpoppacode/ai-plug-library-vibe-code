# Meta Ad Automation

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
This n8n workflow automates the generation of marketing angles and scripts for products. It collects data via a webhook, processes customer research, generates content using AI, and stores results in Airtable, streamlining the creative process for marketers.

### Demonstrate
A business owner can use this workflow to automate the creation of ad scripts and angles for new products, saving time and ensuring consistent quality in marketing materials, ultimately leading to higher conversion rates.

### Imitate
1. Set up a webhook in n8n to collect product data.
2. Use a Switch node to direct actions based on the type of request (e.g., generating angles or scripts).
3. Connect an HTTP Request node to an AI service for content generation.
4. Store results in Airtable using the Airtable node.
5. Test by sending a sample webhook request.

### Practice
Try modifying the workflow to add a new feature: generate an email summary of the generated angles and scripts. Set up an email node to send this summary to yourself after the content is created.

### WIIFM
Mastering this workflow allows you to offer high-value marketing automation services, attract more clients, and increase revenue by providing efficient solutions for content generation, making you a sought-after consultant in the field.

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
