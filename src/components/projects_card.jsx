import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import testImage from "../assets/test.png";
import testImage2 from "../assets/test2.png";
import dark from "../assets/dark.jpg";
export default function ProjectsCard({ project_name, project_img }) {
  return (
    <div className="bg-dark h-72 rounded-3xl overflow-hidden group relative">
      <div className=" bg-[url('../assets/dark.jpg')] bg-cover h-72 bg-center group-hover:blur-sm group-hover:opacity-50 transform group-hover:scale-105 duration-200" />
      <div className="bg-gradient-to-t text-white from-primary from-30% duration-300 absolute top-full group-hover:top-0  w-full p-2 flex flex-col h-72 items-center justify-center">
        <h1 className="text-2xl font-medium capitalize">
          {project_name}
        </h1>
        <p className="text-md text-center pt-1 pb-6">
          to view project details or order project, click on the image
        </p>
        <div className="bg-white w-14 h-14 transform duration-200 hover:scale-110 rounded-full flex items-center justify-center">
          <a href="#">
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="text-lg text-black"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
