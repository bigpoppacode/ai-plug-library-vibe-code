# 📘 02 – Core Nodes & Data Flow

## 🧩 What Are Nodes?

Nodes are the **building blocks** of n8n workflows. Each one performs a specific task: start a workflow, fetch data, transform it, or send it somewhere.

Think of them like **Lego pieces** — each has a unique shape (purpose), but together you can build almost anything.

---

## ⚡ Types of Nodes

### 1. Trigger Nodes

Triggers **start** a workflow.

* **Manual Trigger** – Run on demand (for testing).
* **Schedule Trigger** – Run every X minutes/hours/days.
* **Webhook Trigger** – Run when data is pushed to a URL.
* **Event Trigger** – Start when an event occurs (new email, new Airtable row).

> **Example:** Every time someone fills out your website form, a **Webhook Trigger** kicks off your workflow.

---

### 2. Action Nodes

Action nodes **do something**.

* Send an email.
* Post a Slack message.
* Add a row to Google Sheets.
* Create a Salesforce contact.
* Make an HTTP request to an API.

> **Example:** When a new lead comes in, use an Action Node to **send them a welcome email** automatically.

---

### 3. Data Transformation Nodes

Transform raw data into the format you need.

* **Set Node** – Add or overwrite fields.
* **Function Node** – Run custom JavaScript.
* **Merge Node** – Combine outputs from two branches.
* **Aggregate Node** – Summarize multiple values into one.

> **Example:** You receive a phone number as `+1-202-555-0199`, but your CRM requires `2025550199`. A **Function Node** cleans it up before saving.

---

### 4. Logic & Flow Nodes

Control the **decision-making** in your workflow.

* **If Node** – Branch based on true/false conditions.
* **Switch Node** – Route based on multiple outcomes.
* **Wait Node** – Pause until a condition is met.
* **Error Workflow** – Handle failures gracefully.

> **Example:** If a customer spends more than \$1,000 → route them to a **VIP email sequence**. Otherwise, send a standard thank-you email.

---

## 🔄 How Data Moves Through Nodes

Every node passes data forward as **JSON**.

**Example Input:**

```json
{
  "name": "Arthur",
  "email": "arthur@example.com",
  "amount": 1200
}
```

**Example Expression Usage:**

* `{{$json.name}}` → Arthur
* `{{$json.amount}}` → 1200
* `{{ $json.amount > 1000 ? "VIP" : "Standard" }}` → VIP

This makes workflows **dynamic** — instead of hardcoding values, you map data from previous steps.

---

## 🧪 Quick Tutorial: Slack Notification for New Orders

**Goal:** Notify your team in Slack when a new order is received in Airtable.

**Steps:**

1. **Trigger Node**: Airtable (New Record).
2. **Action Node**: Slack → Send Message.
3. Map fields:

   * Message: `New order from {{$json.name}} for ${{$json.amount}}`.

**Visual Flow (described):**

```
Airtable Trigger → Slack Node
```

---

## 🎯 Consultant Notes

When working with clients:

* Use **Trigger Nodes** to connect workflows to real business events (new lead, new sale).
* Use **Logic Nodes** to **add intelligence** to processes (VIP vs. Standard customers).
* Use **Data Transformation Nodes** to guarantee **clean, structured outputs** (never push messy data into client systems).

> **Positioning Tip:** Show clients how workflows make **decisions** without them — you’re selling not just automation, but **judgment at scale**.

---

## ✅ Key Takeaways

* **Trigger Nodes** start workflows.
* **Action Nodes** perform tasks.
* **Transformation Nodes** clean and reshape data.
* **Logic Nodes** enable conditional decisions.
* Data flows as **JSON**, mapped dynamically into each step.

