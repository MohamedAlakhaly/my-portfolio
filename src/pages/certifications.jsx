import { useState } from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../components/custom_download_button";
import CustomShowCertificationButton from "../components/custom_show_certification";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dartCertification from "../assets/certifications_image/dart_certification_img.png";
import flutterCertification from "../assets/certifications_image/flutter_certification_img.png";
import tailwindCertification from "../assets/certifications_image/tailwind_certification_img.png";
import bootstrapCertification from "../assets/certifications_image/bootstrap_certification_img.png";
import itSharksCertification from "../assets/certifications_image/it_sharks_certification_img.jpg";
import itSharks2Certification from "../assets/certifications_image/it_sharks2_certification_img.jpg";
import ideasAndConceptsCertification from "../assets/certifications_image/ideas_and_concepts_certification_img.jpg";

const certifications = [
  {
    id: 1,
    title: "Developing Websites And Front-Ends With Bootstrap ",
    issuer: "Coursera & IPM",
    date: "Ape 2, 2025",
    image: bootstrapCertification,
    verifyLink: "https://coursera.org/share/8927d7f420a8f0e8565aabec1451aa92",
    downloadLink:
      "/my-portfolio/certifications_pdf/bootstrap_certification.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React."
  },
  {
    id: 2,
    title: "Introduction To Dart",
    issuer: "Coursera & Google Cloud",
    date: "Dec 7, 2024",
    image: dartCertification,
    verifyLink: "https://coursera.org/share/09660e6fe77c82cdc446101f8875c14f",
    downloadLink: "/my-portfolio/certifications_pdf/dart_certification.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React."
  },
  {
    id: 3,
    title: "Learn Tailwind CSS",
    issuer: "Coursera & SCRIMBA",
    date: "Dec 7, 2024",
    image: tailwindCertification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certificates/web-cert.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React."
  },
  {
    id: 4,
    title: "Working In Flutter Applications",
    issuer: "Ideas And Concepts Company",
    date: "Des 1, 2024",
    image: ideasAndConceptsCertification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certifications_pdf/ideas_and_concepts.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React."
  },

  {
    id: 5,
    title: "Mobile Application Diploma (Dart / Flutter)",
    issuer: "IT Sharks Company",
    date: "Apr 18, 2024",
    image: itSharks2Certification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certifications_pdf/it_sharks2.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React."
  },

  {
    id: 6,
    title: "Mobile Application Diploma (Dart / Flutter)",
    issuer: "IT Sharks Company & Egyptian Ministry Of Foreign Affairs",
    date: "May 12, 2024",
    image: itSharksCertification,
    verifyLink: "https://udemy.com/certificate/ABC456",
    downloadLink: "/my-portfolio/certifications_pdf/it_sharks.pdf",
    description: "Covers HTML, CSS, JavaScript, Node.js, MongoDB, and React."
  },
  {
    id: 7,
    title: "Getting Started with Flutter Development",
    issuer: "Coursera & Google Cloud",
    date: "Feb 6, 2024",
    image: flutterCertification,
    verifyLink: "https://coursera.org/verify/TFXDJ7DFSH4",
    downloadLink: "/my-portfolio/certifications_pdf/flutter_certification.pdf",
    description:
      "Introduction to Flutter framework, Dart language, and UI fundamentals."
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      prev => (prev - 1 + certifications.length) % certifications.length
    );
  };

  const onClickDownload = () => {
    console.log("Mohamed");
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % certifications.length);
  };

  return (
    <div className="min-h-screen container mx-auto text-white">
      <Navbar />

      <div className="pt-24 p-5">
        <div className="text-transparent  bg-clip-text bg-gradient-to-r from-primary from-50% to-white to-60% lg:text-4xl text-3xl font-bold text-center pb-10 animate__animated animate__fadeInDown">
          My <span>Certification</span>
        </div>
        <div className="flex p-5 rounded-xl bg-zinc-800 flex-wrap">
          <div className="md:w-1/2 w-full">
            <div className="flex items-center">
              <p className="text-lg animate__animated animate__fadeInDown">
                Certificate details
              </p>
              <div className="bg-primary h-1 mx-4 rounded-full w-1/2 animate__animated animate__fadeInRight" />
            </div>
            <br />
            <p className="text-xl font-semibold text-primary animate__animated animate__fadeInLeft">
              {certifications[currentIndex].title}
            </p>
            <p className="pt-2 animate__animated animate__fadeInDown">
              Issued by:{" "}
              <span className="font-semibold ">
                {certifications[currentIndex].issuer}
              </span>
            </p>
            <p className="animate__animated animate__fadeInUp">
              Issued on: {certifications[currentIndex].date}
            </p>
            <p className="pt-4 text-sm text-gray-400 animate__animated animate__fadeInRight">
              {certifications[currentIndex].description}
            </p>

            {/* <div className="mt-6 space-x-3 flex">
              <div className="animate__animated animate__fadeInDown">
                <CustomButton
                  DownloadLink={certifications[currentIndex].downloadLink}
                />
              </div>
            </div> */}

            <a href={certifications[currentIndex].downloadLink}>

              <div className="mt-4 px-4 py-2 space-y-9 bg-primary inline-block text-black font-semibold rounded-full hover:bg-black hover:text-primary hover:outline outline-1 duration-200 cursor-pointer hover:shadow-3md hover:shadow-primary animate__animated animate__fadeInUp">
                Download
              </div>
            </a>
            {/* <div className="mt-6 space-x-3">
              <CustomShowCertificationButton />
            </div> */}
          </div>

          <div className="md:w-1/2">
            <img
              src={certifications[currentIndex].image}
              className="animate__animated animate__fadeIn  shadow-3xl mt-5 rounded-md shadow-cyan-500"
              alt="Certification"
            />
            <div className="flex justify-end mt-7">
              <button
                onClick={handlePrev}
                className="bg-primary rounded-md p-2 hover:scale-105 duration-300 animate__animated animate__fadeInLeft"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-2xl text-black rotate-180"
                />
              </button>
              <button
                onClick={handleNext}
                className="bg-primary rounded-md p-2 mx-4 hover:scale-105 duration-300 animate__animated animate__fadeInRight"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-2xl text-black"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// const [selectedCert, setSelectedCert] = useState(null);

{
  /* <div className="h-screen bg-black text-white p-10">
      <Navbar/>
    <h1 className="text-3xl font-bold pt-28 text-center text-cyan-400 mb-6">
      Certifications
    </h1>
    <p className="text-center text-gray-400 mb-10">
      فيما يلي بعض الشهادات التي حصلت عليها من منصات معتمدة عالميًا
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-cyan-400 transition text-center"
          onClick={() => setSelectedCert(cert)}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
          />
          <h2 className="text-lg font-semibold mt-4">{cert.title}</h2>
          <p className="text-sm text-gray-400">{cert.issuer}</p>
          <p className="text-sm text-gray-500">{cert.date}</p>
        </div>
      ))}
    </div>

    {selectedCert && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={() => setSelectedCert(null)}>
        <div className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full text-center">
          <h2 className="text-cyan-400 text-lg font-semibold">{selectedCert.title}</h2>
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="w-full rounded-lg mt-4"
          />
          <p className="text-gray-400 mt-2">{selectedCert.issuer}</p>
          <p className="text-gray-500">{selectedCert.date}</p>
          <a
            href={selectedCert.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline block mt-4"
          >
            🔗 تحقق من الشهادة
          </a>
        </div>
      </div>
    )}
  </div> */
}
