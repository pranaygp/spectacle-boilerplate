import React, { Component } from "react";

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleClick(delta) {
    if (this.props.handleClick) {
      this.props.handleClick(delta);
    } else {
      this.setState({
        value: this.state.value + delta
      });
    }
  }

  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };

    return (
      <div>
        <button style={{
          ...styles,
          background: this.state.value >= 5 ? "green" : "black"
        }} onClick={() => this.handleClick(+1)}>up</button>
        <h1>{this.props.value || this.state.value}</h1>
        <button style={{
          ...styles,
          background: this.state.value <= -5 ? "red" : "black"
        }} onClick={() => this.handleClick(-1)}>down</button>
      </div>
    );
  }
}
