# Splitout Code Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Form**.
2. **Form** `formTrigger` — path: `/create-wordpress-post`
3. **Sticky Note2** `stickyNote` — color: "4", width: "301.3874093724939", height: "371.765663140765"
4. **Sticky Note3** `stickyNote` — color: "7", width: "272.8190508599808", height: "80"
5. **Sticky Note5** `stickyNote` — color: "5", width: "282.3398199598652", height: "371.7656631407652"
6. **Sticky Note9** `stickyNote` — color: "7", width: "254.77269221373095", height: "80"
7. **Sticky Note10** `stickyNote` — color: "3", width: "557.7592769264069", height: "369.2595606183891"
8. **Sticky Note11** `stickyNote` — color: "7", width: "517.9195082760601", height: "80"
9. **Sticky Note12** `stickyNote` — color: "7", width: "287.370178643191", height: "80"
10. **Sticky Note** `stickyNote` — color: "6", width: "319.697690939268", height: "370.512611879577"
11. **Sticky Note1** `stickyNote` — color: "7", width: "239.97343293577688", height: "370.512611879577"
12. **Sticky Note13** `stickyNote` — color: "7", width: "199.7721486302032", height: "80"
13. **Sticky Note4** `stickyNote` — color: "7", width: "219.70753707029849", height: "370.512611879577"
14. **Sticky Note14** `stickyNote` — color: "7", width: "183.38125554060056", height: "80"
15. **Sticky Note6** `stickyNote` — color: "7", width: "281.2716777103785", height: "288.4116890365125"
16. **Sticky Note7** `stickyNote` — color: "7", width: "319.8306137081817", height: "275.3956890735875"
17. **Sticky Note8** `stickyNote` — color: "2", width: "226.71615243495023", height: "370.512611879577"
18. **Sticky Note15** `stickyNote` — color: "7", width: "179.37633247508526", height: "80"
19. **Sticky Note16** `stickyNote` — color: "2", width: "225.47038972308582", height: "370.512611879577"
20. **Sticky Note17** `stickyNote` — color: "7", width: "185.6051460344073", height: "80"
21. **Sticky Note18** `stickyNote` — color: "7", width: "287.370178643191", height: "80"
22. **Sticky Note19** `stickyNote` — color: "6", width: "333.40108076977657", height: "370.512611879577"
23. **Sticky Note21** `stickyNote` — color: "4", width: "420.4253447940705", height: "514.2177254645992"
24. **Sticky Note22** `stickyNote` — color: "7", width: "368.1523541074699", height: "80"
25. **Wikipedia** `toolWikipedia` — configured for its default action.
26. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Create post title and structure** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
28. **Check data consistency** `if` — options: "[object Object]", conditions: "[object Object]"
29. **Split out chapters** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.chapters"
30. **Respond: Error** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
 'formSubmittedText': 'There was a problem creating the article, please refresh the form and try again!'
}

"
31. **Create chapters text** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
32. **Merge chapters title and text** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
33. **Final article text** `code` — jsCode: "let article = "";

// Introduction
article += $('Create post title and structure').first().json.message.content.introduction;
article += "<br><br>";

for (const item of $input.all(…[truncated]"
34. **Post on Wordpress** `wordpress` — title: "={{ $('Create post title and structure').all()[0].json.message.content.title }}", additionalFields: "[object Object]"
35. **Generate featured image** `openAi` — resource: **image**, prompt: "=Generate a photographic image to be used as the cover image for the article titled: {{ $('Create post title and structure').all()[0].json.message.content.title }}. This is the pro…[truncated]"
36. **Upload media** `httpRequest` — method: **POST**, url: `https://wp-demo.mondo.surf/wp-json/wp/v2/media`
37. **Set image ID for the post** `httpRequest` — method: **POST**, url: `=https://wp-demo.mondo.surf/wp-json/wp/v2/posts/{{ $('Post on Wordpress').item.json.id }}`
38. **Respond: Success** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "={
 "formSubmittedText": "The article {{ $json.title.rendered }} was correctly created as a draft on WordPress!"
}"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the creation of a WordPress draft post using AI. It starts with a form where users input keywords, number of chapters, and word count. The workflow generates a structured article with titles, subtitles, chapters, and an image prompt using AI. It checks data consistency, splits chapters, merges text, and posts the draft on WordPress. A featured image is generated, uploaded, and linked to the post. The user receives feedback on success or error.

- **Demonstrate**: A content creator could use this workflow to quickly generate SEO-friendly articles based on trending keywords. This saves time and ensures consistent quality, allowing them to focus on strategy and engagement.

- **Imitate**: To apply this workflow, import it into n8n, configure your WordPress URL and credentials, and set up your OpenAI API key. Adjust the form fields to your needs and run the workflow to generate a draft post.

- **Practice**: Create a sample WordPress site and use the workflow to generate a post. Experiment with different keywords and chapter settings to see how the AI structures the content. Check the draft and featured image for coherence.

- **WIIFM**: Mastering this workflow enables you to offer automated content creation services, enhancing productivity and reducing costs. This can attract clients looking for efficient content strategies, expanding your AI automation business and generating income.

## 🔧 Setup Instructions
1. **Connect Credentials:** wordpressApi, openAiApi.
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
