# Manual Extractfromfile Send Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, set×2, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "7", width: "168.75", height: "281.25"
4. **Sticky Note1** `stickyNote` — color: "7", width: "168.75", height: "281.25"
5. **Sticky Note2** `stickyNote` — color: "7", width: "168.75", height: "281.25"
6. **Sticky Note3** `stickyNote` — height: "205", content: "## Try me out
1. Make sure you add your Gmail credential in the last node
2. Update the sender and recipient in the 'Message settings' node
3. Click 'test workflow'"
7. **Message settings** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Get image** `httpRequest` — url: `https://thistleandrose.co.uk/img/userimages/Page/0/bgmainfront.jpg`
9. **Convert image to base64** `extractFromFile` — operation: **binaryToPropery**
10. **Compose message** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Send message** `httpRequest` — method: **POST**, url: `https://www.googleapis.com/gmail/v1/users/me/messages/send`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates sending an email with an embedded image. It starts with a manual trigger, retrieves an image from a URL, converts it to a base64 format, and then composes an email using this image. Finally, it sends the email via Gmail using HTTP requests. This process ensures a seamless way to send emails with embedded images, which can be useful for marketing or personal communications.

### Demonstrate
A marketing team could use this workflow to send personalized emails with embedded images to their clients, enhancing engagement and providing visually appealing content without attachments.

### Imitate
1. Import the workflow into n8n.
2. Add your Gmail credentials to the Send message node.
3. Update sender and recipient details in the Message settings node.
4. Test the workflow to ensure it sends emails correctly with the embedded image.

### Practice
Create a new n8n workflow that sends an email with a different image. Use a different image URL and update the email content. Test the workflow to see if the image is embedded correctly in the email.

### WIIFM
Mastering this workflow allows you to offer email marketing services that include sending visually rich, personalized emails. This can improve customer engagement and open up new income streams by offering unique, automated email solutions to businesses.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2.
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
  