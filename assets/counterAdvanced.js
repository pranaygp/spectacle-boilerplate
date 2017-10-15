import React, { Component } from "react";
import Counter from "./counter";

export default class CounterAdvanced extends Component {
  
  constructor() {
    super();
    this.state = {
      counters: 0,
      counterVals: []
    }
  }

  showCounters(){
    const arr = [];

    for (let i = 0; i < this.state.counters; i++) {
      arr.push(
        <li key={i} style={{ float: "left" }}>
          <Counter value={this.state.counterVals[i]} handleClick={(delta) => this.handleCounterClick(i, delta)}/>
        </li>
      );
    }

    return arr;
  }

  handleClick(del) {
    if (del === "add") {
      this.setState({
        counterVals: this.state.counterVals.concat([0]),
        counters: this.state.counters + 1
      });
    } else {
      this.setState({
        counterVals: this.state.counterVals.slice(0, -1),
        counters: this.state.counters - 1
      });
    }
  }

  handleCounterClick(i, delta) {
    const newCounterVals = this.state.counterVals;

    newCounterVals[i] += delta;

    this.setState({
      counterVals: newCounterVals
    });
  }

  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 200,
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
        <ul style={{listStyle: "none"}}>
        {this.showCounters()}
        </ul>
        <button style={styles} onClick={() => this.handleClick("sub")}>
          sub
        </button>
        <button style={styles} onClick={() => this.handleClick("add")}>
          add
        </button>
        <h3>{this.state.counterVals.reduce((p, c) => p + c , 0)}</h3>
      </div>
    );
  }
}
