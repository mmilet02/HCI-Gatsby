import React, { Component } from "react";
import "../styles/Styles.css";
import "../styles/Styles_Prijava.css";
import Header from "../components/Header.js";
import { Link } from "gatsby";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

import ReactDOM from "react-dom";
function validatee(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}

function validate(email, password) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];

  if (email.length === 0) {
    errors.push("E-mail je obavezan!");
  }

  if (email.length < 5) {
    errors.push("E-mail mora imati najmanje 5 znamenki!");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("E-mail bi morao imati znak @!");
  }
  if (email.indexOf(".") === -1) {
    errors.push("E-mail mora imati barem jednu točku!");
  }

  if (password.length < 6) {
    errors.push("Šifra mora imati najmanje 6 znamenki!");
  }
  if (
    email.length !== 0 &&
    email.length > 5 &&
    email.split("").filter(x => x === "@").length === 1 &&
    email.indexOf(".") !== -1 &&
    password.length > 6
  ) {
    errors.push("Čestitam, prijavili ste se");
  }

  return errors;
}

class Prijavaaa extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = ReactDOM.findDOMNode(this._emailInput).value;
    const password = ReactDOM.findDOMNode(this._passwordInput).value;

    const errors = validate(email, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    // submit the data...
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header />
        <Nav />
        <div className="row_1">
          <div className="main_2">
            <div className="prijava">
              <h1>PRIJAVA</h1>
            </div>
            <div className="nesto" />
            <form onSubmit={this.handleSubmit}>
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
              <div className="korisnicko">
                <h2>E-mail:</h2>
                <input
                  ref={emailInput => (this._emailInput = emailInput)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="sifra">
                <h2>Šifra:</h2>
                <input
                  ref={passwordInput => (this._passwordInput = passwordInput)}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="botun">
                <button type="submit">Prijava</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Prijavaaa;
