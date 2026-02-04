import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetails = () => {
  const { name } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Team Details</h1>
      <h2>Playing… {name}</h2>
    </div>
  );
};
