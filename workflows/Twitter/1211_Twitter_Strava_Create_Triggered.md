# Twitter Strava Create Triggered
## 🚀 What It Does
Automates a flow using stravaTrigger, twitter.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Twitter**.
2. **Twitter** `twitter` — text: "=I ran {{$node["Strava Trigger"].json["object_data"]["distance"]}} meters and completed my {{$node["Strava Trigger"].json["object_data"]["name"]}}!", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automatically posts a tweet on Twitter whenever a new activity is created in Strava. It retrieves the distance and name of the activity from Strava and formats a tweet like "I ran X meters and completed my Y!" This ensures your Strava achievements are shared with your Twitter followers without any manual intervention.

### Demonstrate
A fitness influencer could use this workflow to automatically update their Twitter followers about their latest runs or cycling activities on Strava, keeping their audience engaged and informed about their progress without needing to post manually.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your Strava and Twitter accounts in n8n.
3. Set the workflow to active.
4. Test by creating a new activity in Strava and check Twitter for the automated post.

### Practice
Create a test activity in Strava with different distances and names. Run the workflow to ensure it tweets correctly formatted messages. Experiment with customizing the tweet text to add hashtags or additional information.

### WIIFM
Mastering this workflow allows you to automate social media updates, keeping your followers engaged without extra effort. This skill can be offered as a service to clients looking to enhance their social media presence, creating new revenue streams in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** stravaOAuth2Api, twitterOAuth1Api.

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
