# Lesson 10 – Security Essentials

## Learning Objectives
By the end of this lesson, you will be able to:
- Identify common security vulnerabilities (OWASP Top 10).  
- Implement input validation and sanitization.  
- Manage secrets securely in your application.  
- Differentiate between authentication and authorization.  
- Apply basic protections like HTTPS, rate limiting, and password hashing.  

---

## Part 1: Explain – Core Security Concepts

**OWASP Top Concerns (simplified):**  
- **Injection** (SQL/NoSQL injection).  
- **Broken Authentication**.  
- **Sensitive Data Exposure**.  
- **Broken Access Control**.  
- **Cross-Site Scripting (XSS)**.  
- **Cross-Site Request Forgery (CSRF)**.  

**Key Practices:**  
- **Input Validation** – Never trust client input.  
- **Secrets Management** – Don’t hardcode API keys or passwords in code. Use environment variables or secret managers.  
- **Authentication** – Verifying identity (login).  
- **Authorization** – Verifying permissions (can this user perform this action?).  
- **Hashing Passwords** – Use bcrypt or argon2, never store plaintext passwords.  
- **Transport Security** – Always use HTTPS for encrypted communication.  

---

## Part 2: Demonstrate – Secure Authentication Flow

Prompt ChatGPT-5:  
```
Generate Express.js routes for signup and login.  
- Use bcrypt to hash passwords on signup.  
- Use JWT for authentication on login.  
- Store JWT in HTTP-only cookies.  
```

Expected snippet:  
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ username, password: hash });
  res.json({ message: "User created" });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.cookie("token", token, { httpOnly: true });
  res.json({ message: "Logged in" });
});
```

---

## Part 3: Imitate – Secure Routes

Prompt:  
```
Add middleware to verify JWT tokens on protected routes in Express.js.  
If invalid, return 401 Unauthorized.  
```

Use this middleware on routes like `/posts/create` or `/admin`.  

---

## Part 4: Practice

1. **Password Drill**  
   Implement bcrypt hashing in your signup route.  

2. **Auth Drill**  
   Add role-based access control: normal users vs admins.  

3. **Vulnerability Drill**  
   Prompt ChatGPT-5:  
   ```
   Review this Express.js code for OWASP Top 10 vulnerabilities. Suggest fixes.  
   ```

---

## Analogies That Help

- **House Security:** Authentication = checking ID at the door. Authorization = deciding which rooms the guest can enter.  
- **Locks & Keys:** Passwords are like keys; hashing stores only the key’s fingerprint.  
- **HTTPS:** Like sending mail in a locked envelope vs a postcard.  

---

## Key Takeaways

- Secure apps require **input validation, secret management, and proper auth**.  
- Authentication = identity; Authorization = permission.  
- Hash passwords with bcrypt or argon2.  
- Use HTTPS, rate limiting, and review code against OWASP Top 10.  
