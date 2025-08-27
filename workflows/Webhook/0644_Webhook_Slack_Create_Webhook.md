# Webhook Slack Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **TheHive Trigger**.
2. **TheHive Trigger** `theHiveProjectTrigger` — events: "case_create", options: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "455.1635858314854", height: "538.2816200839441"
4. **Sticky Note2** `stickyNote` — color: "7", width: "543.689530484159", height: "516.5011820330969"
5. **Sticky Note3** `stickyNote` — color: "7", width: "686.8181233897246", height: "516.5011820330969"
6. **Sticky Note4** `stickyNote` — color: "7", width: "706.9954015609856", height: "467.56934570944634"
7. **Sticky Note5** `stickyNote` — color: "7", width: "1400.2199299541444", height: "1720.4067726820667"
8. **Sticky Note7** `stickyNote` — color: "7", width: "988.1220012094333", height: "613.5055433060886"
9. **Sticky Note11** `stickyNote` — color: "7", width: "792.317043267064", height: "631.3919967555308"
10. **Sticky Note12** `stickyNote` — color: "7", width: "691.0596729578308", height: "465.39159795232865"
11. **Sticky Note13** `stickyNote` — color: "7", width: "952.9348524840666", height: "895.6351014818621"
12. **Sticky Note14** `stickyNote` — color: "7", width: "409.70915573152797", height: "570.3745712311052"
13. **Sticky Note15** `stickyNote` — color: "7", width: "374.56596023868", height: "628.1281535316614"
14. **Sticky Note16** `stickyNote` — color: "5", width: "431.4429614751546", height: "532.2137131625435"
15. **Sticky Note17** `stickyNote` — color: "5", width: "431.4429614751546", height: "453.21603562878454"
16. **Sticky Note1** `stickyNote` — color: "7", width: "839.546315272846", height: "472.04545691749547"
17. **Sticky Note6** `stickyNote` — color: "5", width: "171.29382736351008", height: "165.28509020280688"
18. **Sticky Note8** `stickyNote` — color: "5", width: "306.95426010827737", height: "207.67897543554668"
19. **Sticky Note9** `stickyNote` — width: "670.2591130283372", height: "1196.0687210874733", content: "![theHive](https://uploads.n8n.io/templates/thehive.png)
# Streamline Case Management in TheHive via Slack!

## Our **TheHive Slack Integration** empowers SOC analysts by allowing …[truncated]"
20. **Sticky Note10** `stickyNote` — color: "5", width: "342.34463660857455", height: "106.35161810996954"
21. **Receive Button Press** `webhook` — method: **POST**, path: `/slackthehivewebhook`
22. **Formatting Dictionaries** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
24. **HTTP Request** `httpRequest` — url: `https://slack.com/api/users.lookupByEmail`
25. **Parse Message Type** `switch` — rules: "[object Object]", options: "[object Object]"
26. **Prep Fields For Slack** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Respond to Slack with 200 response** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
28. **Acknowledge Close Case to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
29. **Acknowledge Severity Update to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
30. **Acknowledge Modal Request to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
31. **Check if Case Options** `if` — options: "[object Object]", conditions: "[object Object]"
32. **Acknowledge PAP Update to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
33. **Acknowledge Status Update to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
34. **Acknowledge TLP Update to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
35. **Respond positive to Slack when someone clicks a link** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
36. **Post New Case To Slack** `slack` — select: "channel", blocksUi: "={
	"blocks": [
		{
			"type": "image",
			"block_id": "image_block",
			"image_url": "https://i.imgur.com/y2Yw1ZP.png",
			"alt_text": "{{ $json['caseid'] }}"
		},
		{
			"type": …[truncated]", channelId: "[object Object]"
37. **Prep Fields For Slack - Assign** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Prep Fields For Slack - Close** `set` — options: "[object Object]", assignments: "[object Object]"
39. **Prep Fields For Slack - Severity** `set` — options: "[object Object]", assignments: "[object Object]"
40. **Task Modal** `httpRequest` — method: **POST**, url: `https://slack.com/api/views.open`
41. **Close Modal with 204 response** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
42. **Respond 204 to Slack** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
43. **Prep Fields For PAP Slack** `set` — options: "[object Object]", assignments: "[object Object]"
44. **Prep Fields For Status Slack** `set` — options: "[object Object]", assignments: "[object Object]"
45. **Prep Fields For TLP Slack** `set` — options: "[object Object]", assignments: "[object Object]"
46. **No Action Needed** `noOp` — configured for its default action.
47. **Get Slack User's Email From Slack** `slack` — resource: **user**
48. **Close Case as False Positive** `theHiveProject` — resource: **case**, operation: **update**
49. **Update Case Severity** `theHiveProject` — resource: **case**, operation: **update**
50. **Get Email From Slack to assign the task to in TheHive** `slack` — resource: **user**
51. **Update Case PAP** `theHiveProject` — resource: **case**, operation: **update**
52. **Update Status in TheHive** `theHiveProject` — resource: **case**, operation: **update**
53. **Update Case TLP** `theHiveProject` — resource: **case**, operation: **update**
54. **Update TheHive Case with new Assignee** `theHiveProject` — resource: **case**, operation: **update**
55. **Close Case Block Rebuild** `set` — options: "[object Object]", assignments: "[object Object]"
56. **Severity Case Block Rebuild1** `set` — options: "[object Object]", assignments: "[object Object]"
57. **Add a task to TheHive** `theHiveProject` — resource: **task**
58. **PAP Case Block Rebuild** `set` — options: "[object Object]", assignments: "[object Object]"
59. **Status Case Block Rebuild** `set` — options: "[object Object]", assignments: "[object Object]"
60. **TLP Case Block Rebuild** `set` — options: "[object Object]", assignments: "[object Object]"
61. **Case Slack Block Rebuild** `set` — options: "[object Object]", assignments: "[object Object]"
62. **Map Actions** `set` — options: "[object Object]", assignments: "[object Object]"
63. **Build Final Block** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={"blocks": [{{ $json.actions }},{{ $json.buttons }}]}"
64. **Update Message with new Assignee** `httpRequest` — method: **POST**, url: `https://slack.com/api/chat.update`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow integrates TheHive, a case management platform, with Slack to streamline case management for Security Operations Center (SOC) analysts. When a new case is created in TheHive, it triggers the workflow to post the case details in Slack. Analysts can then update case attributes directly from Slack using interactive elements, which automatically updates the information back in TheHive.

### Demonstrate
A cybersecurity firm could use this workflow to enhance their incident response efficiency. By integrating TheHive with Slack, they can immediately notify their team of new cases and allow quick updates from Slack, reducing the time spent switching between tools and improving response times.

### Imitate
1. Install n8n and integrate it with TheHive and Slack.
2. Set up a TheHive Trigger for new case creation.
3. Configure nodes to map case details to Slack messages.
4. Add interactive elements in Slack to update case severity, status, and assignee.
5. Test the workflow by creating a new case in TheHive and observing the updates in Slack.

### Practice
Create a test case in TheHive and run the workflow. Try updating the case details from Slack using the provided interactive options. Verify that the updates reflect back in TheHive correctly.

### WIIFM
Mastering this workflow can significantly improve your operational efficiency by automating case management processes. This can lead to cost savings and enhanced service delivery, making your business more attractive to potential clients looking for streamlined security operations solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** slackApi, theHiveProjectApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
