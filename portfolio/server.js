/* File: server.js
Student: Adewale Ibrahim
StudentID: 301515732
Date: 2025-09-15
*/

// // portfolio/server.js
// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// // Import Routes
// import homeRoute from "./routes/home.js";
// import aboutRoute from "./routes/about.js";
// import projectsRoute from "./routes/projects.js";
// import servicesRoute from "./routes/services.js";
// import contactRoute from "./routes/contact.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Required for ES Modules to get __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Middleware for parsing form data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve static files (CSS, JS, images)
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// app.use("/", homeRoute);
// app.use("/about", aboutRoute);
// app.use("/projects", projectsRoute);
// app.use("/services", servicesRoute);
// app.use("/contact", contactRoute);

// // 404 Page (optional)
// app.use((req, res) => {
//   res.status(404).send("<h1>404 - Page Not Found</h1><a href='/'>Go Home</a>");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// portfolio/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Import Routes
import homeRoute from "./routes/home.js";
import aboutRoute from "./routes/about.js";
import projectsRoute from "./routes/projects.js";
import servicesRoute from "./routes/services.js";
import contactRoute from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true })); // for form submissions
app.use(express.json());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/projects", projectsRoute);
app.use("/services", servicesRoute);
app.use("/contact", contactRoute);

// 404 Handler
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Not Found" }); 
  // Make a 404.ejs in views/ for better UX
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
