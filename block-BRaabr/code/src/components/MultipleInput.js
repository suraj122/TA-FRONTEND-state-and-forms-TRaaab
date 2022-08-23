import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      message: "",
    };
    this.inputFile = React.createRef();
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.text +
        this.state.date +
        this.state.message +
        this.inputFile.current.files[0].name
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <fieldset>
          <label htmlFor="text">Text Input</label>
          <input
            onChange={this.handleInput}
            type="text"
            name="text"
            id="text"
            value={this.state.text}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="date">Date Input</label>
          <input
            onChange={this.handleInput}
            type="date"
            name="date"
            id="date"
            value={this.state.date}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="file">File Input</label>
          <input ref={this.inputFile} type="file" name="file" id="file" />
        </fieldset>
        <fieldset>
          <label htmlFor="read">Input Readonly</label>
          <input
            type="text"
            value="This can be copied only"
            name="read"
            id="read"
            onChange={this.handleInput}
            readOnly
          />
        </fieldset>
        <fieldset>
          <label htmlFor="disabled">Input Disabled</label>
          <input
            onChange={this.handleInput}
            type="text"
            name="disabled"
            id="disabled"
            disabled
          />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={this.handleInput}
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={this.state.message}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="message">Textarea Disabled</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={this.handleInput}
            disabled
          ></textarea>
        </fieldset>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default MultipleInput;
