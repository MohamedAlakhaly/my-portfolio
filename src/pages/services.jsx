"use client"

import { useState } from "react"
import Navbar from "../components/navbar"
import ServicesCard from "../components/services_card"
import {
  faCode,
  faMobileScreenButton,
  faCamera,
  faPalette,
  faClapperboard,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import "animate.css"

export default function Services() {
  // State to track which service is being hovered
  const [activeService, setActiveService] = useState(null)

  const Services = [
    {
      id: 1,
      service: "Front-End",
      serviceIcon: faCode,
      serviceDescription:
        "Crafting modern, responsive interfaces using HTML, CSS, JavaScript and React.Js. I bring designs to life with clean, user-friendly web experiences.",
      color: "from-blue-500 to-cyan-400",
      bgLight: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      id: 2,
      service: "Back-End",
      serviceIcon: faGlobe,
      serviceDescription:
        "Building robust, scalable server-side applications. I handle APIs, databases, and all logic that powers dynamic web platforms.",
      color: "from-purple-500 to-indigo-500",
      bgLight: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      id: 3,
      service: "Mobile Developer",
      serviceIcon: faMobileScreenButton,
      serviceDescription:
        "Developing sleek, high-performance mobile apps for Android and iOS using Flutter for smooth, fast user experience.",
      color: "from-primary to-cyan-300",
      bgLight: "bg-primary/10",
      border: "border-primary/20",
    },
    {
      id: 4,
      service: "Video Editing",
      serviceIcon: faClapperboard,
      serviceDescription:
        "Editing dynamic and engaging videos using professional tools. I enhance storytelling through pacing, effects, and smooth transitions.",
      color: "from-red-500 to-orange-400",
      bgLight: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      id: 5,
      service: "Graphic Design",
      serviceIcon: faPalette,
      serviceDescription:
        "Designing visually compelling graphics, logos, and layouts. I blend creativity and functionality to deliver standout visual solutions.",
      color: "from-pink-500 to-rose-400",
      bgLight: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    {
      id: 6,
      service: "Photography",
      serviceIcon: faCamera,
      serviceDescription:
        "Capturing moments with a creative eye and precision. I focus on lighting, composition, and editing to produce high-quality images.",
      color: "from-amber-500 to-yellow-400",
      bgLight: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ]

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
            My Services
          </h1>
          <div className="w-full h-1 bg-gradient-to-l from-primary to-transparent mx-auto mt-4"></div>
        </div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          I offer a comprehensive range of digital services to help bring your vision to life
        </p>
      </div>

      {/* Services Grid - Now using the ServicesCard component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
        {Services.map((service) => (
          <ServicesCard
            key={service.id}
            id={service.id}
            cardIcon={service.serviceIcon}
            cardTitle={service.service}
            cardContent={service.serviceDescription}
            color={service.color}
            bgLight={service.bgLight}
            border={service.border}
            isActive={activeService === service.id}
            onMouseEnter={setActiveService}
            onMouseLeave={() => setActiveService(null)}
          />
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="relative mx-4 mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-md"></div>
        <div className="relative bg-zinc-800/80 backdrop-blur-sm border border-primary/20 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to start a project?</h3>
            <p className="text-gray-300 max-w-xl">
              Let's collaborate to create something amazing. I'm available for freelance work and full-time positions.
            </p>
          </div>
          <a
            href="/my-portfolio/contact"
            className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
