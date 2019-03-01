import React, { Component } from "react";
import "../styles/Styles.css";
import "../styles/Styles_Prijava.css";
import { Link } from "gatsby";

class Loogin extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["korisnicko_ime"] = "";
      fields["šifra"] = "";
      this.setState({ fields: fields });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["korisnicko_ime"]) {
      formIsValid = false;
      errors["korisnicko_ime"] = "*Please enter your korisnicko_ime.";
    }

    if (typeof fields["korisnicko_ime"] !== "undefined") {
      if (!fields["korisnicko_ime"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["korisnicko_ime"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["šifra"]) {
      formIsValid = false;
      errors["šifra"] = "*Please enter your password.";
    }

    if (typeof fields["šifra"] !== "undefined") {
      if (
        !fields["šifra"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
      ) {
        formIsValid = false;
        errors["šifra"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <form
          method="post"
          name="userRegistrationForm"
          onSubmit={this.submituserRegistrationForm}
        >
          <div className="informacije">
            <div className="korisnicko">
              <p>Korisničko ime:</p>
              <input
                type="text"
                className="korisnicko_input"
                name="username"
                value={this.state.fields.username}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className="sifra">
              <p>Šifra:</p>
              <input
                type="password"
                name="password"
                className="sifra_input"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.password}</div>
            </div>
          </div>
          <div className="botun">
            <Link to="Registracija" className="nemaRacun">
              Nemate račun?.. Registrijaj te se.
            </Link>
            <input type="submit" value="Prijava" />
          </div>
        </form>
      </div>
    );
  }
}
export default Loogin;
