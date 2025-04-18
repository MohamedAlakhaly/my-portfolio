import Navbar from "../components/navbar";
import ProjectsCard from "../components/projects_card";
import ECommerceProject from "../assets/my_projects/e-commerce/1.png";
import LiveStreamProject from "../assets/my_projects/live_stream/1.png";
import MyPortfolioProject from "../assets/my_projects/my_portfolio/1.png";
import PortfolioProject from "../assets/my_projects/portfolio/1.png";
import BonveroProject from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png";

export default function Projects() {
  const projectsData = [
    {
      id: "1",
      title: "E-commerce app",
      image: ECommerceProject,
      hoverColor: "from-violet-500",
      cardAnimation: "animate__animated animate__fadeInLeft"
    },
    {
      id: "2",
      title: "Live Streamer Web",
      image: LiveStreamProject,
      hoverColor: "from-pink-500",
      cardAnimation: "animate__animated animate__fadeInDown"
    },
    {
      id: "3",
      title: "My Portfolio",
      image: MyPortfolioProject,
      hoverColor: "from-primary",
      cardAnimation: "animate__animated animate__fadeInRight"
    },
    {
      id: "4",
      title: "Portfolio Web",
      image: PortfolioProject,
      hoverColor: "from-yellow-400",
      cardAnimation: "animate__animated animate__fadeInRight"
    },
    {
      id: "5",
      title: "Bonvero",
      image: BonveroProject,
      hoverColor: "from-green-500",
      cardAnimation: "animate__animated animate__fadeInUp"
    }
  ];
  return (
    <div className="h-screen container mx-auto relative">
      {/* <div className="hidden md:flex w-40 h-40 bg-primary rounded-full absolute bottom-3/4 left-3/4 blur-3xl " /> */}
      {/* <div className="hidden md:flex w-80 h-80 bg-primary rounded-full absolute top-2/4 right-3/4 blur-3xl" /> */}
      <Navbar />
      <div className="text-transparent  bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% pt-24 lg:text-4xl text-3xl font-bold text-center py-10 animate__animated animate__fadeInDown">
        My <span className="">Projects</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  pb-24">
        {projectsData.map(project =>
          <ProjectsCard
            project_img={project.image}
            project_name={project.title}
            hover_color={project.hoverColor}
            project_details={`/my-portfolio/projects/${project.id}`}
            card_animation={project.cardAnimation}
          />
        )}
      </div>
    </div>
  );
}
