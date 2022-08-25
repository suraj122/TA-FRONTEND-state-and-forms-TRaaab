import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      quantity: 1,
    };
  }
  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  handleIncrease = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  handleDecrease = () => {
    this.state.quantity === 0
      ? this.setState({
          quantity: 0,
        })
      : this.setState({
          quantity: this.state.quantity - 1,
        });
  };

  render() {
    console.log(this.props.cart);
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
            <ul>
              {this.props.cart.map((item, i) => (
                <li>
                  <img src={`/images/products/${item.sku}_2.jpg`} alt="" />
                  <h5>{item.title}</h5>
                  <span>Print Quantity: 1</span>
                  <strong>${item.price}</strong>
                  <button onClick={this.handleIncrease}>+</button>
                  <button onClick={this.handleDecrease}>-</button>
                  <strong onClick={() => this.props.delete(i)}>X</strong>
                </li>
              ))}
            </ul>
            <footer>
              <h5>Subtotoal</h5>
              {this.props.cart.reduce((acc, cv) => acc + cv.price, 0)}
            </footer>
          </div>
        ) : (
          ""
        )}
      </aside>
    );
  }
}

export default Cart;
