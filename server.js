const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "courses.html"));
});

app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "team.html"));
});

app.get("/testimonial", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "testimonial.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});