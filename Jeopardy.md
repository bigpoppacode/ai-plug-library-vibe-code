# The AI Plug Library n8n Automation Jeopardy Quiz

Test your knowledge of the n8n automations in this repository.

### Questions

| n8n Fundamentals | AI-Powered Automations | API & Webhooks | Data Wrangling | Business Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **100** - The individual processing steps in an n8n workflow are called this. | **100** - This OpenAI model is used for audio transcription in workflow #1900. | **100** - This node is the most common way to create a public URL that can trigger a workflow from an external service. | **100** - This common node allows you to add, update, or transform data fields using static values or JavaScript expressions. | **100** - Workflow #1996, which performs sentiment analysis on form submissions, is designed to automate this common business department. |
| **200** - This is the primary format used to define and save n8n workflows, making them portable and shareable. | **200** - In workflow #1996, this is the reason for sending customer feedback to OpenAI before saving it to Google Sheets. | **200** - This is the purpose of the "Respond to Webhook" node in workflow #1750. | **200** - This is the purpose of the Merge node, such as the one used in workflow #1996. | **200** - Workflow #1953, which checks a calendar and composes an email, is designed to solve this common productivity challenge for busy professionals. |
| **300** - What is the key difference between a "Trigger" node and a regular node in an n8n workflow? | **300** - If the OpenAI node in workflow #1996 returned "Positive" instead of just "Positive.", but the Google Sheet was empty, what is a likely cause of the error in the "Sentiment" field mapping? | **300** - In workflow #1750, if you send data via a POST request with a JSON body instead of URL query parameters, what property would you need to access in the Webhook node to get the data? | **300** - In the "multiplex" combination mode of the Merge node, if Input 1 has 3 items and Input 2 has 1 item, how many items will the output have? | **300** - Besides parsing emails, how could the core logic in workflow #1453 be repurposed for another business task? |
| **400** - This JavaScript expression is used to access the `first_name` from a webhook's query parameters. | **400** - In workflow #1996, this is the expression used in the OpenAI node's prompt to send the user's feedback for classification. | **400** - This expression is used in workflow #1750 to construct the final Google search URL in the "Create URL string" node. | **400** - In the Function Item node of workflow #1453, this is the JavaScript method used to split the `labels` string into an array. | **400** - This is the JavaScript expression used in the Google Sheets node of workflow #1996 to map the form submission's "Name" field to the "Customer Name" column. |

### Answers

| n8n Fundamentals | AI-Powered Automations | API & Webhooks | Data Wrangling | Business Use Cases |
| :--- | :--- | :--- | :--- | :--- |
| **100** - What are Nodes? | **100** - What is Whisper? | **100** - What is the Webhook node? | **100** - What is the Set node? | **100** - What is Customer Support/Feedback analysis? |
| **200** - What is JSON? | **200** - To classify the sentiment (e.g., Positive, Negative). | **200** - To send data back to the client that made the original HTTP request. | **200** - To combine data from different streams (nodes) into a single item or set of items. | **200** - What is scheduling meetings or appointments? |
| **300** - A Trigger node always starts a workflow and runs first; a regular node can only run after receiving input from another node. | **300** - A mismatch in the exact text. The mapping expression likely expected `Positive` but received `Positive.`, causing it to fail. | **300** - `$json.body` | **300** - 3 items. | **300** - Parsing chatbot logs, extracting details from social media comments, or structuring data from scraped web pages. |
| **400** - `{{$node["Webhook"].json["query"]["first_name"]}}` | **400** - `Classify the sentiment in the following customer feedback: {{ $json['Your feedback'] }}` | **400** - `https://www.google.com/search?q={{$json["query"]["first_name"]}}+{{$json["query"]["last_name"]}}` | **400** - `item.labels.split(",")` | **400** - `={{ $json.Name }}` |

---

### Detailed Answer Key

1.  **Question (n8n Fundamentals - 100):** The individual processing steps in an n8n workflow are called this.
    *   **Answer:** What are Nodes?
    *   **Explanation:** In n8n, every action, from the trigger to data transformation to sending an email, is encapsulated in a block called a Node. These are the fundamental building blocks of any workflow.

2.  **Question (AI-Powered Automations - 100):** This OpenAI model is used for audio transcription in workflow #1900.
    *   **Answer:** What is Whisper?
    *   **Explanation:** The README for workflow #1900 specifies that it uses OpenAI's Whisper model for its audio transcription capabilities.

3.  **Question (API & Webhooks - 100):** This node is the most common way to create a public URL that can trigger a workflow from an external service.
    *   **Answer:** What is the Webhook node?
    *   **Explanation:** The Webhook node generates a unique URL that "listens" for incoming HTTP requests, making it the standard way to create an API endpoint in n8n, as seen in workflow #1750.

4.  **Question (Data Wrangling - 100):** This common node allows you to add, update, or transform data fields using static values or JavaScript expressions.
    *   **Answer:** What is the Set node?
    *   **Explanation:** The Set node is a versatile tool used throughout the collection (e.g., workflow #1750) to manipulate data. It's essential for preparing data from one node for use in a subsequent node.

5.  **Question (Business Use Cases - 100):** Workflow #1996, which performs sentiment analysis on form submissions, is designed to automate this common business department.
    *   **Answer:** What is Customer Support/Feedback analysis?
    *   **Explanation:** The workflow's purpose is to automate the collection and analysis of customer feedback, a core function of customer support, product, and marketing teams.

6.  **Question (n8n Fundamentals - 200):** This is the primary format used to define and save n8n workflows, making them portable and shareable.
    *   **Answer:** What is JSON?
    *   **Explanation:** As seen in every `workflow.json` file, the entire structure, nodes, connections, and settings of a workflow are defined in JSON (JavaScript Object Notation).

7.  **Question (AI-Powered Automations - 200):** In workflow #1996, this is the reason for sending customer feedback to OpenAI before saving it to Google Sheets.
    *   **Answer:** To classify the sentiment (e.g., Positive, Negative).
    *   **Explanation:** The workflow doesn't just store the raw feedback; it enriches the data by using OpenAI's intelligence to add a sentiment classification, providing more value than just raw data entry.

8.  **Question (API & Webhooks - 200):** This is the purpose of the "Respond to Webhook" node in workflow #1750.
    *   **Answer:** To send data back to the client that made the original HTTP request.
    *   **Explanation:** A webhook that doesn't respond is a one-way communication. This node allows the workflow to function like a true API by sending a confirmation or data payload back to the caller.

9.  **Question (Data Wrangling - 200):** This is the purpose of the Merge node, such as the one used in workflow #1996.
    *   **Answer:** To combine data from different streams (nodes) into a single item or set of items.
    *   **Explanation:** In workflow #1996, the original form data and the sentiment analysis from OpenAI are two separate streams. The Merge node combines them so that a single, unified row can be added to the Google Sheet.

10. **Question (Business Use Cases - 200):** Workflow #1953, which checks a calendar and composes an email, is designed to solve this common productivity challenge for busy professionals.
    *   **Answer:** What is scheduling meetings or appointments?
    *   **Explanation:** This workflow automates the tedious back-and-forth of finding available meeting slots, saving significant time and reducing administrative overhead.

11. **Question (n8n Fundamentals - 300):** What is the key difference between a "Trigger" node and a regular node in an n8n workflow?
    *   **Answer:** A Trigger node always starts a workflow and runs first; a regular node can only run after receiving input from another node.
    *   **Explanation:** Every workflow must begin with one and only one Trigger node (e.g., Webhook, Cron, Form Trigger). All other nodes are action-oriented and depend on the trigger for their initial data.

12. **Question (AI-Powered Automations - 300):** If the OpenAI node in workflow #1996 returned "Positive" instead of just "Positive.", but the Google Sheet was empty, what is a likely cause of the error in the "Sentiment" field mapping?
    *   **Answer:** A mismatch in the exact text. The mapping expression likely expected `Positive` but received `Positive.`, causing it to fail.
    *   **Explanation:** This is a common debugging scenario. Data processing is often literal, and unexpected characters like a period can break downstream logic if not accounted for with trimming or more robust validation.

13. **Question (API & Webhooks - 300):** In workflow #1750, if you send data via a POST request with a JSON body instead of URL query parameters, what property would you need to access in the Webhook node to get the data?
    *   **Answer:** `$json.body`
    *   **Explanation:** The Webhook node intelligently separates incoming data. URL parameters are in `$json.query`, while data sent in the request's body (common for POST/PUT requests) is in `$json.body`.

14. **Question (Data Wrangling - 300):** In the "multiplex" combination mode of the Merge node, if Input 1 has 3 items and Input 2 has 1 item, how many items will the output have?
    *   **Answer:** 3 items.
    *   **Explanation:** Multiplex mode pairs items based on their index. It will pair the first item from Input 1 with the first (and only) item from Input 2, and then the next two items from Input 1 will be paired with nothing, resulting in 3 total output items.

15. **Question (Business Use Cases - 300):** Besides parsing emails, how could the core logic in workflow #1453 be repurposed for another business task?
    *   **Answer:** Parsing chatbot logs, extracting details from social media comments, or structuring data from scraped web pages.
    *   **Explanation:** The core function of this workflow is turning semi-structured text into structured data. This pattern is highly reusable for any task that involves pulling key information out of a block of text.

16. **Question (n8n Fundamentals - 400):** This JavaScript expression is used to access the `first_name` from a webhook's query parameters.
    *   **Answer:** `{{$node["Webhook"].json["query"]["first_name"]}}`
    *   **Explanation:** This syntax is the standard way to "drill down" into the JSON data produced by a node. It specifies the node name, the data object (`json`), the part of the request (`query`), and the specific parameter (`first_name`).

17. **Question (AI-Powered Automations - 400):** In workflow #1996, this is the expression used in the OpenAI node's prompt to send the user's feedback for classification.
    *   **Answer:** `Classify the sentiment in the following customer feedback: {{ $json['Your feedback'] }}`
    *   **Explanation:** This demonstrates how to combine static text ("Classify the sentiment...") with dynamic data from a previous node (`{{ $json['Your feedback'] }}`) to create a prompt for the AI.

18. **Question (API & Webhooks - 400):** This expression is used in workflow #1750 to construct the final Google search URL in the "Create URL string" node.
    *   **Answer:** `https://www.google.com/search?q={{$json["query"]["first_name"]}}+{{$json["query"]["last_name"]}}`
    *   **Explanation:** This shows how to build a new string by combining a static base URL with multiple dynamic data points from the incoming webhook request.

19. **Question (Data Wrangling - 400):** In the Function Item node of workflow #1453, this is the JavaScript method used to split the `labels` string into an array.
    *   **Answer:** `item.labels.split(",")`
    *   **Explanation:** This is a fundamental JavaScript method for string manipulation. The code `item.labels.split(",")` takes a comma-separated string (e.g., "Name,Email,Subject") and turns it into an array (`['Name', 'Email', 'Subject']`) for iteration.

20. **Question (Business Use Cases - 400):** This is the JavaScript expression used in the Google Sheets node of workflow #1996 to map the form submission's "Name" field to the "Customer Name" column.
    *   **Answer:** `={{ $json.Name }}`
    *   **Explanation:** This is a direct mapping expression. It tells the Google Sheets node to take the value from the "Name" field in the incoming JSON data and place it into the "Customer Name" column of the spreadsheet.
