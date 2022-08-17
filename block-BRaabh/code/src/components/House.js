import React from "react";
import data from "../data.json";
import Result from "./Result";

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: "",
      activePerson: "",
      message: "Lets play",
    };
  }
  handleHouse = (house) => {
    this.setState({
      activeHouse: house,
    });
  };
  handlePerson = (people) => {
    this.setState({
      activePerson: people.name,
    });
  };
  render() {
    let allHouse = data.map((house) => house.name);
    let allPeople = data.reduce((acc, house) => {
      acc = acc.concat(house.people);
      return acc;
    }, []);
    return (
      <div className="flex">
        <aside>
          <section>
            <h2>Select One House</h2>
            <ul className="house">
              {allHouse.map((house) => (
                <li onClick={() => this.handleHouse(house)} key={house}>
                  {house}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Select One Person</h2>
            <ul className="people">
              {allPeople.map((people) => (
                <li onClick={() => this.handlePerson(people)} key={people.name}>
                  {people.name}
                </li>
              ))}
            </ul>
          </section>
        </aside>
        <Result />
      </div>
    );
  }
}

export default House;
