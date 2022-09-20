import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import RadioList from "../../components/RadioList";
import SearchBar from "../../components/SearchBar";
import "./Dashboard.css";
import RadioFilter from "./RadioFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

const RadioDashboard = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("radios",['sor', 'desc']);
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };



  const radioFilter = documents ? documents.filter((document) => {

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
      case "Ordered":
      case "Parts Here":

        //console.log(document.status, currentFilter)
        return document.status === currentFilter

      default:
        return true
    }
  }) : null



  return (
    <div>
      <h2 className="page-title">Radio Dashboard</h2>
     
      {error && <p className="error"> {error}</p>}
      {documents && (
        
        <RadioFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
        
      )}
      {radioFilter && <RadioList radios={radioFilter} />}
      
    </div>
  );
};

export default RadioDashboard;
