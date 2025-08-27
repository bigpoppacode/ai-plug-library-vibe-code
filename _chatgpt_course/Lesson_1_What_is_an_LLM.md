# Lesson 1 – What is an LLM?

## Learning Objectives
By the end of this lesson, you will be able to:
- Define what a Large Language Model (LLM) is.
- Explain in simple terms how LLMs generate text.
- Give real-world analogies that make the concept stick.
- Demonstrate a basic experiment that shows prediction in action.

---

## Part 1: Explain

A **Large Language Model (LLM)** is an artificial intelligence system trained on massive amounts of text.  
Its core function is simple: **predict the next token** (a word or part of a word) in a sequence.

Think of it like this:
- If I start a sentence with *“Peanut butter and…”* most people (and the model) would guess *“jelly”*.  
- That’s because “jelly” has a **high probability** of coming next given the training data.

LLMs don’t “think” or “understand” in the human sense. Instead, they are like **very advanced autocomplete systems**.  
They use statistics, probability, and learned patterns from trillions of words to generate coherent responses.

---

## Part 2: Demonstrate

Try this experiment inside ChatGPT:

```
Finish this sentence: "The sun rises in the..."
```

ChatGPT will almost always say **“east”**. Why? Because in the billions of texts it trained on, “east” is overwhelmingly likely to follow that phrase.

Another example:

```
Write the next 5 words: "Twinkle twinkle little..."
```

It will predict *“star, how I wonder what”*.  
Again, it doesn’t “know” the song — it simply saw this sequence often and learned the pattern.

---

## Part 3: Imitate

Now you try giving it prompts that force it to make predictions in different contexts.

Examples:
1. **Simple Fact Prediction**  
   ```
   Continue the sentence: "Water boils at..."
   ```
   Expect: “100 degrees Celsius” or similar.

2. **Creative Prediction**  
   ```
   Finish the story: "The wizard raised his wand and..."
   ```
   Watch how it invents a continuation.

3. **Multi-Option Prediction**  
   ```
   Finish the phrase: "Peanut butter and..."
   ```
   Ask ChatGPT to give 5 different possible completions.  
   Notice how some are more common (*jelly*) while others are rarer (*bananas*, *honey*).

---

## Part 4: Practice

Here are practice drills you can do to reinforce your understanding:

1. **Explain it to a child**  
   Try:  
   ```
   Explain what a Large Language Model is to a 7-year-old using a food analogy.
   ```

2. **Test prediction vs. reasoning**  
   Ask:  
   ```
   2 + 2 = ?
   ```
   Then:  
   ```
   What is 2345 x 678?
   ```
   Notice how math may falter because prediction ≠ calculation.

3. **Explore token behavior**  
   Ask:  
   ```
   Explain what the word "unbelievable" would look like as tokens.
   ```
   (LLMs break words into sub-parts called tokens, e.g., “un”, “believe”, “able”.)

---

## Analogies That Help

- **Autocomplete on steroids:** Like when your phone suggests the next word, but trained on far more text.  
- **Storyteller with memory:** It remembers how words usually flow and continues the story.  
- **Musician playing notes:** It doesn’t *know* music, but it’s learned which notes sound good after others.

---

## Exercises

- In your own words, explain what an LLM is in **one tweet (280 characters)**.  
- Create 3 prompts that highlight how LLMs “predict” vs. “understand.”  
- Share one analogy for LLMs that would make sense to your parents or a non-technical friend.  

---

## Key Takeaways

- An LLM is a **pattern predictor**, not a human thinker.  
- Its power comes from being trained on **huge datasets**.  
- It works by **guessing the next most probable token**.  
- Good prompting is about giving it the right context so its guesses align with your goals.
