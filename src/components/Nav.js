import React from "react";
import { Link } from "gatsby";
import "../styles/Styles.css";

function Nav() {
  return (
    <div className="navbar">
      <Link
        to="/"
        className="left"
        activeStyle={{
          background: "#666",
          color: "white"
        }}
      >
        <i className="fas fa fa-home fa-lg" />
      </Link>
      {/* <Link
        to="Registracija"
        className="right"
        activeStyle={{
          background: "#666",
          color: "white",
          float: "right"
        }}
      >
        Registracija
      </Link> */}
      <Link
        to="Prijavaaa"
        className="right"
        activeStyle={{
          background: "#666",
          color: "white",
          float: "right"
        }}
      >
        Prijava
      </Link>
      <Link
        to="Blog"
        className="right"
        activeStyle={{
          background: "#666",
          color: "white",
          float: "right"
        }}
      >
        Putovanja
      </Link>
      <Link
        to="Profil"
        className="right"
        activeStyle={{
          background: "#666",
          color: "white",
          float: "right"
        }}
      >
        Profil
      </Link>
    </div>
  );
}

export default Nav;
