import React from "react";
import "../styles/neww.css";

class Neww extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Karticom" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Potvrđeno je plačanje : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="glavni">
        <div className="sporedni">
          <form onSubmit={this.handleSubmit}>
            Način plačanja:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="karticom">Kartica</option>
              <option value="debitnom karticom">Debitna kartica</option>
              <option value="Pay Pal">Pay Pal</option>
              <option value="Pay Pal kreditom">Pay Pal kredit</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Neww;
