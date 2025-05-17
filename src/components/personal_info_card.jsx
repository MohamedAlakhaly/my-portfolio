"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PersonalInfoCard({ cardIcon, cardTitle, cardContent, cardAnimation }) {
  return (
    <div className={`flex items-center py-4 group ${cardAnimation}`}>
      {/* Enhanced icon container with gradient effect */}
      <div className="w-16 h-16 flex justify-center items-center bg-zinc-800/80 rounded-lg relative overflow-hidden shadow-lg border border-zinc-700/50 group-hover:border-primary/30 transition-all duration-300">
        {/* Subtle gradient background that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <FontAwesomeIcon
          icon={cardIcon}
          className="text-primary text-2xl transform group-hover:scale-125 duration-300 relative z-10"
        />
      </div>

      {/* Improved content container with better spacing and hover effect */}
      <div className="pl-5 transform group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="text-zinc-300 font-medium capitalize text-sm">{cardTitle}</h3>
        <h3 className="pt-1 text-white font-semibold">{cardContent}</h3>
      </div>
    </div>
  )
}
