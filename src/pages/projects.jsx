import Navbar from "../components/navbar"
import ProjectsCard from "../components/projects_card"
import ECommerceProject from "../assets/my_projects/e-commerce/1.png"
import LiveStreamProject from "../assets/my_projects/live_stream/1.png"
import MyPortfolioProject from "../assets/my_projects/my_portfolio/1.png"
import PortfolioProject from "../assets/my_projects/portfolio/1.png"
import BonveroProject from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png"

export default function Projects() {
  const projectsData = [
    {
      id: "1",
      title: "E-commerce app",
      image: ECommerceProject,
      hoverColor: "from-violet-500",
      cardAnimation: "animate__animated animate__fadeInLeft",
    },
    {
      id: "2",
      title: "Live Streamer Web",
      image: LiveStreamProject,
      hoverColor: "from-pink-500",
      cardAnimation: "animate__animated animate__fadeInLeft",
    },
    {
      id: "3",
      title: "My Portfolio",
      image: MyPortfolioProject,
      hoverColor: "from-primary",
      cardAnimation: "animate__animated animate__fadeInLeft",
    },
    {
      id: "4",
      title: "Portfolio Web",
      image: PortfolioProject,
      hoverColor: "from-yellow-400",
      cardAnimation: "animate__animated animate__fadeInLeft",
    },
    {
      id: "5",
      title: "Bonvero",
      image: BonveroProject,
      hoverColor: "from-green-500",
      cardAnimation: "animate__animated animate__fadeInLeft",
    },
  ]
  return (
    <div className="min-h-screen container mx-auto relative">
      {/* Background elements */}
      <div className="hidden md:flex w-40 h-40 bg-primary rounded-full absolute bottom-3/4 left-3/4 blur-3xl opacity-20" />
      <div className="hidden md:flex w-80 h-80 bg-primary rounded-full absolute top-2/4 right-3/4 blur-3xl opacity-15" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-[-1] opacity-30"></div>

      <Navbar />

      <div className="w-full pt-24 pb-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-4"></div>

          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% lg:text-4xl text-3xl font-bold text-center">
            My <span className="">Projects</span>
          </div>

          <p className="text-gray-400 mt-3 max-w-md mx-auto text-center">
            A showcase of my recent work and creative projects
          </p>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 pb-24">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={project.id}
            project_img={project.image}
            project_name={project.title}
            hover_color={project.hoverColor}
            project_details={`/my-portfolio/projects/${project.id}`}
            card_animation={project.cardAnimation}
            animationDelay={index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}
