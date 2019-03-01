import React from "react";
import "../styles/Styles.css";
import "../styles/reset.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";
import Reklame from "../components/Reklame.js";
import Izbor from "../components/Izbor.js";

function Index() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="row">
        <Reklame />
        <Izbor />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
