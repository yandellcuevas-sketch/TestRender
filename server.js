const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const cursos = [
    {
        titulo: "Web Design & Development for Beginners",
        precio: "$149.00",
        instructor: "Yandell Cuevas",
        duracion: "1.49 Hrs",
        estudiantes: "30 Students",
        imagen: "/img/course-1.jpg",
        rating: "(123)"
    },
    {
        titulo: "Graphic Design Fundamentals",
        precio: "$149.00",
        instructor: "John Wick",
        duracion: "1.49 Hrs",
        estudiantes: "30 Students",
        imagen: "/img/course-2.jpg",
        rating: "(123)"
    },
    {
        titulo: "Digital Marketing Course",
        precio: "$149.00",
        instructor: "Manon",
        duracion: "1.49 Hrs",
        estudiantes: "30 Students",
        imagen: "/img/course-3.jpg",
        rating: "(123)"
    }
];

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home - eLEARNING",
        currentPage: "home",
        cursos
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About - eLEARNING",
        currentPage: "about"
    });
});

app.get("/courses", (req, res) => {
    res.render("courses", {
        title: "Courses - eLEARNING",
        currentPage: "courses",
        cursos
    });
});

app.get("/team", (req, res) => {
    res.render("team", {
        title: "Team - eLEARNING",
        currentPage: "team"
    });
});

app.get("/testimonial", (req, res) => {
    res.render("testimonial", {
        title: "Testimonial - eLEARNING",
        currentPage: "testimonial"
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact - eLEARNING",
        currentPage: "contact"
    });
});

app.get("/404", (req, res) => {
    res.status(404).render("404", {
        title: "404 - Page Not Found",
        currentPage: "404"
    });
});

app.use((req, res) => {
    res.status(404).render("404", {
        title: "404 - Page Not Found",
        currentPage: "404"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});