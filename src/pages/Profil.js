import React from "react";
import "../styles/Styles.css";
import "../styles/Profil.css";
import "../styles/reset.css";
//import { graphql } from "gatsby";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";
import Neww from "../components/Neww.js";

function Profil() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="row_333">
        <div className="main_33">
          <div className="slikaa" />
        </div>
        <div className="main_333">
          <p> Ime: Zdravko </p>
          <p> Prezime: Mamić </p>
          <p> Zanimanje: Poštar </p>
          <p> Prebivalište: Hrvatska </p>
          <p> Spol: M </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profil;
