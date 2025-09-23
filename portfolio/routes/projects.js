/* File: project.js
Student: Adewale Ibrahim
StudentID: 301515732
Date: 2025-09-15
*/

import express from "express";
const router = express.Router();

// GET -> Projects page
router.get("/", (req, res) => {
  const projects = [
    {
      title: "Auto Sales Website",
      image: "/images/projects/project1.jpg",
      description: "Designed and developed a responsive, user-focused auto sales website showcasing available inventory with detailed listings for each vehicle."
    },
    {
      title: "SRS Documentation - Smart Fitness App",
      image: "/images/projects/project2.jpg",
      description: "Collaborated with an Agile team to produce a clear and comprehensive SRS document for the Smart Fitness App, ensuring alignment between user needs, functional requirements, and development goals."
    },
    {
      title: "Portfolio Website",
      image: "/images/projects/project3.jpg",
      description: "This personal portfolio site showcases my skills, services, and projects. I designed and coded it using React, CSS, and modern responsive practices."
    }
  ];

  res.render("projects", { title: "Projects", projects });
});

export default router;
