# Limit Code Automate Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
3. **Sticky Note** `stickyNote` — color: "4", width: "851.2111300888805", height: "1333.3079943516484"
4. **Go on ip-api.com** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/url`
5. **Sticky Note1** `stickyNote` — color: "6", width: "784.9798841202522", height: "520.0741248156677"
6. **Sticky Note2** `stickyNote` — width: "751.8596006980003", height: "430.433007240277", content: "## Search

**Description** :
This part aims to search on Google for the subject and find the URL of the subject page based on the input URL."
7. **Sticky Note3** `stickyNote` — width: "827.9448220213314", height: "502.0185388323068", content: "## Selenium Session

**Description**:
Creation and configuration of the Selenium session."
8. **Sticky Note4** `stickyNote` — width: "3939.555135735299", height: "821.0847869745435", content: "## Scrape with cookies session

**Description**
This part goes to the extracted URL, injects the cookies passed into the webhook, takes a screenshot of the webpage, and analyzes th…[truncated]"
9. **Sticky Note5** `stickyNote` — width: "3336.952424000919", height: "821.0847869745435", content: "## Scrape without cookies session

**Description**
Same as the 'Scrape with cookies session' flow, but without the cookie injection"
10. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-mini`
11. **OpenAI Chat Model2** `lmChatOpenAi` — model: `gpt-4o-mini`
12. **Sticky Note6** `stickyNote` — color: "3", width: "813.0685668942513", height: "507.4126722815008"
13. **Webhook** `webhook` — method: **POST**, path: `/67d77918-2d5b-48c1-ae73-2004b32125f0`
14. **Get ScreenShot 2** `httpRequest` — url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/screenshot`
15. **Edit Fields (For testing prupose )** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Convert to File2** `convertToFile` — operation: **toBinary**
17. **Delete Session8** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
18. **If Target Url** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Google search Query ** `httpRequest` — url: `=https://www.google.com/search?q=site:{{ $json['Website Domaine'] }}+{{$json.Subject}}&oq=site&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIICAEQRRgnGDsyBggCEEUYOzIRCAMQRRg5GEMYy…[truncated]`
20. **Extract First Url Match** `html` — operation: **extractHtmlContent**
21. **Information Extractor** `informationExtractor` — text: "={{ $json['Url Find '][1] }}{{ $json['Url Find '][2] }}{{ $json['Url Find '][3] }}", options: "[object Object]", attributes: "[object Object]"
22. **Check if empty of NA** `if` — options: "[object Object]", conditions: "[object Object]"
23. **Error can't find url** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "Error": "Can't find url"
}"
24. **Create Selenium Session** `httpRequest` — method: **POST**, url: `http://selenium_chrome:4444/wd/hub/session`
25. **Resize browser window** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $json.value.sessionId }}/window/rect`
26. **Delete Session7** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
27. **Clean Webdriver ** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/execute/sync`
28. **Error2** `respondToWebhook` — options: "[object Object]"
29. **If2** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
30. **If** `if` — options: "[object Object]", conditions: "[object Object]"
31. **If1** `if` — options: "[object Object]", conditions: "[object Object]"
32. **If3** `if` — options: "[object Object]", conditions: "[object Object]"
33. **Delete Session5** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
34. **Go on url** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/url`
35. **Go on url1** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/url`
36. **Go on url2** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/url`
37. **Go on url3** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/url`
38. **Error** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "Error": "Cookies are note for the targeted url"
}"
39. **Get ScreenShot 1** `httpRequest` — url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/screenshot`
40. **Code** `code` — jsCode: "// Récupère les données du nœud Webhook (en remplaçant "Webhook" par le nom du nœud Webhook dans votre workflow)
const webhookData = $node["Webhook"].json;

// Fonction pour conver…[truncated]"
41. **Convert to File1** `convertToFile` — operation: **toBinary**
42. **Inject Cookie** `httpRequest` — method: **POST**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/cookie`
43. **OpenAI1** `openAi` — resource: **image**, operation: **analyze**
44. **Limit** `limit` — configured for its default action.
45. **If Block** `if` — options: "[object Object]", conditions: "[object Object]"
46. **Delete Session6** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
47. **Refresh browser** `httpRequest` — method: **POST**, url: `=http:///selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/refresh`
48. **Delete Session1** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
49. **Delete Session** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
50. **Error3** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "Error": "Page crash on the extracted url"
}"
51. **Get ScreenShot ** `httpRequest` — url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}/screenshot`
52. **Respond to Webhook3** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "Success ": "Request has been block by the targeted website"
}"
53. **Information Extractor1** `informationExtractor` — text: "={{ $('OpenAI1').item.json.content }}", options: "[object Object]", attributes: "[object Object]"
54. **Convert to File** `convertToFile` — operation: **toBinary**
55. **Success** `respondToWebhook` — options: "[object Object]"
56. **OpenAI** `openAi` — resource: **image**, operation: **analyze**
57. **Delete Session4** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
58. **If Block1** `if` — options: "[object Object]", conditions: "[object Object]"
59. **Error1** `respondToWebhook` — options: "[object Object]"
60. **Delete Session2** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
61. **Delete Session3** `httpRequest` — method: **DELETE**, url: `=http://selenium_chrome:4444/wd/hub/session/{{ $('Create Selenium Session').item.json.value.sessionId }}`
62. **Respond to Webhook2** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "Success ": "Request has been block by the targeted website"
}"
63. **Information Extractor2** `informationExtractor` — text: "={{ $('OpenAI').item.json.content }}", options: "[object Object]", attributes: "[object Object]"
64. **Success with cookie** `respondToWebhook` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This workflow is designed to automate the process of scraping data from websites using Selenium. It starts by receiving a webhook request with a target URL and optional cookies. The workflow then uses Selenium to navigate to the URL, injects cookies if provided, and takes a screenshot of the webpage. The image is analyzed using OpenAI to extract relevant information. If the URL is not found or blocked, appropriate error messages are returned.

**Demonstrate**: A business consultant might use this workflow to automate the process of gathering competitor pricing data from their websites. This would help in conducting market analysis efficiently without manual data collection.

**Imitate**: 
1. Import the workflow into your n8n instance.
2. Set up a webhook trigger to receive URLs and cookies.
3. Configure the Selenium session and OpenAI API credentials.
4. Run the workflow to test it with a sample URL.
5. Customize the OpenAI prompt to extract the specific data you need.

**Practice**: Create a test scenario where you use the workflow to scrape the number of stars from a GitHub repository page. Use a test webhook request to send the URL and observe how the workflow processes the data.

**WIIFM**: Mastering this workflow can significantly enhance your ability to offer web scraping services to clients. It opens up opportunities to automate data collection for market research, competitive analysis, or monitoring product prices, which can be monetized as a high-value service.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
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
  