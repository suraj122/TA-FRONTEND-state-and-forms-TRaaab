import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 0,
      max: Infinity,
    };
  }
  handleStep = (e) => {
    this.setState({
      step: Number(e.target.value),
    });
  };
  handleMax = (e) => {
    this.setState({
      max: Number(e.target.value),
    });
  };
  handleInc = () => {
    if (this.state.counter < this.state.max) {
      if (this.state.step === 5) {
        this.setState({
          counter: this.state.counter + 5,
        });
      } else if (this.state.step === 10) {
        this.setState({
          counter: this.state.counter + 10,
        });
      } else if (this.state.step === 15) {
        this.setState({
          counter: this.state.counter + 15,
        });
      } else {
        this.setState({
          counter: this.state.counter + 1,
        });
      }
    }
  };
  handleDec = () => {
    if (this.state.step === 5) {
      this.setState({
        counter: this.state.counter - 5,
      });
    } else if (this.state.step === 10) {
      this.setState({
        counter: this.state.counter - 10,
      });
    } else if (this.state.step === 15) {
      this.setState({
        counter: this.state.counter - 15,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <section className="text-center">
        <h1>{this.state.counter}</h1>
        <div>
          <h2>Steps</h2>
          <button onClick={this.handleStep} value="5">
            5
          </button>
          <button onClick={this.handleStep} value="10">
            10
          </button>
          <button onClick={this.handleStep} value="15">
            15
          </button>
        </div>
        <div>
          <h2>Max</h2>
          <button onClick={this.handleMax} value="15">
            15
          </button>
          <button onClick={this.handleMax} value="100">
            100
          </button>
          <button onClick={this.handleMax} value="200">
            200
          </button>
        </div>
        <div>
          <button onClick={this.handleInc}>Increment</button>
          <button onClick={this.handleDec}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </section>
    );
  }
}

export default Counter;
