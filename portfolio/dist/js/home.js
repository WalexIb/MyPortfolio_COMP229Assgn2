/* File: home.js
Student: Adewale Ibrahim
StudentID: 301515732
Date: 2025-09-15
*/

import express from "express";
const router = express.Router();

// GET -> Home page
router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

export default router;
