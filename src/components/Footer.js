import React from "react";
import { Link } from "gatsby";
import "../styles/Styles.css";

function Footer() {
  return (
    <div className="footer">
      <Link
        to="Kontakt"
        activeStyle={{
          color: "white",
          background: "#333"
        }}
      >
        Kontakt
      </Link>
      <p>MMtours &copy Marin Miletić, 2019</p>
      <div />
    </div>
  );
}

export default Footer;
