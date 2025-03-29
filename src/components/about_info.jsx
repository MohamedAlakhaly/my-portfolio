import React from "react";

export default function AboutInfo(props) {
  return (
    <div className="py-2">
      <h4 className="text-primary">
        {props.title}
        <span className="pl-3 text-slate-300">{props.content}</span>
      </h4>
    </div>
  );
}
