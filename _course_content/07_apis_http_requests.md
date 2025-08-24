# 📘 07 – APIs & HTTP Requests

## 🚀 Why This Matters

Most powerful workflows require reaching beyond built-in nodes. That’s where **APIs** come in.

An API (Application Programming Interface) is how software systems talk to each other. With n8n’s **HTTP Request Node**, you can connect to nearly any app or service on the internet.

> **Consultant Note:** This is where you go from “automation hobbyist” to **enterprise problem-solver**. With APIs, you’re no longer limited to what’s inside the menu — you can order *anything off the secret menu*.

---

## 🧩 API Fundamentals

* **API Endpoint** → The exact address (URL) you call.
* **API Call** → The request you send to that endpoint.
* **HTTP Method** → Defines the type of request:

  * `GET` → Retrieve data.
  * `POST` → Send/create data.
  * `PUT/PATCH` → Update data.
  * `DELETE` → Remove data.

**Analogy:**

* API = The restaurant.
* Endpoint = The kitchen station.
* Call = Your order.
* HTTP Request = The waiter carrying your order back and forth.

---

## 🧩 n8n’s HTTP Request Node

With this node, you can:

* Connect to any REST API.
* Pass parameters and authentication.
* Handle JSON responses.
* Chain custom APIs into your workflows.

---

## 📂 Workflow Example – Weather Notification

**Visual Flow (described):**

```
Manual Trigger → HTTP Request Node (Weather API) → Slack Node
```

---

### Step 1: Trigger

Add **Manual Trigger Node**.

---

### Step 2: HTTP Request

Add **HTTP Request Node** → Configure:

* Method: `GET`
* URL:

```http
https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=YOUR_API_KEY
```

---

### Step 3: Slack Notification

Add **Slack Node** → “Send Message”:

```text
Today’s weather in Atlanta: {{$json.weather[0].description}}
Temperature: {{$json.main.temp}}°K
```

---

### Example JSON Response (truncated):

```json
{
  "weather": [
    { "description": "clear sky" }
  ],
  "main": {
    "temp": 298.55
  }
}
```

---

## 🎯 Business Use Cases

* **E-commerce:** Call Shopify/Stripe APIs for real-time order handling.
* **Finance:** Connect to bank APIs for transaction monitoring.
* **Marketing:** Pull campaign stats from Google Ads or Meta Ads APIs.
* **Operations:** Integrate internal ERP/HR systems.

---

## 💡 Consultant Notes

* **Framing:** APIs = the key to custom, no-limit automations.
* **Pitch to Clients:** “If it has an API, we can automate it.”
* **Pricing Angle:** Businesses pay premium for integrations others can’t offer — this is how you differentiate.

---

## ✅ Key Takeaways

* APIs = bridges between apps.
* Endpoints + Calls + HTTP Methods define communication.
* n8n’s HTTP Request Node = connect to anything on the web.
* Consultants unlock new markets by mastering custom API workflows.

