"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "../components/navbar"
import img1 from "../assets/Clipped_image_20241201_070236.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typed from "typed.js"
import { faLinkedin, faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const el = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End", "Back-End", "Mobile App"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  useEffect(() => {
    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen container mx-auto relative overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-[-1] opacity-30"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <main className="flex flex-wrap md:pt-52 pt-28 px-4 pb-10">
        {/* Content column */}
        <div className="w-full lg:w-1/2 lg:pr-10">
          {/* Decorative line */}
          <div
            className={`w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-4 transform transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          ></div>

          {/* Heading */}
          <h1
            className={`text-transparent bg-clip-text bg-gradient-to-r from-primary from-20% to-white to-70% text-5xl font-bold capitalize transform transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            hi, it's mohamed
          </h1>

          {/* Typed text */}
          <h3
            className={`text-2xl font-medium py-3 transform transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            I'm a <span className="text-primary" ref={el} />
          </h3>

          {/* Description */}
          <div
            className={`border-l-2 border-primary/30 pl-4 my-4 transform transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a programmer passionate about building high-quality web and mobile applications using the latest
              technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              I work to transform ideas into integrated digital solutions, focusing on user experience and efficient
              performance. I always strive to stay abreast of the latest technologies and best practices in the world of
              programming.
            </p>
          </div>

          {/* Social media buttons */}
          <div
            className={`py-7 flex space-x-3 transform transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/mohamed-alakhaly-23a25a284/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 flex items-center justify-center text-2xl border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/MohamedAlakhaly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 flex items-center justify-center text-2xl border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100022101017721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-12 h-12 flex items-center justify-center text-2xl border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/_mohamed_toto_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-12 h-12 flex items-center justify-center text-2xl border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          {/* Download CV button */}
          <div
            className={`transform transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-300 rounded-full blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
              <button className="px-6 py-3 bg-primary inline-flex items-center gap-3 text-black font-semibold rounded-full hover:bg-black hover:text-primary hover:outline outline-1 transition-all duration-300 cursor-pointer relative hover:shadow-lg hover:shadow-primary/30">
                Download CV
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
              </button>
            </div>

            <a
              href="/my-portfolio/projects"
              className="ml-4 px-6 py-3 bg-zinc-800/80 inline-flex items-center gap-2 text-white font-medium rounded-full hover:bg-zinc-700 transition-all duration-300 cursor-pointer relative hover:shadow-lg hover:shadow-black/30"
            >
              View Projects
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Image column */}
        <div
          className={`lg:p-0 p-6 w-full lg:w-1/2 flex justify-center items-center transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative">
            {/* Image glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cyan-300 rounded-full blur-md opacity-50 animate__animated animate__pulse animate__infinite animate__slower"></div>

            {/* Profile image */}
            <img
              src={img1 || "/placeholder.svg"}
              alt="Mohamed Al-Akhaly profile"
              className="relative md:w-96 lg:w-96 place-self-center bg-primary rounded-full shadow-lg shadow-primary/30 z-10 border-4 border-zinc-800"
            />

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
