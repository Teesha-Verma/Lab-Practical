const express = require("express");

const app = express();
const PORT = 3000;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader === "admin123") {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};

app.get("/public", (req, res) => {
  res.send("This is a public route");
});

app.get("/private", authMiddleware, (req, res) => {
  res.send("Welcome to private route");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
