# Lesson 7 – User Stories & Acceptance Criteria

## Learning Objectives
By the end of this lesson, you will be able to:
- Write clear user stories in the standard format.  
- Apply the INVEST and MoSCoW frameworks for better story slicing and prioritization.  
- Define acceptance criteria with the Given–When–Then method.  
- Map user stories directly into routes, controllers, views, and tests.  

---

## Part 1: Explain – The Story Format

A **user story** captures a feature from the user’s perspective:  

**Template**  
_As a [role], I want [feature], so that [benefit]._  

**Example**  
_As a logged-in user, I want to create a post so that I can share ideas with the community._  

### INVEST Framework  
- **I**ndependent – Can be built separately.  
- **N**egotiable – Open to discussion.  
- **V**aluable – Provides value to the user.  
- **E**stimable – Can be estimated for effort.  
- **S**mall – Small enough to deliver in a sprint.  
- **T**estable – Has clear criteria for success.  

### MoSCoW Prioritization  
- **Must have**  
- **Should have**  
- **Could have**  
- **Won’t have (for now)**  

---

## Part 2: Demonstrate – Example Story with Criteria

**Story**  
_As a logged-in user, I want to save posts to a “Favorites” list so that I can read them later._  

**Acceptance Criteria (Given–When–Then)**  
```
Given I am logged in
When I click "Save" on a post
Then that post appears in my Favorites list
And the Save button changes to "Saved"
```

Mapping to MVC:  
- **Route**: POST /favorites/:id  
- **Controller**: addFavorite()  
- **Model**: Favorite { userId, postId, createdAt }  
- **View**: Save button on post card, Favorites page in profile  

---

## Part 3: Imitate – Write Your Own

Prompt ChatGPT-5:  
```
Write 5 user stories for a Reddit-style app.  
For each, include acceptance criteria in Given–When–Then format.  
Prioritize with MoSCoW.  
```

Review the output. Are the stories small, clear, and testable?

---

## Part 4: Practice

1. **Story Drill**  
   Write 3 stories for your app idea.  
   Apply INVEST to check quality.  

2. **Acceptance Criteria Drill**  
   For each story, add Given–When–Then scenarios.  

3. **Mapping Exercise**  
   Take one story and map it to Routes, Controllers, Models, Views, and Tests.  

---

## Analogies That Help

- **Movie Script:** A user story is like a short script: role (actor), goal (plot), benefit (why).  
- **Checklist:** Acceptance criteria are the checklist to know when the scene is complete.  
- **Blueprint:** User stories are blueprints → devs build according to spec.  

---

## Key Takeaways

- User stories keep development **focused on user value**.  
- INVEST ensures stories are independent, valuable, and testable.  
- MoSCoW helps prioritize what to build first.  
- Acceptance criteria make stories verifiable and mappable into code.  
