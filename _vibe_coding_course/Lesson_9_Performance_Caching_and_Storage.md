# Lesson 9 – Latency, Throughput, Caching, Blob Storage

## Learning Objectives
By the end of this lesson, you will be able to:
- Define latency and throughput in the context of web applications.  
- Explain how caching improves performance and scalability.  
- Recognize when to use blob storage for large files.  
- Implement simple caching and storage strategies in your apps.  

---

## Part 1: Explain – Key Concepts

- **Latency** – The time it takes for a request to travel from client → server → back. (Speed of a single trip)  
- **Throughput** – How many requests per second the system can handle. (Volume over time)  

**Caching** – Storing frequently accessed data closer to the client to reduce latency.  
- **Browser Cache** – Stores assets locally.  
- **CDN (Content Delivery Network)** – Distributes content across edge servers worldwide.  
- **Server Cache (Redis/Memcached)** – Keeps hot data in memory for fast access.  

**Blob Storage** – A service for storing large, unstructured files (images, videos, PDFs).  
- Examples: AWS S3, Google Cloud Storage, Azure Blob Storage.  
- Benefits: cheap, scalable, integrates with CDNs.  

---

## Part 2: Demonstrate – Caching Example

Prompt ChatGPT-5:  
```
Create an Express.js route GET /popular-posts that caches responses in Redis for 60 seconds.  
If cache is present, return it. Otherwise, fetch from DB and cache it.  
```

Expected snippet:  
```js
const redis = require("redis");
const client = redis.createClient();

app.get('/popular-posts', async (req, res) => {
  const cached = await client.get("popular-posts");
  if (cached) return res.json(JSON.parse(cached));

  const posts = await Post.findAll({ limit: 10, order: [["votes", "DESC"]] });
  await client.setEx("popular-posts", 60, JSON.stringify(posts));
  res.json(posts);
});
```

---

## Part 3: Imitate – Blob Storage Example

Prompt:  
```
Show me how to upload images to AWS S3 from a Node.js app.  
Include: route handler, S3 client config, and error handling.  
```

Expected flow:  
- Client uploads image → Express route → S3 bucket → return URL.  
- URL can be used in posts or profiles.  

---

## Part 4: Practice

1. **Latency Drill**  
   Ping a server in your region vs another continent. Compare times.  

2. **Cache Drill**  
   Add Redis caching to any GET endpoint in your project.  

3. **Blob Storage Drill**  
   Upload a file to AWS S3 or another service and use its public URL in your app.  

---

## Analogies That Help

- **Library:** Latency = walking to the shelf. Throughput = how many books the library can check out per hour. Cache = keeping your favorite book at your desk.  
- **Kitchen:** Blob storage = giant pantry for bulk items; cache = snacks on the counter.  
- **Highway:** Latency = speed of one car; Throughput = total number of cars passing in an hour.  

---

## Key Takeaways

- Latency = single-trip speed; Throughput = system volume.  
- Caching reduces latency and DB load by storing hot data.  
- Blob storage is the best option for large, unstructured files.  
- Combining caching + blob storage improves both **performance** and **scalability**.  
