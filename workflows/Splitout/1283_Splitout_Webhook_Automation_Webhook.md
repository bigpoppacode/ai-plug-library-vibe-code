# Splitout Webhook Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Sticky Note** `stickyNote` — color: "7", width: "1000.427054367056", height: "572.2734520891689"
3. **Sticky Note1** `stickyNote` — color: "6", width: "1060.5591882039919", height: "506.94921487705585"
4. **Sticky Note2** `stickyNote` — width: "2404.755367647059", height: "559.608748371423", content: "## Add DHL tracking information
Queries the status of shipped orders from DHL.

Can be skipped if order tracking should not be available or replaced with other services like UPS."
5. **Sticky Note3** `stickyNote` — color: "3", width: "478.2162464985994", height: "558.6043670960834"
6. **Sticky Note4** `stickyNote` — width: "277.6742597550393", height: "568.9672169306307", content: "## Get Orders"
7. **Sticky Note5** `stickyNote` — color: "2", width: "527.8197815634092", height: "572.2734520891689"
8. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('Mock Data').item.json.sessionId }}", sessionIdType: "customKey", contextWindowLength: "10"
9. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
10. **Sticky Note6** `stickyNote` — color: "7", width: "492.0420811160542", height: "564.8840203332783"
11. **Sticky Note8** `stickyNote` — color: "4", width: "676.2425958534976", height: "886.4179654829891"
12. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4`
13. **WooCommerce_Tool** `toolWorkflow` — name: "WooCommerce_Tool", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
14. **Chat Trigger** `chatTrigger` — public: "true", options: "[object Object]"
15. **Sticky Note7** `stickyNote` — color: "4", width: "517.004057164405", height: "555.1564335638465"
16. **Webhook Example Page** `webhook` — path: `/website-chat-example`
17. **Encrypt email** `code` — jsCode: "[redacted]"
18. **Example encrypted email** `set` — options: "[object Object]", assignments: "[object Object]"
19. **If email provided** `if` — options: "[object Object]", conditions: "[object Object]"
20. **Decrypt email address** `code` — jsCode: "[redacted]"
21. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "<doctype html>
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Chat</title>
			<link
				…[truncated]"
22. **Decrypt email** `code` — jsCode: "[redacted]"
23. **WooCommerce - Get User** `wooCommerce` — resource: **customer**, operation: **getAll**
24. **No email provided** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Mock Data** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
26. **If user found** `if` — options: "[object Object]", conditions: "[object Object]"
27. **AI Agent** `agent` — options: "[object Object]"
28. **WooCommerce Get Orders** `httpRequest` — url: `https://woo-pleasantly-swag-werewolf3.wpcomstaging.com/wp-json/wc/v3/orders`
29. **No customer found** `set` — options: "[object Object]", assignments: "[object Object]"
30. **If order found** `if` — options: "[object Object]", conditions: "[object Object]"
31. **Extract Tracking Data** `set` — options: "[object Object]", assignments: "[object Object]"
32. **No order found** `set` — options: "[object Object]", assignments: "[object Object]"
33. **If contains DHL data** `if` — options: "[object Object]", conditions: "[object Object]"
34. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "tracking"
35. **DHL** `dhl` — options: "[object Object]", trackingNumber: "={{ $json.tracking_number }}"
36. **Add Error Information** `set` — options: "[object Object]", assignments: "[object Object]"
37. **Merge Tracking Data** `merge` — configured for its default action.
38. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tracking"
39. **Merge Orders** `merge` — configured for its default action.
40. **Merge Order and Tracking Data** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
41. **Send Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates customer order tracking for WooCommerce. It retrieves customer data using an email address, fetches their orders, checks for DHL tracking numbers, and retrieves tracking details. The workflow then sends a response with order and tracking information to the customer, ensuring efficient and accurate order management.

**Demonstrate:** A business owner could use this workflow to automate order tracking, enhancing customer satisfaction by providing timely updates on shipping status, reducing manual workload, and minimizing errors in communication.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your WooCommerce and DHL accounts.
3. Set up email encryption/decryption for secure customer data handling.
4. Customize the WooCommerce API and DHL tracking details.
5. Test the workflow to ensure accurate order tracking and response.

**Practice:** Create a test WooCommerce store with sample orders and run the workflow. Verify it retrieves orders and sends tracking information correctly. Modify order details or tracking numbers to observe how the workflow handles different scenarios.

**WIIFM:** Mastering this workflow allows you to offer automated order tracking services, improving customer satisfaction and operational efficiency. This skill can attract clients seeking to enhance their e-commerce operations, generating income and expanding your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** wooCommerceApi, dhlApi, openAiApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
