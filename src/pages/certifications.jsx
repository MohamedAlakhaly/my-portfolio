"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faDownload, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import dartCertification from "../assets/certifications_image/dart_certification_img.png"
import flutterCertification from "../assets/certifications_image/flutter_certification_img.png"
import tailwindCertification from "../assets/certifications_image/tailwind_certification_img.png"
import bootstrapCertification from "../assets/certifications_image/bootstrap_certification_img.png"
import itSharksCertification from "../assets/certifications_image/it_sharks_certification_img.jpg"
import itSharks2Certification from "../assets/certifications_image/it_sharks2_certification_img.jpg"
import ideasAndConceptsCertification from "../assets/certifications_image/ideas_and_concepts_certification_img.jpg"

const certifications = [
  {
    id: 1,
    title: "Developing Websites And Front-Ends With Bootstrap ",
    issuer: "Coursera & IPM",
    date: "Ape 2, 2025",
    image: bootstrapCertification,
    verifyLink: "https://coursera.org/share/8927d7f420a8f0e8565aabec1451aa92",
    downloadLink: "/my-portfolio/certifications_pdf/bootstrap_certification.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Introduction To Dart",
    issuer: "Coursera & Google Cloud",
    date: "Dec 7, 2024",
    image: dartCertification,
    verifyLink: "https://coursera.org/share/09660e6fe77c82cdc446101f8875c14f",
    downloadLink: "/my-portfolio/certifications_pdf/dart_certification.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "Learn Tailwind CSS",
    issuer: "Coursera & SCRIMBA",
    date: "Dec 7, 2024",
    image: tailwindCertification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certificates/web-cert.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Working In Flutter Applications",
    issuer: "Ideas And Concepts Company",
    date: "Des 1, 2024",
    image: ideasAndConceptsCertification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certifications_pdf/ideas_and_concepts.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    category: "Mobile Development",
  },
  {
    id: 5,
    title: "Mobile Application Diploma (Dart / Flutter)",
    issuer: "IT Sharks Company",
    date: "Apr 18, 2024",
    image: itSharks2Certification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certifications_pdf/it_sharks2.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    category: "Mobile Development",
  },
  {
    id: 6,
    title: "Mobile Application Diploma (Dart / Flutter)",
    issuer: "IT Sharks Company & Egyptian Ministry Of Foreign Affairs",
    date: "May 12, 2024",
    image: itSharksCertification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certifications_pdf/it_sharks.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React.",
    category: "Mobile Development",
  },
  {
    id: 7,
    title: "Getting Started with Flutter Development",
    issuer: "Coursera & Google Cloud",
    date: "Feb 6, 2024",
    image: flutterCertification,
    verifyLink: "https://coursera.org/verify/TFXDJ7DFSH4",
    downloadLink: "/my-portfolio/certifications_pdf/flutter_certification.pdf",
    description: "Introduction to Flutter framework, Dart language, and UI fundamentals.",
    category: "Mobile Development",
  },
]

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCert, setSelectedCert] = useState(null)
  const [filter, setFilter] = useState("All")
  const [viewMode, setViewMode] = useState("grid") // "grid" or "carousel"

  // EDIT: Added categories extraction for filter
  const categories = ["All", ...new Set(certifications.map((cert) => cert.category))]

  // EDIT: Added filtered certificates based on category
  const filteredCertifications =
    filter === "All" ? certifications : certifications.filter((cert) => cert.category === filter)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredCertifications.length) % filteredCertifications.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCertifications.length)
  }

  // EDIT: Added keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [filteredCertifications.length])

  return (
    <div className="min-h-screen container mx-auto text-white">
      <Navbar />

      {/* EDIT: Enhanced header section with better styling */}
      <div className="pt-24 px-5">
        <div className="text-center mb-10">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-4 animate__animated animate__fadeInLeft"></div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% lg:text-4xl text-3xl font-bold animate__animated animate__fadeInDown">
            My <span>Certifications</span>
          </div>
          <div className="w-48 h-1 bg-gradient-to-l from-primary to-transparent mx-auto mt-4 animate__animated animate__fadeInRight"></div>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Professional certifications that validate my skills and expertise in various technologies
          </p>
        </div>

        {/* EDIT: Added view mode toggle and category filters */}
        <div className="flex flex-wrap justify-between items-center mb-6 ">
          <div className="flex space-x-2 mb-4 md:mb-0 animate__animated animate__fadeInLeft">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === "grid" ? "bg-primary text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("carousel")}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === "carousel" ? "bg-primary text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              Carousel View
            </button>
          </div>

          <div className="flex flex-wrap gap-2 animate__animated animate__fadeInRight">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category)
                  setCurrentIndex(0)
                }}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  filter === category ? "bg-primary text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* EDIT: Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__fadeIn">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-primary/80 text-black text-xs px-2 py-1 rounded-md">{cert.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>

                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={cert.downloadLink}
                      className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FontAwesomeIcon icon={faDownload} className="text-xs" />
                      <span>Download</span>
                    </a>
                    <button className="text-white/70 hover:text-white text-sm">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EDIT: Carousel View with enhanced styling */}
        {viewMode === "carousel" && filteredCertifications.length > 0 && (
          <div className="p-5 rounded-xl bg-zinc-800/80 backdrop-blur-sm shadow-xl border border-zinc-700/50 animate__animated animate__fadeIn">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              {/* Certificate Details */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center">
                  <div className="h-1 w-12 bg-primary rounded-full animate__animated animate__fadeInLeft"></div>
                  <p className="text-lg ml-4 animate__animated animate__fadeInDown">Certificate Details</p>
                </div>

                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-semibold text-primary animate__animated animate__fadeInLeft">
                    {filteredCertifications[currentIndex].title}
                  </h2>

                  <div className="flex items-center space-x-2 animate__animated animate__fadeInDown">
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                      {filteredCertifications[currentIndex].category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="animate__animated animate__fadeInDown flex items-center gap-2">
                      <span className="text-gray-400">Issued by:</span>
                      <span className="font-medium">{filteredCertifications[currentIndex].issuer}</span>
                    </p>

                    <p className="animate__animated animate__fadeInUp flex items-center gap-2">
                      <span className="text-gray-400">Issued on:</span>
                      <span>{filteredCertifications[currentIndex].date}</span>
                    </p>
                  </div>

                  <p className="pt-4 text-gray-400 animate__animated animate__fadeInRight border-l-2 border-primary/30 pl-4">
                    {filteredCertifications[currentIndex].description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={filteredCertifications[currentIndex].downloadLink}
                      className="px-5 py-2.5 bg-primary text-black font-semibold rounded-full hover:bg-black hover:text-primary hover:outline outline-1 duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2 animate__animated animate__fadeInUp"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      <span>Download</span>
                    </a>

                    <a
                      href={filteredCertifications[currentIndex].verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-zinc-700 text-white font-medium rounded-full hover:bg-zinc-600 duration-300 cursor-pointer flex items-center gap-2 animate__animated animate__fadeInUp"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Verify</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  {/* EDIT: Added subtle glow effect to image */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent rounded-lg blur-md opacity-50"></div>

                  <img
                    src={filteredCertifications[currentIndex].image || "/placeholder.svg"}
                    className="animate__animated animate__fadeIn relative z-10 w-full rounded-lg shadow-2xl border border-zinc-700/50"
                    alt={filteredCertifications[currentIndex].title}
                  />

                  {/* EDIT: Enhanced navigation controls */}
                  <div className="flex justify-between mt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>{currentIndex + 1}</span>
                      <span>/</span>
                      <span>{filteredCertifications.length}</span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handlePrev}
                        className="bg-zinc-700 hover:bg-primary text-white hover:text-black rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 animate__animated animate__fadeInLeft"
                        aria-label="Previous certificate"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                      </button>

                      <button
                        onClick={handleNext}
                        className="bg-zinc-700 hover:bg-primary text-white hover:text-black rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 animate__animated animate__fadeInRight"
                        aria-label="Next certificate"
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* EDIT: Added modal for certificate details */}
      {selectedCert && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4 animate__animated animate__fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-zinc-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-zinc-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-primary">{selectedCert.title}</h2>
                <p className="text-gray-400">{selectedCert.issuer}</p>
              </div>
              <button onClick={() => setSelectedCert(null)} className="text-gray-400 hover:text-white text-xl">
                ×
              </button>
            </div>

            <div className="relative mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-transparent rounded-lg blur-md opacity-50"></div>
              <img
                src={selectedCert.image || "/placeholder.svg"}
                alt={selectedCert.title}
                className="w-full rounded-lg relative z-10"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Issued on:</p>
                <p className="font-medium">{selectedCert.date}</p>
              </div>
              <div>
                <p className="text-gray-400">Category:</p>
                <p className="font-medium">{selectedCert.category}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-300">{selectedCert.description}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={selectedCert.downloadLink}
                className="px-5 py-2.5 bg-primary text-black font-semibold rounded-full hover:bg-black hover:text-primary hover:outline outline-1 duration-300 cursor-pointer flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Download</span>
              </a>

              <a
                href={selectedCert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-zinc-700 text-white font-medium rounded-full hover:bg-zinc-600 duration-300 cursor-pointer flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Verify</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
