import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    };
  }

  handleClick = (i) => {
    this.setState({
      activeIndex: i,
    });
  };
  handleCross = () => {
    this.setState({
      activeIndex: -1,
    });
  };

  handleUi = () => {
    switch (this.state.activeIndex) {
      case 0:
        return (
          <>
            <button className="default">Defatult Notification</button>
            <span onClick={this.handleCross}>cross</span>
          </>
        );

      case 1:
        return (
          <>
            <button className="success">Success Notification</button>
            <span onClick={this.handleCross}>cross</span>
          </>
        );

      case 2:
        return (
          <>
            <button className="error">Error Notification</button>
            <span onClick={this.handleCross}>cross</span>
          </>
        );

      case 3:
        return (
          <>
            <button className="warning">Warning Notification</button>
            <span onClick={this.handleCross}>cross</span>
          </>
        );

      case 4:
        return (
          <>
            <button className="info">Infor Notification</button>
            <span onClick={this.handleCross}>cross</span>
          </>
        );

      default:
        break;
    }
  };

  render() {
    return (
      <nav>
        <ul>
          {[
            "Show Default",
            "Show success",
            "show error",
            "show warning",
            "show info",
          ].map((item, i) => (
            <li
              key={i}
              className={this.state.activeIndex === i ? "active" : ""}
              onClick={() => this.handleClick(i)}
            >
              {item}
            </li>
          ))}
        </ul>
        {this.handleUi()}
      </nav>
    );
  }
}

export default Header;
