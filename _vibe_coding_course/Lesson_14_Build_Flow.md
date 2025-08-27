# Lesson 14 – The Vibe Coding Build Flow

## Learning Objectives
By the end of this lesson, you will be able to:
- Apply the step-by-step build flow for vibe coding projects.  
- Combine design-first thinking with AI-assisted building.  
- Use checklists to ensure quality and security before shipping.  
- Build confidence in delivering features quickly and iteratively.  

---

## Part 1: Explain – The Build Flow

The **Vibe Coding Build Flow** is a disciplined loop:  

1. **Design** – Start with intent and user stories.  
2. **Build** – Use Cursor + ChatGPT-5 to scaffold code (models, routes, controllers, views).  
3. **Review** – Check AI’s output for correctness, clarity, and security.  
4. **Test** – Run code, write tests, confirm functionality.  
5. **Refine** – Improve prompts, add validation, handle edge cases.  
6. **Ship** – Commit code, deploy to staging/production.  

This loop repeats for every feature until the app is complete.

---

## Part 2: Demonstrate – Example Build Flow

Feature: *“As a user, I want to create a post.”*  

- **Design:** Write a user story + acceptance criteria.  
- **Build:** Prompt AI to create Post model, routes, and controllers.  
- **Review:** Check that fields match requirements and validation is added.  
- **Test:** Create Jest tests for post creation. Run them.  
- **Refine:** Add error handling (e.g., title required, body min length).  
- **Ship:** Deploy feature to staging.  

---

## Part 3: Imitate – Try It Yourself

Prompt ChatGPT-5:  
```
Generate Express.js CRUD routes and controllers for a Comment model.  
Add validation: body must be at least 5 characters.  
```

Run code in Cursor. Test with Postman. Review and refine.  

---

## Part 4: Practice

1. **Checklist Drill**  
   Write a personal checklist for each feature:  
   - Story written?  
   - Code scaffolded?  
   - Tests passing?  
   - Reviewed for security?  
   - Committed and pushed?  

2. **Pre-Commit Drill**  
   Create a Git pre-commit hook to run tests before commits.  

3. **Mini Release Drill**  
   Deploy one feature (like profile bio) to a staging environment.  

---

## Pre-Commit Checklist

- [ ] User story documented.  
- [ ] Schema updated.  
- [ ] Routes/controllers built.  
- [ ] Tests written and passing.  
- [ ] Code linted.  
- [ ] Secrets safe (no API keys in code).  

## Release Checklist

- [ ] Environment variables documented.  
- [ ] DB migration tested.  
- [ ] Rollback plan written.  
- [ ] Alerts/monitoring enabled.  

---

## Analogies That Help

- **Cooking:** Design = recipe, Build = cooking, Review = tasting, Test = serving small sample, Ship = serving guests.  
- **Sports Drill:** Each feature = one play; practice → execute → review tape → refine.  

---

## Key Takeaways

- The Build Flow keeps vibe coding structured and iterative.  
- Always design first, then build, review, test, refine, and ship.  
- Use checklists to catch mistakes before release.  
- Shipping often builds momentum and confidence.  
