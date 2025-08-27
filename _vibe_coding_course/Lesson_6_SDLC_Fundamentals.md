# Lesson 6 – Software Development Life Cycle (SDLC)

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the phases of the Software Development Life Cycle (SDLC).  
- Compare Waterfall and Agile approaches.  
- Apply Agile practices like sprints, stand-ups, demos, and retrospectives.  
- Integrate CI/CD, testing, and code reviews into the cycle.  

---

## Part 1: Explain – The Development Cycle

The **SDLC** is the structured process for building software:  
1. **Plan** – Define requirements and scope.  
2. **Design** – Architect the system, models, and workflows.  
3. **Build** – Write the code, implement features.  
4. **Test** – Verify with unit, integration, and end-to-end tests.  
5. **Release** – Deploy to production.  
6. **Operate** – Monitor, log, and support users.  
7. **Improve** – Gather feedback, refine backlog, iterate.  

### Waterfall vs Agile
- **Waterfall** – Sequential: finish one phase before the next. Predictable but rigid.  
- **Agile** – Iterative: build in small increments with feedback. Flexible and adaptive.  

**Agile Essentials**:  
- Backlog (prioritized list of work).  
- Sprints (1–2 week iterations).  
- Daily stand-ups (15 min updates).  
- Demos & retrospectives (show progress, improve process).  

---

## Part 2: Demonstrate – Lightweight Agile Flow

Example Sprint (2 weeks):  
- Sprint Goal: “Enable users to comment on posts.”  
- Sprint Backlog: 5 user stories related to comments.  
- During Sprint: branch → PR → code review → tests → merge.  
- End of Sprint: demo comment feature, hold retrospective.  

CI/CD Example:  
- GitHub Actions runs tests on pull requests.  
- On merge to main, deploy to staging.  
- Manual approval → production.  

---

## Part 3: Imitate – Create a Working Agreement

Prompt ChatGPT-5:  
```
Generate a team working agreement for an Agile project.  
Include: branching strategy, code review process, test coverage expectations, and definition of done.  
```

Review the output and adjust it for your team.

---

## Part 4: Practice

1. **Mini Sprint**  
   Run a 5-day sprint for a small feature (like “edit profile”).  
   - Plan: define user story.  
   - Build & Test: implement.  
   - Demo: show results.  
   - Retro: what went well, what to improve.  

2. **Automation Drill**  
   Create a simple GitHub Actions workflow: run `npm test` on every PR.  

3. **Definition of Done**  
   Write your own checklist for when a feature is truly complete.  

---

## Analogies That Help

- **Cooking:** Plan (recipe), Design (prep), Build (cook), Test (taste), Release (serve), Operate (collect plates), Improve (adjust recipe).  
- **Sports Season:** Plan strategy, play games (sprints), review performance, adjust tactics.  

---

## Key Takeaways

- SDLC provides structure for building software.  
- Agile emphasizes iteration, feedback, and flexibility.  
- CI/CD automates testing and deployment, reducing risk.  
- A clear “definition of done” prevents incomplete features from shipping.  
