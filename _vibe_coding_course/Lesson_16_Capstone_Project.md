# Lesson 16 – Capstone Project: Ship an MVP

## Learning Objectives
By the end of this capstone project, you will be able to:
- Apply everything you’ve learned in the Vibe Coding course.  
- Use the **Vibe Coding Playbook** to design and build your own product idea.  
- Deliver a functional MVP (Minimum Viable Product) with docs, tests, and a demo.  
- Demonstrate mastery by shipping an app end-to-end.

---

## Pre-Flight Setup

### 0. Define Tech Stack & Conventions
```
You are a senior full-stack engineer.  
Tech stack: Node.js, Express, PostgreSQL, React, SCSS with BEM, JWT Auth, Jest tests.  
Architecture: MVC pattern.  
Always explain file structure with each response.  
Use clean code, validation, and error handling by default.
```

### 0.1 Project Structure Prompt
```
Generate the project folder structure with backend and frontend separated.  
Include subfolders: models, controllers, routes, tests, styles, utils.  
Provide a README that explains each folder.
```

---

## Project Overview

This is your chance to **create your own app** using everything from Lessons 1–15.

### Requirements
Your MVP must include:  
- **Authentication** (user accounts with login/signup).  
- **At least 2 models** (e.g., users + posts, or products + orders).  
- **CRUD functionality** for each model.  
- **Frontend views** styled with BEM + SCSS (Lesson 11).  
- **Testing** for core functionality (unit, integration, E2E).  
- **Deployment** to a live environment.  

Optional but recommended:  
- **Extra features** (comments, votes, search, real-time).  
- **Admin dashboard**.  
- **Analytics/metrics**.

---

## Step 1: Pick Your Idea

Use the **Vibe Coding Playbook** (Lesson 15) as your starting point.  
Swap context to fit your idea.

Examples:  
- Twitter-style microblog app.  
- Simple e-commerce store.  
- Task manager (Trello-lite).  
- Q&A platform (StackOverflow clone).  
- Niche community forum.  

---

## Step 2: Design Your System

Prompts to use:
```
Act as a product founder.  
Propose a feature set for [your app idea].  
Return: user stories, acceptance criteria, prioritized by MoSCoW.
```

```
Design the database schema for [your app idea].  
Return: models, fields, relationships, and SQL create table statements.
```

---

## Step 3: Build

Follow the Playbook sequence (Lesson 15):  
1. Generate routes + controllers.  
2. Implement backend logic with validation + authentication.  
3. Build frontend with React (using BEM + SCSS).  
4. Add security layers (JWT auth, role-based access – Lesson 10).  
5. Write **unit, integration, and E2E tests**.  

---

## Step 4: Deploy

Prompts to use:
```
Provide Dockerfile + docker-compose.yml for my app with backend, frontend, and Postgres DB.  
Return instructions to deploy on Render, Vercel, or AWS.
```

### Environment Variables
```
Provide a sample .env file for this project.  
List variables (DB_URL, JWT_SECRET, REDIS_URL, etc).  
Explain secure management in production (e.g., platform env vars, secret managers).
```

---

## Step 5: Document & Demo

Deliverables:  
- **Architecture doc** (models, routes, design).  
- **API contract** (endpoints with methods & examples).  
- **Repo** with clean code, SCSS partials, tests, and docs.  
- **Demo video** (2–5 minutes walkthrough).  

---

## Refinement Prompts (Optional but Powerful)

- **Security Audit**
```
Review the codebase against OWASP Top 10 vulnerabilities.  
Suggest improvements for input validation, error handling, and auth.
```

- **Performance Scaling**
```
Refactor the app to use Redis caching for hot endpoints.  
Add CDN integration for assets.  
```

- **Monitoring**
```
Add logging and monitoring for requests, errors, and performance metrics.  
Suggest an open-source monitoring stack.
```

---

## Evaluation Checklist

- [ ] App deployed and accessible.  
- [ ] At least 2 models with CRUD operations.  
- [ ] Auth system implemented.  
- [ ] Frontend styled with BEM + SCSS.  
- [ ] Tests for unit, integration, and E2E flows.  
- [ ] Architecture doc included.  
- [ ] API contract documented.  
- [ ] Demo video recorded.  

### Pre-Commit Checklist
- [ ] Tests pass locally.  
- [ ] Code linted.  
- [ ] Secrets not committed.  
- [ ] DB migrations run cleanly.  

### Release Checklist
- [ ] Env vars documented.  
- [ ] Monitoring configured.  
- [ ] Rollback plan ready.  

---

## Key Takeaways

- The Capstone is where you **prove mastery** by shipping a real product.  
- Use the Playbook prompts as scaffolding, but adapt them to your idea.  
- Secure, test, and document — don’t skip quality.  
- By the end, you’ll have a **portfolio-ready MVP** that shows off your vibe coding skills.
