import React from "react";
import danceImg from "../assets/home_page/logo.png";
import logoDocument from "../assets/home_page/health-book.png";
import logoCalendar from "../assets/home_page/logo_calendrier.png";
import logoTree from "../assets/home_page/logo_arbre.png";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-homepage">
      <h1 className="app-title">Kid's stories</h1>
      <div className="grid-container">
        <NavLink to="/activities" className="navlink">
          <div className="pink-card">
            <p>Activities</p>
            <img className="img-dance" src={danceImg} alt="dance" />
          </div>
        </NavLink>
        <NavLink to="/kidstree" className="navlink">
          <div className="blue-card">
            <p>Kid's Tree</p>
            <img className="img-tree" src={logoTree} alt="dance" />
          </div>
        </NavLink>
        <div className="blue-card">
          <p>Health Carnet</p>
          <img className="img-document" src={logoDocument} alt="document" />
        </div>
        <div className="pink-card">
          <p>Stages</p>
          <img className="img-calendar" src={logoCalendar} alt="Calendar" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
