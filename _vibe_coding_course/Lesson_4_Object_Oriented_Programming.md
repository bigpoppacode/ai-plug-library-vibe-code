# Lesson 4 – Object-Oriented Programming (OOP) for Builders

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the four pillars of OOP: encapsulation, abstraction, inheritance, polymorphism.  
- Apply OOP concepts in JavaScript/TypeScript with practical examples.  
- Recognize when to use composition instead of inheritance.  
- Implement strategies and patterns that keep systems flexible.  

---

## Part 1: Explain – OOP in Plain English

**Encapsulation** – Keep data and functions that operate on it together. Example: a `User` object with fields and methods.  

**Abstraction** – Hide complexity behind a simple interface. Example: `Database.save()` instead of raw SQL.  

**Inheritance** – A class derives from another class. Example: `AdminUser` extends `User`.  

**Polymorphism** – One interface, multiple implementations. Example: `PaymentStrategy` interface with `PayPal`, `Stripe`, `Crypto` implementations.  

👉 In practice: prefer **composition** (building objects out of smaller pieces) instead of deep inheritance chains, which can create rigid hierarchies.

---

## Part 2: Demonstrate – TypeScript Example

```ts
// Strategy interface
interface PriceStrategy { price(base: number): number; }

// Concrete strategies
class FixedPrice implements PriceStrategy { price(base: number) { return base; } }
class DiscountPrice implements PriceStrategy {
  constructor(private pct: number) {}
  price(base: number) { return base * (1 - this.pct); }
}

// Product class using composition
class Product {
  constructor(public name: string, private strategy: PriceStrategy) {}
  total(base: number) { return this.strategy.price(base); }
}

// Usage
const book = new Product("Handbook", new DiscountPrice(0.15));
console.log(book.total(100)); // 85
```

Here we use **polymorphism** (different pricing strategies) via an interface.  
We avoid `if` statements scattered across the code — logic lives inside objects.

---

## Part 3: Imitate – Refactor with Composition

Prompt ChatGPT-5:  
```
Refactor a discount calculator that uses if/else into a strategy pattern with interfaces in TypeScript.  
Include 3 strategies: PercentageDiscount, BuyOneGetOneFree, FreeShipping.  
```

Compare the results with your old code. Notice how adding new strategies is now easy.

---

## Part 4: Practice

1. **Exercise:** Write a `Notification` interface with implementations for Email, SMS, and Push.  
2. **Prompt Drill:**  
   ```
   Create a TypeScript class for a BankAccount with deposit, withdraw, and getBalance methods.  
   Add overdraft protection.  
   ```  
3. **Reflection:** Identify one area in your project where OOP could simplify logic.

---

## SOLID Principles (Quick Glance)

- **S**ingle Responsibility – Each class has one reason to change.  
- **O**pen/Closed – Open to extend, closed to modify.  
- **L**iskov Substitution – Subclasses must honor parent contracts.  
- **I**nterface Segregation – Many small interfaces > one fat interface.  
- **D**ependency Inversion – Depend on abstractions, not concretions.  

---

## Analogies That Help

- **Toolbox:** Each tool (class) is designed for a purpose. You don’t need to know how it’s built to use it.  
- **Car:** Engine = encapsulation, driver controls = abstraction, ElectricCar vs GasCar = polymorphism.  
- **Restaurant:** Chef = superclass, PastryChef extends Chef = inheritance.  

---

## Key Takeaways

- OOP organizes code into objects that combine state and behavior.  
- Use encapsulation, abstraction, inheritance, and polymorphism wisely.  
- Prefer **composition** to avoid deep inheritance problems.  
- With ChatGPT-5 and Cursor, you can scaffold OOP structures quickly — but review carefully.
