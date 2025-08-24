# Splitout Code Create Triggered

## 🚀 What It Does
This workflow automates a process involving googleDrive, set, merge.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **receive_topic** node.
2. **Step 1: create_folder (googleDrive)** - This step performs a key action in the workflow.
3. **Step 2: input_brief (set)** - This step performs a key action in the workflow.
4. **Step 3: new_lines (set)** - This step performs a key action in the workflow.
5. **Step 4: input_sections (set)** - This step performs a key action in the workflow.
6. **Step 5: section_text (set)** - This step performs a key action in the workflow.
7. **Step 6: Merge (merge)** - This step performs a key action in the workflow.
8. **Step 7: Sort (sort)** - This step performs a key action in the workflow.
9. **Step 8: Aggregate (aggregate)** - This step performs a key action in the workflow.
10. **Step 9: final_article (set)** - This step performs a key action in the workflow.
11. **Step 10: set_introduction (set)** - This step performs a key action in the workflow.
12. **Step 11: Merge1 (merge)** - This step performs a key action in the workflow.
13. **Step 12: receive_topic (formTrigger)** - This step performs a key action in the workflow.
14. **Step 13: add_row (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: topic_variables (set)** - This step performs a key action in the workflow.
16. **Step 15: markdown_to_file (convertToFile)** - This step performs a key action in the workflow.
17. **Step 16: split_out (splitOut)** - This step performs a key action in the workflow.
18. **Step 17: section_starts_with_# (if)** - This step performs a key action in the workflow.
19. **Step 18: 25_percent_chance (if)** - This step performs a key action in the workflow.
20. **Step 19: set_section_content (set)** - This step performs a key action in the workflow.
21. **Step 20: add_2_new_lines (code)** - This step performs a key action in the workflow.
22. **Step 21: final_article_file (convertToFile)** - This step performs a key action in the workflow.
23. **Step 22: upload_fiinalArticle (googleDrive)** - This step performs a key action in the workflow.
24. **Step 23: update_article_link (googleSheets)** - This step performs a key action in the workflow.
25. **Step 24: upload_outline_file (googleDrive)** - This step performs a key action in the workflow.
26. **Step 25: section_paragraphs (openAi)** - This step performs a key action in the workflow.
27. **Step 26: change_section_format (openAi)** - This step performs a key action in the workflow.
28. **Step 27: create_outline (openAi)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of content by collecting user input, generating an article outline using AI, refining sections, and saving the final article to Google Drive and Google Sheets. It streamlines the content creation process, making it faster and more organized.

### Demonstrate
A business owner could use this workflow to automate blog post creation. Instead of manually drafting posts, they can collect input through a form, generate structured content with AI, and save everything in organized folders, saving time and improving consistency.

### Imitate
1. Set up a form in n8n to collect content details (title, keywords).
2. Use the "create_folder" node to organize files in Google Drive.
3. Implement AI nodes to generate outlines and content.
4. Use Google Sheets to log article details.
5. Test the workflow with sample input and refine as needed.

### Practice
Try modifying the workflow by adding a new form field for "target audience." Update the AI prompts to tailor the content based on this input. Execute the workflow to see how it adapts the generated article.

### WIIFM
Mastering this workflow allows you to offer valuable content generation services, attracting clients looking to streamline their marketing efforts. This skill can lead to income generation through freelance work or creating automated solutions for businesses.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "create_folder" and "Sticky Note11" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
