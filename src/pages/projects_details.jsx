"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faExternalLinkAlt, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useParams, Link } from "react-router-dom"
import ECommerceImg1 from "../assets/my_projects/e-commerce/1.png"
import ECommerceImg2 from "../assets/my_projects/e-commerce/2.png"
import ECommerceImg3 from "../assets/my_projects/e-commerce/3.png"
import ECommerceImg4 from "../assets/my_projects/e-commerce/4.png"
import ECommerceImg5 from "../assets/my_projects/e-commerce/5.png"
import LiveStreamImg1 from "../assets/my_projects/live_stream/1.png"
import MyPortfolioImg1 from "../assets/my_projects/my_portfolio/1.png"
import PortfolioImg from "../assets/my_projects/portfolio/1.png"
import BonveroImg from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png"
import netWoImg from "../assets/my_projects/coffee_shop/netWo.png"
import uiPortfolioImg from "../assets/my_projects/ui_portfolio/ui_portfolio.png"
import weatherProImg1 from "../assets/my_projects/weather_pro/weather_pro.png"

export default function ProjectsDetails() {
  const projectsData = [
    {
      id: "1",
      title: "E-commerce application",
      description:
        "An integrated online store app that offers a fast and easy shopping experience, with a wide range of products such as clothing, shoes, and accessories. The app features: \n\n✔ Simple and easy to navigate interface.\n✔ Discounts and offers of up to 30% on products.\n✔ Improved cart and order management and secure payment.\n✔ Favorites list to save featured products.\n✔ Add products to the cart to buy them later.\n✔ Customize your profile to track requests and offers.",
      technologies: ["Flutter", "Firebase", "GitX"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/game-website/",
      images: [ECommerceImg1, ECommerceImg2, ECommerceImg3, ECommerceImg4, ECommerceImg5],
      category: "Mobile App",
      year: "2023",
      client: "Personal Project",
    },
    {
      id: "2",
      title: "Live Streaming Project",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["React.js", "Bootstrap.css"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/game-website/",
      images: [LiveStreamImg1],
      category: "Web App",
      year: "2023",
      client: "Personal Project",
    },
    {
      id: "3",
      title: "My Portfolio Project",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["React.js", "Tailwind.css"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/my-portfolio/",
      images: [MyPortfolioImg1],
      category: "Web App",
      year: "2023",
      client: "Personal Project",
    },
    {
      id: "4",
      title: "Portfolio Project",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["Html", "Css", "JavaScript", "Bootstrap"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/web-portfolio/",
      images: [PortfolioImg],
      category: "Web App",
      year: "2022",
      client: "Personal Project",
    },
    {
      id: "5",
      title: "Bonvero Restaurant",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["Flutter", "Firebase", "GetX"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://github.com/MohamedAlakhaly/restaurant-app",
      images: [BonveroImg],
      category: "Mobile App",
      year: "2023",
      client: "Personal Project",
    },
    {
      id: "6",
      title: "NetWo Coffee",
      description:
        "This is a modern coffee shop landing page, likely built as a demo or portfolio project. It includes:\n\n✔ A clean, visually appealing design with coffee-themed colors (browns, beige, etc.).\n\n ✔  Smooth animations and hover effects for better user experience.\n✔  A responsive layout (works on mobile & desktop).",
      technologies: ["Next js", "Tailwind css"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://coffee-shop-chi-orpin.vercel.app/",
      images: [netWoImg],
      category: "Web App",
      year: "2025",
      client: "Personal Project",
    },
    {
      id: "7",
      title: "UI portfolio",
      description:
        "This is a UI portfolio, likely built as a demo or portfolio project. It includes:\n\n✔ A clean, visually appealing design with coffee-themed colors (browns, beige, etc.).\n\n ✔  Smooth animations and hover effects for better user experience.\n✔  A responsive layout (works on mobile & desktop).",
      technologies: ["Next js", "Tailwind css"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://ui-portfolio-mu.vercel.app/",
      images: [uiPortfolioImg],
      category: "Web App",
      year: "2025",
      client: "Personal Project",
    },
    {
      id: "8",
      title: "Weather Pro",
      description:
        "This is a UI portfolio, likely built as a demo or portfolio project. It includes:\n\n✔ A clean, visually appealing design with coffee-themed colors (browns, beige, etc.).\n\n ✔  Smooth animations and hover effects for better user experience.\n✔  A responsive layout (works on mobile & desktop).",
      technologies: ["Flutter", "GetX","Open weather API"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "",
      images: [weatherProImg1],
      category: "Mobile App",
      year: "2025",
      client: "Personal Project",
    },
  ]

  const { id } = useParams()
  const project = projectsData.find((p) => p.id === id)
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Find next and previous projects
  const currentIndex = projectsData.findIndex((p) => p.id === id)
  const prevProject = projectsData[currentIndex - 1] || projectsData[projectsData.length - 1]
  const nextProject = projectsData[currentIndex + 1] || projectsData[0]

  useEffect(() => {
    // Reset current image when project changes
    setCurrentImage(0)
    setIsLoaded(false)

    // Scroll to top when project changes
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return <div>Project not found</div>

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
    setIsLoaded(false)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
    setIsLoaded(false)
  }

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  // Format description with line breaks
  const formattedDescription = project.description.split("\n").map((line, index) => (
    <p key={index} className="mb-3">
      {line}
    </p>
  ))

  return (
    <div className="min-h-screen container mx-auto relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-[-1] opacity-30"></div>

      <Navbar />

      {/* Back to projects link */}
      <div className="pt-28 px-4">
        <Link
          to="/my-portfolio/projects"
          className="inline-flex items-center text-gray-400 hover:text-primary transition-colors duration-300 mb-6 group"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="mr-2 text-sm group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="px-4 mb-10">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-white to-90% animate__animated animate__fadeInDown">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-full">{project.category}</span>
              <span className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-full">{project.year}</span>
              <span className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-full">{project.client}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <span>Live Demo</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="px-4 grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
        {/* Image Gallery - Takes 3 columns on large screens */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="relative bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden shadow-xl">
            {/* Loading indicator */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 z-10">
                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}

            {/* Main image */}
            <img
              src={project.images[currentImage] || "/placeholder.svg"}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className={`w-full object-cover rounded-xl transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
              style={{ minHeight: "300px", maxHeight: "500px" }}
              onLoad={handleImageLoad}
            />

            {/* Navigation arrows - only show if more than one image */}
            {project.images.length > 1 && (
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
                <button
                  onClick={prevImage}
                  className="bg-black/50 hover:bg-primary text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Previous image"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-black/50 hover:bg-primary text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Next image"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            )}

            {/* Image counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {currentImage + 1} / {project.images.length}
              </div>
            )}
          </div>

          {/* Thumbnail gallery - only show if more than one image */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    currentImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details - Takes 2 columns on large screens */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Project Details</h2>

            <div className="prose prose-invert max-w-none text-gray-300 mb-6">{formattedDescription}</div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="px-4 mb-20">
        <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden shadow-xl">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-white">More Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to={`/my-portfolio/projects/${prevProject.id}`}
                className="group flex items-center bg-zinc-900/50 hover:bg-zinc-900 p-4 rounded-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-4">
                  <img
                    src={prevProject.images[0] || "/placeholder.svg"}
                    alt={prevProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <span className="text-gray-400 text-sm flex items-center">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                    />
                    Previous Project
                  </span>
                  <h3 className="text-white font-medium">{prevProject.title}</h3>
                </div>
              </Link>

              <Link
                to={`/my-portfolio/projects/${nextProject.id}`}
                className="group flex items-center justify-end text-right bg-zinc-900/50 hover:bg-zinc-900 p-4 rounded-xl transition-all duration-300"
              >
                <div>
                  <span className="text-gray-400 text-sm flex items-center justify-end">
                    Next Project
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                  <h3 className="text-white font-medium">{nextProject.title}</h3>
                </div>
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ml-4">
                  <img
                    src={nextProject.images[0] || "/placeholder.svg"}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={project.images[currentImage] || "/placeholder.svg"}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxOpen(false)
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
