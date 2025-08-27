# Splitout Code Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **Sticky Note2** `stickyNote` — color: "4", width: "301.3874093724939", height: "371.765663140765"
3. **Sticky Note3** `stickyNote` — color: "7", width: "272.8190508599808", height: "80"
4. **Sticky Note5** `stickyNote` — color: "5", width: "302", height: "392"
5. **Sticky Note9** `stickyNote` — color: "7", width: "254.77269221373095", height: "80"
6. **Sticky Note10** `stickyNote` — color: "3", width: "678", height: "389"
7. **Sticky Note11** `stickyNote` — color: "7", width: "517.9195082760601", height: "80"
8. **Sticky Note12** `stickyNote` — color: "7", width: "287.370178643191", height: "80"
9. **Sticky Note** `stickyNote` — color: "6", width: "360", height: "371"
10. **Sticky Note1** `stickyNote` — color: "7", width: "239.97343293577688", height: "370.512611879577"
11. **Sticky Note13** `stickyNote` — color: "7", width: "199.7721486302032", height: "80"
12. **Sticky Note4** `stickyNote` — color: "7", width: "220", height: "391"
13. **Sticky Note14** `stickyNote` — color: "7", width: "183.38125554060056", height: "80"
14. **Sticky Note6** `stickyNote` — color: "7", width: "281.2716777103785", height: "288.4116890365125"
15. **Sticky Note7** `stickyNote` — color: "7", width: "340", height: "275"
16. **Sticky Note8** `stickyNote` — color: "2", width: "226.71615243495023", height: "370.512611879577"
17. **Sticky Note15** `stickyNote` — color: "7", width: "179.37633247508526", height: "80"
18. **Sticky Note16** `stickyNote` — color: "2", width: "225.47038972308582", height: "370.512611879577"
19. **Sticky Note17** `stickyNote` — color: "7", width: "185.6051460344073", height: "80"
20. **Sticky Note18** `stickyNote` — color: "7", width: "287.370178643191", height: "80"
21. **Sticky Note19** `stickyNote` — color: "6", width: "333.40108076977657", height: "370.512611879577"
22. **Sticky Note21** `stickyNote` — color: "4", width: "420.4253447940705", height: "514.2177254645992"
23. **Sticky Note22** `stickyNote` — color: "7", width: "368.1523541074699", height: "80"
24. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Create a WordPress post with AI", formFields: "[object Object]"
25. **Wikipedia** `toolWikipedia` — configured for its default action.
26. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Create post title and structure** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
28. **Check data consistency** `if` — options: "[object Object]", conditions: "[object Object]"
29. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.chapters"
30. **Form** `form` — operation: **completion**
31. **OpenAI** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
32. **Merge chapters title and text** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
33. **Final article text** `code` — jsCode: "let article = "";

// Introduction
article += $('Create post title and structure').first().json.message.content.introduction;
article += "<br><br>";

for (const item of $input.all(…[truncated]"
34. **Post on Wordpress** `wordpress` — title: "={{ $('Create post title and structure').first().json.message.content.title }}", additionalFields: "[object Object]"
35. **Generate featured image** `openAi` — resource: **image**, prompt: "=Generate a photographic image to be used as the cover image for the article titled: {{ $('Create post title and structure').first().json.message.content.title }}. This is the prom…[truncated]"
36. **Upload media** `httpRequest` — method: **POST**, url: `https://wp-demo.mondo.surf/wp-json/wp/v2/media`
37. **Set image ID for the post** `httpRequest` — method: **POST**, url: `=https://wp-demo.mondo.surf/wp-json/wp/v2/posts/{{ $('Post on Wordpress').first().json.id }}`
38. **Form1** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates creating a WordPress post using AI. It starts with a form submission by a user, generating article content with OpenAI based on keywords. The workflow verifies the generated data, structures the article, creates a featured image using Dall-E, and posts both as a draft on WordPress. If any data is missing, the user is prompted to retry.

**Demonstrate:**  
A content creator can use this workflow to streamline blog post creation, saving time on drafting and image generation, while ensuring consistent, SEO-friendly content.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your WordPress and OpenAI accounts.
3. Customize the form fields and logic as needed.
4. Set up a trigger to start the workflow.
5. Test the workflow with sample data to ensure it functions correctly.

**Practice:**  
Create a test WordPress site and run the workflow with different keywords. Observe how the content and images are generated and posted. Adjust the AI prompts and settings to better fit your content style.

**WIIFM (What's In It For Me):**  
Mastering this workflow allows you to offer automated content creation services, reducing the time spent on manual drafting. This can enhance your offerings, attract new clients, and generate additional income in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, wordpressApi.
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
