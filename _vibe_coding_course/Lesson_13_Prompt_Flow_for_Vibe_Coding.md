# Lesson 13 – Prompt Flow for Vibe Coding

## Learning Objectives
By the end of this lesson, you will be able to:
- Use structured prompt flows to guide AI through the development lifecycle.  
- Apply prompts for ideation, user stories, schema design, controllers, frontend, and testing.  
- Recognize how to chain prompts for iterative building.  
- Build confidence in delegating coding tasks to AI while staying in control.  

---

## Part 1: Explain – Why Prompt Flow?

Vibe Coding isn’t random prompting. It’s a **disciplined sequence**:  
1. **Intent** – What are we building?  
2. **Decompose** – Break down into user stories and models.  
3. **Scaffold** – Ask AI to generate schema, routes, controllers, views.  
4. **Refine** – Add validation, error handling, and polish.  
5. **Test** – Ensure functionality works.  
6. **Repeat** – Iterate until feature is solid.  

Prompt Flow = turning your **thought process into reusable prompt templates**.

---

## Part 2: Demonstrate – Example Flow

### Step 1 – Ideation
```
You are a product founder. Propose 3 app ideas for a community platform.  
For each, include key features, target audience, and value proposition.  
```

### Step 2 – User Stories
```
Write 5 user stories for a Reddit-style app.  
Format: As a [role], I want [feature], so that [benefit].  
Include acceptance criteria in Given–When–Then format.  
```

### Step 3 – Database Schema
```
Design a Postgres schema for a Reddit-style app with Users, Posts, Comments, Votes.  
Return as SQL CREATE TABLE statements.  
```

### Step 4 – Routes & Controllers
```
Generate Express.js routes and controllers for CRUD operations on Posts.  
Include validation and error handling.  
```

### Step 5 – Frontend
```
Generate React components styled with BEM + SCSS for PostCard and CommentBox.  
```

### Step 6 – Testing
```
Write Jest tests for the PostController covering create, update, delete, and list.  
```

---

## Part 3: Imitate – Run the Flow Yourself

Pick a feature (e.g., “favorites list”) and run through the flow:  
1. Prompt for user story.  
2. Prompt for schema update.  
3. Prompt for routes/controllers.  
4. Prompt for frontend view.  
5. Prompt for tests.  

Review at each stage and refine prompts as needed.

---

## Part 4: Practice

1. **Flow Drill**  
   Pick any small feature (profile bio, tags, likes). Run full flow.  

2. **Refinement Drill**  
   Ask AI to add validation, error handling, or security to existing code.  

3. **Chain Drill**  
   Take AI’s output from one step (schema) and paste it into the next prompt (controllers). Notice the compounding effect.  

---

## Analogies That Help

- **Blueprint → Construction → Inspection:** Prompt Flow = blueprinting with prompts, building code, inspecting results.  
- **Assembly Line:** Each step (prompt) adds a piece until the app is complete.  
- **Chess Moves:** Each prompt sets up the next move; strategy matters.  

---

## Key Takeaways

- Prompt Flow = **structured prompting** across the build lifecycle.  
- Ideation → Stories → Schema → Routes → Frontend → Tests.  
- Chaining prompts creates a smooth flow from concept to code.  
- Review + refine at each stage: AI is fast, you are quality control.  
