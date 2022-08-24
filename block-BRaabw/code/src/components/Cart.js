import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  render() {
    return (
      <aside className="cart">
        <header onClick={this.handleClick} className="cart-header">
          <img src="/images/bag-icon.png" alt="" />
          <span className="notification">0</span>
        </header>
        {this.state.isVisible ? (
          <div className="cart-box">
            <span onClick={this.handleClick} className="cross">
              X
            </span>
            <header className="text-center box-header">
              <img src="/images/bag-icon.png" alt="" />
              <span>0</span>
              <h3>Cart</h3>
            </header>
          </div>
        ) : (
          ""
        )}
      </aside>
    );
  }
}

export default Cart;
