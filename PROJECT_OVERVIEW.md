# The AI Plug Library: Where consultants get wired into scalable automations.

Welcome to the comprehensive guide for the n8n Automation Collection. This project is not a single application, but a powerful library of over 2500 pre-built automation workflows designed to solve real-world business problems.

As an entrepreneur, understanding the patterns in this repository is key to leveraging automation to save time, reduce costs, and scale your operations. This guide will break down the fundamental concepts by analyzing four key workflows, showing you how they are constructed and what business problems they solve.

## Core Technologies & Concepts

*   **Platform**: **n8n** - A low-code/no-code workflow automation tool. It allows you to connect various applications and services to automate tasks.
*   **Workflow Structure**: **JSON** - Each workflow is a JSON file that defines a series of "nodes" and the "connections" between them. Think of it as a blueprint for your automation.
*   **Logic**: **JavaScript Expressions** - While n8n is low-code, you can use simple JavaScript expressions within nodes to perform powerful data manipulation, transforming data from one step to the next.
*   **Architecture**: **Event-Driven Workflows** - Each automation starts with a **Trigger Node** (e.g., a schedule, an incoming email, a webhook call) and then executes a series of steps in response to that trigger.

---

## 1. AI Use Case: Customer Feedback Sentiment Analysis

This workflow demonstrates how to build an intelligent system that automatically collects and analyzes customer feedback, providing instant insights.

**Business Problem:** Manually reading every piece of feedback is time-consuming. It's hard to spot trends or gauge overall customer happiness without significant effort.

**Solution:** This workflow creates a public feedback form. When submitted, it sends the feedback to OpenAI for sentiment analysis (Positive, Neutral, Negative) and then logs the original feedback and the AI's analysis into a Google Sheet.

### `README.md`

```markdown
# 1996 Ai Customer Feedback Sentiment Analysis

This workflow automates the process of collecting customer feedback, analyzing the sentiment using OpenAI, and then storing the feedback along with the sentiment analysis in a Google Sheets spreadsheet.

Example: A company that wants to gather customer feedback and analyze the sentiment can use this workflow. Customers can submit feedback through a form, which triggers the workflow to send the feedback to OpenAI for sentiment analysis. The analyzed feedback is then merged with the original form data and added to a Google Sheets spreadsheet for further review and analysis.

## What You Can Do
- Automated customer feedback collection and sentiment analysis using OpenAI
- Integration with Google Sheets to store and organize the feedback data
- Customizable form fields and options to capture relevant information

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!
```

**File Explanation:** The `README.md` is the user manual for a specific workflow. It explains the business value, what the automation does, and how to get it running quickly. For an entrepreneur, this is the first place to look to see if a workflow solves their problem.

### `workflow.json`

```json
{
  "nodes": [
    {
      "id": "4ea39a4f-d8c1-438f-9738-bfbb906a3d7a",
      "name": "Sticky Note2",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1200,
        1020
      ],
      "parameters": {
        "width": 253,
        "height": 342,
        "content": "## Send customer feedback to OpenAI for sentiment analysis"
      },
      "typeVersion": 1
    },
    {
      "id": "6962ea41-7d15-4932-919f-21ac94fa1269",
      "name": "Sticky Note3",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1960,
        1180
      ],
      "parameters": {
        "width": 253,
        "height": 342,
        "content": "## Add new feedback to google sheets"
      },
      "typeVersion": 1
    },
    {
      "id": "4c8a8984-2d8e-4139-866b-6f3536aced07",
      "name": "Sticky Note4",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        800,
        1600
      ],
      "parameters": {
        "width": 1407,
        "height": 254,
        "content": "## Instructions\n1. Connect Google sheets\n2. Connect your OpenAi account (api key + org Id)\n3. Create a customer feedback form, use an existing one or use the one below as example. \nAll set!\n\n\n- Here is the example google sheet being used in this workflow: https://docs.google.com/spreadsheets/d/1omWdRbiT6z6GNZ6JClu9gEsRhPQ6J0EJ2yXyFH9Zng4/edit?usp=sharing. You can download it to your account."
      },
      "typeVersion": 1
    },
    {
      "id": "d43a9574-626d-4817-87ba-d99bdd6f41dc",
      "name": "Sticky Note5",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        800,
        1160
      ],
      "parameters": {
        "width": 253,
        "height": 342,
        "content": "## Feedback form is submitted"
      },
      "typeVersion": 1
    },
    {
      "id": "76dab2dc-935f-416e-91aa-5a1b7017ec1b",
      "name": "Sticky Note6",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        1600,
        1180
      ],
      "parameters": {
        "width": 253,
        "height": 342,
        "content": "## Merge form data and OpenAI result"
      },
      "typeVersion": 1
    },
    {
      "id": "9772eac1-8df2-4305-9b2c-265d3c5a9a4a",
      "name": "Add customer feedback to Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "position": [
        2020,
        1320
      ],
      "parameters": {
        "columns": {
          "value": {
            "Category": "={{ $json['What is your feedback about?'] }}",
            "Sentiment": "={{ $json.text }}",
            "Timestamp": "={{ $json.submittedAt }}",
            "Entered by": "=Form",
            "Customer Name": "={{ $json.Name }}",
            "Customer contact": "={{ $json['How do we get in touch with you?'] }}",
            "Customer Feedback": "={{ $json['Your feedback'] }}"
          },
          "schema": [
            {
              "id": "Timestamp",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Timestamp",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Category",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Category",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Customer Feedback",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Customer Feedback",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Customer Name",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Customer Name",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Customer contact",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Customer contact",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Entered by",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Entered by",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Urgent?",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Urgent?",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            },
            {
              "id": "Sentiment",
              "type": "string",
              "display": true,
              "required": false,
              "displayName": "Sentiment",
              "defaultMatch": false,
              "canBeUsedToMatch": true
            }
          ],
          "mappingMode": "defineBelow",
          "matchingColumns": []
        },
        "options": {},
        "operation": "append",
        "sheetName": {
          "__rl": true,
          "mode": "list",
          "value": "gid=0",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1omWdRbiT6z6GNZ6JClu9gEsRhPQ6J0EJ2yXyFH9Zng4/edit#gid=0",
          "cachedResultName": "Sheet1"
        },
        "documentId": {
          "__rl": true,
          "mode": "list",
          "value": "1omWdRbiT6z6GNZ6JClu9gEsRhPQ6J0EJ2yXyFH9Zng4",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1omWdRbiT6z6GNZ6JClu9gEsRhPQ6J0EJ2yXyFH9Zng4/edit?usp=drivesdk",
          "cachedResultName": "CustomerFeedback"
        }
      },
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "3",
          "name": "Google Sheets account"
        }
      },
      "typeVersion": 4.1
    },
    {
      "id": "12084971-c81b-4a0e-814e-120867562642",
      "name": "Merge sentiment with form content",
      "type": "n8n-nodes-base.merge",
      "position": [
        1680,
        1320
      ],
      "parameters": {
        "mode": "combine",
        "options": {},
        "combinationMode": "multiplex"
      },
      "typeVersion": 2.1
    },
    {
      "id": "235edf5b-7724-4712-8dc5-d8327a0620b8",
      "name": "Classify feedback with OpenAI",
      "type": "n8n-nodes-base.openAi",
      "position": [
        1280,
        1180
      ],
      "parameters": {
        "prompt": "=Classify the sentiment in the following customer feedback:  {{ $json['Your feedback'] }}",
        "options": {}
      },
      "credentials": {
        "openAiApi": {
          "id": "s2iucY0IctjYNbrb",
          "name": "OpenAi account"
        }
      },
      "typeVersion": 1
    },
    {
      "id": "af4b22aa-0925-40b1-a9ac-298f9745a98e",
      "name": "Submit form with customer feedback",
      "type": "n8n-nodes-base.formTrigger",
      "position": [
        860,
        1340
      ],
      "webhookId": "e7bf682e-48e8-40de-9815-cd180cdd1480",
      "parameters": {
        "options": {
          "formSubmittedText": "Your response has been recorded"
        },
        "formTitle": "Customer Feedback",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Name",
              "requiredField": true
            },
            {
              "fieldType": "dropdown",
              "fieldLabel": "What is your feedback about?",
              "fieldOptions": {
                "values": [
                  {
                    "option": "Product"
                  },
                  {
                    "option": "Service"
                  },
                  {
                    "option": "Other"
                  }
                ]
              },
              "requiredField": true
            },
            {
              "fieldType": "textarea",
              "fieldLabel": "Your feedback",
              "requiredField": true
            },
            {
              "fieldLabel": "How do we get in touch with you?"
            }
          ]
        },
        "formDescription": "Please give feedback about our company orproducts."
      },
      "typeVersion": 1
    }
  ],
  "connections": {
    "Classify feedback with OpenAI": {
      "main": [
        [
          {
            "node": "Merge sentiment with form content",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Merge sentiment with form content": {
      "main": [
        [
          {
            "node": "Add customer feedback to Google Sheets",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Submit form with customer feedback": {
      "main": [
        [
          {
            "node": "Classify feedback with OpenAI",
            "type": "main",
            "index": 0
          },
          {
            "node": "Merge sentiment with form content",
            "type": "main",
            "index": 1
          }
        ]
      ]
    }
  }
}
```

**File Explanation:** This JSON file is the engine of the automation. The `nodes` array defines each step (the trigger, the AI call, the Google Sheets action), while the `connections` object defines how data flows from one node to the next. It's the technical blueprint for the process.

---

## 2. API Use Case: Creating a Simple API Endpoint

This workflow shows how to turn n8n into a lightweight backend, creating a custom API that can be called by other applications or services.

**Business Problem:** You need a simple, custom API to perform a specific function (like generating a search link), but don't want the overhead of setting up a full server, managing dependencies, and writing boilerplate code.

**Solution:** This workflow uses a **Webhook Trigger** node, which creates a unique URL. When this URL is accessed, it takes query parameters (e.g., `?first_name=John&last_name=Doe`), processes them, and returns a result.

### `README.md`

```markdown
# 1750 Creating An Api Endpoint

This workflow creates a simple API endpoint that generates a Google search URL based on the first and last name provided in the webhook request.

Example: A user could use this workflow to create a custom API endpoint that allows them to quickly generate a Google search URL for a person's name. For example, they could send a request to the API endpoint with the parameters `?first_name=John&last_name=Doe`, and the workflow would respond with the URL `https://www.google.com/search?q=John+Doe`.

## What You Can Do
- Webhook node to create a custom API endpoint
- Set node to generate the Google search URL based on the input parameters
- Respond to Webhook node to return the generated URL to the user

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!
```

**File Explanation:** This README clearly explains the endpoint's function, provides an example of how to call it, and lists the core n8n nodes involved. It allows an entrepreneur to quickly grasp the API's capability without needing to be a backend developer.

### `workflow.json`

```json
{
  "nodes": [
    {
      "id": "f80aceed-b676-42aa-bf25-f7a44408b1bc",
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [
        375,
        115
      ],
      "webhookId": "6f7b288e-1efe-4504-a6fd-660931327269",
      "parameters": {
        "path": "6f7b288e-1efe-4504-a6fd-660931327269",
        "options": {},
        "responseMode": "responseNode"
      },
      "typeVersion": 1
    },
    {
      "id": "3b9ec913-0bbe-4906-bf8e-da352b556655",
      "name": "Note1",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        355,
        -25
      ],
      "parameters": {
        "width": 600,
        "height": 280,
        "content": "## Create a simple API endpoint\n\nIn this workflow we show how to create a simple API endpoint with `Webhook` and `Respond to Webhook` nodes\n\n"
      },
      "typeVersion": 1
    },
    {
      "id": "9c36dae5-0700-450c-9739-e9f3eff31bfe",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [
        815,
        115
      ],
      "parameters": {
        "options": {},
        "respondWith": "text",
        "responseBody": "=The URL of the Google search query for the term \"{{$node[\"Webhook\"].json[\"query\"][\"first_name\"]}} {{$node[\"Webhook\"].json[\"query\"][\"last_name\"]}}\" is: {{$json[\"product\"]}}"
      },
      "typeVersion": 1
    },
    {
      "id": "5a228fcb-78b9-4a28-95d2-d7c9fdf1d4ea",
      "name": "Create URL string",
      "type": "n8n-nodes-base.set",
      "position": [
        595,
        115
      ],
      "parameters": {
        "values": {
          "string": [
            {
              "name": "product",
              "value": "=https://www.google.com/search?q={{$json[\"query\"][\"first_name\"]}}+{{$json[\"query\"][\"last_name\"]}}"
            }
          ]
        },
        "options": {},
        "keepOnlySet": true
      },
      "typeVersion": 1
    },
    {
      "id": "e7971820-45a8-4dc8-ba4c-b3220d65307a",
      "name": "Note3",
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        355,
        275
      ],
      "parameters": {
        "width": 600,
        "height": 220,
        "content": "### How to use it\n1. Execute the workflow so that the webhook starts listening\n2. Make a test request by pasting, **in a new browser tab**, the test URL from the `Webhook` node and appending the following test at the end `?first_name=bob&last_name=dylan`\n\nYou will receive the following output in the new tab `The URL of the Google search query for the term \"bob dylan\" is: https://www.google.com/search?q=bob+dylan`\n\n"
      },
      "typeVersion": 1
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Create URL string",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Create URL string": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

**File Explanation:** This JSON defines three critical nodes: `Webhook` to receive the request, `Set` to process the inputs and create the URL, and `Respond to Webhook` to send the result back to the user, effectively creating a serverless function.

---

## 3. Data Transformation Use Case: Parse Email Body

This workflow provides a reusable function for extracting structured data from unstructured text, a common business challenge.

**Business Problem:** You receive inquiries via email that contain key information (like Name, Email, Subject), but it's all in a single block of text. Manually copying and pasting this data into another system is slow and error-prone.

**Solution:** This workflow uses a **Function Item** node containing a JavaScript snippet. The script takes an email body and a list of labels (e.g., "Name,Email,Subject") and intelligently extracts the corresponding values, turning messy text into clean, usable data.

### `README.md`

```markdown
# 1453 Parse Email Body Message

This workflow allows users to extract key information from an email body by parsing it based on predefined labels.

Example: A customer service team could use this workflow to quickly extract relevant details (e.g., name, email, subject, message) from customer emails, streamlining their response process.

## What You Can Do
- Automated email parsing based on custom labels
- Flexible configuration to adapt to different email formats
- Seamless integration with other n8n workflows for further processing

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!
```

**File Explanation:** This README highlights the workflow's core capability—extracting structured data from text. It gives a clear example of a customer service use case, which is a perfect fit for this kind of data transformation task.

### `workflow.json`

```json
{
  "nodes": [
    {
      "name": "On clicking 'execute'",
      "type": "n8n-nodes-base.manualTrigger",
      "position": [
        250,
        300
      ],
      "parameters": {},
      "typeVersion": 1
    },
    {
      "name": "Email Parser Snippet",
      "type": "n8n-nodes-base.functionItem",
      "position": [
        670,
        300
      ],
      "parameters": {
        "functionCode": "var obj = {};\nvar labels = item.labels.split(\",\");\nitem.labels.split(\",\").forEach(function(label) {\n  var re = labels.indexOf(label) === labels.length - 1 ? \"\\\\b\" + label + \"\\\\b[: ]+([^$]+)\" : \"\\\\b\" + label + \"\\\\b[: ]+([^\\\\n$]+)\";\n  var found = item.body.match(new RegExp(re, \"i\"));\n  if (found && found.length > 1) {\n    obj[label] = found[1].trim();\n  }\n});\n\nreturn obj;"
      },
      "typeVersion": 1
    },
    {
      "name": "Set values",
      "type": "n8n-nodes-base.set",
      "position": [
        460,
        300
      ],
      "parameters": {
        "values": {
          "number": [],
          "string": [
            {
              "name": "body",
              "value": "Name: Miquel\nEmail: miquel@aprenden8n.com\nSubject: Welcome aboard\nMessage: Hi Miquel!\n\nThank you for your signup!"
            },
            {
              "name": "labels",
              "value": "Name,Email,Subject,Message"
            }
          ]
        },
        "options": {}
      },
      "typeVersion": 1
    }
  ],
  "connections": {
    "Set values": {
      "main": [
        [
          {
            "node": "Email Parser Snippet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "On clicking 'execute'": {
      "main": [
        [
          {
            "node": "Set values",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

**File Explanation:** The `functionCode` within the `Email Parser Snippet` node is the heart of this workflow. This small block of JavaScript uses regular expressions to find labels in the text and extract the data that follows them, demonstrating how n8n can be extended with code.

---

By studying these examples, you can understand the core patterns of automation development in n8n and begin applying them to your own business challenges. Each of the 2,500+ workflows in this collection follows these same fundamental principles.

---

## Workflow Category Explanations

To help you navigate this extensive library, the workflows are organized into logical categories. Here’s a breakdown of what you can find in each:

*   **AI Agent Development:** Build intelligent agents that can perform complex tasks, from customer support to data analysis and content creation.
*   **Business Process Automation:** Automate core business operations like invoicing, reporting, and employee onboarding to improve efficiency.
*   **Cloud Storage & File Management:** Create workflows that automatically manage files across services like Google Drive, Dropbox, and S3, including backups, conversions, and organization.
*   **Communication & Messaging:** Centralize your communications by automating notifications and messages across platforms like Slack, Discord, Telegram, and email.
*   **Creative Content & Video Automation:** Automate the creation and distribution of video content, social media clips, and other creative assets.
*   **CRM & Sales:** Supercharge your sales process with automations for lead nurturing, CRM updates (e.g., Salesforce), and follow-ups.
*   **Data Processing & Analysis:** Build powerful pipelines to extract, transform, and load (ETL) data between databases, spreadsheets, and analytics platforms.
*   **E-commerce & Retail:** Automate inventory management, order processing, customer notifications, and marketing for platforms like Shopify.
*   **Financial & Accounting:** Streamline financial operations with automated invoice processing, expense tracking, and reporting.
*   **Marketing & Advertising Automation:** Automate your marketing campaigns, from social media scheduling and ad performance monitoring to email marketing sequences.
*   **Project Management:** Keep your projects on track by automating task creation, deadline reminders, and status updates in tools like Jira, Asana, and Trello.
*   **Social Media Management:** Manage all your social media channels with workflows that schedule posts, monitor engagement, and analyze performance.
*   **Technical Infrastructure & DevOps:** Automate technical tasks like server monitoring, deployment notifications, and database backups.
*   **Web Scraping & Data Extraction:** Create agents that can automatically extract data from websites for lead generation, market research, or competitive analysis.
