import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarVisible: false,
      isModalVisible: false,
    };
  }

  handleSidebar = () => {
    this.setState((prevState) => {
      return {
        isSidebarVisible: !prevState.isSidebarVisible,
      };
    });
  };

  handleModal = () => {
    this.setState((prevState) => {
      return {
        isModalVisible: !prevState.isModalVisible,
      };
    });
  };

  render() {
    return (
      <>
        <header className="flex">
          <button onClick={this.handleSidebar}>Sidebar</button>
        </header>
        <div className="text-center padding">
          <button onClick={this.handleModal}>Show Modal</button>
        </div>
        {this.state.isSidebarVisible ? (
          <Sidebar showbar={this.handleSidebar} />
        ) : (
          ""
        )}
        {this.state.isModalVisible ? <Modal showbar={this.handleModal} /> : ""}
      </>
    );
  }
}

export default App;

function Sidebar(props) {
  return (
    <div className="sidebar flex">
      <h2>Sidebar</h2>
      <button onClick={props.showbar}>X</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="text-right">
          <button onClick={props.showbar}>X</button>
        </div>

        <h2>Modal Content</h2>
      </div>
    </div>
  );
}
