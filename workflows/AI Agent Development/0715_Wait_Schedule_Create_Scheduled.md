# Wait Schedule Create Scheduled

## 🚀 What It Does
This workflow automates a process involving spotify, if, supabase.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Get playlist snapshot (spotify)** - This step performs a key action in the workflow.
3. **Step 2: Get playlist snapshot1 (spotify)** - This step performs a key action in the workflow.
4. **Step 3: If different snapshot (if)** - This step performs a key action in the workflow.
5. **Step 4: Get all musics (supabase)** - This step performs a key action in the workflow.
6. **Step 5: Update to_delete to true (supabase)** - This step performs a key action in the workflow.
7. **Step 6: Add music (supabase)** - This step performs a key action in the workflow.
8. **Step 7: Compare Datasets (compareDatasets)** - This step performs a key action in the workflow.
9. **Step 8: Spotify (spotify)** - This step performs a key action in the workflow.
10. **Step 9: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.
11. **Step 10: Get all musics not in youtube playlist (supabase)** - This step performs a key action in the workflow.
12. **Step 11: Every day at noon (scheduleTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Every day at noon + 1mn (scheduleTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Every hour (scheduleTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Wait 1 hour (wait)** - This step performs a key action in the workflow.
16. **Step 15: variables (set)** - This step performs a key action in the workflow.
17. **Step 16: Search video (youTube)** - This step performs a key action in the workflow.
18. **Step 17: Get video duration (youTube)** - This step performs a key action in the workflow.
19. **Step 18: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
20. **Step 19: If video duration ~= music duration (if)** - This step performs a key action in the workflow.
21. **Step 20: Add music to playlist (youTube)** - This step performs a key action in the workflow.
22. **Step 21: Add youtube id to row (supabase)** - This step performs a key action in the workflow.
23. **Step 22: Discord (discord)** - This step performs a key action in the workflow.
24. **Step 23: Discord1 (discord)** - This step performs a key action in the workflow.
25. **Step 24: Set youtube id to NOTFOUND if no matching (supabase)** - This step performs a key action in the workflow.
26. **Step 25: Aggregate (aggregate)** - This step performs a key action in the workflow.
27. **Step 26: If no result (if)** - This step performs a key action in the workflow.
28. **Step 27: data (set)** - This step performs a key action in the workflow.
29. **Step 28: variables2 (set)** - This step performs a key action in the workflow.
30. **Step 29: variables1 (set)** - This step performs a key action in the workflow.
31. **Step 30: Loop Over Items1 (splitInBatches)** - This step performs a key action in the workflow.
32. **Step 31: data1 (set)** - This step performs a key action in the workflow.
33. **Step 32: Get playlist items (youTube)** - This step performs a key action in the workflow.
34. **Step 33: Playlist items to be deleted (compareDatasets)** - This step performs a key action in the workflow.
35. **Step 34: Get all musics that should be in playlist (supabase)** - This step performs a key action in the workflow.
36. **Step 35: Remove Duplicates (removeDuplicates)** - This step performs a key action in the workflow.
37. **Step 36: Remove video from playlist (youTube)** - This step performs a key action in the workflow.
38. **Step 37: Check for deleted videos (compareDatasets)** - This step performs a key action in the workflow.
39. **Step 38: Set youtube_video_id to null (supabase)** - This step performs a key action in the workflow.
40. **Step 39: Get all musics to be deleted (supabase)** - This step performs a key action in the workflow.
41. **Step 40: Delete music (supabase)** - This step performs a key action in the workflow.
42. **Step 41: Every day at midnight (scheduleTrigger)** - This step performs a key action in the workflow.
43. **Step 42: variables3 (set)** - This step performs a key action in the workflow.
44. **Step 43: Reset NOTFOUND id to NULL (supabase)** - This step performs a key action in the workflow.
45. **Step 44: variables4 (set)** - This step performs a key action in the workflow.
46. **Step 45: Every month (scheduleTrigger)** - This step performs a key action in the workflow.
47. **Step 46: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
48. **Step 47: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
49. **Step 48: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
50. **Step 49: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
51. **Step 50: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
52. **Step 51: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
53. **Step 52: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
54. **Step 53: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
55. **Step 54: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get playlist snapshot" and "Sticky Note6" for IDs, table names, and URLs.
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
