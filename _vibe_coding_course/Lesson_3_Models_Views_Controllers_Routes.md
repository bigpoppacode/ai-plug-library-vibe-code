# Lesson 3 – Models, Views, Controllers, Routes (MVC)

## Learning Objectives
By the end of this lesson, you will be able to:
- Explain the **MVC pattern** and why it’s useful for organizing applications.  
- Identify the roles of Models, Views, Controllers, and Routes.  
- Map user stories into MVC components.  
- Scaffold a simple MVC structure with AI assistance.  

---

## Part 1: Explain – What is MVC?

MVC = **Models, Views, Controllers** (with Routes as the glue).  
It’s a way of structuring applications for clarity and scalability.  

- **Model**: Manages data and business logic. (Database tables, schemas, ORM models)  
- **View**: Handles presentation. (HTML, React components, SCSS styles)  
- **Controller**: Orchestrates logic between models and views. (Functions that process requests)  
- **Routes**: Define URL paths and map them to controllers.  

**Why MVC?**  
- Clear separation of concerns.  
- Easier to scale and maintain.  
- Aligns with user stories → features → endpoints.  

---

## Part 2: Demonstrate – Example Flow

User story: *“As a user, I want to create a post so that I can share content.”*  

- **Route**: `POST /posts`  
- **Controller**: `createPost()` → validate input, call model, return response.  
- **Model**: `Post { id, userId, title, body, createdAt }`  
- **View**: UI form to enter post data; feed to display posts.  

Example Express.js snippet:  
```js
// routes/posts.js
router.post('/posts', postController.createPost);

// controllers/postController.js
exports.createPost = async (req, res) => {
  const { title, body } = req.body;
  const newPost = await Post.create({ title, body, userId: req.user.id });
  res.json(newPost);
};

// models/Post.js
const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
  userId: DataTypes.INTEGER
});
```

---

## Part 3: Imitate – Build a Feature with MVC

Prompt ChatGPT-5:  
```
Scaffold an Express.js MVC structure for a "Todo App".  
Requirements:  
- Model: Todo (id, title, completed).  
- Routes: GET /todos, POST /todos.  
- Controller functions: listTodos, addTodo.  
- Views: simple HTML or React component to display todos.  
```

Run the code in Cursor and check how each piece connects.

---

## Part 4: Practice

1. **Map a Story**  
   Take the story: *“As a user, I want to leave a comment on a post.”*  
   - Define the Route, Controller, Model, and View.  

2. **Prompt Drill**  
   Ask ChatGPT-5:  
   ```
   Generate a simple MVC structure for a Notes app with User and Note models.  
   ```

3. **Code Review**  
   After generating, ask ChatGPT-5:  
   ```
   Review this MVC code for structure and suggest improvements.  
   ```

---

## Analogies That Help

- **Restaurant**: Model = kitchen (data), View = dining area (presentation), Controller = waiter (logic), Route = menu (paths).  
- **Car**: Model = engine, View = dashboard, Controller = driver, Route = GPS directions.  

---

## Key Takeaways

- MVC = separation of concerns (Models = data, Views = UI, Controllers = logic, Routes = mapping).  
- Every user story maps to Routes → Controllers → Models → Views.  
- With AI tools, scaffolding MVC is fast — but you must review and refine.  
- MVC is the backbone of most CRUD apps (like Reddit, Twitter, etc.).
