import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Route handling for Root path
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route handler for /about path
app.get("/about", (req, res) => {
  res.send("About page");
});

// Conditional Routing
app.get("/foo", (req, res, next) => {
  if (Math.random() < 0.5) {
    res.send("sometimes this");
  } else {
    next(); // Pass control to the next applicable route
  }
});

// Conditional /foo - Second Handler
app.get("/foo", (req, res) => {
  res.send("and sometimes that");
});

// Regex match for /user or /username
app.get(/^\/user(name)?$/, (req, res) => {
  res.send("Matched /user or /username");
});

// Dynamic route with parameter
app.get("/user/:username", (req, res) => {
  const { username } = req.params; // Object destructuring
  res.send(`Hello ${username}`);
});

// Handle query strings and log them
app.get("/get", (req, res) => {
  console.log("Query Params Received:", req.query);
  res.send("Query parameters logged to console. Check your terminal!");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
