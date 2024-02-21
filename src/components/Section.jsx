import React from "react";

const Section = ({ name, icon }) => {
  return (
    <div className=" flex flex-row rounded-2xl text-white font-medium bg-lime-700 bg-opacity-75 hover:bg-lime-900 duration-75 gap-3 p-3">
      <div>{icon}</div>
      <span>{name}</span>
    </div>
  );
};

export default Section;
