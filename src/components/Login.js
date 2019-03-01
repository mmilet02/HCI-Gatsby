import React, { Component } from "react";
import { navigate } from "gatsby";
import "../styles/Styles.css";
import "../styles/Styles_Prijava.css";
import Header from "../components/Header.js";
import { Link } from "gatsby";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    message: "Enter your credentials",
    invalid: false
  };

  handleUsername = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleSubmit = event => {
    event.preventDefault();

    const status = this.props.handleLogin(this.state);

    let { message, invalid } = this.state;
    if (status.error) {
      message = status.message;
      invalid = true;
      return this.setState({ username: "", password: "", message, invalid });
    }

    navigate(this.props.private);
  };

  render() {
    const style = this.state.invalid
      ? { color: "var(--color-gold, red)" }
      : { color: "var(--color-gatsby)" };

    return (
      <div>
        <Header />
        <Nav />
        <div className="row_1">
          <div className="main_2">
            <div className="prijava">
              <h1>PRIJAVA</h1>
            </div>
            <div className="informacije">
              <form className="" onSubmit={this.handleSubmit}>
                <label>{this.state.message}</label>

                <div className="korisnicko">
                  <p>Korisničko ime:</p>
                  <input
                    autoFocus
                    type="text"
                    className="korisnicko_input"
                    placeholder="Username"
                    onChange={this.handleUsername}
                    value={this.state.username}
                  />
                </div>
                <div className="sifra">
                  <p>Šifra:</p>
                  <input
                    type="password"
                    className="sifra_input"
                    placeholder="Password"
                    onChange={this.handlePassword}
                    value={this.state.password}
                  />
                </div>

                <div className="botun">
                  <Link to="Registracija" className="nemaRacun">
                    Nemate račun?.. Registrijaj te se.
                  </Link>
                  <input type="submit" className="" value={"Sign in"} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginForm;
