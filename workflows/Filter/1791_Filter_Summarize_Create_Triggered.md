# Filter Summarize Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×11, set×3, noOp×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Form - Screaming frog internal_html.csv upload**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "360", height: "860"
3. **Sticky Note1** `stickyNote` — color: "7", width: "360", height: "860"
4. **Sticky Note2** `stickyNote` — color: "7", width: "360", height: "860"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **Sticky Note3** `stickyNote` — color: "7", width: "360", height: "860"
7. **Sticky Note4** `stickyNote` — color: "2", width: "740", height: "1160"
8. **Sticky Note5** `stickyNote` — color: "7", width: "360", height: "860"
9. **Sticky Note6** `stickyNote` — color: "7", width: "360", height: "860"
10. **Sticky Note7** `stickyNote` — color: "7", width: "360", height: "860"
11. **Sticky Note8** `stickyNote` — color: "7", width: "360", height: "860"
12. **Sticky Note9** `stickyNote` — color: "7", width: "360", height: "860"
13. **upload file anywhere** `noOp` — configured for its default action.
14. **Sticky Note10** `stickyNote` — color: "5", width: "700", height: "1380"
15. **Form - Screaming frog internal_html.csv upload** `formTrigger` — options: "[object Object]", formTitle: "llms.txt Generator - From Screaming Frog export", formFields: "[object Object]"
16. **Extract data from Screaming Frog file** `extractFromFile` — operation: **xls**
17. **Set useful fields** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Filter URLs** `filter` — options: "[object Object]", conditions: "[object Object]"
19. **Text Classifier** `textClassifier` — options: "[object Object]", inputText: "=url : {{ $json.url }}
title : {{ $json.title }}
description : {{ $json.description }}
words count : {{ $json.word_count }}", categories: "[object Object]"
20. **Set Field - llms.txt Row** `set` — options: "[object Object]", assignments: "[object Object]"
21. **No Operation, do nothing** `noOp` — configured for its default action.
22. **Summarize - Concatenate** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
23. **Set Fields - llms.txt Content** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Generate llms.txt file** `convertToFile` — operation: **toText**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation of an `llms.txt` file from a Screaming Frog website crawl export. It starts with a form submission where users upload a CSV file from Screaming Frog. The workflow extracts useful fields like URLs, titles, and descriptions, filters indexable pages, and optionally uses a text classifier to refine content selection. It then formats this data into a structured text file that can be used for AI training or content discovery.

### Demonstrate
A web developer might use this workflow to quickly generate a list of indexable pages from a website for SEO analysis. This helps in identifying which pages are accessible to search engines and ensures that critical content is not being missed.

### Imitate
1. Set up a Screaming Frog crawl and export `internal_html.csv`.
2. Import the workflow into n8n and configure the form fields.
3. Connect your Screaming Frog export to the form.
4. Test the workflow to ensure it processes and filters data correctly.
5. Download or store the generated `llms.txt` file.

### Practice
Create a Screaming Frog export of a small website. Run the workflow to generate an `llms.txt` file. Experiment with enabling the text classifier node to see how it affects the output. Adjust filters to refine the URLs included.

### WIIFM
Mastering this workflow enables you to offer SEO and AI content preparation services, enhancing your value proposition to clients. It streamlines content auditing, making you more efficient and potentially increasing your revenue with automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
  
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
  