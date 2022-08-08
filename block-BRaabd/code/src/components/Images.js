import React from "react";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "/images/basketball.jpg",
    };
  }

  handleBasketball = () => {
    this.setState({
      img: "/images/basketball.jpg",
    });
  };

  handlePubg = () => {
    this.setState({
      img: "/images/pubg.jpeg",
    });
  };

  handleTiger = () => {
    this.setState({
      img: "/images/tiger.jpg",
    });
  };

  handlePhone = () => {
    this.setState({
      img: "/images/phone.jpg",
    });
  };
  handleLaptop = () => {
    this.setState({
      img: "/images/laptop.jpg",
    });
  };

  handleCricket = () => {
    this.setState({
      img: "/images/cricket.jpg",
    });
  };

  render() {
    return (
      <div className="text-center">
        <button onClick={this.handleBasketball}>Basketball</button>
        <button onClick={this.handlePubg}>PubG</button>
        <button onClick={this.handleTiger}>Tiger</button>
        <button onClick={this.handlePhone}>Phone</button>
        <button onClick={this.handleLaptop}>Laptop</button>
        <button onClick={this.handleCricket}>Cricket</button>
        <figure>
          <img src={this.state.img} width="600" alt="" />
        </figure>
      </div>
    );
  }
}

export default Images;
