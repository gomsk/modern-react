import "./ValidationSample.css";
import React, { Component } from "react";

class ValidationSample extends Component {
  state = {
    clicked: false,
    validated: false,
    password: "",
  };

  onChange = (e) => {
    this.setState(() => ({
      password: e.target.value,
    }));
  };

  onClick = () => {
    this.setState(() => ({
      clicked: true,
      validated: this.state.password === "0000",
    }));
    this.z.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          onChange={this.onChange}
          value={this.state.password}
          ref={(ref) => (this.z = ref)}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.onClick}>확인</button>
      </div>
    );
  }
}

export default ValidationSample;
