# Lesson 12 – Design Patterns for Builders

## Learning Objectives
By the end of this lesson, you will be able to:
- Recognize common design patterns in software development.  
- Understand how AI coding assistants can scaffold these patterns.  
- Apply the right pattern to the right problem.  
- Build reusable, flexible structures for your apps.  

---

## Part 1: Explain – Why Patterns Matter

Design patterns are **reusable solutions** to common software problems.  
They help:  
- Avoid reinventing the wheel.  
- Improve readability and collaboration.  
- Give AI (Cursor + ChatGPT-5) better context when you ask for help.  

Patterns are **not rules**, but guides. The key is to **use them when they fit**, not everywhere.

---

## Part 2: Demonstrate – Common Patterns

### 1. Singleton
One instance globally accessible.  
```ts
class Database {
  private static instance: Database;
  private constructor() {}
  static getInstance() {
    if (!Database.instance) Database.instance = new Database();
    return Database.instance;
  }
}
```

### 2. Factory
Creates objects without exposing creation logic.  
```ts
class UserFactory {
  static create(type: string) {
    if (type === "admin") return { role: "admin" };
    return { role: "user" };
  }
}
```

### 3. Adapter
Makes incompatible interfaces work together.  
```ts
class OldAPI { fetchData() { return "old"; } }
class NewAPI { getData() { return "new"; } }
class APIAdapter {
  constructor(private api: NewAPI) {}
  fetchData() { return this.api.getData(); }
}
```

### 4. Repository
Separates persistence logic from business logic.  
```ts
class UserRepository {
  async findById(id: number) { return User.findOne({ where: { id } }); }
  async save(user: any) { return User.create(user); }
}
```

### 5. Observer (Pub/Sub)
Objects subscribe to events.  
```ts
class EventEmitter {
  private listeners: { [key: string]: Function[] } = {};
  on(event: string, fn: Function) {
    (this.listeners[event] ||= []).push(fn);
  }
  emit(event: string, data: any) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }
}
```

---

## Part 3: Imitate – Ask AI for Patterns

Prompt ChatGPT-5:  
```
Refactor my code to use the Repository pattern for managing Posts in a CRUD app.  
Separate DB queries from controllers.  
```

Then review the code. Does it improve clarity and testability?

---

## Part 4: Practice

1. **Factory Drill**  
   Build a factory that creates different notification types (Email, SMS, Push).  

2. **Adapter Drill**  
   Write an adapter that makes an old API (`getUser()`) compatible with a new one (`fetchUser()`).  

3. **Observer Drill**  
   Add an event system to your app: log an event every time a post is created.  

---

## Analogies That Help

- **Adapter = Translator:** Two people speak different languages; adapter translates.  
- **Factory = Pizza Kitchen:** You order a type; factory produces it.  
- **Observer = News Subscriber:** Publisher sends news to all subscribers.  

---

## Key Takeaways

- Design patterns = reusable templates for common problems.  
- AI tools can scaffold these patterns for you, but you must review them.  
- Singleton, Factory, Adapter, Repository, and Observer are widely applicable.  
- Patterns make code flexible, testable, and maintainable.  
