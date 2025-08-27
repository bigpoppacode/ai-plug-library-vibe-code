# Lesson 2 – How LLMs Work (High-Level)

## Learning Objectives
By the end of this lesson, you will be able to:
- Describe how LLMs process tokens and context windows.
- Understand why prompt design and constraints matter.
- Differentiate between “prediction” and “reasoning” in model outputs.
- Conduct small experiments to see how changing context changes results.

---

## Part 1: Explain

At their core, LLMs are **probability machines**.

- **Tokens**: LLMs break text into small pieces called tokens (often 2–4 characters or chunks of a word).  
- **Prediction**: For each new token, the model calculates probabilities for all possible next tokens.  
- **Context Window**: The model only “sees” a limited amount of tokens at a time. This is like its short-term memory. GPT-4 has ~8k to 32k tokens. GPT-5 has even larger.  
- **Patterns, not knowledge**: LLMs don’t retrieve facts. They assemble sequences that *look right* based on training.

---

## Part 2: Demonstrate

Try this inside ChatGPT:

```
Explain gravity in 2 sentences.
```

Then ask:

```
Make it sound like a pirate.
```

Notice:
- Same concept.  
- Style shifts based on your added context.  
- This shows how the model predicts based on **instructions + previous text**.

---

## Part 3: Imitate

You can teach the model to adopt your style with consistent prompts.

Example:

```
You are my writing assistant.
Always use:
- Short sentences.
- Clear structure.
- No jargon.
```

Now test it:
```
Write a 150-word intro about remote work.
```

Check how it follows your style rules.

---

## Part 4: Practice

1. **Prompt Length Experiment**  
   Ask:  
   ```
   Write me a 2-sentence summary of the book "The Hobbit."
   ```  
   Then:  
   ```
   Write me a 500-word essay on "The Hobbit."
   ```  
   → Notice how the model adapts length based on constraints.

2. **Context Window Demo**  
   Give it a long list of instructions. Ask for a summary at the end.  
   Then remove half the instructions and ask again.  
   → Notice differences when less context is provided.

3. **Role Influence**  
   Prompt:  
   ```
   You are a stand-up comedian. Explain cloud computing.
   ```  
   Then:  
   ```
   You are a university professor. Explain cloud computing.
   ```  
   → Compare tone and vocabulary.

---

## Analogies That Help

- **Predictive text on your phone** but with more power.  
- **Chess player**: It doesn’t know the future, but predicts the most likely next move.  
- **Short-term memory**: The model forgets what it can’t “see” in the context window.

---

## Exercises

- Explain “How LLMs Work” in **one paragraph for a CEO**.  
- Rewrite the same explanation for a **10-year-old child**.  
- List 3 things that happen when your context window runs out.  

---

## Key Takeaways

- LLMs don’t *think*; they *predict*.  
- Tokens = building blocks. Context window = short-term memory.  
- Prompt design directly influences output style, structure, and length.  
- Reasoning is often an *illusion* of prediction — so always validate results.
