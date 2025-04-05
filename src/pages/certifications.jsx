import Navbar from "../components/navbar";
import testImg from "../assets/certifications/dart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Certifications() {
  // const certifications = [
  //   {
  //     id: 1,
  //     title: "Getting Started with Flutter Development",
  //     issuer: "Google Cloud & Coursera",
  //     date: "Feb 6, 2024",
  //     image: testImg,
  //     verifyLink: "https://coursera.org/verify/XYZ123",
  //   },
  //   {
  //     id: 2,
  //     title: "Full-Stack Web Development",
  //     issuer: "Udemy",
  //     date: "Jan 15, 2023",
  //     image: testImg,
  //     verifyLink: "https://udemy.com/certificate/ABC456",
  //   },

  // ];
  return (
    <div className="h-screen container  mx-auto">
      <Navbar />

      <div className=" pt-24 p-5">
        <div className="flex p-5 rounded-xl bg-zinc-800 flex-wrap">
          <div className="md:w-1/2 rounded-xl w-full ">
            <div className="flex items-center">
              <p className="text-lg">Certificate details</p>
              <div className="bg-primary h-1 mx-4 rounded-full w-1/2" />
            </div>
            <div>
              <br />
              <div className="flex">
                <p className="lg:text-xl text-base text-primary font-semibold">
                  Certificate Title
                </p>
                <p className="lg:text-xl text-base px-3 font-semibold">
                  Getting started with flutter
                </p>
              </div>
              <br />
              <div className="flex">
                <p className="lg:text-xl text-base text-primary font-semibold">
                  Issued by
                </p>
                <p className="lg:text-xl text-base px-3 font-semibold">
                  Google cloud & coursera
                </p>
              </div>
              <br />
              <div className="flex">
                <p className="lg:text-xl text-base text-primary font-semibold">
                  Issued on
                </p>
                <p className="lg:text-xl text-base px-3 font-semibold">Feb 6, 2024</p>
              </div>
              <br />
              <div className="flex items-center">
                <div className="bg-primary h-1 rounded-full w-1/2" />
                <p className="text-lg mx-4"></p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={testImg}
              className="shadow-3md mt-5 shadow-primary "
              alt="Certifications image"
            />
            <div className="flex justify-end mt-7 ">
              <div className="bg-primary rounded-md p-2 hover:scale-105 duration-300 hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-2xl text-black rotate-180"
                />
              </div>

              <div className="bg-primary rounded-md p-2 mx-4 hover:scale-105 duration-300 hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-2xl text-black"
                />
              </div>
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
