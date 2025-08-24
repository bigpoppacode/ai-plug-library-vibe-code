# 📘 03 – First Automations

## 🚀 Why Start Simple?

The best way to learn n8n is to **build fast wins**. These “Hello World” workflows aren’t about complexity — they’re about proving that automation works and delivers value right away.

> **Consultant Note:** When onboarding a client, always start with a **simple automation**. It builds trust, shows ROI quickly, and opens the door to bigger projects.

---

## 🧩 Tutorial 1: Hello World – Send an Email

**Goal:** Send yourself an email through n8n.

**Steps:**

1. Create new workflow.
2. Add **Manual Trigger** node.
3. Add **Email Node** (SMTP or Gmail).

   * To: `your@email.com`
   * Subject: `Hello from n8n!`
   * Body: `This is your first automation.`
4. Click **Execute Workflow**.

🎉 You just sent your first automated email.

---

## 🧩 Tutorial 2: Slack Notification for New Orders

**Goal:** Notify your Slack channel when a new order is received in Airtable.

**Steps:**

1. Add **Airtable Trigger Node** (new record in “Orders” table).
2. Add **Slack Node** (send message).
3. Map:

   * Message → `New order: {{$json.customerName}} spent ${{$json.amount}}.`
4. Test by adding a new row in Airtable.

**Visual Flow (described):**

```
Airtable Trigger → Slack Node
```

**Result:** Your team gets instant order alerts in Slack.

---

## 🧩 Tutorial 3: Daily Digest via Email

**Goal:** Every day at 9 AM, send a summary of new signups.

**Steps:**

1. Add **Schedule Trigger Node** → Run daily at 9 AM.
2. Add **Airtable Node** → “Search Records” in “Users” table.

   * Filter: `createdAt = yesterday`.
3. Add **Email Node** → Send list of users.

**Email Body Example:**

```
Yesterday’s new users:
- {{$json[0].name}}
- {{$json[1].name}}
- {{$json[2].name}}
```

---

## 🧩 Tutorial 4: Lead Routing Blueprint

**Goal:** Route new leads to the right team automatically.

**Steps:**

1. **Trigger Node:** Webhook (capture form submission).
2. **Logic Node:** IF condition – If revenue > 100k → Sales Manager. Otherwise → SDR.
3. **Action Node:** Slack message OR CRM update.

**Visual Flow (described):**

```
Webhook → IF Node (Revenue > 100k?) → Slack/CRM
```

---

## 🎯 Consultant Notes

* **Show Value Fast:** The first workflow should always save at least 30 minutes per week.
* **Keep It Simple:** Over-complicated demos can overwhelm clients.
* **Frame the Win:** Position each small automation as a **building block in a larger system**.

> **Example Pitch:**
> “This Slack alert may seem small, but now your team never misses an order. Imagine scaling this to every system in your business.”

---

## ✅ Key Takeaways

* Start with **Manual → Email** to get a quick win.
* Connect to business tools (Slack, Airtable) for immediate ROI.
* Use **Schedule Triggers** for recurring reports.
* Add **Logic** to route leads and scale decision-making.
* Each simple workflow builds confidence for more advanced automations.


