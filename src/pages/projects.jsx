"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import ProjectsCard from "../components/projects_card"
import ECommerceProject from "../assets/my_projects/e-commerce/1.png"
import LiveStreamProject from "../assets/my_projects/live_stream/1.png"
import MyPortfolioProject from "../assets/my_projects/my_portfolio/1.png"
import PortfolioProject from "../assets/my_projects/portfolio/1.png"
import BonveroProject from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png"

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [animatedItems, setAnimatedItems] = useState([])

  const projectsData = [
    {
      id: "1",
      title: "E-commerce app",
      image: ECommerceProject,
      hoverColor: "from-violet-500",
      cardAnimation: "animate__animated animate__fadeInUp",
      category: "Mobile App",
    },
    {
      id: "2",
      title: "Live Streamer Web",
      image: LiveStreamProject,
      hoverColor: "from-pink-500",
      cardAnimation: "animate__animated animate__fadeInUp",
      category: "Web App",
    },
    {
      id: "3",
      title: "My Portfolio",
      image: MyPortfolioProject,
      hoverColor: "from-primary",
      cardAnimation: "animate__animated animate__fadeInUp",
      category: "Web App",
    },
    {
      id: "4",
      title: "Portfolio Web",
      image: PortfolioProject,
      hoverColor: "from-yellow-400",
      cardAnimation: "animate__animated animate__fadeInUp",
      category: "Web App",
    },
    {
      id: "5",
      title: "Bonvero",
      image: BonveroProject,
      hoverColor: "from-green-500",
      cardAnimation: "animate__animated animate__fadeInUp",
      category: "Mobile App",
    },
  ]

  // Extract unique categories
  const categories = ["All", ...new Set(projectsData.map((project) => project.category))]

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter)

  // Scroll animation for projects
  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll(".project-item")

      projectElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight - 100

        if (isVisible && !animatedItems.includes(element.id)) {
          setAnimatedItems((prev) => [...prev, element.id])
          element.classList.add("animate__fadeInUp")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [animatedItems])

  return (
    <div className="min-h-screen container mx-auto relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-[-1] opacity-30"></div>

      <Navbar />

      {/* Header Section */}
      <div className="pt-28 pb-16 text-center relative">
        <div className="inline-block">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-4"></div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-30% to-white to-70% lg:text-5xl text-4xl font-bold animate__animated animate__fadeInDown">
            My Projects
          </h1>
          <div className="w-full h-1 bg-gradient-to-l from-primary to-transparent mx-auto mt-4"></div>
        </div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A showcase of my recent work and creative projects across web and mobile platforms
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-black font-medium"
                  : "bg-zinc-800/80 text-white hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-20">
        {filteredProjects.map((project, index) => (
          <div key={project.id} id={`project-${project.id}`} className="project-item animate__animated">
            <ProjectsCard
              project_img={project.image}
              project_name={project.title}
              hover_color={project.hoverColor}
              project_details={`/my-portfolio/projects/${project.id}`}
              card_animation=""
              animationDelay={index * 0.1}
              category={project.category}
            />
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="relative mx-4 mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-md"></div>
        <div className="relative bg-zinc-800/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Have a project in mind?</h3>
            <p className="text-gray-300 max-w-xl">
              I'm always open to discussing new projects and creative ideas. Let's create something amazing together.
            </p>
          </div>
          <a
            href="/my-portfolio/contact"
            className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Start a Project
          </a>
        </div>
      </div>
    </div>
  )
}
