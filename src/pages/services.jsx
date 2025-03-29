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
  const content =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nulla similique nihil nisi optio doloremque fuga, harum doloribus voluptatem reprehenderit ipsam esse ";
  return (
    <div className="h-screen container mx-auto relative ">
      <div className="w-80 h-80 bg-primary rounded-full absolute bottom-1/2 left-1/5 blur-3xl" />
      <div className="w-80 h-80 bg-primary rounded-full absolute top-2/4 right-1/4 blur-3xl" />
      {/*//! start navbar section */}
      <Navbar />
      {/*//! end navbar section */}
      {/*//! start hero section */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% pt-24 w-full lg:text-4xl text-3xl font-bold text-center py-10 animate__animated animate__fadeInDown">
        My <span className="">Services</span>
      </div>
      <div className="p-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate__animated animate__fadeInLeft">
        <ServicesCard
          cardTitle="front-end developer"
          cardContent={content}
          cardIcon={faCode}
        />
        <ServicesCard
          cardTitle="back-end developer"
          cardContent={content}
          cardIcon={faGlobe}
        />
        <ServicesCard
          cardTitle="mobile developer"
          cardContent={content}
          cardIcon={faMobileScreenButton}
        />
        <ServicesCard
          cardTitle="video editing"
          cardContent={content}
          cardIcon={faClapperboard}
        />
        <ServicesCard
          cardTitle="graphic design "
          cardContent={content}
          cardIcon={faPalette}
        />
        <ServicesCard
          cardTitle="photography"
          cardContent={content}
          cardIcon={faCamera}
        />
      </div>

      {/*//! end hero section */}
    </div>
  );
}
