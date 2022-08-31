import React from "react";
import "./Tickets.css";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import TicketSummary from "./TicketSummary";
import TicketComments from "./TicketComment";

const Tickets = () => {
  const { id } = useParams();
  const { error, document } = useDocument("tickets", id);

  if (error) {
    return <div className="error"> {error} </div>;
  }

  if (!document) {
    return <div className="loading"> Loading...</div>;
  }

  return (
    <div className="project-details">
      <TicketSummary ticket={document} />
      <TicketComments ticket={document} />
    </div>
  );
};

export default Tickets;
