# Lesson 15 – The Vibe Coding Playbook (Reddit-style CRUD App)

## Learning Objectives
By the end of this lesson, you will be able to:
- Use a structured set of **prompt templates** to build a fully functional CRUD application.  
- Walk through every step of the flow: setup → ideation → design → build → test → deploy.  
- Apply refinement prompts for performance, security, and scaling.  
- Reuse modular templates to build other apps beyond Reddit.  

---

## Pre-Flight Setup Prompts

### 0. Define Tech Stack & Conventions
Paste this into Cursor before starting:
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

### 9.1 Environment Variables
```
Provide a sample .env file for this project.  
List all variables (DB_URL, JWT_SECRET, REDIS_URL, etc).  
Explain how to manage them securely in production using environment managers.
```

---

## Refinement Prompts (Feature Extensions)

### Add Subreddits
```
Extend the CRUD app to include Subreddits.  
- Users can create subreddits.  
- Posts belong to subreddits.  
- Feed filters by subreddit.  
Update models, routes, controllers, and UI.
```

### Add Moderation
```
Add moderation features to the app.  
- Admins can delete inappropriate posts or comments.  
- Add Role model to distinguish admin from users.  
Update routes and add moderation dashboard.
```

### Add Real-Time Updates
```
Add WebSockets for real-time updates.  
- New posts appear instantly in feed.  
- New comments appear instantly in post detail view.  
Provide updated backend and frontend code.
```

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

## Prompt Skeleton Template (Reusable)

Use this skeleton to adapt the playbook for ANY app (Twitter clone, e-commerce store, blog, etc.):  
```
TASK: [what you want built]
CONTEXT: [tech stack, conventions, file structure]
REQUIREMENTS: [validation, tests, security, performance]
FORMAT: [file structure, code, explanation, deployment notes]
```

---

## Templates for Building Other Apps

Once you complete this, you can **swap context** in the prompts to build other apps:  
- **Twitter Clone:** Replace “posts” with “tweets,” add follows/retweets.  
- **E-Commerce Store:** Replace “posts” with “products,” add cart/checkout.  
- **Blog Platform:** Replace “subreddits” with “categories,” add tags and editors.  
- **Q&A App:** Replace “posts” with “questions,” add answers and accepted answers.

---

## Deliverable for This Lesson
- A fully functional Reddit-style CRUD app.  
- A library of reusable prompts = your **Vibe Coding Playbook**.  
- Ability to adapt the Playbook to other app types.  

---

## Key Takeaways
- The Playbook is a **step-by-step prompt library**.  
- It covers setup, ideation, design, build, test, and deploy.  
- Refinement prompts cover performance, security, and scaling.  
- Prompt Skeleton Template = reusable method for any CRUD app.  
