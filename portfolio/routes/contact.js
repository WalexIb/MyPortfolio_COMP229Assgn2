/* File: contact.js
Student: Adewale Ibrahim
StudentID: 301515732
Date: 2025-09-15
*/

// routes/contact.js
import express from "express";
const router = express.Router();

// GET -> Show the contact page
router.get("/", (req, res) => {
  res.render("contact", { title: "Contact Me" });
});

// POST -> Handle form submission
router.post("/", (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  console.log("Form Submitted:", { firstName, lastName, phone, email, message });

  // In real-world: Save to DB or send email
  res.send("<h2>Thank you for your message! ✅</h2><a href='/'>Back to Home</a>");
});

export default router;
