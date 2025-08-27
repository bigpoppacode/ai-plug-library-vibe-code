# The Vibe Coding Playbook

This playbook provides a structured set of prompt templates to build a fully functional CRUD application from scratch. It's designed to be a step-by-step guide for developers using an AI-first workflow.

---

## Pre-Flight Setup Prompts

### 0. Define Tech Stack & Conventions
Paste this into your AI code editor before starting:
```
You are a senior full-stack engineer.
Tech stack: Node.js, Express, PostgreSQL, React, SCSS with BEM, JWT Auth, Jest tests.
Architecture: MVC pattern.
Always explain file structure with each response.
Use clean code, validation, and error handling by default.
```

### 0.1 File & Folder Structure Prompt
```
Generate the project folder structure with backend and frontend separated.
Include subfolders: models, controllers, routes, tests, styles, and utils.
Provide a README that explains each folder.
```

---

## Step-by-Step Prompt Flow

### 1. Product Ideation
```
You are a product founder. Propose a simple CRUD application similar to Reddit.
Features: user accounts, create/read/update/delete posts, comments, upvotes/downvotes, and feeds.
Return: feature list, target audience, value proposition, and 3 differentiators.
```

### 2. User Stories
```
Write user stories for a Reddit-style CRUD app.
Format: As a [role], I want [feature], so that [benefit].
Add acceptance criteria using Given–When–Then.
Prioritize with MoSCoW (Must, Should, Could, Won’t).
```

### 3. Data Models (Database Schema)
```
Design the database schema for a Reddit-style CRUD app.
Models: User, Post, Comment, Vote, Subreddit, Role.
Return: table name, fields, types, constraints, and relations.
Output as SQL CREATE TABLE statements and a diagram (text-based if needed).
```

### 4. API Routes & Controllers
```
Generate API endpoints for this CRUD app.
Include routes for: signup, login, create post, read posts, edit post, delete post, create comment, vote on post, list posts with votes.
Return: routes table with METHOD, URL, Request Body, Response.
```

### 5. Controllers & Services (Implementation)
```
Implement the controllers for these routes in Node.js with Express.
Add validation, error handling, and JWT authentication middleware.
Write code for: createPost, listPosts, updatePost, deletePost, addComment, voteOnPost.
```

### 6. Frontend Views (with BEM + SCSS)
```
Generate frontend pages using React with BEM + SCSS architecture.
Pages: login, signup, feed (list posts), post detail (with comments), profile.
Each page should include components (PostCard, CommentBox, NavBar).
Style components with SCSS partials and BEM naming conventions.
```

### 7. Authentication & Security
```
Add JWT authentication to the CRUD app.
- Signup: hash password with bcrypt.
- Login: return JWT.
- Middleware: verify JWT for protected routes.
Add role-based access (admin vs user).
Return updated code for auth flow.
```

### 8. Testing
```
Write Jest test cases for the API endpoints.
Include: signup/login flow, creating posts, updating posts, deleting posts, commenting, voting.
Return test files organized by feature.
Add integration tests using supertest and suggest Playwright E2E test stubs.
```

### 9. Deployment
```
Provide deployment instructions for this CRUD app.
- Use Docker to containerize backend + frontend.
- Use PostgreSQL as DB.
- Provide docker-compose.yml.
- Deployment targets: Render, Vercel, or AWS.
Return full deployment guide with environment variables and commands.
```

---

## Refinement Prompts (Feature Extensions)

### Add Search
```
Add search functionality across posts and comments.
Use PostgreSQL full-text search or ElasticSearch.
Update backend API and frontend UI for search bar and results page.
```

### Performance & Security Refinement
```
Review the current codebase for OWASP Top 10 vulnerabilities.
Suggest improvements for validation, error handling, and rate limiting.
Add Redis caching for hot posts and sessions.
Provide updated code and configuration.
```


---

## Visual Workflow

Pre-Flight Setup (Stack + Folder Structure)  
  ↓  
Ideation (Feature / App Idea)  
  ↓  
User Stories (MoSCoW + Acceptance Criteria)  
  ↓  
Database Schema  
  ↓  
API Routes + Controllers  
  ↓  
Frontend (React + BEM/SCSS)  
  ↓  
Auth & Security (JWT, bcrypt, roles)  
  ↓  
Testing (Unit + Integration + E2E)  
  ↓  
Deployment (Docker + Render/Vercel)  
  ↓  
Refinements (Performance, Caching, Security Audits)

---

## Remix the Playbook

Swap models and features to build different apps:  
- **Twitter Clone** – Replace Posts with Tweets, add follows/retweets.  
- **E-commerce Store** – Replace Posts with Products, add cart/checkout.  
- **Blog Platform** – Replace Posts with Articles, add categories/tags.  
- **Q&A App** – Replace Posts with Questions, add answers and accepted answers.  

---

## Definitions

- **MoSCoW Prioritization:** A method for ranking requirements as Must-have, Should-have, Could-have, and Won’t-have (for now).  
- **JWT (JSON Web Token):** A secure way to transmit user identity and claims, used for authentication/authorization.  
- **BEM (Block-Element-Modifier):** A CSS naming convention that keeps styles modular and predictable.  
- **E2E (End-to-End) Testing:** Tests that simulate real user flows across the full application stack.  
