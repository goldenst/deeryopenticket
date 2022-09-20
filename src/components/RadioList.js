import React from "react";
import { Link } from "react-router-dom";
import "./TicketList.css";

const RadioList = ({ radios }) => {
  return (
    <div className="project-list">
      {radios.length === 0 && <p>No Radios</p>}
      {radios.map((radio) => (
        <Link to={`/radios/${radio.id}`} key={radio.id}>
          <h4>Customer: {radio.customer}</h4>
          <h4> Order #: {" "} {radio.sor}</h4>
          <p>Status: {radio.status}</p>
          <p>MUST RETURN RADIO By: {radio.returnBy}</p>
        </Link>
      ))}
    </div>
  );
};

export default RadioList;
