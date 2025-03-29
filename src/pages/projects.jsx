import Navbar from "../components/navbar";

import ProjectsCard from "../components/projects_card";
export default function Projects() {
  return (
    <div className="h-screen container mx-auto relative">
      <div className="w-40 h-40 bg-primary rounded-full absolute bottom-3/4 left-3/4 blur-3xl " />
      <div className="w-80 h-80 bg-primary rounded-full absolute top-2/4 right-3/4 blur-3xl" />
      <Navbar />
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% pt-24 lg:text-4xl text-3xl font-bold text-center py-10 animate__animated animate__fadeInDown">
        My <span className="">Projects</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 animate__animated animate__fadeInLeft pb-24">
        <ProjectsCard project_name="e-commerce app" />
        <ProjectsCard project_name="education app" />
        <ProjectsCard project_name="gaming app" />
        <ProjectsCard project_name="gaming app" />
        <ProjectsCard project_name="gaming app" />
        <ProjectsCard project_name="gaming app" />
      </div>
    </div>
  );
}
