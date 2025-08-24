# Wait Code Create Webhook

## 🚀 What It Does
This workflow automates a process involving set, code, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking Test workflow** node.
2. **Step 1: output1 (set)** - This step performs a key action in the workflow.
3. **Step 2: output2 (set)** - This step performs a key action in the workflow.
4. **Step 3: Get Prompt (code)** - This step performs a key action in the workflow.
5. **Step 4: Basic Params (set)** - This step performs a key action in the workflow.
6. **Step 5: Get Task ID of the First Image (set)** - This step performs a key action in the workflow.
7. **Step 6: Midjourney Generator of the First Image (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Wait for the First Image Generation (wait)** - This step performs a key action in the workflow.
9. **Step 8: Verify the first image generation status (if)** - This step performs a key action in the workflow.
10. **Step 9: Get the First Image URL (set)** - This step performs a key action in the workflow.
11. **Step 10: Midjourney Generator of the Second Image (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Midjourney Generator of the Third Image (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Get the First Image Generation Status (switch)** - This step performs a key action in the workflow.
14. **Step 13: Get the Second Image Generation Status (switch)** - This step performs a key action in the workflow.
15. **Step 14: Get the Third Image Generation Status (switch)** - This step performs a key action in the workflow.
16. **Step 15: Get the Second Image URL (set)** - This step performs a key action in the workflow.
17. **Step 16: Get the Third Image URL (set)** - This step performs a key action in the workflow.
18. **Step 17: Wait for the Second Image Generation (wait)** - This step performs a key action in the workflow.
19. **Step 18: Get Task of the First Image (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Get Task of the Second Image (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Verify the second image generation status (if)** - This step performs a key action in the workflow.
22. **Step 21: Verify the third image generation status (if)** - This step performs a key action in the workflow.
23. **Step 22: Get Task of the Third Image (httpRequest)** - This step performs a key action in the workflow.
24. **Step 23: Wait for the Third Image Generation (wait)** - This step performs a key action in the workflow.
25. **Step 24: Get three Image URLs (set)** - This step performs a key action in the workflow.
26. **Step 25: Generate the First Video (httpRequest)** - This step performs a key action in the workflow.
27. **Step 26: Generate the Second Video (httpRequest)** - This step performs a key action in the workflow.
28. **Step 27: Generate the Third Video (httpRequest)** - This step performs a key action in the workflow.
29. **Step 28: Final Video Combination (httpRequest)** - This step performs a key action in the workflow.
30. **Step 29: Get the Third Video URL (set)** - This step performs a key action in the workflow.
31. **Step 30: Get Video Task IDs (set)** - This step performs a key action in the workflow.
32. **Step 31: Get the First Video Task (httpRequest)** - This step performs a key action in the workflow.
33. **Step 32: Verify the First Video Generation (if)** - This step performs a key action in the workflow.
34. **Step 33: Verify the Second Video Generation (if)** - This step performs a key action in the workflow.
35. **Step 34: Verify the Third Video Generation (if)** - This step performs a key action in the workflow.
36. **Step 35: Wait for Video Generation for at Least 4 min (wait)** - This step performs a key action in the workflow.
37. **Step 36: Wait for the First Video Generation (wait)** - This step performs a key action in the workflow.
38. **Step 37: Wait for the Second Video Generation (wait)** - This step performs a key action in the workflow.
39. **Step 38: Wait for the Third Video Generation (wait)** - This step performs a key action in the workflow.
40. **Step 39: Get the First Video Generation (switch)** - This step performs a key action in the workflow.
41. **Step 40: Get the Second Video Generation (switch)** - This step performs a key action in the workflow.
42. **Step 41: Get the Third Video Generation (switch)** - This step performs a key action in the workflow.
43. **Step 42: Get the Second Video Task (httpRequest)** - This step performs a key action in the workflow.
44. **Step 43: Get the Third Video Task (httpRequest)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: When clicking Test workflow (manualTrigger)** - This step performs a key action in the workflow.
47. **Step 46: GPT-4o-mini Generate Image Scenario Prompt (httpRequest)** - This step performs a key action in the workflow.
48. **Step 47: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
49. **Step 48: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
50. **Step 49: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
51. **Step 50: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
52. **Step 51: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of animated stories by generating images and videos using AI tools like Midjourney and Creatomate. It processes prompts to create visuals and combines them into a final video, streamlining content creation.

### Demonstrate
A business owner could use this workflow to create engaging social media content automatically. For instance, a children's book publisher could generate illustrations and a promotional video for a new release, saving time and enhancing marketing efforts.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Manual Trigger node to start the process.
3. Integrate an HTTP Request node to fetch prompts for image generation.
4. Use multiple Midjourney nodes to generate images based on those prompts.
5. Combine images into a video using Creatomate.
6. Test the workflow to ensure everything functions correctly.

### Practice
Try modifying the workflow to generate images based on your own prompts. Change the character and situational keywords in the Basic Params node and observe how the output changes after running the workflow.

### WIIFM
Mastering this workflow allows you to offer unique content creation services, attracting clients in industries like marketing and publishing. This skill can help you create valuable automation solutions, potentially generating significant income through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "output1" and "Sticky Note5" for IDs, table names, and URLs.
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
