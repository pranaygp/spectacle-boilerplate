import React, { Component } from "react";

export default class HelloWorld extends Component {
  
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
        <h1 style={styles}>Hello World</h1>
      </div>
    );
  }
}
