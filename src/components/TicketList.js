import React from "react";
import { Link } from "react-router-dom";
import "./TicketList.css";

const TicketList = ({ tickets }) => {
  return (
    <div className="project-list">
      {tickets.length === 0 && <p>No Tickets</p>}
      {tickets.map((ticket) => (
        <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
          <h4>Customer: {ticket.customer}</h4>
          <h4>Repair Order: {ticket.repairOrder}</h4>
          <p>Status: {ticket.status}</p>
        </Link>
      ))}
    </div>
  );
};

export default TicketList;
