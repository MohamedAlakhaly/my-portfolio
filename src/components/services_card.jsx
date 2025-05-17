"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ServicesCard({
  cardIcon,
  cardTitle,
  cardContent,
  color,
  bgLight,
  border,
  isActive,
  onMouseEnter,
  onMouseLeave,
  id,
}) {
  return (
    <div
      className={`relative rounded-xl transition-all duration-500 group ${isActive ? "scale-[1.02]" : ""}`}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      {/* Card Background with gradient border */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`}
      ></div>

      <div
        className={`relative bg-zinc-800/80 backdrop-blur-sm border ${border} rounded-xl p-8 h-full flex flex-col transition-all duration-300 group-hover:shadow-xl`}
      >
        {/* Icon */}
        <div
          className={`${bgLight} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <FontAwesomeIcon
            icon={cardIcon}
            className={`text-2xl bg-gradient-to-br ${color}  bg-clip-text`}
          />
        </div>

        {/* Content */}
        <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-br ${color} text-transparent bg-clip-text`}>
          {cardTitle}
        </h3>

        <p className="text-gray-300 leading-relaxed flex-grow">{cardContent}</p>

        {/* Learn More Link */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-400">{/* You could add tags or additional info here */}</div>
          <button
            className={`bg-gradient-to-r ${color} text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
