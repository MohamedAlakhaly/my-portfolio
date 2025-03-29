import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Routes>
      <Route path="/services" element={<Services />} />
    </Routes>


    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>

    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>

    <Routes>
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </BrowserRouter>
);
