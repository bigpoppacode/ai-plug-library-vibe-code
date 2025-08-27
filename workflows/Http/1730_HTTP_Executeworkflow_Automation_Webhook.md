# HTTP ExecuteWorkflow Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×8, set×5, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Sticky Note** `stickyNote` — color: "6", width: "320", height: "540"
3. **Sticky Note1** `stickyNote` — color: "6", content: "I tested this KNN classifier on a whole `test` set of a dataset (it's not a part of the collection, only `validation` + `train` parts). Accuracy of classification on `test` is **93…[truncated]"
4. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
5. **Sticky Note2** `stickyNote` — width: "460", height: "380", content: "## KNN classification workflow-tool
### This n8n template takes an image URL (as anomaly detection tool does), and as output, it returns a class of the object on the image (out of …[truncated]"
6. **Sticky Note3** `stickyNote` — height: "200", content: "Variables define another Qdrant's collection with landscapes (uploaded similarly as the crops collection, don't forget to switch it with your data) + amount of neighbours **limitKN…[truncated]"
7. **Sticky Note4** `stickyNote` — height: "80", content: "Similarly to anomaly detection tool, we're embedding input image with the Voyage model"
8. **Sticky Note5** `stickyNote` — width: "740", height: "200", content: "## Tie loop
Here we're [querying](https://api.qdrant.tech/api-reference/search/query-points) Qdrant, getting **limitKNN** nearest neighbours to our image <*Query Qdrant node*>, par…[truncated]"
9. **Sticky Note6** `stickyNote` — height: "80", content: "Here, we extract the name of the input image class decided by the Majority Vote
"
10. **Sticky Note10** `stickyNote` — color: "4", width: "540", height: "260"
11. **Image Test URL** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Embed image** `httpRequest` — method: **POST**, url: `https://api.voyageai.com/v1/multimodalembeddings`
13. **Qdrant variables + embedding + KNN neigbours** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to classify images of land types using a K-Nearest Neighbors (KNN) approach. It starts by receiving an image URL, which is then processed to generate an embedding through the Voyage.ai API. This embedding is used to query a Qdrant database to find similar images. The most common class among these similar images is determined using majority voting. If there's a tie, the workflow increases the number of neighbors considered until a decision is reached or a maximum limit is hit.

### Demonstrate
A real-world example would be a real estate company using this workflow to automatically categorize satellite images of land into types like 'forest', 'beach', or 'urban', helping them quickly assess land use for potential developments.

### Imitate
1. Import the workflow into n8n.
2. Set up connections to the Voyage.ai and Qdrant APIs.
3. Upload your dataset to Qdrant.
4. Configure the workflow trigger to receive image URLs.
5. Run the workflow to classify images and verify results.

### Practice
Create a small dataset of labeled images, upload it to Qdrant, and test the workflow by classifying new images. Adjust the number of neighbors and observe the changes in classification accuracy.

### WIIFM
Mastering this workflow can enable you to offer automated image classification services, valuable for industries like real estate, agriculture, and environmental monitoring. This can enhance your automation business, attract new clients, and increase revenue through innovative AI solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, qdrantApi.
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
  