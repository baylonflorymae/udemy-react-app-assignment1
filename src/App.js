import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOuput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Mae",
    userMsg: "This is my first activity!",
  };

  userNameChangedHandler = (e) => {
    this.setState({ userName: e.target.value });
  };

  userMsgChangedHandler = (e) => {
    this.setState({ userMsg: e.target.value });
  };

  render() {
    const style = {
      marginTop: "20px",
      font: "inherit",
    };
    return (
      <div className="App" style={style}>
        <UserInput
          userNameChangedHandler={this.userNameChangedHandler}
          userMsgChangedHandler={this.userMsgChangedHandler}
          currentName={this.state.userName}
          currentMsg={this.state.userMsg}
        />
        <UserOuput user={this.state.userName} message={this.state.userMsg} />
      </div>
    );
  }
}

export default App;
