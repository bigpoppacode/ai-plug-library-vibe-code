# Code Filter Import Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×12, httpRequest×5, set×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "280", height: "200", content: "In the next workflow, we're going to use Qdrant to get the number of images belonging to each crop type defined by `crop_name` (for example, *"cucumber"*). 
To get this information…[truncated]"
4. **Sticky Note1** `stickyNote` — height: "300", content: "Setting up variables
1) Cloud URL - to connect to Qdrant Cloud (your personal cluster URL)
2) Collection name in Qdrant
3) Size of Voyage embeddings (needed for collection creation…[truncated]"
5. **Sticky Note2** `stickyNote` — content: "In Qdrant, you can create a collection once; if you try to create it two times with the same name, you'll get an error, so I am adding here a check if a collection with this name e…[truncated]"
6. **Sticky Note3** `stickyNote` — height: "280", content: "If a collection with the name set up in variables doesn't exist yet, I create an empty one; 

Collection will contain [named vectors](https://qdrant.tech/documentation/concepts/vec…[truncated]"
7. **Sticky Note4** `stickyNote` — height: "400", content: "Now it's time to embed & upload to Qdrant our image datasets;
Both of them, [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) and [lands…[truncated]"
8. **Sticky Note5** `stickyNote` — height: "240", content: "Google Storage node returns **mediaLink**, which can be used directly for downloading images; however, we just need a public image URL so that Voyage API can process it; so here we…[truncated]"
9. **Sticky Note6** `stickyNote` — height: "180", content: "I regroup images into batches of `batchSize` size and, to make batch upload to Qdrant possible, generate UUIDs to use them as batch [point IDs](https://qdrant.tech/documentation/co…[truncated]"
10. **Sticky Note7** `stickyNote` — content: "Since we build anomaly detection based on the crops dataset, to test it properly, I didn't upload to Qdrant pictures of tomatoes at all; I filter them out here"
11. **Sticky Note9** `stickyNote` — height: "200", content: "Since Voyage API requires a [specific json structure](https://docs.voyageai.com/reference/multimodal-embeddings-api) for batch embeddings, as does [Qdrant's API for uploading point…[truncated]"
12. **Sticky Note11** `stickyNote` — width: "180", height: "80", content: "Embedding images with Voyage model (mind `input_type`)"
13. **Sticky Note8** `stickyNote` — width: "440", height: "460", content: "## Batch Uploading Dataset to Qdrant 
### This template imports dataset images from storage, creates embeddings for them in batches, and uploads them to Qdrant in batches. In this …[truncated]"
14. **Sticky Note10** `stickyNote` — color: "4", width: "540", height: "420"
15. **Qdrant cluster variables** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Check Qdrant Collection Existence** `httpRequest` — url: `={{ $json.qdrantCloudURL }}/collections/{{ $json.collectionName }}/exists`
17. **If collection exists** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Create Qdrant Collection** `httpRequest` — method: **PUT**, url: `={{ $('Qdrant cluster variables').first().json.qdrantCloudURL }}/collections/{{ $('Qdrant cluster variables').first().json.collectionName }}`
19. **Payload index on crop_name** `httpRequest` — method: **PUT**, url: `={{ $('Qdrant cluster variables').first().json.qdrantCloudURL }}/collections/{{ $('Qdrant cluster variables').first().json.collectionName }}/index`
20. **Google Cloud Storage** `googleCloudStorage` — resource: **object**
21. **Get fields for Qdrant** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Filtering out tomato to test anomalies** `filter` — options: "[object Object]", conditions: "[object Object]"
23. **Split in batches, generate uuids for Qdrant points** `code` — language: "python", pythonCode: "import uuid

crops = [item.json for item in _input.all()]
batch_size = int(_('Qdrant cluster variables').first()['json']['batchSize'])

def split_into_batches_add_uuids(array, batc…[truncated]"
24. **Batches in the API's format** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Embed crop image** `httpRequest` — method: **POST**, url: `https://api.voyageai.com/v1/multimodalembeddings`
26. **Batch Upload to Qdrant** `httpRequest` — method: **PUT**, url: `={{ $('Qdrant cluster variables').first().json.qdrantCloudURL }}/collections/{{ $('Qdrant cluster variables').first().json.collectionName }}/points`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow uploads images to a Qdrant database for anomaly detection and classification. It checks if a collection exists in Qdrant, creates it if not, then retrieves images from Google Cloud Storage. The workflow filters out certain images, groups them into batches, generates UUIDs, and creates embeddings using the Voyage API. Finally, it uploads these embeddings to Qdrant, allowing for efficient image classification and anomaly detection tasks.

**Demonstrate**: A business owner could use this workflow to automate the process of categorizing agricultural images for precision farming, enabling them to quickly identify crop types and detect anomalies, such as diseased plants.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect your Google Cloud Storage and Qdrant accounts.
3. Set the Qdrant collection variables and batch size.
4. Run the workflow to test and ensure images are correctly uploaded and indexed.

**Practice**: Create a small dataset of images in Google Cloud Storage, set up a Qdrant collection, and run the workflow. Observe how images are processed, filtered, and uploaded. Adjust the batch size or crop filtering to see different results.

**WIIFM**: Mastering this workflow enables you to offer AI-based image analysis services, helping clients improve operational efficiency in sectors like agriculture. It can open up new revenue streams by providing value-added services such as anomaly detection and automated image categorization.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleCloudStorageOAuth2Api, httpHeaderAuth, qdrantApi.
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
  