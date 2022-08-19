import React from "react";

class FontTester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      size: 32,
    };
  }
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  handleSize = (event) => {
    this.setState({
      size: event.target.value,
    });
  };
  render() {
    let fonts = [
      "Roboto",
      "Potta One",
      "Yusei Magic",
      "Lato",
      "Noto Sans JP",
      "Open Sans",
      "Monteserrat",
      "Fraunces",
      "Imbue",
    ];
    return (
      <section>
        <header className="flex header">
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.inputText}
            placeholder="Type something"
          />
          <label className="flex" htmlFor="">
            <span>{this.state.size}px</span>
            <input
              value={this.state.size}
              onChange={this.handleSize}
              type="range"
            />
          </label>
        </header>
        <ul>
          {fonts.map((font) => (
            <li key={font}>
              <header>
                <h3>{font}</h3>
              </header>
              <p style={{ fontSize: this.state.size + "px", fontFamily: font }}>
                {this.state.inputText}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default FontTester;
