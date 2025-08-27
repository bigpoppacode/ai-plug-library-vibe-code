# Lesson 8 – External APIs

## Learning Objectives
By the end of this lesson, you will be able to:
- Explain what an API is and how external APIs connect systems.  
- Differentiate between REST and GraphQL APIs.  
- Implement authentication strategies (API keys, OAuth).  
- Handle rate limits, retries, and errors when consuming APIs.  
- Build and test simple API calls in Cursor.  

---

## Part 1: Explain – What Are APIs?

An **API (Application Programming Interface)** is a contract for how systems communicate.  
- **REST APIs**: Use HTTP verbs (GET, POST, PUT, DELETE) and endpoints (`/users`, `/posts`).  
- **GraphQL APIs**: Clients request exactly the data they need in a single query.  

**Authentication Methods:**  
- **API Key** – Shared secret string.  
- **OAuth2** – Tokens exchanged for secure delegated access.  
- **JWT** – JSON Web Tokens to verify user identity.  

**Other Concerns:**  
- **Rate Limits** – APIs restrict requests per minute/hour.  
- **Retries** – Retry with backoff if a request fails.  
- **Error Handling** – Always check response codes.  

---

## Part 2: Demonstrate – Example REST API Call

Prompt ChatGPT-5:  
```
Generate Node.js Express code to fetch posts from JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts).  
Use axios.  
Return only the first 5 posts.  
```

Expected output snippet:  
```js
const axios = require('axios');

app.get('/external-posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data.slice(0, 5));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});
```

---

## Part 3: Imitate – Your Own API Integration

Try:  
```
Integrate the OpenWeather API into an Express app.  
Create a GET /weather?city=London endpoint.  
Return: city name, temperature, and conditions.  
```

Run the code in Cursor and test with Postman or browser.

---

## Part 4: Practice

1. **API Drill**  
   Pick one public API (PokéAPI, NewsAPI, OpenWeather).  
   Write a prompt to generate an integration.  

2. **Error Handling**  
   Add error handling for invalid requests. Prompt AI:  
   ```
   Update my API code to gracefully handle 404s and rate-limit errors.  
   ```

3. **OAuth Demo**  
   Prompt ChatGPT-5:  
   ```
   Show me how to implement GitHub OAuth in Node.js with passport.js.  
   ```

---

## Analogies That Help

- **Restaurant Menu:** API = menu. You order (request), get dish (response).  
- **Plug Adapter:** APIs connect different systems like adapters between devices.  
- **Remote Control:** API = buttons you press; TV = the system executing.  

---

## Key Takeaways

- APIs let systems talk via contracts (REST, GraphQL).  
- Authentication (API keys, OAuth) secures requests.  
- Always handle rate limits, retries, and errors.  
- Practicing integrations builds skills for real-world apps.  
