# Lesson 5 – System Design Fundamentals

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand system design goals: scalability, availability, reliability, and latency.  
- Identify the building blocks of modern systems: load balancers, databases, caches, queues, CDNs.  
- Recognize trade-offs between consistency and availability (CAP theorem).  
- Sketch basic architectures for common web apps.  

---

## Part 1: Explain – The Big Rocks of System Design

When building systems, the main goals are:  
- **Scalability** – Handle more users by scaling horizontally (adding more servers).  
- **Availability** – Stay online even when parts fail (redundancy, failover).  
- **Reliability** – Ensure correct behavior over time (durable writes, idempotent requests).  
- **Latency** – Respond quickly (caching, CDNs, colocating services).  

**CAP Theorem (intuition):**  
- You can optimize for **Consistency**, **Availability**, or **Partition tolerance** – but not all three simultaneously.  
- Trade-offs matter based on app type (banking vs social media).  

---

## Part 2: Demonstrate – Reference Architecture

**Basic Web App Design:**  
- **Client** → **CDN** → **Load Balancer** → **App Servers** → **Database**.  
- **Cache** (Redis/Memcached) to reduce DB load.  
- **Queue** (Kafka/SQS) for async tasks (email sending, image processing).  
- **Blob Storage** (S3) for images and videos.  
- **Search Engine** (Elasticsearch) for full-text search.  

**Example Use Case: Social Feed**  
- **Writes**: enqueue posts for processing and fan-out.  
- **Reads**: serve precomputed feeds from cache.  
- **Resilience**: retries, rate limiting, circuit breakers.  

---

## Part 3: Imitate – Sketch Your Own

Prompt ChatGPT-5:  
```
Design a basic architecture for a video-sharing app.  
Include: user uploads, transcoding, serving videos, comments, and likes.  
Return: diagram (text-based) + explanation of flow.  
```

Review the diagram. Does it include load balancing, storage, and caching?

---

## Part 4: Practice

1. **Traffic Assumptions**  
   Estimate: how many daily users, requests per second, and GB/day of data.  

2. **System Components**  
   Choose 1 feature (e.g., comments). Identify:  
   - Storage type.  
   - Cache or not.  
   - Expected queries.  

3. **Failure Drill**  
   Ask: “What happens if the database goes down? How do we recover?”  

---

## Analogies That Help

- **Restaurant:**  
  - Load Balancer = host seating guests.  
  - Cache = pre-cooked meals.  
  - Queue = waiting list for tables.  

- **Highway:**  
  - Scalability = adding more lanes.  
  - Latency = speed of cars.  
  - Reliability = cars arriving safely.  

---

## Key Takeaways

- System design focuses on scalability, availability, reliability, and latency.  
- Use building blocks: load balancer, servers, DB, cache, queues, CDNs.  
- Trade-offs (CAP theorem) shape system decisions.  
- Design is iterative — measure real-world performance and refine.  
