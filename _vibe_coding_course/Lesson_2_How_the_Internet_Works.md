# Lesson 2 – How the Internet Works (Crash Course)

## Learning Objectives
By the end of this lesson, you will be able to:
- Describe the basics of how the internet connects clients and servers.  
- Understand DNS, HTTP requests/responses, and status codes.  
- Explain latency and throughput in simple terms.  
- Recognize where caching and CDNs improve performance.  

---

## Part 1: Explain – Internet Basics

The internet is just **computers talking to each other**.  
- **Clients**: your browser, phone, or app.  
- **Servers**: machines hosting data and services.  
- **Requests & Responses**: Clients request info → servers respond.  

Key concepts:  
- **DNS (Domain Name System):** Translates names (google.com) → IP addresses.  
- **HTTP (HyperText Transfer Protocol):** Rules for how browsers and servers talk.  
- **Status Codes:** 200 OK, 404 Not Found, 500 Server Error.  
- **HTTPS:** HTTP + encryption for security.  

---

## Part 2: Demonstrate – A Request in Action

Type this in your browser:  
```
https://jsonplaceholder.typicode.com/posts/1
```

The flow:  
1. Browser asks DNS: “What IP is jsonplaceholder.typicode.com?”  
2. DNS replies with an IP.  
3. Browser sends an HTTP GET request.  
4. Server responds with JSON data for Post #1.  

Response example:  
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "quia et suscipit..."
}
```

---

## Part 3: Imitate – Build a Simple API

Prompt ChatGPT-5:  
```
Create a Node.js Express app with one endpoint:  
GET /status should return { "uptime": [server uptime in seconds] } in JSON.  
```

Run it locally. Open http://localhost:3000/status.  
Observe the request and response in your browser or Postman.

---

## Part 4: Practice

1. **Trace a Request**  
   Use `ping google.com` in your terminal. Write down the IP address it resolves to.  

2. **API Drill**  
   Prompt ChatGPT-5 to create an endpoint that returns today’s date and time.  

3. **Latency Test**  
   Open a site from another continent. Notice slower loading. Ask: how would a CDN help?  

---

## Analogies That Help

- **Mail System:** DNS = phonebook, HTTP request = sending letter, response = receiving letter.  
- **Restaurant:** Client = customer, Server = waiter, Response = food.  
- **Highway:** Latency = travel time, Throughput = number of cars passing per second.  

---

## Key Takeaways

- Internet = clients and servers exchanging requests and responses.  
- DNS resolves names to IP addresses.  
- HTTP governs communication; HTTPS secures it.  
- Latency is *speed of one trip*; throughput is *volume over time*.  
- Caching and CDNs reduce latency and improve performance.
