import React from "react";
import Navbar from "../components/navbar";
import img1 from "../assets/Clipped_image_20241201_070236.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "typed.js";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  {
    /*//! text effect */
  }
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End", "Back-End", "Mobile App"],
      typeSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialMediaButtonsStyle =
    "mr-2 w-12 h-12 flex items-center justify-center text-2xl border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black duration-200 hover:shadow-3md hover:shadow-primary transform hover:scale-125";
  return (
    <div className="h-screen container mx-auto relative">
      <div className="w-28 h-28 bg-primary rounded-full absolute top-1/4 left-1/7 blur-3xl" />
      {/* //! start navbar section */}
      <Navbar />
      {/* //! end navbar section */}

      {/* //! start hero section */}
      <main className="flex flex-wrap md:pt-52 pt-28">
        <div className="w-full lg:w-1/2 p-5 ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-20% to-white to-60% text-4xl font-bold capitalize animate__animated animate__fadeInLeft">
            hi, it's mohamed
          </h1>
          <h3 className="text-2xl font-medium py-2  animate__animated animate__fadeInRight">
            I'm a <span className="text-primary " ref={el} />
          </h3>
          <p className="text-lg font-thin text-gray-300 animate__animated animate__fadeInLeft description">
            I am a programmer passionate about building high-quality web and
            mobile applications using the latest technologies.<br/><br/> I work to
            transform ideas into integrated digital solutions, focusing on user
            experience and efficient performance. I always strive to stay
            abreast of the latest technologies and best practices in the world
            of programming.
          </p>


          {/* //? social media buttons */}
          <div className="py-7 flex animate__animated animate__fadeInUp">
            <div className={socialMediaButtonsStyle}>
              <a href="https://www.linkedin.com/in/mohamed-alakhaly-23a25a284/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className={socialMediaButtonsStyle}>
              <a href="https://github.com/MohamedAlakhaly">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className={socialMediaButtonsStyle}>
              <a href="https://www.facebook.com/profile.php?id=100022101017721">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className={socialMediaButtonsStyle}>
              <a href="https://www.instagram.com/_mohamed_toto_/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* //? download buttons */}

          <div className="px-4 py-2 space-y-9 bg-primary inline-block text-black font-semibold rounded-full hover:bg-black hover:text-primary hover:outline outline-1 duration-200 cursor-pointer hover:shadow-3md hover:shadow-primary animate__animated animate__fadeInUp">
            Download CV
          </div>
        </div>

        <div className="lg:p-0 p-10 md:w-full lg:w-1/2 animate__animated animate__fadeInDown">
          <img
            src={img1}
            alt=""
            className="md:w-96  lg:w-96 place-self-center bg-primary rounded-full shadow-primary shadow-3xl animate__animated animate__pulse animate__infinite animate__slower"
          />
        </div>
      </main>
      {/* //! end hero section */}
    </div>
  );
}
