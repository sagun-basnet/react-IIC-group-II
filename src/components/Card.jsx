import React from "react";

const Card = ({ index, title, body }) => {
  return (
    <div key={index} className="border-2 h-[20rem] p-4">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="text-justify font-bold">{body}</p>
    </div>
  );
};

export default Card;
