import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ServicesCard({ cardIcon, cardTitle, cardContent }) {
  return (
    <div className="border bg-dark border-gray-600 p-4 rounded-xl h-60 overflow-hidden hover:border-primary hover:shadow-3xl hover:shadow-primary group duration-200 transform hover:scale-105">
      <div className="flex justify-between items-center group-hover:text-primary duration-200">
        <FontAwesomeIcon icon={cardIcon} className="text-3xl" />
        <div className="bg-white group-hover:bg-primary duration-200 text-black rounded-full hover:rotate-45 w-12 h-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <h1 className="capitalize text-3xl font-bold py-3 group-hover:text-primary duration-200">
        {cardTitle}
      </h1>
      <p className="text-gray-300">
        {cardContent}
      </p>
    </div>
  );
}
