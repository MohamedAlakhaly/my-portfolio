import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import About from "./pages/about.jsx";
import Certifications from "./pages/certifications.jsx";
import Projects from "./pages/projects.jsx";
import ProjectsDetails from "./pages/projects_details";
import Contact from "./pages/contact.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/my-portfolio/" element={<Home />} />
      <Route path="/my-portfolio/services" element={<Services />} />
      <Route path="/my-portfolio/about" element={<About />} />
      <Route path="/my-portfolio/certifications" element={<Certifications />} />
      <Route path="/my-portfolio/projects" element={<Projects />} />
      <Route path="/my-portfolio/projects/:id" element={<ProjectsDetails />} />
      <Route path="/my-portfolio/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
