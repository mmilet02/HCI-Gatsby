import React from "react";
import "../styles/Styles.css";
import "../styles/Styles_Prijava.css";
import "../styles/Style_kon.css";
//import { graphql } from "gatsby";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";
import karta from "images/Captur.png";

function Kontakt() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="row_1">
        <div className="main_4">
          <div className="kontakt">
            <h1>KONTAKT</h1>
          </div>
          <div className="infoo">
            <div className="infoo2">
              <p className="pod">
                <i className="fas fa fa-map-marker fa-lg" id="location" />
              </p>
              <p id="location1">Njivice 2, Zagreb</p>
            </div>
            <div className="infoo2">
              <p className="pod">
                <i className="fas fa fa-map-marker fa-lg" id="location" />
              </p>
              <p id="location1">Vukovarska 102, Split</p>
            </div>
            <div className="infoo2">
              <p className="pod">
                <i className="fas fa fa-envelope fa-lg" id="mail1" />
              </p>
              <p id="mail"> MMtours@fesb.hr</p>
            </div>
            <div className="infoo2">
              <p className="pod">
                <i className="fas fa fa-mobile fa-2x" id="phone" />
              </p>
              <p id="phone1"> 091 775 6578</p>
            </div>
            <div className="infoo2">
              <p className="pod">
                <i className="fas fa fa-phone fa-2x" id="phone2" />
              </p>
              <p id="phone3">021 386 609</p>
            </div>
            <div className="infoo2">
              <p className="pod">
                <i className="fas fa fa-user fa-2x" id="osoba" />
              </p>
              <p id="osoba1">Marin Miletić</p>
            </div>
          </div>
          <div className="karta">
            <img className="karta_slika" src={karta} alt="karta" />
          </div>
          <div className="onama">
            <h1>O nama</h1>
            <p>
              Putnička agencija „MM tours“ nalazi se u Splitu i Zagrebu na dvije
              lokacije; Vukovarska 102, 21 000 Spitt i Njivice 2, 10 000 Zagreb.
              U našim poslovnicama očekuje vas naše ljubazno osoblje,
              dugogodišnji turistički radnici, koji će vam sa zadovoljstvom
              pomoći u organiziranju i realizaciji idealnog putovanja.
              <br />
              <br /> Pružanje putnih informacija, pomoć kod planiranja
              putovanja, organizacija smještaja i zrakoplovnog prijevoza samo su
              dio naših usluga. Mi smo vaš pouzdan partner za sve potrebe
              putovanja. Nismo najveća putnička agencija u Hrvatskoj, niti to
              nastojimo biti. Individualan pristup svakom klijentu i
              dugogodišnje iskustvo s mnogim agentima, hotelima i destinacijama
              u našoj ponudi te osobni angažman prema svakom putniku čine nas
              idealnim izborom ukoliko se pripremate na putovanje. <br />
              <br />
              Odlazak na putovanje trebao bi biti opuštajući uvod u ugodno
              provedeno vrijeme izvan vašeg doma. Ako ste umorni od čekanja u
              redovima, prebacivanja s telefona na telefon i masovnih bezličnih
              aranžmana, posjetite nas i opustite se. Kod nas ste vi uvijek na
              prvom mjestu.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontakt;
