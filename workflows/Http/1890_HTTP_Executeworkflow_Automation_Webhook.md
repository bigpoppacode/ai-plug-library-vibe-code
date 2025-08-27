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
Here we're [querying](https://api.qdrant.tech/api-reference/search/query-points) Qdrant, getting  **limitKNN** nearest neighbours to our image <*Query Qdrant node*>, pa…[truncated]"
9. **Sticky Note6** `stickyNote` — height: "80", content: "Here, we extract the name of the input image class decided by the Majority Vote
"
10. **Sticky Note10** `stickyNote` — color: "4", width: "540", height: "260"
11. **Image Test URL** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Embed image** `httpRequest` — method: **POST**, url: `https://api.voyageai.com/v1/multimodalembeddings`
13. **Qdrant variables + embedding + KNN neigbours** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow uses n8n to classify images based on their content. It takes an image URL, processes it through an AI model to get an embedding, and queries a database to find similar images. Using the K-Nearest Neighbors (KNN) algorithm, it identifies the class of the image based on the majority class of its nearest neighbors. If there's a tie, the workflow increases the number of neighbors considered until a decision is reached.

### Demonstrate
A real estate company could use this workflow to automatically classify satellite images of properties into categories like agricultural, residential, or commercial. This helps in organizing large datasets efficiently and can aid in property analysis and decision-making.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect to the Voyage AI and Qdrant services with your credentials.
3. Replace the dataset and collection names with your data.
4. Test the workflow with a sample image URL to see the classification result.
5. Adjust the number of neighbors or dataset as needed for accuracy.

### Practice
Create a small dataset of labeled images and upload it to a vector database. Run the workflow with a test image URL and observe the classification process. Modify the dataset or the KNN limit to see how it affects the results.

### WIIFM
Mastering this workflow allows you to offer automated image classification services, which can be valuable for industries like real estate, agriculture, and more. This capability can differentiate your AI automation business, attract new clients, and generate additional income streams.
  
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
  