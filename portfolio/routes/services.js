/* File: services.js
Student: Adewale Ibrahim
StudentID: 301515732
Date: 2025-09-15
*/


// routes/services.js
import express from "express";
const router = express.Router();

// Define Services page route
router.get("/", (req, res) => {
  const services = [
    {
      title: "Web Development",
      image: "/assets/services/webdev.jpg",
      description: "Building responsive, modern websites using React, HTML, CSS, and JavaScript."
    },
    {
      title: "Mobile App Development",
      image: "/assets/services/mobile.jpg",
      description: "Designing cross-platform mobile apps with user-friendly interfaces and smooth performance."
    },
    {
      title: "AI & Software Solutions",
      image: "/assets/services/ai.jpg",
      description: "Creating AI-driven applications, automation tools, and custom software solutions."
    }
  ];

  // Render the services.ejs file and pass in data
  res.render("services", { services });
});

export default router;
