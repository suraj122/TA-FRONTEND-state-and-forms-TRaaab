import React from "react";
import Card from "./Card";
import data from "../data.json";

class MenuCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    let categories = [...new Set(data.map((menu) => menu.category))];
    return (
      <>
        <nav className="navbar container mt-8">
          <ul className="flex justify-center items-center">
            {categories.map((category, index) => (
              <li>
                <button
                  className={this.state.activeIndex === index ? "active" : ""}
                  onClick={() => this.handleIndex(index)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="container grid gap-8 py-20">
          {data
            .filter(
              (menu) => menu.category === categories[this.state.activeIndex]
            )
            .map((menu) => (
              <Card key={menu.id} menu={menu} />
            ))}
        </section>
      </>
    );
  }
}
export default MenuCards;
