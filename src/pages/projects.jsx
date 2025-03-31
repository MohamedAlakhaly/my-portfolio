import Navbar from "../components/navbar";
import ProjectsCard from "../components/projects_card";
import ECommerceProject from "../assets/my_projects/e-commerce/1.png";
import LiveStreamProject from "../assets/my_projects/live_stream/1.png";
import MyPortfolioProject from "../assets/my_projects/my_portfolio/1.png";

export default function Projects() {
  const projectsData = [
    {
      id: "1",
      title: "E-commerce app",
      image: ECommerceProject,
      hoverColor:'from-violet-500',
    },
    {
      id: "2",
      title: "Live Streamer Web",
      image:LiveStreamProject,
        hoverColor:'from-pink-500',
    },
    ,
    {
      id: "3",
      title: "My Portfolio",
      image:MyPortfolioProject,
        hoverColor:'from-primary',
    },
    
  ];
  return (
    <div className="h-screen container mx-auto relative">
      {/* <div className="hidden md:flex w-40 h-40 bg-primary rounded-full absolute bottom-3/4 left-3/4 blur-3xl " /> */}
      {/* <div className="hidden md:flex w-80 h-80 bg-primary rounded-full absolute top-2/4 right-3/4 blur-3xl" /> */}
      <Navbar />
      <div className="text-transparent bg-rose-400 bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% pt-24 lg:text-4xl text-3xl font-bold text-center py-10 animate__animated animate__fadeInDown">
        My <span className="">Projects</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 animate__animated animate__fadeInLeft pb-24">
        {projectsData.map(project =>
          <ProjectsCard
            project_img={project.image}
            project_name={project.title}
            hover_color={project.hoverColor}
            project_details={`/my-portfolio/projects/${project.id}`}
          />
        )}
      </div>
    </div>
  );
}
