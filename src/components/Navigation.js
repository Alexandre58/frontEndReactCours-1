import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="nav_div_container">
      <Logo />
      <ul className="ul_navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="li_navigation"> Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="li_navigation">À propos de nous</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
