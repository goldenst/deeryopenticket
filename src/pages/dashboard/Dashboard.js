import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import TicketList from "../../components/TicketList";
import "./Dashboard.css";
import TicketFilter from "./TicketFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("tickets");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const ticketFilter = documents ? documents.filter((document) => {
    switch (currentFilter) {
      case "All":
        return true;
      case "Mine":
        let assignedToMe = false;
        document.createdBy.id.forEach((u) => {
          if (user.id === u.id) {
            assignedToMe = true;
          }
        });
        return assignedToMe;
      case "New":
      case "In Progress":
      case "WOA":
      case "WOP":
      case "Parts Here":

      console.log(document.status, currentFilter)
      return document.status === currentFilter

      default:
        return true
    }
  }) : null

  return (
    <div>
      <h2 className="page-title">Ticket Dashboard</h2>
      {error && <p className="error"> {error}</p>}
      {documents && (
        <TicketFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {ticketFilter && <TicketList tickets={ticketFilter} />}
    </div>
  );
};

export default Dashboard;
