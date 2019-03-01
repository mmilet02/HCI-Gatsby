import React from "react";
import { Link } from "gatsby";

const ContinentImage = props => {
  const ime = props.countryName;
  return (
    <Link to="Blog" params={{ ime }}>
      <div className="kon" id={props.countryName}>
        <img className="slika" src={props.continentImage} alt="afrika" />

        <p className="konText">{props.countryName}</p>
      </div>
    </Link>
  );
};

export default ContinentImage;
