# Lesson 1 – What is Vibe Coding?

## Learning Objectives
By the end of this lesson, you will be able to:
- Define **Vibe Coding** and explain how it differs from traditional coding.  
- Understand the mindset of designing before coding.  
- Recognize the flow: intent → AI instruction → review → refine → test.  
- Apply the philosophy to your own coding sessions.

---

## Part 1: Explain – What is Vibe Coding?

**Vibe Coding** is a philosophy of building software where:  
- You start with **high-level intent** (“I want a Reddit-style app”).  
- You **instruct AI** (Cursor + ChatGPT-5) step by step to create models, controllers, routes, and views.  
- You **review** AI’s output carefully.  
- You **refine** prompts to improve.  
- You **test** functionality manually and with automated tests.  

It’s about **working with AI as a collaborator** rather than coding everything from scratch.

---

## Part 2: Demonstrate – A Simple Flow

Example:  
Prompt in Cursor:  
```
Generate a Node.js Express route for GET /hello that returns "Hello World".
```

AI Output:  
```js
app.get('/hello', (req, res) => {
  res.send('Hello World');
});
```

You review the code → test it → deploy it.  
That’s vibe coding: quick intent → output → refinement.

---

## Part 3: Imitate – Try It Yourself

Open Cursor or ChatGPT-5. Prompt:  
```
Create a simple API with one endpoint: GET /ping should return { "status": "ok" } in JSON.
```

Run the code locally. Did it work the first time? If not, refine your prompt.

---

## Part 4: Practice

1. **Intent Exercise**  
   Write down one app idea in a single sentence (e.g., “A blog with comments”).  
   Convert it into a prompt for ChatGPT-5 to scaffold.  

2. **Prompt-Refine Drill**  
   Ask for an API route. Then refine: add validation, error handling, or logging.  

3. **Test Flow**  
   Run your generated code. Write down what worked, what broke, and how you fixed it.

---

## Analogies That Help

- **Conductor & Orchestra:** You give cues, AI plays the instruments.  
- **Architect & Builders:** You design high-level; AI generates the bricks.  
- **Collaborative Partner:** AI is like a fast but junior dev — great at scaffolding, needs review.

---

## Key Takeaways

- Vibe Coding = **design first, instruct AI, review, refine, test**.  
- The goal is not to avoid coding, but to **accelerate building**.  
- With the right flow, you can go from idea → working feature in minutes.  
- Treat AI as a collaborator, not an oracle.
