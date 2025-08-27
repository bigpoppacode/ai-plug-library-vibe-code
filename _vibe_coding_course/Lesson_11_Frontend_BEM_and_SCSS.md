# Lesson 11 – Frontend Architecture: BEM & SCSS

## Learning Objectives
By the end of this lesson, you will be able to:
- Explain **BEM (Block–Element–Modifier)** naming convention.  
- Structure styles with **SCSS partials, variables, and mixins**.  
- Map wireframes → components → BEM class names.  
- Avoid messy, unscalable CSS.  

---

## Part 1: Explain – Why BEM + SCSS?

When building UIs fast with AI, chaos comes quick.  
BEM + SCSS give you structure and predictability:  
- **BEM** = naming convention that keeps components modular.  
- **SCSS** = CSS preprocessor for nesting, variables, and organization.  

BEM Example:  
```html
<article class="card card--featured">
  <h3 class="card__title">Title</h3>
  <p class="card__body">Content...</p>
  <div class="card__actions">
    <button class="button button--primary">Buy</button>
  </div>
</article>
```
- `card` = Block  
- `card__title` = Element  
- `card--featured` = Modifier  

---

## Part 2: Demonstrate – SCSS in Action

**SCSS File Structure**
```
/styles
  /abstracts   // _variables.scss, _mixins.scss
  /components  // _card.scss, _button.scss
  /layout      // _header.scss, _footer.scss
  main.scss    // imports all partials
```

**SCSS Snippets**
```scss
// abstracts/_variables.scss
$color-primary: #6c5ce7;
$space-3: 0.75rem;

// components/_button.scss
.button {
  padding: $space-3 $space-3*2;
  border-radius: 6px;
  &--primary { background: $color-primary; color: #fff; }
}

// components/_card.scss
.card {
  padding: $space-3*2;
  border: 1px solid #eee;
  &--featured { border-color: $color-primary; }
  &__title { font-weight: bold; margin-bottom: $space-3; }
  &__actions { display: flex; gap: $space-3; }
}
```

---

## Part 3: Imitate – From Wireframe to Styles

1. Look at your wireframe for a “Post” card.  
2. Name components: `post`, `post__title`, `post__body`, `post__actions`.  
3. Write SCSS partial `_post.scss` with styling.  
4. Import into `main.scss` and compile.  

Prompt ChatGPT-5:  
```
Generate SCSS for a "post" card using BEM naming.  
Include variables for colors, spacing, and typography.  
```

---

## Part 4: Practice

1. **Refactor Drill**  
   Take a messy CSS file. Rename classes with BEM and split into SCSS partials.  

2. **Consistency Drill**  
   Create a shared `_variables.scss` for colors and spacing.  

3. **Nesting Control**  
   Rewrite SCSS to keep nesting ≤ 3 levels.  

---

## Analogies That Help

- **BEM = Street Address System**: Block = street, Element = house, Modifier = paint color.  
- **SCSS = Kitchen Pantry**: Variables = ingredients, Mixins = recipes, Partials = organized shelves.  

---

## Key Takeaways
- BEM gives **clarity in class naming**.  
- SCSS provides **organization and reusability**.  
- Together, they prevent CSS sprawl.  
- AI-generated UIs become maintainable when you enforce these conventions.
