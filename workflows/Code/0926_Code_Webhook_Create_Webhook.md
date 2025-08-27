# Code Webhook Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note2**.
  2. **Get Approvals** `webhook` — path: `//approve-issue`
3. **Receive Issue Request** `webhook` — method: **POST**, path: `/raw-materials-issue`
4. **Sticky Note** `stickyNote` — width: "2820", height: "1400", content: "# Material Issue Request and Approval"
5. **Sticky Note4** `stickyNote` — color: "3", width: "2840", height: "1380"
6. **Sticky Note2** `stickyNote` — width: "2700", height: "2840", content: "![INVENTORY AUTOMATION SYSTEM.png](1)
# Raw Materials Inventory Management with Google Sheets and Supabase using n8n Webhooks


## Introduction
This n8n automation streamlines raw …[truncated]"
7. **Receive Raw Materials Webhook** `webhook` — method: **POST**, path: `/Pb-raw-materials`
8. **Format Approval Response** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Standardize Data** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "="
10. **Standardize Raw Material Data** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "="
11. **Verify Approval Data** `code` — jsCode: "const input = $input.all()[0].json;
if (!input["Submission ID"]) throw new Error("Submission ID is missing");
if (!["approve", "reject"].includes(input["Action"])) throw new Error(…[truncated]"
12. **Validate Issue Request Data** `code` — jsCode: "const input = $input.all()[0].json;
const quantityRequested= input["Quantity Requested"];

if (quantityRequested <= 0) throw new Error(`Invalid quantity Requested: ${quantityReques…[truncated]"
13. **Calculate Total Price** `code` — jsCode: "// Get the input data
const input = $input.all()[0].json;

// Debug: Log the entire input to see all available fields
console.log("Complete Input Data:", JSON.stringify(input, null…[truncated]"
14. **Retrieve Issue Request Details** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
15. **Searck Issues** `supabase` — operation: **getAll**, table: `Materials Issued`
16. **Verify Requested Quantity** `code` — jsCode: "const input = $input.all()[0].json;
const quantityRequested = input["Quantity Requested"];
if (!input["Product ID"]) throw new Error("Product ID is missing");
if (quantityRequested…[truncated]"
17. **Append Raw Materials** `googleSheets` — operation: **append**
18. **New Record Row** `supabase` — table: `Raw Materials`
19. **Merge1** `merge` — mode: "chooseBranch"
20. **Append Material Request** `googleSheets` — operation: **append**
21. **Create Record Issue** `supabase` — table: `Materials Issued`
22. **Validate Quantity Received** `code` — jsCode: "const input = $input.all()[0].json;

const getNumber = (value) => {
  if (!value) return 0; // Default to 0 if null/undefined
  const cleaned = String(value).replace(/[^\d.-]/g, ''…[truncated]"
23. **Search Current Stock** `supabase` — operation: **getAll**, table: `Current Stock`
24. **Process Approval Decision** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
25. **Check Available Stock for Issue** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
26. **Search Product ID** `supabase` — operation: **getAll**, table: `Current Stock`
27. **Lookup Existing Stock** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
28. **Update Stock After Issue** `googleSheets` — operation: **update**
29. **Materials Issue Table Update** `supabase` — operation: **update**, table: `Materials Issued`
30. **Get Stock for Issue Update from Current** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
31. **Merge Lookups** `merge` — mode: "chooseBranch"
32. **Merge** `merge` — mode: "chooseBranch"
33. **Update Stock** `code` — jsCode: "const currentStock = parseFloat($input.first().json['Current Stock']
 );
const approvedQuantity = parseFloat(
 $('Verify Approval Data').first().json['Approved Quantity']);
const n…[truncated]"
34. **Prepare Approval** `code` — jsCode: "const currentStock = parseFloat(
  $input.first().json['Current Stock']|| 0);
const quantityRequested = parseFloat(
$('Append Material Request').first().json['Quantity Requested'])…[truncated]"
35. **Check If Product ID Exists** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
36. **Update Current Stock1** `googleSheets` — operation: **update**
37. **Update Current Stck** `supabase` — operation: **update**, table: `Current Stock`
38. **Send Approval Request** `gmail` — sendTo: "example@gmail.com", message: "=<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Material Issue Request Approval<…[truncated]", options: "[object Object]"
39. **Calculate Updated Current Stock** `code` — mode: "runOnceForEachItem", jsCode: "const existingStock = parseFloat(
$('Lookup Existing Stock').first().json['Current Stock']
|| 0);
const newQuantity = parseFloat(
  $('Validate Quantity Received').first().json['Qu…[truncated]"
40. **Format response** `itemLists` — operation: **removeDuplicates**
41. **LookUp Current stock1** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
42. **Update Current Stock** `googleSheets` — operation: **update**
43. **Current Stock Update** `supabase` — operation: **update**, table: `Current Stock`
44. **Initialize New Product stock** `googleSheets` — operation: **append**
45. **New Row Current Stock** `supabase` — table: `Current Stock`
46. **Low stock Detection1** `code` — mode: "runOnceForEachItem", jsCode: "const currentStock = parseFloat($input.item.json["Current Stock"]);
const minStock = parseFloat($input.item.json["Minimum Stock Level"]);

// Check if stock is below minimum
const …[truncated]"
47. **LookUp Current stock** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
48. **Is Stock is Low** `if` — options: "[object Object]", conditions: "[object Object]"
49. **Low stock Detection2** `code` — mode: "runOnceForEachItem", jsCode: "const currentStock = parseFloat($input.item.json["Current Stock"]);
const minStock = parseFloat($input.item.json["Minimum Stock Level"]);

// Check if stock is below minimum
const …[truncated]"
50. **Low Stock Email Alert** `gmail` — sendTo: "example@gmail.com", message: "=<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Low Stock Alert</title>
  <style…[truncated]", options: "[object Object]"
51. **Trigger Low Stock Alert** `if` — options: "[object Object]", conditions: "[object Object]"
52. **Send Low Stock Email Alert** `gmail` — sendTo: "example@gmail.com", message: "=<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Low Stock Alert</title>
  <style…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the management of raw materials inventory. It receives requests for raw materials, processes them for approval or rejection, and updates stock levels accordingly. The workflow uses webhooks to handle incoming requests, verifies data, calculates total prices, and updates records in Google Sheets and Supabase. It also sends emails for approvals and alerts for low stock levels, ensuring efficient inventory tracking and management.

**Demonstrate:** A manufacturing company could use this workflow to handle their raw materials inventory, ensuring that requests are approved and stock levels are updated automatically. This reduces manual errors and ensures timely responses to material requests.

**Imitate:** 
1. Import the workflow into your n8n instance.
2. Connect your Google Sheets and Supabase accounts.
3. Set up webhooks to receive requests for raw materials.
4. Customize the workflow to fit your inventory management process.
5. Test the workflow with sample data to ensure it functions correctly.

**Practice:** Create a test scenario with a small set of raw material requests. Run the workflow to see how it processes requests, updates stock levels, and sends notifications. Adjust parameters to see the effects on the workflow's behavior.

**WIIFM:** Mastering this workflow can enhance your ability to offer automated inventory management solutions to businesses. It saves time, reduces errors, and improves efficiency, making it a valuable service offering for clients looking to optimize their operations. This can lead to increased client satisfaction and potential for higher revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  