const express = require("express");
const app = express();
const port = 3000;

// Routes
app.get("/", (req, res) => {
  res.send("Hello from CI/CD App!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Only listen if run directly (not during tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;
