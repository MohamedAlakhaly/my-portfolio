import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/my-portfolio">
    <Routes >
      <Route path="/my-portfolio/" element={<Home />} />
    </Routes>

    <Routes>
      <Route path="/my-portfolio/services" element={<Services />} />
    </Routes>


    <Routes>
      <Route path="/my-portfolio/about" element={<About />} />
    </Routes>

    <Routes>
      <Route path="/my-portfolio/projects" element={<Projects />} />
    </Routes>

    <Routes>
      <Route path="/my-portfolio/contact" element={<Contact />} />
    </Routes>

  </BrowserRouter>
);
