# Wait Splitout Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — width: "476.34074202271484", height: "586.0597334122469", content: "## Try It Out!

### This n8n template takes a video and extracts frames from it which are used with a multimodal LLM to generate a script. The script is then passed to the same mul…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "459.41860465116287", height: "463.313953488372"
6. **Sticky Note2** `stickyNote` — color: "7", width: "605.2674418604653", height: "522.6860465116279"
7. **Sticky Note3** `stickyNote` — color: "3", width: "418.11627906976724", height: "132.89534883720933"
8. **Sticky Note4** `stickyNote` — color: "7", width: "1264.8139534883715", height: "774.3720930232558"
9. **Sticky Note5** `stickyNote` — color: "7", width: "769.1860465116274", height: "487.83720930232533"
10. **Sticky Note6** `stickyNote` — color: "7", width: "458.1279069767452", height: "296.8139534883723"
11. **Download Video** `httpRequest` — url: `=https://cdn.pixabay.com/video/2016/05/12/3175-166339863_small.mp4`
12. **Capture Frames** `code` — mode: "runOnceForEachItem", language: "python", pythonCode: "import cv2
import numpy as np
import base64

def extract_evenly_distributed_frames_from_base64(base64_string, max_frames=90):
 # Decode the Base64 string into bytes
 video_bytes = …[truncated]"
13. **Split Out Frames** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the process of downloading a video, extracting frames from it, and using a multimodal language model to generate a narration script. The script is then converted into audio using text-to-speech (TTS) capabilities. Finally, the audio file is uploaded to Google Drive. This process allows for automated video narration creation.

**Demonstrate**: A content creator might use this workflow to quickly generate narrated videos for social media. By automating frame extraction and script generation, they can produce engaging content faster, saving time on manual editing and scriptwriting.

**Imitate**: 
1. Import the workflow into your n8n instance.
2. Connect your OpenAI and Google Drive accounts.
3. Configure the video URL in the HTTP Request node.
4. Test the workflow to ensure frames are extracted and the script is generated correctly.
5. Verify the audio file uploads to Google Drive.

**Practice**: Create a test video and use the workflow to generate a narration script and audio file. Experiment with different video content to see how the script and narration style adapt. Adjust settings like frame capture rate to optimize results.

**WIIFM**: Mastering this workflow can help you offer automated video content creation services, enhancing your portfolio and attracting clients who need efficient video narration solutions. This skill can increase your service offerings and revenue in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api.
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
