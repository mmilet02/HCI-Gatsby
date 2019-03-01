import React from "react";
import "../styles/Styles.css";
import "../styles/Styles_grad.css";
//import { graphql } from "gatsby";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

function Index() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="row_3">
        <div className="main_3">
          <div className="naslov">
            <p>PARIZ</p>
          </div>
          <div className="slika_grad">
            <img
              className="slikaa"
              src="C:\Users\MILE\Desktop\HCI - MMtourse\HCI Layout\Image\pariz.jpg"
              alt="hh"
            />
          </div>
          <div className="opis_grad">
            <p>
              Otkud zapravo početi? Možda najbolje u caféu s croissantom i
              francuskim doručkom, njime jutro dobiva pravi domaći štih. S
              razgledavanjem grada je najbolje krenuti s Ile de la Cité, otoka
              na rijeci Seini na kojem se nalazi Notre Dame de Paris, jedan od
              glavnih pariških simbola. Legenda kaže da je biskup imao viziju o
              najljepšoj gradskoj katedrali te ju je nacrtao u blatu pokraj
              budućeg gradilišta. Zamišljeno, ostvareno, i to u 12. stoljeću,
              istinsko gotičko remek-djelo. Glas o njezinoj ljepoti i
              jedinstvenim skulpturama pročuo se po cijeloj Francuskoj, a svoju
              popularnost je najviše stekla romanom 'Zvonar crkve Notre Dame'.
              Koliko značenje ova katedrala ima za grad, dokazuje i Point zéro,
              glavna polazišna točka otkud se mjere udaljenosti za sve francuske
              ceste, a nalazi se na trgu ispred crkve. U neposrednoj blizini je
              i Sainte Chappelle, predivna crkva s plavim svodovima i obojenim
              vitrajima, koju je najljepše vidjeti kad je sunčan dan jer onda
              pokazuje svu svoju raskoš. Njena pak legenda kaže da je sagrađena
              kako bi se u njoj čuvala Kristova kruna od trnja i dio križa.
              Nakon što pređete na desnu obalu Seine, doći ćete do centra
              Georges Pompidou, građevine prepune raznih boja i cijevi koje
              omeđuju glavnu konstrukciju i koja je naopačke preokrenula
              suvremenu arhitekturu. Nešto dalje je i Palais Royal, palača u
              kojoj je danas smještena jedna od glavnih francuskih institucija,
              Državno ustavno vijeće.
            </p>
            <input type="submit" value="Kupi" />
          </div>
          <div className="info_grad">
            <p> Cijena: 1000kn </p>
            <p> Broj dana: 5 </p>
            <p> Hotel: 5 zvijezdica </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Index;
