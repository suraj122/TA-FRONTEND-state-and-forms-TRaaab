import React from "react";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "basketball",
    };
  }

  handleActive = (lable) => {
    this.setState({
      active: lable,
    });
  };

  render() {
    let lables = ["basketball", "pubg", "tiger", "phone", "laptop", "cricket"];
    return (
      <div className="text-center">
        <div>
          {lables.map((lable) => (
            <button
              className={this.state.active === lable ? "active" : ""}
              key={lable}
              onClick={() => {
                this.setState({
                  active: lable,
                });
              }}
            >
              {lable}
            </button>
          ))}
        </div>
        <figure>
          <img src={`/images/${this.state.active}.jpg`} width="600" alt="" />
        </figure>
      </div>
    );
  }
}

export default Images;
