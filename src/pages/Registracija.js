import React from "react";
import "../styles/Styles.css";
import "../styles/Styles_Prijava.css";
import "../styles/Style_reg.css";
//import { graphql } from "gatsby";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

function Registracija() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="row_1">
        <div className="main_3">
          <div className="registracija">
            <h1>REGISTRACIJA</h1>
          </div>

          <div className="korisnicko">
            <p>Korisničko ime:</p>
            <input type="text" name="korisničkoIme" />
          </div>

          <div className="email">
            <p>E-mail:</p>
            <input type="text" name="email" />
          </div>

          <div className="ime">
            <p>Ime:</p>
            <input type="text" name="Ime" />
          </div>
          <div className="prezime">
            <p>Prezime:</p>
            <input type="text" name="Prezime" />
          </div>

          <div className="sifra1">
            <p>Šifra:</p>
            <input type="text" name="šifra" />
          </div>

          <div className="ponovi_sifra">
            <p>Ponovite Šifru:</p>
            <input type="text" name="ponovišifra" />
          </div>

          <div className="botun1">
            <input type="submit" value="Registracija" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registracija;
