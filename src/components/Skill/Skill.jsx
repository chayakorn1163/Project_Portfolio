import React from "react";

const Skill = ({ name, level }) => {
  return (
    <div className="p-4 bg-gray-100 m-2 rounded-lg shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>Level: {level}</p>
    </div>
  );
};

export default Skill;
