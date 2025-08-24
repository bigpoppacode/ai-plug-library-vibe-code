# Splitout Code Automation Triggered

## 🚀 What It Does
This workflow automates a process involving formTrigger, agent, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On form submission** node.
2. **Step 1: On form submission (formTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Retrieve and Parser Agent (agent)** - This step performs a key action in the workflow.
4. **Step 3: JSON it (set)** - This step performs a key action in the workflow.
5. **Step 4: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
6. **Step 5: Check if Attribute exists (airtable)** - This step performs a key action in the workflow.
7. **Step 6: Merge (merge)** - This step performs a key action in the workflow.
8. **Step 7: Map Attribute ID (set)** - This step performs a key action in the workflow.
9. **Step 8: Loop Over Attributes (splitInBatches)** - This step performs a key action in the workflow.
10. **Step 9: All Attributes (set)** - This step performs a key action in the workflow.
11. **Step 10: Wait for Attribute Creation (merge)** - This step performs a key action in the workflow.
12. **Step 11: Change each Attribute to the corresponding RecID (code)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Split Out Tools (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Split Out each Attribute String (splitOut)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Generate Unique Hash for Name (crypto)** - This step performs a key action in the workflow.
19. **Step 18: Create if not Exist (airtable)** - This step performs a key action in the workflow.
20. **Step 19: Merge Old Data + RecID (merge)** - This step performs a key action in the workflow.
21. **Step 20: Only what we need (set)** - This step performs a key action in the workflow.
22. **Step 21: Determine Attributes we should save (code)** - This step performs a key action in the workflow.
23. **Step 22: Split Out similar (splitOut)** - This step performs a key action in the workflow.
24. **Step 23: Merge1 (merge)** - This step performs a key action in the workflow.
25. **Step 24: Generate Unique Hash for Similar (crypto)** - This step performs a key action in the workflow.
26. **Step 25: It Should exists (airtable)** - This step performs a key action in the workflow.
27. **Step 26: All Similar (set)** - This step performs a key action in the workflow.
28. **Step 27: Merge2 (merge)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Change each Smiliar to the corresponding RecID (code)** - This step performs a key action in the workflow.
31. **Step 30: Determine Similar we should save (code)** - This step performs a key action in the workflow.
32. **Step 31: Save all this juicy data (airtable)** - This step performs a key action in the workflow.
33. **Step 32: Map Agent Input (set)** - This step performs a key action in the workflow.
34. **Step 33: gpt-4o (lmChatOpenAi)** - This step performs a key action in the workflow.
35. **Step 34: Note3 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Table: Tools (noOp)** - This step performs a key action in the workflow.
37. **Step 36: Table: Attributes (noOp)** - This step performs a key action in the workflow.
38. **Step 37: Note (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: make it a readable list (html)** - This step performs a key action in the workflow.
41. **Step 40: Get Schema (airtable)** - This step performs a key action in the workflow.
42. **Step 41: Note1 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of extracting information from a logo sheet image submitted via a form. It analyzes the image using an AI agent, structures the output, and saves the extracted data into an Airtable database, thereby streamlining data collection and organization.

### Demonstrate
A business owner could use this workflow to automate gathering and categorizing logos and tools from client submissions, saving time and ensuring structured data entry into their database for marketing or product analysis.

### Imitate
1. Set up a form trigger in n8n for logo sheet submissions.
2. Use an AI agent to analyze the image and extract tool names and attributes.
3. Structure and save the output to Airtable.
4. Map attributes and handle similar tools for comprehensive data entry.
5. Test the workflow by submitting a sample logo sheet.

### Practice
Try creating a simplified version of this workflow by manually entering data instead of using an image. Submit the data through a form and see how it gets processed and saved in Airtable. Adjust the AI prompts to change the output format.

### WIIFM
Mastering this workflow can help you automate data collection processes, attract clients needing data organization, and generate income by offering automation services that save businesses time and improve efficiency.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On form submission" and "Note4" for IDs, table names, and URLs.
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
