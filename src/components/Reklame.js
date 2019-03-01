import React from "react";
import { Link } from "gatsby";
import "../styles/Styles.css";
import svilaja from "images/milesina.jpg";
import zadar from "images/zadar.jpg";
import pariz from "images/pariz.jpg";

function Reklame() {
  return (
    <div className="side">
      <div className="most_popularrr">
        <h2>NAJTRAŽENIJI</h2>
      </div>
      <div className="najnaj">
        <div className="most_popular">
          <Link to="blog/post-three">
            <img className="slike_ponuda" src={svilaja} alt="svilaja" />
          </Link>
        </div>
        <div className="most_popular">
          <Link to="blog/post-five">
            <img className="slike_ponuda" src={pariz} alt="pariz" />
          </Link>
        </div>
        <div className="most_popular">
          <Link to="blog/post-four">
            <img className="slike_ponuda" src={zadar} alt="zadar" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reklame;
