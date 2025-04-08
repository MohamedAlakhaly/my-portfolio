import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ECommerceImg1 from "../assets/my_projects/e-commerce/1.png";
import ECommerceImg2 from "../assets/my_projects/e-commerce/2.png";
import ECommerceImg3 from "../assets/my_projects/e-commerce/3.png";
import ECommerceImg4 from "../assets/my_projects/e-commerce/4.png";
import ECommerceImg5 from "../assets/my_projects/e-commerce/5.png";
import LiveStreamImg1 from "../assets/my_projects/live_stream/1.png";
import MyPortfolioImg1 from "../assets/my_projects/my_portfolio/1.png";
import PortfolioImg from "../assets/my_projects/portfolio/1.png";
export default function ProjectsDetails() {
  const loremText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit cum explicabo voluptate tenetur libero facere quam. Eligendi est omnis numquam tempora. Deleniti facilis inventore ipsam minus eius temporibus explicabo";
  const projectsData = [
    {
      id: "1",
      title: "E-commerce application",
      description:
        "An integrated online store app that offers a fast and easy shopping experience, with a wide range of products such as clothing, shoes, and accessories. The app features: \n\n✔ Simple and easy to navigate interface.\n✔ Discounts and offers of up to 30% on products.\n✔ Improved cart and order management and secure payment.\n✔ Favorites list to save featured products.\n✔ Add products to the cart to buy them later.\n✔ Customize your profile to track requests and offers.",
      technologies: ["Flutter", "Firebase", "GitX"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/game-website/",
      images: [
        ECommerceImg1,
        ECommerceImg2,
        ECommerceImg3,
        ECommerceImg4,
        ECommerceImg5
      ]
    },
    {
      id: "2",
      title: "Live Streaming Project",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["React.js", "Bootstrap.css"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/game-website/",
      images: [LiveStreamImg1]
    },

    {
      id: "3",
      title: "My Portfolio Project",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["React.js", "Tailwind.css"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/my-portfolio/",
      images: [MyPortfolioImg1]
    },
    {
      id: "4",
      title: "Portfolio Project",
      description:
        "This website is a personal project. It is an interactive gaming website that aims to provide a fun and simple experience for users. The website features an attractive and easy-to-use design, with a focus on creating an interactive and engaging user interface.",
      technologies: ["Html", "Css", "JavaScript", "Bootstrap"],
      github: "https://github.com/MohamedAlakhaly",
      liveDemo: "https://mohamedalakhaly.github.io/web-portfolio/",
      images: [PortfolioImg]
    }
  ];

  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  if (!project) return <div>Project not found</div>;

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % project.images.length);
  };
  const prevImage = () => {
    setCurrentImage(
      prev => (prev - 1 + project.images.length) % project.images.length
    );
  };
  return (
    <main className="h-screen container mx-auto relative ">
      {/* this is navbar */}
      <Navbar />

      {/* details section */}
      <div className="flex flex-wrap pt-52">
        <div className="w-full lg:w-1/2 p-5">
          <br />
          <div className="text-3xl font-semibold animate__animated animate__fadeInDown">
            {project.title}
          </div>
          <br />
          <div className="text-zinc-400 description animate__animated animate__fadeInLeft">
            {project.description}
          </div>
          <br />
          <div className="text-primary text-lg font-light space-x-4 animate__animated animate__fadeInUp">
            {project.technologies.map((tech, index) =>
              <span>
                {tech}
              </span>
            )}
          </div>
          <div className="bg-gray-600 [padding:0.5px] my-2 animate__animated animate__fadeIn" />

          <a
            href={project.liveDemo}
            className="bg-zinc-800 p-3 inline-flex rounded-full group animate__animated animate__fadeInLeft"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-2xl group-hover:scale-110 group-hover:-rotate-45 duration-100 group-hover:text-primary "
            />
          </a>

          <a
            href={project.github}
            className="bg-zinc-800 p-3 inline-flex rounded-full m-2 group animate__animated animate__fadeInRight"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl group-hover:scale-110 group-hover:text-primary duration-150"
            />
          </a>
        </div>

        <div className="w-full lg:w-1/2 p-5">
          <img
            src={project.images[currentImage]}
            alt="project photos"
            className="w-full h-96 object-cover animate__animated animate__fadeIn shadow-3md"
          />
          <div className="flex justify-end mt-7">
            <div
              className="bg-primary rounded-md p-2 hover:scale-105 duration-300 animate__animated animate__fadeInLeft"
              onClick={prevImage}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl text-black rotate-180"
              />
            </div>

            <div
              className="bg-primary rounded-md p-2 mx-4 hover:scale-105 duration-300 animate__animated animate__fadeInRight"
              onClick={nextImage}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl text-black"
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    </main>
  );
}
