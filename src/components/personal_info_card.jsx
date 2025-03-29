import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function PersonalInfoCard({ cardIcon, cardTitle, cardContent,cardAnimation }) {
  return (
    <div className={`flex items-center py-2 ${cardAnimation}`}>
      {/* //! card icon */}
      <div className="w-16 h-16 flex justify-center items-center group bg-zinc-800 rounded-lg">
        <FontAwesomeIcon
          icon={cardIcon}
          className="text-primary text-2xl transform group-hover:scale-125 duration-200"
        />
      </div>
      <div className="pl-5">
        <h3 className="text-zinc-400 font-semibold capitalize">
          {cardTitle}
        </h3>
        <h3 className="pt-2 capitalize">
          {cardContent}
        </h3>
      </div>

      {/* //! card icon */}
    </div>
  );
}
