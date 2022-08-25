import React from "react";
import data from "../data.json";
import Cart from "./Cart";
import Header from "./Header";
import Product from "./Product";
import Sizes from "./Sizes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: false,
      descending: false,
      size: "",
      cart: [],
    };
  }
  handleChange = (event) => {
    if (event.target.value === "highest") {
      this.setState({
        ascending: true,
        descending: false,
      });
    } else if (event.target.value === "lowest") {
      this.setState({
        descending: true,
        ascending: false,
      });
    }
  };

  handleFilter = (size) => {
    this.setState({
      size: size,
    });
  };

  handleClick = (product) => {
    let cart = this.state.cart;
    this.setState(() => {
      return cart.push(product);
    });
  };

  handleDelete = (i) => {
    let cart = this.state.cart;
    this.setState(() => {
      return cart.splice(i, 1);
    });
  };

  render() {
    let sizes = [...new Set(data.map((item) => item.availableSizes).flat())];
    return (
      <>
        <Header total={data.length} sort={this.handleChange} />
        <main className="flex">
          <Sizes sizes={sizes} filter={this.handleFilter} />
          <Product
            addItem={this.handleClick}
            data={data}
            sort={this.state}
            filter={this.state}
          />
          <Cart delete={this.handleDelete} cart={this.state.cart} />
        </main>
      </>
    );
  }
}

export default App;
