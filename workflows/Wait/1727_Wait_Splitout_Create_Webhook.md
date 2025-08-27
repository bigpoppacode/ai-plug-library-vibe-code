# Wait Splitout Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note1**.
2. **Sticky Note** `stickyNote` — color: "4", width: "481", height: "198"
3. **Sticky Note1** `stickyNote` — color: "7", width: "1110.4301052736698", height: "544.444950562247"
4. **Sticky Note2** `stickyNote` — width: "276", height: "219", content: "## API Docs

Endereco:
https://github.com/Endereco/enderecoservice_api

Billbee:
https://app.billbee.io//swagger/ui/index
"
5. **Sticky Note3** `stickyNote` — color: "5", width: "574.5277463210057", height: "573.7065374509425"
6. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
7. **Sticky Note4** `stickyNote` — color: "3", height: "239.63602562365423", content: "## Include Filter 
You want to filter out PickUp Shops or Parcel Stations for example in Germany:

"Postfiliale, Paketshop, Packstation"

This can also be set up within Billbee"
8. **Sticky Note5** `stickyNote` — color: "3", width: "155.04025478630723", height: "185.20127393153615"
9. **Sticky Note6** `stickyNote` — color: "5", width: "907.6568579769853", height: "627.257034553087"
10. **Sticky Note7** `stickyNote` — color: "4", width: "1325.4150814203485", height: "354.5727675883748"
11. **Sticky Note8** `stickyNote` — color: "3", height: "251.61012258936577", content: "[redacted]"
12. **Sticky Note9** `stickyNote` — color: "3", width: "150", height: "135.6842625042993"
13. **Webhook** `webhook` — path: `/786e8a93-9837-44e6-81ae-a173ce25a14f`
14. **ConfigNode** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Wait** `wait` — amount: "1"
16. **get order data** `httpRequest` — url: `=https://api.billbee.io/api/v1/orders/{{ $json.orderID }}`
17. **Split Out Order Data** `splitOut` — options: "[object Object]", fieldToSplitOut: "Data.ShippingAddress.BillbeeId, Data.ShippingAddress.FirstName, Data.ShippingAddress.LastName, Data.ShippingAddress.Street, Data.ShippingAddress.HouseNumber, Data.ShippingAddress.Z…[truncated]"
18. **Set Address Fields** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Filter Out PickUpShops** `filter` — options: "[object Object]", conditions: "[object Object]"
20. **check if housenumer is not empty** `if` — options: "[object Object]", conditions: "[object Object]"
21. **check if addressline 2 contains number** `if` — options: "[object Object]", conditions: "[object Object]"
22. **set value of addressline2 as housenumber** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
23. **check if addressline 2 contains number and letter** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
24. **set value of addressline2 as housenumber number+letter** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
25. **set billbee tag manual check** `httpRequest` — method: **POST**, url: `=https://api.billbee.io/api/v1/orders/{{ $('Set Address Fields').item.json["BillbeeID"] }}/tags`
26. **Check Address endereco api** `httpRequest` — method: **POST**, url: `https://endereco-service.de/rpc/v1`
27. **check if new address is not empty** `if` — options: "[object Object]", conditions: "[object Object]"
28. **Split Out Corrected Address** `splitOut` — options: "[object Object]", fieldToSplitOut: "result.predictions"
29. **set billbee tag** `httpRequest` — method: **POST**, url: `=https://api.billbee.io/api/v1/orders/{{ $('Set Address Fields').item.json["BillbeeID"] }}/tags`
30. **Wait1** `wait` — amount: "1"
31. **set new delivery address to billbee** `httpRequest` — method: **PATCH**, url: `=https://api.billbee.io/api/v1/customers/addresses/{{ $('Set Address Fields').item.json["BillbeeShippingAddressID"] }}`
32. **set billbee success** `httpRequest` — method: **POST**, url: `=https://api.billbee.io/api/v1/orders/{{ $('Set Address Fields').item.json["BillbeeID"] }}/tags`

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates the process of validating shipping addresses for orders in Billbee using the Endereco API. It starts when a webhook from Billbee triggers the workflow with an order ID. The workflow retrieves the order data, extracts the shipping address, and checks its validity with Endereco. If the address is valid or corrected, it updates the address in Billbee and tags the order as validated. If not, it tags the order for manual review.

**Demonstrate:** A business owner using Billbee could use this workflow to ensure all customer shipping addresses are accurate, reducing the risk of failed deliveries and improving customer satisfaction.

**Imitate:** 
1. Set up a webhook in n8n to trigger the workflow with order ID from Billbee.
2. Connect Billbee and Endereco API keys.
3. Configure HTTP requests to retrieve order data and validate addresses.
4. Set conditions and tags based on address validity.
5. Test with sample order data.

**Practice:** Create a test order in Billbee with a known incorrect address. Run the workflow to see how it identifies and handles the error, updating the address and tagging the order correctly.

**WIIFM:** Mastering this workflow allows you to offer address validation services, reducing delivery errors for clients. This can enhance your service offerings, improve customer retention, and potentially increase revenue in your automation business.

## 🔧 Setup Instructions
1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
