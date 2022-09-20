import React from "react";
import "../tickets/Tickets.css";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import RadioSummary from "./RadioSummary";
//import RadioComments from "./RadioComment";

const Radio = () => {
  const { id } = useParams();
  const { error, document } = useDocument("radios", id);

  

  if (error) {
    return <div className="error"> {error} </div>;
  }

  if (!document) {
    return <div className="loading"> Loading...</div>;
  }

  return (
    <div className="project-details">
      <RadioSummary radio={document} />
      {/* <RadioComments radio={document} /> */}
    </div>
  );
};

export default Radio;
