import Navbar from "../components/navbar";
import {
  faCode,
  faMobileScreenButton,
  faCamera,
  faPalette,
  faClapperboard,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import ServicesCard from "../components/services_card";
import "animate.css";
export default function Services() {
  const Services = [
    {
      service: "Front-End",
      serviceIcon: faCode,
      serviceDescription:
        "Crafting modern, responsive interfaces using HTML, CSS, JavaScript and React.Js. I bring designs to life with clean, user-friendly web experiences."
    },
    {
      service: "Back-End",
      serviceIcon: faGlobe,
      serviceDescription:
        "Building robust, scalable server-side applications. I handle APIs, databases, and all logic that powers dynamic web platforms."
    },
    {
      service: "Mobile Developer",
      serviceIcon: faMobileScreenButton,
      serviceDescription:
        "Developing sleek, high-performance mobile apps for Android and iOS using Flutter for smooth, fast user experience."
    },
    {
      service: "Video Editing",
      serviceIcon: faClapperboard,
      serviceDescription:
        "Editing dynamic and engaging videos using professional tools. I enhance storytelling through pacing, effects, and smooth transitions."
    },
    {
      service: "Graphic Design",
      serviceIcon: faPalette,
      serviceDescription:
        "Designing visually compelling graphics, logos, and layouts. I blend creativity and functionality to deliver standout visual solutions."
    },
    {
      service: "Photography",
      serviceIcon: faCamera,
      serviceDescription:
        "Capturing moments with a creative eye and precision. I focus on lighting, composition, and editing to produce high-quality images."
    },
    
  ];
  return (
    <div className="h-screen container mx-auto relative ">
      {/* <div className="w-80 h-80 bg-primary rounded-full absolute bottom-1/2 left-1/5 blur-3xl" /> */}
      {/* <div className="w-80 h-80 bg-primary rounded-full absolute top-2/4 right-1/4 blur-3xl" /> */}
      {/*//! start navbar section */}
      <Navbar />
      {/*//! end navbar section */}
      {/*//! start hero section */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% pt-24 w-full lg:text-4xl text-3xl font-bold text-center py-10 animate__animated animate__fadeInDown">
        My <span className="">Services</span>
      </div>
      <div className="p-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate__animated animate__fadeInLeft">
        {Services.map(service => <ServicesCard cardContent={service.serviceDescription} cardIcon={service.serviceIcon} cardTitle={service.service} />)}
      </div>

      {/*//! end hero section */}
    </div>
  );
}
