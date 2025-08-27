# Manual Airtop Automation Triggered
  ## 🚀 What It Does
  Automates a flow using airtop×8, set×2, manualTrigger.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Variables** `set` — options: "[object Object]", assignments: "[object Object]"
4. **Create session** `airtop` — configured for its default action.
5. **Load website** `airtop` — resource: **window**, url: `https://sell.peddle.com/instant-offer`
6. **Click VIN button** `airtop` — resource: **interaction**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of obtaining an instant offer for a used car on the Peddle website. It initiates when manually triggered, sets necessary variables like car details, creates a browsing session, loads the Peddle offer page, and interacts with the website to autofill using the VIN. The workflow waits briefly, processes the response, and decides on further actions based on the page content, ultimately aiming to retrieve a purchase offer.

### Demonstrate
A car dealership could use this workflow to quickly get purchase offers for multiple used cars, streamlining the process of determining resale values and making inventory decisions.

### Imitate
1. Import the workflow into n8n.
2. Configure the manual trigger node.
3. Set your car details in the Variables node.
4. Ensure Airtop API credentials are set up.
5. Test the workflow to ensure it interacts correctly with the Peddle website.

### Practice
Create a test scenario with different car details. Run the workflow and observe how it navigates the Peddle site and retrieves an offer. Adjust the car details and see how the workflow adapts.

### WIIFM
By mastering this workflow, you can automate car evaluation processes, saving time and increasing efficiency. This skill can be offered to dealerships or car resellers, expanding your service offerings and generating additional income as part of an AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtopApi.
  
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
  