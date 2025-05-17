"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

export default function ProjectsCard({
  project_name,
  project_img,
  project_details,
  hover_color,
  card_animation,
  animationDelay,
  category,
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Animation delay style
  const animationStyle = {
    animationDelay: `${animationDelay}s`,
  }

  return (
    <div
      className={`relative rounded-xl overflow-hidden group transition-all duration-500 ${
        isHovered ? "scale-[1.02]" : ""
      } ${card_animation}`}
      style={animationStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${hover_color} from-30% opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10`}
      ></div>

      {/* Project image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={project_img || "/placeholder.svg"}
          alt={project_name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
        />

        {/* Always visible overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-20 group-hover:opacity-0 transition-opacity duration-300"></div>

        {/* Project name at bottom when not hovered */}
        <div className="absolute bottom-0 left-0 p-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
          <span className="bg-black/40 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full">
            {category || "Project"}
          </span>
          <h3 className="text-white text-xl font-bold mt-2">{project_name}</h3>
        </div>
      </div>

      {/* Content that appears on hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <h3 className="text-white text-2xl font-bold mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project_name}
        </h3>

        <p className="text-white/90 text-center mb-6 max-w-xs transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          Click to view project details or explore this project further
        </p>

        <a
          href={project_details}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:scale-105"
        >
          <FontAwesomeIcon icon={faEye} className="text-sm" />
          <span>View Project</span>
        </a>
      </div>
    </div>
  )
}
