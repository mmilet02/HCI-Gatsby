import React from "react";
//import { Link } from "gatsby";
import "../styles/Styles.css";
import afrika from "images/afrika.png";
import azija from "images/azija.png";
import australija from "images/australija.png";
import europa from "images/europa.png";
import jamerika from "images/jAmerika.png";
import samerika from "images/sAmerika.png";
import ContinentImage from "../components/ContinentImage.js";

class Izbor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ContinetImages: [
        { image: afrika, name: "Afrika" },
        { image: samerika, name: "S. Amerika" },
        { image: azija, name: "Azija" },
        { image: australija, name: "Australija" },
        { image: europa, name: "Europa" },
        { image: jamerika, name: "J .Amerika" }
      ]
    };
  }

  render() {
    return (
      <div className="main">
        <div id="biraj">
          <p className="birajtekst"> ODABERITE ŽELJENU DESTINACIJU</p>
        </div>
        <div className="kontinenti">
          {this.state.ContinetImages.map(object => (
            <ContinentImage
              continentImage={object.image}
              countryName={object.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Izbor;
