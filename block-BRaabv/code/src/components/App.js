import React from "react";
import Header from "./Header";
import Signup from "./Signup";
import Message from "./Message";
import Checkbox from "./Checkbox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activIndex: 0,
      first: "",
      last: "",
      date: "",
      email: "",
      address: "",
      message: "",
      error: {
        email: "",
      },
    };
  }

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    let error = this.state.error;
    switch (name) {
      case "email":
        error.email = this.validateEmail(value) ? "" : "Email is not valid";
        break;

      default:
        break;
    }
    this.setState({
      [name]: value,
    });
  };

  handleUi = () => {
    switch (this.state.activIndex) {
      case 0:
        return (
          <Signup
            email={this.state.error.email}
            state={this.state}
            change={this.handleChange}
          />
        );
      case 1:
        return <Message state={this.state} />;
      case 2:
        return <Checkbox state={this.state} />;
      default:
        break;
    }
  };

  handleButton = () => {
    switch (this.state.activIndex) {
      case 0:
        return (
          <div>
            <button onClick={this.handleNext}>Next Step</button>
          </div>
        );
      case 1:
        return (
          <div>
            <button onClick={this.handlePrev}>Back</button>
            <button onClick={this.handleNext}>Next Step</button>
          </div>
        );
      case 2:
        return (
          <div>
            <button onClick={this.handlePrev}>Back</button>
            <button>Submit</button>
          </div>
        );
      default:
        break;
    }
  };

  handleNext = (event) => {
    event.preventDefault();
    this.setState({
      activIndex: this.state.activIndex + 1,
    });
  };
  handlePrev = (event) => {
    event.preventDefault();
    this.setState({
      activIndex: this.state.activIndex - 1,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.first +
        this.state.last +
        this.state.date +
        this.state.email +
        this.state.address +
        this.state.message
    );
  };

  render() {
    return (
      <>
        <div className="container">
          <Header index={this.state.activIndex} />
          <form onSubmit={this.handleSubmit} action="">
            {this.handleUi()}
            <div className="text-right">{this.handleButton()}</div>
          </form>
        </div>
      </>
    );
  }
}

export default App;
