const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const htmlContent = await fs.readFile("./home.html", "utf8");
    res.send(htmlContent);
  } catch (error) {
    res.status(500).send("Error reading the file");
  }
});

// Export app for testing
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
