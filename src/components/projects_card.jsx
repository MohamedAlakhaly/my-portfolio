import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

// EDIT: Added animationDelay prop
export default function ProjectsCard({
  project_name,
  project_img,
  project_details,
  hover_color,
  card_animation,
  animationDelay,
}) {
  // EDIT: Added animation delay style
  const animationStyle = {
    animationDelay: `${animationDelay}s`,
  }

  return (
    // EDIT: Added shadow and improved border radius
    <div
      className={`bg-dark h-72 rounded-2xl overflow-hidden group relative ${card_animation} shadow-md shadow-black/20 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300`}
      style={animationStyle}
    >
      <div
        style={{ backgroundImage: `url(${project_img || "/placeholder.svg"})` }}
        className={`bg-cover h-72 bg-center group-hover:blur-sm group-hover:opacity-50 transform group-hover:scale-105 duration-300`}
      />

      {/* EDIT: Improved gradient overlay with smoother transition */}
      <div
        className={`bg-gradient-to-t text-white ${hover_color} from-30% duration-500 absolute top-full group-hover:top-0 w-full p-4 flex flex-col h-72 items-center justify-center`}
      >
        {/* EDIT: Enhanced typography with text shadow */}
        <h1 className="text-2xl font-medium capitalize text-shadow">{project_name}</h1>

        {/* EDIT: Improved description text */}
        <p className="text-md text-center pt-2 pb-6 text-white/90 max-w-xs">
          To view project details or order project, click on the image
        </p>

        {/* EDIT: Enhanced button with better hover effect */}
        <div className="bg-white w-14 h-14 transform duration-300 hover:scale-110 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-white/20">
          <a href={project_details} aria-label={`View details for ${project_name}`}>
            <FontAwesomeIcon icon={faUpRightFromSquare} className="text-lg text-black" />
          </a>
        </div>
      </div>

      {/* EDIT: Added subtle overlay gradient at bottom when not hovered */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>

      {/* EDIT: Added project name at bottom when not hovered */}
      <div className="absolute bottom-4 left-4 text-white font-medium text-lg group-hover:opacity-0 transition-opacity duration-300">
        {project_name}
      </div>
    </div>
  )
}
