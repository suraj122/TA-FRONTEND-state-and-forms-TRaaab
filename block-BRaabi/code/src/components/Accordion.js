import React from "react";
import data from "../data.json";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  handleAns = (i) => {
    this.setState({
      activeIndex: i,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Accordion</h1>
        <ul className="ques">
          {data.map((ques, i) => (
            <li key={i}>
              <h2 onClick={() => this.handleAns(i)}>{ques.Q}</h2>
              {this.state.activeIndex === i ? <p>{ques.A}</p> : ""}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Accordion;
