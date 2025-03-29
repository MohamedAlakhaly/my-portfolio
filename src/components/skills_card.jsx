import React from "react";

export default function SkillsCard({ skills, level, skillsLogo }) {
  return (
    <div className="flex items-center border p-2 rounded-md border-gray-600 hover:border-primary duration-200 group">
      <div className="w-12 transform duration-200 group-hover:scale-110 ">
        <img src={skillsLogo} alt="" />
      </div>
      <div className="pl-3 capitalize">
        <h3 className="font-medium">
          {skills}
        </h3>
        <h3 className="text-slate-400">
          {level}
        </h3>
      </div>
    </div>
  );
}
