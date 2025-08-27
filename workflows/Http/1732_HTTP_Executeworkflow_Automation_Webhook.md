# HTTP ExecuteWorkflow Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×8, httpRequest×4, set×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Sticky Note1** `stickyNote` — color: "6", width: "400", height: "740"
3. **Sticky Note4** `stickyNote` — width: "400", height: "380", content: "## Crop Anomaly Detection Tool
### This is the tool that can be used directly for anomalous crops detection. 
It takes as input (any) **image URL** and returns a **text message** t…[truncated]"
4. **Sticky Note3** `stickyNote` — color: "6", width: "360", height: "200"
5. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
6. **Sticky Note2** `stickyNote` — width: "180", height: "120", content: "Variables to access Qdrant's collection we uploaded & prepared for anomaly detection in 2 previous pipelines
"
7. **Sticky Note5** `stickyNote` — width: "560", height: "140", content: "These three nodes are needed just to figure out how many different classes (crops) we have in our Qdrant collection: **cropsNumber** (needed in *"Get similarity of medoids"* node. …[truncated]"
8. **Sticky Note6** `stickyNote` — height: "120", content: "Here, we're embedding the image passed to this workflow tool with the Voyage embedding model to compare the image to all crop images in the database."
9. **Sticky Note7** `stickyNote` — width: "400", height: "180", content: "Checking how similar the image is to all the centres of clusters (crops).
If it's more similar to the thresholds we set up and stored in centres in the previous workflow, the image…[truncated]"
10. **Sticky Note22** `stickyNote` — color: "4", width: "540", height: "300"
11. **Image URL hardcode** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Variables for medoids** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Total Points in Collection** `httpRequest` — method: **POST**, url: `={{ $json.qdrantCloudURL }}/collections/{{ $json.collectionName }}/points/count`
14. **Each Crop Counts** `httpRequest` — method: **POST**, url: `={{ $('Variables for medoids').first().json.qdrantCloudURL }}/collections/{{ $('Variables for medoids').first().json.collectionName }}/facet`
15. **Info About Crop Labeled Clusters** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Embed image** `httpRequest` — method: **POST**, url: `https://api.voyageai.com/v1/multimodalembeddings`
17. **Get similarity of medoids** `httpRequest` — method: **POST**, url: `={{ $('Variables for medoids').first().json.qdrantCloudURL }}/collections/{{ $('Variables for medoids').first().json.collectionName }}/points/query`
18. **Compare scores** `code` — language: "python", pythonCode: "points = _input.first()['json']['result']['points']
threshold_type = _('Variables for medoids').first()['json']['clusterThresholdCenterType']

max_score = -1
crop_with_max_score = …[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to detect anomalies in crop images. It starts when an image URL is provided, generates an embedding of the image using the Voyage API, and checks this embedding against a pre-loaded crop image dataset stored in Qdrant. By comparing the image's similarity scores to predefined thresholds, it determines if the image is similar to known crop types or if it's an anomaly.

### Demonstrate
A farmer could use this workflow to monitor crop health by uploading images of their fields. If an anomaly is detected, it could indicate a new disease or pest, prompting early intervention and potentially saving the crop.

### Imitate
1. Import the workflow into n8n.
2. Set up your Qdrant and Voyage API credentials.
3. Upload your crop dataset to Qdrant.
4. Adjust the threshold settings to suit your dataset.
5. Test the workflow with sample images to ensure accurate anomaly detection.

### Practice
Create a small dataset of crop images with some known anomalies. Run the workflow using these images to see how well it identifies anomalies. Adjust the thresholds and re-test to refine accuracy.

### WIIFM
Mastering this workflow allows you to offer crop monitoring services to farmers, helping them detect issues early. This not only adds a valuable service to your portfolio but also opens opportunities in the agricultural tech space, potentially increasing your income.
  
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
  