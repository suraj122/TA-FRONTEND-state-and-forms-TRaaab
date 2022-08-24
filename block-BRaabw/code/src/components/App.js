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

  render() {
    let sizes = [...new Set(data.map((item) => item.availableSizes).flat())];
    return (
      <>
        <Header total={data.length} sort={this.handleChange} />
        <main className="flex">
          <Sizes sizes={sizes} filter={this.handleFilter} />
          <Product data={data} sort={this.state} filter={this.state} />
          <Cart />
        </main>
      </>
    );
  }
}

export default App;
