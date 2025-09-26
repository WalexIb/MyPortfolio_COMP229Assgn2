import ejs from "ejs";
import fs from "fs-extra";
import path from "path";

// Create dist folder if it doesn't exist
const distDir = path.join("dist");
await fs.ensureDir(distDir);

// Copy public assets
await fs.copy("public", distDir);

// JSON data
const servicesData = await fs.readJson("data/services.json");
const projectsData = await fs.readJson("data/projects.json");

// Helper function to render EJS to HTML
async function render(template, data, output) {
  const templatePath = path.join("views", template);
  const html = await ejs.renderFile(templatePath, data);
  await fs.outputFile(path.join(distDir, output), html);
  console.log(`${output} generated!`);
}

// Render all pages
await render("home.ejs", {}, "index.html");
await render("about.ejs", {}, "about.html");
await render("contact.ejs", {}, "contact.html");
await render("services.ejs", { services: servicesData }, "services.html");
await render("projects.ejs", { projects: projectsData }, "projects.html");

console.log("All pages generated in dist/!");
