# Postgres Webhook Automation Webhook

## 🚀 What It Does
This workflow automates a process involving set, webhook, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: Extract relevant data (set)** - This step performs a key action in the workflow.
3. **Step 2: New /login event (webhook)** - This step performs a key action in the workflow.
4. **Step 3: Unknown threat? (if)** - This step performs a key action in the workflow.
5. **Step 4: Get last 10 logins from the same user (postgres)** - This step performs a key action in the workflow.
6. **Step 5: Query IP API1 (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: New location? (if)** - This step performs a key action in the workflow.
8. **Step 7: Parse User Agent (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Merge (merge)** - This step performs a key action in the workflow.
10. **Step 9: New Device/Browser? (if)** - This step performs a key action in the workflow.
11. **Step 10: Complete login info (merge)** - This step performs a key action in the workflow.
12. **Step 11: Query user by ID (postgres)** - This step performs a key action in the workflow.
13. **Step 12: New Location (noOp)** - This step performs a key action in the workflow.
14. **Step 13: New Device/Browser (noOp)** - This step performs a key action in the workflow.
15. **Step 14: User has email? (if)** - This step performs a key action in the workflow.
16. **Step 15: HTML (html)** - This step performs a key action in the workflow.
17. **Step 16: Inform user (gmail)** - This step performs a key action in the workflow.
18. **Step 17: noise? (if)** - This step performs a key action in the workflow.
19. **Step 18: Slack (slack)** - This step performs a key action in the workflow.
20. **Step 19: Check trust level (switch)** - This step performs a key action in the workflow.
21. **Step 20: Check classification (switch)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: riot? (if)** - This step performs a key action in the workflow.
29. **Step 28: 🔴 Priority: HIGH (set)** - This step performs a key action in the workflow.
30. **Step 29: 🟡 Priority: MEDIUM (set)** - This step performs a key action in the workflow.
31. **Step 30: 🟢 Priority: LOW (set)** - This step performs a key action in the workflow.
32. **Step 31: GreyNoise (httpRequest)** - This step performs a key action in the workflow.
33. **Step 32: IP API (httpRequest)** - This step performs a key action in the workflow.
34. **Step 33: UserParser (httpRequest)** - This step performs a key action in the workflow.
35. **Step 34: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
36. **Step 35: Example event (code)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Known, Do Nothing (noOp)** - This step performs a key action in the workflow.
42. **Step 41: Known Location (noOp)** - This step performs a key action in the workflow.
43. **Step 42: Old Device/Browser (noOp)** - This step performs a key action in the workflow.
44. **Step 43: Not Riot (noOp)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow detects suspicious login attempts by extracting data from login events and checking for anomalies like new locations or devices. If a potential threat is identified, it notifies users and security teams via email and Slack.

### Demonstrate
A business owner could use this workflow to enhance security by automatically monitoring login attempts. For example, if a user logs in from a new device or location, the workflow alerts them to verify the login, reducing the risk of unauthorized access.

### Imitate
1. Set up a webhook to trigger on login events.
2. Extract relevant data (IP, user agent, timestamp).
3. Query the database for previous logins.
4. Check for anomalies using if conditions.
5. Notify users via email if suspicious activity is detected.

### Practice
Create a simple version of this workflow that only extracts login data and sends a notification when a new IP address is detected. Test it by simulating a login event with different IP addresses to see how it responds.

### WIIFM
Mastering this workflow empowers you to offer cybersecurity automation services, enhancing client trust and potentially increasing your income. Automated security measures can attract businesses looking to protect their data without extensive manual oversight.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Extract relevant data" and "Not Riot" for IDs, table names, and URLs.
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
