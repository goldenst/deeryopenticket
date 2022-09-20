import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import { VscRadioTower } from "react-icons/vsc";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <p>Hello: {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact="true" to={"/"}>
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Tickets</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/create"}>
                <img src={AddIcon} alt="create icon" />
                <span>New Ticket</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/radios"}>
              <img src={DashboardIcon} alt="dashboard icon" />
                <span>Radio/SOR</span>
              </NavLink>
              <li>
              <NavLink to={"/new-radio"}>
              <img src={AddIcon} alt="create icon" />
                <span>Radio/SOR</span>
              </NavLink>
            </li>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
