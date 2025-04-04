import Navbar from '../components/navbar'
import testImg from '../assets/certifications/dart.png'
import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Getting Started with Flutter Development",
      issuer: "Google Cloud & Coursera",
      date: "Feb 6, 2024",
      image: testImg,
      verifyLink: "https://coursera.org/verify/XYZ123",
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "Jan 15, 2023",
      image: testImg,
      verifyLink: "https://udemy.com/certificate/ABC456",
    },

  ];
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    // <div className='h-screen container mx-auto'>
    //   <Navbar/>
      
    //   <div className='flex flex-wrap pt-44'>
    //   <div className='md:w-1/2'>Here details</div>
    //   <div className='md:w-1/2'>
    //     <img src={testImg} alt="Certifications image" />
    //   </div>
    //   </div>
    // </div>
    <div className="h-screen bg-black text-white p-10">
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
  </div>

  )
}

