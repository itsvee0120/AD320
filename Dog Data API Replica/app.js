import express from "express";
import dogFacts from "./dog_facts-1.js";

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Dog Facts API! Use /facts to get some dog facts.");
});

// GET /facts endpoint
app.get("/facts", (req, res) => {
  let { number } = req.query;

  // Validate number query parameter
  if (number) {
    number = parseInt(number);
    if (isNaN(number) || number < 1) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Invalid number parameter. It must be a positive integer.",
        });
    }
    return res.json({ facts: dogFacts.slice(0, number), success: true });
  }

  // Return all facts if no number is specified
  res.json({ facts: dogFacts, success: true });
});

export default app;
