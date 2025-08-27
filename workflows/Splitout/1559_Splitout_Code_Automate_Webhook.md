# Splitout Code Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "3", width: "360", height: "480"
4. **Sticky Note1** `stickyNote` — color: "5", width: "202", height: "99"
5. **Sticky Note3** `stickyNote` — width: "300", content: "### PDF Image Extraction and Analysis  with GPT-4o
This n8n workflow automates the process of extracting images from PDF files and analyzing them with AI, then compiling the result…[truncated]"
6. **Get pdf file** `googleDrive` — operation: **download**
7. **Extract pdf image** `httpRequest` — method: **POST**, url: `https://v2.convertapi.com/convert/pdf/to/extract-images`
8. **Get image data** `splitOut` — options: "[object Object]", fieldToSplitOut: "Files"
9. **Get all img_url** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Analyze image** `openAi` — resource: **image**, operation: **analyze**
11. **Get image analyze content** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Integrate all content to a a content** `code` — jsCode: "const mergedContent = items.map(item => item.json.content).join('\n');

return [
  {
    json: {
      content: mergedContent
    }
  }
];
"
13. **Output content to a .txt file** `convertToFile` — operation: **toText**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the extraction and analysis of images from PDF files. It downloads a PDF from Google Drive, extracts images using ConvertAPI, analyzes them with OpenAI GPT-4o, and compiles the results into a text document. This process streamlines image data extraction and analysis, making it easier and faster to derive insights from visual content in PDFs.

- **Demonstrate:** A business owner could use this workflow to analyze marketing materials in PDF format, extracting images for review and analysis to improve future campaigns.

- **Imitate:** Import the workflow into n8n. Connect your Google Drive, ConvertAPI, and OpenAI accounts. Upload a PDF with images to Google Drive. Customize the workflow as needed. Test it to ensure images are extracted and analyzed correctly.

- **Practice:** Create a PDF with a few images and upload it to Google Drive. Run the workflow and observe how it extracts and analyzes images, then outputs the results into a text file. Modify some images to see how the analysis results change.

- **WIIFM:** Mastering this workflow enables you to offer automated image analysis services, saving businesses time and resources. This expertise can help you attract clients seeking efficient ways to derive insights from visual data, enhancing your service offerings and income potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi, httpHeaderAuth.
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
