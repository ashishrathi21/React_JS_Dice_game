import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold">{score}</h1>
      <p className="text-2xl font-bold">Total Score</p>
    </div>
  );
};

export default TotalScore;
