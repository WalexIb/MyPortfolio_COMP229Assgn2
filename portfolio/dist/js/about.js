/* File: about.js
Student: Adewale Ibrahim
StudentID: 301515732
Date: 2025-09-15
*/

// routes/about.js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", { title: "About Me" });
});

export default router;
