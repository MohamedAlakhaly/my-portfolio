import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import About from "./pages/about.jsx";
import Certifications from "./pages/certifications.jsx";
import Projects from "./pages/projects.jsx";
import ProjectsDetails from "./pages/projects_details";
import Contact from "./pages/contact.jsx";
import ScrollToTop from "./pages/scroll-to-top.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectsDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
