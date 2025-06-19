const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from CI/CD App!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
